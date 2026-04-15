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
        kicker="Service · Web Development"
        title="Custom"
        italicWord="Websites."
        volumeNumber="01"
        tagline={
          <>
            Custom-coded React sites that load in under 2 seconds, rank on Google, and
            turn strangers into customers. I&apos;ve built 50+ of them.
          </>
        }
        meta={['4–12 week builds', '50+ shipped', 'React · Next.js · Node']}
        imageSrc="https://ik.imagekit.io/qcvroy8xpd/uoq5Ztg.jpeg"
      />

      <ServiceMarquee
        phrases={[
          'Hand-coded',
          'No Templates',
          'Sub-2s Loads',
          'SEO-Native',
          'React · Next.js',
          'Conversion-First',
          'One Point of Contact',
        ]}
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
        lead="Most projects fit into one of these. Not sure? Book a call and we'll figure it out in 30 minutes."
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
            description="React + Next.js, clean code, fast load times, baked-in SEO. Weekly demo links so you're never in the dark."
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
              href: '/work/case-studies/binns-media',
              title: 'Binns Media Group',
              blurb: 'Production-house → streaming platform. React + TypeScript + Postgres.',
              image:
                'https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%204%20-%2016x9.png?updatedAt=1767539579710',
              tags: ['React 18', 'TypeScript', 'Postgres'],
            },
            {
              href: '/work/case-studies/paving-leads',
              title: 'Paving Leads',
              blurb: 'Failing Core Web Vitals → 98 Lighthouse. Leads doubled month one.',
              image:
                'https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%204%20-%2016_9.png?updatedAt=1767539579010',
              tags: ['Next.js', 'SEO', 'Lead Gen'],
            },
          ]}
        />
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
