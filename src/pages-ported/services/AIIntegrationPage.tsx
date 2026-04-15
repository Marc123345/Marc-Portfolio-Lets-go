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

export default function AIIntegrationPage() {
  return (
    <>
      <ServiceMasthead
        kicker="Service · AI Integration"
        title="AI that"
        italicWord="actually ships."
        volumeNumber="04"
        tagline={
          <>
            Real AI integrations into real products — not demos. Measurable outcomes,
            production-ready architecture, zero hype.
          </>
        }
        meta={['LLM + ML', 'Anthropic · OpenAI', 'Production-grade']}
        imageSrc="https://ik.imagekit.io/qcvroy8xpd/uoq5Ztg.jpeg"
      />

      <ServiceMarquee
        phrases={[
          'LLMs · RAG · Agents',
          'Workflow Automation',
          'Production-Ready',
          'Anthropic · OpenAI',
          'Evaluated + Guardrailed',
          'Measurable Outcomes',
        ]}
      />

      <EditorialSection
        chapter="01"
        label="Who it's for"
        title="If you&apos;ve been told"
        italicTitle="AI will fix it."
        lead="Most teams come to me after a failed pilot or a demo that looked magic in the room and broke in production."
      >
        <div className="space-y-16">
          {[
            {
              text: "We built an AI prototype but can't get it reliable enough to ship.",
              align: 'left' as const,
              size: 'lg' as const,
            },
            {
              text: "Our team is spending hours doing work an LLM could handle.",
              align: 'right' as const,
              size: 'md' as const,
            },
            {
              text: "I don't know where AI actually fits in our product.",
              align: 'left' as const,
              size: 'md' as const,
            },
            {
              text: "We need agents but nobody on our team has built one at scale.",
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
        title="AI, delivered"
        italicTitle="like software."
        bg="bg-[#0a0a0a]"
      >
        <div className="border-t border-white/10">
          <DeliverableRow
            number="01"
            title="LLM + RAG Integration"
            description="Chat interfaces, document Q&A, intelligent search — grounded in your data, with citations, guardrails, and evaluation pipelines."
          />
          <DeliverableRow
            number="02"
            title="Workflow Automation"
            description="Pipelines that replace repetitive human work: ticket triage, content operations, report generation. Reliable enough to trust in production."
          />
          <DeliverableRow
            number="03"
            title="Agents + Tool Use"
            description="Purpose-built agents that take action — not just generate text. With proper scoping, logging, and human-in-the-loop checkpoints."
          />
          <DeliverableRow
            number="04"
            title="Prompt + Eval Infra"
            description="Versioned prompts, automated evals, regression tests. So your AI feature doesn't silently degrade as models update."
          />
        </div>
      </EditorialSection>

      <EditorialSection
        chapter="03"
        label="The Process"
        title="From 'AI idea'"
        italicTitle="to shipped feature."
      >
        <div>
          <ProcessChapter
            numeral="I."
            title="Scope"
            description="Most AI projects fail because they're scoped like magic. I scope them like software: one task, one success metric, one user."
            items={[
              'Task definition',
              'Success metrics',
              'Risk + guardrail design',
              'Model selection',
            ]}
          />
          <ProcessChapter
            numeral="II."
            title="Prototype"
            description="A thin vertical slice that proves or disproves the hypothesis. No UI polish — just: does this work?"
            items={[
              'Initial prompt engineering',
              'Grounding strategy (RAG, fine-tune, etc.)',
              'Minimal UI',
              'First eval set',
            ]}
            reverse
          />
          <ProcessChapter
            numeral="III."
            title="Harden"
            description="This is where most projects fail. I build the eval pipeline, the guardrails, and the observability before the feature ships."
            items={[
              'Automated evals',
              'Safety + guardrails',
              'Cost + latency monitoring',
              'Human-in-the-loop design',
            ]}
          />
          <ProcessChapter
            numeral="IV."
            title="Ship + Iterate"
            description="Deploy to production, watch the metrics, iterate on prompts and retrieval weekly."
            items={[
              'Production deploy',
              'Analytics + logging',
              'Weekly prompt iterations',
              'Quarterly model review',
            ]}
            reverse
          />
        </div>
      </EditorialSection>

      <EditorialSection
        chapter="04"
        label="Proof"
        title="AI in production,"
        italicTitle="not slides."
        bg="bg-[#0a0a0a]"
      >
        <StatsBar
          stats={[
            { value: '12+', label: 'AI Features Shipped' },
            { value: '40%', label: 'Avg Time Saved' },
            { value: 'RAG', label: 'Custom Grounding' },
            { value: '<2%', label: 'Hallucination Rate' },
          ]}
        />
        <WorkRow
          items={[
            {
              href: '/work/case-studies/ilight',
              title: 'iLight Care',
              blurb: 'AI mental health companion with grounded responses and clinician safety checks.',
              image:
                'https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%201%20-%201x1(5).png?updatedAt=1767539579818',
              tags: ['LLM', 'Healthcare', 'RAG'],
            },
            {
              href: '/work/case-studies/videoleap',
              title: 'Videoleap',
              blurb: 'AI-assisted video editing flows with personalized template recommendations.',
              image: 'https://i.imgur.com/SubVB9A.jpeg',
              tags: ['AI/ML', 'Mobile'],
            },
          ]}
        />
      </EditorialSection>

      <ServiceColophon
        headline="Ship AI your"
        italicHeadline="users actually use."
        lead="Book a call and we'll scope your AI feature properly — with a plan to ship it, not a slide to admire it."
      />
    </>
  );
}
