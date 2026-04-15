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

export default function DesignPage() {
  return (
    <>
      <ServiceMasthead
        kicker="Service · UI/UX Design"
        title="Interfaces"
        italicWord="that convert."
        volumeNumber="02"
        tagline={
          <>
            Intuitive interfaces, grounded in research, built to move the number that
            actually matters to your business.
          </>
        }
        meta={['Figma-to-code', 'Research-led', '50+ interfaces shipped']}
        imageSrc="https://ik.imagekit.io/qcvroy8xpd/TTV8Liw.jpg"
      />

      <ServiceMarquee
        phrases={[
          'UI · UX',
          'Wireframes · Prototypes',
          'User Research',
          'Conversion-First',
          'Design Systems',
          'Figma → Code',
          'Accessibility AA',
        ]}
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
              href: '/work/case-studies/videoleap',
              title: 'Videoleap',
              blurb: 'Redesigned onboarding, editor, and gamification for a flagship mobile app.',
              image: 'https://i.imgur.com/SubVB9A.jpeg',
              tags: ['UX', 'Mobile'],
            },
            {
              href: '/work/case-studies/ilight',
              title: 'iLight Care',
              blurb: 'Brand + product + pitch deck for an AI-powered mental health startup.',
              image:
                'https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%201%20-%201x1(5).png?updatedAt=1767539579818',
              tags: ['Product Design', 'AI'],
            },
          ]}
        />
      </EditorialSection>

      <ServiceColophon
        headline="Make the interface"
        italicHeadline="do the heavy lifting."
        lead="If your product is great but the UX is fighting it, that's a fixable problem. Book a call and I'll show you where."
      />
    </>
  );
}
