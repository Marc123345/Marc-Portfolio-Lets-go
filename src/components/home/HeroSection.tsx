"use client";

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import {
  motion,
  useReducedMotion,
  useMotionValue,
  useSpring,
  useTransform,
  type Variants,
} from 'framer-motion';

import MagneticButton from '@/components/MagneticButton';

const MARC_PORTRAIT =
  'https://ik.imagekit.io/qcvroy8xpd/PW8VUKH.png?updatedAt=1759693058055&tr=f-webp';

const CLIENT_AVATARS = [
  'https://ik.imagekit.io/qcvroy8xpd/1682479506906.jpeg?updatedAt=1754019693073',
  'https://ik.imagekit.io/qcvroy8xpd/4c91361b-27ee-453b-88e0-af3026cac747_1_ro3hez_e_background_removal_f_png_vkfbub.png?updatedAt=1754023286922',
  'https://ik.imagekit.io/qcvroy8xpd/1732338426448%20(1).jpeg?updatedAt=1749337717019',
];

const EASE = [0.22, 1, 0.36, 1] as const;
const HEADLINE = ['Custom', 'Web', 'Design', 'for', 'B2B', '&', 'Service', 'Businesses'];

/* Deterministic particle field — trimmed to 16 for perf */
const PARTICLES = Array.from({ length: 16 }, (_, i) => ({
  left: `${(i * 61 + 7) % 100}%`,
  top: `${(i * 43 + 13) % 100}%`,
  size: 2 + (i % 3),
  delay: (i % 6) * 0.5,
  dur: 5 + (i % 4),
}));

/* ── Tech-stack chips that float around the laptop ─────────────────── */
const STACK: { key: string; pos: React.CSSProperties; node: React.ReactNode }[] = [
  {
    key: 'react',
    pos: { top: '4%', left: '-6%' },
    node: (
      <svg viewBox="-11.5 -10.232 23 20.464" className="w-6 h-6" aria-hidden>
        <circle r="2.05" fill="#A3D1FF" />
        <g fill="none" stroke="#A3D1FF" strokeWidth="1">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    ),
  },
  {
    key: 'next',
    pos: { top: '2%', right: '-4%' },
    node: <span className="font-heading text-lg font-bold leading-none">N</span>,
  },
  {
    key: 'ts',
    pos: { top: '40%', left: '-10%' },
    node: <span className="font-heading text-xs font-bold tracking-wider">TS</span>,
  },
  {
    key: 'tailwind',
    pos: { top: '34%', right: '-9%' },
    node: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#A3D1FF" aria-hidden>
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
      </svg>
    ),
  },
];

/* ── Twinkling 4-point star ────────────────────────────────────────── */
function Sparkle({
  style,
  size = 18,
  delay = 0,
  reduce,
}: {
  style: React.CSSProperties;
  size?: number;
  delay?: number;
  reduce: boolean | null;
}) {
  return (
    <motion.svg
      aria-hidden
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className="absolute pointer-events-none"
      style={{ ...style, willChange: 'transform, opacity' }}
      initial={{ opacity: 0, scale: 0 }}
      animate={reduce ? { opacity: 0.8, scale: 1 } : { opacity: [0, 1, 0], scale: [0.3, 1, 0.3], rotate: [0, 120, 220] }}
      transition={reduce ? { duration: 0.4 } : { duration: 2.8, repeat: Infinity, delay, ease: 'easeInOut' }}
    >
      <path
        d="M12 0c.6 5.9 5.5 10.8 11.4 11.4-5.9.6-10.8 5.5-11.4 11.4-.6-5.9-5.5-10.8-11.4-11.4C6.5 10.8 11.4 5.9 12 0z"
        fill="#A3D1FF"
      />
    </motion.svg>
  );
}

