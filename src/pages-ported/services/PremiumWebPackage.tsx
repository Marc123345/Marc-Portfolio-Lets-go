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

export default function PremiumWebPackage() {
  return (
    <>
      <ServiceMasthead
        kicker="Package · Premium Web"
        title="The flagship"
        italicWord="build."
        volumeNumber="07"
        tagline={
          <>
            A complete, high-end website tailored for law firms, SaaS startups, and
            media teams. Strategic planning, custom design, React development, CRM
            integration, secure hosting.
          </>
        }
        meta={['Flagship sites', 'React + Next.js', 'CRM · Analytics · SEO']}
        imageSrc="https://ik.imagekit.io/qcvroy8xpd/TTV8Liw.jpg"
      />

      <ServiceMarquee
        phrases={[
          'Flagship',
          'Premium',
          'Hand-coded',
          'CRM-Integrated',
          'GSAP · Framer',
          'Cloudflare-hosted',
          'Designed for scale',
        ]}
      />

      <EditorialSection
        chapter="01"
        label="Who it's for"
        title="When a"
        italicTitle="template won&apos;t do."
        lead="This package is for teams whose website is the front door of a serious business — and needs to feel like it."
      >
        <div className="space-y-16">
          {[
            {
              text: "Our website is the first impression for multi-million-dollar contracts.",
              align: 'left' as const,
              size: 'lg' as const,
            },
            {
              text: "We've outgrown Squarespace and don't want to go back to WordPress.",
              align: 'right' as const,
              size: 'md' as const,
            },
            {
              text: "We need CRM, analytics, and content management, all talking to each other.",
              align: 'left' as const,
              size: 'md' as const,
            },
            {
              text: "The site has to match the quality of the work we do.",
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
        label="What's inside"
        title="Everything"
        italicTitle="a flagship needs."
        bg="bg-[#0a0a0a]"
      >
        <div className="border-t border-white/10">
          <DeliverableRow
            number="01"
            title="Strategic planning + wireframes"
            description="We define positioning, information architecture, and the narrative arc of the site before any pixels are drawn."
          />
          <DeliverableRow
            number="02"
            title="Custom UI + motion design"
            description="Bespoke visual identity, GSAP + Framer Motion micro-interactions, typography tuned at every breakpoint."
          />
          <DeliverableRow
            number="03"
            title="React + Next.js build"
            description="Hand-coded frontend with perfect Core Web Vitals, SEO-native architecture, and a CMS your team can actually use."
          />
          <DeliverableRow
            number="04"
            title="CRM + analytics integration"
            description="HubSpot, Salesforce, GA4, server-side tracking — wired cleanly so your sales and marketing teams get usable signal."
          />
          <DeliverableRow
            number="05"
            title="Cloudflare hosting + security"
            description="Deployed on Cloudflare for speed, caching, DDoS protection, and world-class uptime."
          />
        </div>
      </EditorialSection>

      <EditorialSection
        chapter="03"
        label="The Process"
        title="Six to eight"
        italicTitle="thoughtful weeks."
      >
        <div>
          <ProcessChapter
            numeral="I."
            title="Strategy"
            description="Deep-dive into your business, audience, and competitive landscape. We agree on metrics, tone, and the one thing this site must do."
            items={[
              'Stakeholder interviews',
              'Competitive audit',
              'Positioning + messaging',
              'Site architecture',
            ]}
          />
          <ProcessChapter
            numeral="II."
            title="Design"
            description="Full visual language, every page, every interaction, documented as a reusable design system."
            items={[
              'Visual identity',
              'UI + motion design',
              'Design system',
              'Interactive prototype',
            ]}
            reverse
          />
          <ProcessChapter
            numeral="III."
            title="Build"
            description="Hand-coded in React + Next.js with a headless CMS. Weekly demo links so you're never surprised."
            items={[
              'React + Next.js',
              'Headless CMS',
              'CRM + analytics',
              'Weekly progress demos',
            ]}
          />
          <ProcessChapter
            numeral="IV."
            title="Launch"
            description="Production deploy, comprehensive QA, and 30 days of hypercare support."
            items={[
              'Cloudflare deploy',
              'Full QA sweep',
              'Analytics validation',
              '30 days of support',
            ]}
            reverse
          />
        </div>
      </EditorialSection>

      <EditorialSection
        chapter="04"
        label="Proof"
        title="Flagship"
        italicTitle="builds in the wild."
        bg="bg-[#0a0a0a]"
      >
        <StatsBar
          stats={[
            { value: '6–8wk', label: 'Build Time' },
            { value: '95+', label: 'Lighthouse' },
            { value: 'Full', label: 'CRM Integrated' },
            { value: '30d', label: 'Post-Launch Care' },
          ]}
        />
        <WorkRow
          items={[
            {
              href: '/work/case-studies/binns-media',
              title: 'Binns Media Group',
              blurb: 'Flagship media platform — streaming, editorial, subscriber flows.',
              image:
                'https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%204%20-%2016x9.png?updatedAt=1767539579710',
              tags: ['Flagship', 'Media'],
            },
            {
              href: '/work/case-studies/untapped-africa',
              title: 'Untapped Africa',
              blurb: 'Premium storytelling platform with Mapbox + donation + CMS.',
              image:
                'https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%201%20-%201x1(1).png?updatedAt=1767539579782',
              tags: ['Flagship', 'Impact'],
            },
          ]}
        />
      </EditorialSection>

      <ServiceColophon
        headline="A website worth"
        italicHeadline="the business behind it."
        lead="If your business is serious, your website should be too. Book a call and we'll scope your flagship build."
      />
    </>
  );
}
