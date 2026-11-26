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
    narrative: (
      <>
        <p>An alert tells an analyst where to start. Before closing the case, they need to know which account and device were involved, who approved the response and whether the evidence covers the whole observation window. I built Tracefold around those decisions.</p>
        <p>Before drawing anything I asked what a security kit is worth to the designer who buys it. Charts and tables are easy to find. The part a designer has to work out alone is how an investigation moves from one decision to the next, so that became the product.</p>
      </>
    ),
    bullets: [
      'Which account and device were involved?',
      'Who approved the response?',
      'Does the evidence cover the whole observation window?',
    ],
  },
  strategy: [
    {
      label: 'Goals',
      narrative: <p>"A good-looking SOC kit" can't be checked, so I kept asking why until each goal could be counted or tested on a screen.</p>,
      rowsLabel: 'What done means',
      rows: [
        { title: 'Two investigations run from alert to closure', description: 'Each case can be followed screen by screen, with no step that only exists in a designer\'s head. Both are complete across 22 desktop and 14 mobile screens.' },
        { title: 'The evidence stays on screen at every decision', description: 'Account, device and case remain visible while the analyst works. Nothing needed for a decision sits on a different page.' },
        { title: 'Every screen comes from shared parts', description: 'All 36 screens are assembled from 67 component masters, with colours and type stored as JSON design tokens a developer can read.' },
      ],
    },
    {
      label: 'Where it fits',
      narrative: (
        <>
          <p>Designers on security products already work in Figma and hand off to developers. Tracefold has to sit inside that routine, so it ships as editable Figma screens, component masters and tokens, and asks for no new tool.</p>
          <p>The analyst it depicts also lives between systems: a directory, an endpoint agent, a network sensor. The screens show those sources side by side, which is why the record comparison and the telemetry gap get their own views.</p>
        </>
      ),
    },
    {
      label: 'Scope',
      narrative: <p>The scope was set around the two cases the kit walks through.</p>,
      rowsLabel: 'In scope',
      rows: [
        { title: 'Identity alert through a relationship graph' },
        { title: 'Payroll session through approval, containment and a telemetry review' },
        { title: 'Mobile triage for the reviewer who approves the response' },
        { title: 'The component library and tokens behind every screen' },
      ],
    },
  ],
  validation: {
    label: 'Validation',
    narrative: <p>I checked the finished screens against the three questions from the overview. Each one has a place in the kit where it gets answered.</p>,
    rowsLabel: 'Checked against the opening questions',
    rows: [
      { title: 'Which account and device?', description: 'Alert AL-1842 opens beside the evidence graph, and the directory and endpoint records are compared with both source times kept.' },
      { title: 'Who approved the response?', description: 'The mobile reviewer sees which session is in scope and which payroll job stays active before approving.' },
      { title: 'Does the evidence cover the window?', description: 'At closure, a separate record explains the eight-minute gap in network evidence instead of hiding it.' },
    ],
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
    { image: images + '/svg/02-Evidence-graph.svg', caption: 'Account, device and case linked to alert AL-1842', wide: true },
    { image: images + '/svg/08-Record-comparison.svg', caption: 'Directory and endpoint records compared' },
    { image: images + '/svg/10-Mobile-response.svg', caption: 'Mobile approval, verification and closure' },
    { image: images + '/svg/09-Component-library.svg', caption: 'Reusable investigation components', wide: true },
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
