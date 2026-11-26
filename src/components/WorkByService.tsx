"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { ChapterMarker, SERIF } from '@/components/ServiceEditorial';
import { WORK_SERVICES } from '@/data/workByService';

type P = {
  title: string;
  category: string;
  image: string;
  caseStudyUrl: string;
  stats: { value: string; label: string }[];
};

/* One chapter per service, each with the case files that show it. */
export default function WorkByService({ projects }: { projects: P[] }) {
  const byTitle = new Map(projects.map((p) => [p.title, p]));

  return (
    <section className="relative bg-[#0a0a0a] border-t border-white/10 py-24 md:py-32 px-6 lg:px-12 overflow-hidden">
      <div className="absolute top-40 right-[-10%] w-[700px] h-[700px] bg-[#A3D1FF]/6 rounded-full blur-[160px] pointer-events-none" />
      <div className="max-w-7xl mx-auto relative">
        <ChapterMarker number="02" label={`Work by service · ${WORK_SERVICES.length} services`} />
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9 }}
          className="text-white leading-[0.95] tracking-[-0.03em] mb-6 max-w-4xl"
          style={{ fontFamily: SERIF, fontSize: 'clamp(2.5rem, 6vw, 5.5rem)', fontWeight: 400 }}
        >
          What I do, <em className="italic text-[#A3D1FF]">and where it shipped.</em>
        </motion.h2>
        <p className="text-white/60 text-lg leading-relaxed max-w-2xl mb-16 md:mb-20">
          Each service with the case files that show it. Some projects appear more than once
          because they covered more than one kind of work.
        </p>

        <div className="space-y-20 md:space-y-28">
          {WORK_SERVICES.map((s, si) => {
            const items = s.projects.map((t) => byTitle.get(t)).filter(Boolean) as P[];
            if (!items.length) return null;
            return (
              <div key={s.key} id={`service-${s.key}`} className="scroll-mt-28 grid lg:grid-cols-12 gap-8 lg:gap-12 border-t border-white/10 pt-10">
                <div className="lg:col-span-4">
                  <div className="lg:sticky lg:top-28">
                    <span className="block text-[10px] font-mono uppercase tracking-[0.3em] text-[#A3D1FF] mb-4" style={{ fontVariantNumeric: 'tabular-nums' }}>
                      {String(si + 1).padStart(2, '0')} · {items.length} {items.length === 1 ? 'case file' : 'case files'}
                    </span>
                    <h3
                      className="text-white leading-[1] tracking-[-0.02em] mb-4"
                      style={{ fontFamily: SERIF, fontSize: 'clamp(2rem, 3.6vw, 3.25rem)', fontWeight: 400 }}
                    >
                      {s.label}
                    </h3>
                    <p className="text-white/60 leading-relaxed mb-6 max-w-sm">{s.blurb}</p>
                    <Link
                      href={s.href}
                      className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-[#A3D1FF] border-b border-white/25 hover:border-[#A3D1FF] pb-0.5 transition-colors group"
                    >
                      About this service
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </div>
                </div>

                <div className={`lg:col-span-8 grid gap-6 ${items.length === 1 ? '' : 'sm:grid-cols-2'}`}>
                  {items.map((p, i) => (
                    <motion.div
                      key={p.title}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-60px' }}
                      transition={{ duration: 0.7, delay: i * 0.08 }}
                      whileHover={{ y: -6 }}
                    >
                      <Link
                        href={p.caseStudyUrl}
                        className="group block border border-white/10 hover:border-[#A3D1FF]/40 hover:shadow-[0_30px_60px_-25px_rgba(163,209,255,0.35)] transition-[border-color,box-shadow] duration-500 overflow-hidden bg-black"
                      >
                        <div className={`relative overflow-hidden bg-[#1b1b1b] ${items.length === 1 ? 'aspect-[16/8]' : 'aspect-[16/10]'}`}>
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={p.image}
                            alt={`${p.title} website`}
                            loading="lazy"
                            decoding="async"
                            className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-[900ms]"
                          />
                          <span className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                          {p.stats[0] && (
                            <span className="absolute left-4 bottom-4">
                              <span className="block text-white leading-none" style={{ fontFamily: SERIF, fontSize: '1.75rem', fontVariantNumeric: 'tabular-nums' }}>
                                {p.stats[0].value}
                              </span>
                              <span className="block text-[9px] font-mono uppercase tracking-[0.2em] text-white/60 mt-1">{p.stats[0].label}</span>
                            </span>
                          )}
                        </div>
                        <div className="flex items-center justify-between gap-4 p-5">
                          <span className="min-w-0">
                            <span className="block text-[10px] font-mono uppercase tracking-[0.25em] text-white/40 mb-1 truncate">{p.category}</span>
                            <span className="block text-white group-hover:text-[#A3D1FF] transition-colors leading-tight" style={{ fontFamily: SERIF, fontSize: '1.4rem', fontWeight: 500 }}>
                              {p.title}
                            </span>
                          </span>
                          <span className="w-9 h-9 shrink-0 grid place-items-center border border-white/15 text-white/60 group-hover:bg-[#A3D1FF] group-hover:border-[#A3D1FF] group-hover:text-black transition-colors">
                            <ArrowUpRight className="w-4 h-4" />
                          </span>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
