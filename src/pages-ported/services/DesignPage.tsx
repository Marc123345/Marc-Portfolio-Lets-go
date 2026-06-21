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
    <>
      <ServiceMasthead
        kicker="Service · Professional UI UX Design Services"
        title="Interfaces"
        italicWord="That Convert."
        volumeNumber="02"
        tagline={
          <>
            Intuitive interfaces grounded in real user research, designed to move the
            one number that actually matters to your business.
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
        lead="Research, UI design, prototyping, and dev-ready handoff, bundled into every engagement, under one set of hands instead of split across four people. No à la carte, no scope creep, no extra invoices for the basics."
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
        {/* Practitioner block, the person behind the work (Experience signal) */}
        <div className="mb-14 flex flex-col sm:flex-row sm:items-center gap-5 border border-white/10 bg-[#111418] p-6 md:p-8">
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
              Senior designer &amp; developer based in Tel Aviv, running a Figma-to-code
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
              href: '/work/case-studies/videoleap/',
              title: 'Videoleap',
              blurb: 'Redesigned onboarding, editor, and gamification for a flagship mobile app.',
              image: '/images/clients/SubVB9A.jpeg',
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

      {/* Chapter 05, Specialties */}
      <EditorialSection
        chapter="05"
        label="Specialties"
        title="Research, design, and code,"
        italicTitle="in the same hands."
        lead="Most teams split UX research, UI design, and front-end across three or four people. I run them as one continuous craft, which is why the design actually survives contact with production."
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
        headline="Make the interface"
        italicHeadline="do the heavy lifting."
        lead="If your product is great but the UX is fighting it, that's a fixable problem. Book a call and I'll show you exactly where."
      />
    </>
  );
}
