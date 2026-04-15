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

export default function LocalSeoPage() {
  return (
    <>
      <ServiceMasthead
        kicker="Service · Local SEO & Google Business"
        title="Local"
        italicWord="SEO."
        volumeNumber="10"
        tagline={
          <>
            Dominate Google Maps, win the Local 3-Pack, and turn your Google
            Business Profile into the most productive page on your business.
            Real local visibility for service-area businesses.
          </>
        }
        meta={['Google Business Profile', 'Local 3-Pack', 'Citations + Reviews']}
        imageSrc="https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&w=2000&q=80"
      />

      <ServiceMarquee
        phrases={[
          'Google Business Profile',
          'Local 3-Pack',
          'Map Rankings',
          'NAP Consistency',
          'Review Strategy',
          'Service Area Pages',
          'Schema · LocalBusiness',
        ]}
      />

      <EditorialSection
        chapter="01"
        label="Who it's for"
        title="If you serve"
        italicTitle="a real area."
        lead="Service businesses live and die in the Local 3-Pack. If you're not there, your competitors are answering the call."
      >
        <div className="space-y-16">
          {[
            { text: 'Customers can&apos;t find us on Google Maps.', align: 'left' as const, size: 'lg' as const },
            { text: 'Our competitor is somehow always above us in the Local 3-Pack.', align: 'right' as const, size: 'md' as const },
            { text: 'We have 100 reviews but they never show up in search.', align: 'left' as const, size: 'md' as const },
            { text: 'Half our locations have outdated info on Google.', align: 'right' as const, size: 'lg' as const },
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
        title="The full"
        italicTitle="local stack."
        bg="bg-[#0a0a0a]"
      >
        <div className="border-t border-white/10">
          <DeliverableRow
            number="01"
            title="Google Business Profile, fully optimised"
            description="Every field. Right categories. Right service areas. Right hours. Photos that convert. Posts that signal activity. Q&A managed."
          />
          <DeliverableRow
            number="02"
            title="Local 3-Pack ranking strategy"
            description="The map ranking algorithm rewards proximity, prominence, and relevance. We build all three — across your real service area."
          />
          <DeliverableRow
            number="03"
            title="Citations + NAP consistency"
            description="Name / Address / Phone scrubbed across the directories that matter. Inconsistent citations are quietly killing your rankings."
          />
          <DeliverableRow
            number="04"
            title="Review acquisition + response"
            description="System for asking the right customers at the right moment. Response templates that show Google your business is alive."
          />
          <DeliverableRow
            number="05"
            title="Service-area pages built right"
            description="Real, useful, location-specific pages — not auto-spun keyword soup. Schema markup, internal linking, conversion-focused content."
          />
        </div>
      </EditorialSection>

      <EditorialSection
        chapter="03"
        label="The Process"
        title="From buried"
        italicTitle="to top of the map."
      >
        <div>
          <ProcessChapter
            numeral="I."
            title="Audit"
            description="GBP, citations, reviews, on-page local SEO, competitor positioning. We baseline what's actually happening."
            items={['GBP completeness audit', 'Citation cleanup list', 'Review velocity baseline', 'Competitor 3-Pack analysis']}
          />
          <ProcessChapter
            numeral="II."
            title="Foundation"
            description="Fix the basics first. NAP everywhere, GBP fully filled, schema deployed, internal links wired."
            items={['NAP cleanup across web', 'GBP rebuild', 'LocalBusiness schema', 'Service-area page architecture']}
            reverse
          />
          <ProcessChapter
            numeral="III."
            title="Authority"
            description="Build the local prominence signals. Quality citations, local backlinks, review velocity, GBP posts."
            items={['Top-tier citation building', 'Local press + partnerships', 'Review acquisition system', 'GBP posting cadence']}
          />
          <ProcessChapter
            numeral="IV."
            title="Monitor"
            description="Track 3-Pack rankings by location, calls/directions from GBP, and real revenue impact monthly."
            items={['Rank tracking by city', 'GBP insights review', 'Call + form attribution', 'Quarterly local strategy']}
            reverse
          />
        </div>
      </EditorialSection>

      <EditorialSection
        chapter="04"
        label="Proof"
        title="When local"
        italicTitle="works."
        bg="bg-[#0a0a0a]"
      >
        <StatsBar
          stats={[
            { value: 'Top 3', label: 'Local Map' },
            { value: '+150%', label: 'Local Leads' },
            { value: '85%', label: 'Mobile Conv.' },
            { value: '4.8/5', label: 'Reviews' },
          ]}
        />
        <WorkRow
          items={[
            {
              href: '/work/case-studies/secure-annapolis',
              title: 'A Secure Annapolis',
              blurb: 'Locksmith — top 3 in local maps within a month, leads up 150%.',
              image: 'https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%201%20-%201x1(2).png?updatedAt=1767539579194',
              tags: ['Local SEO', 'GBP'],
            },
            {
              href: '/work/case-studies/paving-leads',
              title: 'Paving Leads',
              blurb: 'Specialty contractor — #1 on Google for high-intent local queries.',
              image: 'https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%204%20-%2016_9.png?updatedAt=1767539579010',
              tags: ['Local SEO', 'Lead Gen'],
            },
          ]}
        />
      </EditorialSection>

      <ServiceNavigator currentSlug="local-seo" />
      <ServiceColophon
        headline="Own your"
        italicHeadline="local pack."
        lead="Book a call — I'll audit your Google Business Profile and 3-Pack rankings live and show you the gaps."
      />
    </>
  );
}
