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
            Custom website development services built on React and Next.js —
            SEO-friendly websites that load in under 2 seconds, rank on Google, and
            turn strangers into customers. 50+ shipped.
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
        lead="Most custom website development projects fit into one of these three packages. Not sure which is right? Book a call and we'll scope it together in 30 minutes."
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
            description="React JS web development services done right — clean code, fast load times, and SEO-friendly website development from the first commit. Weekly demo links so you're never in the dark."
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
      </EditorialSection>

      {/* Chapter 05 — Specialties (SEO keyword anchors + value-add) */}
      <EditorialSection
        chapter="05"
        label="Specialties"
        title="A custom website development"
        italicTitle="company built for the SEO age."
        lead="Most agencies treat SEO and engineering as separate disciplines. I don't. Every project bundles web development SEO into the build — that's how a custom website development company should work in 2026."
      >
        <div className="grid md:grid-cols-2 gap-px bg-white/10 border border-white/10">
          <div className="bg-black p-8">
            <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/40 mb-3">
              01
            </div>
            <h3 className="text-white text-xl mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
              SEO-friendly website development
            </h3>
            <p className="text-white/70 leading-relaxed">
              Server-rendered HTML, clean semantic markup, Core Web Vitals greens,
              structured data, sitemap.xml, robots, canonical tags. SEO friendly website
              development — done at the code level, not bolted on after launch.
            </p>
          </div>
          <div className="bg-black p-8">
            <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/40 mb-3">
              02
            </div>
            <h3 className="text-white text-xl mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
              React JS web development services
            </h3>
            <p className="text-white/70 leading-relaxed">
              React 18, Next.js 15 App Router, TypeScript, Tailwind. Custom website
              development services tuned for performance — static export where it fits,
              SSR where it counts.
            </p>
          </div>
          <div className="bg-black p-8">
            <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/40 mb-3">
              03
            </div>
            <h3 className="text-white text-xl mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
              Customized web development
            </h3>
            <p className="text-white/70 leading-relaxed">
              No templates, no themes, no page-builder bloat. Every component is
              hand-coded for your business — customized web development and custom web
              development that doesn&apos;t look like the same Webflow template as your
              competitors.
            </p>
          </div>
          <div className="bg-black p-8">
            <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/40 mb-3">
              04
            </div>
            <h3 className="text-white text-xl mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
              Custom web design and development
            </h3>
            <p className="text-white/70 leading-relaxed">
              Design and engineering by one person. No agency handoff, no scope
              creep — custom web design and development from wireframe to production
              under one set of hands.
            </p>
          </div>
        </div>
      </EditorialSection>

      <ServiceNavigator currentSlug="web-development" />
      <ServiceColophon
        headline="Let's ship something"
        italicHeadline="your competitors will resent."
        lead="Book 30 minutes — I'll audit your current site live on the call and show you exactly what's costing you customers in custom website development."
      />
    </>
  );
}
