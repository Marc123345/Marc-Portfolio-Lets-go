"use client";

import { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { List, X } from 'lucide-react';

const SERIF = 'var(--font-heading)';
const EASE = [0.22, 1, 0.36, 1] as const;
const OFFSET = 110; // clears the fixed header

/*
 * Table of contents for every blog post, built from the post's own
 * `.prose h2` headings at runtime so the 48 post files stay untouched.
 *  1. "In this article" block inserted above the article body
 *  2. Fixed side index with scroll-spy on wide screens (≥1400px)
 *  3. Floating "Contents" pill + sheet below that width
 * Mounted once in app/blog/layout.tsx; renders nothing on the blog index.
 */

type Item = { id: string; text: string; el: HTMLElement; mins: number };

function slugify(s: string) {
  return s.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 60) || 'section';
}

/* words between this heading and the next one → minutes */
function sectionMinutes(h: HTMLElement, next?: HTMLElement) {
  let words = 0;
  let n: Element | null = h.nextElementSibling;
  while (n && n !== next) {
    words += (n.textContent || '').trim().split(/\s+/).filter(Boolean).length;
    n = n.nextElementSibling;
  }
  return Math.max(1, Math.round(words / 230));
}

function scrollToEl(el: HTMLElement) {
  const lenis = (window as unknown as { __lenis?: { scrollTo: (t: HTMLElement, o: object) => void } }).__lenis;
  if (lenis) lenis.scrollTo(el, { offset: -OFFSET + 20 });
  else window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - OFFSET + 20, behavior: 'smooth' });
}

