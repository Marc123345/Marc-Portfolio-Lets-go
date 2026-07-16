"use client";

import { motion, AnimatePresence, useReducedMotion, useScroll, useTransform, type Variants } from 'framer-motion';
import { useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Plus } from 'lucide-react';
import MagneticButton from '@/components/MagneticButton';
import ContactForm from '@/components/ContactForm';

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

const HEADLINE = ['A', 'B2B', 'Web', 'Design', 'Agency', 'That', 'Drives', 'Pipeline'];

const reveal = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.8, ease: EASE },
} as const;

function ChapterMarker({ number, label }: { number: string; label: string }) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <span className="text-white/50 text-xs font-mono tracking-[0.3em] uppercase">{number}</span>
      <span className="h-[1px] flex-1 bg-white/15 max-w-[60px]" />
      <span className="text-white/50 text-xs font-mono tracking-[0.3em] uppercase">{label}</span>
    </div>
  );
}

function FAQRow({ item, index, open, onToggle }: { item: { q: string; a: string }; index: number; open: boolean; onToggle: () => void }) {
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

const GRAIN =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/></svg>\")";

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
    step: 'Step 1',
    title: 'Discovery & Strategy',
    body:
      'Every project starts with a deep dive into your goals, audience, and competitors. We review your current site to find exactly where prospects drop off, define what a qualified lead means for your business, map the buyer journey, and set real targets for traffic, leads, and conversion, before design begins. Agencies that skip this ship sites that look great and just sit there. We do the work.',
  },
  {
    step: 'Step 2',
    title: 'Design & User Experience',
    body:
      'Once strategy is set, we craft conversion-driven designs that speak to your B2B audience. We build wireframes and prototypes that streamline the flow, prioritize your content, and make navigation obvious. 80% of B2B buyers use mobile for work, so responsive web design isn’t up for debate. Trust signals like testimonials and case studies go where they move the needle.',
  },
  {
    step: 'Step 3',
    title: 'Build & Launch',
    body:
      'We build from the ground up in React and Next.js, no templates, no unnecessary plugins, for a site that flies. Launch includes thorough cross-device testing, security verification, page-speed work, and every SEO foundation: schema markup, metadata, URL architecture, and sitemap generation.',
  },
  {
    step: 'Step 4',
    title: 'Optimize & Scale',
    body:
      'Launch doesn’t mean done. We watch traffic, bounce rate, session duration, and conversion rate, then keep tuning with analytics and user-behavior data. Post-launch measurement, testing, and content adjustments make sure your lead generation keeps growing alongside the business.',
  },
];

const APART = [
  {
    title: 'No templates, no WordPress themes',
    body:
      'We build every B2B site from scratch, around each client’s exact sales process. Off-the-shelf themes are technical debt that slows you down and forces your conversion paths into a generic mold. Custom builds give you full control over how users interact, what you say, and how fast it loads. As a specialized development agency and design partner, we handle B2B website design, B2B web development, and B2B website development around your exact sales process.',
  },
  {
    title: 'Tel Aviv-based, global reach',
    body:
      'We serve US and European B2B companies from our studio in Tel Aviv. 50+ projects across three continents means we know how to communicate complex services across markets, time zones, and industries, including for firms in places like San Francisco where agency costs run far higher.',
  },
  {
    title: 'Proven results, not vague promises',
    body:
      'Our clients have earned #1 Google rankings, 300% traffic increases, and 250% engagement lifts. These aren’t hypotheticals, they’re measured outcomes from real projects, tracked and verified.',
  },
  {
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
    title: 'Dental practices & DSOs',
    body:
      'Complex services, multiple locations, and patients who research for weeks before booking an appointment. We drive appointment volume and support lead nurturing through the patient decision.',
  },
  {
    title: 'Industrial & manufacturing',
    body:
      'Technical products, long sales cycles, and buyers who want spec sheets, case studies, and proof before they contact sales. We make that complexity work for you.',
  },
  {
    title: 'Roofing & commercial services',
    body:
      'High-value work where local visibility and credibility decide who gets the call. We get these businesses dominating their markets online.',
  },
  {
    title: 'Media & publishing',
    body:
      'Content-heavy environments that demand performance at scale. Our Next.js architecture handles high-volume pages without giving up speed or engagement.',
  },
  {
    title: 'Home & property services',
    body:
      'Competitive local markets where a well-designed site is the difference between 50 leads a month and struggling to get 5.',
  },
];

