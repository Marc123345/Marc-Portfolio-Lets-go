"use client";

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import InteractiveCube from '@/components/InteractiveCube';
import {
  ChapterMarker,
  ServiceMarquee,
  EditorialSection,
  StatsBar,
  ServiceColophon,
  SERIF,
} from '@/components/ServiceEditorial';

const workSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Portfolio — Marc Friedman',
  description:
    'Real projects. Real results. No templates, no WordPress, no shortcuts.',
  url: 'https://www.marcfriedmanportfolio.com/work',
};

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

const projects: Project[] = [
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
      { value: '18mo', label: 'On Retainer' },
    ],
    tags: ['React 18', 'TypeScript', 'Postgres', 'GSAP'],
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
      { value: '500k+', label: 'People Served' },
      { value: '08', label: 'Countries' },
      { value: '250%', label: 'Engagement ↑' },
    ],
    tags: ['Next.js', 'TypeScript', 'Postgres', 'Mapbox GL'],
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
      { value: '100%', label: 'Custom Build' },
      { value: '<2s', label: 'Load' },
      { value: 'AA', label: 'A11y' },
    ],
    tags: ['React', 'Tailwind', 'Framer Motion'],
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
      { value: '300%', label: 'Traffic ↑' },
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
      { value: '35%', label: 'Faster Decisions' },
      { value: 'Live', label: 'Telemetry' },
      { value: 'RBAC', label: 'Auth' },
    ],
    tags: ['React', 'Node.js', 'PostgreSQL'],
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
      { value: '6wk', label: 'Vision → MVP' },
      { value: 'LLM', label: 'Grounded' },
      { value: 'Deck', label: 'Included' },
    ],
    tags: ['React', 'Node.js', 'AI/ML'],
  },
  {
    title: 'Ask Africa',
    category: 'Research · Consultancy',
    blurb:
      "Commanding digital presence for one of Africa's leading research and consultancy firms.",
    image: 'https://ik.imagekit.io/qcvroy8xpd/image%202%20(1).png',
    liveUrl: 'https://askafrica.co.za/',
    caseStudyUrl: '/work/case-studies/ask-africa',
    stats: [
      { value: '100%', label: 'Custom Build' },
      { value: 'Pan', label: 'African Reach' },
      { value: 'Ent.', label: 'Ready' },
    ],
    tags: ['React', 'Tailwind', 'Vite'],
  },
  {
    title: 'Friedman & Cohen',
    category: 'B2B · Procurement',
    blurb:
      'Century-old retail legacy re-engineered for the digital procurement age. Real-time data, wholesale ops, role-based access.',
    image:
      'https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%201%20-%201x1(3).png?updatedAt=1767539579776',
    liveUrl: 'https://b2b.fandc.co.za',
    caseStudyUrl: '/work/case-studies/friedman-cohen',
    stats: [
      { value: '100+', label: 'Years Legacy' },
      { value: '4.4', label: 'Google' },
      { value: 'B2B', label: 'Platform' },
    ],
    tags: ['React', 'Node.js', 'PostgreSQL'],
  },
  {
    title: 'A Secure Annapolis',
    category: 'Local · Emergency Service',
    blurb:
      'Hyper-local lead generation engine. Emergency locksmith traffic turned into immediate phone calls.',
    image:
      'https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%201%20-%201x1(2).png?updatedAt=1767539579194',
    liveUrl: 'https://www.asecureannapolislocksmith.com',
    caseStudyUrl: '/work/case-studies/secure-annapolis',
    stats: [
      { value: '+150%', label: 'Leads' },
      { value: 'Top 3', label: 'Local Map' },
      { value: '85%', label: 'Mobile Conv.' },
    ],
    tags: ['React', 'Local SEO', 'Node.js'],
  },
  {
    title: 'Tar & Chip Paving',
    category: 'Specialty · Contractor',
    blurb:
      'Specialized surface solutions showcase for premium tar and chip paving applications.',
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
    title: 'Chad Le Clos Swimming',
    category: 'Athlete · Bookings',
    blurb:
      "Olympic champion's swimming clinics platform with booking, athlete management, and clinic scheduling.",
    image: 'https://i.imgur.com/ApfYPlH.jpg',
    liveUrl: 'https://chadleclosswimming.com',
    caseStudyUrl: '/work/case-studies/chad-le-clos',
    stats: [
      { value: 'OLY', label: 'Champion' },
      { value: 'Book', label: 'System' },
      { value: '<2s', label: 'Load' },
    ],
    tags: ['Next.js', 'Tailwind', 'Booking'],
  },
  {
    title: 'Fleet Management',
    category: 'SaaS · Logistics',
    blurb:
      'Enterprise fleet platform with real-time tracking, predictive maintenance, and intelligent route optimization.',
    image: 'https://i.imgur.com/EwgHAuK.png',
    caseStudyUrl: '/work/case-studies/fleet-management',
    stats: [
      { value: '500+', label: 'Vehicles' },
      { value: '35%', label: 'Cost ↓' },
      { value: '95%', label: 'Satisfaction' },
    ],
    tags: ['React', 'Node.js', 'MongoDB'],
  },
  {
    title: 'MyTube',
    category: 'AI · Metadata',
    blurb:
      'Video metadata management system for media and manufacturing. AI-powered insights and workflow automation.',
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
      'AI-powered video editing platform — redesigned onboarding, editor, and template marketplace flows.',
    image: 'https://i.imgur.com/SubVB9A.jpeg',
    caseStudyUrl: '/work/case-studies/videoleap',
    stats: [
      { value: '↑', label: 'Template Use' },
      { value: '↑', label: 'Retention' },
      { value: 'Mobile', label: 'First' },
    ],
    tags: ['React', 'AI/ML', 'AWS'],
  },
];

