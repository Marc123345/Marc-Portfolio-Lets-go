"use client";

import { motion, useReducedMotion, useScroll, useTransform, type Variants } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import MagneticButton from '@/components/MagneticButton';

const SERIF = 'var(--font-heading)';
const EASE = [0.22, 1, 0.36, 1] as const;

const PORTRAIT =
  'https://ik.imagekit.io/qcvroy8xpd/PW8VUKH.png?updatedAt=1759693058055&tr=f-webp';
const WORKSPACE = 'https://ik.imagekit.io/qcvroy8xpd/uoq5Ztg.jpeg';

const CLIENT_AVATARS = [
  'https://ik.imagekit.io/qcvroy8xpd/1682479506906.jpeg?updatedAt=1754019693073',
  'https://ik.imagekit.io/qcvroy8xpd/4c91361b-27ee-453b-88e0-af3026cac747_1_ro3hez_e_background_removal_f_png_vkfbub.png?updatedAt=1754023286922',
  'https://ik.imagekit.io/qcvroy8xpd/1732338426448%20(1).jpeg?updatedAt=1749337717019',
];

const H1_LINES = [
  ['A', 'B2B', 'Web', 'Design'],
  ['Agency', 'That', 'Drives'],
  ['Pipeline.'],
];

const MARQUEE = [
  'Custom B2B Web Design',
  'Website Redesign',
  'React & Next.js',
  'Conversion Optimization',
  'Lead Generation',
  'Design + Development',
];

const reveal = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-70px' },
  transition: { duration: 0.75, ease: EASE },
} as const;

const RESULTS = [
  {
    n: '01',
    title: 'Custom B2B design, built to convert',
    body:
      'Every decision is grounded in data. 75% of users judge a company’s credibility by its website, and 42% leave sites with poor functionality. Our design and development handles both, building user-friendly sites that convert enterprise buyers, not just impress the boardroom.',
  },
  {
    n: '02',
    title: 'B2B website redesign that fixes underperformers',
    body:
      'A redesign isn’t a new coat of paint. We audit your conversion bottlenecks, restructure the information architecture, and rebuild with conversion-rate optimization, wired into the business systems your data already lives in. A well-designed site can raise lead quantity by up to 400%.',
  },
  {
    n: '03',
    title: 'B2B development in React and Next.js',
    body:
      'We use modern frameworks that deliver superior Core Web Vitals, faster loads, and a stronger SEO foundation. A one-second speed improvement lifts conversions around 7%, the difference between winning and losing the click.',
  },
  {
    n: '04',
    title: 'UX that guides the whole buying committee',
    body:
      'B2B purchases involve multiple stakeholders. Our UX structures every page around the buyer’s journey, simplifying complex information so different roles can navigate it. 68% of B2B leads come through high-converting landing pages; we apply that rigor to every page.',
  },
  {
    n: '05',
    title: 'Brand identity that earns trust',
    body:
      'Credibility isn’t optional in B2B. A professional site builds authority and states your value proposition clearly. We build your brand into every interaction so buyers feel confident before they ever pick up the phone.',
  },
];

const PROCESS = [
  {
    num: 'I',
    title: 'Discovery & Strategy',
    body:
      'Every project starts with a deep dive into your goals, audience, and competitors. We review your current site to find exactly where prospects drop off, define what a qualified lead means for your business, map the buyer journey, and set real targets for traffic, leads, and conversion, before design begins. Agencies that skip this ship sites that look great and just sit there. We do the work.',
  },
  {
    num: 'II',
    title: 'Design & User Experience',
    body:
      'Once strategy is set, we craft conversion-driven designs that speak to your B2B audience. We build wireframes and prototypes that streamline the flow, prioritize your content, and make navigation obvious. 80% of B2B buyers use mobile for work, so responsive web design isn’t up for debate. Trust signals like testimonials and case studies go where they move the needle.',
  },
  {
    num: 'III',
    title: 'Build & Launch',
    body:
      'We build from the ground up in React and Next.js, no templates, no unnecessary plugins, for a site that flies. Launch includes thorough cross-device testing, security verification, page-speed work, and every SEO foundation: schema markup, metadata, URL architecture, and sitemap generation.',
  },
  {
    num: 'IV',
    title: 'Optimize & Scale',
    body:
      'Launch doesn’t mean done. We watch traffic, bounce rate, session duration, and conversion rate, then keep tuning with analytics and user-behavior data. Post-launch measurement, testing, and content adjustments make sure your lead generation keeps growing alongside the business.',
  },
];

