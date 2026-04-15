"use client";

import React, { useRef } from 'react';
import { ArrowUpRight, Mail } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';

const SERIF = "'Fraunces', Georgia, 'Times New Roman', serif";

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Marc Friedman',
  jobTitle: 'Full Stack Designer & Developer',
  description:
    'Full Stack Designer & Developer creating exceptional digital experiences for clients worldwide. Expert in web development, UI/UX design, and conversion optimization.',
  knowsAbout: [
    'Web Design',
    'Web Development',
    'UI/UX Design',
    'API Development',
    'Design Systems',
    'Conversion Optimization',
  ],
  url: 'https://www.marcfriedmanportfolio.com/about',
  sameAs: [
    'https://www.linkedin.com/in/portfolio2/',
    'https://www.behance.net/marcfriedmanweb',
    'https://g.co/kgs/78fRZ6r',
  ],
};

/* ---------------- Chapter Marker ---------------- */
function ChapterMarker({ number, label }: { number: string; label: string }) {
  return (
    <div className="flex items-center gap-4 mb-10">
      <span
        className="text-white/50 text-sm font-mono tracking-[0.3em] uppercase"
        style={{ fontVariantNumeric: 'tabular-nums' }}
      >
        {number}
      </span>
      <span className="h-[1px] flex-1 bg-white/15 max-w-[60px]" />
      <span className="text-white/50 text-sm font-mono tracking-[0.3em] uppercase">
        {label}
      </span>
    </div>
  );
}

/* ---------------- Problems Quote ---------------- */
function ProblemQuote({
  text,
  align = 'left',
  size = 'md',
}: {
  text: string;
  align?: 'left' | 'right';
  size?: 'md' | 'lg';
}) {
  const sizeClass =
    size === 'lg'
      ? 'text-[clamp(1.75rem,3vw,2.75rem)]'
      : 'text-[clamp(1.25rem,2vw,1.75rem)]';
  return (
    <motion.blockquote
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`relative ${align === 'right' ? 'md:text-right md:ml-auto' : ''}`}
      style={{ maxWidth: '640px' }}
    >
      <span
        aria-hidden
        className="absolute -top-8 -left-3 text-[#A3D1FF]/30"
        style={{
          fontFamily: SERIF,
          fontSize: '6rem',
          lineHeight: 0.8,
          fontStyle: 'italic',
        }}
      >
        &ldquo;
      </span>
      <p
        className={`${sizeClass} italic text-white/90 leading-[1.25]`}
        style={{ fontFamily: SERIF, fontWeight: 400 }}
      >
        {text}
      </p>
    </motion.blockquote>
  );
}

