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

const PROOF_TESTIMONIALS = [
  {
    name: 'Omar Turner',
    role: 'CEO, Binns Media Group · New York',
    linkedin: 'https://www.linkedin.com/in/omar-turner-92b188130',
    content:
      "Marc was able to execute the vision perfectly. He's big on communication and dedicates his time to the client, ensuring you're completely satisfied at each step. I highly recommend Marc to anyone who needs a web developer who can execute on a vision and deliver a professional finished product.",
  },
  {
    name: 'Bradley Thompson',
    role: 'Marketing Director',
    linkedin: 'https://www.linkedin.com/in/bradleethompson/',
    content:
      'Marc is an incredible ally, highly responsive with quick solutions as he built our landing page. This was a high-stakes project that did not lend itself to a template. Marc is that rare creative who excels at design AND wordsmithing. The real deal.',
  },
  {
    name: 'Darren Youngleson',
    role: 'Serial Entrepreneur',
    linkedin: 'https://www.linkedin.com/in/darren-youngleson-27a17310/',
    content:
      'Marc is an absolute winner. No limits to his depth of expertise, unwavering customer service, and the quality and creativity of his product. Highly recommend working with Marc.',
  },
];

const AWARDS = [
  { label: 'Clutch', href: 'https://clutch.co/profile/marc-friedman-design-agency' },
  { label: 'Awwwards', href: 'https://www.awwwards.com/marc-friedman/' },
  {
    label: 'CSS Design Awards',
    href: 'https://www.cssdesignawards.com/sites/marc-friedman-web-design-agency/49357/',
  },
  {
    label: 'DesignRush',
    href: 'https://www.designrush.com/agency/profile/marc-friedman-design-agency',
  },
];

const INDUSTRIES = [
  {
    n: '01',
    title: 'Dental practices & DSOs',
    body:
      'Complex services, multiple locations, and patients who research for weeks before booking. We build sites that drive appointment volume and support lead nurturing through the whole patient decision.',
  },
  {
    n: '02',
    title: 'Industrial & manufacturing',
    body:
      'Technical products, long sales cycles, and buyers who want spec sheets, case studies, and proof before they talk to sales. We make that complexity easy to navigate instead of a wall.',
  },
  {
    n: '03',
    title: 'Roofing & commercial services',
    body:
      'High-value work where local visibility and credibility decide who gets the call. We get these businesses ranking and converting in the markets they actually serve.',
  },
  {
    n: '04',
    title: 'Media & publishing',
    body:
      'Content-heavy environments that demand performance at scale. A Next.js architecture handles high-volume pages without giving up speed or engagement.',
  },
  {
    n: '05',
    title: 'Home & property services',
    body:
      'Competitive local markets where the site is the difference between 50 leads a month and struggling to get 5. We build for the search terms and trust signals that convert.',
  },
];

const NEXTJS_EDGE = [
  {
    n: '01',
    title: 'Page speed & Core Web Vitals',
    body:
      '2026 benchmarks put Next.js around 0.9s LCP versus roughly 2.8s on WordPress, ~120ms INP versus ~320ms, and ~0.02 CLS versus ~0.12. Those gaps feed straight into how Google ranks you.',
  },
  {
    n: '02',
    title: 'Custom conversion paths',
    body:
      'Templates force your buyer journey into a pre-built layout. Custom development builds the path around your actual B2B sales process, from first visit through to the contact form.',
  },
  {
    n: '03',
    title: 'Advanced SEO & AI search',
    body:
      'Server-side rendering, static generation, automatic sitemaps, and granular metadata are built in. Clean, semantically structured content is also what wins in AEO and GEO, the AI answer engines.',
  },
  {
    n: '04',
    title: 'Scalable architecture',
    body:
      'More pages, more traffic, more languages: modular components and serverless functions scale without piling up the technical debt that template sites accumulate.',
  },
  {
    n: '05',
    title: 'Fewer security holes',
    body:
      'No plugin ecosystem means a far smaller attack surface than WordPress, where plugin vulnerabilities are the usual way in. Security verification is simpler and the result is more reliable.',
  },
];

const FAQS = [
  {
    q: 'What does a B2B web design project cost?',
    a: 'Engagements typically run $3k to $6k per month depending on scope, complexity, and ongoing optimization. We scope every project around your revenue targets rather than billing hours. Weigh that against the returns: a one-second speed improvement can lift conversions ~7%, and a well-structured site can raise lead volume substantially.',
  },
  {
    q: 'How long does a B2B website redesign take?',
    a: 'Most projects run six to 12 weeks from discovery to launch. Smaller, clearly scoped sites go faster; larger builds with custom functionality or multiple languages take longer. We set realistic timelines during discovery and keep you updated at every step.',
  },
  {
    q: 'What happens after our B2B website goes live?',
    a: 'Launch is the start, not the finish. We monitor performance, run tests, and keep tuning for conversions using analytics and user-behavior data, so your team can focus on the business while the site keeps improving.',
  },
  {
    q: 'Do you only work with large B2B companies?',
    a: 'No. We work with everyone from growing service businesses to established manufacturers. What our best clients share is treating the website as a lead-generation tool rather than a brochure. When choosing an agency, look at industry specialisms, real client testimonials, and how clearly the team communicates.',
  },
];

