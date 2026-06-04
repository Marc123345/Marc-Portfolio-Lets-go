"use client";

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight, FileDown } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const STORAGE_KEY = 'lm_popup_dismissed_at';
// Non-aggressive: only after the visitor has spent real time AND engaged
// by scrolling. Both must be true before the popup ever shows.
const MIN_TIME_MS = 30000;
const SCROLL_THRESHOLD_PX = 500;
// Re-offer the guide a week after it was last dismissed.
const COOLDOWN_MS = 7 * 24 * 60 * 60 * 1000;
const ACCENT = '#A3D1FF';

export default function ResourcePopup() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Never interrupt the page that already hosts the offer.
  const onResources = pathname?.startsWith('/resources');

  useEffect(() => {
    if (onResources) return;

    let recentlyDismissed = false;
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) recentlyDismissed = Date.now() - Number(raw) < COOLDOWN_MS;
    } catch {
      /* localStorage unavailable (private mode) — just show it */
    }
    if (recentlyDismissed) return;

    // Gate on BOTH conditions: enough time on page AND a real scroll.
    let timeReady = false;
    let scrolled = false;
    let fired = false;

    const cleanup = () => {
      window.clearTimeout(timer);
      window.removeEventListener('scroll', onScroll);
    };
    const maybeOpen = () => {
      if (fired || !timeReady || !scrolled) return;
      fired = true;
      setOpen(true);
      cleanup();
    };
    const onScroll = () => {
      if (window.scrollY > SCROLL_THRESHOLD_PX) {
        scrolled = true;
        maybeOpen();
      }
    };

    const timer = window.setTimeout(() => {
      timeReady = true;
      maybeOpen();
    }, MIN_TIME_MS);
    window.addEventListener('scroll', onScroll, { passive: true });

    return cleanup;
  }, [onResources]);

  const dismiss = () => {
    setOpen(false);
    try {
      window.localStorage.setItem(STORAGE_KEY, String(Date.now()));
    } catch {
      /* ignore */
    }
  };

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') dismiss();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6"
        >
          <button
            aria-label="Close"
            onClick={dismiss}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-default"
          />

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-md bg-[#0b0b0b] border border-white/10 overflow-hidden"
            role="dialog"
            aria-modal="true"
            aria-labelledby="lm-popup-title"
          >
            {/* Ambient glow */}
            <div
              aria-hidden
              className="absolute -top-24 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full blur-[120px] pointer-events-none"
              style={{ background: `${ACCENT}24` }}
            />

            <div className="absolute top-4 left-4 w-2 h-2 rounded-full bg-white/20" />
            <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-white/20" />

            <button
              aria-label="Close popup"
              onClick={dismiss}
              className="absolute top-4 right-4 z-10 w-9 h-9 flex items-center justify-center border border-white/15 text-white/60 hover:text-white hover:border-white/40 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="relative p-7 sm:p-8">
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 border text-[10px] font-mono uppercase tracking-[0.28em]"
                style={{ borderColor: `${ACCENT}40`, color: ACCENT, background: `${ACCENT}0d` }}
              >
                <FileDown className="w-3.5 h-3.5" />
                Free Guide
              </div>

              <h2
                id="lm-popup-title"
                className="text-white text-2xl sm:text-3xl font-bold leading-tight mb-3"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                The Landing Page{' '}
                <em className="italic" style={{ color: ACCENT }}>Lead Magnet</em>
              </h2>

              <p className="text-white/60 leading-relaxed mb-7 text-sm">
                Grab my free guide to building landing pages that actually convert
                visitors into leads. Enter your email and the PDF is yours.
              </p>

              <Link
                href="/resources"
                onClick={dismiss}
                className="group inline-flex w-full items-center justify-center gap-2 bg-white text-black text-sm font-semibold px-6 py-3.5 hover:bg-[#A3D1FF] transition-colors"
              >
                Get the Free Guide
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>

              <button
                onClick={dismiss}
                className="block w-full text-center mt-4 text-xs font-mono uppercase tracking-[0.2em] text-white/35 hover:text-white/60 transition-colors"
              >
                No thanks
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
