"use client";

import { motion } from 'framer-motion';
import ArcSlider from '@/components/ArcSlider';
import { SERVICES } from '@/data/services';

const SERIF = "var(--font-heading)";


function ChapterMarker({ number, label }: { number: string; label: string }) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <span className="text-white/50 text-xs font-mono tracking-[0.3em] uppercase">
        {number}
      </span>
      <span className="h-[1px] flex-1 bg-white/15 max-w-[60px]" />
      <span className="text-white/50 text-xs font-mono tracking-[0.3em] uppercase">
        {label}
      </span>
    </div>
  );
}

export default function ServicesArcSection() {
  return (
    <section className="relative bg-black border-t border-white/10 py-24 md:py-32 px-6 lg:px-12 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[700px] bg-[#A3D1FF]/8 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <ChapterMarker number="Chapter · Services" label="11 Disciplines" />

        <div className="grid md:grid-cols-[1.2fr_1fr] gap-8 items-end mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9 }}
            className="text-white leading-[0.95] tracking-[-0.03em]"
            style={{
              fontFamily: SERIF,
              fontSize: 'clamp(2.75rem, 7vw, 6rem)',
              fontWeight: 400,
            }}
          >
            What I <em className="italic text-[#A3D1FF]">do.</em>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/60 text-lg leading-relaxed"
          >
            Click any service or use the arrows to explore, each opens the
            full page. Prefer to spin it? Drag the arc.
          </motion.p>
        </div>

        <ArcSlider cards={SERVICES} />

      </div>
    </section>
  );
}
