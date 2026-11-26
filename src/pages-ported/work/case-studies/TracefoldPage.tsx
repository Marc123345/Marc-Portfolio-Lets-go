"use client";

import CaseStudyLayout, { type CaseStudyConfig } from '@/components/CaseStudyLayout';

const images = '/images/case-studies/tracefold';
const store = 'https://marcdesigns25.gumroad.com/l/tracefold';

const config: CaseStudyConfig = {
  kicker: 'Case File · Cybersecurity',
  pkg: 'Independent studio product',
  title: 'Tracefold',
  italicWord: '',
  tagline: 'A cybersecurity UI kit for Figma that follows two fictional investigations from the first alert to the decision to close a case.',
  heroImage: images + '/cover.webp',
  liveUrl: store,
  purchaseLabel: "Buy Tracefold on Gumroad",
  fullImages: true,
  metaStats: [
    { value: '22', label: 'Desktop screens' },
    { value: '14', label: 'Mobile screens' },
    { value: '67', label: 'Component masters' },
  ],
  marquee: ['Figma', 'Security operations', 'Evidence review', 'Mobile triage', 'Design systems'],
  challenge: {
    narrative: <p>An alert tells an analyst where to start. Before closing the case, they need to know which account and device were involved, who approved the response and whether the evidence covers the whole observation window. I built Tracefold around those decisions.</p>,
  },
  solution: {
    narrative: <p>I designed two sample cases. The first follows an identity alert through a relationship graph. The second follows a payroll session through approval, containment and a review of missing telemetry.</p>,
    items: [
      { title: 'Keep the evidence in view', description: 'Selecting alert AL-1842 puts its details beside the graph. The account, device and case remain visible while a timeline shows when the team revoked the sessions.' },
      { title: 'Explain why two timestamps differ', description: 'The directory and endpoint record the same account and device four seconds apart. A comparison view preserves both source times so the analyst can reconcile the events.' },
      { title: 'Make a narrow approval legible on mobile', description: 'The reviewer can see which session is in scope and which payroll job stays active. At closure, a separate record explains the eight-minute gap in network evidence.' },
    ],
    tech: ['Figma', 'Reusable components', 'JSON design tokens'],
  },
  results: {
    stats: [
      { value: '2', label: 'Investigation workflows' },
      { value: '36', label: 'Editable screens' },
      { value: '67', label: 'Reusable components' },
    ],
  },
  gallery: [
    { image: images + '/evidence-graph.webp', caption: 'Account, device and case linked to alert AL-1842', wide: true },
    { image: images + '/record-comparison.webp', caption: 'Directory and endpoint records compared' },
    { image: images + '/mobile-review.webp', caption: 'Mobile approval, verification and closure' },
    { image: images + '/components.webp', caption: 'Reusable investigation components', wide: true },
  ],
  next: {
    title: 'Fleet Management',
    url: '/work/case-studies/fleet-management/',
    image: '/images/clients/EwgHAuK.webp',
  },
};

export default function TracefoldPage() {
  return <CaseStudyLayout config={config} />;
}