/* ── Morphing aurora blob — fewer + lighter blur for perf ──────────── */
function Aurora({
  className,
  color,
  reduce,
  dur = 16,
  delay = 0,
}: {
  className: string;
  color: string;
  reduce: boolean | null;
  dur?: number;
  delay?: number;
}) {
  return (
    <motion.div
      aria-hidden
      className={`absolute rounded-full pointer-events-none mix-blend-screen ${className}`}
      style={{ background: color, filter: 'blur(72px)', willChange: 'transform' }}
      animate={reduce ? {} : { x: [0, 60, -40, 0], y: [0, -50, 40, 0], scale: [1, 1.2, 0.92, 1] }}
      transition={reduce ? { duration: 0 } : { duration: dur, delay, repeat: Infinity, ease: 'easeInOut' }}
    >
      {''}
    </motion.div>
  );
}

/* ── Drifting outline shape for the backdrop ───────────────────────── */
function FloatingShape({
  className,
  children,
  drift = 30,
  spin = 18,
  delay = 0,
  reduce,
}: {
  className: string;
  children: React.ReactNode;
  drift?: number;
  spin?: number;
  delay?: number;
  reduce: boolean | null;
}) {
  return (
    <motion.div
      aria-hidden
      className={`absolute pointer-events-none text-[#A3D1FF]/25 ${className}`}
      style={{ willChange: 'transform' }}
      animate={reduce ? {} : { y: [-drift, drift, -drift], rotate: [0, 360] }}
      transition={
        reduce
          ? { duration: 0 }
          : {
              y: { duration: 7 + delay, repeat: Infinity, ease: 'easeInOut' },
              rotate: { duration: spin, repeat: Infinity, ease: 'linear' },
            }
      }
    >
      {children}
    </motion.div>
  );
}

/* ── Open-laptop graphic (pure SVG) ────────────────────────────────── */
function LaptopScreen() {
  return (
    <svg viewBox="0 0 360 240" className="w-full h-auto" aria-hidden>
      <defs>
        <linearGradient id="lp-bezel" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#3a3f4a" />
          <stop offset="1" stopColor="#1c2028" />
        </linearGradient>
        <linearGradient id="lp-screen" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#11151c" />
          <stop offset="1" stopColor="#080a0e" />
        </linearGradient>
        <radialGradient id="lp-glow" cx="50%" cy="60%" r="62%">
          <stop offset="0" stopColor="#A3D1FF" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#A3D1FF" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect x="4" y="4" width="352" height="232" rx="18" fill="url(#lp-bezel)" />
      <rect x="16" y="16" width="328" height="208" rx="10" fill="url(#lp-screen)" />
      {/* faint UI lines */}
      <g opacity="0.18" fill="#A3D1FF">
        <rect x="40" y="48" width="120" height="9" rx="4" />
        <rect x="40" y="70" width="190" height="7" rx="3" />
        <rect x="40" y="86" width="150" height="7" rx="3" />
        <rect x="40" y="150" width="90" height="7" rx="3" />
        <rect x="40" y="166" width="160" height="7" rx="3" />
      </g>
      <rect x="16" y="16" width="328" height="208" rx="10" fill="url(#lp-glow)" />
      <circle cx="180" cy="10" r="2" fill="#4a4f5a" />
    </svg>
  );
}

function LaptopBase() {
  return (
    <svg viewBox="0 0 440 88" className="w-full h-auto" aria-hidden>
      <defs>
        <linearGradient id="lp-base" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#454a55" />
          <stop offset="0.5" stopColor="#23272f" />
          <stop offset="1" stopColor="#14171d" />
        </linearGradient>
        <linearGradient id="lp-lip" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#2c313b" />
          <stop offset="1" stopColor="#0f1217" />
        </linearGradient>
      </defs>
      {/* keyboard deck (perspective trapezoid) */}
      <path d="M82 6 H358 L420 60 H20 Z" fill="url(#lp-base)" />
      {/* trackpad hint */}
      <rect x="196" y="20" width="48" height="9" rx="3" fill="#11151c" opacity="0.55" />
      {/* front lip */}
      <path d="M20 60 H420 L412 78 Q408 84 398 84 H42 Q32 84 28 78 Z" fill="url(#lp-lip)" />
      <rect x="200" y="62" width="40" height="4" rx="2" fill="#0a0c10" opacity="0.7" />
    </svg>
  );
}

