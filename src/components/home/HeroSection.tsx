"use client";

import { useEffect, useId, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';

import MagneticButton from '@/components/MagneticButton';
import SilkCanvas from '@/components/SilkCanvas';
import { SpinBadge } from '@/components/MotionAccents';

/*
 * Hero: the name is a window onto the work.
 * "MARC FRIEDMAN" is an SVG mask; behind it, full-page captures of live
 * client sites pan top to bottom like a scroll recording and rotate every
 * few seconds. Scrolling grows the letters and opens the mask until the
 * current site fills the screen, then the page moves on.
 * Captures live in /public/images/hero-reel (1280px wide webp).
 */

const CLIENT_AVATARS = [
  'https://ik.imagekit.io/qcvroy8xpd/1682479506906.jpeg?updatedAt=1754019693073',
  'https://ik.imagekit.io/qcvroy8xpd/4c91361b-27ee-453b-88e0-af3026cac747_1_ro3hez_e_background_removal_f_png_vkfbub.png?updatedAt=1754023286922',
  'https://ik.imagekit.io/qcvroy8xpd/1732338426448%20(1).jpeg?updatedAt=1749337717019',
];

type Reel = { src: string; h: number; title: string; tag: string; href: string };
// h = image height at 1280px wide
const REEL: Reel[] = [
  { src: '/images/hero-reel/fandc.webp', h: 1867, title: 'Friedman & Cohen', tag: 'B2B · Procurement', href: '/work/case-studies/friedman-cohen/' },
  { src: '/images/hero-reel/h2h.webp', h: 3733, title: 'H2H Marketing', tag: 'Agency Brand', href: '/work/case-studies/h2h-marketing/' },
  { src: '/images/hero-reel/paving.webp', h: 5333, title: 'Paving Leads', tag: 'SEO · Lead Gen', href: '/work/case-studies/paving-leads/' },
  { src: '/images/hero-reel/askafrica.webp', h: 4622, title: 'Ask Africa', tag: 'Research · Brand', href: '/work/case-studies/ask-africa/' },
  { src: '/images/hero-reel/binns.webp', h: 800, title: 'Binns Media Group', tag: 'Media Platform', href: '/work/case-studies/binns-media/' },
];
const HOLD = 7000; // ms per site
const EASE = [0.22, 1, 0.36, 1] as const;
const SERIF = 'var(--font-heading)';

/* One site capture, sized to the mask width and panned top → bottom. */
function ReelImage({ reel, w, h, reduce }: { reel: Reel; w: number; h: number; reduce: boolean | null }) {
  // on phones show the site larger (a centred crop) so details read inside the letters
  const iw = w < 640 ? w * 2.2 : w;
  const imgH = (reel.h / 1280) * iw;
  const travel = Math.max(0, imgH - h);
  return (
    <motion.g
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.9, ease: 'easeInOut' }}
    >
      <motion.image
        href={reel.src}
        x={-(iw - w) / 2}
        width={iw}
        height={imgH}
        preserveAspectRatio="xMidYMin slice"
        initial={{ y: 0 }}
        animate={reduce || travel === 0 ? { y: 0 } : { y: -travel }}
        transition={{ duration: Math.max(6, travel / 110), ease: 'linear' }}
        style={{ filter: 'brightness(1.3) saturate(1.15) contrast(1.05)' }}
      />
    </motion.g>
  );
}

