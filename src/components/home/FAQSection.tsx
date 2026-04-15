"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

const SERIF = "Georgia, 'Times New Roman', serif";

const faqItems = [
  {
    q: 'How long does it take?',
    a: "Most projects: 4–8 weeks. Complex apps: 12–16 weeks. I'll give you a clear timeline on our first call.",
  },
  {
    q: "What's included?",
    a: 'Everything. Custom design, React/Node dev, mobile responsive, SEO, analytics, CRM integration, hosting setup, and 30 days of post-launch support.',
  },
  {
    q: 'Do you work internationally?',
    a: 'Yes — I work with clients across three continents. Time zones are never an issue.',
  },
  {
    q: 'What if I already have a website?',
    a: 'Perfect. I can redesign and rebuild it to be faster, better-looking, and higher-converting.',
  },
  {
    q: 'How do I pay?',
    a: '50% to start, 25% at design approval, 25% at launch. Payment plans available — just ask.',
  },
];

function ChapterMarker({ number, label }: { number: string; label: string }) {
  return (
    <div className="flex items-center gap-4 mb-10">
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

function FAQRow({
  item,
  index,
  open,
  onToggle,
}: {
  item: { q: string; a: string };
  index: number;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      className="border-b border-white/10 group"
    >
      <button
        onClick={onToggle}
        aria-expanded={open}
        className="w-full flex items-start justify-between gap-6 py-8 text-left"
      >
        <div className="flex items-start gap-6 md:gap-10 flex-1 min-w-0">
          <span
            className="text-[#A3D1FF] font-mono text-xs tracking-[0.3em] pt-3 w-10 shrink-0"
            style={{ fontVariantNumeric: 'tabular-nums' }}
          >
            {String(index + 1).padStart(2, '0')}
          </span>
          <h3
            className="text-white leading-[1.1] tracking-[-0.02em] group-hover:text-[#A3D1FF] transition-colors duration-300"
            style={{
              fontFamily: SERIF,
              fontSize: 'clamp(1.5rem, 3.5vw, 2.75rem)',
              fontWeight: 400,
            }}
          >
            {item.q}
          </h3>
        </div>
        <motion.div
          className="shrink-0 w-12 h-12 border border-white/20 flex items-center justify-center group-hover:border-[#A3D1FF] group-hover:bg-[#A3D1FF]/10 transition-all"
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
        >
          <Plus className="w-4 h-4 text-white" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              height: { type: 'spring', stiffness: 400, damping: 30 },
              opacity: { duration: 0.25 },
            }}
            className="overflow-hidden"
          >
            <div className="pl-0 md:pl-[64px] pr-16 pb-8 max-w-3xl">
              <p className="text-lg md:text-xl text-white/70 leading-relaxed">
                {item.a}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative py-28 md:py-36 px-6 lg:px-12 bg-black border-t border-white/10 overflow-hidden">
      <div className="absolute -top-20 left-10 w-[500px] h-[500px] bg-[#A3D1FF]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <ChapterMarker number="Chapter · Q&A" label="Frequently Asked" />

        <div className="grid md:grid-cols-[1fr_1.3fr] gap-10 md:gap-16">
          {/* Left — sticky header */}
          <div>
            <div className="md:sticky md:top-32">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.9 }}
                className="text-white leading-[0.95] tracking-[-0.03em] mb-8"
                style={{
                  fontFamily: SERIF,
                  fontSize: 'clamp(2.75rem, 6vw, 5.5rem)',
                  fontWeight: 400,
                }}
              >
                Got{' '}
                <em className="italic text-[#A3D1FF]">questions</em>?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-white/60 text-lg leading-relaxed max-w-sm mb-8"
              >
                The most common things clients ask before we kick off. Don&apos;t see
                yours? <span className="text-white">Just ask.</span>
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/40"
              >
                {faqItems.length} questions · 0 FAQs skipped
              </motion.p>
            </div>
          </div>

          {/* Right — editorial Q&A list */}
          <div className="border-t border-white/10">
            {faqItems.map((item, i) => (
              <FAQRow
                key={item.q}
                item={item}
                index={i}
                open={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
