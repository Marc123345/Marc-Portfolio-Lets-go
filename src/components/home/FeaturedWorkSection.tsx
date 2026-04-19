"use client";

import { useState, useMemo } from 'react';
import { ArrowUpRight, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
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
  {
    title: 'Friedman & Cohen',
    category: 'B2B · Procurement',
    blurb:
      'Century-old retail legacy re-engineered for the digital procurement age.',
    image:
      'https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%201%20-%201x1(3).png?updatedAt=1767539579776',
    liveUrl: 'https://b2b.fandc.co.za',
    caseStudyUrl: '/work/case-studies/friedman-cohen',
    stats: [
      { value: '100+', label: 'Years' },
      { value: '4.4', label: 'Google' },
      { value: 'B2B', label: 'Platform' },
    ],
    tags: ['React', 'Node.js', 'Postgres'],
  },
  {
    title: 'A Secure Annapolis',
    category: 'Local · Emergency',
    blurb:
      'Hyper-local lead engine. Emergency locksmith traffic turned into immediate phone calls.',
    image:
      'https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%201%20-%201x1(2).png?updatedAt=1767539579194',
    liveUrl: 'https://www.asecureannapolislocksmith.com',
    caseStudyUrl: '/work/case-studies/secure-annapolis',
    stats: [
      { value: '+150%', label: 'Leads' },
      { value: 'Top 3', label: 'Local' },
      { value: '85%', label: 'Mobile' },
    ],
    tags: ['React', 'Local SEO', 'Node'],
  },
  {
    title: 'Tar & Chip Paving',
    category: 'Specialty · Contractor',
    blurb:
      'Specialised showcase for premium tar and chip paving applications.',
    image:
      'https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%204%20-%2016x9(5).png?updatedAt=1767539578933',
    liveUrl: 'https://cumberlandtarchip.org/',
    caseStudyUrl: '/work/case-studies/tar-chip-paving',
    stats: [
      { value: 'Bento', label: 'Layout' },
      { value: 'Mobile', label: 'First' },
      { value: '100%', label: 'Custom' },
    ],
    tags: ['React', 'Tailwind', 'Responsive'],
  },
  {
    title: 'Chad Le Clos',
    category: 'Athlete · Bookings',
    blurb:
      "Olympic champion's swim clinics platform with self-serve booking and clinic scheduling.",
    image: 'https://i.imgur.com/ApfYPlH.jpg',
    liveUrl: 'https://chadleclosswimming.com',
    caseStudyUrl: '/work/case-studies/chad-le-clos',
    stats: [
      { value: 'OLY', label: 'Champion' },
      { value: 'Live', label: 'Bookings' },
      { value: '<2s', label: 'Load' },
    ],
    tags: ['Next.js', 'Booking', 'Tailwind'],
  },
  {
    title: 'Fleet Management',
    category: 'SaaS · Logistics',
    blurb:
      'Enterprise fleet platform with real-time tracking and predictive maintenance.',
    image: 'https://i.imgur.com/EwgHAuK.png',
    caseStudyUrl: '/work/case-studies/fleet-management',
    stats: [
      { value: '500+', label: 'Vehicles' },
      { value: '35%', label: 'Cost ↓' },
      { value: '95%', label: 'Sat.' },
    ],
    tags: ['React', 'Node.js', 'MongoDB'],
  },
  {
    title: 'MyTube',
    category: 'AI · Metadata',
    blurb:
      'Video metadata management with AI-powered insights and workflow automation.',
    image: 'https://i.imgur.com/QNHXpzT.jpeg',
    caseStudyUrl: '/work/case-studies/mytube',
    stats: [
      { value: 'AI', label: 'Powered' },
      { value: 'Fast', label: 'Metadata' },
      { value: 'Team', label: 'Tooling' },
    ],
    tags: ['React', 'Node.js', 'AI/ML'],
  },
  {
    title: 'Videoleap',
    category: 'Mobile · AI',
    blurb:
      'AI-powered video editing platform — redesigned onboarding, editor, and template flows.',
    image: 'https://i.imgur.com/SubVB9A.jpeg',
    caseStudyUrl: '/work/case-studies/videoleap',
    stats: [
      { value: '↑', label: 'Templates' },
      { value: '↑', label: 'Retention' },
      { value: 'Mobile', label: 'First' },
    ],
    tags: ['React', 'AI/ML', 'AWS'],
  },
  {
    title: 'Sentinel DS',
    category: 'OSS · Design System',
    blurb:
      'Cybersecurity design system. Severity scale, dual themes, 15+ AA components — drop-in React, ~1,000 LOC.',
    image:
      'https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%204%20-%2016_9.png?updatedAt=1767539579010',
    liveUrl: 'https://github.com/Marc123345/Cyber-Security-Design-System',
    caseStudyUrl: '/work/case-studies/sentinel-ds',
    stats: [
      { value: '15+', label: 'Components' },
      { value: 'AA', label: 'A11y' },
      { value: 'OSS', label: 'License' },
    ],
    tags: ['React', 'CSS Vars', 'OSS'],
  },
];