export default function BlogTOC() {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const [items, setItems] = useState<Item[]>([]);
  const [slot, setSlot] = useState<HTMLElement | null>(null);
  const [active, setActive] = useState(-1);
  const [progress, setProgress] = useState(0);
  const [inArticle, setInArticle] = useState(false);
  const [sheet, setSheet] = useState(false);
  const bounds = useRef<{ start: HTMLElement; end: HTMLElement } | null>(null);

  // collect headings once the post has rendered
  useEffect(() => {
    let slotEl: HTMLElement | null = null;
    let tries = 0;
    let timer = 0;
    const build = () => {
      const heads = Array.from(document.querySelectorAll<HTMLElement>('main .prose h2')).filter(
        (h) => !h.closest('form') && (h.textContent || '').trim().length > 1,
      );
      if (heads.length < 3) {
        if (tries++ < 10) timer = window.setTimeout(build, 150);
        return;
      }
      const used = new Set<string>();
      const list = heads.map((h, i) => {
        let id = h.id || slugify(h.textContent || '');
        while (used.has(id)) id += '-2';
        used.add(id);
        h.id = id;
        h.style.scrollMarginTop = `${OFFSET}px`;
        return { id, text: (h.textContent || '').trim(), el: h, mins: sectionMinutes(h, heads[i + 1]) };
      });
      // slot for the inline block, just above the first prose container
      const prose = heads[0].closest('.prose') as HTMLElement;
      slotEl = document.createElement('div');
      slotEl.setAttribute('data-blog-toc', '');
      prose.parentElement?.insertBefore(slotEl, prose);
      const lastProse = heads[heads.length - 1].closest('.prose') as HTMLElement;
      bounds.current = { start: heads[0], end: lastProse };
      setSlot(slotEl);
      setItems(list);

      const hash = decodeURIComponent(window.location.hash.slice(1));
      const target = list.find((x) => x.id === hash);
      if (target) window.setTimeout(() => scrollToEl(target.el), 300);
    };
    timer = window.setTimeout(build, 50);
    return () => {
      window.clearTimeout(timer);
      slotEl?.remove();
      setSlot(null);
      setItems([]);
      setActive(-1);
      setSheet(false);
    };
  }, [pathname]);

  // scroll-spy + progress
  useEffect(() => {
    if (!items.length) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const line = window.innerHeight * 0.3;
        let idx = -1;
        for (let i = 0; i < items.length; i++) {
          if (items[i].el.getBoundingClientRect().top - line <= 0) idx = i;
          else break;
        }
        setActive(idx);
        const b = bounds.current;
        if (b) {
          const s = b.start.getBoundingClientRect().top + window.scrollY - line;
          const e = b.end.getBoundingClientRect().bottom + window.scrollY - window.innerHeight;
          const y = window.scrollY;
          setProgress(Math.min(1, Math.max(0, (y - s) / Math.max(1, e - s))));
          setInArticle(y > s - 40 && y < e + window.innerHeight * 0.4);
        }
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [items]);

  useEffect(() => {
    if (!sheet) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setSheet(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [sheet]);

  const go = useCallback(
    (i: number) => {
      const it = items[i];
      if (!it) return;
      setSheet(false);
      window.history.replaceState(null, '', `#${it.id}`);
      scrollToEl(it.el);
    },
    [items],
  );

  if (!items.length) return null;
  const total = items.reduce((n, x) => n + x.mins, 0);
  const pad = (n: number) => String(n).padStart(2, '0');

  return (
    <>
      {/* 1. Inline contents block */}
      {slot &&
        createPortal(
          <nav aria-label="In this article" className="not-prose mb-14 border-y border-white/10 py-8">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#A3D1FF]">In this article</span>
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/40">
                {pad(items.length)} sections · {total} min read
              </span>
            </div>
            <ol className="md:columns-2 gap-x-10 list-none m-0 p-0">
              {items.map((it, i) => (
                <li key={it.id} className="border-b border-white/[0.07] m-0 p-0 break-inside-avoid">
                  <a
                    href={`#${it.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      go(i);
                    }}
                    className="group flex items-baseline gap-4 py-3 no-underline"
                  >
                    <span className="text-[10px] font-mono tracking-[0.2em] text-white/30 group-hover:text-[#A3D1FF] transition-colors w-6 shrink-0" style={{ fontVariantNumeric: 'tabular-nums' }}>
                      {pad(i + 1)}
                    </span>
                    <span
                      className="flex-1 text-white/80 group-hover:text-white transition-[color,transform] duration-300 group-hover:translate-x-1 leading-snug"
                      style={{ fontFamily: SERIF, fontSize: '1.08rem' }}
                    >
                      {it.text}
                    </span>
                    <span className="text-[10px] font-mono tracking-[0.15em] text-white/30 shrink-0">{it.mins} min</span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>,
          slot,
        )}

      {/* 2. Fixed side index, wide screens */}
      <AnimatePresence>
        {inArticle && (
          <motion.nav
            aria-label="Article sections"
            className="hidden min-[1400px]:block fixed z-30 left-6 top-1/2 -translate-y-1/2"
            style={{ width: 'min(260px, calc((100vw - 896px) / 2 - 56px))' }}
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -16 }}
            transition={{ duration: 0.4, ease: EASE }}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/40">Contents</span>
              <span className="text-[10px] font-mono tracking-[0.2em] text-[#A3D1FF]" style={{ fontVariantNumeric: 'tabular-nums' }}>
                {pad(Math.max(active + 1, 0))}/{pad(items.length)}
              </span>
            </div>
            <div className="relative pl-4">
              <span className="absolute left-0 top-0 bottom-0 w-[1px] bg-white/10" />
              <motion.span
                className="absolute -left-[0.5px] top-0 w-[2px] bg-[#A3D1FF] origin-top"
                style={{ height: '100%', scaleY: progress }}
              />
              <ol className="list-none m-0 p-0 max-h-[60vh] overflow-y-auto [scrollbar-width:none] space-y-1">
                {items.map((it, i) => {
                  const on = i === active;
                  return (
                    <li key={it.id}>
                      <a
                        href={`#${it.id}`}
                        onClick={(e) => {
                          e.preventDefault();
                          go(i);
                        }}
                        aria-current={on ? 'location' : undefined}
                        className={`block py-1.5 text-[13px] leading-snug transition-colors ${
                          on ? 'text-white' : i < active ? 'text-white/45 hover:text-white' : 'text-white/35 hover:text-white'
                        }`}
                      >
                        <span className={`inline-block transition-transform duration-300 ${on ? 'translate-x-1' : ''}`}>{it.text}</span>
                      </a>
                    </li>
                  );
                })}
              </ol>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* 3. Floating pill + sheet, below 1400px */}
      <AnimatePresence>
        {inArticle && active >= 0 && !sheet && (
          <motion.button
            type="button"
            onClick={() => setSheet(true)}
            aria-label="Open table of contents"
            className="min-[1400px]:hidden fixed z-40 bottom-5 left-1/2 flex items-center gap-3 pl-2 pr-4 py-2 rounded-full bg-[#0f1115]/90 backdrop-blur border border-white/15 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.8)] max-w-[calc(100vw-140px)]"
            initial={{ opacity: 0, y: 24, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: 24, x: '-50%' }}
            transition={{ duration: reduce ? 0 : 0.35, ease: EASE }}
          >
            <span className="relative w-8 h-8 shrink-0 grid place-items-center">
              <svg viewBox="0 0 36 36" className="absolute inset-0 -rotate-90" aria-hidden>
                <circle cx="18" cy="18" r="16" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="2" />
                <circle cx="18" cy="18" r="16" fill="none" stroke="#A3D1FF" strokeWidth="2" strokeDasharray={`${progress * 100.5} 100.5`} />
              </svg>
              <List className="w-3.5 h-3.5 text-white" />
            </span>
            <span className="text-[10px] font-mono tracking-[0.2em] text-[#A3D1FF] shrink-0" style={{ fontVariantNumeric: 'tabular-nums' }}>
              {pad(active + 1)}/{pad(items.length)}
            </span>
            <span className="text-sm text-white truncate">{items[active]?.text}</span>
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {sheet && (
          <motion.div
            className="min-[1400px]:hidden fixed inset-0 z-[150] bg-black/60 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSheet(false)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Table of contents"
              className="w-full sm:max-w-lg bg-[#0b0c0f] border border-white/10 max-h-[80vh] flex flex-col"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{ duration: 0.35, ease: EASE }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
                <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/50">
                  Contents · {pad(items.length)} sections
                </span>
                <button type="button" onClick={() => setSheet(false)} aria-label="Close contents" className="w-9 h-9 grid place-items-center border border-white/15 text-white">
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className="h-[2px] bg-white/10">
                <div className="h-full bg-[#A3D1FF]" style={{ width: `${progress * 100}%` }} />
              </div>
              <ol className="list-none m-0 p-0 overflow-y-auto">
                {items.map((it, i) => {
                  const on = i === active;
                  return (
                    <li key={it.id} className="border-b border-white/[0.06]">
                      <a
                        href={`#${it.id}`}
                        onClick={(e) => {
                          e.preventDefault();
                          go(i);
                        }}
                        className={`flex items-baseline gap-4 px-5 py-3.5 ${on ? 'bg-[#A3D1FF]/[0.06]' : ''}`}
                      >
                        <span className={`text-[10px] font-mono tracking-[0.2em] w-6 shrink-0 ${on ? 'text-[#A3D1FF]' : 'text-white/30'}`}>{pad(i + 1)}</span>
                        <span className={`flex-1 leading-snug ${on ? 'text-white' : 'text-white/70'}`} style={{ fontFamily: SERIF, fontSize: '1.05rem' }}>
                          {it.text}
                        </span>
                        <span className="text-[10px] font-mono text-white/30 shrink-0">{it.mins} min</span>
                      </a>
                    </li>
                  );
                })}
              </ol>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
