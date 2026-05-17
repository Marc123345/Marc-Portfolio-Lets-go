"use client";

import { useState, useRef, useEffect } from 'react';
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from 'framer-motion';
import { ArrowRight, ArrowUpRight, Plus, MessageSquare } from 'lucide-react';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';

// ─── constants ────────────────────────────────────────────────────────────────

const SERIF = "var(--font-heading)";
const ACCENT = '#A3D1FF';
const CALENDLY = 'https://calendly.com/marc-friedman-web-design--meeting-link/30min';
const PORTRAIT =
  'https://ik.imagekit.io/qcvroy8xpd/PW8VUKH.png?updatedAt=1759693058055&tr=f-webp';

const GRAIN =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/></svg>\")";

// ─── shared primitives ────────────────────────────────────────────────────────

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

function Reveal({
  children,
  delay = 0,
  className = '',
  direction = 'up',
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: 'up' | 'left' | 'right';
}) {
  const variants = {
    up: { hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0 } },
    left: { hidden: { opacity: 0, x: 32 }, visible: { opacity: 1, x: 0 } },
    right: { hidden: { opacity: 0, x: -32 }, visible: { opacity: 1, x: 0 } },
  };
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={variants[direction]}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── schema ───────────────────────────────────────────────────────────────────

function SchemaMarkup() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: 'Web Design for Longevity & Biohacking Clinics',
        description:
          'Custom React websites for longevity, biohacking, and regenerative medicine clinics. 14-day delivery. Free Google Business setup and 3 months of SEO included.',
        provider: {
          '@type': 'LocalBusiness',
          name: 'Marc Friedman Web Design',
          url: 'https://www.marcfriedmanportfolio.com',
          email: 'marcf@marcfriedmanwebdesign.com',
          sameAs: [
            'https://www.linkedin.com/in/portfolio2/',
            'https://clutch.co/profile/marc-friedman-design-agency',
          ],
        },
        serviceType: 'Web Design and Development',
        areaServed: { '@type': 'Country', name: 'United States' },
        audience: {
          '@type': 'Audience',
          audienceType: 'Longevity and biohacking clinic owners',
        },
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ─── jotform embed ────────────────────────────────────────────────────────────

function JotformEmbedCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 32 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="relative self-stretch flex flex-col"
    >
      <div className="relative border border-white/10 p-7 md:p-9 flex-1 flex flex-col" style={{ background: 'rgba(10,10,10,0.85)', backdropFilter: 'blur(16px)' }}>
        {/* Corner bolts */}
        <div className="absolute top-3 left-3 w-1.5 h-1.5 rounded-full bg-white/15" />
        <div className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full bg-white/15" />
        <div className="absolute bottom-3 left-3 w-1.5 h-1.5 rounded-full bg-white/15" />
        <div className="absolute bottom-3 right-3 w-1.5 h-1.5 rounded-full bg-white/15" />

        <div className="flex items-center justify-between mb-6 text-[10px] font-mono uppercase tracking-[0.3em] text-white/40">
          <span>Audit Request · 01</span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Accepting requests
          </span>
        </div>

        <ContactForm />
      </div>
    </motion.div>
  );
}

// ─── section 01 · hero ────────────────────────────────────────────────────────

const CLINIC_TAGS = [
  'NAD+ IV Drips',
  'Cryotherapy',
  'Hyperbaric O₂',
  'Hormone Health',
  'Full-Body MRI',
  'Regenerative Medicine',
];