const PAGE_SIZE = 6;

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
  const totalPages = Math.ceil(featured.length / PAGE_SIZE);
  const currentPage = Math.floor(activeIndex / PAGE_SIZE);
  const pageStart = currentPage * PAGE_SIZE;
  const pageProjects = featured.slice(pageStart, pageStart + PAGE_SIZE);
  const faceIndex = activeIndex - pageStart;
  const active = featured[activeIndex];

  const cubeFaces = useMemo(
    () =>
      pageProjects.map((p) => ({
        image: p.image,
        category: p.category,
        title: p.title,
      })),
    [pageProjects],
  );

  const goPrev = () =>
    setActiveIndex((i) =>
      i - PAGE_SIZE >= 0 ? i - PAGE_SIZE : (totalPages - 1) * PAGE_SIZE,
    );
  const goNext = () =>
    setActiveIndex((i) =>
      i + PAGE_SIZE < featured.length ? i + PAGE_SIZE : 0,
    );

  return (
    <section className="relative py-28 md:py-36 px-6 lg:px-12 bg-[#0a0a0a] border-t border-white/10 overflow-hidden">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[#A3D1FF]/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <ChapterMarker
          number="Chapter · Selected Work"
          label={`Portfolio · ${featured.length} Files`}
        />

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
            All {featured.length} case files — drag the cube, click a project, or page through the deck.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* List */}
          <div className="lg:col-span-3 order-2 lg:order-1">
            <div className="flex items-center justify-between mb-5">
              <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/40">
                — Case files
              </p>
              <div className="flex items-center gap-1">
                <button
                  onClick={goPrev}
                  aria-label="Previous set"
                  className="w-7 h-7 flex items-center justify-center border border-white/15 text-white/60 hover:border-white/40 hover:text-white transition-colors"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={goNext}
                  aria-label="Next set"
                  className="w-7 h-7 flex items-center justify-center border border-white/15 text-white/60 hover:border-white/40 hover:text-white transition-colors"
                >
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
            <ul className="border-y border-white/10">
              {pageProjects.map((p, i) => {
                const globalIdx = pageStart + i;
                const isActive = globalIdx === activeIndex;
                return (
                  <li
                    key={p.title}
                    className="border-b border-white/10 last:border-b-0"
                  >
                    <button
                      onClick={() => setActiveIndex(globalIdx)}
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
                        {String(globalIdx + 1).padStart(2, '0')}
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

            {/* Page dots */}
            <div className="flex items-center gap-2 mt-6">
              {Array.from({ length: totalPages }).map((_, p) => (
                <button
                  key={p}
                  onClick={() => setActiveIndex(p * PAGE_SIZE)}
                  className={`h-[2px] transition-all ${
                    p === currentPage
                      ? 'w-10 bg-[#A3D1FF]'
                      : 'w-5 bg-white/15 hover:bg-white/30'
                  }`}
                  aria-label={`Go to set ${p + 1}`}
                />
              ))}
              <span className="ml-2 text-[10px] font-mono uppercase tracking-[0.25em] text-white/40">
                {String(currentPage + 1).padStart(2, '0')} / {String(totalPages).padStart(2, '0')}
              </span>
            </div>
          </div>

          {/* Cube */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="relative flex items-center justify-center min-h-[380px] lg:min-h-[460px]">
              <InteractiveCube faces={cubeFaces} activeIndex={faceIndex} />
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