export default function HeroSection() {
  const reduce = useReducedMotion();
  const uid = useId().replace(/:/g, '');
  const wrapRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  // stage size drives the SVG coordinate system so the name always fits
  const [size, setSize] = useState({ w: 1280, h: 800 });
  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([e]) => {
      const { width, height } = e.contentRect;
      if (width && height) setSize({ w: Math.round(width), h: Math.round(height) });
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // site rotation, paused while the mask is fully open so it doesn't flicker
  const [idx, setIdx] = useState(0);
  const [hold, setHold] = useState(false);
  useEffect(() => {
    if (reduce || hold) return;
    const t = setTimeout(() => setIdx((i) => (i + 1) % REEL.length), HOLD);
    return () => clearTimeout(t);
  }, [idx, hold, reduce]);
  useEffect(() => {
    const next = REEL[(idx + 1) % REEL.length];
    const img = new window.Image();
    img.src = next.src;
  }, [idx]);

  // scroll: grow letters, open the mask, fade the copy
  const { scrollYProgress } = useScroll({ target: wrapRef, offset: ['start start', 'end end'] });
  const p = useSpring(scrollYProgress, { stiffness: 120, damping: 26, mass: 0.4 });
  const nameScale = useTransform(p, [0, 0.75], [1, reduce ? 1 : 5]);
  const reveal = useTransform(p, [0.25, 0.7], [0, reduce ? 0 : 1]);
  const outline = useTransform(p, [0, 0.35], [0.35, 0]);
  const copyOpacity = useTransform(p, [0, 0.22], [1, 0]);
  const copyY = useTransform(p, [0, 0.22], [0, -40]);
  const capOpacity = useTransform(p, [0.6, 0.8], [0, 1]);
  const footage = useTransform(p, [0.3, 0.7], [0.72, 1]);
  useMotionValueEvent(scrollYProgress, 'change', (v) => setHold(v > 0.6));

  // pointer nudges the footage inside the letters
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const fx = useSpring(useTransform(mx, (v) => v * -28), { stiffness: 60, damping: 18 });
  const fy = useSpring(useTransform(my, (v) => v * -20), { stiffness: 60, damping: 18 });
  const onMove = (e: React.PointerEvent) => {
    if (reduce || e.pointerType !== 'mouse') return;
    mx.set(e.clientX / window.innerWidth - 0.5);
    my.set(e.clientY / window.innerHeight - 0.5);
  };

  // name layout in stage px
  const { w, h } = size;
  const narrow = w < 640;
  const pad = narrow ? 16 : Math.max(24, w * 0.035);
  const fs = narrow ? w * 0.31 : Math.min(w * 0.2, h * 0.34);
  const line2 = narrow ? h * 0.5 : h - Math.max(190, h * 0.2);
  const line1 = line2 - fs * 0.86;
  const origin = `${w * 0.52}px ${line2 - fs * 0.3}px`;
  const reel = REEL[idx];

  return (
    <section
      id="home"
      ref={wrapRef}
      onPointerMove={onMove}
      className={`relative w-full bg-black -mt-[4.236rem] ${reduce ? '' : 'h-[230vh]'}`}
    >
      <div className="sticky top-0 h-[100svh] min-h-[560px] overflow-hidden">
        <SilkCanvas className="opacity-60" />

        <div ref={stageRef} className="absolute inset-0">
          <svg
            viewBox={`0 0 ${w} ${h}`}
            width={w}
            height={h}
            className="absolute inset-0 w-full h-full"
            aria-hidden
          >
            <defs>
              <mask id={`name-${uid}`} maskUnits="userSpaceOnUse" x={0} y={0} width={w} height={h}>
                <rect width={w} height={h} fill="black" />
                <motion.g style={{ scale: nameScale, transformOrigin: origin, transformBox: 'view-box' }}>
                  <text
                    x={pad}
                    y={line1}
                    fill="white"
                    style={{ fontFamily: SERIF, fontSize: fs, fontWeight: 500, fontStyle: 'italic', letterSpacing: '-0.03em' }}
                  >
                    Marc
                  </text>
                  <text
                    x={pad}
                    y={line2}
                    fill="white"
                    textLength={w - pad * 2}
                    lengthAdjust="spacingAndGlyphs"
                    style={{ fontFamily: SERIF, fontSize: fs, fontWeight: 500, letterSpacing: '-0.03em' }}
                  >
                    FRIEDMAN
                  </text>
                </motion.g>
                <motion.rect width={w} height={h} fill="white" style={{ opacity: reveal }} />
              </mask>
              <linearGradient id={`base-${uid}`} x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#A3D1FF" />
                <stop offset="0.5" stopColor="#3b5f86" />
                <stop offset="1" stopColor="#0f1c2b" />
              </linearGradient>
              <linearGradient id={`shade-${uid}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0.35" stopColor="#000" stopOpacity="0" />
                <stop offset="0.75" stopColor="#000" stopOpacity="0.7" />
                <stop offset="1" stopColor="#000" stopOpacity="0.92" />
              </linearGradient>
            </defs>

            <g mask={`url(#name-${uid})`}>
              <rect width={w} height={h} fill={`url(#base-${uid})`} />
              <motion.g style={{ x: fx, y: fy, opacity: footage }}>
                <g transform={`translate(-30 -30) scale(${(w + 60) / w})`}>
                  <AnimatePresence initial={false}>
                    <ReelImage key={reel.src} reel={reel} w={w} h={h} reduce={reduce} />
                  </AnimatePresence>
                </g>
              </motion.g>
              <motion.rect width={w} height={h} fill={`url(#shade-${uid})`} style={{ opacity: reveal }} />
            </g>

            {/* hairline outline so the letters read before the footage loads */}
            <motion.g style={{ scale: nameScale, transformOrigin: origin, transformBox: 'view-box', opacity: outline }}>
              <text x={pad} y={line1} fill="none" stroke="#A3D1FF" strokeWidth={1}
                style={{ fontFamily: SERIF, fontSize: fs, fontWeight: 500, fontStyle: 'italic', letterSpacing: '-0.03em' }}>
                Marc
              </text>
              <text x={pad} y={line2} fill="none" stroke="#fff" strokeWidth={1}
                textLength={w - pad * 2} lengthAdjust="spacingAndGlyphs"
                style={{ fontFamily: SERIF, fontSize: fs, fontWeight: 500, letterSpacing: '-0.03em' }}>
                FRIEDMAN
              </text>
            </motion.g>
          </svg>
        </div>

        {/* headline sits in the space right of "Marc" */}
        <motion.div
          className="absolute z-10"
          style={{
            opacity: copyOpacity,
            y: copyY,
            left: narrow ? pad : w * 0.47,
            right: pad,
            top: narrow ? line2 + fs * 0.35 : line1 - fs * 0.72,
          }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: EASE }}
            className="text-white m-0 uppercase"
            style={{
              fontFamily: SERIF,
              fontWeight: 500,
              fontSize: narrow ? 'clamp(1.6rem, 7.5vw, 2.2rem)' : 'clamp(1.6rem, 2.6vw, 2.75rem)',
              lineHeight: 1,
              letterSpacing: '-0.02em',
              textWrap: 'balance',
              maxWidth: 560,
            }}
          >
            Custom web design for B2B <span className="text-[#A3D1FF]">&amp;</span> service businesses
          </motion.h1>
        </motion.div>

        {/* bottom bar: pitch, CTAs, proof, now-showing */}
        <motion.div
          className="absolute inset-x-0 bottom-0 z-10 pl-16 pr-4 sm:pr-6 lg:pl-20 lg:pr-[3.5%] pb-6 md:pb-8"
          style={{ opacity: copyOpacity, y: copyY }}
        >
          <div className="grid gap-6 md:grid-cols-12 md:items-end border-t border-white/10 pt-5 md:pt-6">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6, ease: EASE }}
              className="md:col-span-4 text-white/70 m-0 text-[15px] md:text-base leading-relaxed max-w-[440px]"
            >
              React &amp; Next.js sites that load in under 2 seconds and turn visitors
              into customers. 50+ projects shipped across 3 continents.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.75, ease: EASE }}
              className="md:col-span-4 flex flex-wrap items-center gap-x-6 gap-y-3"
            >
              <MagneticButton strength={20}>
                <Link
                  href="/contact/"
                  className="inline-flex items-center gap-3 bg-white text-black font-medium px-6 py-3 hover:bg-[#A3D1FF] transition-colors group"
                >
                  <span>Book a Call</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </MagneticButton>
              <div className="flex items-center gap-3">
                <ul className="flex p-0 m-0 list-none">
                  {CLIENT_AVATARS.map((src, i) => (
                    <li
                      key={src}
                      className="rounded-full overflow-hidden border-2 border-black"
                      style={{ flex: '0 0 34px', width: 34, height: 34, marginLeft: i === 0 ? 0 : -10 }}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={src} alt="Client" className="w-full h-full object-cover" />
                    </li>
                  ))}
                </ul>
                <div className="leading-tight">
                  <div className="text-sm font-semibold text-white">
                    <span className="text-[#A3D1FF]" aria-hidden>★★★★★</span> 5.0
                  </div>
                  <div className="text-[11px] text-white/50">25 reviews · Google, Clutch, LinkedIn</div>
                </div>
              </div>
            </motion.div>

            {/* now showing + site index */}
            <div className="hidden md:flex md:col-span-4 items-end justify-end gap-5">
              <div className="text-right min-w-0">
                <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/40 mb-1">Through the letters</div>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={reel.title}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.35 }}
                    className="text-white truncate"
                    style={{ fontFamily: SERIF, fontSize: '1.3rem' }}
                  >
                    {reel.title} <span className="text-white/40 text-xs font-mono uppercase tracking-[0.2em]">{reel.tag}</span>
                  </motion.div>
                </AnimatePresence>
              </div>
              <div className="flex gap-1.5 pb-2" role="tablist" aria-label="Choose the site shown in the name">
                {REEL.map((r, i) => (
                  <button
                    key={r.src}
                    type="button"
                    role="tab"
                    aria-selected={i === idx}
                    aria-label={`Show ${r.title}`}
                    onClick={() => setIdx(i)}
                    className="group h-6 flex items-center"
                  >
                    <span className={`block h-[2px] transition-all duration-500 ${i === idx ? 'w-8 bg-[#A3D1FF]' : 'w-4 bg-white/25 group-hover:bg-white/60'}`} />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* after the mask opens: what you're looking at */}
        {!reduce && (
          <motion.div
            className="absolute inset-x-0 bottom-0 z-20 pl-16 pr-4 sm:pr-6 lg:pl-20 lg:pr-[3.5%] pb-8 md:pb-12 flex items-end justify-between gap-6 pointer-events-none"
            style={{ opacity: capOpacity }}
          >
            <div>
              <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#A3D1FF] mb-3">
                {String(idx + 1).padStart(2, '0')} / {String(REEL.length).padStart(2, '0')} · {reel.tag}
              </div>
              <div className="text-white leading-[0.95] tracking-[-0.03em]" style={{ fontFamily: SERIF, fontSize: 'clamp(2.25rem, 6vw, 5.5rem)' }}>
                {reel.title}
              </div>
              <Link
                href={reel.href}
                className="pointer-events-auto mt-5 inline-flex items-center gap-2 text-sm text-white border-b border-white/40 hover:text-[#A3D1FF] hover:border-[#A3D1FF] pb-0.5 transition-colors"
              >
                Read the case study <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="pointer-events-auto hidden sm:block">
              <SpinBadge text="SEE ALL WORK • CASE FILES • " href="/work/" label="See all work" size={110} />
            </div>
          </motion.div>
        )}

        {/* scroll cue */}
        {!reduce && (
          <motion.div
            aria-hidden
            className="absolute left-1/2 -translate-x-1/2 bottom-2 z-10 hidden md:block"
            style={{ opacity: copyOpacity }}
          >
            <span className="block w-[1px] h-6 bg-gradient-to-b from-transparent to-[#A3D1FF] mx-bob" />
          </motion.div>
        )}
      </div>
    </section>
  );
}
