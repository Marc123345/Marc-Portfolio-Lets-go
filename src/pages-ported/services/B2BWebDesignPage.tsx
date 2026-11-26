"use client";

import { motion, AnimatePresence, useInView, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Plus } from 'lucide-react';
import TrustedBy from '@/components/TrustedBy';
import AnimatedCounter from '@/components/AnimatedCounter';
import { FloatPill, ScrollSpiral, SpinBadge } from '@/components/MotionAccents';
import {
  SERIF,
  ChapterMarker,
  ServiceMasthead,
  ServiceMarquee,
  EditorialSection,
  WorkRow,
  ServiceNavigator,
  ServiceColophon,
} from '@/components/ServiceEditorial';
import ChecklistDownload from '@/components/ChecklistDownload';
import { B2B_EXTRA_FAQS } from '@/content/serviceFaqs';

const PORTRAIT =
  'https://ik.imagekit.io/qcvroy8xpd/PW8VUKH.png?updatedAt=1759693058055&tr=f-webp';
const WORKSPACE = 'https://ik.imagekit.io/qcvroy8xpd/uoq5Ztg.jpeg';

const MARQUEE = [
  'Pipeline, not pageviews',
  'React · Next.js',
  'No templates',
  'Built for buying committees',
  'Sub-second loads',
  'One designer, one developer, same person',
];

/* What you get: the old "Why it works" and "Difference" chapters merged.
   They had the same heading and half the same points. */
const OFFER = [
  {
    n: '01',
    title: 'Design that earns the enquiry',
    body:
      'Most buyers size you up on the website before anyone from sales hears their name. So every layout choice gets tested against one question: does this make the right person get in touch? Clear offer above the fold, proof next to the claims, one obvious next step on every page.',
    tag: 'B2B web design',
    stat: '75%',
    statLabel: 'of people judge a company’s credibility by its website',
    source: 'Stanford Web Credibility Project',
  },
  {
    n: '02',
    title: 'Redesigns that start with the leak',
    body:
      'I begin with the analytics, not the colour palette: which pages lose people, which forms get abandoned, which traffic never converts. Then the structure gets rebuilt around what buyers look for, and the forms are wired into the CRM you already use so no lead sits in an inbox.',
    tag: 'B2B website redesign',
    stat: '42%',
    statLabel: 'of visitors leave a site that doesn’t work properly',
    source: '',
  },
  {
    n: '03',
    title: 'Hand-coded in React and Next.js',
    body:
      'No WordPress theme, no page builder, no stack of plugins to update. Each site is built from scratch around your sales process, which keeps pages fast, Core Web Vitals green and the markup clean for Google. You also own the code outright.',
    tag: 'B2B web development',
    stat: '~7%',
    statLabel: 'fewer conversions for each extra second of load time',
    source: 'Aberdeen Group',
  },
  {
    n: '04',
    title: 'Pages for the whole buying group',
    body:
      'The engineer wants specs, finance wants cost, the director wants proof it worked somewhere else. Pages are organised so each of them finds their answer in a scroll or two, with case studies and testimonials placed where the doubts usually come up.',
    tag: 'UX for complex sales',
    stat: '6–10',
    statLabel: 'people involved in a typical B2B purchase',
    source: 'Gartner',
  },
  {
    n: '05',
    title: 'Strategy before fonts',
    body:
      'Fonts and colours come last. First comes your sales process, how you stack up against the three competitors you lose deals to, and the revenue the site needs to support. Design decisions then have a reason behind them you can repeat to your board.',
    tag: 'Positioning',
    stat: 'Week 1',
    statLabel: 'targets agreed before any design starts',
    source: '',
  },
];