const APART = [
  {
    n: '01',
    title: 'No templates, no WordPress themes',
    body:
      'We build every B2B site from scratch, around each client’s exact sales process. Off-the-shelf themes are technical debt that slows you down and forces your conversion paths into a generic mold. Custom builds give you full control over how users interact, what you say, and how fast it loads. As a specialized development agency and design partner, we handle B2B website design, B2B web development, and B2B website development around your exact sales process.',
  },
  {
    n: '02',
    title: 'Tel Aviv-based, global reach',
    body:
      'We serve US and European B2B companies from our studio in Tel Aviv. 50+ projects across three continents means we know how to communicate complex services across markets, time zones, and industries, including for firms in places like San Francisco where agency costs run far higher.',
  },
  {
    n: '03',
    title: 'Proven results, not vague promises',
    body:
      'Our clients have earned #1 Google rankings, 300% traffic increases, and 250% engagement lifts. These aren’t hypotheticals, they’re measured outcomes from real projects, tracked and verified.',
  },
  {
    n: '04',
    title: 'Strategy over decoration',
    body:
      'We don’t start with fonts and colors. We start with your sales process, your competitive positioning, and your revenue targets. Design follows strategy, not the other way around, and that drives business growth, not just visual polish.',
  },
];

const RESULT_TILES = [
  { value: '#1', label: 'Google rankings for competitive, revenue-driving keywords' },
  { value: '300%', label: 'Organic traffic growth through technical SEO and content' },
  { value: '250%', label: 'Engagement lift, longer sessions and lower bounce rates' },
  { value: '50+', label: 'Projects delivered across three continents' },
];

const WORK = [
  {
    title: 'Paving Leads',
    cat: 'SEO · Lead Gen',
    blurb: 'Failing Core Web Vitals → 98 Lighthouse. Organic leads doubled in month one.',
    image:
      'https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%204%20-%2016_9.png?updatedAt=1767539579010',
    href: '/work/case-studies/paving-leads/',
  },
  {
    title: 'Binns Media Group',
    cat: 'Media Platform',
    blurb: 'Production house → streaming-grade platform. React, TypeScript, Postgres.',
    image:
      'https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%204%20-%2016x9.png?updatedAt=1767539579710',
    href: '/work/case-studies/binns-media/',
  },
  {
    title: 'Untapped Africa',
    cat: 'Impact · Storytelling',
    blurb: 'Mission-first platform. 250% engagement lift across eight countries.',
    image:
      'https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%201%20-%201x1(1).png?updatedAt=1767539579782',
    href: '/work/case-studies/untapped-africa/',
  },
  {
    title: 'iLight Care',
    cat: 'AI · Healthcare',
    blurb: 'Brand, site, and MVP. Founder went vision-to-investor-ready in six weeks.',
    image:
      'https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%201%20-%201x1(5).png?updatedAt=1767539579818',
    href: '/work/case-studies/ilight/',
  },
];

const INDUSTRIES = [
  {
    n: '01',
    title: 'Dental practices & DSOs',
    body:
      'Complex services, multiple locations, and patients who research for weeks before booking an appointment. We drive appointment volume and support lead nurturing through the patient decision.',
  },
  {
    n: '02',
    title: 'Industrial & manufacturing',
    body:
      'Technical products, long sales cycles, and buyers who want spec sheets, case studies, and proof before they contact sales. We make that complexity work for you.',
  },
  {
    n: '03',
    title: 'Roofing & commercial services',
    body:
      'High-value work where local visibility and credibility decide who gets the call. We get these businesses dominating their markets online.',
  },
  {
    n: '04',
    title: 'Media & publishing',
    body:
      'Content-heavy environments that demand performance at scale. Our Next.js architecture handles high-volume pages without giving up speed or engagement.',
  },
  {
    n: '05',
    title: 'Home & property services',
    body:
      'Competitive local markets where a well-designed site is the difference between 50 leads a month and struggling to get 5.',
  },
];

