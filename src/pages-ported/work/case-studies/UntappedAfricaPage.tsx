"use client";

import CaseStudyLayout, { CaseStudyConfig } from '@/components/CaseStudyLayout';

const config: CaseStudyConfig = {
  kicker: 'Case File · 02 · Impact Storytelling',
  pkg: 'Impact Story · Flagship',
  title: 'Untapped',
  italicWord: 'Africa.',
  tagline: (
    <>
      A mission-first platform that helps bring clean water to 500,000+ people across
      8 African countries. Stories that move hearts — infrastructure that tracks
      where every dollar goes.
    </>
  ),
  heroImage:
    'https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%201%20-%201x1(1).png?updatedAt=1767539579782',
  metaStats: [
    { value: '500k+', label: 'People Served' },
    { value: '08', label: 'Countries' },
    { value: '250%', label: 'Engagement ↑' },
    { value: '2024', label: 'DesignRush Winner' },
  ],
  liveUrl: 'https://untappedafrica.co.za',

  marquee: [
    'Next.js',
    'TypeScript',
    'Postgres',
    'Mapbox GL',
    'Impact Story',
    'Donation UX',
    'Multilingual',
  ],

  challenge: {
    narrative: (
      <>
        <p>
          Untapped Africa had a world-changing mission but a digital presence that
          wasn&apos;t doing it justice. Donors couldn&apos;t feel the scope. Partners
          couldn&apos;t see the data. The site was costing them credibility — and
          donations.
        </p>
        <p>
          They needed a platform where every page opened a window onto the work: the
          villages, the pipelines, the partners, the money flow.
        </p>
      </>
    ),
    bullets: [
      'Static site couldn&apos;t express 8-country scope',
      'No way to show live infrastructure data',
      'Donor conversion flow was buried and generic',
      'Partners had nowhere to self-serve their pages',
    ],
  },

  solution: {
    narrative: (
      <>
        <p>
          I deployed the Impact Story framework — a mission-first storytelling engine
          designed to build trust, inspire belief, and drive donation action. Then I
          wired it into live infrastructure data via Mapbox GL so the scope of the
          work could literally be zoomed into.
        </p>
      </>
    ),
    items: [
      {
        title: 'Interactive impact map',
        description:
          'Mapbox GL layer showing villages, projects, and pipelines across 8 countries. Zoom in on any project for live status, donor attribution, and photos.',
      },
      {
        title: 'Donation-first conversion',
        description:
          'Every page ends in an action — donate, sponsor, partner, volunteer. Conversion flow designed around emotional arc, not just form fields.',
      },
      {
        title: 'Partner self-service',
        description:
          'Partner organisations manage their project pages, updates, and financial reporting through a CMS that&apos;s simple enough that nobody needs Marc to change a headline.',
      },
      {
        title: 'Cinematic storytelling',
        description:
          'Long-form editorial format with scroll-driven imagery, pull-quotes, and impact stats that reveal as you read.',
      },
    ],
    tech: ['Next.js', 'TypeScript', 'Postgres', 'Mapbox GL', 'Cloudflare'],
  },

  results: {
    stats: [
      { value: '500k+', label: 'People Served' },
      { value: '08', label: 'Countries' },
      { value: '250%', label: 'Engagement ↑' },
      { value: 'DR', label: '2024 Winner' },
    ],
    testimonial: {
      quote:
        'Working with Marc was a fantastic experience. He delivered a stunning, user-friendly site that exceeded our expectations. He captured the heart of our mission.',
      author: 'Gabriel Sher',
      role: 'CEO, Untapped Africa',
    },
  },

  gallery: [
    {
      image:
        'https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%204%20-%2016x9(1).png?updatedAt=1767539578544',
      caption: 'Homepage flagship',
      wide: true,
    },
    {
      image:
        'https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%201%20-%201x1(1).png?updatedAt=1767539579782',
      caption: 'Project detail',
    },
    {
      image:
        'https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%203%20-%2016x9(1).png?updatedAt=1767539580388',
      caption: 'Dark mode',
    },
    {
      image:
        'https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%202%20-%201x1(1).png?updatedAt=1767539578180',
      caption: 'Mobile experience',
    },
  ],

  next: {
    title: 'iLight Care',
    url: '/work/case-studies/ilight',
    image:
      'https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%201%20-%201x1(5).png?updatedAt=1767539579818',
  },
};

export default function UntappedAfricaPage() {
  return <CaseStudyLayout config={config} />;
}
