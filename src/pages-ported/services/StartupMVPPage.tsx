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

export default function StartupMVPPage() {
  return (
    <>
      <ServiceMasthead
        kicker="Service · Startup MVP"
        title="Validate"
        italicWord="In 30 Days."
        volumeNumber="03"
        tagline={
          <>
            Ship the product that proves your thesis — fast. Built to raise a round, win
            first users, or kill an idea before it eats your savings.
          </>
        }
        meta={['30-day launches', 'Investor-ready', 'React + Node + Cloud']}
        imageSrc="https://ik.imagekit.io/qcvroy8xpd/TTV8Liw.jpg"
      />

      <ServiceMarquee
        phrases={[
          'Founder-built',
          'Investor-ready',
          '30-Day Launches',
          'Scalable Stack',
          'Lean UX',
          'Design + Dev in One',
          'Ships Fast',
        ]}
      />

      <EditorialSection
        chapter="01"
        label="Who it's for"
        title="If you need"
        italicTitle="signal, not features."
        lead="Most founders come to me when they've been talking about the idea for six months and still haven't shipped."
      >
        <div className="space-y-16">
          {[
            {
              text: "I need to show investors something real — not a pitch deck.",
              align: 'left' as const,
              size: 'lg' as const,
            },
            {
              text: "We've spent 4 months in wireframes and haven't launched.",
              align: 'right' as const,
              size: 'md' as const,
            },
            {
              text: "We keep scoping more features instead of testing the core idea.",
              align: 'left' as const,
              size: 'md' as const,
            },
            {
              text: "I want to know in 60 days if this is worth quitting my job for.",
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
        title="An MVP that"
        italicTitle="actually validates."
        bg="bg-[#0a0a0a]"
      >
        <div className="border-t border-white/10">
          <DeliverableRow
            number="01"
            title="Product Strategy"
            description="We ruthlessly scope the one thing your MVP must prove. Everything else is cut. I've watched too many founders burn 6 months on features nobody uses."
          />
          <DeliverableRow
            number="02"
            title="Brand + UI"
            description="A visual identity that looks venture-backed. Logo, type, color, UI kit — everything you need to not look like a hack-weekend project."
          />
          <DeliverableRow
            number="03"
            title="Working Product"
            description="React + Node + PostgreSQL. Auth, payments, core feature set, admin. Hosted, monitored, production-grade on day one."
          />
          <DeliverableRow
            number="04"
            title="Investor Materials"
            description="Marketing site, pitch deck support, and a demo you can confidently show to VCs. (I've raised money. I know what they want to see.)"
          />
        </div>
      </EditorialSection>

      <EditorialSection
        chapter="03"
        label="The Process"
        title="Four weeks."
        italicTitle="Pitch to production."
      >
        <div>
          <ProcessChapter
            numeral="I."
            title="Week 1 — Strategy"
            description="Scope the MVP down to one provable hypothesis. Everything else goes in the backlog."
            items={[
              'Founder interview',
              'Ruthless feature triage',
              'Success metrics defined',
              'Technical architecture',
            ]}
          />
          <ProcessChapter
            numeral="II."
            title="Week 2 — Design"
            description="Brand, UI, and a clickable prototype founders can show users or investors mid-build."
            items={[
              'Brand identity',
              'UI design',
              'Clickable prototype',
              'Sign-off',
            ]}
            reverse
          />
          <ProcessChapter
            numeral="III."
            title="Weeks 3–4 — Build"
            description="I build it. All of it. Hand-coded, deployed to production, wired to analytics on day one."
            items={[
              'React + Node + Postgres',
              'Auth + payments',
              'Core feature set',
              'Admin + monitoring',
            ]}
          />
          <ProcessChapter
            numeral="IV."
            title="Week 5 — Launch"
            description="You ship. I watch metrics. If something breaks in the first 30 days, I fix it."
            items={[
              'Production deploy',
              'Analytics live',
              'First-user onboarding',
              '30-day hypercare',
            ]}
            reverse
          />
        </div>
      </EditorialSection>

      <EditorialSection
        chapter="04"
        label="Proof"
        title="Startups"
        italicTitle="that shipped."
        bg="bg-[#0a0a0a]"
      >
        <StatsBar
          stats={[
            { value: '30d', label: 'Avg Launch Time' },
            { value: '15+', label: 'MVPs Shipped' },
            { value: '$2M+', label: 'Raised by Clients' },
            { value: '100%', label: 'Built by One Person' },
          ]}
        />
        <WorkRow
          items={[
            {
              href: '/work/case-studies/ilight',
              title: 'iLight Care',
              blurb: 'Brand, website, MVP platform, and pitch deck — shipped in under 6 weeks.',
              image:
                'https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%201%20-%201x1(5).png?updatedAt=1767539579818',
              tags: ['MVP', 'AI', 'Healthcare'],
            },
            {
              href: '/work/case-studies/automarginx',
              title: 'AutoMarginX',
              blurb: 'Real-time dealer analytics MVP. Raised first round after launch.',
              image:
                'https://ik.imagekit.io/qcvroy8xpd/PW8VUKH.png?updatedAt=1759693058055&tr=f-webp',
              tags: ['MVP', 'Analytics'],
            },
          ]}
        />
      </EditorialSection>

      <ServiceColophon
        headline="Stop pitching decks."
        italicHeadline="Start shipping product."
        lead="Book a call and we'll scope your MVP in 30 minutes. No deck, no pitch — just the shortest path from idea to signal."
      />
    </>
  );
}
