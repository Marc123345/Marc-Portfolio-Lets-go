"use client";

import CaseStudyLayout, { CaseStudyConfig } from '@/components/CaseStudyLayout';

const config: CaseStudyConfig = {
  kicker: 'Case File · 12 · SaaS / Logistics',
  pkg: 'Enterprise Fleet SaaS',
  title: 'Fleet',
  italicWord: 'Management.',
  tagline: (
    <>
      Enterprise fleet platform with real-time tracking, predictive maintenance,
      and intelligent route optimisation. 500+ vehicles tracked live, 35% cost
      reduction across operations.
    </>
  ),
  heroImage: 'https://i.imgur.com/EwgHAuK.png',
  metaStats: [
    { value: '500+', label: 'Vehicles' },
    { value: '35%', label: 'Cost ↓' },
    { value: '95%', label: 'Satisfaction' },
    { value: 'Live', label: 'Telemetry' },
  ],

  marquee: [
    'React',
    'Node.js',
    'MongoDB',
    'Real-time',
    'Telemetry UX',
    'Route Optimization',
    'Predictive Maintenance',
  ],

  challenge: {
    narrative: (
      <>
        <p>
          Fleet operators were managing hundreds of vehicles through spreadsheets
          and voice notes. When something broke, they only found out when the
          driver stopped responding.
        </p>
        <p>
          They needed a live dashboard that surfaced anomalies before they became
          incidents — without drowning dispatchers in 500 concurrent alerts.
        </p>
      </>
    ),
    bullets: [
      'No live visibility into fleet status',
      'Maintenance reactive, never predictive',
      'Route planning driven by habit, not data',
      'Driver safety data unused',
    ],
  },

  solution: {
    narrative: (
      <>
        <p>
          A comprehensive platform that delivers actionable insights in real time.
          Tuned for dispatchers watching 20 feeds at once — clear signal, minimal
          noise, and a design system that makes anomalies impossible to miss.
        </p>
      </>
    ),
    items: [
      {
        title: 'Real-time tracking',
        description:
          'Live telemetry for every vehicle — GPS, fuel, speed, DTCs — surfaced in a glanceable dashboard that updates without refresh.',
      },
      {
        title: 'Predictive maintenance',
        description:
          'ML model flags vehicles at risk of breakdown based on telemetry patterns. Maintenance scheduled proactively, not reactively.',
      },
      {
        title: 'Route optimisation',
        description:
          'Routes computed from real traffic + fuel + driver data. Dispatchers get suggested adjustments, not mandates.',
      },
      {
        title: 'Design system for dense data',
        description:
          "Sentinel-like severity scale, status tokens, and component library built specifically for operator dashboards under pressure.",
      },
    ],
    tech: ['React', 'Node.js', 'MongoDB', 'WebSockets', 'Mapbox'],
  },

  results: {
    stats: [
      { value: '500+', label: 'Vehicles Tracked' },
      { value: '35%', label: 'Cost Reduction' },
      { value: '95%', label: 'User Satisfaction' },
      { value: 'Live', label: 'Dashboards' },
    ],
  },

  gallery: [
    {
      image: 'https://i.imgur.com/ozcuJ2k.jpeg',
      caption: 'Live map + telemetry',
      wide: true,
    },
    {
      image: 'https://i.imgur.com/EwgHAuK.png',
      caption: 'Fleet control dashboard',
    },
    {
      image: 'https://i.imgur.com/ACKUFLy.jpeg',
      caption: 'Mobile dispatcher app',
    },
    {
      image: 'https://i.imgur.com/gEbm2d0.png',
      caption: 'Analytics & dynamic pricing',
    },
    {
      image: 'https://i.imgur.com/0npIa3u.png',
      caption: 'Vehicle tracking interface',
    },
  ],

  next: {
    title: 'MyTube',
    url: '/work/case-studies/mytube',
    image: 'https://i.imgur.com/QNHXpzT.jpeg',
  },
};

export default function FleetManagementPage() {
  return <CaseStudyLayout config={config} />;
}
