"use client";

import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

const Globe = dynamic(() => import('@/components/Globe'), {
  ssr: false,
  loading: () => (
    <div
      aria-hidden="true"
      className="mx-auto rounded-full"
      style={{ width: 600, height: 600, maxWidth: '100%' }}
    />
  ),
});

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

const cities = [
  { city: 'New York', country: 'USA' },
  { city: 'Washington D.C.', country: 'USA' },
  { city: 'Miami', country: 'USA' },
  { city: 'Los Angeles', country: 'USA' },
  { city: 'Tel Aviv', country: 'Israel' },
  { city: 'London', country: 'UK' },
  { city: 'Paris', country: 'France' },
  { city: 'Cape Town', country: 'South Africa' },
  { city: 'Nairobi', country: 'Kenya' },
];

export default function GlobeSection() {
  return (
    <section className="relative py-28 md:py-36 px-6 lg:px-12 bg-black border-t border-white/10 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[700px] bg-[#A3D1FF]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <ChapterMarker number="Chapter · Reach" label="Clients · Three Continents" />

        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-8 items-center">
          {/* Left column */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.9 }}
              className="text-white leading-[0.95] tracking-[-0.03em] mb-8"
              style={{
                fontFamily: SERIF,
                fontSize: 'clamp(2.75rem, 7vw, 6rem)',
                fontWeight: 400,
              }}
            >
              Shipped across{' '}
              <em className="italic text-[#A3D1FF]">three continents.</em>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="text-lg md:text-xl text-white/70 leading-relaxed mb-8 max-w-xl"
            >
              Clients in <strong className="text-white">the US, Europe, and Africa</strong>.
              Time zones sort themselves out. Good work travels.
            </motion.p>

            <motion.ul
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-xl border-t border-white/10 pt-8"
            >
              {cities.map((l) => (
                <li key={l.city} className="border-b border-white/10 pb-3">
                  <div
                    className="text-white text-base leading-tight"
                    style={{ fontFamily: SERIF, fontWeight: 500 }}
                  >
                    {l.city}
                  </div>
                  <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/40 mt-1">
                    {l.country}
                  </div>
                </li>
              ))}
            </motion.ul>

          </div>

          {/* Globe */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative mt-8 lg:mt-0"
          >
            <Globe size={600} />
            <p className="text-center mt-8 text-[10px] font-mono uppercase tracking-[0.3em] text-white/40">
, Spins on its own · drag to explore
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