const PROCESS = [
  {
    numeral: 'I',
    title: 'Discovery & strategy',
    body: 'A look at your current site to find where prospects drop off, a working definition of a qualified lead, a map of how your buyers decide, and targets for traffic, leads and conversion. Skip this and you get a site that looks good and sits there.',
    get: ['Site & analytics audit', 'Buyer-journey map', 'Agreed targets'],
    weeks: 'Week 1–2',
    start: 1,
    end: 2,
  },
  {
    numeral: 'II',
    title: 'Design & UX',
    body: 'Wireframes first, then a clickable prototype you can test on your own phone. Content gets prioritised, navigation stays obvious, and testimonials and case studies go where they change minds. Mobile is designed alongside desktop, since most B2B buyers browse on their phones at work.',
    get: ['Wireframes', 'Clickable prototype', 'Design system'],
    weeks: 'Week 2–5',
    start: 2,
    end: 5,
  },
  {
    numeral: 'III',
    title: 'Build & launch',
    body: 'Coded in Next.js from scratch, without templates or plugins. Before launch: testing on real devices, a security check, a page-speed pass, and the SEO groundwork (schema, metadata, clean URLs, sitemap and redirects from the old site).',
    get: ['Production site', 'SEO foundations', 'Speed & security pass'],
    weeks: 'Week 5–10',
    start: 5,
    end: 10,
  },
  {
    numeral: 'IV',
    title: 'Optimise & grow',
    body: 'After launch I track leads, conversion rate, bounce rate and time on page, then test changes against them. Pages get rewritten, forms get shorter, new landing pages go up as the business adds services.',
    get: ['Monthly report', 'A/B tests', 'Ongoing changes'],
    weeks: 'Ongoing',
    start: 10,
    end: 12,
  },
];

const STATS = [
  { end: 1, prefix: '#', suffix: '', label: 'Google rankings for competitive, revenue-driving keywords' },
  { end: 300, prefix: '', suffix: '%', label: 'Organic traffic growth from technical SEO and content' },
  { end: 250, prefix: '', suffix: '%', label: 'Engagement lift: longer sessions, lower bounce' },
  { end: 50, prefix: '', suffix: '+', label: 'Projects delivered across three continents' },
];

const WORK = [
  {
    title: 'Paving Leads',
    cat: 'SEO · Lead Gen',
    blurb: 'Failing Core Web Vitals → 98 Lighthouse. Organic leads doubled in month one.',
    image:
      '/images/case-studies/paving-leads.jpg',
    href: '/work/case-studies/paving-leads/',
  },
  {
    title: 'Binns Media Group',
    cat: 'Media Platform',
    blurb: 'Production house → streaming-grade platform. React, TypeScript, Postgres.',
    image:
      'https://ik.imagekit.io/qcvroy8xpd/Mockup%204%20-%2016x9.png?updatedAt=1767538713061',
    href: '/work/case-studies/binns-media/',
  },
  {
    title: 'Untapped Africa',
    cat: 'Impact · Storytelling',
    blurb: 'Mission-first platform. 250% engagement lift across eight countries.',
    image:
      '/images/case-studies/untapped-africa.jpg',
    href: '/work/case-studies/untapped-africa/',
  },
];

const INDUSTRIES = [
  {
    title: 'Dental practices & DSOs',
    body: 'Several locations, complex treatments, and patients who research for weeks before booking. The site has to answer their questions and make booking easy.',
    meta: 'Appointments',
  },
  {
    title: 'Industrial & manufacturing',
    body: 'Technical products and long sales cycles. Buyers want spec sheets, case studies and proof before they call, so those come first.',
    meta: 'RFQs',
  },
  {
    title: 'Roofing & commercial services',
    body: 'High-value jobs where local visibility and credibility decide who gets the call.',
    meta: 'Calls',
  },
  {
    title: 'Media & publishing',
    body: 'Content-heavy sites that need to stay fast at thousands of pages. Next.js handles the volume without slowing down.',
    meta: 'Engagement',
  },
  {
    title: 'Home & property services',
    body: 'Crowded local markets, where the website is often the difference between 50 leads a month and 5.',
    meta: 'Leads',
  },
];

const NEXTJS = [
  {
    title: 'Conversion paths built around you',
    body: 'Templates force your buyer journey into someone else’s layout. A custom build follows your actual sales process, from first visit to the contact form.',
  },
  {
    title: 'Ready for Google and AI search',
    body: 'Server-side rendering, sitemaps and clean metadata come built in. The same structure is what AI answer engines read when they decide who to cite.',
  },
  {
    title: 'Room to grow',
    body: 'More pages, more traffic, more languages. Modular components scale without the technical debt template sites pile up.',
  },
  {
    title: 'Fewer ways in for attackers',
    body: 'No plugin ecosystem means a far smaller attack surface than WordPress, and less to patch every month.',
  },
];

/* Core Web Vitals, typical 2026 figures. Bars are drawn against the slower
   number so the gap reads at a glance; lower is better on all three. */
const BENCHMARKS = [
  { metric: 'Largest Contentful Paint', short: 'LCP', next: 0.9, wp: 2.8, unit: 's' },
  { metric: 'Interaction to Next Paint', short: 'INP', next: 120, wp: 320, unit: 'ms' },
  { metric: 'Cumulative Layout Shift', short: 'CLS', next: 0.02, wp: 0.12, unit: '' },
];

