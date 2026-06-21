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
        kicker="Service · Generative AI SEO"
        title="Generative Engine"
        italicWord="Optimization."
        volumeNumber="09"
        tagline={
          <>
            Generative AI SEO that gets your brand cited inside AI-generated answers
            across LLMs and answer engines. AI visibility SEO strategies built for
            ChatGPT, Gemini, Claude, and Perplexity, not just Google.
          </>
        }
        meta={['LLM-first', 'Generative search', 'Brand mentions']}
        imageSrc="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=2000&q=80"
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
            { text: 'We&apos;re the original source, random aggregators get the credit.', align: 'right' as const, size: 'md' as const },
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
        lead="Generative AI SEO is content, entity, and authority work bundled together. Every project ships with these four pieces, AI generated content SEO, brand-as-entity infrastructure, source authority, and ongoing visibility tracking."
        bg="bg-[#0a0a0a]"
      >
        <div className="border-t border-white/10">
          <DeliverableRow
            number="01"
            title="Brand-as-entity strategy"
            description="LLMs reference brands they understand as distinct entities. We build the digital footprint, Wikipedia presence, structured data, consistent positioning, that makes you legible to AI."
          />
          <DeliverableRow
            number="02"
            title="AI generated content for SEO + human-edited copy"
            description="Long-form content with clear definitions, original data, and quotable lines. AI content SEO done right, AI generated content for SEO that&apos;s then human-edited for accuracy, voice, and originality. The format LLMs are statistically more likely to lift verbatim."
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

      {/* Chapter 05, AI Visibility SEO Strategies (long-tail keyword anchors) */}
      <EditorialSection
        chapter="05"
        label="Strategies"
        title="AI visibility SEO"
        italicTitle="strategies that work."
        lead="Generative AI for SEO and AI SEO optimization are still being figured out by every brand in the world. Here's the four-pillar AI based SEO approach to artificial intelligence and SEO that I've found actually moves the needle, built from real testing against live LLM responses, not theory. If you're trying to learn AI SEO from the trenches, this is the playbook. SEO and generative AI aren't separate disciplines anymore."
      >
        <div className="grid md:grid-cols-2 gap-px bg-white/10 border border-white/10">
          <div className="bg-black p-8">
            <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/40 mb-3">
              Strategy 01
            </div>
            <h3 className="text-white text-xl mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
              Generative AI SEO content
            </h3>
            <p className="text-white/70 leading-relaxed">
              Long-form, structured, quotable. The intersection of generative AI and SEO
              is content LLMs can lift verbatim, clear definitions, original data, and
              statements that read like the citation they&apos;ll become. AI generated
              SEO content with human editorial discipline on top.
            </p>
          </div>
          <div className="bg-black p-8">
            <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/40 mb-3">
              Strategy 02
            </div>
            <h3 className="text-white text-xl mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
              Brand-as-entity infrastructure
            </h3>
            <p className="text-white/70 leading-relaxed">
              Wikipedia presence, Wikidata, consistent schema.org markup, sameAs links.
              How SEO machine learning artificial intelligence systems learn that
              you&apos;re a real, distinct brand worth citing.
            </p>
          </div>
          <div className="bg-black p-8">
            <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/40 mb-3">
              Strategy 03
            </div>
            <h3 className="text-white text-xl mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
              Source authority for AI
            </h3>
            <p className="text-white/70 leading-relaxed">
              An AI and SEO strategy that builds upstream citations, get mentioned in
              the sites LLMs already cite. Strategic placements, original research,
              digital PR.
            </p>
          </div>
          <div className="bg-black p-8">
            <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/40 mb-3">
              Strategy 04
            </div>
            <h3 className="text-white text-xl mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
              Cross-engine monitoring
            </h3>
            <p className="text-white/70 leading-relaxed">
              SEO strategy with AI needs measurement. We test 50+ target queries
              monthly against ChatGPT, Gemini, Claude, and Perplexity, tracking
              brand mentions, citation positioning, and competitor share-of-voice.
            </p>
          </div>
        </div>
      </EditorialSection>

      <ServiceNavigator currentSlug="geo" />
      <ServiceColophon
        headline="Be the answer"
        italicHeadline="not just a result."
        lead="Book a call, I'll run live generative AI SEO tests against your brand in ChatGPT, Gemini, and Perplexity and show you where you stand."
      />
    </>
  );
}