const NEXTJS = [
  {
    n: '01',
    title: 'Custom conversion paths',
    body:
      'Templates force your buyer journey into a pre-built layout. Custom development builds the path around your specific B2B sales process, from first visit through to the contact form.',
  },
  {
    n: '02',
    title: 'Advanced SEO & AI search',
    body:
      'Server-side rendering, static generation, automatic sitemaps, and granular metadata are built in. That clean, semantic structure is also what wins in answer engine optimization and generative engine optimization, the AI-powered search paradigms. Our B2B web development and B2B website development services make that optimization cleaner than any template-based alternative.',
  },
  {
    n: '03',
    title: 'Scalable architecture',
    body:
      'More pages, more traffic, more languages: modular components and serverless functions scale without piling up the technical debt template sites accumulate.',
  },
  {
    n: '04',
    title: 'Enhanced security',
    body:
      'No plugin ecosystem means a far smaller attack surface than WordPress. Security verification is simpler and the result is verified and enterprise-level reliable.',
  },
];

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

function SectionHead({ index, kicker, title, lead }: { index: string; kicker: string; title: string; lead?: string }) {
  return (
    <div className="mb-14 md:mb-20">
      <div className="flex items-center justify-between border-b border-white/15 pb-5 mb-10">
        <span className="font-mono text-[11px] uppercase tracking-[0.35em] text-[#A3D1FF]">{kicker}</span>
        <span className="font-mono text-[11px] tracking-[0.2em] text-white/35">{index} — 09</span>
      </div>
      <motion.h2 {...reveal} className="max-w-4xl" style={{ fontFamily: SERIF, fontSize: 'clamp(2.1rem,4.6vw,4rem)', fontWeight: 500, lineHeight: 0.98, letterSpacing: '-0.025em' }}>
        {title}
      </motion.h2>
      {lead && (
        <motion.p {...reveal} className="mt-6 max-w-2xl text-lg leading-relaxed text-white/55">
          {lead}
        </motion.p>
      )}
    </div>
  );
}

function Marquee({ reduce }: { reduce: boolean | null }) {
  const Row = (
    <div className="flex shrink-0 items-center gap-12 pr-12">
      {MARQUEE.map((t) => (
        <span key={t} className="flex items-center gap-12 whitespace-nowrap" style={{ fontFamily: SERIF, fontSize: 'clamp(1.5rem,2.6vw,2.4rem)', fontWeight: 500 }}>
          {t}
          <span className="text-[#A3D1FF]" aria-hidden>✦</span>
        </span>
      ))}
    </div>
  );
  return (
    <div className="border-y border-white/10 py-7 overflow-hidden">
      <motion.div
        className="flex w-max"
        animate={reduce ? {} : { x: ['0%', '-50%'] }}
        transition={reduce ? { duration: 0 } : { duration: 26, repeat: Infinity, ease: 'linear' }}
      >
        {Row}
        {Row}
      </motion.div>
    </div>
  );
}

