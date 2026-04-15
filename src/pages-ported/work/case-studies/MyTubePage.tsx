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
      insights and workflow automation — faster metadata processing, significant
      time saved in analysis.
    </>
  ),
  heroImage: 'https://i.imgur.com/QNHXpzT.jpeg',
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
          Media teams were spending hours tagging, categorising, and searching
          through video libraries. The metadata problem was killing their throughput
          — more content meant less findable content.
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

  solution: {
    narrative: (
      <>
        <p>
          A comprehensive video metadata management system built on data-driven
          design principles — empowering media and manufacturing sectors with
          AI-powered insights and automated ingestion.
        </p>
      </>
    ),
    items: [
      {
        title: 'AI-assisted tagging',
        description:
          'ML model suggests categories and keywords on upload. Analysts confirm or edit instead of starting from scratch.',
      },
      {
        title: 'Unified analytics',
        description:
          'All viewing, engagement, and ROI metrics collapsed into a single dashboard tuned for glanceability.',
      },
      {
        title: 'Content workflow automation',
        description:
          'New uploads flow through automated processing pipelines. Teams focus on strategy, not tagging.',
      },
      {
        title: 'Design system for density',
        description:
          'Component library optimised for dense data tables, filter chips, and bulk operations without feeling cluttered.',
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

  gallery: [
    {
      image: 'https://i.imgur.com/QNHXpzT.jpeg',
      caption: 'Dashboard',
      wide: true,
    },
    {
      image: 'https://i.imgur.com/ZGLdkzN.jpeg',
      caption: 'Analytics view',
    },
    {
      image: 'https://i.imgur.com/ZDPU1yO.png',
      caption: 'Content management',
    },
    {
      image: 'https://i.imgur.com/Vt1rIYu.jpeg',
      caption: 'User interface',
      wide: true,
    },
  ],

  next: {
    title: 'Videoleap',
    url: '/work/case-studies/videoleap',
    image: 'https://i.imgur.com/SubVB9A.jpeg',
  },
};

export default function MyTubePage() {
  return <CaseStudyLayout config={config} />;
}
