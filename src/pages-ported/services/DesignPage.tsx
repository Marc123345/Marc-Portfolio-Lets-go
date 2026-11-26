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

// Real, attributed reviews (mirrors src/data/testimonials.ts), chosen for the
// ones that speak to design / UX collaboration specifically.
const PROOF_TESTIMONIALS = [
  {
    name: 'Bar Levy',
    role: 'Co-Founder & PM, Sumit-AI',
    linkedin: 'https://www.linkedin.com/in/bar-levy',
    content:
      'Marc studied and elaborated on the various solutions offered nowadays, initiated and led the UX & UI tasks, and provided valuable insights during the entire process.',
  },
  {
    name: 'Stallone Sweeney',
    role: 'Attorney · Founder of LegalContent',
    linkedin: 'https://www.linkedin.com/in/stallone-sweeney-39301b198/',
    content:
      'Marc listened carefully to my ideas and needs, ensuring the final design perfectly reflected my vision. His attention to detail is incredible.',
  },
  {
    name: 'Guneet K. Singh',
    role: 'TV Producer, Binns Media Group',
    linkedin: 'https://www.linkedin.com/company/binns-media-group/',
    content:
      'My team and I loved working with Marc. He took the time to understand our goals and adapt as needed. His professionalism, patience, and openness to feedback at every stage made it a seamless collaboration.',
  },
];

// Third-party validation, real profiles linked from the site footer.
const AWARDS = [
  { label: 'Clutch', href: 'https://clutch.co/profile/marc-friedman-design-agency' },
  { label: 'Awwwards', href: 'https://www.awwwards.com/marc-friedman/' },
  {
    label: 'CSS Design Awards',
    href: 'https://www.cssdesignawards.com/sites/marc-friedman-web-design-agency/49357/',
  },
  { label: 'Behance', href: 'https://www.behance.net/marcfriedmanweb' },
];

