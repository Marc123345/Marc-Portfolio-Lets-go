"use client";

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import { ChapterMarker, SERIF } from '@/components/ServiceEditorial';
import type { FAQ } from '@/content/serviceFaqs';

/* Site-standard FAQ pattern (same as the B2B page). Answers are always in
   the DOM-rendered markup when open; the first one starts open so crawlers
   and readers see a full answer without interaction. */
export default function ServiceFAQ({
  items,
  chapter,
  intro,
  bg = 'bg-[#0a0a0a]',
}: {
  items: FAQ[];
  chapter: string;
  intro: string;
  bg?: string;
}) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className={`relative py-24 md:py-32 px-6 lg:px-12 ${bg} border-t border-white/10 overflow-hidden`}>
      <div className="max-w-7xl mx-auto relative">
        <ChapterMarker number={chapter} label="Q&A" />
        <div className="grid md:grid-cols-[1fr_1.3fr] gap-8">
          <div>
            <div className="md:sticky md:top-32">
              <h2
                className="text-white leading-[0.95] tracking-[-0.03em] mb-8"
                style={{ fontFamily: SERIF, fontSize: 'clamp(2.75rem, 6vw, 5.5rem)', fontWeight: 400 }}
              >
                Got <em className="italic text-[#A3D1FF]">questions</em>?
              </h2>
              <p className="text-white/60 text-lg leading-relaxed max-w-sm">
                {intro} Don&apos;t see yours?{' '}
                <Link
                  href="/contact/"
                  className="text-white border-b border-white/30 hover:border-[#A3D1FF] hover:text-[#A3D1FF] transition-colors"
                >
                  Ask me directly.
                </Link>
              </p>
            </div>
          </div>
          <div className="border-t border-white/10">
            {items.map((item, i) => {
              const isOpen = open === i;
              return (
                <div key={item.q} className="border-b border-white/10 group">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="w-full flex items-start justify-between gap-8 py-8 text-left"
                  >
                    <div className="flex items-start gap-8 flex-1 min-w-0">
                      <span
                        className="text-[#A3D1FF] font-mono text-xs tracking-[0.3em] pt-3 w-10 shrink-0"
                        style={{ fontVariantNumeric: 'tabular-nums' }}
                      >
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <h3
                        className="text-white leading-[1.1] tracking-[-0.02em] group-hover:text-[#A3D1FF] transition-colors duration-300"
                        style={{ fontFamily: SERIF, fontSize: 'clamp(1.5rem, 3.5vw, 2.75rem)', fontWeight: 400 }}
                      >
                        {item.q}
                      </h3>
                    </div>
                    <motion.div
                      className="shrink-0 w-12 h-12 border border-white/20 flex items-center justify-center group-hover:border-[#A3D1FF] group-hover:bg-[#A3D1FF]/10 transition-all"
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    >
                      <Plus className="w-4 h-4 text-white" />
                    </motion.div>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="md:pl-[64px] pr-16 pb-8 max-w-3xl">
                          <p className="text-lg md:text-xl text-white/70 leading-relaxed">{item.a}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