function HeroSection() {
  const [activeTag, setActiveTag] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setActiveTag((i) => (i + 1) % CLINIC_TAGS.length), 2400);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex flex-col overflow-hidden"
      style={{ backgroundColor: '#0A0A0A' }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://ik.imagekit.io/qcvroy8xpd/32119d88-0da4-45ed-bbf8-a6049119f728.jpeg')",
          opacity: 0.38,
        }}
        role="presentation"
      />
      {/* Layered overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/85" />
      {/* Ambient glow — right side matches image highlight */}
      <div
        className="absolute top-1/3 right-0 w-[600px] h-[600px] rounded-full blur-[180px] pointer-events-none"
        style={{ backgroundColor: `${ACCENT}0A` }}
      />
      {/* Grain */}
      <div
        className="absolute inset-0 opacity-[0.055] mix-blend-overlay pointer-events-none"
        style={{ backgroundImage: GRAIN }}
      />

      {/* top spacing to clear the site nav */}
      <div style={{ paddingTop: '5.5rem' }} />

      {/* ── Main hero content ── */}
      <div className="relative z-10 flex-1 flex items-center w-full px-6 sm:px-10 lg:px-16 xl:px-20">
        <div className="w-full max-w-[1400px] mx-auto grid lg:grid-cols-[1.15fr_0.85fr] gap-8 lg:gap-14 xl:gap-20 items-center py-12 md:py-16">
        <div>

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex items-center gap-3 mb-7"
          >
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: ACCENT }} />
            <span
              className="uppercase tracking-[0.28em] text-[12px]"
              style={{ color: '#C1C3FF', fontFamily: 'var(--font-body)', fontWeight: 400 }}
            >
              Websites for Longevity &amp; Biohacking Clinics
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 48 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="mb-4"
            style={{
              fontFamily: SERIF,
              fontSize: 'clamp(2.1rem, 3.8vw, 3.75rem)',
              fontWeight: 600,
              lineHeight: 1.1,
              letterSpacing: '-0.025em',
              color: '#F5F5F0',
            }}
          >
            A website as good as{' '}
            <em className="italic" style={{ color: ACCENT, fontWeight: 400 }}>
              the clinic behind it.
            </em>
          </motion.h1>

          {/* Subhead */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="mb-8"
            style={{
              color: 'rgba(255,255,255,0.60)',
              fontSize: '17px',
              fontFamily: 'var(--font-body)',
              fontWeight: 300,
              lineHeight: '1.7',
              letterSpacing: '0.02em',
            }}
          >
            Built for longevity and biohacking clinics.
          </motion.p>

          {/* Offer stack */}
          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.48, ease: [0.22, 1, 0.36, 1] }}
            className="mb-5 space-y-0"
            style={{ listStyle: 'none', padding: 0, margin: 0 }}
          >
            {[
              { offer: 'Free 30-minute call',                qualifier: 'We talk. No pitch.' },
              { offer: 'Free website review',               qualifier: "I show you what's broken on the call." },
              { offer: '3 months of Google + AI search help', qualifier: 'Free after your site goes live.' },
            ].map((row, i) => (
              <motion.li
                key={row.offer}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.52 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-baseline gap-3 py-3 border-b border-white/8"
              >
                <span
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '15px',
                    fontWeight: 500,
                    color: '#F5F5F0',
                    minWidth: 0,
                  }}
                >
                  {row.offer}
                </span>
                <span style={{ color: ACCENT, fontSize: '13px', flexShrink: 0 }}>→</span>
                <span
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '14px',
                    fontWeight: 300,
                    color: 'rgba(255,255,255,0.50)',
                    letterSpacing: '0.01em',
                  }}
                >
                  {row.qualifier}
                </span>
              </motion.li>
            ))}
          </motion.ul>

          {/* Microcopy */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.84 }}
            className="mb-8"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '12px',
              fontWeight: 400,
              color: 'rgba(255,255,255,0.35)',
              letterSpacing: '0.02em',
            }}
          >
            No contract. Nothing to sign. Book the call.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8"
          >
            <a
              href={CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-cta-btn inline-flex items-center gap-2 bg-white text-black hover:bg-[#A3D1FF] transition-colors px-7 py-3.5"
              style={{ fontFamily: 'var(--font-body)', fontSize: '14px', fontWeight: 500, letterSpacing: '0.01em' }}
            >
              Book the call
              <ArrowRight className="w-4 h-4" />
            </a>

            <Link
              href="/work"
              className="inline-flex items-center gap-2 border-b border-white/25 hover:border-[#A3D1FF] hover:text-[#A3D1FF] transition-colors pb-0.5"
              style={{ fontFamily: 'var(--font-body)', fontSize: '14px', fontWeight: 400, color: 'rgba(255,255,255,0.70)' }}
            >
              See the work
            </Link>
          </motion.div>

          {/* Trust line */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.05 }}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '12px',
              fontWeight: 400,
              color: 'rgba(255,255,255,0.35)',
              letterSpacing: '0.04em',
            }}
          >
            5.0 on Google &nbsp;·&nbsp; 4.8 on Clutch &nbsp;·&nbsp; 50+ websites built
          </motion.p>

        </div>{/* end left col */}

        {/* Right col — Jotform */}
        <JotformEmbedCard />

        </div>{/* end grid */}
      </div>

      {/* ── Bottom service tag strip ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.75 }}
        className="relative z-10 w-full border-t border-white/10"
        style={{ background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(8px)' }}
      >
        <div
          className="mx-auto flex items-center gap-0 overflow-x-auto scrollbar-hide"
          style={{ maxWidth: '1400px', padding: '0 44px' }}
        >
          {CLINIC_TAGS.map((tag, i) => (
            <button
              key={tag}
              onClick={() => setActiveTag(i)}
              className={`shrink-0 px-6 py-4 text-[12px] uppercase tracking-[0.22em] border-b-2 transition-all ${
                activeTag === i
                  ? 'border-[#A3D1FF] text-white'
                  : 'border-transparent text-white/40 hover:text-white/70'
              }`}
              style={{ fontFamily: 'var(--font-body)', fontWeight: 400 }}
            >
              {tag}
            </button>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

// ─── section 02 · the mismatch ────────────────────────────────────────────────

function GapSection() {
  const inside = [
    'NAD+ IV drips',
    'Cryotherapy chambers',
    'Hyperbaric oxygen',
    'Hormone optimization',
    'Full-body MRI',
    '$500–$2,500 sessions',
  ];
  const outside = [
    'Loads in 6 seconds',
    'Stock photos of generic doctors',
    'Mobile menu broken',
    'No Google Business Profile',
    'Ranks on page 4',
    'Built on a Wix template in 2017',
  ];

  return (
    <section id="mismatch" className="relative py-28 md:py-36 px-6 lg:px-12 bg-black border-t border-white/10 overflow-hidden">
      <div
        className="absolute -top-32 right-0 w-[500px] h-[500px] rounded-full blur-[160px] pointer-events-none"
        style={{ backgroundColor: `${ACCENT}07` }}
      />

      <div className="max-w-7xl mx-auto">
        <ChapterMarker number="Chapter · 02" label="The Mismatch" />

        <Reveal>
          <div className="grid md:grid-cols-2 mb-16">
            {/* Left — inside */}
            <div className="border border-white/10 p-10 md:p-14">
              <div className="space-y-4">
                {inside.map((item) => (
                  <div
                    key={item}
                    className="flex items-baseline gap-5 border-b border-white/6 pb-4 last:border-0"
                  >
                    <span className="text-white/20 font-mono text-xs shrink-0">—</span>
                    <span
                      className="text-white/90 leading-tight"
                      style={{
                        fontFamily: SERIF,
                        fontSize: 'clamp(1.1rem, 1.8vw, 1.4rem)',
                      }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — current site */}
            <div className="border border-white/10 border-l-0 md:border-l-0 p-10 md:p-14 bg-[#0a0a0a]">
              <p className="text-[10px] font-mono uppercase tracking-[0.35em] text-white/35 mb-10">
                — Your current website
              </p>
              <div className="space-y-4">
                {outside.map((item) => (
                  <div
                    key={item}
                    className="flex items-baseline gap-5 border-b border-white/6 pb-4 last:border-0"
                  >
                    <span className="text-white/20 font-mono text-xs shrink-0">—</span>
                    <span
                      className="text-white/45 leading-tight line-through decoration-white/20"
                      style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.4rem)' }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <p
            className="text-center text-white/85 leading-tight tracking-[-0.02em] italic max-w-3xl mx-auto"
            style={{
              fontFamily: SERIF,
              fontSize: 'clamp(1.4rem, 2.8vw, 2.25rem)',
              fontWeight: 400,
            }}
          >
            "That gap is costing you a membership every day."
          </p>
        </Reveal>
      </div>
    </section>
  );
}

// ─── section 03 · social proof ────────────────────────────────────────────────

function SocialProofSection() {
  const stats = [
    { n: '5.0', l: 'Google Rating' },
    { n: '4.8', l: 'Clutch Score' },
    { n: '25', l: 'Verified Reviews' },
    { n: '50+', l: 'Projects Shipped' },
    { n: '3', l: 'Continents' },
  ];

  return (
    <section className="relative py-24 md:py-32 px-6 lg:px-12 bg-[#0a0a0a] border-t border-white/10 overflow-hidden">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] rounded-full blur-[140px] pointer-events-none"
        style={{ backgroundColor: `${ACCENT}09` }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Stats strip */}
        <Reveal>
          <div className="flex flex-wrap items-stretch border border-white/10 divide-x divide-white/10 mb-16">
            {stats.map((s) => (
              <div key={s.l} className="flex-1 min-w-[120px] px-5 py-8 text-center">
                <div
                  className="italic leading-none mb-2"
                  style={{
                    fontFamily: SERIF,
                    fontSize: 'clamp(1.75rem, 3vw, 2.75rem)',
                    fontWeight: 400,
                    color: ACCENT,
                  }}
                >
                  {s.n}
                </div>
                <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-white/40">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

      </div>
    </section>
  );
}

// ─── section 04 · the standard ────────────────────────────────────────────────

const REFERENCE_CLINICS = [
  {
    name: 'Fountain Life',
    focus: 'Full-body diagnostics · longevity',
    theme: 'Preventive Medicine',
  },
  {
    name: 'Next Health',
    focus: 'NAD+ IV therapy · optimization',
    theme: 'Biohacking',
  },
  {
    name: 'Upgrade Labs',
    focus: 'Cryotherapy · recovery tech',
    theme: 'Performance',
  },
  {
    name: 'Cenegenics',
    focus: 'Hormone · metabolic health',
    theme: 'Regenerative',
  },
];

function MockupCard({ name, focus, theme }: (typeof REFERENCE_CLINICS)[0]) {
  return (
    <motion.div
      whileHover={{ scale: 1.015 }}
      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
      className="bg-[#0a0a0a] group hover:bg-[#0f0f0f] transition-colors h-full p-8 md:p-10"
    >
      {/* Faux browser frame */}
      <div className="mb-6 border border-white/10 bg-black/70">
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/10">
          <div className="flex gap-1.5">
            {[0, 1, 2].map((i) => (
              <span key={i} className="w-2 h-2 rounded-full bg-white/12" />
            ))}
          </div>
          <span className="text-[8px] font-mono text-white/25 tracking-[0.25em] uppercase">
            {theme}
          </span>
        </div>
        {/* Screen area */}
        <div className="relative h-28 overflow-hidden p-4">
          <div
            className="absolute inset-0 opacity-25"
            style={{
              background: `linear-gradient(135deg, ${ACCENT}22, transparent)`,
            }}
          />
          <div
            className="text-[9px] font-mono mb-3 leading-none"
            style={{ color: `${ACCENT}80` }}
          >
            {focus}
          </div>
          <div
            className="h-[2px] mb-2 rounded-full"
            style={{ width: '48px', backgroundColor: `${ACCENT}35` }}
          />
          <div
            className="h-[1px] mb-4 rounded-full"
            style={{ width: '32px', backgroundColor: 'rgba(255,255,255,0.12)' }}
          />
          <div
            className="h-[1px] mb-1 rounded-full"
            style={{ width: '80px', backgroundColor: 'rgba(255,255,255,0.06)' }}
          />
          <div
            className="h-[1px] rounded-full"
            style={{ width: '64px', backgroundColor: 'rgba(255,255,255,0.06)' }}
          />
          <div className="absolute bottom-3 right-4 text-[8px] font-mono tracking-[0.25em] text-white/20 uppercase">
            Book Now →
          </div>
        </div>
      </div>

      <p className="text-white/50 text-[10px] font-mono uppercase tracking-[0.25em] mb-2">
        {name}
      </p>
      <div
        className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.25em] opacity-0 group-hover:opacity-100 transition-all duration-300"
        style={{ color: ACCENT }}
      >
        <span className="h-[1px] w-5 bg-[#A3D1FF]" />
        This standard. Your brand.
      </div>
    </motion.div>
  );
}

function ReferenceSection() {
  return (
    <section className="relative py-28 md:py-36 px-6 lg:px-12 bg-black border-t border-white/10 overflow-hidden">
      <div
        className="absolute -bottom-40 left-1/4 w-[600px] h-[600px] rounded-full blur-[160px] pointer-events-none"
        style={{ backgroundColor: `${ACCENT}07` }}
      />

      <div className="max-w-7xl mx-auto">
        <ChapterMarker number="Chapter · 03" label="The Standard" />

        <div className="grid md:grid-cols-[1.2fr_1fr] gap-12 items-start mb-16">
          <Reveal>
            <h2
              className="text-white leading-[0.95] tracking-[-0.03em]"
              style={{
                fontFamily: SERIF,
                fontSize: 'clamp(1.9rem, 4.5vw, 4rem)',
                fontWeight: 400,
              }}
            >
              The clinics winning right now don&apos;t look like clinics. They
              look like Apple stores.
            </h2>
          </Reveal>
          <Reveal delay={0.15} className="md:pt-2">
            <p className="text-white/60 text-lg leading-relaxed">
              I&apos;ve reverse-engineered 40+ hours of their design systems. Same
              level. Built for you in 14 days.
            </p>
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 gap-px bg-white/10">
          {REFERENCE_CLINICS.map((clinic, i) => (
            <Reveal key={clinic.name} delay={i * 0.08}>
              <MockupCard {...clinic} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── section 05 · the offer ───────────────────────────────────────────────────

const DELIVERABLES = [
  {
    n: '01',
    title: 'Custom React Website',
    body: 'Hand-coded, sub-2-second load time, mobile-first, designed for memberships and consult bookings. 14-day delivery.',
  },
  {
    n: '02',
    title: 'Google Business Profile',
    body: 'Full setup and optimization. Photos, hours, services, Q&A, posts. Built to win the local 3-pack.',
  },
  {
    n: '03',
    title: '3 Months of Local SEO — Free',
    body: 'On-page SEO, schema markup, NAP citations, monthly performance report. Normally $1,500/mo. Included.',
  },
];

function OfferSection() {
  return (
    <section id="offer" className="relative py-28 md:py-36 px-6 lg:px-12 bg-[#0a0a0a] border-t border-white/10 overflow-hidden">
      <div
        className="absolute top-1/3 -left-40 w-[500px] h-[500px] rounded-full blur-[160px] pointer-events-none"
        style={{ backgroundColor: `${ACCENT}08` }}
      />

      <div className="max-w-7xl mx-auto">
        <ChapterMarker number="Chapter · 04" label="What You Get" />

        <Reveal className="mb-16">
          <h2
            className="text-white leading-[0.95] tracking-[-0.03em] max-w-3xl"
            style={{
              fontFamily: SERIF,
              fontSize: 'clamp(2rem, 4.5vw, 4rem)',
              fontWeight: 400,
            }}
          >
            One website. Three deliverables. Zero handoffs.
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-px bg-white/10 mb-16">
          {DELIVERABLES.map((d, i) => (
            <Reveal key={d.n} delay={i * 0.1}>
              <div className="bg-[#0a0a0a] hover:bg-[#0f0f0f] transition-colors h-full p-8 md:p-10">
                <div
                  className="font-mono text-xs tracking-[0.3em] mb-8"
                  style={{
                    color: `${ACCENT}80`,
                    fontVariantNumeric: 'tabular-nums',
                  }}
                >
                  {d.n}
                </div>
                <h3
                  className="text-white leading-tight mb-5"
                  style={{
                    fontFamily: SERIF,
                    fontSize: 'clamp(1.25rem, 2vw, 1.6rem)',
                    fontWeight: 400,
                  }}
                >
                  {d.title}
                </h3>
                <p className="text-white/60 text-sm md:text-base leading-relaxed">
                  {d.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p
            className="text-center text-white/80 italic leading-tight max-w-2xl mx-auto"
            style={{
              fontFamily: SERIF,
              fontSize: 'clamp(1.2rem, 2.4vw, 2rem)',
              fontWeight: 400,
            }}
          >
            "Most clinics see 2–3x more consult bookings within 60 days."
          </p>
        </Reveal>
      </div>
    </section>
  );
}

// ─── section 06 · process ─────────────────────────────────────────────────────

const STEPS = [
  {
    n: '01',
    kicker: 'Week 0',
    title: 'Audit Call',
    body: '15 minutes. I review your current site live. You leave with a plan whether we work together or not.',
    tag: 'Zero-obligation',
  },
  {
    n: '02',
    kicker: 'Weeks 1–2',
    title: 'Build',
    body: 'Design and development happen at the same time because I do both. Weekly Loom updates so you always know where things stand.',
    tag: 'Hand-coded, no templates',
  },
  {
    n: '03',
    kicker: 'Week 2 onward',
    title: 'Launch + Grow',
    body: 'Site goes live. Google Business optimized. SEO begins. I stay on for 30 days of free fixes.',
    tag: '30 days post-launch care',
  },
];

function ProcessSection() {
  return (
    <section id="process" className="relative py-28 md:py-36 px-6 lg:px-12 bg-black border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <ChapterMarker number="Chapter · 05" label="Process" />

        <Reveal className="mb-16">
          <h2
            className="text-white leading-[0.95] tracking-[-0.03em] max-w-2xl"
            style={{
              fontFamily: SERIF,
              fontSize: 'clamp(2rem, 4.5vw, 4rem)',
              fontWeight: 400,
            }}
          >
            How it works — in 14 days.
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 border border-white/10">
          {STEPS.map((step, i) => (
            <Reveal key={step.n} delay={i * 0.1}>
              <div
                className={`p-8 md:p-12 h-full hover:bg-[#0a0a0a] transition-colors ${
                  i < 2 ? 'border-b md:border-b-0 md:border-r border-white/10' : ''
                }`}
              >
                <div className="flex items-center gap-4 mb-8">
                  <span
                    className="font-mono text-xs tracking-[0.3em]"
                    style={{ color: ACCENT }}
                  >
                    {step.n}
                  </span>
                  <span className="h-[1px] flex-1 bg-white/10 max-w-[40px]" />
                  <span className="text-white/35 text-[10px] font-mono uppercase tracking-[0.25em]">
                    {step.kicker}
                  </span>
                </div>
                <h3
                  className="text-white leading-tight mb-4"
                  style={{
                    fontFamily: SERIF,
                    fontSize: 'clamp(1.5rem, 2.5vw, 2.1rem)',
                    fontWeight: 400,
                  }}
                >
                  {step.title}
                </h3>
                <p className="text-white/60 text-base leading-relaxed mb-8">
                  {step.body}
                </p>
                <span className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.2em] text-white/40 border border-white/10 px-3 py-1.5">
                  <span
                    className="w-1 h-1 rounded-full"
                    style={{ backgroundColor: ACCENT }}
                  />
                  {step.tag}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── section 07 · the operator ────────────────────────────────────────────────

const ROLES = ['designer', 'developer', 'strategist', 'operator'];

function OperatorSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const portraitY = useTransform(scrollYProgress, [0, 1], ['-5%', '6%']);
  const portraitScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.08, 1, 1.06]);

  const [roleIndex, setRoleIndex] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setRoleIndex((i) => (i + 1) % ROLES.length), 2200);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      id="operator"
      ref={sectionRef}
      className="relative py-28 md:py-36 px-6 lg:px-12 bg-[#0a0a0a] border-t border-white/10 overflow-hidden"
    >
      <div
        className="absolute top-1/3 -right-40 w-[640px] h-[640px] rounded-full blur-[160px] pointer-events-none"
        style={{ backgroundColor: `${ACCENT}0B` }}
      />
      <div
        className="absolute inset-0 opacity-[0.05] mix-blend-overlay pointer-events-none"
        style={{ backgroundImage: GRAIN }}
      />

      <div className="max-w-7xl mx-auto relative">
        <ChapterMarker number="Chapter · The Operator" label="About · One Person" />

        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-20 items-center">
          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <motion.img
                src={PORTRAIT}
                alt="Marc Friedman — designer, developer, and operator"
                className="absolute inset-0 w-full h-full object-cover object-top grayscale contrast-125"
                style={{ y: portraitY, scale: portraitScale }}
                loading="lazy"
                width={480}
                height={600}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              {/* Film marks */}
              <div className="absolute top-4 left-4 w-4 h-4 border-l border-t border-white/30" />
              <div className="absolute top-4 right-4 w-4 h-4 border-r border-t border-white/30" />
              <div className="absolute bottom-4 left-4 w-4 h-4 border-l border-b border-white/30" />
              <div className="absolute bottom-4 right-4 w-4 h-4 border-r border-b border-white/30" />
              <div className="absolute top-5 left-5 right-5 flex items-center justify-between text-[9px] font-mono uppercase tracking-[0.3em] text-white/70">
                <span className="flex items-center gap-2">
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: ACCENT }}
                  />
                  Profile · 01
                </span>
                <span>Est. 2018</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 flex items-end justify-between">
                <div>
                  <div className="text-[9px] font-mono uppercase tracking-[0.3em] text-white/55 mb-2">
                    The Operator
                  </div>
                  <div
                    className="text-white italic leading-[0.9]"
                    style={{
                      fontFamily: SERIF,
                      fontSize: 'clamp(1.5rem, 2.2vw, 2rem)',
                      fontWeight: 400,
                    }}
                  >
                    Marc Friedman
                  </div>
                </div>
                <div
                  className="text-white/80 italic leading-none hidden sm:block"
                  style={{
                    fontFamily: SERIF,
                    fontSize: 'clamp(1.5rem, 2.5vw, 2.25rem)',
                    fontWeight: 400,
                  }}
                >
                  M.F.
                </div>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: -14 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden lg:block absolute -left-8 top-6 text-[10px] font-mono uppercase tracking-[0.35em] text-white/35"
              style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
            >
              Portrait · Vol. 01 · b&amp;w
            </motion.div>
          </motion.div>

          {/* Copy */}
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex items-center gap-3 mb-8 text-[10px] font-mono uppercase tracking-[0.35em]"
              style={{ color: ACCENT }}
            >
              <span>— In one sentence</span>
              <span className="h-[1px] w-8" style={{ backgroundColor: `${ACCENT}80` }} />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="text-white leading-[0.95] tracking-[-0.03em] mb-10"
              style={{
                fontFamily: SERIF,
                fontSize: 'clamp(2.25rem, 5.5vw, 5rem)',
                fontWeight: 400,
              }}
            >
              I&apos;m the{' '}
              <span className="relative inline-block align-baseline leading-[1.15]">
                <span className="invisible italic whitespace-nowrap">strategist.</span>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={ROLES[roleIndex]}
                    initial={{ y: 16, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -16, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0 italic whitespace-nowrap"
                    style={{ color: ACCENT }}
                  >
                    {ROLES[roleIndex]}.
                  </motion.span>
                </AnimatePresence>
              </span>
              <br />
              One person.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-wrap items-center gap-2 mb-10"
            >
              {ROLES.map((r, i) => (
                <span
                  key={r}
                  className={`text-[10px] font-mono uppercase tracking-[0.25em] px-2.5 py-1 border transition-colors duration-300 ${
                    i === roleIndex
                      ? 'border-[#A3D1FF] text-[#A3D1FF]'
                      : 'border-white/15 text-white/40'
                  }`}
                >
                  {r}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-5 text-base md:text-lg text-white/70 leading-relaxed mb-10 max-w-xl"
            >
              <p>
                At an agency, your project gets passed between a designer, a
                developer, a PM, and{' '}
                <em className="text-white/90" style={{ fontFamily: SERIF }}>
                  whoever&apos;s available on Tuesday
                </em>
                .
              </p>
              <p>
                With me, the person who designs your site is the same person
                who codes it. Fewer misunderstandings, faster turnarounds, a
                website that actually matches the vision.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-wrap items-center gap-5"
            >
              <a
                href={CALENDLY}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-black font-medium px-8 py-4 hover:bg-[#A3D1FF] transition-colors group"
              >
                <MessageSquare className="w-4 h-4" />
                Let&apos;s talk
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-white font-medium border-b border-white/30 hover:border-[#A3D1FF] hover:text-[#A3D1FF] transition-colors py-1"
              >
                Full profile
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── section 08 · faq ─────────────────────────────────────────────────────────

const FAQS = [
  {
    q: 'How is this different from a Wix or Squarespace template?',
    a: "Generic templates are built for everyone, which means they're optimal for no one. I hand-code every site in React — sub-2-second load times, pixel-level design control, a site that actually reflects your clinic's premium positioning. A template signals you didn't think too hard about this. A custom site signals you are serious.",
  },
  {
    q: 'What if I already have a website?',
    a: "Perfect starting point. I'll audit it on our first call and show you exactly what's costing you conversions. Most redesigns launch in 14 days. We keep what works, fix what doesn't, and rebuild the rest.",
  },
  {
    q: 'How do you handle HIPAA compliance?',
    a: "HIPAA applies to how you store and transmit patient data, not to the marketing website itself. Your booking system and patient portal need to be HIPAA-compliant — I'll make sure the site integrates cleanly with whatever compliant platform you use (Mindbody, Jane App, ClinicSense, etc.). If you're unsure, we'll sort it out on the call.",
  },
  {
    q: 'What does it cost after the free 3 months of SEO?',
    a: 'After the first 90 days, ongoing local SEO is available at my standard rate — which we agree on upfront so there are no surprises. Most clinic owners find the ROI on continued SEO is obvious by month two.',
  },
  {
    q: 'Why only 14 days? Is the work rushed?',
    a: "The 14-day timeline is possible because I do everything myself. No handoff lag between design and development, no PM playing telephone, no waiting on a freelancer. I move fast because there's no one else in the way. The work isn't rushed — the process is just clean.",
  },
];

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-28 md:py-36 px-6 lg:px-12 bg-black border-t border-white/10 overflow-hidden">
      <div
        className="absolute -top-20 left-10 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none"
        style={{ backgroundColor: `${ACCENT}08` }}
      />

      <div className="max-w-7xl mx-auto relative">
        <ChapterMarker number="Chapter · Q&A" label="Frequently Asked" />

        <div className="grid md:grid-cols-[1fr_1.3fr] gap-10 md:gap-16">
          <div>
            <div className="md:sticky md:top-32">
              <Reveal>
                <h2
                  className="text-white leading-[0.95] tracking-[-0.03em] mb-8"
                  style={{
                    fontFamily: SERIF,
                    fontSize: 'clamp(2.75rem, 6vw, 5.5rem)',
                    fontWeight: 400,
                  }}
                >
                  Got{' '}
                  <em className="italic" style={{ color: ACCENT }}>
                    questions
                  </em>
                  ?
                </h2>
                <p className="text-white/55 text-lg leading-relaxed max-w-sm mb-8">
                  The most common things longevity clinic owners ask before we
                  kick off.
                </p>
                <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/35">
                  {FAQS.length} questions · answered honestly
                </p>
              </Reveal>
            </div>
          </div>

          <div className="border-t border-white/10">
            {FAQS.map((item, i) => (
              <motion.div
                key={item.q}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="border-b border-white/10 group"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  aria-expanded={openIndex === i}
                  className="w-full flex items-start justify-between gap-6 py-8 text-left"
                >
                  <div className="flex items-start gap-6 md:gap-10 flex-1 min-w-0">
                    <span
                      className="font-mono text-xs tracking-[0.3em] pt-3 w-10 shrink-0"
                      style={{ color: `${ACCENT}CC`, fontVariantNumeric: 'tabular-nums' }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3
                      className="text-white leading-[1.1] tracking-[-0.02em] group-hover:text-[#A3D1FF] transition-colors duration-300"
                      style={{
                        fontFamily: SERIF,
                        fontSize: 'clamp(1.2rem, 2.5vw, 2rem)',
                        fontWeight: 400,
                      }}
                    >
                      {item.q}
                    </h3>
                  </div>
                  <motion.div
                    className="shrink-0 w-12 h-12 border border-white/20 flex items-center justify-center group-hover:border-[#A3D1FF] group-hover:bg-[#A3D1FF]/10 transition-all"
                    animate={{ rotate: openIndex === i ? 45 : 0 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  >
                    <Plus className="w-4 h-4 text-white" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {openIndex === i && (
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
                        <p className="text-lg md:text-xl text-white/65 leading-relaxed">
                          {item.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── section 09 · final cta ───────────────────────────────────────────────────

function FinalCTASection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const typeY = useTransform(scrollYProgress, [0, 1], ['6%', '-6%']);

  return (
    <section
      ref={sectionRef}
      className="relative py-32 md:py-44 px-6 lg:px-12 bg-[#0a0a0a] border-t border-white/10 overflow-hidden"
    >
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] rounded-full blur-[140px] pointer-events-none"
        style={{ backgroundColor: `${ACCENT}12` }}
      />
      <div
        className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full blur-[120px] pointer-events-none"
        style={{ backgroundColor: `${ACCENT}07` }}
      />
      <div
        className="absolute inset-0 opacity-[0.05] mix-blend-overlay pointer-events-none"
        style={{ backgroundImage: GRAIN }}
      />

      <div className="max-w-7xl mx-auto relative">
        <ChapterMarker number="Colophon · End Matter" label="Final Word" />

        <motion.div style={{ y: typeY }} className="mb-14">
          <Reveal>
            <h2
              className="text-white leading-[0.92] tracking-[-0.04em] max-w-5xl"
              style={{
                fontFamily: SERIF,
                fontSize: 'clamp(2rem, 5vw, 5rem)',
                fontWeight: 400,
              }}
            >
              Every day your site stays the same is a day a competitor&apos;s
              looks better.
            </h2>
          </Reveal>
        </motion.div>

        <Reveal delay={0.2} className="mb-16">
          <p className="text-xl md:text-2xl text-white/65 leading-relaxed max-w-3xl">
            Book a free 15-minute audit. I&apos;ll review your current site live on
            the call and show you exactly what&apos;s costing you bookings. No
            pitch. No pressure.
          </p>
        </Reveal>

        <Reveal delay={0.35}>
          <a
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-black font-medium px-10 py-5 hover:bg-[#A3D1FF] transition-colors group"
          >
            <span className="font-mono uppercase tracking-[0.15em] text-sm">
              Book the Audit
            </span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </Reveal>

        <div className="mt-24 pt-8 border-t border-white/10">
          <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/30">
            Marc Friedman · Web Design for Longevity Clinics · {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── page root ────────────────────────────────────────────────────────────────

export default function LongevityClinicPage() {
  return (
    <>
      <SchemaMarkup />
      <HeroSection />
      <GapSection />
      <SocialProofSection />
      <ReferenceSection />
      <OfferSection />
      <ProcessSection />
      <OperatorSection />
      <FAQSection />
      <FinalCTASection />
    </>
  );
}
