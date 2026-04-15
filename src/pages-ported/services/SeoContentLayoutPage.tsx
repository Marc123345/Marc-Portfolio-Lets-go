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

export default function SeoContentLayoutPage() {
  return (
    <>
      <ServiceMasthead
        kicker="Service · SEO Content & Layout"
        title="Conversion-First"
        italicWord="SEO."
        volumeNumber="07"
        tagline={
          <>
            Pages structured for search engines AND humans. Content that ranks
            because it actually answers the query — layouts that convert because
            they don&apos;t make visitors think.
          </>
        }
        meta={['Content + structure', '98 Lighthouse', 'Schema.org']}
        imageSrc="https://ik.imagekit.io/qcvroy8xpd/uoq5Ztg.jpeg"
      />

      <ServiceMarquee
        phrases={[
          'On-page SEO',
          'Content Architecture',
          'Schema.org',
          'Core Web Vitals',
          'Conversion-Focused',
          'Topical Authority',
        ]}
      />

      <EditorialSection
        chapter="01"
        label="Who it's for"
        title="If your traffic"
        italicTitle="isn&apos;t converting."
        lead="Most pages either rank without converting or convert without ranking. Both leave money on the table."
      >
        <div className="space-y-16">
          {[
            {
              text: 'We rank for the keywords but visitors leave without doing anything.',
              align: 'left' as const, size: 'lg' as const,
            },
            {
              text: 'Our content reads great but Google won&apos;t surface it.',
              align: 'right' as const, size: 'md' as const,
            },
            {
              text: 'We have 200 blog posts and one of them gets 80% of the traffic.',
              align: 'left' as const, size: 'md' as const,
            },
            {
              text: 'I keep being told to just write more content but nothing&apos;s working.',
              align: 'right' as const, size: 'lg' as const,
            },
          ].map((p, i) => (
            <div key={i} className={`flex ${p.align === 'right' ? 'justify-end' : 'justify-start'}`}>
              <ProblemQuote text={p.text} align={p.align} size={p.size} />
            </div>
          ))}
        </div>
      </EditorialSection>

      <EditorialSection
        chapter="02"
        label="What you get"
        title="A page that"
        italicTitle="does both jobs."
        bg="bg-[#0a0a0a]"
      >
        <div className="border-t border-white/10">
          <DeliverableRow
            number="01"
            title="Search-intent content audit"
            description="Every page mapped to a real query, intent type (informational / commercial / navigational), and conversion goal. No more 'we should write about this' guesses."
          />
          <DeliverableRow
            number="02"
            title="Conversion-first layout"
            description="Page structure designed around the action you want — not the template you started with. Hero, proof, objection-handling, CTA in the right order for the intent."
          />
          <DeliverableRow
            number="03"
            title="On-page SEO done properly"
            description="Title tags, meta, headings, schema, internal linking, image alts. Boring. Critical. Done correctly the first time."
          />
          <DeliverableRow
            number="04"
            title="Performance as a ranking signal"
            description="Sub-2-second load times, perfect Core Web Vitals. Google rewards speed directly — and visitors stop bouncing."
          />
        </div>
      </EditorialSection>

      <EditorialSection
        chapter="03"
        label="The Process"
        title="From keyword"
        italicTitle="to conversion."
      >
        <div>
          <ProcessChapter
            numeral="I."
            title="Audit"
            description="Existing content + analytics + Search Console. What's ranking, what's converting, what's costing you both."
            items={['Search Console deep-dive', 'Page-level conversion tracking', 'Competitive SERP analysis', 'Topical gap report']}
          />
          <ProcessChapter
            numeral="II."
            title="Architect"
            description="Map every page to one query, one intent, one goal. Design the URL structure, internal linking, and content hierarchy that supports it."
            items={['Page → query mapping', 'Site architecture', 'Internal linking plan', 'Schema strategy']}
            reverse
          />
          <ProcessChapter
            numeral="III."
            title="Write + Build"
            description="Content that answers the query at the depth Google rewards, in a layout that converts the visitor."
            items={['Long-form content', 'Conversion-focused layouts', 'Hand-coded React components', 'Inline schema markup']}
          />
          <ProcessChapter
            numeral="IV."
            title="Measure"
            description="Monthly performance review across rankings + conversions. Iterate on the pages that move."
            items={['Ranking + traffic deltas', 'Conversion rate per page', 'Core Web Vitals', 'Quarterly content roadmap']}
            reverse
          />
        </div>
      </EditorialSection>

      <EditorialSection
        chapter="04"
        label="Proof"
        title="When it"
        italicTitle="works."
        bg="bg-[#0a0a0a]"
      >
        <StatsBar
          stats={[
            { value: '#1', label: 'Google Rankings' },
            { value: '300%', label: 'Traffic Lift' },
            { value: '2x', label: 'Conversion' },
            { value: '98', label: 'Lighthouse' },
          ]}
        />
        <WorkRow
          items={[
            {
              href: '/work/case-studies/paving-leads',
              title: 'Paving Leads',
              blurb: 'Failing Core Web Vitals → #1 on Google, leads doubled in month one.',
              image: 'https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%204%20-%2016_9.png?updatedAt=1767539579010',
              tags: ['SEO', 'Lead Gen'],
            },
            {
              href: '/work/case-studies/secure-annapolis',
              title: 'A Secure Annapolis',
              blurb: 'Local lead engine, top-3 maps, 85% mobile conversion.',
              image: 'https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%201%20-%201x1(2).png?updatedAt=1767539579194',
              tags: ['Local SEO', 'Conversion'],
            },
          ]}
        />
      </EditorialSection>

      <ServiceNavigator currentSlug="seo-content-layout" />
      <ServiceColophon
        headline="Stop writing"
        italicHeadline="for nobody."
        lead="Book a call — I'll audit one of your pages live and show you what's ranking, what's converting, and what's wasting effort."
      />
    </>
  );
}
