"use client";

import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { ChapterMarker, SERIF } from '@/components/ServiceEditorial';
import { ScrollSpiral } from '@/components/MotionAccents';

/*
 * Roofing and roof-coating contractor sites, shown as images only.
 * No company names, domains, locations or links on purpose (Marc's call).
 * Homepage shot in front, a detail shot floating behind it at a different
 * scroll speed for depth.
 */

type Shot = { home: string; detail?: string };

const SHOTS: Shot[] = [
  {
    home: 'https://ik.imagekit.io/qcvroy8xpd/True-Bilt-Roofing-Homepage-Image-Only.jpg?updatedAt=1794496683148',
    detail: 'https://ik.imagekit.io/qcvroy8xpd/True-Bilt-Roofing-Detail-Image-Only.jpg?updatedAt=1794496683604',
  },
  {
    home: 'https://ik.imagekit.io/qcvroy8xpd/Thomas-and-Sons-Homepage-Image-Only.jpg?updatedAt=1794496683166',
    detail: 'https://ik.imagekit.io/qcvroy8xpd/Thomas-and-Sons-Detail-Image-Only.jpg?updatedAt=1794496683296',
  },
  {
    home: 'https://ik.imagekit.io/qcvroy8xpd/ProGrade-Roof-Coatings-Homepage-Image-Only.jpg?updatedAt=1794496683211',
  },
];

function ShotRow({ s, i, n }: { s: Shot; i: number; n: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const yBack = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [90, -90]);
  const yFront = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [30, -30]);
  const flip = i % 2 === 1;

  return (
    <div ref={ref} className={`relative max-w-5xl ${flip ? 'ml-auto' : ''}`}>
      <div className="relative pb-[8%]">
        {s.detail && (
          <motion.div
            style={{ y: yBack }}
            className={`absolute top-[-8%] w-[44%] aspect-[4/3] overflow-hidden border border-white/10 bg-[#1b1b1b] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.9)] hidden sm:block ${
              flip ? 'left-[-3%] rotate-[-4deg]' : 'right-[-3%] rotate-[4deg]'
            }`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={s.detail} alt="Roofing website, detail" loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover object-top" />
            <span className="absolute inset-0 bg-black/20" />
          </motion.div>
        )}
        <motion.div
          style={{ y: yFront }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9 }}
          className={`relative z-10 ${s.detail ? (flip ? 'ml-[12%]' : 'mr-[12%]') : 'mx-[6%]'}`}
        >
          <div className="overflow-hidden border border-white/15 bg-[#0f1115] shadow-[0_40px_90px_-30px_rgba(0,0,0,0.95)]">
            <div className="flex items-center gap-1.5 px-3 h-7 bg-[#16191f] border-b border-white/10" aria-hidden>
              <i className="w-2 h-2 rounded-full bg-white/20" />
              <i className="w-2 h-2 rounded-full bg-white/20" />
              <i className="w-2 h-2 rounded-full bg-white/20" />
            </div>
            <div className="relative aspect-[16/10] overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={s.home} alt="Roofing website, homepage" loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover object-top" />
              <span className="absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.10),transparent_38%)]" />
            </div>
          </div>
          <span
            className={`block mt-4 text-[10px] font-mono tracking-[0.3em] text-white/40 ${flip ? 'text-left' : 'text-right'}`}
            style={{ fontVariantNumeric: 'tabular-nums' }}
          >
            {String(i + 1).padStart(2, '0')} / {String(n).padStart(2, '0')}
          </span>
        </motion.div>
      </div>
    </div>
  );
}

export default function RoofingSites() {
  return (
    <section id="roofing" className="relative bg-black border-t border-white/10 py-24 md:py-32 px-6 lg:px-12 overflow-hidden scroll-mt-20">
      <ScrollSpiral className="absolute top-24 -left-20 hidden xl:block opacity-60" size={260} />
      <div className="absolute bottom-0 right-[-10%] w-[700px] h-[600px] bg-[#A3D1FF]/6 rounded-full blur-[160px] pointer-events-none" />
      <div className="max-w-7xl mx-auto relative">
        <ChapterMarker number="Industry" label="Roofing" />
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9 }}
          className="text-white leading-[0.95] tracking-[-0.03em] mb-20 md:mb-28 max-w-4xl"
          style={{ fontFamily: SERIF, fontSize: 'clamp(2.5rem, 6vw, 5.5rem)', fontWeight: 400 }}
        >
          Roofing websites, <em className="italic text-[#A3D1FF]">built to get the call.</em>
        </motion.h2>
        <div className="space-y-24 md:space-y-36">
          {SHOTS.map((s, i) => (
            <ShotRow key={s.home} s={s} i={i} n={SHOTS.length} />
          ))}
        </div>
      </div>
    </section>
  );
}
