"use client";

import CaseStudyLayout, { CaseStudyConfig } from '@/components/CaseStudyLayout';

const IMG = '/images/case-studies/silicon-atlas';

const config: CaseStudyConfig = {
  kicker: 'Case File · 17 · Engineering Dashboard',
  pkg: 'UI Kit · React + Figma',
  title: 'Silicon',
  italicWord: 'Atlas.',
  tagline: (
    <>
      A dark, data-dense dashboard kit for lab, hardware and telemetry tools.
      It ships as a working React app, a Figma file and a documented design
      system, all running on one set of tokens.
    </>
  ),
  heroImage: `${IMG}/run-comparison.jpg`,
  metaStats: [
    { value: '5', label: 'Workspaces' },
    { value: '3,856', label: 'Demo Captures' },
    { value: 'React 19', label: 'Source' },
    { value: '390px', label: 'Down To' },
  ],

  marquee: [
    'React 19',
    'Figma',
    'Design Tokens',
    'Data Visualization',
    'SVG Charts',
    'Telemetry',
    'Engineering Tools',
  ],

  challenge: {
    narrative: (
      <>
        <p>
          Engineering teams compare signals all day: eight receiver lanes,
          two test runs, one limit line. Most dashboards show the numbers but
          stop there. The engineer still has to note the interval somewhere
          else, plan the retest in a spreadsheet and write up the decision in
          an email.
        </p>
        <p>
          The demo case is a photonics validation lab. A receiver lane dips
          below its 54 mV limit during a thermal test, and the team has to
          find out whether that dip repeats under controlled conditions.
        </p>
      </>
    ),
    bullets: [
      'Eight lanes on one time axis without visual noise',
      'Evidence captured outside the tool and lost later',
      'Retest plans disconnected from the data that triggered them',
      'Pass and fail shown by colour alone',
    ],
  },

  solution: {
    narrative: (
      <>
        <p>
          Five workspaces carry one investigation from anomaly to decision.
          Brush an interval on the run comparison, capture it as evidence,
          plan a retest from that selection, then review the simulated
          captures and record a disposition with a reason.
        </p>
        <p>
          The visual rules are strict. Acid Lime marks the one thing you can
          act on or are pointing at, numbers sit in monospace so digits line
          up, and every status colour comes with a word, a count or a dashed
          line.
        </p>
      </>
    ),
    items: [
      {
        title: 'Run comparison',
        description:
          'Eight stacked lane traces on one axis, a package diagram for picking lanes, a cursor and brush-to-select intervals feeding an evidence bar.',
      },
      {
        title: 'Run details and signal field',
        description:
          'Synchronised multi-metric traces with a lane inspector, plus an isometric lane waterfall, trajectory and distribution charts.',
      },
      {
        title: 'Retest planning and review',
        description:
          'Test conditions, capture sequence and acceptance checks, then a repeat ledger, per-sample inspection and a decision history.',
      },
      {
        title: 'One token set everywhere',
        description:
          'Colour, type and radius live in one palette file, including the colours inside the SVG charts. Change a value and the app, style guide and charts update together.',
      },
    ],
    tech: ['React 19', 'esbuild', 'SVG', 'CSS Variables', 'W3C Design Tokens', 'Figma', 'Inter'],
  },

  results: {
    stats: [
      { value: '5', label: 'Workspaces' },
      { value: '12', label: 'Handoff Chapters' },
      { value: '1', label: 'Runtime Dependency' },
      { value: '11.5:1', label: 'Lime Contrast' },
    ],
  },

  gallery: [
    { image: `${IMG}/run-details.jpg`, caption: 'Run details, synchronised traces and lane inspector', wide: true },
    { image: `${IMG}/signal-field.jpg`, caption: 'Signal field, isometric lane waterfall' },
    { image: `${IMG}/retest-planning.jpg`, caption: 'Retest planning from the captured interval' },
    { image: `${IMG}/capture-review.jpg`, caption: 'Capture review and disposition', wide: true },
    { image: `${IMG}/design-system.jpg`, caption: 'Design system, colour foundations', wide: true },
  ],

  next: {
    title: 'Binns Media Group',
    url: '/work/case-studies/binns-media/',
    image:
      'https://ik.imagekit.io/qcvroy8xpd/Mockup%204%20-%2016x9.png?updatedAt=1767538713061',
  },
};

export default function SiliconAtlasPage() {
  return <CaseStudyLayout config={config} />;
}
