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

export default function AeoPage() {
  return (
    <>
      <ServiceMasthead
        kicker="Service · Answer Engine Optimization"
        title="Answer Engine"
        italicWord="Optimization."
        volumeNumber="08"
        tagline={
          <>
            Get cited by ChatGPT, Perplexity, Claude, and Google AI Overviews.
            Structured content AI engines can extract, attribute, and surface to
            real users searching for what you do.
          </>
        }
        meta={['ChatGPT · Perplexity', 'Schema-first', 'Citation tracking']}
        imageSrc="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=2000&q=80"
      />

      <ServiceMarquee
        phrases={['ChatGPT', 'Perplexity', 'Claude', 'Google AI', 'Schema.org', 'Structured Data', 'Citation-Ready']}
      />

      <EditorialSection
        chapter="01"
        label="Who it's for"
        title="If AI engines"
        italicTitle="ignore you."
        lead="Search isn&apos;t just Google anymore. ChatGPT, Perplexity, and AI Overviews are answering queries directly — and either citing you, or not."
      >
        <div className="space-y-16">
          {[
            { text: 'My competitors keep getting mentioned in ChatGPT and we don&apos;t.', align: 'left' as const, size: 'lg' as const },
            { text: 'We rank well on Google but invisible in AI search.', align: 'right' as const, size: 'md' as const },
            { text: 'Perplexity cites random forum posts instead of our docs.', align: 'left' as const, size: 'md' as const },
            { text: 'Nobody on my team knows what AEO actually means.', align: 'right' as const, size: 'lg' as const },
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
        title="Content AI"
        italicTitle="can quote."
        bg="bg-[#0a0a0a]"
      >
        <div className="border-t border-white/10">
          <DeliverableRow
            number="01"
            title="Question-driven content audit"
            description="Find the questions your audience asks AI engines. Map each to the page that should answer it — or build the page that doesn&apos;t exist yet."
          />
          <DeliverableRow
            number="02"
            title="Answer-ready structure"
            description="Clear question → direct answer → supporting context. Pages structured the way LLMs extract information, not the way humans browse."
          />
          <DeliverableRow
            number="03"
            title="Schema + entity markup"
            description="FAQPage, HowTo, Article, Organization, Person schema applied properly. Entity disambiguation so AI knows who you are."
          />
          <DeliverableRow
            number="04"
            title="Citation tracking"
            description="Monthly report on where your brand is being mentioned across ChatGPT, Perplexity, Claude, and Google AI Overviews."
          />
        </div>
      </EditorialSection>

      <EditorialSection
        chapter="03"
        label="The Process"
        title="From query"
        italicTitle="to citation."
      >
        <div>
          <ProcessChapter
            numeral="I."
            title="Query mining"
            description="Find what your audience actually asks AI. Otterly, AlsoAsked, AnswerThePublic, and direct ChatGPT/Perplexity testing."
            items={['AI engine prompt testing', 'Citation gap analysis', 'Topical authority mapping', 'Competitor citation audit']}
          />
          <ProcessChapter
            numeral="II."
            title="Restructure"
            description="Rewrite top pages with question-first formatting. Add answer summaries, FAQ blocks, and clear topical hierarchy."
            items={['Q&A formatting', 'TL;DR summaries', 'FAQ schema blocks', 'Internal entity linking']}
            reverse
          />
          <ProcessChapter
            numeral="III."
            title="Mark up"
            description="Schema.org markup applied at the entity, page, and snippet level. AI knows what to extract and who to credit."
            items={['FAQPage / HowTo schema', 'Organization + Person', 'Article + datePublished', 'AI-friendly meta']}
          />
          <ProcessChapter
            numeral="IV."
            title="Monitor"
            description="Track citations across AI engines monthly. Iterate on what gets picked up, kill what doesn&apos;t."
            items={['Citation tracking', 'Brand mention monitoring', 'Iteration backlog', 'Quarterly strategy review']}
            reverse
          />
        </div>
      </EditorialSection>

      <EditorialSection
        chapter="04"
        label="Proof"
        title="The new"
        italicTitle="search era."
        bg="bg-[#0a0a0a]"
      >
        <StatsBar
          stats={[
            { value: '4', label: 'Engines Covered' },
            { value: 'Live', label: 'Citation Tracking' },
            { value: 'AA', label: 'Schema Coverage' },
            { value: '01', label: 'Specialist (me)' },
          ]}
        />
      </EditorialSection>

      <ServiceNavigator currentSlug="aeo" />
      <ServiceColophon
        headline="Get quoted"
        italicHeadline="by the machines."
        lead="Book a call — I'll show you exactly what AI engines say about your competitors and where your brand is missing."
      />
    </>
  );
}
