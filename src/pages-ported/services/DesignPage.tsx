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

export default function DesignPage() {
  return (
    <>
      <ServiceMasthead
        kicker="Service · Professional UI UX Design Services"
        title="Interfaces"
        italicWord="That Convert."
        volumeNumber="02"
        tagline={
          <>
            Professional UI UX design services and UX design consultancy — intuitive
            interfaces grounded in research, built to move the number that actually
            matters to your business.
          </>
        }
        meta={['Figma-to-code', 'Research-led', '50+ interfaces shipped']}
        imageSrc="https://ik.imagekit.io/qcvroy8xpd/TTV8Liw.jpg"
      />

<EditorialSection
        chapter="01"
        label="Who it's for"
        title="If users"
        italicTitle="keep bouncing."
        lead="Most clients come to me because something measurable is broken."
      >
        <div className="space-y-16">
          {[
            {
              text: "Users sign up, poke around, and never come back.",
              align: 'left' as const,
              size: 'lg' as const,
            },
            {
              text: "Our best feature is buried three clicks deep.",
              align: 'right' as const,
              size: 'md' as const,
            },
            {
              text: "Designers make it look pretty but ignore how it actually works.",
              align: 'left' as const,
              size: 'md' as const,
            },
            {
              text: "I can't tell if our interface is the problem or the product is.",
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
        title="Design services,"
        italicTitle="delivered."
        lead="Full UX design and UI design under one set of hands. Every UX UI design service below is bundled into every engagement — UI and UX services, UX UI design services, and dev handoff together as one UI UX design services company instead of four. No à la carte, no scope creep, no extra invoices for the basics."
        bg="bg-[#0a0a0a]"
      >
        <div className="border-t border-white/10">
          <DeliverableRow
            number="01"
            title="UI Design"
            description="High-fidelity interfaces grounded in your brand and tuned for conversion. Every state, every variant, every edge case."
          />
          <DeliverableRow
            number="02"
            title="UX Research"
            description="Stakeholder interviews, usability testing, and analytics review. I find the problem before designing the solution."
          />
          <DeliverableRow
            number="03"
            title="Wireframing + Prototyping"
            description="Low-fidelity flows turn into interactive Figma prototypes you can actually click through and test with real users."
          />
          <DeliverableRow
            number="04"
            title="Design Systems"
            description="Reusable components, tokens, and documentation so the design stays consistent as the product scales."
          />
        </div>
      </EditorialSection>

      <EditorialSection
        chapter="03"
        label="The Process"
        title="Research, design,"
        italicTitle="validate, ship."
      >
        <div>
          <ProcessChapter
            numeral="I."
            title="Research"
            description="I interview your users, audit your analytics, and map the friction points before touching Figma."
            items={[
              'User interviews',
              'Analytics review',
              'Heuristic audit',
              'Opportunity map',
            ]}
          />
          <ProcessChapter
            numeral="II."
            title="Wireframe"
            description="Low-fidelity structure so we get the flow right before the aesthetics distract."
            items={[
              'User flows',
              'Information architecture',
              'Low-fi mockups',
              'Stakeholder reviews',
            ]}
            reverse
          />
          <ProcessChapter
            numeral="III."
            title="Design"
            description="High-fidelity, on-brand interfaces. Every state, every viewport, documented as a system."
            items={[
              'UI design in Figma',
              'Components + tokens',
              'Dark + light themes',
              'Accessibility AA',
            ]}
          />
          <ProcessChapter
            numeral="IV."
            title="Validate"
            description="Interactive prototypes tested with real users. We iterate before a single line of production code is written."
            items={[
              'Clickable prototypes',
              'Usability testing',
              'A/B test design',
              'Dev handoff docs',
            ]}
            reverse
          />
        </div>
      </EditorialSection>

      <EditorialSection
        chapter="04"
        label="Proof"
        title="Interfaces"
        italicTitle="in the wild."
        bg="bg-[#0a0a0a]"
      >
        <StatsBar
          stats={[
            { value: '50+', label: 'Interfaces Shipped' },
            { value: 'AA', label: 'Accessibility' },
            { value: '40%', label: 'Avg Conv. Lift' },
            { value: '4.9', label: 'Client Rating' },
          ]}
        />
        <WorkRow
          items={[
            {
              href: '/work/case-studies/videoleap/',
              title: 'Videoleap',
              blurb: 'Redesigned onboarding, editor, and gamification for a flagship mobile app.',
              image: 'https://i.imgur.com/SubVB9A.jpeg',
              tags: ['UX', 'Mobile'],
            },
            {
              href: '/work/case-studies/ilight/',
              title: 'iLight Care',
              blurb: 'Brand + product + pitch deck for an AI-powered mental health startup.',
              image:
                'https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%201%20-%201x1(5).png?updatedAt=1767539579818',
              tags: ['Product Design', 'AI'],
            },
          ]}
        />
      </EditorialSection>

      {/* Chapter 05 — Specialties (long-tail UX/UI keyword anchors) */}
      <EditorialSection
        chapter="05"
        label="Specialties"
        title="A custom UI UX design"
        italicTitle="company built for product teams."
        lead="UI UX development isn't a single skill — it's a stack of disciplines that most agencies split across 3-4 people. I do them all. Here's the breakdown of UX design projects I take on most often, and the UX design consultancy work that wraps around them."
      >
        <div className="grid md:grid-cols-2 gap-px bg-white/10 border border-white/10">
          <div className="bg-black p-8">
            <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/40 mb-3">
              01
            </div>
            <h3 className="text-white text-xl mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
              UX design consultancy
            </h3>
            <p className="text-white/70 leading-relaxed">
              Strategic UX design consultancy work — heuristic audits, conversion
              teardowns, user research synthesis. The user interface design consultancy
              engagement that exists before a single Figma frame is opened.
            </p>
          </div>
          <div className="bg-black p-8">
            <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/40 mb-3">
              02
            </div>
            <h3 className="text-white text-xl mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
              UI UX web design services
            </h3>
            <p className="text-white/70 leading-relaxed">
              End-to-end UI UX web design services — wireframes, prototypes,
              high-fidelity comps, design system, dev handoff. The same UI design
              services company offering as the agencies, but actually delivered by
              the person you hired.
            </p>
          </div>
          <div className="bg-black p-8">
            <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/40 mb-3">
              03
            </div>
            <h3 className="text-white text-xl mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
              Creative UX design + UX design systems
            </h3>
            <p className="text-white/70 leading-relaxed">
              Creative UX design that doesn&apos;t look like a Material Design template.
              UX design systems with tokens, components, and documentation so your
              product can scale without the design fragmenting.
            </p>
          </div>
          <div className="bg-black p-8">
            <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/40 mb-3">
              04
            </div>
            <h3 className="text-white text-xl mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
              UI UX design and development company
            </h3>
            <p className="text-white/70 leading-relaxed">
              Most clients hire a designer, then a developer, then a project manager
              to wire them together. With me you get a UI UX design and development
              company in one — UI UX design consulting plus production code, same
              person, same accountability.
            </p>
          </div>
        </div>
      </EditorialSection>

      <ServiceNavigator currentSlug="design" />
      <ServiceColophon
        headline="Make the interface"
        italicHeadline="do the heavy lifting."
        lead="If your product is great but the UX is fighting it, that's a fixable problem. Book a call with this UX design consultancy and I'll show you where."
      />
    </>
  );
}