export default function HeroSection() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  // Mouse-parallax — pointer drives layered depth (motion values, no re-render)
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 55, damping: 18, mass: 0.6 });
  const sy = useSpring(my, { stiffness: 55, damping: 18, mass: 0.6 });

  const bgX = useTransform(sx, (v) => v * -40);
  const bgY = useTransform(sy, (v) => v * -40);
  const fgX = useTransform(sx, (v) => v * 60);
  const fgY = useTransform(sy, (v) => v * 60);

  const handleMove = (e: React.MouseEvent<HTMLElement>) => {
    if (reduce) return;
    const r = sectionRef.current?.getBoundingClientRect();
    if (!r) return;
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };

  const wordVariants: Variants = {
    hidden: { opacity: 0, y: '0.65em', rotateX: -75 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 0.7, delay: 0.25 + i * 0.07, ease: EASE },
    }),
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      onMouseMove={handleMove}
      className="relative w-full overflow-hidden bg-black pt-24 pb-12 md:pt-[140px] md:pb-20"
    >
      {/* ── Aurora + particle backdrop (parallax) ───────────────────── */}
      <motion.div aria-hidden className="absolute inset-0 pointer-events-none" style={{ x: bgX, y: bgY, willChange: 'transform' }}>
        <Aurora className="top-[-12%] left-[6%] w-[520px] h-[520px]" color="rgba(163,209,255,0.18)" reduce={reduce} dur={18} />
        <Aurora className="bottom-[-15%] right-[2%] w-[600px] h-[600px]" color="rgba(120,170,255,0.15)" reduce={reduce} dur={22} delay={2} />

        {PARTICLES.map((p, i) => (
          <motion.span
            key={i}
            className="absolute rounded-full bg-[#A3D1FF]"
            style={{ left: p.left, top: p.top, width: p.size, height: p.size, willChange: 'transform, opacity' }}
            animate={reduce ? { opacity: 0.4 } : { opacity: [0, 0.9, 0], y: [0, -22, 0] }}
            transition={reduce ? { duration: 0 } : { duration: p.dur, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
      </motion.div>

      {/* Drifting outline shapes */}
      <motion.div aria-hidden className="absolute inset-0 pointer-events-none" style={{ x: bgX, y: bgY, willChange: 'transform' }}>
        <FloatingShape className="top-[14%] left-[6%] hidden md:block" reduce={reduce} drift={30} spin={20}>
          <svg width="70" height="70" viewBox="0 0 70 70" fill="none">
            <circle cx="35" cy="35" r="33" stroke="currentColor" strokeWidth="2" />
          </svg>
        </FloatingShape>
        <FloatingShape className="top-[8%] right-[10%] hidden lg:block" reduce={reduce} drift={38} spin={15} delay={2}>
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
            <path d="M32 3 61 58H3L32 3Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
          </svg>
        </FloatingShape>
        <FloatingShape className="bottom-[12%] left-[14%] hidden lg:block" reduce={reduce} drift={24} spin={24} delay={1}>
          <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
            <path d="M25 4V46M4 25H46" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        </FloatingShape>
      </motion.div>

      <div className="container mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* ── Left — pitch stack ──────────────────────────────────── */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Eyebrow */}
            <motion.div
              className="inline-flex items-center gap-2.5 mb-6 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
            >
              <motion.span
                className="w-2 h-2 rounded-full bg-[#A3D1FF]"
                aria-hidden
                animate={reduce ? {} : { scale: [1, 1.6, 1], opacity: [1, 0.4, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              />
              <span
                className="font-heading uppercase text-white/70"
                style={{ fontSize: 13, letterSpacing: '0.22em', fontWeight: 500 }}
              >
                Marc Friedman — Web Design &amp; Development
              </span>
            </motion.div>

            {/* Headline — word-by-word reveal with gradient sheen */}
            <h1
              className="font-heading uppercase leading-[0.95] m-0"
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 500,
                fontSize: 'clamp(2.5rem, 5.2vw, 76px)',
                color: '#FCFCFB',
                letterSpacing: '-0.02em',
                textWrap: 'balance',
                perspective: 800,
              }}
            >
              {HEADLINE.map((word, i) => {
                const isAccent = word === 'Custom';
                const isAmp = word === '&';
                return (
                  <motion.span
                    key={`${word}-${i}`}
                    custom={i}
                    variants={wordVariants}
                    initial="hidden"
                    animate="show"
                    className="inline-block"
                    style={{ marginRight: '0.26em', transformOrigin: 'bottom', transformStyle: 'preserve-3d' }}
                  >
                    {isAccent ? (
                      <motion.span
                        className="inline-block"
                        style={{
                          backgroundImage: 'linear-gradient(110deg,#A3D1FF 10%,#ffffff 45%,#A3D1FF 80%)',
                          backgroundSize: '220% 100%',
                          WebkitBackgroundClip: 'text',
                          backgroundClip: 'text',
                          color: 'transparent',
                        }}
                        animate={reduce ? {} : { backgroundPosition: ['0% 0%', '220% 0%'] }}
                        transition={{ duration: 4.5, repeat: Infinity, ease: 'linear' }}
                      >
                        {word}
                      </motion.span>
                    ) : isAmp ? (
                      <span className="text-[#A3D1FF]">&amp;</span>
                    ) : (
                      word
                    )}
                  </motion.span>
                );
              })}
            </h1>

            <motion.p
              className="text-white/80 mx-auto lg:mx-0 mt-6"
              style={{ fontFamily: 'var(--font-body)', fontSize: 18, lineHeight: '30px', fontWeight: 400, maxWidth: 540 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.85, ease: EASE }}
            >
              I build custom React &amp; Next.js sites that load in under 2
              seconds and turn visitors into customers — 50+ projects shipped
              across 3 continents.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-3 mt-9"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0, ease: EASE }}
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
              {/* Skip-the-tour path for high-intent visitors */}
              <Link
                href="/work/"
                className="inline-flex items-center gap-2 text-white/70 hover:text-[#A3D1FF] text-sm font-medium border-b border-white/20 hover:border-[#A3D1FF] pb-0.5 transition-colors group"
              >
                <span>Just show me the work</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </motion.div>

            {/* Trust strip */}
            <motion.div
              className="flex items-center justify-center lg:justify-start gap-4 mt-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.15, ease: EASE }}
            >
              <ul className="flex p-0 m-0 list-none">
                {CLIENT_AVATARS.map((src, i) => (
                  <li
                    key={src}
                    className="rounded-full overflow-hidden border-2 border-black"
                    style={{ flex: '0 0 44px', width: 44, height: 44, marginLeft: i === 0 ? 0 : -12 }}
                  >
                    <img src={src} alt="Happy client" className="w-full h-full object-cover rounded-full" />
                  </li>
                ))}
              </ul>
              <div className="text-left">
                <div
                  className="flex items-center gap-2"
                  style={{ fontFamily: 'var(--font-body)', fontSize: 16, fontWeight: 600, color: '#FCFCFB' }}
                >
                  <span className="text-[#A3D1FF]" aria-hidden>★★★★★</span>
                  <span>5.0</span>
                  <span className="text-white/50 font-normal">· 25 reviews</span>
                </div>
                <p className="text-white/60 m-0" style={{ fontSize: 13, lineHeight: '18px' }}>
                  Google, Clutch &amp; LinkedIn
                </p>
              </div>
            </motion.div>
          </div>

          {/* ── Right — Marc bursting out of a laptop (parallax) ─────── */}
          <motion.div
            className="lg:col-span-5 flex justify-center"
            style={{ x: fgX, y: fgY, willChange: 'transform' }}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: EASE }}
          >
            <div className="relative" style={{ width: 'min(440px, 86vw)', aspectRatio: '5 / 6', perspective: 1100 }}>
              {/* Conic light-beam erupting from the screen */}
              <motion.div
                aria-hidden
                className="absolute left-1/2 rounded-full pointer-events-none"
                style={{
                  width: '120%',
                  height: '120%',
                  bottom: '8%',
                  x: '-50%',
                  willChange: 'transform',
                  background:
                    'conic-gradient(from 0deg, rgba(163,209,255,0) 0deg, rgba(163,209,255,0.4) 55deg, rgba(163,209,255,0) 130deg, rgba(163,209,255,0) 360deg)',
                  filter: 'blur(34px)',
                  opacity: 0.5,
                }}
                animate={reduce ? {} : { rotate: 360 }}
                transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
              />

              {/* Orbiting dashed rings around the rig */}
              <motion.div
                aria-hidden
                className="absolute left-1/2 rounded-full border border-dashed border-[#A3D1FF]/25 pointer-events-none"
                style={{ width: '108%', height: '74%', bottom: '12%', x: '-50%', willChange: 'transform' }}
                animate={reduce ? {} : { rotate: 360 }}
                transition={{ duration: 34, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                aria-hidden
                className="absolute left-1/2 rounded-full border border-dashed border-white/10 pointer-events-none"
                style={{ width: '92%', height: '60%', bottom: '18%', x: '-50%', willChange: 'transform' }}
                animate={reduce ? {} : { rotate: -360 }}
                transition={{ duration: 26, repeat: Infinity, ease: 'linear' }}
              />

              {/* Laptop screen (behind Marc) */}
              <motion.div
                className="absolute"
                style={{ left: '7%', right: '7%', bottom: '12%', zIndex: 5 }}
                initial={{ opacity: 0, y: 24, scaleY: 0.6 }}
                animate={{ opacity: 1, y: 0, scaleY: 1 }}
                transition={{ duration: 0.6, delay: 0.35, ease: EASE }}
              >
                <LaptopScreen />
              </motion.div>

              {/* Shockwave ring fired when Marc launches */}
              {!reduce && (
                <motion.div
                  aria-hidden
                  className="absolute left-1/2 rounded-full border-2 border-[#A3D1FF]/60 pointer-events-none"
                  style={{ width: '40%', height: '20%', bottom: '40%', x: '-50%', zIndex: 8 }}
                  initial={{ scale: 0.2, opacity: 0 }}
                  animate={{ scale: [0.2, 2.4], opacity: [0.8, 0] }}
                  transition={{ duration: 1, delay: 0.95, ease: 'easeOut' }}
                />
              )}

              {/* Speed lines */}
              {!reduce &&
                [-44, -22, 0, 22, 44].map((dx, i) => (
                  <motion.div
                    key={dx}
                    aria-hidden
                    className="absolute bg-gradient-to-t from-transparent to-[#A3D1FF]/70 pointer-events-none"
                    style={{ width: 2, height: 46, left: `calc(50% + ${dx}px)`, bottom: '38%', zIndex: 8 }}
                    initial={{ opacity: 0, scaleY: 0.2, y: 30 }}
                    animate={{ opacity: [0, 0.9, 0], scaleY: [0.2, 1, 0.2], y: [30, -40] }}
                    transition={{ duration: 0.7, delay: 0.85 + i * 0.04, ease: 'easeOut' }}
                  />
                ))}

              {/* MARC — shoots up out of the screen with a 3D tilt */}
              <motion.div
                className="absolute"
                style={{ left: '50%', bottom: '30%', width: '58%', x: '-50%', zIndex: 10, transformOrigin: 'bottom center', transformStyle: 'preserve-3d', willChange: 'transform' }}
                initial={{ y: 90, scale: 0.45, opacity: 0, rotateX: 38 }}
                animate={{ y: 0, scale: 1, opacity: 1, rotateX: 0 }}
                transition={{ type: 'spring', stiffness: 120, damping: 11, delay: 0.7 }}
                whileHover={reduce ? undefined : { scale: 1.04, y: -8 }}
              >
                <motion.div
                  animate={reduce ? {} : { y: [0, -12, 0], rotate: [0, 1.2, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1.6 }}
                >
                  <Image
                    src={MARC_PORTRAIT}
                    alt="Marc Friedman — Custom Web Design for B2B & Service Businesses"
                    width={440}
                    height={550}
                    priority
                    className="block w-full h-auto"
                    style={{
                      borderRadius: 18,
                      border: '3px solid rgba(255,255,255,0.14)',
                      boxShadow: '0 40px 90px -20px rgba(0,0,0,0.7), 0 0 60px -10px rgba(163,209,255,0.35)',
                    }}
                  />
                </motion.div>
              </motion.div>

              {/* Laptop base / keyboard (in front — Marc tucks behind it) */}
              <motion.div
                className="absolute"
                style={{ left: 0, right: 0, bottom: 0, zIndex: 20 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25, ease: EASE }}
              >
                <LaptopBase />
              </motion.div>

              {/* Floating tech-stack chips */}
              {STACK.map((chip, i) => (
                <motion.div
                  key={chip.key}
                  aria-hidden
                  className="absolute z-30 flex items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] text-white backdrop-blur-md shadow-[0_8px_30px_-8px_rgba(0,0,0,0.6)]"
                  style={{ width: 52, height: 52, willChange: 'transform', ...chip.pos }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={
                    reduce
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 1, scale: 1, y: [0, i % 2 === 0 ? -12 : 12, 0] }
                  }
                  transition={
                    reduce
                      ? { duration: 0.4, delay: 1.1 + i * 0.1 }
                      : {
                          opacity: { duration: 0.5, delay: 1.2 + i * 0.12, ease: EASE },
                          scale: { duration: 0.5, delay: 1.2 + i * 0.12, ease: EASE },
                          y: { duration: 3 + i * 0.4, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 },
                        }
                  }
                >
                  {chip.node}
                </motion.div>
              ))}

              {/* Floating glass stat cards */}
              <motion.div
                aria-hidden
                className="absolute z-30 rounded-xl border border-white/10 bg-black/40 px-3.5 py-2 backdrop-blur-md shadow-[0_10px_30px_-10px_rgba(0,0,0,0.7)]"
                style={{ top: '16%', right: '-12%', willChange: 'transform' }}
                initial={{ opacity: 0, x: 20 }}
                animate={reduce ? { opacity: 1, x: 0 } : { opacity: 1, x: 0, y: [0, -14, 0] }}
                transition={
                  reduce
                    ? { duration: 0.5, delay: 1.4 }
                    : {
                        opacity: { duration: 0.6, delay: 1.4, ease: EASE },
                        x: { duration: 0.6, delay: 1.4, ease: EASE },
                        y: { duration: 4.2, repeat: Infinity, ease: 'easeInOut' },
                      }
                }
              >
                <div className="text-[#A3D1FF] font-heading text-xl font-bold leading-none">98<span className="text-white/40 text-sm">/100</span></div>
                <div className="text-white/60 text-[11px] uppercase tracking-wider mt-0.5">PageSpeed</div>
              </motion.div>

              <motion.div
                aria-hidden
                className="absolute z-30 flex items-center gap-2 rounded-xl border border-white/10 bg-black/40 px-3.5 py-2 backdrop-blur-md shadow-[0_10px_30px_-10px_rgba(0,0,0,0.7)]"
                style={{ bottom: '30%', left: '-13%', willChange: 'transform' }}
                initial={{ opacity: 0, x: -20 }}
                animate={reduce ? { opacity: 1, x: 0 } : { opacity: 1, x: 0, y: [0, 14, 0] }}
                transition={
                  reduce
                    ? { duration: 0.5, delay: 1.55 }
                    : {
                        opacity: { duration: 0.6, delay: 1.55, ease: EASE },
                        x: { duration: 0.6, delay: 1.55, ease: EASE },
                        y: { duration: 3.6, repeat: Infinity, ease: 'easeInOut' },
                      }
                }
              >
                <span className="text-[#A3D1FF] text-lg" aria-hidden>⚡</span>
                <div>
                  <div className="text-white font-heading text-base font-bold leading-none">&lt; 2s</div>
                  <div className="text-white/60 text-[11px] uppercase tracking-wider mt-0.5">Load time</div>
                </div>
              </motion.div>

              {/* Twinkling sparkles */}
              <Sparkle style={{ top: '0%', left: '42%' }} size={20} delay={0} reduce={reduce} />
              <Sparkle style={{ top: '26%', right: '4%' }} size={14} delay={0.9} reduce={reduce} />
              <Sparkle style={{ top: '44%', left: '0%' }} size={16} delay={1.6} reduce={reduce} />
              <Sparkle style={{ top: '12%', left: '8%' }} size={11} delay={2.3} reduce={reduce} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
