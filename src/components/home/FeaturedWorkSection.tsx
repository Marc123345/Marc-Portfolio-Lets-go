"use client";

import { useState, useMemo } from 'react';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import InteractiveCube from '@/components/InteractiveCube';

const SERIF = "Georgia, 'Times New Roman', serif";

type Project = {
  title: string;
  category: string;
  blurb: string;
  image: string;
  liveUrl?: string;
  caseStudyUrl: string;
  stats: { value: string; label: string }[];
  tags: string[];
};

const featured: Project[] = [
  {
    title: 'Binns Media Group',
    category: 'Media Platform',
    blurb:
      'Streaming-grade platform for authentic voices — Netflix-style UX on a lean production tech stack.',
    image:
      'https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%204%20-%2016x9.png?updatedAt=1767539579710',
    liveUrl: 'https://www.binnsmediagroup.com',
    caseStudyUrl: '/work/case-studies/binns-media',
    stats: [
      { value: '98', label: 'Lighthouse' },
      { value: '4x', label: 'Engagement' },
      { value: '18mo', label: 'Retainer' },
    ],
    tags: ['React 18', 'TypeScript', 'Postgres'],
  },
  {
    title: 'Untapped Africa',
    category: 'Impact / Storytelling',
    blurb:
      'A mission-first platform that helps bring clean water to 500,000+ people across 8 African countries.',
    image:
      'https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%201%20-%201x1(1).png?updatedAt=1767539579782',
    liveUrl: 'https://untappedafrica.co.za',
    caseStudyUrl: '/work/case-studies/untapped-africa',
    stats: [
      { value: '500k+', label: 'People' },
      { value: '08', label: 'Countries' },
      { value: '250%', label: 'Engagement' },
    ],
    tags: ['Next.js', 'TypeScript', 'Mapbox GL'],
  },
  {
    title: 'H2H Marketing',
    category: 'Agency Brand',
    blurb:
      'Bold brand-first digital presence for a social marketing agency connecting brands with real audiences.',
    image: 'https://ik.imagekit.io/qcvroy8xpd/image%201%20(5).png',
    liveUrl: 'https://www.h2hsocialmarketing.com/',
    caseStudyUrl: '/work/case-studies/h2h-marketing',
    stats: [
      { value: '100%', label: 'Custom' },
      { value: '<2s', label: 'Load' },
      { value: 'AA', label: 'A11y' },
    ],
    tags: ['React', 'Tailwind', 'Framer'],
  },
  {
    title: 'Paving Leads',
    category: 'SEO / Lead Gen',
    blurb:
      'Failing Core Web Vitals → 98 Lighthouse. Organic leads doubled in the first month after launch.',
    image:
      'https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%204%20-%2016_9.png?updatedAt=1767539579010',
    liveUrl: 'https://pavinglead.com/',
    caseStudyUrl: '/work/case-studies/paving-leads',
    stats: [
      { value: '#1', label: 'Google' },
      { value: '300%', label: 'Traffic' },
      { value: '2x', label: 'Leads' },
    ],
    tags: ['Next.js', 'SEO', 'Lead Gen'],
  },
  {
    title: 'AutoMarginX',
    category: 'SaaS · Analytics',
    blurb:
      'Real-time dealer analytics platform. Dealerships saw 35% faster decisions and higher margins.',
    image: 'https://i.imgur.com/PiKh199.png',
    caseStudyUrl: '/work/case-studies/automarginx',
    stats: [
      { value: '35%', label: 'Decisions' },
      { value: 'Live', label: 'Telemetry' },
      { value: 'RBAC', label: 'Auth' },
    ],
    tags: ['React', 'Node.js', 'Postgres'],
  },
  {
    title: 'iLight Care',
    category: 'AI · Healthcare',
    blurb:
      'Brand, website, MVP platform, and pitch deck. Founder went from vision to investor-ready in 6 weeks.',
    image:
      'https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%201%20-%201x1(5).png?updatedAt=1767539579818',
    liveUrl: 'https://www.ilight.care',
    caseStudyUrl: '/work/case-studies/ilight',
    stats: [
      { value: '6wk', label: 'Vision→MVP' },
      { value: 'LLM', label: 'Grounded' },
      { value: 'Deck', label: 'Included' },
    ],
    tags: ['React', 'Node.js', 'AI/ML'],
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

export default function FeaturedWorkSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = featured[activeIndex];

  const cubeFaces = useMemo(
    () =>
      featured.map((p) => ({
        image: p.image,
        category: p.category,
        title: p.title,
      })),
    [],
  );

  return (
    <section className="relative py-28 md:py-36 px-6 lg:px-12 bg-[#0a0a0a] border-t border-white/10 overflow-hidden">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[#A3D1FF]/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <ChapterMarker number="Chapter · Selected Work" label="Portfolio · 06 Files" />

        <div className="grid md:grid-cols-[1.2fr_1fr] gap-8 md:gap-16 items-end mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9 }}
            className="text-white leading-[0.95] tracking-[-0.03em]"
            style={{
              fontFamily: SERIF,
              fontSize: 'clamp(2.75rem, 7vw, 6.5rem)',
              fontWeight: 400,
            }}
          >
            Real projects.{' '}
            <em className="italic text-[#A3D1FF]">Real results.</em>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/60 text-lg leading-relaxed"
          >
            Six selected case files — drag the cube or click a project to rotate it
            into view.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* List */}
          <div className="lg:col-span-3 order-2 lg:order-1">
            <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/40 mb-5">
              — Case files
            </p>
            <ul className="border-y border-white/10">
              {featured.map((p, i) => {
                const isActive = i === activeIndex;
                return (
                  <li
                    key={p.title}
                    className="border-b border-white/10 last:border-b-0"
                  >
                    <button
                      onClick={() => setActiveIndex(i)}
                      className={`group w-full text-left flex items-center gap-3 py-4 transition-colors ${
                        isActive ? 'text-white' : 'text-white/50 hover:text-white'
                      }`}
                    >
                      <span
                        className={`text-[10px] font-mono tracking-[0.2em] w-6 shrink-0 ${
                          isActive ? 'text-[#A3D1FF]' : 'text-white/30'
                        }`}
                        style={{ fontVariantNumeric: 'tabular-nums' }}
                      >
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span
                        className="flex-1 leading-tight"
                        style={{
                          fontFamily: SERIF,
                          fontSize: 'clamp(1rem, 1.2vw, 1.15rem)',
                          fontWeight: 500,
                        }}
                      >
                        {p.title}
                      </span>
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#A3D1FF]" />
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Cube */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="relative flex items-center justify-center min-h-[380px] lg:min-h-[460px]">
              <InteractiveCube faces={cubeFaces} activeIndex={activeIndex} />
            </div>
          </div>

          {/* Detail */}
          <div className="lg:col-span-4 order-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.title}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#A3D1FF] mb-4">
                  — {active.category}
                </p>
                <h3
                  className="text-white mb-4 leading-[1.0] tracking-tight"
                  style={{
                    fontFamily: SERIF,
                    fontSize: 'clamp(1.75rem, 3vw, 2.75rem)',
                    fontWeight: 500,
                  }}
                >
                  {active.title}
                </h3>
                <p className="text-white/70 leading-relaxed mb-6">{active.blurb}</p>

                <div className="grid grid-cols-3 gap-2 py-4 border-y border-white/10 mb-6">
                  {active.stats.map((s) => (
                    <div key={s.label}>
                      <div
                        className="text-white leading-none mb-1"
                        style={{
                          fontFamily: SERIF,
                          fontSize: 'clamp(1.15rem, 1.6vw, 1.5rem)',
                          fontWeight: 500,
                          fontVariantNumeric: 'tabular-nums',
                        }}
                      >
                        {s.value}
                      </div>
                      <div className="text-[9px] font-mono uppercase tracking-[0.15em] text-white/50">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {active.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 text-[10px] font-mono uppercase tracking-[0.2em] border border-white/15 text-white/60"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <Link
                    href={active.caseStudyUrl}
                    className="inline-flex items-center gap-2 bg-white text-black font-medium px-5 py-2.5 hover:bg-[#A3D1FF] transition-colors group"
                  >
                    Read case study
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                  {active.liveUrl && (
                    <a
                      href={active.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-white font-medium border border-white/20 hover:border-white/60 transition-colors px-5 py-2.5 group"
                    >
                      Live
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="mt-20 flex items-center justify-between border-t border-white/10 pt-8">
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/40">
            — End of spread
          </span>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-white font-medium border-b border-white/30 hover:border-[#A3D1FF] hover:text-[#A3D1FF] transition-colors py-1"
          >
            View the complete archive
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