export default function DesignPage() {
  return (
    <div className="scheme-systems">
      <ServiceMasthead
        kicker="Service · UI/UX for Complex Systems"
        title="Complex systems,"
        italicWord="made clear."
        volumeNumber="02"
        tagline={
          <>
            Dashboards, internal tools and data-heavy products, designed so the people
            using them can find the answer and make the call, then shipped in code.
          </>
        }
        meta={['Dashboards + internal tools', 'Research-led', 'Figma-to-code']}
        imageSrc="https://ik.imagekit.io/qcvroy8xpd/TTV8Liw.jpg"
      />

<EditorialSection
        chapter="01"
        label="Who it's for"
        title="If your product"
        italicTitle="needs a manual."
        lead="Teams usually call me when a powerful product has become hard to use."
      >
        <div className="space-y-16">
          {[
            {
              text: "New users need a training session before they can do anything.",
              align: 'left' as const,
              size: 'lg' as const,
            },
            {
              text: "Every new feature added another tab.",
              align: 'right' as const,
              size: 'md' as const,
            },
            {
              text: "The data is all there, but nobody can find the answer in it.",
              align: 'left' as const,
              size: 'md' as const,
            },
            {
              text: "Design and engineering argue over every state and edge case.",
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
        title="Structure first,"
        italicTitle="then screens."
        lead="Workflow research, information architecture, interface design and a working design system, handled by one person from the first interview to the shipped front-end."
        bg="bg-[#0a0a0a]"
      >
        <div className="border-t border-white/10">
          <DeliverableRow
            number="01"
            title="Workflow + Task Analysis"
            description="I sit with the people who use the tool, map the decisions they make each day, and find where the interface slows them down."
          />
          <DeliverableRow
            number="02"
            title="Information Architecture"
            description="Navigation, hierarchy and naming for products with many roles, records and permissions, so each person sees what their job needs first."
          />
          <DeliverableRow
            number="03"
            title="Data-Dense Interface Design"
            description="Tables, filters, charts and detail panels designed for every state: empty, loading, error, partial and overloaded."
          />
          <DeliverableRow
            number="04"
            title="Design Systems"
            description="Tokens, components and documented states, so new features fit the system instead of adding another one-off screen."
          />
        </div>
      </EditorialSection>

      <EditorialSection
        chapter="03"
        label="The Process"
        title="Map, structure,"
        italicTitle="design, validate."
      >
        <div>
          <ProcessChapter
            numeral="I."
            title="Map"
            description="I interview users and stakeholders, review the data model, and map the workflows before touching Figma."
            items={[
              'User + stakeholder interviews',
              'Workflow mapping',
              'Data model review',
              'Heuristic audit',
            ]}
          />
          <ProcessChapter
            numeral="II."
            title="Structure"
            description="Low-fidelity structure that settles navigation, roles and hierarchy before visual design starts."
            items={[
              'Information architecture',
              'Roles + permissions',
              'Task flows',
              'Low-fi wireframes',
            ]}
            reverse
          />
          <ProcessChapter
            numeral="III."
            title="Design"
            description="High-fidelity screens built from components and tokens, with every state and viewport documented."
            items={[
              'UI design in Figma',
              'Components + tokens',
              'States + edge cases',
              'Accessibility AA',
            ]}
          />
          <ProcessChapter
            numeral="IV."
            title="Validate"
            description="Clickable prototypes tested on real tasks with real users, then revised before production code is written."
            items={[
              'Clickable prototypes',
              'Task-based usability tests',
              'Revisions',
              'Dev handoff docs',
            ]}
            reverse
          />
        </div>
      </EditorialSection>

      <EditorialSection
        chapter="04"
        label="Proof"
        title="Systems"
        italicTitle="in the wild."
        bg="bg-[#0a0a0a]"
      >
        {/* Practitioner block, the person behind the work (Experience signal) */}
        <div className="ui-card mb-14 flex flex-col sm:flex-row sm:items-center gap-5 p-6 md:p-8">
          <img
            src={MARC_PORTRAIT}
            alt="Marc Friedman, designer and developer"
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
              Designed by Marc Friedman
            </p>
            <p className="text-white/65 text-sm md:text-base leading-relaxed max-w-2xl">
              Senior designer &amp; developer running a Figma-to-code
              workflow since 2020. Research, UI, and the front-end that ships it, all
              under one set of hands, so nothing gets lost in a designer-to-dev handoff.
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
            { value: '50+', label: 'Interfaces Shipped' },
            { value: 'AA', label: 'Accessibility' },
            { value: '40%', label: 'Avg Conv. Lift' },
            { value: '5.0', label: 'Client Rating' },
          ]}
        />
        <WorkRow
          items={[
            {
              href: '/work/case-studies/tracefold/',
              title: 'Tracefold',
              blurb: 'Figma design system for tracing identity alerts and approving a response on desktop and mobile.',
              image: '/images/case-studies/tracefold/cover.webp',
              tags: ['Figma', 'Product Design'],
            },
            {
              href: '/work/case-studies/silicon-atlas/',
              title: 'Silicon Atlas',
              blurb: 'Data-dense dashboard kit for lab and telemetry tools, built on one token set.',
              image: '/images/case-studies/silicon-atlas/run-comparison.jpg',
              tags: ['Product UX', 'Design System'],
            },
            {
              href: '/work/case-studies/mytube/',
              title: 'MyTube',
              blurb: 'Video metadata platform with AI tagging, insights and workflow automation.',
              image: '/images/clients/QNHXpzT.webp',
              tags: ['Product UX', 'AI/ML'],
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
              className="ui-pill hover:bg-[#232323] hover:text-white transition-colors"
            >
              {a.label}
            </a>
          ))}
        </div>
      </EditorialSection>

      {/* Chapter 05, Specialties */}
      <EditorialSection
        chapter="05"
        label="Specialties"
        title="Research, design, and code,"
        italicTitle="in the same hands."
        lead="Complex products suffer most when research, UI and front-end are split across separate people. I do all three, so the structure agreed in research is the structure that ships."
      >
        <div className="grid md:grid-cols-3 gap-px bg-white/10 border border-white/10">
          <div className="bg-black p-8">
            <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/40 mb-3">
              01
            </div>
            <h3 className="text-white text-xl mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
              Research before pixels
            </h3>
            <p className="text-white/70 leading-relaxed">
              Heuristic audits, user interviews, and analytics synthesis. The problem
              gets defined and the friction mapped before a single Figma frame opens.
            </p>
          </div>
          <div className="bg-black p-8">
            <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/40 mb-3">
              02
            </div>
            <h3 className="text-white text-xl mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
              Design systems that scale
            </h3>
            <p className="text-white/70 leading-relaxed">
              Tokens, reusable components, documented states, and AA accessibility, so
              the product stays consistent as it grows instead of fragmenting screen by
              screen.
            </p>
          </div>
          <div className="bg-black p-8">
            <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/40 mb-3">
              03
            </div>
            <h3 className="text-white text-xl mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
              A designer who ships it
            </h3>
            <p className="text-white/70 leading-relaxed">
              Figma-to-code in the same hands. No lossy handoff between a designer who
              draws it and a separate team that rebuilds it, what you approve is what
              goes live.
            </p>
          </div>
        </div>
      </EditorialSection>

      <ServiceNavigator currentSlug="design" />
      <ServiceColophon
        headline="Make the complex"
        italicHeadline="feel simple."
        lead="If your product is powerful but hard to use, that can be fixed. Book a call and I'll show you where to start."
      />
    </div>
  );
}
