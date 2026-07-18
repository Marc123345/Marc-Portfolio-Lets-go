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
import InteractiveCube from '@/components/InteractiveCube';

const MARC_PORTRAIT =
  'https://ik.imagekit.io/qcvroy8xpd/PW8VUKH.png?updatedAt=1759693058055&tr=f-webp';

const CLIENT_AVATARS = [
  'https://ik.imagekit.io/qcvroy8xpd/1682479506906.jpeg?updatedAt=1754019693073',
  'https://ik.imagekit.io/qcvroy8xpd/4c91361b-27ee-453b-88e0-af3026cac747_1_ro3hez_e_background_removal_f_png_vkfbub.png?updatedAt=1754023286922',
  'https://ik.imagekit.io/qcvroy8xpd/1732338426448%20(1).jpeg?updatedAt=1749337717019',
];

const CUBE_FACES = [
  { image: 'https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%204%20-%2016_9.png?updatedAt=1767539579010', category: 'SEO · Lead Gen', title: 'Paving Leads' },
  { image: 'https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%204%20-%2016x9.png?updatedAt=1767539579710', category: 'Media Platform', title: 'Binns Media Group' },
  { image: 'https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%201%20-%201x1(1).png?updatedAt=1767539579782', category: 'Impact', title: 'Untapped Africa' },
  { image: 'https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%201%20-%201x1(5).png?updatedAt=1767539579818', category: 'AI · Healthcare', title: 'iLight Care' },
  { image: 'https://ik.imagekit.io/qcvroy8xpd/image%201%20(5).png', category: 'Agency Brand', title: 'H2H Marketing' },
  { image: 'https://ik.imagekit.io/qcvroy8xpd/1732717492455.jpeg', category: 'SaaS · Analytics', title: 'AutoMarginX' },
];

const EASE = [0.22, 1, 0.36, 1] as const;
const HEADLINE = ['Custom', 'Web', 'Design', 'for', 'B2B', '&', 'Service', 'Businesses'];

/* Deterministic particle field, trimmed to 16 for perf */
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

/* ── Morphing aurora blob, fewer + lighter blur for perf ──────────── */
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

  // Mouse-parallax, pointer drives layered depth (motion values, no re-render)
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
          {/* ── Left, pitch stack ──────────────────────────────────── */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Headline, word-by-word reveal with gradient sheen */}
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
              seconds and turn visitors into customers, 50+ projects shipped
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

          {/* ── Right, interactive cube of website work ─────── */}
          <motion.div
            className="lg:col-span-5 flex justify-center"
            style={{ x: fgX, y: fgY, willChange: 'transform' }}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: EASE }}
          >
            <InteractiveCube faces={CUBE_FACES} autoRotate />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
