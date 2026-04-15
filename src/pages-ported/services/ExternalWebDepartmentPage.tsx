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
} from '@/components/ServiceEditorial';

export default function ExternalWebDepartmentPage() {
  return (
    <>
      <ServiceMasthead
        kicker="Service · External Web Department"
        title="Your Web"
        italicWord="Department."
        volumeNumber="06"
        tagline={
          <>
            For multi-brand and multi-location companies that need to ship sites fast,
            consistently, without hiring a team. I slot in as your external web
            department.
          </>
        }
        meta={['Multi-brand', 'Multi-location', 'On-demand shipping']}
        imageSrc="https://ik.imagekit.io/qcvroy8xpd/uoq5Ztg.jpeg"
      />

      <ServiceMarquee
        phrases={[
          'Multi-brand',
          'Shared Design Systems',
          'Rapid Launches',
          'No Headcount Needed',
          'On-demand',
          'Consistent · Fast · Scalable',
        ]}
      />

      <EditorialSection
        chapter="01"
        label="Who it's for"
        title="If you run"
        italicTitle="many brands or locations."
        lead="Usually groups where marketing teams need new sites faster than internal tech can ship them."
      >
        <div className="space-y-16">
          {[
            {
              text:
                'Every location has a slightly different website and none of them convert.',
              align: 'left' as const,
              size: 'lg' as const,
            },
            {
              text:
                "Our marketing team keeps waiting on internal dev for landing pages.",
              align: 'right' as const,
              size: 'md' as const,
            },
            {
              text: "We need 10 sites that feel like one brand. Right now they feel like 10.",
              align: 'left' as const,
              size: 'md' as const,
            },
            {
              text: "Hiring a full web team is overkill — but we ship too much for an agency retainer.",
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

      <EditorialSection
        chapter="02"
        label="What you get"
        title="A team of one"
        italicTitle="that feels like ten."
        bg="bg-[#0a0a0a]"
      >
        <div className="border-t border-white/10">
          <DeliverableRow
            number="01"
            title="Free first landing page"
            description="I design and ship one page for one of your brands — no strings. You keep it whether or not we continue. Think of it as a risk-free audition."
          />
          <DeliverableRow
            number="02"
            title="Shared design system"
            description="One library of components, tokens, and patterns your whole group ships from. Ten sites that look like ten sites — but built from one system."
          />
          <DeliverableRow
            number="03"
            title="On-demand production"
            description="New landing pages, campaign sites, location pages — all delivered within days, not weeks. I'm in Slack, I pick up tickets, sites go live."
          />
          <DeliverableRow
            number="04"
            title="Monthly performance report"
            description="Plain-language report every month — what's working, what's not, what to ship next. No jargon, no charts you'll never read."
          />
        </div>
      </EditorialSection>

      <EditorialSection
        chapter="03"
        label="The Process"
        title="How we'd"
        italicTitle="actually work."
      >
        <div>
          <ProcessChapter
            numeral="I."
            title="Discovery call"
            description="We map your brands, locations, and current web setup, and define a clear goal for the first landing page (leads, bookings, orders, or something else)."
            items={[
              'Brand + location inventory',
              'Current web audit',
              'First-page goal',
              'Success metrics',
            ]}
          />
          <ProcessChapter
            numeral="II."
            title="Free landing page build"
            description="I design and develop the page, integrating your brand guidelines and any existing assets."
            items={[
              'Design + copy',
              'React/Next.js build',
              'Analytics wired',
              'Launch within 2 weeks',
            ]}
            reverse
          />
          <ProcessChapter
            numeral="III."
            title="Review + report"
            description="You send traffic, we review early performance, and I share a short, plain-language report."
            items={[
              'Traffic + conversion review',
              'Heatmaps + session reviews',
              'What to change',
              'What to ship next',
            ]}
          />
          <ProcessChapter
            numeral="IV."
            title="Continue or stop"
            description="If it's a fit, we design a monthly or project-based engagement that matches how often you launch new sites or campaigns."
            items={[
              'Monthly retainer option',
              'Per-page pricing option',
              'Shared design system',
              'Direct Slack access',
            ]}
            reverse
          />
        </div>
      </EditorialSection>

      <EditorialSection
        chapter="04"
        label="Proof"
        title="Built to ship,"
        italicTitle="repeatedly."
        bg="bg-[#0a0a0a]"
      >
        <StatsBar
          stats={[
            { value: '10+', label: 'Sites Under One System' },
            { value: '2wk', label: 'Avg Page Launch' },
            { value: '01', label: 'Point of Contact' },
            { value: 'Free', label: 'First Landing Page' },
          ]}
        />
        <WorkRow
          items={[
            {
              href: '/work/case-studies/binns-media',
              title: 'Binns Media Group',
              blurb:
                'Multi-brand media group — one platform, many shows, consistent experience.',
              image:
                'https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%204%20-%2016x9.png?updatedAt=1767539579710',
              tags: ['Multi-brand', 'Media'],
            },
            {
              href: '/work/case-studies/paving-leads',
              title: 'Paving Leads',
              blurb:
                'SEO landing-page factory for contractor locations — built on shared tokens.',
              image:
                'https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%204%20-%2016_9.png?updatedAt=1767539579010',
              tags: ['Multi-location', 'SEO'],
            },
          ]}
        />
      </EditorialSection>

      <ServiceColophon
        headline="Ship more sites."
        italicHeadline="Without more headcount."
        lead="Book a call and I'll build your first landing page for free — it's the lowest-risk way to see if this would work for you."
      />
    </>
  );
}
