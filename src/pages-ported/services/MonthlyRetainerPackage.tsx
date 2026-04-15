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

export default function MonthlyRetainerPackage() {
  return (
    <>
      <ServiceMasthead
        kicker="Package · Monthly Retainer"
        title="Website,"
        italicWord="Handled."
        volumeNumber="08"
        tagline={
          <>
            For businesses who need a website that evolves — with someone who actually
            knows the codebase. Monthly design, dev, and performance care.
          </>
        }
        meta={['Ongoing care', 'Same developer, every month', 'Predictable pricing']}
        imageSrc="https://ik.imagekit.io/qcvroy8xpd/TTV8Liw.jpg"
      />

      <ServiceMarquee
        phrases={[
          'Ongoing Care',
          'Fixed Monthly',
          'Design · Dev · SEO',
          'Priority Fixes',
          'Performance Monitoring',
          'Same Developer',
        ]}
      />

      <EditorialSection
        chapter="01"
        label="Who it's for"
        title="When your site"
        italicTitle="needs a caretaker."
        lead="For teams who shipped a great site but now need someone to keep it great — without onboarding a new dev every quarter."
      >
        <div className="space-y-16">
          {[
            {
              text: "Every little change takes a week because our old dev is busy.",
              align: 'left' as const,
              size: 'lg' as const,
            },
            {
              text: "We need new landing pages faster than we can hire.",
              align: 'right' as const,
              size: 'md' as const,
            },
            {
              text: "Our site's slowly getting slower and nobody's watching it.",
              align: 'left' as const,
              size: 'md' as const,
            },
            {
              text: "We want someone who knows our codebase, not a different freelancer every time.",
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
        label="What's included"
        title="Your website,"
        italicTitle="on call."
        bg="bg-[#0a0a0a]"
      >
        <div className="border-t border-white/10">
          <DeliverableRow
            number="01"
            title="Design + dev hours"
            description="A predictable block of monthly hours for new pages, redesigns, features, and fixes. Use them however you need."
          />
          <DeliverableRow
            number="02"
            title="Performance monitoring"
            description="I watch Core Web Vitals, Lighthouse, uptime, and SEO signals. You get a monthly plain-language report on what's up and what to fix."
          />
          <DeliverableRow
            number="03"
            title="Priority fixes"
            description="Bugs, broken integrations, CMS issues — flagged by you in Slack, fixed within the day. No tickets, no queues."
          />
          <DeliverableRow
            number="04"
            title="Content + CMS support"
            description="New pages, blog posts, campaign pages — designed, built, and deployed. You focus on the business, I handle the web."
          />
        </div>
      </EditorialSection>

      <EditorialSection
        chapter="03"
        label="The Process"
        title="A rhythm"
        italicTitle="you can rely on."
      >
        <div>
          <ProcessChapter
            numeral="I."
            title="Onboarding"
            description="Week one: I learn your stack, your tone, your goals. You get direct Slack access and a shared backlog."
            items={[
              'Codebase walk-through',
              'Brand + tone doc',
              'Shared backlog',
              'Direct Slack channel',
            ]}
          />
          <ProcessChapter
            numeral="II."
            title="Weekly cadence"
            description="A weekly check-in, a weekly ship. Whatever's in the backlog — new pages, fixes, experiments — gets worked through, week by week."
            items={[
              '30-min weekly call',
              'Weekly ship',
              'Shared status board',
              'Real-time Slack',
            ]}
            reverse
          />
          <ProcessChapter
            numeral="III."
            title="Monthly report"
            description="Plain-language performance report every month. What's working, what's not, what to ship next month."
            items={[
              'Performance scorecard',
              'SEO + analytics',
              'Next-month plan',
              'Budget review',
            ]}
          />
          <ProcessChapter
            numeral="IV."
            title="Quarterly strategy"
            description="Every quarter we zoom out: what's the site doing for the business, what should it do next, what should we kill."
            items={[
              'Site health audit',
              'Conversion review',
              'Roadmap update',
              'Retainer reshape',
            ]}
            reverse
          />
        </div>
      </EditorialSection>

      <EditorialSection
        chapter="04"
        label="Proof"
        title="Reliable."
        italicTitle="Not just responsive."
        bg="bg-[#0a0a0a]"
      >
        <StatsBar
          stats={[
            { value: '<24h', label: 'Priority Fix Time' },
            { value: '1', label: 'Shared Slack' },
            { value: '100%', label: 'Built by Me' },
            { value: 'Monthly', label: 'Performance Report' },
          ]}
        />
        <WorkRow
          items={[
            {
              href: '/work/case-studies/paving-leads',
              title: 'Paving Leads',
              blurb: 'Ongoing SEO-page factory with monthly performance reviews.',
              image:
                'https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%204%20-%2016_9.png?updatedAt=1767539579010',
              tags: ['Retainer', 'SEO'],
            },
            {
              href: '/work/case-studies/binns-media',
              title: 'Binns Media Group',
              blurb: 'Flagship platform on monthly care — features shipped continuously.',
              image:
                'https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%204%20-%2016x9.png?updatedAt=1767539579710',
              tags: ['Retainer', 'Flagship'],
            },
          ]}
        />
      </EditorialSection>

      <ServiceColophon
        headline="One developer."
        italicHeadline="On retainer."
        lead="Book a call and we'll design a monthly engagement that matches how your business actually moves."
      />
    </>
  );
}
