"use client";

import React from 'react';
import { motion } from 'framer-motion';
import ArcSlider from '@/components/ArcSlider';
import { SERVICES } from '@/data/services';
import { ChapterMarker, SERIF } from '@/components/ServiceEditorial';


export default function ServicesPage() {
  return (
    <>
      {/* ===================== MASTHEAD ===================== */}
      <section className="relative bg-black overflow-hidden pt-28 pb-12 px-6 lg:px-12 border-b border-white/10">
        <div
          className="absolute inset-0 opacity-[0.06] mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.5'/></svg>\")",
          }}
        />
        <div className="absolute top-1/3 left-[-10%] w-[700px] h-[700px] bg-[#A3D1FF]/8 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative">
          <ChapterMarker number="Chapter · Services" label="11 Disciplines · 2026" />

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="text-white leading-[0.9] tracking-[-0.04em] mb-8 max-w-5xl"
            style={{
              fontFamily: SERIF,
              fontSize: 'clamp(2.75rem, 7vw, 6rem)',
              fontWeight: 400,
            }}
          >
            What I <em className="italic text-[#A3D1FF]">do.</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-xl md:text-2xl text-white/70 max-w-2xl leading-snug"
          >
            Drag, click, or use the arrows. Each card opens the full service
            page.
          </motion.p>
        </div>
      </section>

      {/* ===================== ARC SLIDER ===================== */}
      <section className="relative bg-black py-20 md:py-28 px-6 lg:px-12 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[700px] bg-[#A3D1FF]/8 rounded-full blur-[160px] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative">
          <ArcSlider cards={SERVICES} />
        </div>
      </section>
    </>
  );
}
