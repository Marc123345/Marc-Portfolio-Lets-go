"use client";

import CaseStudyLayout, { CaseStudyConfig } from '@/components/CaseStudyLayout';

const config: CaseStudyConfig = {
  kicker: 'Case File · 13 · AI / Metadata',
  pkg: 'SaaS · Data-driven design',
  title: 'MyTube',
  italicWord: 'Platform.',
  tagline: (
    <>
      Video metadata management system for media and manufacturing. AI-powered
      insights and workflow automation, faster metadata processing, significant
      time saved in analysis.
    </>
  ),
  heroImage: '/images/clients/QNHXpzT.webp',
  metaStats: [
    { value: 'AI', label: 'Powered' },
    { value: 'Fast', label: 'Metadata' },
    { value: 'Team', label: 'Tooling' },
    { value: 'SaaS', label: 'Platform' },
  ],

  marquee: [
    'React',
    'Node.js',
    'AI / ML',
    'PostgreSQL',
    'Data-driven UX',
    'Workflow Automation',
  ],

  challenge: {
    narrative: (
      <>
        <p>
          Media teams were spending hours tagging, categorising and searching
          through video libraries. The more content they added, the harder
          any single clip became to find.
        </p>
        <p>
          The first question was what would actually be worth building. A
          faster tagging form would only speed up the slowest part of the job.
          The value was in getting analysts out of manual tagging and putting
          their time back into analysis.
        </p>
      </>
    ),
    bullets: [
      'Manual tagging consuming analyst hours',
      'Poor discoverability of relevant assets',
      'Analytics fragmented across tools',
      'No automated workflow for new uploads',
    ],
  },

  strategy: [
    {
      label: 'Goals',
      narrative: (
        <p>
          &ldquo;Better metadata&rdquo; isn&apos;t a goal anyone can check. I
          kept asking why until each one pointed at something the team could
          measure.
        </p>
      ),
      rowsLabel: 'What we set out to move',
      rows: [
        {
          title: 'Time from upload to searchable asset',
          description:
            'New videos should be tagged and findable without waiting for an analyst to get to them.',
        },
        {
          title: 'Share of tags confirmed instead of typed',
          description:
            'Analysts should spend their time reviewing suggestions, not writing keywords from a blank field.',
        },
        {
          title: 'Number of places analytics live',
          description:
            'Viewing, engagement and ROI numbers should come down to one dashboard.',
        },
      ],
    },
    {
      label: 'Where it fits',
      narrative: (
        <p>
          MyTube serves two sectors, media and manufacturing, whose teams
          already had their analytics spread across several tools. It had to
          take over the tagging and reporting those tools left undone, and
          keep the dense tables, filters and bulk actions analysts rely on
          when they work through a large library.
        </p>
      ),
    },
    {
      label: 'Scope',
      narrative: (
        <p>
          The scope covered four pieces of work.
        </p>
      ),
      rowsLabel: 'In scope',
      rows: [
        { title: 'AI-suggested tags on upload' },
        { title: 'One analytics dashboard' },
        { title: 'An automated processing pipeline for new uploads' },
        { title: 'A component library for dense data views' },
      ],
    },
  ],

  solution: {
    narrative: (
      <>
        <p>
          A video metadata management system for media and manufacturing
          teams. AI handles the first pass on every upload, and the interface
          is designed around reviewing and acting on data in bulk.
        </p>
      </>
    ),
    items: [
      {
        title: 'AI-assisted tagging',
        description:
          'An ML model suggests categories and keywords on upload. Analysts confirm or edit instead of starting from scratch.',
      },
      {
        title: 'Unified analytics',
        description:
          'Viewing, engagement and ROI metrics in a single dashboard built to be read at a glance.',
      },
      {
        title: 'Content workflow automation',
        description:
          'New uploads go through automated processing pipelines, so the team spends its time on analysis instead of tagging.',
      },
      {
        title: 'Design system for density',
        description:
          'A component library for dense data tables, filter chips and bulk operations that stays readable at full load.',
      },
    ],
    tech: ['React', 'Node.js', 'AI/ML', 'PostgreSQL'],
  },

  results: {
    stats: [
      { value: 'AI', label: 'Powered' },
      { value: 'Faster', label: 'Metadata' },
      { value: 'Live', label: 'Dashboards' },
      { value: 'High', label: 'Satisfaction' },
    ],
  },

  validation: {
    label: 'Validation',
    narrative: (
      <p>
        Each feature had to answer one of the goals. That kept the release
        tied to what the team said it needed.
      </p>
    ),
    rowsLabel: 'Checked against the goals',
    rows: [
      {
        title: 'Upload to searchable',
        description: 'Automated processing tags new uploads as they arrive.',
      },
      {
        title: 'Confirm instead of type',
        description: 'Suggested categories and keywords arrive ready to accept or edit.',
      },
      {
        title: 'One place for analytics',
        description: 'Viewing, engagement and ROI metrics share a single dashboard.',
      },
    ],
  },

  gallery: [
    {
      image: '/images/clients/QNHXpzT.webp',
      caption: 'Dashboard',
      wide: true,
    },
    {
      image: '/images/clients/ZGLdkzN.webp',
      caption: 'Analytics view',
    },
    {
      image: '/images/clients/ZDPU1yO.webp',
      caption: 'Content management',
    },
    {
      image: '/images/clients/Vt1rIYu.webp',
      caption: 'User interface',
      wide: true,
    },
  ],

  next: {
    title: 'Videoleap',
    url: '/work/case-studies/videoleap/',
    image: '/images/clients/SubVB9A.jpeg',
  },
};

export default function MyTubePage() {
  return <CaseStudyLayout config={config} />;
}