export default function B2BWebDesignPage() {
  const reduce = useReducedMotion();
  const aboutRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: aboutRef, offset: ['start end', 'end start'] });
  const portraitY = useTransform(scrollYProgress, [0, 1], ['-4%', '5%']);

  const lineVariant: Variants = {
    hidden: { y: '110%' },
    show: (i: number) => ({ y: 0, transition: { duration: 0.85, delay: 0.1 + i * 0.11, ease: EASE } }),
  };

  return (
    <main className="bg-black text-white">
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="px-6 lg:px-12 pt-28 md:pt-36 pb-16 md:pb-24">
        <div className="mx-auto max-w-7xl">
          {/* meta bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="flex items-center justify-between border-y border-white/15 py-3 font-mono text-[11px] uppercase tracking-[0.28em] text-white/50"
          >
            <span className="text-[#A3D1FF]">B2B Web Design Agency</span>
            <span className="hidden sm:block">Vol. 12</span>
            <span>Tel Aviv → US &amp; EU</span>
          </motion.div>

          {/* giant display headline */}
          <h1 className="mt-10 md:mt-16" style={{ fontFamily: SERIF, fontWeight: 500, fontSize: 'clamp(3rem,9vw,8.5rem)', lineHeight: 0.92, letterSpacing: '-0.03em' }}>
            {H1_LINES.map((line, li) => (
              <span key={li} className="block overflow-hidden">
                <motion.span className="block" custom={li} variants={lineVariant} initial="hidden" animate="show">
                  {line.map((w, wi) => (
                    <span key={wi} className={w === 'Pipeline.' ? 'text-[#A3D1FF]' : undefined}>
                      {w}
                      {wi < line.length - 1 ? ' ' : ''}
                    </span>
                  ))}
                </motion.span>
              </span>
            ))}
          </h1>

          {/* lead row */}
          <div className="mt-12 md:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-end">
            <motion.div {...reveal} className="lg:col-span-6">
              <p className="text-white/70 text-lg md:text-xl leading-relaxed max-w-xl">
                A good-looking site is worthless if it generates no leads. We build custom React
                &amp; Next.js sites for B2B companies in the US and Europe that turn traffic into
                qualified pipeline, 50+ projects across 3 continents.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                <MagneticButton strength={20}>
                  <Link href="/contact/" className="inline-flex items-center gap-3 bg-white text-black font-medium px-6 py-3 hover:bg-[#A3D1FF] transition-colors group">
                    <span>Book a free call</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </MagneticButton>
                <Link href="/work/" className="inline-flex items-center gap-2 text-white/70 hover:text-[#A3D1FF] text-sm font-medium border-b border-white/20 hover:border-[#A3D1FF] pb-0.5 transition-colors group">
                  <span>Just show me the work</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
              <div className="mt-9 flex items-center gap-4">
                <ul className="flex p-0 m-0 list-none">
                  {CLIENT_AVATARS.map((src, i) => (
                    <li key={src} className="rounded-full overflow-hidden border-2 border-black" style={{ width: 40, height: 40, marginLeft: i === 0 ? 0 : -12 }}>
                      <img src={src} alt="Happy client" className="w-full h-full object-cover rounded-full" />
                    </li>
                  ))}
                </ul>
                <div>
                  <div className="flex items-center gap-2 text-white text-sm font-semibold">
                    <span className="text-[#A3D1FF]" aria-hidden>★★★★★</span>
                    <span>5.0</span>
                    <span className="text-white/45 font-normal">· 25 reviews</span>
                  </div>
                  <p className="text-white/50 text-xs m-0">Google, Clutch &amp; LinkedIn</p>
                </div>
              </div>
            </motion.div>

            {/* framed work image + solid stat chip */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.5, ease: EASE }}
              className="lg:col-span-6 relative"
            >
              <div className="relative border border-white/10 overflow-hidden">
                <img src={WORK[0].image} alt="B2B website we designed and built, Paving Leads" className="block w-full h-auto" />
              </div>
              <div className="absolute -bottom-5 -left-3 sm:left-6 bg-black border border-white/15 px-5 py-3">
                <div className="text-[#A3D1FF] font-bold leading-none" style={{ fontFamily: SERIF, fontSize: 22 }}>2× leads</div>
                <div className="text-white/50 text-[10px] uppercase tracking-[0.2em] mt-1">Month one · 98 PageSpeed</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── MARQUEE ──────────────────────────────────────────── */}
      <Marquee reduce={reduce} />

      {/* ── STAT BAND ────────────────────────────────────────── */}
      <section className="px-6 lg:px-12 py-16 md:py-20">
        <div className="mx-auto max-w-7xl grid grid-cols-2 md:grid-cols-4 border-t border-white/10">
          {[
            { v: '2.4–3.5%', l: 'Avg B2B site conversion. Most do worse.' },
            { v: '50+', l: 'Projects across three continents' },
            { v: '#1', l: 'Google rankings delivered' },
            { v: '<2s', l: 'Load times, built in from the first commit' },
          ].map((s, i) => (
            <motion.div
              key={s.l}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.07, ease: EASE }}
              className="border-b border-r border-white/10 [&:nth-child(2n)]:border-r-0 md:[&:nth-child(2n)]:border-r md:[&:last-child]:border-r-0 px-4 py-8 md:px-6 md:py-10"
            >
              <div className="text-white" style={{ fontFamily: SERIF, fontSize: 'clamp(2rem,4vw,3.5rem)', fontWeight: 500, letterSpacing: '-0.02em' }}>{s.v}</div>
              <p className="mt-3 text-sm leading-snug text-white/50 max-w-[22ch]">{s.l}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── 01 · POSITIONING ─────────────────────────────────── */}
      <section className="px-6 lg:px-12 py-20 md:py-28 border-t border-white/10">
        <div className="mx-auto max-w-7xl">
          <SectionHead index="01" kicker="The Brief" title="Results, not just aesthetics." />
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <motion.div {...reveal} className="lg:col-span-5 relative">
              <div className="relative aspect-[4/5] overflow-hidden border border-white/10">
                <img src={WORKSPACE} alt="Marc Friedman at work on a B2B web design project" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute top-4 left-4 w-4 h-4 border-l border-t border-white/40" />
                <div className="absolute top-4 right-4 w-4 h-4 border-r border-t border-white/40" />
                <div className="absolute bottom-4 left-4 w-4 h-4 border-l border-b border-white/40" />
                <div className="absolute bottom-4 right-4 w-4 h-4 border-r border-b border-white/40" />
              </div>
            </motion.div>
            <motion.div {...reveal} className="lg:col-span-7 space-y-6 text-white/70 leading-relaxed text-lg lg:text-xl">
              <p>
                Marc Friedman Design Agency is a professional web design company for B2B
                businesses. Too many B2B companies have a website that wins internal approval but
                fails to attract real clients. When no one converts, the lost revenue adds up at
                every stage of the funnel, and the average B2B site converts just 2.4–3.5%.
              </p>
              <p>
                Based in Tel Aviv and working across three continents, this B2B web design agency,
                and B2B creative agency, combines strategic design, UX for complex B2B buying
                journeys, brand integration, and technical depth. From B2B website design through
                full redesign, we build sites that turn traffic into pipeline.
              </p>
              <p className="text-white">
                No templates, no WordPress themes, no page builders. Every site is a custom build
                in React and Next.js, designed around your conversion goals and your buyers.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 02 · WHY IT WORKS ────────────────────────────────── */}
      <section className="px-6 lg:px-12 py-20 md:py-28 border-t border-white/10 bg-[#0a0a0a]">
        <div className="mx-auto max-w-7xl">
          <SectionHead index="02" kicker="Why it works" title="What sets our B2B web design services apart" />
          <div className="border-t border-white/10">
            {RESULTS.map((r) => (
              <motion.div key={r.n} {...reveal} className="group grid md:grid-cols-12 gap-5 md:gap-10 border-b border-white/10 py-9 md:py-12">
                <div className="md:col-span-5 flex items-start gap-5">
                  <span className="font-mono text-sm text-white/30 group-hover:text-[#A3D1FF] transition-colors pt-2">{r.n}</span>
                  <h3 style={{ fontFamily: SERIF, fontSize: 'clamp(1.4rem,2.2vw,2rem)', fontWeight: 500, lineHeight: 1.05, letterSpacing: '-0.01em' }}>{r.title}</h3>
                </div>
                <p className="md:col-span-7 text-white/60 leading-relaxed text-lg">{r.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 03 · PROCESS ─────────────────────────────────────── */}
      <section className="px-6 lg:px-12 py-20 md:py-28 border-t border-white/10">
        <div className="mx-auto max-w-7xl">
          <SectionHead index="03" kicker="The process" title="Discovery to measurable impact, in four moves." />
          <div className="border-t border-white/10">
            {PROCESS.map((p) => (
              <motion.div key={p.num} {...reveal} className="group grid md:grid-cols-12 gap-5 md:gap-10 border-b border-white/10 py-10 md:py-14 items-start">
                <div className="md:col-span-4 flex items-baseline gap-5">
                  <span className="text-white/20 group-hover:text-[#A3D1FF] transition-colors" style={{ fontFamily: SERIF, fontSize: 'clamp(2.5rem,5vw,4.5rem)', fontWeight: 500, lineHeight: 1 }}>{p.num}</span>
                  <h3 style={{ fontFamily: SERIF, fontSize: 'clamp(1.4rem,2.2vw,1.9rem)', fontWeight: 500, lineHeight: 1.05 }}>{p.title}</h3>
                </div>
                <p className="md:col-span-8 text-white/60 leading-relaxed text-lg">{p.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 04 · DIFFERENCE ──────────────────────────────────── */}
      <section className="px-6 lg:px-12 py-20 md:py-28 border-t border-white/10 bg-[#0a0a0a]">
        <div className="mx-auto max-w-7xl">
          <SectionHead
            index="04"
            kicker="The difference"
            title="What sets our B2B web design agency apart"
            lead="Most agencies focus on making things look good. We focus on making the phone ring, an outcome-focused B2B approach built on clarity, not complexity."
          />
          <div className="grid gap-px bg-white/10 border border-white/10 sm:grid-cols-2">
            {APART.map((a) => (
              <motion.div key={a.n} {...reveal} className="bg-[#0a0a0a] p-8 md:p-10">
                <span className="font-mono text-sm text-[#A3D1FF]">{a.n}</span>
                <h3 className="mt-4 mb-3" style={{ fontFamily: SERIF, fontSize: '1.35rem', fontWeight: 500 }}>{a.title}</h3>
                <p className="text-white/60 leading-relaxed">{a.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 05 · PROOF ───────────────────────────────────────── */}
      <section className="px-6 lg:px-12 py-20 md:py-28 border-t border-white/10">
        <div className="mx-auto max-w-7xl">
          <SectionHead index="05" kicker="Proof" title="Results that say it all." />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10 mb-10">
            {RESULT_TILES.map((t) => (
              <motion.div key={t.value} {...reveal} className="bg-black p-8">
                <div className="text-[#A3D1FF]" style={{ fontFamily: SERIF, fontSize: 'clamp(2.2rem,4vw,3.25rem)', fontWeight: 500, letterSpacing: '-0.02em' }}>{t.value}</div>
                <p className="mt-3 text-sm leading-snug text-white/55">{t.label}</p>
              </motion.div>
            ))}
          </div>

          <motion.div {...reveal} className="mb-16 border border-white/10 border-l-2 border-l-[#A3D1FF] bg-[#0a0a0a] p-8 md:p-10">
            <p className="text-white/75 leading-relaxed text-lg">
              Industry benchmarks tell the same story as our own client data. B2B manufacturers
              that invest in a proper redesign see dramatic gains: one company saw a{' '}
              <strong className="text-white">1,400% jump in web traffic and 120+ leads in 90 days</strong>{' '}
              where it previously earned about one lead a month; another saw a{' '}
              <strong className="text-white">105% increase in organic traffic and a 47% drop in bounce rate</strong>{' '}
              within 90 days of relaunch. When engagement goes up, so does the pipeline.
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {WORK.map((w) => (
              <motion.div key={w.title} {...reveal}>
                <Link href={w.href} className="group block border border-white/10 bg-black hover:border-[#A3D1FF]/60 transition-colors">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img src={w.image} alt={`${w.title}, a B2B website we designed`} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-5">
                    <div className="mb-1 font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">{w.cat}</div>
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-white group-hover:text-[#A3D1FF] transition-colors" style={{ fontFamily: SERIF, fontSize: '1.1rem' }}>{w.title}</h3>
                      <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-[#A3D1FF] transition-colors" />
                    </div>
                    <p className="mt-2 text-sm leading-snug text-white/55">{w.blurb}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 06 · OPERATOR ────────────────────────────────────── */}
      <section className="px-6 lg:px-12 py-20 md:py-28 border-t border-white/10 bg-[#0a0a0a]">
        <div ref={aboutRef} className="mx-auto max-w-7xl">
          <SectionHead index="06" kicker="The operator" title="No agency handoff. No offshore team." />
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <motion.div {...reveal} className="lg:col-span-5 relative">
              <div className="relative aspect-[4/5] overflow-hidden border border-white/10">
                <motion.img
                  src={PORTRAIT}
                  alt="Marc Friedman, the designer and developer behind every B2B build"
                  className="absolute inset-0 w-full h-full object-cover object-top grayscale contrast-125"
                  style={{ y: portraitY }}
                />
                <div className="absolute inset-x-0 bottom-0 bg-black/85 border-t border-white/10 px-6 py-4 flex items-center justify-between">
                  <div className="text-white italic" style={{ fontFamily: SERIF, fontSize: '1.35rem', fontWeight: 400 }}>Marc Friedman</div>
                  <div className="text-[9px] font-mono uppercase tracking-[0.3em] text-white/50">Tel Aviv</div>
                </div>
              </div>
            </motion.div>
            <motion.div {...reveal} className="lg:col-span-7">
              <div className="space-y-6 text-white/70 leading-relaxed text-lg lg:text-xl">
                <p>
                  Senior full-stack designer and developer based in Tel Aviv, working with B2B
                  companies across the US and Europe. Every project runs from discovery to launch
                  under one set of hands, so the strategy, the design, and the code all agree.
                </p>
                <p>
                  That’s how you get a site that looks the part and performs, custom-coded, fast,
                  and built around your exact sales process rather than a template your
                  competitors also use.
                </p>
              </div>
              <div className="mt-8 flex gap-6 text-[11px] font-mono uppercase tracking-[0.2em]">
                <Link href="/about/" className="text-[#A3D1FF] hover:underline">More about Marc</Link>
                <a href="https://www.linkedin.com/in/portfolio2/" target="_blank" rel="noopener noreferrer" className="text-[#A3D1FF] hover:underline">LinkedIn</a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 07 · INDUSTRIES ──────────────────────────────────── */}
      <section className="px-6 lg:px-12 py-20 md:py-28 border-t border-white/10">
        <div className="mx-auto max-w-7xl">
          <SectionHead
            index="07"
            kicker="Verticals"
            title="B2B industries we serve"
            lead="Our B2B web design business pairs web design with related digital marketing services wherever it supports performance. A specialized B2B website design agency drives higher-quality leads because it understands the purchasing dynamics, terminology, and trust signals of each vertical, which strengthens the marketing services outcomes in each one."
          />
          <div className="grid gap-px bg-white/10 border border-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {INDUSTRIES.map((it) => (
              <motion.div key={it.n} {...reveal} className="bg-black p-8">
                <span className="font-mono text-sm text-[#A3D1FF]">{it.n}</span>
                <h3 className="mt-4 mb-3 text-white" style={{ fontFamily: SERIF, fontSize: '1.2rem', fontWeight: 500 }}>{it.title}</h3>
                <p className="text-sm leading-relaxed text-white/55">{it.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 08 · THE STACK ───────────────────────────────────── */}
      <section className="px-6 lg:px-12 py-20 md:py-28 border-t border-white/10 bg-[#0a0a0a]">
        <div className="mx-auto max-w-7xl">
          <SectionHead
            index="08"
            kicker="The stack"
            title="Why custom Next.js beats templates for B2B lead generation"
            lead="Template sites can’t compete with custom development for B2B conversion. Here is why React and Next.js is the foundation, and why it matters to your pipeline."
          />

          <motion.div {...reveal} className="mb-14 overflow-x-auto border border-white/10">
            <table className="w-full min-w-[520px] border-collapse text-left">
              <caption className="text-left text-white/45 font-mono text-[11px] uppercase tracking-[0.25em] px-5 py-4 border-b border-white/10">
                2026 benchmarks · Core Web Vitals
              </caption>
              <thead>
                <tr className="text-white/50 text-sm">
                  <th className="px-5 py-4 font-medium border-b border-white/10">Metric</th>
                  <th className="px-5 py-4 font-medium text-[#A3D1FF] border-b border-white/10">Next.js</th>
                  <th className="px-5 py-4 font-medium border-b border-white/10">WordPress</th>
                </tr>
              </thead>
              <tbody className="text-white/80">
                {[
                  ['Largest Contentful Paint (LCP)', '~0.9s', '~2.8s'],
                  ['Interaction to Next Paint (INP)', '~120ms', '~320ms'],
                  ['Cumulative Layout Shift (CLS)', '~0.02', '~0.12'],
                ].map((row, i) => (
                  <tr key={row[0]} className={i < 2 ? 'border-b border-white/10' : undefined}>
                    <td className="px-5 py-4">{row[0]}</td>
                    <td className="px-5 py-4 font-semibold text-[#A3D1FF]" style={{ fontFamily: SERIF }}>{row[1]}</td>
                    <td className="px-5 py-4 text-white/50">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          <div className="grid gap-px bg-white/10 border border-white/10 sm:grid-cols-2">
            {NEXTJS.map((n) => (
              <motion.div key={n.n} {...reveal} className="bg-[#0a0a0a] p-8 md:p-10">
                <span className="font-mono text-sm text-[#A3D1FF]">{n.n}</span>
                <h3 className="mt-4 mb-3" style={{ fontFamily: SERIF, fontSize: '1.3rem', fontWeight: 500 }}>{n.title}</h3>
                <p className="text-white/60 leading-relaxed">{n.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 09 · FAQ ─────────────────────────────────────────── */}
      <section className="px-6 lg:px-12 py-20 md:py-28 border-t border-white/10">
        <div className="mx-auto max-w-4xl">
          <SectionHead index="09" kicker="FAQ" title="Straight answers." />
          <div className="border-t border-white/10">
            {FAQS.map((f, i) => (
              <details key={f.q} className="group border-b border-white/10 py-6">
                <summary className="flex cursor-pointer items-start gap-5 marker:content-none [&::-webkit-details-marker]:hidden">
                  <span className="font-mono text-sm text-white/30 pt-1.5">{String(i + 1).padStart(2, '0')}</span>
                  <span className="flex-1 text-white" style={{ fontFamily: SERIF, fontSize: 'clamp(1.15rem,1.8vw,1.5rem)', fontWeight: 500 }}>{f.q}</span>
                  <span className="shrink-0 text-[#A3D1FF] text-2xl leading-none transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 pl-10 text-white/60 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA (solid accent panel, no gradient) ────────────── */}
      <section className="px-6 lg:px-12 py-8 md:py-12 border-t border-white/10">
        <div className="mx-auto max-w-7xl bg-[#A3D1FF] text-black px-8 py-20 md:px-16 md:py-28">
          <div className="max-w-3xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-black/60 mb-6">Let&rsquo;s build it</p>
            <h2 style={{ fontFamily: SERIF, fontSize: 'clamp(2.2rem,5vw,4.25rem)', fontWeight: 500, lineHeight: 0.98, letterSpacing: '-0.025em' }}>
              Turn your B2B website into your best salesperson.
            </h2>
            <p className="mt-7 text-black/75 text-lg leading-relaxed max-w-2xl">
              Your website should be your number one sales tool. As your design partner and web
              development partner, we deliver custom B2B web design that boosts credibility,
              establishes your brand authority, and clarifies your value proposition. Book a call
              and we’ll audit your current site, no strings, no upselling.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <MagneticButton strength={20}>
                <Link href="/contact/" className="inline-flex items-center gap-3 bg-black text-white font-medium px-7 py-3.5 hover:bg-white hover:text-black transition-colors group">
                  <span>Book your free audit</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </MagneticButton>
              <Link href="/work/case-studies/" className="inline-flex items-center gap-2 border border-black/30 px-6 py-3.5 text-sm font-medium text-black hover:border-black transition-colors">
                Read the case studies
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