const PAGE_SIZE = 6;

export default function WorkPage() {
  const [activeIndex, setActiveIndex] = useState(0);

  const totalPages = Math.ceil(projects.length / PAGE_SIZE);
  const currentPage = Math.floor(activeIndex / PAGE_SIZE);
  const pageStart = currentPage * PAGE_SIZE;
  const pageProjects = projects.slice(pageStart, pageStart + PAGE_SIZE);
  const faceIndex = activeIndex - pageStart;
  const active = projects[activeIndex];

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
      i + PAGE_SIZE < projects.length ? i + PAGE_SIZE : 0,
    );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(workSchema) }}
      />

      {/* ===================== MASTHEAD ===================== */}
      <section className="relative min-h-[90vh] bg-black overflow-hidden pt-28 pb-16 px-6 lg:px-12">
        <div
          className="absolute inset-0 opacity-[0.06] mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.5'/></svg>\")",
          }}
        />
        <div className="absolute top-1/3 left-[-10%] w-[700px] h-[700px] bg-[#A3D1FF]/8 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative">
          <ChapterMarker number="Portfolio · Vol. 01" label={`${projects.length} Case Files · 2026`} />

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs font-mono uppercase tracking-[0.35em] text-[#A3D1FF] mb-6"
          >
            — Fourteen case files. One operator.
          </motion.p>

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
            Real projects.{' '}
            <em className="italic text-[#A3D1FF]">Real results.</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-xl md:text-2xl text-white/70 max-w-2xl leading-snug mb-12"
          >
            No templates. No WordPress. No shortcuts. Every case file below — click a
            face, read the file, drag the cube.
          </motion.p>
        </div>
      </section>

      <ServiceMarquee
        phrases={[
          'React · Next.js',
          'Hand-coded',
          'Conversion-First',
          'Design Systems',
          'AI · Security',
          'Three continents',
          'Available Q2 2026',
        ]}
      />

      {/* ===================== CUBE SHOWCASE (PAGINATED · ALL 14) ===================== */}
      <section className="relative py-24 md:py-28 px-6 lg:px-12 bg-black border-t border-white/10 overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-[#A3D1FF]/8 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative">
          <ChapterMarker
            number="01"
            label={`The Cube · Set ${String(currentPage + 1).padStart(2, '0')} of ${String(totalPages).padStart(2, '0')}`}
          />

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left — project list for current page */}
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

              <ul className="space-y-0 border-y border-white/10">
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

            {/* Center — cube */}
            <div className="lg:col-span-5 order-1 lg:order-2">
              <div className="relative flex items-center justify-center min-h-[380px] lg:min-h-[500px]">
                <InteractiveCube faces={cubeFaces} activeIndex={faceIndex} />
              </div>
              <p className="text-center text-[10px] font-mono uppercase tracking-[0.3em] text-white/40 mt-6">
                — Drag to rotate · Click a case file
              </p>
            </div>

            {/* Right — active project detail */}
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
                      fontSize: 'clamp(2rem, 3.5vw, 3.25rem)',
                      fontWeight: 500,
                    }}
                  >
                    {active.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed mb-6">{active.blurb}</p>

                  <div className="grid grid-cols-3 gap-3 py-5 border-y border-white/10 mb-6">
                    {active.stats.map((s) => (
                      <div key={s.label}>
                        <div
                          className="text-white leading-none mb-1"
                          style={{
                            fontFamily: SERIF,
                            fontSize: 'clamp(1.25rem, 1.8vw, 1.75rem)',
                            fontWeight: 500,
                            fontVariantNumeric: 'tabular-nums',
                          }}
                        >
                          {s.value}
                        </div>
                        <div className="text-[9px] font-mono uppercase tracking-[0.2em] text-white/50">
                          {s.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-7">
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
                      className="inline-flex items-center gap-2 bg-white text-black font-medium px-6 py-3 hover:bg-[#A3D1FF] transition-colors group"
                    >
                      Read case study
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>
                    {active.liveUrl && (
                      <a
                        href={active.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-white font-medium border border-white/20 hover:border-white/60 transition-colors px-6 py-3 group"
                      >
                        Live site
                        <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </a>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== STATS ===================== */}
      <EditorialSection
        chapter="02"
        label="By the numbers"
        title="A decade of"
        italicTitle="shipping."
        bg="bg-[#0a0a0a]"
      >
        <StatsBar
          stats={[
            { value: `${projects.length}`, label: 'Case Files' },
            { value: '50+', label: 'Projects Shipped' },
            { value: '03', label: 'Continents' },
            { value: '100%', label: 'Built by Me' },
          ]}
        />
      </EditorialSection>

      {/* ===================== FULL ARCHIVE IN CUBE-STYLE ===================== */}
      <EditorialSection
        chapter="03"
        label="The Full Archive"
        title="Every"
        italicTitle="case file."
        lead="All 14 case studies laid out in the same cube-face visual language. Click through to read any of them."
      >
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.caseStudyUrl}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: Math.min(i * 0.04, 0.4) }}
              className="group relative block aspect-[4/5] overflow-hidden border border-white/10 hover:border-[#A3D1FF]/60 transition-colors"
            >
              <img
                src={p.image}
                alt={p.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.06] transition-transform duration-[900ms]"
                style={{ filter: 'brightness(0.75) contrast(1.1)' }}
                loading="lazy"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(180deg, rgba(0,0,0,0.0) 0%, rgba(0,0,0,0.78) 100%)',
                }}
              />
              <div className="absolute top-3 left-3 flex items-center gap-2 text-[9px] font-mono uppercase tracking-[0.25em] text-white/70">
                <span className="w-4 h-[1px] bg-[#A3D1FF]" />
                File {String(i + 1).padStart(2, '0')}
              </div>
              <div className="absolute bottom-3 left-3 right-3">
                <div
                  className="text-[10px] font-mono uppercase tracking-[0.25em] mb-1"
                  style={{ color: '#A3D1FF' }}
                >
                  {p.category}
                </div>
                <div
                  className="text-white leading-[1.05]"
                  style={{
                    fontFamily: SERIF,
                    fontSize: 'clamp(1rem, 1.4vw, 1.35rem)',
                    fontWeight: 500,
                  }}
                >
                  {p.title}
                </div>
              </div>
              <ArrowUpRight className="absolute top-3 right-3 w-4 h-4 text-white/70 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.a>
          ))}
        </div>
      </EditorialSection>

      <ServiceColophon
        headline="Want to be the"
        italicHeadline="next case file?"
        lead="Book a 30-minute call — I'll audit your current site live and show you exactly what we could ship together."
      />
    </>
  );
}
