"use client";

import {
  ServiceMasthead,
  ServiceMarquee,
  EditorialSection,
  ProblemQuote,
  DeliverableRow,
  ProcessChapter,
  StatsBar,
  WorkRow,
  ServiceColophon,
  ServiceNavigator,
} from '@/components/ServiceEditorial';

const MARC_PORTRAIT =
  'https://ik.imagekit.io/qcvroy8xpd/PW8VUKH.png?updatedAt=1759693058055&tr=f-webp';

// Real, attributed reviews (mirrors src/data/testimonials.ts). Leading with
// clients tied to the case studies shown above so the proof is verifiable.
const PROOF_TESTIMONIALS = [
  {
    name: 'Omar Turner',
    role: 'CEO, Binns Media Group · New York',
    linkedin: 'https://www.linkedin.com/in/omar-turner-92b188130',
    content:
      "Marc was able to execute the vision perfectly. He's big on communication and dedicates his time to the client, ensuring you're completely satisfied at each step. I highly recommend Marc to anyone who needs a web developer who can execute on a vision and deliver a professional finished product.",
  },
  {
    name: 'Bradley Thompson',
    role: 'Marketing Director',
    linkedin: 'https://www.linkedin.com/in/bradleethompson/',
    content:
      'Marc is an incredible ally — highly responsive with quick solutions as he built our landing page. This was a high-stakes project that did not lend itself to a template. Marc is that rare creative who excels at design AND wordsmithing. The real deal.',
  },
  {
    name: 'Darren Youngleson',
    role: 'Serial Entrepreneur',
    linkedin: 'https://www.linkedin.com/in/darren-youngleson-27a17310/',
    content:
      'Marc is an absolute winner. No limits to his depth of expertise, unwavering customer service, and the quality and creativity of his product. Highly recommend working with Marc.',
  },
];

// Third-party validation — real profiles linked from the site footer.
const AWARDS = [
  { label: 'Clutch', href: 'https://clutch.co/profile/marc-friedman-design-agency' },
  { label: 'Awwwards', href: 'https://www.awwwards.com/marc-friedman/' },
  {
    label: 'CSS Design Awards',
    href: 'https://www.cssdesignawards.com/sites/marc-friedman-web-design-agency/49357/',
  },
  {
    label: 'DesignRush',
    href: 'https://www.designrush.com/agency/profile/marc-friedman-design-agency',
  },
];

