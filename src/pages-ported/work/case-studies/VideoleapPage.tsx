"use client";

import CaseStudyLayout, { CaseStudyConfig } from '@/components/CaseStudyLayout';

const config: CaseStudyConfig = {
  kicker: 'Case File · 14 · Mobile / AI',
  pkg: 'Product Design · Lightricks',
  title: 'Videoleap',
  italicWord: 'Redesign.',
  tagline: (
    <>
      AI-powered video editing platform — redesigned onboarding, editor, and
      template marketplace flows. Community-driven app for creating, sharing, and
      consuming video content.
    </>
  ),
  heroImage: 'https://i.imgur.com/SubVB9A.jpeg',
  metaStats: [
    { value: '↑', label: 'Template Use' },
    { value: '↑', label: 'Retention' },
    { value: 'Mobile', label: 'First' },
    { value: 'Team', label: 'Project' },
  ],

  marquee: [
    'UX Research',
    'Stakeholder Interviews',
    'Design Thinking',
    'Onboarding UX',
    'Gamification',
    'Mobile Editor',
  ],

  challenge: {
    narrative: (
      <>
        <p>
          Videoleap wanted to increase engagement by improving discoverability and
          utilisation of templates. User feedback showed people had difficulty
          finding relevant templates and low incentive to upload their own content.
        </p>
        <p>
          How might we incentivise users to upload content and help them quickly
          find relevant templates to increase engagement and retention?
        </p>
      </>
    ),
    bullets: [
      'Lack of relevant and personalised templates',
      'Editing features too complex for average users',
      'Low incentive for template sharing',
      'High-volume content production demands',
    ],
  },

  solution: {
    narrative: (
      <>
        <p>
          As part of the Lightricks team, I led UX research through stakeholder
          interviews and design-thinking workshops, then designed three core flows:
          a personalised onboarding experience, a dual-mode editor, and a
          gamification system that rewarded template creation.
        </p>
      </>
    ),
    items: [
      {
        title: 'Personalised onboarding',
        description:
          'Tailored recommendations based on user preferences. Progressive disclosure of features so first-time users aren&apos;t overwhelmed.',
      },
      {
        title: 'Dual-mode editor',
        description:
          'Simple mode for quick edits, advanced mode for pros. One UI, two affordances, no feature fragmentation.',
      },
      {
        title: 'Gamification + creator rewards',
        description:
          'Points system that rewards template creation and sharing. Building an active community of creators instead of passive consumers.',
      },
      {
        title: 'Research-driven iteration',
        description:
          'Design-thinking workshops, user interviews, and data analysis drove every decision. No guessing, no gut calls.',
      },
    ],
    tech: ['Figma', 'UX Research', 'Prototyping', 'Design Systems'],
  },

  results: {
    stats: [
      { value: '↑', label: 'Template Usage' },
      { value: '↑', label: 'Retention' },
      { value: 'Live', label: 'Community' },
      { value: 'Mobile', label: 'First' },
    ],
  },

  gallery: [
    {
      image: 'https://i.imgur.com/SubVB9A.jpeg',
      caption: 'Editor redesign',
      wide: true,
    },
  ],

  next: {
    title: 'Sentinel DS',
    url: '/work/case-studies/sentinel-ds',
    image:
      'https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%204%20-%2016_9.png?updatedAt=1767539579010',
  },
};

export default function VideoleapPage() {
  return <CaseStudyLayout config={config} />;
}