export default function B2BWebDesignPage() {
  return (
    <>
      <ServiceMasthead
        kicker="Service · B2B Web Design Agency"
        title="B2B Web Design"
        italicWord="Agency."
        volumeNumber="12"
        tagline={
          <>
            A B2B web design agency for US and European companies that need more than a
            good-looking site, they need one that generates qualified leads and drives
            pipeline. Custom React and Next.js, 50+ projects across three continents.
          </>
        }
        meta={['6–12 week builds', '50+ shipped · 3 continents', 'React · Next.js']}
        imageSrc="https://ik.imagekit.io/qcvroy8xpd/uoq5Ztg.jpeg"
      />

      <ServiceMarquee
        phrases={[
          'Custom B2B Web Design',
          'Website Redesign',
          'React & Next.js',
          'Conversion Optimization',
          'Lead Generation',
        ]}
      />

      {/* Chapter 01 — Who it's for */}
      <EditorialSection
        chapter="01"
        label="Who it's for"
        title="Board-approved,"
        italicTitle="but nobody's converting."
        lead="The average B2B site converts 2.4–3.5% of visitors into leads, and most do worse. If any of these sound familiar, we should talk."
      >
        <div className="space-y-16">
          {[
            {
              text: "We're getting traffic, but nobody's filling out the contact form.",
              align: 'left' as const,
              size: 'lg' as const,
            },
            {
              text: 'The site won internal approval, but it isn\'t bringing in real clients.',
              align: 'right' as const,
              size: 'md' as const,
            },
            {
              text: 'Our site is slow, and we lose buyers before they see what we do.',
              align: 'left' as const,
              size: 'md' as const,
            },
            {
              text: 'I want a site that matches the quality of the work we actually do.',
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
        title="Design that sells,"
        italicTitle="not just decorates."
        lead="Most agencies sell aesthetics. Our B2B web design services are built around outcomes. Here is what that looks like in practice."
        bg="bg-[#0a0a0a]"
      >
        <div className="border-t border-white/10">
          <DeliverableRow
            number="01"
            title="Custom B2B design, built to convert"
            description="Every decision is grounded in data. 75% of users judge a company's credibility by its website, and 42% leave sites with poor functionality. We design for the enterprise buyer, not the boardroom applause."
          />
          <DeliverableRow
            number="02"
            title="Website redesign that fixes the leaks"
            description="We audit your conversion bottlenecks, restructure the information architecture, and rebuild with conversion-rate optimization, wired into the business systems your data already lives in. A well-designed site can raise lead volume dramatically."
          />
          <DeliverableRow
            number="03"
            title="React & Next.js development"
            description="Modern frameworks that deliver strong Core Web Vitals, fast loads, and a solid SEO foundation. A one-second speed improvement lifts conversions around 7%, the difference between winning and losing the click."
          />
          <DeliverableRow
            number="04"
            title="UX that guides the whole buying committee"
            description="B2B purchases involve multiple stakeholders. We structure every page around the buyer's journey, simplifying complex information so different roles can navigate it. 68% of B2B leads come through high-converting landing pages; we apply that rigor site-wide."
          />
          <DeliverableRow
            number="05"
            title="Brand identity that earns trust"
            description="Credibility isn't optional in B2B. We build your brand into every interaction and state your value proposition clearly, so buyers feel confident before they ever reach out."
          />
        </div>
      </EditorialSection>

      {/* Chapter 03 — Process */}
      <EditorialSection
        chapter="03"
        label="The Process"
        title="Four steps,"
        italicTitle="discovery to measurable impact."
      >
        <div>
          <ProcessChapter
            numeral="I."
            title="Discovery & Strategy"
            description="We start with your goals, audience, and competitors, then review your current site to find exactly where prospects drop off. We define what a qualified lead means for you and map the buyer journey before any design begins. Agencies that skip this ship sites that look good and just sit there."
            items={[
              'Business & competitor audit',
              'Conversion bottleneck review',
              'Buyer-journey map',
              'Lead & traffic targets',
            ]}
          />
          <ProcessChapter
            numeral="II."
            title="Design & User Experience"
            description="Wireframes and prototypes that streamline the flow, prioritize your content, and make navigation obvious. 80% of B2B buyers use mobile for work, so responsive design isn't up for debate. Trust signals like testimonials and case studies go where they move the needle."
            items={[
              'Conversion-driven wireframes',
              'Interactive prototype',
              'Mobile-first responsive',
              'Trust signals placed to convert',
            ]}
            reverse
          />
          <ProcessChapter
            numeral="III."
            title="Build & Launch"
            description="Hand-written React and Next.js, no templates or plugin bloat, for a site that flies. Launch includes cross-device testing, security verification, page-speed work, and every SEO foundation: schema, metadata, URL architecture, and sitemaps."
            items={[
              'Hand-coded components',
              'Cross-device QA',
              'Security verification',
              'Schema, metadata & sitemaps',
            ]}
          />
          <ProcessChapter
            numeral="IV."
            title="Optimize & Scale"
            description="Launch doesn't mean done. We watch traffic, bounce rate, session duration, and conversion rate, then keep refining with analytics and user-behavior data so lead generation grows alongside your business."
            items={[
              'Ongoing performance monitoring',
              'A/B testing',
              'Content strategy adjustments',
              'Continuous CRO',
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
        <div className="mb-14 flex flex-col sm:flex-row sm:items-center gap-5 border border-white/10 bg-[#111418] p-6 md:p-8">
          <img
            src={MARC_PORTRAIT}
            alt="Marc Friedman, full-stack designer and developer"
            className="w-20 h-20 rounded-full object-cover object-top ring-1 ring-white/15 flex-shrink-0"
            loading="lazy"
            width={80}
            height={80}
          />
          <div>
            <p className="text-white text-xl mb-1" style={{ fontFamily: 'var(--font-heading)' }}>
              Built by Marc Friedman
            </p>
            <p className="text-white/65 text-sm md:text-base leading-relaxed max-w-2xl">
              Senior full-stack designer &amp; developer based in Tel Aviv, working with B2B
              companies across the US and Europe. Every project runs from discovery to launch
              under one set of hands: no agency handoff, no offshore team.
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
            { value: '#1', label: 'Google Rankings' },
            { value: '300%', label: 'Traffic Growth' },
            { value: '250%', label: 'Engagement Lift' },
            { value: '50+', label: 'Projects · 3 Continents' },
          ]}
        />
        <WorkRow
          items={[
            {
              href: '/work/case-studies/binns-media/',
              title: 'Binns Media Group',
              blurb: 'Production house → streaming platform. React + TypeScript + Postgres.',
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

        <div className="mt-16 grid md:grid-cols-3 gap-px bg-white/10 border border-white/10">
          {PROOF_TESTIMONIALS.map((t) => (
            <figure key={t.name} className="bg-black p-8 flex flex-col">
              <div className="flex items-center gap-1 mb-4 text-[#FFD700]">{'★★★★★'}</div>
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

      {/* Chapter 05 — Industries */}
      <EditorialSection
        chapter="05"
        label="Industries"
        title="B2B verticals"
        italicTitle="we know cold."
        lead="A specialized B2B web design agency drives better leads because it understands the purchasing dynamics, terminology, and trust signals of each vertical."
      >
        <div className="grid md:grid-cols-3 gap-px bg-white/10 border border-white/10">
          {INDUSTRIES.map((it) => (
            <div key={it.n} className="bg-black p-8">
              <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/40 mb-3">
                {it.n}
              </div>
              <h3 className="text-white text-xl mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
                {it.title}
              </h3>
              <p className="text-white/70 leading-relaxed">{it.body}</p>
            </div>
          ))}
        </div>
      </EditorialSection>

      {/* Chapter 06 — Why Next.js */}
      <EditorialSection
        chapter="06"
        label="Why custom Next.js"
        title="Custom code beats"
        italicTitle="a template every time."
        lead="Templates can't compete with custom development for B2B conversion. Here is why React and Next.js is the foundation, and why it matters to your pipeline."
        bg="bg-[#0a0a0a]"
      >
        <div className="grid md:grid-cols-3 gap-px bg-white/10 border border-white/10">
          {NEXTJS_EDGE.map((it) => (
            <div key={it.n} className="bg-black p-8">
              <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/40 mb-3">
                {it.n}
              </div>
              <h3 className="text-white text-xl mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
                {it.title}
              </h3>
              <p className="text-white/70 leading-relaxed">{it.body}</p>
            </div>
          ))}
        </div>
      </EditorialSection>

      {/* Chapter 07 — FAQ */}
      <EditorialSection
        chapter="07"
        label="FAQ"
        title="Questions,"
        italicTitle="answered straight."
      >
        <div className="border-t border-white/10">
          {FAQS.map((f) => (
            <div key={f.q} className="border-b border-white/10 py-8">
              <h3
                className="text-white text-lg md:text-xl mb-3"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {f.q}
              </h3>
              <p className="text-white/70 leading-relaxed max-w-3xl">{f.a}</p>
            </div>
          ))}
        </div>
      </EditorialSection>

      <ServiceNavigator currentSlug="b2b-web-design" />
      <ServiceColophon
        headline="Your website should be"
        italicHeadline="your best salesperson."
        lead="Book 30 minutes. I'll audit your current B2B site live on the call and show you exactly where you're losing leads, no upsell, just a straight read on what it should be doing for you."
      />
    </>
  );
}
