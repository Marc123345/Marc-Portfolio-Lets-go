"use client";

import Link from 'next/link';
import { useId, useRef, type ReactNode } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';

/**
 * Chrome disc spiral that turns 0 → 180° as it scrolls through the
 * viewport (RoofCoat's tm-gsap-animate-circle, done with framer-motion
 * instead of GSAP ScrollTrigger). Image is the template's
 * work-process-vec2-1.png hue-shifted to the portfolio blue.
 */
export function ScrollSpiral({
  className = '',
  size = 300,
  turn = 180,
}: {
  className?: string;
  size?: number;
  turn?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const rotate = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : turn]);
  return (
    <motion.div
      ref={ref}
      aria-hidden
      className={`pointer-events-none select-none ${className}`}
      style={{ width: size, rotate, willChange: 'transform' }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/images/motion/chrome-spiral.webp" alt="" width={371} height={353} className="w-full h-auto" loading="lazy" decoding="async" />
    </motion.div>
  );
}

/*
 * Small motion accents ported from the RoofCoat Leads build
 * (pl.css plh__badge / plh__campaign / pl-ad-ring), recoloured to #A3D1FF.
 * Keyframes live in globals.css under "Motion accents".
 */

/** Circular text that spins around an accent core, with a pulse ring. */
export function SpinBadge({
  text,
  href,
  size = 112,
  label,
}: {
  text: string;
  href?: string;
  size?: number;
  label?: string;
}) {
  const id = useId().replace(/:/g, '');
  const inner = (
    <>
      <svg viewBox="0 0 120 120" className="mx-spin absolute inset-0 w-full h-full" aria-hidden>
        <defs>
          <path id={`ring-${id}`} d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0" />
        </defs>
        <text
          fill="currentColor"
          style={{ fontSize: 9.5, letterSpacing: '0.18em', fontFamily: 'var(--font-mono, ui-monospace, monospace)' }}
        >
          <textPath href={`#ring-${id}`} textLength="286" lengthAdjust="spacing">
            {text}
          </textPath>
        </text>
      </svg>
      <span
        className="mx-pulse absolute rounded-full bg-[#A3D1FF] text-black grid place-items-center transition-transform duration-500 group-hover:scale-110"
        style={{ inset: size * 0.27 }}
      >
        <ArrowUpRight className="w-5 h-5 transition-transform duration-500 group-hover:rotate-45" />
      </span>
    </>
  );
  const cls = 'group relative block text-white/70 hover:text-white transition-colors';
  const style = { width: size, height: size };
  return href ? (
    <Link href={href} className={cls} style={style} aria-label={label ?? text}>
      {inner}
    </Link>
  ) : (
    <div className={cls} style={style} aria-hidden>
      {inner}
    </div>
  );
}

/** Tilted pill that bobs up and down. */
export function FloatPill({
  children,
  className = '',
  tilt = -12,
}: {
  children: ReactNode;
  className?: string;
  tilt?: number;
}) {
  return (
    <div className={`mx-bob pointer-events-none ${className}`} aria-hidden>
      <span
        className="inline-flex items-center gap-2 rounded-full bg-[#A3D1FF] text-black px-5 py-2 text-[11px] font-mono uppercase tracking-[0.2em] shadow-[0_14px_30px_rgba(163,209,255,0.3)] whitespace-nowrap"
        style={{ transform: `rotate(${tilt}deg)` }}
      >
        {children}
      </span>
    </div>
  );
}
