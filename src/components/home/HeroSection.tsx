"use client";

import { useRef } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import {
  motion,
  useReducedMotion,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion';

import MagneticButton from '@/components/MagneticButton';
import InteractiveCube from '@/components/InteractiveCube';

const SERIF = 'var(--font-heading)';
const EASE = [0.22, 1, 0.36, 1] as const;

const GRAIN =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.5'/></svg>\")";

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

/* Deterministic particle field, trimmed to 16 for perf */
const PARTICLES = Array.from({ length: 16 }, (_, i) => ({
  left: `${(i * 61 + 7) % 100}%`,
  top: `${(i * 43 + 13) % 100}%`,
  size: 2 + (i % 3),
  delay: (i % 6) * 0.5,
  dur: 5 + (i % 4),
}));

/* ---------------- Chapter Marker ---------------- */
function ChapterMarker({ number, label }: { number: string; label: string }) {
  return (
    <div className="flex items-center gap-4 mb-10">
      <span
        className="text-white/50 text-sm font-mono tracking-[0.3em] uppercase"
        style={{ fontVariantNumeric: 'tabular-nums' }}
      >
        {number}
      </span>
      <span className="h-[1px] flex-1 bg-white/15 max-w-[60px]" />
      <span className="text-white/50 text-sm font-mono tracking-[0.3em] uppercase">
        {label}
      </span>
    </div>
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

  return (
    <section
      id="home"
      ref={sectionRef}
      onMouseMove={handleMove}
      className="relative w-full overflow-hidden bg-black pt-28 pb-16 md:pt-32 md:pb-24 px-6 lg:px-12"
    >
      {/* Grain, the house texture */}
      <div
        className="absolute inset-0 opacity-[0.06] mix-blend-overlay pointer-events-none"
        style={{ backgroundImage: GRAIN }}
      />

      {/* House spotlight glow */}
      <div className="absolute top-1/3 left-[-10%] w-[700px] h-[700px] bg-[#A3D1FF]/8 rounded-full blur-[140px] pointer-events-none" />

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

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* ── Left, pitch stack ──────────────────────────────────── */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
            >
              <ChapterMarker number="Index · Vol. 01" label="Web Design & Development · Tel Aviv" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
              className="text-white leading-[0.9] tracking-[-0.04em] mb-8 max-w-4xl"
              style={{
                fontFamily: SERIF,
                fontSize: 'clamp(2.5rem, 4.6vw, 4.25rem)',
                fontWeight: 400,
              }}
            >
              Custom web design for{' '}
              <em className="italic text-[#A3D1FF]">B2B &amp; service businesses.</em>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-xl md:text-2xl text-white/70 max-w-2xl leading-snug"
            >
              I build custom React &amp; Next.js sites that load in under 2 seconds and
              turn visitors into customers, 50+ projects shipped across 3 continents.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-wrap items-center gap-6 mt-9"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45, ease: EASE }}
            >
              <MagneticButton strength={20}>
                <Link
                  href="/contact/"
                  className="inline-flex items-center gap-3 bg-white text-black font-medium px-8 py-4 hover:bg-[#A3D1FF] transition-colors group"
                >
                  Book a Call
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </MagneticButton>
              {/* Skip-the-tour path for high-intent visitors */}
              <Link
                href="/work/"
                className="inline-flex items-center gap-3 text-white font-medium border-b border-white/30 hover:border-[#A3D1FF] hover:text-[#A3D1FF] transition-colors py-1"
              >
                Just show me the work
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Trust strip */}
            <motion.div
              className="flex items-center gap-4 mt-12 pt-8 border-t border-white/10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6, ease: EASE }}
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
                <div className="flex items-center gap-2 text-white font-semibold">
                  <span className="text-[#A3D1FF]" aria-hidden>
                    ★★★★★
                  </span>
                  <span>5.0</span>
                  <span className="text-white/50 font-normal">· 25 reviews</span>
                </div>
                <p className="m-0 mt-1 text-[10px] font-mono uppercase tracking-[0.3em] text-white/40">
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
