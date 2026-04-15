"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import CubeMatrix from '@/components/CubeMatrix';
import {
  ChapterMarker,
  ServiceMarquee,
  EditorialSection,
  ServiceColophon,
  SERIF,
} from '@/components/ServiceEditorial';

export default function LabPage() {
  return (
    <>
      {/* ===================== MASTHEAD ===================== */}
      <section className="relative min-h-screen bg-black overflow-hidden pt-28 pb-16 px-6 lg:px-12">
        <div
          className="absolute inset-0 opacity-[0.06] mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.5'/></svg>\")",
          }}
        />
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-[#A3D1FF]/10 rounded-full blur-[140px] pointer-events-none" />

        {/* Corner frame marks */}
        <div className="absolute inset-0 pointer-events-none hidden md:block">
          {[
            'top-8 left-8',
            'top-8 right-8',
            'bottom-8 left-8',
            'bottom-8 right-8',
          ].map((pos, i) => (
            <div key={i} className={`absolute ${pos} w-4 h-4`}>
              <div className="absolute inset-0 border-l border-t border-white/20" />
            </div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto relative min-h-[85vh] flex flex-col justify-between">
          <ChapterMarker number="Lab · No. 01" label="Experimental · 2026" />

          <div className="grid lg:grid-cols-[1fr_1fr] gap-12 items-center flex-1">
            {/* Left — title */}
            <div>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="text-xs font-mono uppercase tracking-[0.4em] text-[#A3D1FF] mb-6"
              >
                — A living cube system
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="text-white leading-[0.88] tracking-[-0.04em] mb-8"
                style={{
                  fontFamily: SERIF,
                  fontSize: 'clamp(4rem, 14vw, 13rem)',
                  fontWeight: 400,
                }}
              >
                <span className="block">CORE.</span>
                <span
                  className="block italic text-white/70"
                  style={{ fontSize: '0.6em', lineHeight: 1.1 }}
                >
                  27 cubes. One pulse.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.7 }}
                className="text-xl md:text-2xl text-white/75 leading-snug max-w-xl"
              >
                A 3×3×3 matrix of mini cubes arranged in space.{' '}
                <em className="text-white" style={{ fontFamily: SERIF }}>
                  Pure CSS 3D.
                </em>{' '}
                No physics engine. No WebGL. Just transforms and time.
              </motion.p>
            </div>

            {/* Right — the matrix */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.3, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center justify-center min-h-[480px]"
            >
              <CubeMatrix size={460} />
            </motion.div>
          </div>

          {/* Bottom meta */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.6 }}
            className="flex flex-wrap items-center gap-x-8 gap-y-3 pt-6 border-t border-white/10 text-[10px] md:text-xs font-mono uppercase tracking-[0.25em] text-white/60"
          >
            <span>Move cursor — tilt the matrix</span>
            <span>Auto-rotates when idle</span>
            <span>CSS · transform3d · preserve-3d</span>
            <Link
              href="/work"
              className="ml-auto flex items-center gap-2 text-white hover:text-[#A3D1FF] transition-colors group"
            >
              See client work
              <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      <ServiceMarquee
        phrases={[
          'CSS 3D',
          'transform: preserve-3d',
          'requestAnimationFrame',
          'Lerp Interpolation',
          'Zero Dependencies',
          'No WebGL',
          'Built in an afternoon',
        ]}
      />

      {/* ===================== CHAPTER 01 — WHY ===================== */}
      <EditorialSection
        chapter="01"
        label="The Why"
        title="An agency test"
        italicTitle="against itself."
        lead="I saw agencies shipping 1MB of WebGL and Rapier physics for hero decoration. I wanted to know how close you could get with browser-native tools and taste."
      >
        <div className="grid md:grid-cols-3 gap-8 border-t border-white/10 pt-10">
          {[
            {
              k: 'Tech · Full',
              v: 'R3F + Rapier + Postprocessing',
              s: '~850 KB deps',
            },
            {
              k: 'Tech · CORE',
              v: 'CSS 3D transforms + RAF',
              s: '0 KB of deps',
            },
            {
              k: 'Tradeoff',
              v: 'No real collisions',
              s: 'Enough? Usually yes.',
            },
          ].map((c) => (
            <div key={c.k} className="border-l border-white/10 pl-6">
              <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#A3D1FF] mb-3">
                {c.k}
              </div>
              <div
                className="text-white leading-snug mb-2"
                style={{
                  fontFamily: SERIF,
                  fontSize: 'clamp(1.25rem, 2vw, 1.75rem)',
                  fontWeight: 500,
                }}
              >
                {c.v}
              </div>
              <p className="text-white/50 text-sm">{c.s}</p>
            </div>
          ))}
        </div>
      </EditorialSection>

      {/* ===================== CHAPTER 02 — THE ENGINE ===================== */}
      <EditorialSection
        chapter="02"
        label="The Engine"
        title="Four ideas,"
        italicTitle="stacked."
        bg="bg-[#0a0a0a]"
      >
        <div className="divide-y divide-white/10 border-y border-white/10">
          {[
            {
              n: '01',
              t: 'Preserve-3d scene',
              d: 'A perspective container holds a root stage with transform-style: preserve-3d. Every child lives in the same 3D space — cubes can overlap, orbit, and obscure each other naturally.',
            },
            {
              n: '02',
              t: '27 self-rotating mini-cubes',
              d: 'Each mini cube is positioned by translate3d, then rotated on both X and Y with a phase-shift based on distance from the center. The visual effect: coordinated but never identical motion.',
            },
            {
              n: '03',
              t: 'Pointer-driven parallax',
              d: 'Pointer coordinates map to an X/Y rotation target. A RAF loop lerps toward that target at 8% per frame — smooth, never snappy. When the cursor leaves, the matrix resumes autorotation.',
            },
            {
              n: '04',
              t: 'Outward light wave',
              d: 'A sin(time × 1.8 − distance × 4) wave sweeps from the center outward. Cubes on its crest get a brighter border and inner glow. Cheap trick — but it gives the grid a pulse.',
            },
          ].map((row) => (
            <motion.div
              key={row.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6 }}
              className="grid md:grid-cols-[80px_1fr] gap-6 md:gap-10 py-8"
            >
              <div
                className="text-[#A3D1FF]/80 font-mono text-sm tracking-[0.2em]"
                style={{ fontVariantNumeric: 'tabular-nums' }}
              >
                {row.n}
              </div>
              <div>
                <h3
                  className="text-white leading-tight mb-3"
                  style={{
                    fontFamily: SERIF,
                    fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                    fontWeight: 500,
                  }}
                >
                  {row.t}
                </h3>
                <p className="text-white/70 leading-relaxed max-w-2xl">{row.d}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </EditorialSection>

      {/* ===================== CHAPTER 03 — LARGE SHOWCASE ===================== */}
      <section className="relative bg-black py-24 md:py-32 px-6 lg:px-12 border-t border-white/10 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-[#A3D1FF]/6 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative">
          <ChapterMarker number="03" label="Full Bleed" />
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9 }}
            className="text-white leading-[0.95] tracking-[-0.03em] mb-16 max-w-4xl"
            style={{
              fontFamily: SERIF,
              fontSize: 'clamp(2.5rem, 6vw, 5rem)',
              fontWeight: 400,
            }}
          >
            Stand a little{' '}
            <em className="italic text-[#A3D1FF]">closer</em>.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center justify-center min-h-[560px]"
          >
            <CubeMatrix size={560} gridSize={3} />
          </motion.div>

          <p className="mt-8 text-center text-[10px] font-mono uppercase tracking-[0.3em] text-white/40">
            — Move the cursor slowly for the best effect
          </p>
        </div>
      </section>

      <ServiceColophon
        headline="Want something like this"
        italicHeadline="but for your product?"
        lead="I build interactive pieces like this into landing pages, hero sections, and case studies. Book a call — we'll scope one."
      />
    </>
  );
}