export default function WebDevelopmentPage() {
  return (
    <>
      <ServiceMasthead
        kicker="Service · Custom Website Development"
        title="Custom"
        italicWord="Websites."
        volumeNumber="01"
        tagline={
          <>
            Built on React and Next.js — SEO-friendly websites that load in under
            2 seconds, rank on Google, and turn strangers into customers. 50+
            shipped.
          </>
        }
        meta={['4–12 week builds', '50+ shipped', 'React · Next.js · Node']}
        imageSrc="https://ik.imagekit.io/qcvroy8xpd/uoq5Ztg.jpeg"
      />

{/* Chapter 01 — Who it's for */}
      <EditorialSection
        chapter="01"
        label="Who it's for"
        title="If your site looks like it"
        italicTitle="was built in 2018."
        lead="Most clients arrive with one of these frustrations. If any of these land, we should talk."
      >
        <div className="space-y-16">
          {[
            {
              text:
                "We're getting traffic but nobody's filling out the contact form.",
              align: 'left' as const,
              size: 'lg' as const,
            },
            {
              text:
                'Our site takes forever to load and we\'re losing people before they even see what we do.',
              align: 'right' as const,
              size: 'md' as const,
            },
            {
              text:
                'We spent $30k with an agency and ended up with a template and a CMS I can\'t edit.',
              align: 'left' as const,
              size: 'md' as const,
            },
            {
              text:
                "I want something that actually represents the quality of my business.",
              align: 'right' as const,
              size: 'lg' as const,
            },
          ].map((p, i) => (
            <div
              key={i}
              className={`flex ${p.align === 'right' ? 'justify-end' : 'justify-start'}`}
            >
              <ProblemQuote text={p.text} align={p.align} size={p.size} />
            </div>
          ))}
        </div>
      </EditorialSection>

      {/* Chapter 02 — What you get */}
      <EditorialSection
        chapter="02"
        label="What you get"
        title="Three ways"
        italicTitle="to work together."
        lead="Most projects fit into one of these three packages. Not sure which is right? Book a call and we'll scope it together in 30 minutes."
        bg="bg-[#0a0a0a]"
      >
        <div className="border-t border-white/10">
          <DeliverableRow
            number="Package 01"
            title="Landing Page"
            description="Perfect for testing a new offer, launching a campaign, or replacing a page that isn't converting. A single, focused page designed to do ONE thing — get the visitor to take action. SEO-optimized, fast as hell, delivered in 2 weeks."
          />
          <DeliverableRow
            number="Package 02"
            title="Business Website"
            description="Your full online presence, built from scratch. 5–7 custom pages designed to walk visitors from 'who is this?' to 'I need to work with them.' Includes a blog, a CMS, and a performance score your competitors will envy. 4–6 weeks."
          />
          <DeliverableRow
            number="Package 03"
            title="Custom Web App"
            description="For when a website isn't enough and you need software. Think booking systems, dashboards, internal tools, member portals. Custom-built to replace the 4 spreadsheets and 3 subscriptions you're currently duct-taping together. 8–12 weeks."
          />
        </div>
      </EditorialSection>

      {/* Chapter 03 — The process */}
      <EditorialSection
        chapter="03"
        label="The Process"
        title="Four chapters."
        italicTitle="Same rhythm, every build."
      >
        <div>
          <ProcessChapter
            numeral="I."
            title="Discover"
            description="I dig into your business, your competitors, and your customers before writing a single line of code. Most developers skip this. That's why most websites don't convert."
            items={[
              'Stakeholder interviews',
              'Competitive audit',
              'User + analytics review',
              'Conversion opportunity map',
            ]}
          />
          <ProcessChapter
            numeral="II."
            title="Design"
            description="High-fidelity mockups of every screen, every state. You sign off before a single line of code is written."
            items={[
              'Figma design system',
              'Desktop + mobile mockups',
              'Interactive prototype',
              'Copy direction',
            ]}
            reverse
          />
          <ProcessChapter
            numeral="III."
            title="Build"
            description="Clean, hand-written React — fast load times and search-ready, server-rendered HTML from the first commit. Weekly demo links so you're never in the dark."
            items={[
              'Hand-coded components',
              'Core Web Vitals in the 90s',
              'CMS wired up if needed',
              'Weekly progress demos',
            ]}
          />
          <ProcessChapter
            numeral="IV."
            title="Launch"
            description="I handle hosting, DNS, analytics, and monitoring. Then I stick around for 30 days to make sure nothing breaks."
            items={[
              'Performance + SEO audit',
              'Analytics + CRM wired',
              'Launch day QA',
              '30 days of post-launch care',
            ]}
            reverse
          />
        </div>
      </EditorialSection>

      {/* Chapter 04 — Proof */}
      <EditorialSection
        chapter="04"
        label="Proof"
        title="The receipts,"
        italicTitle="not the promises."
        bg="bg-[#0a0a0a]"
      >
        {/* Practitioner block — the person behind the work (Experience signal) */}
        <div className="mb-14 flex flex-col sm:flex-row sm:items-center gap-5 border border-white/10 bg-[#111418] p-6 md:p-8">
          <img
            src={MARC_PORTRAIT}
            alt="Marc Friedman — full-stack designer and developer"
            className="w-20 h-20 rounded-full object-cover object-top ring-1 ring-white/15 flex-shrink-0"
            loading="lazy"
            width={80}
            height={80}
          />
          <div>
            <p
              className="text-white text-xl mb-1"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Built by Marc Friedman
            </p>
            <p className="text-white/65 text-sm md:text-base leading-relaxed max-w-2xl">
              Senior full-stack designer &amp; developer based in Tel Aviv — six
              years shipping React &amp; Next.js. Every project runs from discovery
              to launch under one set of hands: no agency handoff, no offshore team.
            </p>
            <div className="flex gap-5 mt-3 text-[11px] font-mono uppercase tracking-[0.2em]">
              <a href="/about/" className="text-[#A3D1FF] hover:underline">
                About
              </a>
              <a
                href="https://www.linkedin.com/in/portfolio2/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#A3D1FF] hover:underline"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <StatsBar
          stats={[
            { value: '50+', label: 'Sites Shipped' },
            { value: '98', label: 'Lighthouse Score avg' },
            { value: '<2s', label: 'Load Time' },
            { value: '30d', label: 'Post-Launch Care' },
          ]}
        />
        <WorkRow
          items={[
            {
              href: '/work/case-studies/binns-media/',
              title: 'Binns Media Group',
              blurb: 'Production-house → streaming platform. React + TypeScript + Postgres.',
              image:
                'https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%204%20-%2016x9.png?updatedAt=1767539579710',
              tags: ['React 18', 'TypeScript', 'Postgres'],
            },
            {
              href: '/work/case-studies/paving-leads/',
              title: 'Paving Leads',
              blurb: 'Failing Core Web Vitals → 98 Lighthouse. Leads doubled month one.',
              image:
                'https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%204%20-%2016_9.png?updatedAt=1767539579010',
              tags: ['Next.js', 'SEO', 'Lead Gen'],
            },
          ]}
        />

        {/* Attributed testimonials (Trust signal) */}
        <div className="mt-16 grid md:grid-cols-3 gap-px bg-white/10 border border-white/10">
          {PROOF_TESTIMONIALS.map((t) => (
            <figure key={t.name} className="bg-black p-8 flex flex-col">
              <div className="flex items-center gap-1 mb-4 text-[#FFD700]">
                {'★★★★★'}
              </div>
              <blockquote className="text-white/80 text-sm leading-relaxed flex-1">
                “{t.content}”
              </blockquote>
              <figcaption className="mt-5 pt-5 border-t border-white/10">
                <a
                  href={t.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-sm font-semibold hover:text-[#A3D1FF] transition-colors"
                >
                  {t.name}
                </a>
                <div className="text-[#A3D1FF]/80 text-[11px] mt-0.5">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Third-party validation (Authoritativeness signal) */}
        <div className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-3 text-[11px] font-mono uppercase tracking-[0.2em]">
          <span className="text-white/40">Reviewed &amp; awarded on</span>
          {AWARDS.map((a) => (
            <a
              key={a.label}
              href={a.href}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/15 px-3 py-1.5 text-white/70 hover:border-[#A3D1FF]/60 hover:text-white transition-colors"
            >
              {a.label}
            </a>
          ))}
        </div>
      </EditorialSection>

      {/* Chapter 05 — Specialties */}
      <EditorialSection
        chapter="05"
        label="Specialties"
        title="Engineering and SEO,"
        italicTitle="built as one discipline."
        lead="Most teams treat SEO and engineering as separate phases. I build them together — search-readiness is part of the architecture, not a checklist bolted on after the site is done."
      >
        <div className="grid md:grid-cols-3 gap-px bg-white/10 border border-white/10">
          <div className="bg-black p-8">
            <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/40 mb-3">
              01
            </div>
            <h3 className="text-white text-xl mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
              SEO at the code level
            </h3>
            <p className="text-white/70 leading-relaxed">
              Server-rendered HTML, semantic markup, structured data, canonicals and
              sitemaps — shipped from the first commit, not bolted on after launch.
            </p>
          </div>
          <div className="bg-black p-8">
            <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/40 mb-3">
              02
            </div>
            <h3 className="text-white text-xl mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
              Performance budgets
            </h3>
            <p className="text-white/70 leading-relaxed">
              Static export where it fits, SSR where it counts. Core Web Vitals in the
              green before a site goes live — not after a client complains it feels slow.
            </p>
          </div>
          <div className="bg-black p-8">
            <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/40 mb-3">
              03
            </div>
            <h3 className="text-white text-xl mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
              Hand-coded, no builder bloat
            </h3>
            <p className="text-white/70 leading-relaxed">
              React 18, Next.js 15 App Router, TypeScript, Tailwind. Every component is
              built for your business — never lifted from a page-builder template your
              competitors also use.
            </p>
          </div>
        </div>
      </EditorialSection>

      <ServiceNavigator currentSlug="web-development" />
      <ServiceColophon
        headline="Let's ship something"
        italicHeadline="your competitors will resent."
        lead="Book 30 minutes — I'll audit your current site live on the call and show you exactly what's costing you customers."
      />
    </>
  );
}