/* Kept word for word: the FAQPage schema in app/services/b2b-web-design/page.tsx
   mirrors these answers. Change both together. */
const FAQS = [
  {
    q: 'What does a B2B web design project cost?',
    a: 'B2B web design typically runs $3k to $6k per month depending on scope, complexity, and ongoing optimization, whether you’re hiring a web design agency, a web development company, or a B2B website design company. We scope every engagement around your revenue targets rather than billing hours. A one-second speed improvement can lift conversions ~7%, and a well-structured site can raise lead quantity by up to 400%; weighed against those returns, a properly designed B2B site justifies the investment.',
  },
  {
    q: 'How long does a B2B website redesign take?',
    a: 'Most projects run six to 12 weeks from discovery to launch, though it varies with site complexity, how much content needs migrating, and any new integrations. Smaller, clearly scoped sites go faster; larger builds with custom functionality or multiple languages take longer. We set realistic expectations during discovery and keep you in the loop at every step.',
  },
  {
    q: 'What happens after our B2B website goes live?',
    a: 'Launch is the start, not the finish. We keep optimizing performance, monitoring results, and squeezing out more conversions using detailed analytics and user-behavior data, so your team can focus on the business while we handle the improvements.',
  },
  {
    q: 'Do you only work with large B2B companies?',
    a: 'No. We work with everyone from growing service businesses to established manufacturers. What our best clients share is treating the website as a lead-generation tool, not a brochure. When choosing an agency, look past size and years, at industry specialisms, real client testimonials, and how clearly the team communicates.',
  },
];

const reveal = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
} as const;

/* ---------- What you get: rows light up as they cross the middle of the screen ---------- */
function OfferRow({
  item,
  onActive,
  active,
}: {
  item: (typeof OFFER)[number];
  onActive: () => void;
  active: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: '-45% 0px -45% 0px' });
  // Claim the highlight only on entering the middle band. Setting it during
  // render looped when two rows were in the band at once.
  useEffect(() => {
    if (inView) onActive();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);
  return (
    <div
      ref={ref}
      className={`border-b border-white/10 py-10 md:py-14 transition-opacity duration-500 ${
        active ? 'opacity-100' : 'md:opacity-35'
      }`}
    >
      <div className="flex items-center gap-4 mb-4">
        <span className="font-mono text-xs tracking-[0.3em] text-[#A3D1FF]">{item.n}</span>
        <span className="h-px w-8 bg-white/20" />
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/45">{item.tag}</span>
      </div>
      <h3
        className={`leading-[1.02] tracking-[-0.02em] mb-5 transition-colors duration-500 ${
          active ? 'text-white' : 'text-white/80'
        }`}
        style={{ fontFamily: SERIF, fontSize: 'clamp(1.9rem, 4vw, 3.4rem)', fontWeight: 400 }}
      >
        {item.title}
      </h3>
      <div className="grid md:grid-cols-[1fr_170px] gap-6 md:gap-10 items-start">
        <p className="text-white/70 text-lg leading-relaxed max-w-2xl">{item.body}</p>
        <div className={`md:border-l md:pl-6 transition-colors duration-500 ${active ? 'md:border-[#A3D1FF]/60' : 'md:border-white/10'}`}>
          <div
            className={`leading-none mb-2 transition-colors duration-500 ${active ? 'text-[#A3D1FF]' : 'text-white/60'}`}
            style={{ fontFamily: SERIF, fontSize: 'clamp(2.2rem, 3.4vw, 3rem)', fontWeight: 400 }}
          >
            {item.stat}
          </div>
          <p className="text-white/60 text-sm leading-snug">{item.statLabel}</p>
          {item.source && (
            <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.2em] text-white/35">{item.source}</p>
          )}
        </div>
      </div>
    </div>
  );
}

