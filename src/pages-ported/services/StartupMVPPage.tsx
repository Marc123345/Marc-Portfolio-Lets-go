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

export default function StartupMVPPage() {
  return (
    <>
      <ServiceMasthead
        kicker="Service · Startup MVP Development"
        title="Validate"
        italicWord="In 30 Days."
        volumeNumber="03"
        tagline={
          <>
            MVP development for startups — built to prove your thesis fast. Ship a real
            product to raise a round, win first users, or kill an idea before it eats
            your savings.
          </>
        }
        meta={['30-day launches', 'Investor-ready', 'React + Node + Cloud']}
        imageSrc="https://ik.imagekit.io/qcvroy8xpd/TTV8Liw.jpg"
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
        lead="Startup MVP development that ships in 30 days, not 6 months. Every project includes the four pillars below — scoped to prove one thing, then get out of your way."
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
              href: '/work/case-studies/ilight/',
              title: 'iLight Care',
              blurb: 'Brand, website, MVP platform, and pitch deck — shipped in under 6 weeks.',
              image:
                'https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%201%20-%201x1(5).png?updatedAt=1767539579818',
              tags: ['MVP', 'AI', 'Healthcare'],
            },
            {
              href: '/work/case-studies/automarginx/',
              title: 'AutoMarginX',
              blurb: 'Real-time dealer analytics MVP. Raised first round after launch.',
              image: 'https://ik.imagekit.io/qcvroy8xpd/1732717492455.jpeg',
              tags: ['MVP', 'Analytics'],
            },
          ]}
        />
      </EditorialSection>

      <EditorialSection
        chapter="05"
        label="Pricing"
        title="Startup MVP"
        italicTitle="development packages."
        lead="Three ways to start, depending on where you are. All pricing is fixed up-front — no hourly billing, no scope creep, no surprise invoices."
      >
        <div className="grid md:grid-cols-3 gap-px bg-white/10 border border-white/10">
          <div className="bg-black p-8 flex flex-col">
            <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/40 mb-4">
              Package 01
            </div>
            <h3 className="text-white text-2xl mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
              Validation Sprint
            </h3>
            <div className="text-[#A3D1FF] text-3xl mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
              From $4,999
            </div>
            <p className="text-white/70 leading-relaxed mb-6">
              Two weeks. Brand, landing page, clickable prototype. Built to test demand
              before you build anything real.
            </p>
            <ul className="text-white/60 text-sm space-y-2 mt-auto">
              <li>— Brand identity</li>
              <li>— Marketing site</li>
              <li>— Interactive prototype</li>
              <li>— Waitlist + analytics</li>
            </ul>
          </div>

          <div className="bg-black p-8 flex flex-col relative">
            <div className="absolute top-0 right-0 bg-[#A3D1FF] text-black text-[10px] font-mono uppercase tracking-[0.2em] px-3 py-1">
              Most Popular
            </div>
            <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/40 mb-4">
              Package 02
            </div>
            <h3 className="text-white text-2xl mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
              Full MVP
            </h3>
            <div className="text-[#A3D1FF] text-3xl mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
              From $14,999
            </div>
            <p className="text-white/70 leading-relaxed mb-6">
              30 days. Production-grade MVP development for startups serious about
              launching — built to win first users and raise a round.
            </p>
            <ul className="text-white/60 text-sm space-y-2 mt-auto">
              <li>— Everything in Validation Sprint</li>
              <li>— React + Node + Postgres build</li>
              <li>— Auth, payments, admin</li>
              <li>— 30-day hypercare</li>
            </ul>
          </div>

          <div className="bg-black p-8 flex flex-col">
            <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/40 mb-4">
              Package 03
            </div>
            <h3 className="text-white text-2xl mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
              MVP + Fundraise
            </h3>
            <div className="text-[#A3D1FF] text-3xl mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
              From $24,999
            </div>
            <p className="text-white/70 leading-relaxed mb-6">
              For founders building an MVP for startups in active fundraising mode.
              Product plus the materials to pitch it.
            </p>
            <ul className="text-white/60 text-sm space-y-2 mt-auto">
              <li>— Everything in Full MVP</li>
              <li>— Pitch deck + financial model</li>
              <li>— Investor demo polish</li>
              <li>— Post-launch growth sprint</li>
            </ul>
          </div>
        </div>
      </EditorialSection>

      <ServiceNavigator currentSlug="startup-mvp" />
      <ServiceColophon
        headline="Stop pitching decks."
        italicHeadline="Start shipping product."
        lead="Book a call and we'll scope your startup MVP in 30 minutes. No deck, no pitch — just the shortest path from idea to signal."
      />
    </>
  );
}