/* ---------------- Chapter Section (Process) ---------------- */
function ProcessChapter({
  numeral,
  title,
  description,
  items,
  quote,
  attribution,
  reverse = false,
}: {
  numeral: string;
  title: string;
  description: string;
  items: string[];
  quote: string;
  attribution: string;
  reverse?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`grid md:grid-cols-[200px_1fr] gap-8 md:gap-16 py-16 md:py-24 border-t border-white/10 ${
        reverse ? 'md:grid-cols-[1fr_200px]' : ''
      }`}
    >
      <div className={`${reverse ? 'md:order-2 md:text-right' : ''}`}>
        <div
          className="text-[clamp(4rem,10vw,8rem)] text-[#A3D1FF] leading-none"
          style={{
            fontFamily: SERIF,
            fontWeight: 300,
            fontStyle: 'italic',
          }}
        >
          {numeral}
        </div>
      </div>
      <div className={`${reverse ? 'md:order-1' : ''}`}>
        <h3
          className="text-[clamp(2rem,4vw,3.5rem)] text-white mb-6 leading-[1.05] tracking-tight"
          style={{ fontFamily: SERIF, fontWeight: 500 }}
        >
          {title}
        </h3>
        <p className="text-lg text-white/80 leading-relaxed mb-8 max-w-2xl">
          {description}
        </p>
        <ul className="space-y-2 mb-10 max-w-2xl">
          {items.map((item, index) => (
            <li key={index} className="text-white/70 text-sm flex gap-3 items-start">
              <span className="text-[#A3D1FF] font-mono mt-1">—</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="max-w-xl pl-6 border-l-2 border-[#A3D1FF]">
          <p
            className="text-xl text-white/90 leading-snug italic mb-3"
            style={{ fontFamily: SERIF }}
          >
            &ldquo;{quote}&rdquo;
          </p>
          <p className="text-xs text-[#A3D1FF] font-mono tracking-[0.2em] uppercase">
            — {attribution}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

/* ---------------- Main Page ---------------- */
export default function AboutPage() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.3]);

  const problems = [
    {
      text: 'Our website looks like it was built in 2018 and we\'re embarrassed to send people there.',
      size: 'lg' as const,
      align: 'left' as const,
    },
    {
      text: "We're getting traffic but nobody's filling out the contact form.",
      size: 'md' as const,
      align: 'right' as const,
    },
    {
      text: "Our site takes forever to load and we're losing people before they even see what we do.",
      size: 'md' as const,
      align: 'left' as const,
    },
    {
      text: "We're copy-pasting data between 4 different tools and it's eating our week.",
      size: 'md' as const,
      align: 'right' as const,
    },
    {
      text: "I know what I want but I can't explain it to a developer.",
      size: 'lg' as const,
      align: 'left' as const,
    },
    {
      text: "We've spent money on marketing but have no idea what's working.",
      size: 'md' as const,
      align: 'right' as const,
    },
  ];

  const design = [
    { name: 'UI/UX Design', proof: '50+ interfaces shipped to production' },
    {
      name: 'Design Systems',
      proof: 'Built from scratch for Binns Media, Untapped Africa + 8 others',
    },
    { name: 'Prototyping', proof: 'Figma-to-code workflow on every project since 2020' },
  ];
  const development = [
    { name: 'React / Next.js', proof: 'Primary stack for 40+ production sites' },
    { name: 'TypeScript', proof: 'Used on every project since 2023' },
    { name: 'Node.js', proof: 'Built 15+ APIs and backends' },
    { name: 'PostgreSQL', proof: 'Production databases for SaaS and B2B platforms' },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      {/* ===================== MASTHEAD ===================== */}
      <section
        ref={heroRef}
        className="relative min-h-screen bg-black overflow-hidden"
      >
        {/* Portrait layer */}
        <motion.div
          className="absolute inset-0 z-0"
          style={{ y: heroY, opacity: heroOpacity }}
        >
          <div className="absolute inset-0 lg:left-[40%]">
            <img
              src="https://ik.imagekit.io/qcvroy8xpd/PW8VUKH.png?updatedAt=1759693058055&tr=f-webp"
              alt="Marc Friedman"
              className="w-full h-full object-cover object-top grayscale contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent lg:from-black lg:via-black/40 lg:to-black/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
          </div>
        </motion.div>

        {/* Grain */}
        <div
          className="absolute inset-0 z-10 opacity-[0.06] mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.5'/></svg>\")",
          }}
        />

        <div className="container-custom relative z-20 min-h-screen flex flex-col justify-between pt-32 pb-10">
          {/* Top bar */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-between items-start text-xs font-mono uppercase tracking-[0.3em] text-white/60"
          >
            <span>Profile · Vol. 01</span>
            <span className="text-right">
              Full-Stack Designer
              <br />
              <span className="text-white/40">Est. 2018</span>
            </span>
          </motion.div>

          {/* Name block */}
          <div className="max-w-5xl">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-xs font-mono uppercase tracking-[0.4em] text-[#A3D1FF] mb-6"
            >
              — Meet the designer
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="text-white leading-[0.9] tracking-[-0.04em] mb-6"
              style={{
                fontFamily: SERIF,
                fontSize: 'clamp(3.5rem, 12vw, 11rem)',
                fontWeight: 400,
              }}
            >
              <span className="block italic text-white/80">Marc</span>
              <span className="block">Friedman.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-xl md:text-2xl text-white/75 max-w-xl leading-snug mb-8"
            >
              A designer and developer who builds websites that{' '}
              <em className="text-white" style={{ fontFamily: SERIF }}>
                bring in customers
              </em>{' '}
              — not just compliments.
            </motion.p>
          </div>

          {/* Bottom meta bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex flex-wrap items-center gap-x-8 gap-y-3 pt-6 border-t border-white/10 text-xs font-mono uppercase tracking-[0.25em] text-white/60"
          >
            <span className="flex items-center gap-2 text-white">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Available — Q2 2026
            </span>
            <span>50+ Projects</span>
            <span>US · EU · Africa</span>
            <span className="hidden md:inline">Design + Development</span>
            <Link
              href="#story"
              className="ml-auto flex items-center gap-2 text-white hover:text-[#A3D1FF] transition-colors"
            >
              Read the story <ArrowUpRight className="w-3 h-3" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ===================== CHAPTER 01 — THE STORY ===================== */}
      <section id="story" className="relative bg-black py-24 md:py-32 px-6 lg:px-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <ChapterMarker number="01" label="The Story" />

          <div className="grid md:grid-cols-[1.2fr_1fr] gap-12 md:gap-20">
            {/* Left: headline + intro */}
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8 }}
                className="text-white leading-[1.0] tracking-[-0.03em] mb-10"
                style={{
                  fontFamily: SERIF,
                  fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                  fontWeight: 400,
                }}
              >
                Six years of shipping the{' '}
                <em className="text-[#A3D1FF]">uncompromising</em> version.
              </motion.h2>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg md:text-xl text-white/80 leading-relaxed space-y-6 max-w-2xl"
              >
                <p>
                  <span
                    className="float-left text-[5rem] leading-[0.85] mr-3 mt-1 text-[#A3D1FF]"
                    style={{ fontFamily: SERIF, fontWeight: 500 }}
                  >
                    I
                  </span>
                  &apos;m Marc. I design and build websites that bring in customers —
                  not just compliments. Over the past 6 years, I&apos;ve shipped{' '}
                  <strong className="text-white">50+ projects</strong> for startups,
                  agencies, and brands across the US, Europe, and Africa.
                </p>
                <p>
                  Every one of them was designed, coded, and launched by me
                  personally. No handoffs. No junior devs. No project managers playing
                  telephone.
                </p>
              </motion.div>
            </div>

            {/* Right: stats column */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-8 md:border-l md:border-white/10 md:pl-12"
            >
              {[
                { n: '06', label: 'Years Shipping' },
                { n: '50+', label: 'Projects Delivered' },
                { n: '03', label: 'Continents Served' },
                { n: '100%', label: 'Built by One Person' },
              ].map((s, idx) => (
                <div
                  key={s.label}
                  className="flex items-baseline justify-between gap-6 border-b border-white/5 pb-6"
                >
                  <span
                    className="text-white leading-none"
                    style={{
                      fontFamily: SERIF,
                      fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
                      fontWeight: 500,
                      fontVariantNumeric: 'tabular-nums',
                    }}
                  >
                    {s.n}
                  </span>
                  <span className="text-xs font-mono uppercase tracking-[0.25em] text-white/50 text-right">
                    {s.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===================== CHAPTER 02 — PROBLEMS ===================== */}
      <section className="relative bg-[#0a0a0a] py-28 md:py-36 px-6 lg:px-12 border-t border-white/10 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <ChapterMarker number="02" label="In Their Words" />

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8 }}
            className="text-white leading-[1.0] tracking-[-0.03em] mb-20 max-w-4xl"
            style={{
              fontFamily: SERIF,
              fontSize: 'clamp(2.25rem, 5vw, 4.5rem)',
              fontWeight: 400,
            }}
          >
            Most clients come to me saying one of{' '}
            <em className="italic text-[#A3D1FF]">these six things</em>.
          </motion.h2>

          <div className="space-y-16 md:space-y-20">
            {problems.map((p, i) => (
              <div
                key={i}
                className={`flex ${
                  p.align === 'right' ? 'justify-end' : 'justify-start'
                }`}
              >
                <ProblemQuote text={p.text} align={p.align} size={p.size} />
              </div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-24 pt-8 border-t border-white/10 text-center text-white/70 text-xl leading-relaxed max-w-3xl mx-auto"
          >
            If any of those sound familiar — that&apos;s where I come in. I don&apos;t
            just build websites, I fix the problems that are quietly costing you
            customers.
          </motion.p>
        </div>
      </section>

      {/* ===================== CHAPTER 03 — PROOF ===================== */}
      <section className="relative bg-black py-24 md:py-32 px-6 lg:px-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <ChapterMarker number="03" label="Proof, Not Percentages" />

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8 }}
            className="text-white leading-[1.0] tracking-[-0.03em] mb-16 max-w-4xl"
            style={{
              fontFamily: SERIF,
              fontSize: 'clamp(2.25rem, 5vw, 4.5rem)',
              fontWeight: 400,
            }}
          >
            Self-assigned <em className="italic text-[#A3D1FF]">95%</em> is a lie.
            These are the receipts.
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-16">
            {/* Design */}
            <div>
              <p className="text-xs font-mono uppercase tracking-[0.3em] text-[#A3D1FF] mb-8">
                A. Design
              </p>
              <div className="space-y-8">
                {design.map((s) => (
                  <motion.div
                    key={s.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.6 }}
                    className="border-b border-white/10 pb-6"
                  >
                    <h3
                      className="text-white mb-2 leading-tight"
                      style={{
                        fontFamily: SERIF,
                        fontSize: 'clamp(1.5rem, 2.5vw, 2.25rem)',
                        fontWeight: 500,
                      }}
                    >
                      {s.name}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed">{s.proof}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Development */}
            <div className="md:border-l md:border-white/10 md:pl-16">
              <p className="text-xs font-mono uppercase tracking-[0.3em] text-[#A3D1FF] mb-8">
                B. Development
              </p>
              <div className="space-y-8">
                {development.map((s) => (
                  <motion.div
                    key={s.name}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.6 }}
                    className="border-b border-white/10 pb-6"
                  >
                    <h3
                      className="text-white mb-2 leading-tight"
                      style={{
                        fontFamily: SERIF,
                        fontSize: 'clamp(1.5rem, 2.5vw, 2.25rem)',
                        fontWeight: 500,
                      }}
                    >
                      {s.name}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed">{s.proof}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== CHAPTER 04 — THE PROCESS ===================== */}
      <section className="relative bg-[#0a0a0a] py-24 md:py-32 px-6 lg:px-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <ChapterMarker number="04" label="The Process" />

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8 }}
            className="text-white leading-[1.0] tracking-[-0.03em] mb-10 max-w-4xl"
            style={{
              fontFamily: SERIF,
              fontSize: 'clamp(2.25rem, 5vw, 4.5rem)',
              fontWeight: 400,
            }}
          >
            Four chapters. <em className="italic text-[#A3D1FF]">Same rhythm,</em>{' '}
            every project.
          </motion.h2>

          <div>
            <ProcessChapter
              numeral="I."
              title="Discover"
              description="Understanding your business goals, challenges, and market position before any pixels move."
              items={[
                'In-depth stakeholder interviews',
                'Market & competitive analysis',
                'User research with real customers',
                'Actionable competitive audit',
              ]}
              quote="Marc asked questions about our business that our last agency never thought to ask."
              attribution="Omar Turner · Binns Media"
            />
            <ProcessChapter
              numeral="II."
              title="Define"
              description="Translating research insights into clear strategies, deliverables, and measurable targets."
              items={[
                'Strategic roadmap with KPIs',
                'User personas based on research',
                'IA optimized for conversion',
                'Scalable technical requirements',
              ]}
              quote="He turned our half-formed ideas into a plan we could actually execute on."
              attribution="Dinesh Varahni · Varahni Group"
              reverse
            />
            <ProcessChapter
              numeral="III."
              title="Design"
              description="Creating intuitive interfaces and seamless user experiences grounded in the strategy."
              items={[
                'Data-driven wireframing',
                'Conversion-focused UI design',
                'Interactive prototyping',
                'Documented design system',
              ]}
              quote="The first mockup was closer to what we wanted than three months of work with a previous designer."
              attribution="AutoMarginX Team"
            />
            <ProcessChapter
              numeral="IV."
              title="Develop"
              description="Shipping robust, scalable, measurable solutions using modern technologies."
              items={[
                'SEO-optimized frontend development',
                'Secure backend integration',
                'Lighthouse scores in the 90s',
                'Comprehensive testing & QA',
              ]}
              quote="Our site went from failing Core Web Vitals to a 98 Lighthouse score. Leads doubled in the first month."
              attribution="Paving Leads"
              reverse
            />
          </div>
        </div>
      </section>

      {/* ===================== CHAPTER 05 — BEYOND THE WORK ===================== */}
      <section className="relative bg-black py-24 md:py-32 px-6 lg:px-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <ChapterMarker number="05" label="Off the Clock" />

          <div className="grid md:grid-cols-[1fr_1fr] gap-12 md:gap-20 items-start">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.8 }}
                className="text-white leading-[1.0] tracking-[-0.03em] mb-10"
                style={{
                  fontFamily: SERIF,
                  fontSize: 'clamp(2.25rem, 5vw, 4.5rem)',
                  fontWeight: 400,
                }}
              >
                Beyond the screen.
              </motion.h2>
              <div className="space-y-6 text-lg md:text-xl text-white/80 leading-relaxed">
                <p>
                  When I&apos;m not shipping websites, I&apos;m usually hiking
                  somewhere in the{' '}
                  <em className="text-[#A3D1FF]" style={{ fontFamily: SERIF }}>
                    Galilee
                  </em>
                  , hunting for the best coffee in Tel Aviv, or helping junior
                  designers build their first portfolios.
                </p>
                <p>
                  I&apos;ve mentored <strong className="text-white">20+ designers</strong>{' '}
                  and contributed to open-source projects that other developers
                  actually use.
                </p>
              </div>
            </div>

            {/* Photo collage */}
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="aspect-[3/4] overflow-hidden rounded-sm col-span-2"
              >
                <img
                  src="https://ik.imagekit.io/qcvroy8xpd/uoq5Ztg.jpeg"
                  alt="Marc at work"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="aspect-square overflow-hidden rounded-sm"
              >
                <img
                  src="https://ik.imagekit.io/qcvroy8xpd/TTV8Liw.jpg"
                  alt="Workspace"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="aspect-square overflow-hidden rounded-sm"
              >
                <img
                  src="https://ik.imagekit.io/qcvroy8xpd/PW8VUKH.png?updatedAt=1759693058055&tr=f-webp"
                  alt="Marc Friedman"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== CLOSING ===================== */}
      <section className="relative bg-[#0a0a0a] py-32 md:py-40 px-6 lg:px-12 border-t border-white/10 overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#A3D1FF]/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative">
          <ChapterMarker number="Colophon" label="The End." />

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="text-white leading-[0.95] tracking-[-0.04em] mb-12 max-w-5xl"
            style={{
              fontFamily: SERIF,
              fontSize: 'clamp(3rem, 9vw, 8rem)',
              fontWeight: 400,
            }}
          >
            Let&apos;s make
            <br />
            <em className="italic text-[#A3D1FF]">something real.</em>
          </motion.h2>

          <div className="flex flex-wrap items-center gap-6 mb-16">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-white text-black font-medium px-8 py-4 rounded-full hover:bg-[#A3D1FF] transition-colors group"
            >
              <Mail className="w-4 h-4" />
              Book a Free Strategy Call
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-white font-medium px-8 py-4 rounded-full border border-white/20 hover:border-white/60 transition-colors group"
            >
              See the Work
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 pt-8 border-t border-white/10 text-xs font-mono uppercase tracking-[0.25em] text-white/40">
            <span>Profile · Vol. 01</span>
            <span>Issue: 2026</span>
            <span>Marc Friedman</span>
            <span className="ml-auto text-white/60">Thanks for reading.</span>
          </div>
        </div>
      </section>
    </>
  );
}