function WhatYouGet() {
  const [active, setActive] = useState(0);
  return (
    <section className="relative py-24 md:py-32 px-6 lg:px-12 bg-[#0a0a0a] border-t border-white/10 overflow-clip">
      <div className="absolute top-1/3 -left-40 w-[560px] h-[560px] bg-[#A3D1FF]/6 rounded-full blur-[140px] pointer-events-none" />
      <div className="max-w-7xl mx-auto relative">
        <ChapterMarker number="02" label="What You Get" />
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-20">
          <div className="lg:sticky lg:top-28 self-start">
            <h2
              className="text-white leading-[0.95] tracking-[-0.03em] mb-8"
              style={{ fontFamily: SERIF, fontSize: 'clamp(2.5rem, 5.5vw, 5rem)', fontWeight: 400 }}
            >
              Five things every <em className="italic text-[#A3D1FF]">build</em> gets right.
            </h2>
            <div className="hidden lg:flex items-end gap-6">
              <AnimatePresence mode="wait">
                <motion.span
                  key={active}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -40 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="block text-transparent leading-none"
                  style={{
                    fontFamily: SERIF,
                    fontSize: 'clamp(8rem, 14vw, 13rem)',
                    fontWeight: 400,
                    WebkitTextStroke: '1px rgba(163,209,255,0.7)',
                  }}
                  aria-hidden
                >
                  {OFFER[active].n}
                </motion.span>
              </AnimatePresence>
              <span className="mb-6 font-mono text-[10px] uppercase tracking-[0.3em] text-white/40">
                / {String(OFFER.length).padStart(2, '0')}
              </span>
            </div>
            {/* progress ticks */}
            <div className="hidden lg:flex gap-2 mt-6" aria-hidden>
              {OFFER.map((o, i) => (
                <span
                  key={o.n}
                  className={`h-[2px] transition-all duration-500 ${i === active ? 'w-12 bg-[#A3D1FF]' : 'w-6 bg-white/20'}`}
                />
              ))}
            </div>
          </div>
          <div className="border-t border-white/10">
            {OFFER.map((item, i) => (
              <OfferRow key={item.n} item={item} active={active === i} onActive={() => setActive(i)} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Process: the line draws down as you scroll ---------- */
function ProcessStep({ step, index }: { step: (typeof PROCESS)[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const lit = useInView(ref, { margin: '0px 0px -40% 0px', once: true });
  return (
    <div ref={ref} className="relative grid grid-cols-[48px_1fr] md:grid-cols-[120px_1fr] gap-6 md:gap-10 pb-16 last:pb-0">
      <div className="relative flex justify-center">
        <span
          className={`relative z-10 grid place-items-center w-11 h-11 md:w-14 md:h-14 rounded-full border transition-all duration-700 ${
            lit ? 'border-[#A3D1FF] bg-[#A3D1FF] text-black' : 'border-white/20 bg-black text-white/50'
          }`}
          style={{ fontFamily: SERIF, fontSize: '1.15rem', fontStyle: 'italic' }}
        >
          {step.numeral}
        </span>
      </div>
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
        className="pt-1 md:pt-2"
      >
        <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#A3D1FF]/80 mb-3">{step.weeks}</div>
        <h3
          className="text-white leading-[1.05] tracking-[-0.02em] mb-4"
          style={{ fontFamily: SERIF, fontSize: 'clamp(1.75rem, 3.5vw, 3rem)', fontWeight: 400 }}
        >
          {step.title}
        </h3>
        <p className="text-white/70 text-lg leading-relaxed max-w-2xl mb-5">{step.body}</p>
        <ul className="flex flex-wrap gap-2 p-0 m-0 list-none">
          {step.get.map((g) => (
            <li
              key={g}
              className="ui-pill"
            >
              {g}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}

/* Week-by-week overview: bars grow in once the chart is on screen */
function ProcessTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const reduce = useReducedMotion();
  const WEEKS = 12;
  return (
    <div ref={ref} className="ui-card mb-20 p-5 md:p-8" aria-label="Project timeline in weeks">
      <div className="grid grid-cols-[88px_1fr] md:grid-cols-[180px_1fr] gap-x-4 mb-3">
        <span />
        <div className="grid font-mono text-[9px] md:text-[10px] text-white/40" style={{ gridTemplateColumns: `repeat(${WEEKS}, 1fr)` }}>
          {Array.from({ length: WEEKS }, (_, i) => (
            <span key={i} className={i % 2 ? 'hidden md:block' : ''}>W{i + 1}</span>
          ))}
        </div>
      </div>
      <div className="space-y-3">
        {PROCESS.map((p, i) => {
          const left = ((p.start - 1) / WEEKS) * 100;
          const width = ((p.end - p.start + 1) / WEEKS) * 100;
          const ongoing = p.weeks === 'Ongoing';
          return (
            <div key={p.numeral} className="grid grid-cols-[88px_1fr] md:grid-cols-[180px_1fr] gap-x-4 items-center">
              <span className="text-white/75 text-xs md:text-sm truncate">
                <span className="italic text-[#A3D1FF] mr-2" style={{ fontFamily: SERIF }}>{p.numeral}</span>
                <span className="hidden md:inline">{p.title}</span>
              </span>
              <div className="relative h-7 bg-white/[0.04]">
                <motion.div
                  className={`absolute inset-y-0 origin-left ${ongoing ? 'bg-gradient-to-r from-[#A3D1FF] to-[#A3D1FF]/0' : 'bg-[#A3D1FF]'}`}
                  style={{ left: `${left}%`, width: `${width}%` }}
                  initial={{ scaleX: reduce ? 1 : 0 }}
                  animate={inView ? { scaleX: 1 } : undefined}
                  transition={{ duration: 0.8, delay: 0.15 + i * 0.25, ease: [0.22, 1, 0.36, 1] }}
                />
                <span
                  className="absolute inset-y-0 flex items-center pl-2 font-mono text-[9px] md:text-[10px] uppercase tracking-[0.15em] text-black pointer-events-none whitespace-nowrap"
                  style={{ left: `${left}%` }}
                >
                  {p.weeks}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 70%', 'end 60%'] });
  const scaleY = useTransform(scrollYProgress, [0, 1], [reduce ? 1 : 0, 1]);
  return (
    <section className="relative py-24 md:py-32 px-6 lg:px-12 bg-black border-t border-white/10 overflow-clip">
      <ScrollSpiral className="absolute -right-24 top-24 hidden lg:block opacity-60" size={320} />
      <div className="max-w-7xl mx-auto relative">
        <ChapterMarker number="03" label="The Process" />
        <h2
          className="text-white leading-[0.95] tracking-[-0.03em] mb-6 max-w-4xl"
          style={{ fontFamily: SERIF, fontSize: 'clamp(2.5rem, 6vw, 5.5rem)', fontWeight: 400 }}
        >
          About ten weeks, <em className="italic text-[#A3D1FF]">four stages.</em>
        </h2>
        <p className="text-lg md:text-xl text-white/70 max-w-3xl mb-12 leading-relaxed">
          Smaller sites take around six weeks, bigger builds with integrations or several languages
          closer to twelve. Either way you know which stage you&apos;re in and what you get at the end of it.
        </p>
        <ProcessTimeline />
        <div ref={ref} className="relative">
          {/* rail + drawn progress, centred on the numeral column */}
          <span aria-hidden className="absolute top-2 bottom-2 left-[24px] md:left-[60px] w-px bg-white/10" />
          <motion.span
            aria-hidden
            className="absolute top-2 bottom-2 left-[24px] md:left-[60px] w-px bg-[#A3D1FF] origin-top"
            style={{ scaleY }}
          />
          {PROCESS.map((step, i) => (
            <ProcessStep key={step.numeral} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Stack: animated bars instead of a table ---------- */
function BenchmarkBars() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const reduce = useReducedMotion();
  return (
    <div ref={ref} className="mb-16">
      <div className="flex flex-wrap items-center gap-x-8 gap-y-2 mb-8 font-mono text-[10px] uppercase tracking-[0.3em] text-white/50">
        <span>Core Web Vitals · 2026 · lower is better</span>
        <span className="flex items-center gap-2"><span className="w-3 h-3 bg-[#A3D1FF]" /> Next.js</span>
        <span className="flex items-center gap-2"><span className="w-3 h-3 bg-white/25" /> WordPress</span>
      </div>
      <div className="space-y-10">
        {BENCHMARKS.map((b, i) => (
          <div key={b.short}>
            <div className="flex items-baseline justify-between gap-4 mb-3">
              <h3 className="text-white text-xl md:text-2xl" style={{ fontFamily: SERIF, fontWeight: 400 }}>
                {b.metric} <span className="text-white/40 text-base">({b.short})</span>
              </h3>
              <span className="font-mono text-xs text-[#A3D1FF] whitespace-nowrap">
                {Math.round(b.wp / b.next * 10) / 10}× better
              </span>
            </div>
            {[
              { v: b.next, cls: 'bg-[#A3D1FF]', text: 'text-[#A3D1FF]' },
              { v: b.wp, cls: 'bg-white/25', text: 'text-white/55' },
            ].map((row, r) => (
              <div key={r} className="flex items-center gap-4 mb-2">
                <div className="flex-1 h-3 bg-white/[0.04] overflow-hidden">
                  <motion.div
                    className={`h-full ${row.cls}`}
                    initial={{ width: reduce ? `${(row.v / b.wp) * 100}%` : 0 }}
                    animate={inView ? { width: `${(row.v / b.wp) * 100}%` } : undefined}
                    transition={{ duration: 1.2, delay: i * 0.15 + r * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>
                <span
                  className={`w-16 text-right font-mono text-sm ${row.text}`}
                  style={{ fontVariantNumeric: 'tabular-nums' }}
                >
                  {row.v}
                  {b.unit}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- Industries: big rows that open on hover / focus ---------- */
function IndustryRow({ item, index }: { item: (typeof INDUSTRIES)[number]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.06 }}
      tabIndex={0}
      className="group relative border-b border-white/10 py-8 md:py-10 outline-none focus-visible:bg-white/[0.02]"
    >
      <span
        aria-hidden
        className="absolute inset-y-0 left-0 w-0 bg-gradient-to-r from-[#A3D1FF]/10 to-transparent transition-all duration-700 group-hover:w-full group-focus-visible:w-full"
      />
      <div className="relative grid md:grid-cols-[60px_1fr_auto] gap-4 md:gap-8 items-start">
        <span className="font-mono text-xs tracking-[0.3em] text-white/40 pt-3">
          {String(index + 1).padStart(2, '0')}
        </span>
        <div>
          <h3
            className="text-white leading-[1] tracking-[-0.02em] transition-all duration-500 group-hover:text-[#A3D1FF] group-hover:translate-x-2"
            style={{ fontFamily: SERIF, fontSize: 'clamp(1.75rem, 4.2vw, 3.5rem)', fontWeight: 400 }}
          >
            {item.title}
          </h3>
          {/* Always visible on touch screens; opens on hover/focus from md up. */}
          <div className="grid transition-all duration-500 md:grid-rows-[0fr] md:opacity-0 md:group-hover:grid-rows-[1fr] md:group-hover:opacity-100 md:group-focus-visible:grid-rows-[1fr] md:group-focus-visible:opacity-100">
            <p className="overflow-hidden text-white/65 leading-relaxed max-w-2xl pt-4">{item.body}</p>
          </div>
        </div>
        <span className="hidden md:inline-flex items-center gap-2 pt-4 font-mono text-[10px] uppercase tracking-[0.3em] text-white/40 group-hover:text-[#A3D1FF] transition-colors">
          {item.meta}
          <ArrowUpRight className="w-4 h-4 transition-transform duration-500 group-hover:rotate-45" />
        </span>
      </div>
    </motion.div>
  );
}

/* ---------- FAQ (site-standard pattern) ---------- */
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
        className="w-full flex items-start justify-between gap-8 py-8 text-left"
      >
        <div className="flex items-start gap-8 flex-1 min-w-0">
          <span
            className="text-[#A3D1FF] font-mono text-xs tracking-[0.3em] pt-3 w-10 shrink-0"
            style={{ fontVariantNumeric: 'tabular-nums' }}
          >
            {String(index + 1).padStart(2, '0')}
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
            transition={{ height: { type: 'spring', stiffness: 400, damping: 30 }, opacity: { duration: 0.25 } }}
            className="overflow-hidden"
          >
            <div className="pl-0 md:pl-[64px] pr-16 pb-8 max-w-3xl">
              <p className="text-lg md:text-xl text-white/70 leading-relaxed">{item.a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function B2BWebDesignPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      <ServiceMasthead
        kicker="Service · B2B Web Design Agency"
        title="A B2B Web Design Agency That Drives"
        italicWord="Pipeline."
        volumeNumber="02"
        tagline={
          <>
            A good-looking site is worthless if it generates no leads. We build custom
            React &amp; Next.js sites for B2B companies in the US and Europe that turn
            traffic into qualified pipeline, 50+ projects across 3 continents.
          </>
        }
        meta={['50+ projects · 3 continents', 'React · Next.js', '5.0 ★ · 25 reviews']}
        imageSrc={WORKSPACE}
      />

      {/* The home page's testimonial block, directly under the hero (Marc's
          call). It also backs the "5.0 ★ · 25 reviews" claim in the masthead. */}
      <TrustedBy />

      <ServiceMarquee phrases={MARQUEE} />

      {/* Chapter 01, The Brief */}
      <EditorialSection chapter="01" label="The Brief" title="Results," italicTitle="not aesthetics.">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 items-center">
          <motion.div {...reveal} className="relative">
            <div className="relative overflow-hidden">
              <img
                src={WORKSPACE}
                alt="Marc Friedman at work on a B2B web design project"
                className="block w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              <FloatPill className="absolute top-6 right-6" tilt={8}>Custom-coded</FloatPill>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/60 mb-2">
                  Average B2B site conversion
                </div>
                <div className="text-white leading-none" style={{ fontFamily: SERIF, fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
                  2.4–3.5<span className="text-[#A3D1FF]">%</span>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div {...reveal} className="space-y-5 text-white/70 leading-relaxed text-lg">
            <p>
              Plenty of B2B companies have a website that got signed off internally and then
              sat there. The average B2B site converts somewhere between 2.4% and 3.5% of
              visitors, and every point below that is revenue walking out at the top of the funnel.
            </p>
            <p>
              Marc Friedman Design Agency is a B2B web design studio that has shipped 50+
              projects across three continents. The work combines strategy, UX for long
              buying cycles, brand and engineering, from a first B2B website design through
              a full rebuild.
            </p>
            <p className="text-white">
              No templates, no WordPress themes, no page builders. Every site is coded in React
              and Next.js around your conversion goals and your buyers.
            </p>
          </motion.div>
        </div>
      </EditorialSection>

      <WhatYouGet />

      <Process />

      {/* Chapter 04, Proof */}
      <EditorialSection chapter="04" label="Proof" title="Results" italicTitle="you can check." bg="bg-[#0a0a0a]">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border-y border-white/10 mb-16">
          {STATS.map((s) => (
            <div key={s.label} className="bg-[#0a0a0a] py-10 px-4 md:px-8">
              <div
                className="text-white leading-none mb-4"
                style={{ fontFamily: SERIF, fontSize: 'clamp(2.75rem, 6vw, 5rem)', fontWeight: 400, fontVariantNumeric: 'tabular-nums' }}
              >
                <AnimatedCounter end={s.end} prefix={s.prefix} suffix={s.suffix} duration={1800} />
              </div>
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/50 leading-relaxed max-w-[22ch]">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Industry benchmarks as figures instead of a paragraph */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 mb-20">
          {[
            { end: 1400, suffix: '%', line: 'more web traffic, and 120+ leads in 90 days, for a manufacturer that had been getting about one lead a month.' },
            { end: 105, suffix: '%', line: 'more organic traffic and a 47% drop in bounce rate within 90 days of a relaunch.' },
          ].map((f) => (
            <motion.div key={f.end} {...reveal} className="border-l border-[#A3D1FF]/40 pl-6 md:pl-8">
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/45 mb-4">Industry benchmark · B2B redesign</div>
              <div className="text-[#A3D1FF] leading-none mb-4" style={{ fontFamily: SERIF, fontSize: 'clamp(3rem, 7vw, 5.5rem)', fontStyle: 'italic' }}>
                <AnimatedCounter end={f.end} suffix={f.suffix} duration={2000} />
              </div>
              <p className="text-white/70 text-lg leading-relaxed max-w-md">{f.line}</p>
            </motion.div>
          ))}
        </div>

        <WorkRow
          items={WORK.map((w) => ({ href: w.href, title: w.title, blurb: w.blurb, image: w.image, tags: [w.cat] }))}
        />
      </EditorialSection>

      {/* Chapter 05, The Operator */}
      <EditorialSection chapter="05" label="The Operator" title="No agency handoff." italicTitle="No offshore team.">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-16 items-center">
          <motion.div {...reveal} className="relative">
            <div className="relative overflow-hidden">
              <img
                src={PORTRAIT}
                alt="Marc Friedman, the designer and developer behind every B2B build"
                className="block w-full h-auto grayscale contrast-125"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="text-[9px] font-mono uppercase tracking-[0.3em] text-white/55 mb-1">The Operator</div>
                <div className="text-white italic leading-[0.9]" style={{ fontFamily: SERIF, fontSize: 'clamp(1.5rem,2.2vw,2rem)', fontWeight: 400 }}>
                  Marc Friedman
                </div>
              </div>
            </div>
            <div className="absolute -bottom-8 -right-4 md:-right-8">
              <SpinBadge text="BOOK A CALL · TALK TO MARC · " href="/contact/" label="Book a call with Marc" />
            </div>
          </motion.div>
          <motion.div {...reveal}>
            <div className="space-y-5 text-white/70 leading-relaxed text-lg">
              <p>
                I design and build every site myself, for B2B companies across the US and Europe.
                Discovery, design and code stay with one person, so the strategy, the layout and
                the build never drift apart.
              </p>
              <p>
                You talk to the person doing the work. Questions get answered the same day, and
                nothing gets lost in a handoff between a sales team, a designer and an outsourced
                developer.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
              <Link href="/about/" className="ui-btn ui-btn-secondary">
                More about Marc <ArrowUpRight className="w-4 h-4" />
              </Link>
              <a
                href="https://www.linkedin.com/in/portfolio2/"
                target="_blank"
                rel="noopener noreferrer"
                className="ui-btn ui-btn-secondary"
              >
                LinkedIn <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </EditorialSection>

      {/* Chapter 06, Verticals */}
      <EditorialSection
        chapter="06"
        label="Verticals"
        title="B2B industries"
        italicTitle="we know well."
        lead="Every sector buys differently. Knowing the terms, the objections and the trust signals of your market is a big part of what gets better leads through the door."
        bg="bg-[#0a0a0a]"
      >
        <div className="border-t border-white/10">
          {INDUSTRIES.map((it, i) => (
            <IndustryRow key={it.title} item={it} index={i} />
          ))}
        </div>
      </EditorialSection>

      {/* Chapter 07, The Stack */}
      <EditorialSection
        chapter="07"
        label="The Stack"
        title="Why custom Next.js beats templates"
        italicTitle="for B2B lead generation."
        lead="Speed is the part you can measure. These are typical Core Web Vitals for a Next.js build against a standard WordPress site, and they feed straight into how Google ranks you."
      >
        <BenchmarkBars />
        <div className="grid gap-px bg-white/10 border-y border-white/10 sm:grid-cols-2">
          {NEXTJS.map((n, i) => (
            <motion.div
              key={n.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group bg-black p-8 md:p-10"
            >
              <div className="font-mono text-xs tracking-[0.3em] text-[#A3D1FF]/80 mb-4">{String(i + 1).padStart(2, '0')}</div>
              <h3 className="mb-3 text-2xl text-white group-hover:text-[#A3D1FF] transition-colors" style={{ fontFamily: SERIF, fontWeight: 400 }}>
                {n.title}
              </h3>
              <p className="text-white/60 leading-relaxed">{n.body}</p>
            </motion.div>
          ))}
        </div>
      </EditorialSection>

      {/* Chapter 08, Q&A, the site-standard FAQ pattern */}
      <section className="relative py-24 md:py-32 px-6 lg:px-12 bg-[#0a0a0a] border-t border-white/10 overflow-hidden">
        <div className="absolute -top-20 left-10 w-[500px] h-[500px] bg-[#A3D1FF]/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative">
          <ChapterMarker number="08" label="Q&A" />
          <div className="grid md:grid-cols-[1fr_1.3fr] gap-8">
            <div>
              <div className="md:sticky md:top-32">
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.9 }}
                  className="text-white leading-[0.95] tracking-[-0.03em] mb-8"
                  style={{ fontFamily: SERIF, fontSize: 'clamp(2.75rem, 6vw, 5.5rem)', fontWeight: 400 }}
                >
                  Got <em className="italic text-[#A3D1FF]">questions</em>?
                </motion.h2>
                <p className="text-white/60 text-lg leading-relaxed max-w-sm mb-8">
                  The things B2B clients ask most before we start. Don&apos;t see yours?{' '}
                  <Link href="/contact/" className="text-white border-b border-white/30 hover:border-[#A3D1FF] hover:text-[#A3D1FF] transition-colors">
                    Ask me directly.
                  </Link>
                </p>
              </div>
            </div>
            <div className="border-t border-white/10">
              {[...FAQS, ...B2B_EXTRA_FAQS].map((item, i) => (
                <FAQRow
                  key={item.q}
                  item={item}
                  index={i}
                  open={openFaq === i}
                  onToggle={() => setOpenFaq(openFaq === i ? null : i)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <ChecklistDownload which="b2b" bg="bg-black" />
      <ServiceNavigator currentSlug="b2b-web-design" />
      <ServiceColophon
        headline="Turn your B2B website into"
        italicHeadline="your best salesperson."
        lead="If your site isn't bringing in leads, the market usually isn't the problem. Book a call and I'll audit your current site with you, with no strings attached and no upsell."
      />
    </>
  );
}