const NEXTJS = [
  {
    title: 'Custom conversion paths',
    body:
      'Templates force your buyer journey into a pre-built layout. Custom development builds the path around your specific B2B sales process, from first visit through to the contact form.',
  },
  {
    title: 'Advanced SEO & AI search',
    body:
      'Server-side rendering, static generation, automatic sitemaps, and granular metadata are built in. That clean, semantic structure is also what wins in answer engine optimization and generative engine optimization, the AI-powered search paradigms. Our B2B web development and B2B website development services make that optimization cleaner than any template-based alternative.',
  },
  {
    title: 'Scalable architecture',
    body:
      'More pages, more traffic, more languages: modular components and serverless functions scale without piling up the technical debt template sites accumulate.',
  },
  {
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

/* ── Aurora blob, home hero idiom ───────────────────────────────────── */
function Aurora({ className, color, reduce, dur = 18, delay = 0 }: {
  className: string; color: string; reduce: boolean | null; dur?: number; delay?: number;
}) {
  return (
    <motion.div
      aria-hidden
      className={`absolute rounded-full pointer-events-none mix-blend-screen ${className}`}
      style={{ background: color, filter: 'blur(72px)', willChange: 'transform' }}
      animate={reduce ? {} : { x: [0, 60, -40, 0], y: [0, -50, 40, 0], scale: [1, 1.2, 0.92, 1] }}
      transition={reduce ? { duration: 0 } : { duration: dur, delay, repeat: Infinity, ease: 'easeInOut' }}
    />
  );
}

export default function B2BWebDesignPage() {
  const reduce = useReducedMotion();
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const aboutRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: aboutRef, offset: ['start end', 'end start'] });
  const portraitY = useTransform(scrollYProgress, [0, 1], ['-5%', '6%']);
  const portraitScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.08, 1, 1.06]);

  const wordVariants: Variants = {
    hidden: { opacity: 0, y: '0.65em', rotateX: -75 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 0.7, delay: 0.15 + i * 0.07, ease: EASE },
    }),
  };

  return (
    <main className="bg-black text-white">
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative w-full overflow-hidden bg-black pt-28 pb-16 md:pt-[140px] md:pb-24">
        <motion.div aria-hidden className="absolute inset-0 pointer-events-none">
          <Aurora className="top-[-12%] left-[6%] w-[520px] h-[520px]" color="rgba(163,209,255,0.18)" reduce={reduce} dur={18} />
          <Aurora className="bottom-[-15%] right-[2%] w-[600px] h-[600px]" color="rgba(120,170,255,0.15)" reduce={reduce} dur={22} delay={2} />
        </motion.div>

        <div className="container mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Left */}
            <div className="lg:col-span-7 text-center lg:text-left">
              <motion.div
                className="inline-flex items-center gap-2.5 mb-6 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
              >
                <motion.span
                  className="w-2 h-2 rounded-full bg-[#A3D1FF]"
                  aria-hidden
                  animate={reduce ? {} : { scale: [1, 1.6, 1], opacity: [1, 0.4, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                />
                <span className="font-heading uppercase text-white/70" style={{ fontSize: 13, letterSpacing: '0.22em', fontWeight: 500 }}>
                  B2B Web Design Agency
                </span>
              </motion.div>

              <h1
                className="font-heading leading-[0.95] m-0"
                style={{ fontFamily: SERIF, fontWeight: 500, fontSize: 'clamp(2.4rem, 5vw, 68px)', color: '#FCFCFB', letterSpacing: '-0.02em', textWrap: 'balance', perspective: 800 }}
              >
                {HEADLINE.map((word, i) => {
                  const accent = word === 'Pipeline';
                  const isB2B = word === 'B2B';
                  return (
                    <motion.span
                      key={`${word}-${i}`}
                      custom={i}
                      variants={wordVariants}
                      initial="hidden"
                      animate="show"
                      className="inline-block"
                      style={{ marginRight: '0.26em', transformOrigin: 'bottom', transformStyle: 'preserve-3d' }}
                    >
                      {accent ? (
                        <motion.span
                          className="inline-block"
                          style={{
                            backgroundImage: 'linear-gradient(110deg,#A3D1FF 10%,#ffffff 45%,#A3D1FF 80%)',
                            backgroundSize: '220% 100%',
                            WebkitBackgroundClip: 'text',
                            backgroundClip: 'text',
                            color: 'transparent',
                          }}
                          animate={reduce ? {} : { backgroundPosition: ['0% 0%', '220% 0%'] }}
                          transition={{ duration: 4.5, repeat: Infinity, ease: 'linear' }}
                        >
                          {word}
                        </motion.span>
                      ) : isB2B ? (
                        <span className="text-[#A3D1FF]">{word}</span>
                      ) : (
                        word
                      )}
                    </motion.span>
                  );
                })}
              </h1>

              <motion.p
                className="text-white/80 mx-auto lg:mx-0 mt-6"
                style={{ fontFamily: 'var(--font-body)', fontSize: 18, lineHeight: '30px', maxWidth: 560 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.85, ease: EASE }}
              >
                A good-looking site is worthless if it generates no leads. We build custom React
                &amp; Next.js sites for B2B companies in the US and Europe that turn traffic into
                qualified pipeline, 50+ projects across 3 continents.
              </motion.p>

              <motion.div
                className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-3 mt-9"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0, ease: EASE }}
              >
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
              </motion.div>

              <motion.div
                className="flex items-center justify-center lg:justify-start gap-4 mt-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.15, ease: EASE }}
              >
                <ul className="flex p-0 m-0 list-none">
                  {CLIENT_AVATARS.map((src, i) => (
                    <li key={src} className="rounded-full overflow-hidden border-2 border-black" style={{ width: 44, height: 44, marginLeft: i === 0 ? 0 : -12 }}>
                      <img src={src} alt="Happy client" className="w-full h-full object-cover rounded-full" />
                    </li>
                  ))}
                </ul>
                <div className="text-left">
                  <div className="flex items-center gap-2" style={{ fontFamily: 'var(--font-body)', fontSize: 16, fontWeight: 600, color: '#FCFCFB' }}>
                    <span className="text-[#A3D1FF]" aria-hidden>★★★★★</span>
                    <span>5.0</span>
                    <span className="text-white/50 font-normal">· 25 reviews</span>
                  </div>
                  <p className="text-white/60 m-0" style={{ fontSize: 13, lineHeight: '18px' }}>Google, Clutch &amp; LinkedIn</p>
                </div>
              </motion.div>
            </div>

            {/* Right — framed work mockup with floating stat cards */}
            <motion.div
              className="lg:col-span-5 flex justify-center"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.25, ease: EASE }}
            >
              <div className="relative" style={{ width: 'min(460px, 88vw)' }}>
                <motion.div
                  className="overflow-hidden rounded-2xl border border-white/10 shadow-[0_40px_90px_-20px_rgba(0,0,0,0.7),0_0_60px_-10px_rgba(163,209,255,0.35)]"
                  animate={reduce ? {} : { y: [0, -12, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <img src={WORK[0].image} alt="B2B website we designed and built, Paving Leads" className="block w-full h-auto" />
                </motion.div>

                <motion.div
                  aria-hidden
                  className="absolute z-30 rounded-xl border border-white/10 bg-black/50 px-3.5 py-2 backdrop-blur-md shadow-[0_10px_30px_-10px_rgba(0,0,0,0.7)]"
                  style={{ top: '10%', right: '-8%' }}
                  animate={reduce ? {} : { y: [0, -14, 0] }}
                  transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <div className="text-[#A3D1FF] font-heading text-xl font-bold leading-none">98<span className="text-white/40 text-sm">/100</span></div>
                  <div className="text-white/60 text-[11px] uppercase tracking-wider mt-0.5">PageSpeed</div>
                </motion.div>

                <motion.div
                  aria-hidden
                  className="absolute z-30 flex items-center gap-2 rounded-xl border border-white/10 bg-black/50 px-3.5 py-2 backdrop-blur-md shadow-[0_10px_30px_-10px_rgba(0,0,0,0.7)]"
                  style={{ bottom: '12%', left: '-9%' }}
                  animate={reduce ? {} : { y: [0, 14, 0] }}
                  transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <span className="text-[#A3D1FF] text-lg" aria-hidden>↑</span>
                  <div>
                    <div className="text-white font-heading text-base font-bold leading-none">2× leads</div>
                    <div className="text-white/60 text-[11px] uppercase tracking-wider mt-0.5">Month one</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── POSITIONING (about-style two column) ─────────────── */}
      <section className="relative py-24 md:py-32 px-6 lg:px-12 bg-[#0a0a0a] border-t border-white/10 overflow-hidden">
        <div className="absolute top-1/3 -right-40 w-[560px] h-[560px] bg-[#A3D1FF]/8 rounded-full blur-[150px] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative">
          <ChapterMarker number="Chapter · The Brief" label="Results, not aesthetics" />
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 items-center">
            <motion.div {...reveal} className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
                <img src={WORKSPACE} alt="Marc Friedman at work on a B2B web design project" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                <div className="absolute top-4 left-4 w-4 h-4 border-l border-t border-white/30" />
                <div className="absolute top-4 right-4 w-4 h-4 border-r border-t border-white/30" />
                <div className="absolute bottom-4 left-4 w-4 h-4 border-l border-b border-white/30" />
                <div className="absolute bottom-4 right-4 w-4 h-4 border-r border-b border-white/30" />
              </div>
            </motion.div>
            <motion.div {...reveal} className="space-y-5 text-white/70 leading-relaxed text-lg">
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

      {/* ── WHY RESULTS ──────────────────────────────────────── */}
      <section className="relative py-24 md:py-32 px-6 lg:px-12 bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <ChapterMarker number="Chapter · Why It Works" label="B2B web design services" />
          <motion.h2 {...reveal} className="mb-14 max-w-3xl leading-tight" style={{ fontFamily: SERIF, fontSize: 'clamp(1.9rem,3.4vw,3rem)', fontWeight: 500 }}>
            What sets our B2B web design services apart
          </motion.h2>
          <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2">
            {RESULTS.map((r, i) => (
              <motion.div
                key={r.n}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, delay: (i % 2) * 0.08, ease: EASE }}
                className="flex flex-col bg-black p-8 md:p-10"
              >
                <span className="mb-4 font-mono text-sm text-[#A3D1FF]">{r.n}</span>
                <h3 className="mb-3 text-xl text-white" style={{ fontFamily: SERIF }}>{r.title}</h3>
                <p className="text-white/65 leading-relaxed">{r.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ──────────────────────────────────────────── */}
      <section className="relative py-24 md:py-32 px-6 lg:px-12 bg-[#0a0a0a] border-t border-white/10 overflow-hidden">
        <div className="absolute -top-20 left-10 w-[500px] h-[500px] bg-[#A3D1FF]/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-5xl mx-auto relative">
          <ChapterMarker number="Chapter · The Process" label="Discovery → impact" />
          <motion.h2 {...reveal} className="mb-14" style={{ fontFamily: SERIF, fontSize: 'clamp(1.9rem,3.4vw,3rem)', fontWeight: 500 }}>
            How our B2B web design process works
          </motion.h2>
          <ol className="relative space-y-12 border-l border-white/15 pl-8">
            {PROCESS.map((p, i) => (
              <motion.li
                key={p.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, delay: i * 0.05, ease: EASE }}
                className="relative"
              >
                <span className="absolute -left-[41px] flex h-5 w-5 items-center justify-center rounded-full border border-[#A3D1FF] bg-[#0a0a0a]">
                  <span className="h-2 w-2 rounded-full bg-[#A3D1FF]" />
                </span>
                <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-[#A3D1FF]">{p.step}</p>
                <h3 className="mt-1 mb-2 text-xl text-white" style={{ fontFamily: SERIF }}>{p.title}</h3>
                <p className="max-w-3xl text-white/65 leading-relaxed">{p.body}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── WHAT SETS US APART ───────────────────────────────── */}
      <section className="relative py-24 md:py-32 px-6 lg:px-12 bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <ChapterMarker number="Chapter · Difference" label="Why us" />
          <motion.h2 {...reveal} className="mb-4" style={{ fontFamily: SERIF, fontSize: 'clamp(1.9rem,3.4vw,3rem)', fontWeight: 500 }}>
            What sets our B2B web design agency apart
          </motion.h2>
          <motion.p {...reveal} className="mb-12 max-w-2xl text-white/60">
            Most agencies focus on making things look good. We focus on making the phone ring, an
            outcome-focused B2B approach built on clarity, not complexity.
          </motion.p>
          <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2">
            {APART.map((a, i) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, delay: (i % 2) * 0.08, ease: EASE }}
                className="border-l-2 border-[#A3D1FF]/40 pl-6"
              >
                <h3 className="mb-3 text-xl text-white" style={{ fontFamily: SERIF }}>{a.title}</h3>
                <p className="text-white/65 leading-relaxed">{a.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROVEN RESULTS + WORK ────────────────────────────── */}
      <section className="relative py-24 md:py-32 px-6 lg:px-12 bg-[#0a0a0a] border-t border-white/10 overflow-hidden">
        <div className="absolute top-0 -right-40 w-[600px] h-[600px] bg-[#A3D1FF]/8 rounded-full blur-[160px] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative">
          <ChapterMarker number="Chapter · Proof" label="Results that say it all" />
          <div className="mb-12 grid grid-cols-2 gap-px overflow-hidden border border-white/10 bg-white/10 lg:grid-cols-4">
            {RESULT_TILES.map((t, i) => (
              <motion.div
                key={t.value}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.06, ease: EASE }}
                className="bg-[#0a0a0a] p-8"
              >
                <div className="text-4xl font-semibold text-[#A3D1FF]" style={{ fontFamily: SERIF }}>{t.value}</div>
                <p className="mt-3 text-sm leading-snug text-white/60">{t.label}</p>
              </motion.div>
            ))}
          </div>

          <motion.div {...reveal} className="mb-14 border border-[#A3D1FF]/20 bg-[#0d1218] p-8">
            <p className="text-white/75 leading-relaxed">
              Industry benchmarks tell the same story as our own client data. B2B manufacturers
              that invest in a proper redesign see dramatic gains: one company saw a{' '}
              <strong className="text-white">1,400% jump in web traffic and 120+ leads in 90 days</strong>{' '}
              where it previously earned about one lead a month; another saw a{' '}
              <strong className="text-white">105% increase in organic traffic and a 47% drop in bounce rate</strong>{' '}
              within 90 days of relaunch. When engagement goes up, so does the pipeline.
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {WORK.map((w, i) => (
              <motion.div
                key={w.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, delay: i * 0.06, ease: EASE }}
              >
                <Link href={w.href} className="group block overflow-hidden border border-white/10 bg-black transition-colors hover:border-[#A3D1FF]/60">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img src={w.image} alt={`${w.title}, a B2B website we designed`} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-5">
                    <div className="mb-1 font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">{w.cat}</div>
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-white group-hover:text-[#A3D1FF] transition-colors" style={{ fontFamily: SERIF }}>{w.title}</h3>
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

      {/* ── OPERATOR / ABOUT (about-page portrait treatment) ──── */}
      <section className="relative py-24 md:py-32 px-6 lg:px-12 bg-black border-t border-white/10 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.05] mix-blend-overlay pointer-events-none"
          style={{ backgroundImage: GRAIN }}
        />
        <div ref={aboutRef} className="max-w-7xl mx-auto relative">
          <ChapterMarker number="Chapter · The Operator" label="One set of hands" />
          <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-16 items-center">
            <motion.div {...reveal} className="relative">
              <div className="relative aspect-[4/5] overflow-hidden">
                <motion.img
                  src={PORTRAIT}
                  alt="Marc Friedman, the designer and developer behind every B2B build"
                  className="absolute inset-0 w-full h-full object-cover object-top grayscale contrast-125"
                  style={{ y: portraitY, scale: portraitScale }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                <div className="absolute top-4 left-4 w-4 h-4 border-l border-t border-white/30" />
                <div className="absolute top-4 right-4 w-4 h-4 border-r border-t border-white/30" />
                <div className="absolute bottom-4 left-4 w-4 h-4 border-l border-b border-white/30" />
                <div className="absolute bottom-4 right-4 w-4 h-4 border-r border-b border-white/30" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="text-[9px] font-mono uppercase tracking-[0.3em] text-white/55 mb-1">The Operator</div>
                  <div className="text-white italic leading-[0.9]" style={{ fontFamily: SERIF, fontSize: 'clamp(1.5rem,2.2vw,2rem)', fontWeight: 400 }}>Marc Friedman</div>
                </div>
              </div>
            </motion.div>
            <motion.div {...reveal}>
              <h2 className="mb-6 leading-tight" style={{ fontFamily: SERIF, fontSize: 'clamp(1.8rem,3.2vw,2.75rem)', fontWeight: 500 }}>
                No agency handoff. No offshore team.
              </h2>
              <div className="space-y-5 text-white/70 leading-relaxed text-lg">
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

      {/* ── INDUSTRIES ───────────────────────────────────────── */}
      <section className="relative py-24 md:py-32 px-6 lg:px-12 bg-[#0a0a0a] border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <ChapterMarker number="Chapter · Verticals" label="Industries we serve" />
          <motion.h2 {...reveal} className="mb-4" style={{ fontFamily: SERIF, fontSize: 'clamp(1.9rem,3.4vw,3rem)', fontWeight: 500 }}>
            B2B industries we serve
          </motion.h2>
          <motion.p {...reveal} className="mb-12 max-w-2xl text-white/60">
            Our B2B web design business pairs web design with related digital marketing services
            wherever it supports performance. A specialized B2B website design agency drives
            higher-quality leads because it understands the purchasing dynamics, terminology, and
            trust signals of each vertical, which strengthens the marketing services outcomes in
            each one.
          </motion.p>
          <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {INDUSTRIES.map((it, i) => (
              <motion.div
                key={it.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.06, ease: EASE }}
                className="bg-[#0a0a0a] p-8"
              >
                <h3 className="mb-3 text-lg text-white" style={{ fontFamily: SERIF }}>{it.title}</h3>
                <p className="text-sm leading-relaxed text-white/60">{it.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY NEXT.JS ──────────────────────────────────────── */}
      <section className="relative py-24 md:py-32 px-6 lg:px-12 bg-black border-t border-white/10">
        <div className="max-w-5xl mx-auto">
          <ChapterMarker number="Chapter · The Stack" label="Custom Next.js" />
          <motion.h2 {...reveal} className="mb-4" style={{ fontFamily: SERIF, fontSize: 'clamp(1.9rem,3.4vw,3rem)', fontWeight: 500 }}>
            Why custom Next.js beats templates for B2B lead generation
          </motion.h2>
          <motion.p {...reveal} className="mb-10 max-w-2xl text-white/60">
            Template sites can’t compete with custom development for B2B conversion. Here is why
            React and Next.js is the foundation, and why it matters to your bottom line.
          </motion.p>

          <motion.div {...reveal} className="mb-12 overflow-x-auto">
            <table className="w-full min-w-[480px] border-collapse text-left text-sm">
              <caption className="mb-3 text-left text-white/50">2026 performance benchmarks, Core Web Vitals</caption>
              <thead>
                <tr className="border-b border-white/15 text-white/50">
                  <th className="py-3 pr-4 font-medium">Metric</th>
                  <th className="py-3 pr-4 font-medium text-[#A3D1FF]">Next.js</th>
                  <th className="py-3 font-medium">WordPress</th>
                </tr>
              </thead>
              <tbody className="text-white/80">
                {[
                  ['Largest Contentful Paint (LCP)', '~0.9s', '~2.8s'],
                  ['Interaction to Next Paint (INP)', '~120ms', '~320ms'],
                  ['Cumulative Layout Shift (CLS)', '~0.02', '~0.12'],
                ].map((row) => (
                  <tr key={row[0]} className="border-b border-white/10">
                    <td className="py-3 pr-4">{row[0]}</td>
                    <td className="py-3 pr-4 font-semibold text-[#A3D1FF]">{row[1]}</td>
                    <td className="py-3 text-white/55">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="mt-3 text-sm text-white/50">
              Those aren’t marginal differences. They feed directly into how Google evaluates and
              ranks your site, and our Next.js architecture delivers secure, scalable, fast, and
              mobile-friendly without the plugin bloat.
            </p>
          </motion.div>

          <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
            {NEXTJS.map((n, i) => (
              <motion.div
                key={n.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: (i % 2) * 0.08, ease: EASE }}
              >
                <h3 className="mb-2 text-lg text-white" style={{ fontFamily: SERIF }}>{n.title}</h3>
                <p className="text-white/60 leading-relaxed">{n.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section className="relative py-24 md:py-32 px-6 lg:px-12 bg-[#0a0a0a] border-t border-white/10 overflow-hidden">
        <div className="absolute -top-20 left-10 w-[500px] h-[500px] bg-[#A3D1FF]/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative">
          <ChapterMarker number="Chapter · Q&A" label="Frequently Asked" />
          <div className="grid md:grid-cols-[1fr_1.3fr] gap-8">
            {/* Left, sticky header */}
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
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="text-white/60 text-lg leading-relaxed max-w-sm mb-8"
                >
                  The most common things B2B clients ask before we kick off. Don&apos;t see
                  yours? <span className="text-white">Just ask.</span>
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                  className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/40"
                >
                  {FAQS.length} questions · 0 FAQs skipped
                </motion.p>
              </div>
            </div>

            {/* Right, editorial Q&A list */}
            <div className="border-t border-white/10">
              {FAQS.map((item, i) => (
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

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-t border-white/10 px-6 py-24 md:py-28 lg:px-12 bg-black">
        <div className="pointer-events-none absolute -bottom-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#A3D1FF]/8 blur-[140px]" />
        <div className="relative mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left, pitch */}
          <div>
            <ChapterMarker number="Chapter · Start" label="Book your audit" />
            <motion.h2 {...reveal} style={{ fontFamily: SERIF, fontSize: 'clamp(2rem,4vw,3.5rem)', fontWeight: 500, lineHeight: 1.02, letterSpacing: '-0.02em' }}>
              Turn your B2B website into your best salesperson
            </motion.h2>
            <motion.p {...reveal} className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
              Your website should be your number one sales tool. If it isn’t generating leads, the
              problem usually isn’t your market, it’s your website. As your design partner and web
              development partner, we deliver custom B2B web design that boosts credibility,
              establishes your brand authority, and clarifies your value proposition. Book a call
              and we’ll audit your current site, no strings, no upselling.
            </motion.p>
            <motion.div {...reveal} className="mt-8">
              <Link href="/work/case-studies/" className="inline-flex items-center gap-2 text-sm font-medium text-white/70 border-b border-white/20 pb-0.5 hover:text-[#A3D1FF] hover:border-[#A3D1FF] transition-colors group">
                <span>Read the case studies</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </motion.div>
          </div>

          {/* Right, contact form */}
          <motion.div {...reveal} className="border border-white/10 bg-[#0a0a0a] p-5 md:p-6">
            <ContactForm />
          </motion.div>
        </div>
      </section>
    </main>
  );
}
