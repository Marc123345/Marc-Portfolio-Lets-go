"use client";

import {
  ServiceMasthead,
  ServiceMarquee,
  EditorialSection,
  ProblemQuote,
  DeliverableRow,
  ProcessChapter,
  StatsBar,
  ServiceColophon,
  ServiceNavigator,
} from '@/components/ServiceEditorial';

export default function GeoPage() {
  return (
    <>
      <ServiceMasthead
        kicker="Service · Generative Engine Optimization"
        title="Generative Engine"
        italicWord="Optimization."
        volumeNumber="09"
        tagline={
          <>
            Show up inside AI-generated answers across LLMs and answer engines.
            The new SEO playbook for an AI-first search era — written for ChatGPT,
            Gemini, Claude, and Perplexity, not just Google.
          </>
        }
        meta={['LLM-first', 'Generative search', 'Brand mentions']}
        imageSrc="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=2000&q=80"
      />

      <ServiceMarquee
        phrases={['ChatGPT', 'Gemini', 'Claude', 'Perplexity', 'AI Overviews', 'LLM-first', 'Brand-as-Entity']}
      />

      <EditorialSection
        chapter="01"
        label="Who it's for"
        title="If your brand"
        italicTitle="isn&apos;t in the answer."
        lead="Generative engines synthesise answers from the whole web. Whether your brand makes it into the synthesis is now a strategy, not luck."
      >
        <div className="space-y-16">
          {[
            { text: 'AI Overviews quote our competitors but never us.', align: 'left' as const, size: 'lg' as const },
            { text: 'We&apos;re the original source — random aggregators get the credit.', align: 'right' as const, size: 'md' as const },
            { text: 'Half my traffic is gone because Google answers the query directly.', align: 'left' as const, size: 'md' as const },
            { text: 'I don&apos;t even know what GEO is, let alone how to do it.', align: 'right' as const, size: 'lg' as const },
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
        title="An engine that"
        italicTitle="picks you."
        bg="bg-[#0a0a0a]"
      >
        <div className="border-t border-white/10">
          <DeliverableRow
            number="01"
            title="Brand-as-entity strategy"
            description="LLMs reference brands they understand as distinct entities. We build the digital footprint — Wikipedia presence, structured data, consistent positioning — that makes you legible to AI."
          />
          <DeliverableRow
            number="02"
            title="Generative-friendly content"
            description="Long-form content with clear definitions, original data, and quotable lines. The format LLMs are statistically more likely to lift verbatim."
          />
          <DeliverableRow
            number="03"
            title="Authoritative source-building"
            description="Get cited by the sites LLMs cite. Strategic placements, original research, and digital PR that builds upstream authority."
          />
          <DeliverableRow
            number="04"
            title="Ongoing monitoring"
            description="Track your brand mentions across generative engines monthly. See exactly when, where, and how AI quotes you."
          />
        </div>
      </EditorialSection>

      <EditorialSection
        chapter="03"
        label="The Process"
        title="From source"
        italicTitle="to citation."
      >
        <div>
          <ProcessChapter
            numeral="I."
            title="Audit"
            description="What do generative engines currently say about you, your category, and your competitors? Baseline first, strategy second."
            items={['Cross-engine query testing', 'Brand mention baseline', 'Competitor citation map', 'Topical positioning gaps']}
          />
          <ProcessChapter
            numeral="II."
            title="Strategy"
            description="Pick the queries you should own. Plan the content + entity + authority moves that will get you cited."
            items={['Target query selection', 'Entity disambiguation plan', 'Content priorities', 'Source-building plan']}
            reverse
          />
          <ProcessChapter
            numeral="III."
            title="Build"
            description="Original content + entity infrastructure + authority placements. Long-form that LLMs can quote, with provenance they can verify."
            items={['Long-form authoritative content', 'Schema + entity markup', 'Wikipedia + Wikidata', 'Strategic backlinks']}
          />
          <ProcessChapter
            numeral="IV."
            title="Iterate"
            description="GEO is new. We measure, learn, and rebuild monthly. What gets cited? What doesn&apos;t? Why?"
            items={['Monthly citation report', 'Engine-by-engine breakdown', 'Iteration backlog', 'Quarterly strategy review']}
            reverse
          />
        </div>
      </EditorialSection>

      <EditorialSection
        chapter="04"
        label="Proof"
        title="The next"
        italicTitle="search."
        bg="bg-[#0a0a0a]"
      >
        <StatsBar
          stats={[
            { value: '5+', label: 'Engines Tracked' },
            { value: 'Live', label: 'Mentions' },
            { value: 'New', label: 'Discipline' },
            { value: '01', label: 'Specialist' },
          ]}
        />
      </EditorialSection>

      <ServiceNavigator currentSlug="geo" />
      <ServiceColophon
        headline="Be the answer"
        italicHeadline="not just a result."
        lead="Book a call — I'll run live tests against your brand in ChatGPT, Gemini, and Perplexity and show you where you stand."
      />
    </>
  );
}
