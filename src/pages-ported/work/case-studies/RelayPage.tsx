"use client";

import CaseStudyLayout, { CaseStudyConfig } from '@/components/CaseStudyLayout';

const IMG = '/images/case-studies/relay';
const STORE = 'https://marcdesigns25.gumroad.com/l/relay';

const config: CaseStudyConfig = {
  kicker: 'Case File · 18 · AI Review Console',
  pkg: 'UI Kit · React + Figma',
  title: 'Relay',
  italicWord: '',
  tagline: (
    <>
      A dark control-room kit for products that put AI-generated media in
      front of people. The model proposes a change, an operator checks it
      against the original, and nothing reaches the audience until a person
      releases it.
    </>
  ),
  heroImage: `${IMG}/cover.jpg`,
  liveUrl: STORE,
  purchaseLabel: 'Buy Relay on Gumroad',
  fullImages: true,
  metaStats: [
    { value: '8', label: 'Workspaces' },
    { value: '30+', label: 'Components' },
    { value: 'React 19', label: 'Source' },
    { value: '390px', label: 'Down To' },
  ],

  marquee: [
    'React 19',
    'Figma',
    'Design Tokens',
    'Human in the Loop',
    'State Machine',
    'Generative Media',
    'Control Room UI',
  ],

  challenge: {
    narrative: (
      <>
        <p>
          Real-time AI models can now relight a room, restyle a video or
          rewrite an image while people are watching. The risk sits in the
          details. A generated frame can look right and still drop the one
          thing that mattered.
        </p>
        <p>
          The demo case is a municipal evacuation drill. An AI video model
          relights a training hall for an emergency scenario, and the
          controller has to confirm the exit sign is still visible before
          participants see the new scene. In the first candidate, it
          isn&apos;t.
        </p>
        <p>
          So the value to aim for was clear. The console has to make it
          easy to catch a missing detail, impossible to release an
          unchecked revision, and safe when the connection drops.
        </p>
      </>
    ),
    bullets: [
      'Generated output that looks right but loses a critical detail',
      'Approval and release treated as one click',
      'No record of who approved which revision, and when',
      'A dropped connection leaving the audience on an unchecked frame',
    ],
  },

  strategy: [
    {
      label: 'Goals',
      narrative: (
        <p>
          &ldquo;Safe AI review&rdquo; can&apos;t be tested, so each goal was
          rewritten as a rule the interface either enforces or doesn&apos;t.
        </p>
      ),
      rowsLabel: 'What done means',
      rows: [
        {
          title: 'Approval belongs to one revision',
          description:
            'Staging a new revision resets every check. An approval never carries over to a candidate the operator hasn’t seen.',
        },
        {
          title: 'Approving and releasing are separate steps',
          description:
            'Approving changes a chip. Only releasing changes what participants see.',
        },
        {
          title: 'A dropped connection restores the original',
          description:
            'Losing the preview holds the candidate, clears verification and puts the original back on display.',
        },
        {
          title: 'Status never depends on colour alone',
          description:
            'Teal and coral always come with a word. White on Signal Blue reaches 5.9:1, and Verified Teal 7.1:1 on the panels.',
        },
      ],
    },
    {
      label: 'Where it fits',
      narrative: (
        <>
          <p>
            The same screens fit generative video and image tools, live
            broadcast control, content moderation queues and any product
            where AI proposes and a person approves.
          </p>
          <p>
            The teams building those products work in React and Figma, so
            Relay ships as a React 19 app with no runtime dependency beyond
            React, a Figma file with component sets and a prototype, and
            tokens in W3C format for Tokens Studio or Style Dictionary. The
            review rules live in their own tested state machine, so they can
            move to a server unchanged.
          </p>
        </>
      ),
    },
    {
      label: 'Scope',
      narrative: (
        <p>
          The scope was eight workspaces around one reference case: hold the
          candidate that lost the exit sign, approve the corrected revision,
          release it, then survive an interruption.
        </p>
      ),
      rowsLabel: 'In scope',
      rows: [
        { title: 'Cue review, cue stack and participant display' },
        { title: 'Session record with filters and JSON export' },
        { title: 'Scene atlas, a 3D cutaway linked to each camera check' },
        { title: 'Review timing and route replay' },
        { title: 'Design system page, six guides and an eight-chapter field guide' },
      ],
    },
  ],

  validation: {
    label: 'Validation',
    narrative: (
      <p>
        The review rules are covered by Node tests, and a worked rehearsal
        record replays the reference case step by step.
      </p>
    ),
    rowsLabel: 'Checked against the goals',
    rows: [
      {
        title: 'Can a missing detail get through?',
        description:
          'The first candidate fails its Exit marker check, and the cue can only be held, with a reason, until a corrected revision is verified.',
      },
      {
        title: 'Does approval reach the audience on its own?',
        description:
          'No. After approval the original stays on air until the operator releases. In the rehearsal, revision R2 takes 14 s to approve and 6 s more to release.',
      },
      {
        title: 'What happens when the connection drops?',
        description:
          'Simulate interruption puts the original back on display and clears the approval. Reconnecting leaves it there until the cue is reviewed and released again.',
      },
    ],
  },

  solution: {
    narrative: (
      <>
        <p>
          Eight workspaces follow one change from proposal to release. Drag a
          split wipe across the original and the candidate, verify each
          protected detail, hold or approve the current revision, then release
          it to the participant display. Every action lands in the session
          record.
        </p>
        <p>
          The visual rules keep the stakes readable. Signal Blue marks
          selection and what&apos;s on air, teal means verified or connected,
          coral means missing or interrupted, and every screen that can change
          the output shows what the audience is seeing.
        </p>
      </>
    ),
    items: [
      {
        title: 'Cue review',
        description:
          'A split wipe between original and AI candidate, a checklist of protected details, hold with a reason, approve one revision.',
      },
      {
        title: 'Participant display and session record',
        description:
          'Exactly what the audience sees, one click back to the original, and every operator action with time, revision and detail.',
      },
      {
        title: 'Scene atlas, timing and replay',
        description:
          'A 3D cutaway with pins for each protected detail, per-revision time to approve and release, and a scrubber that rebuilds what was on air at each event.',
      },
      {
        title: 'One token set everywhere',
        description:
          '19 colours, 8 type styles, radius and spacing live in one CSS file and one W3C tokens file. The design system page shows live contrast ratios.',
      },
    ],
    tech: ['React 19', 'esbuild', 'State Machine', 'CSS Variables', 'W3C Design Tokens', 'Figma', 'Inter', 'Node Test'],
  },

  results: {
    stats: [
      { value: '8', label: 'Workspaces' },
      { value: '6', label: 'Guides' },
      { value: '19', label: 'Colour Tokens' },
      { value: '7.1:1', label: 'Teal Contrast' },
    ],
  },

  gallery: [
    { image: `${IMG}/cue-review.jpg`, caption: 'Cue review, split wipe and protected details' },
    { image: `${IMG}/participant-display.jpg`, caption: 'Participant display, what the audience sees now' },
    { image: `${IMG}/cue-stack.jpg`, caption: 'Cue stack, the proposed changes waiting for review' },
    { image: `${IMG}/session-record.jpg`, caption: 'Session record, every action with time and revision' },
    { image: `${IMG}/scene-atlas.jpg`, caption: 'Scene atlas, 3D cutaway linked to each camera check' },
    { image: `${IMG}/review-timing.jpg`, caption: 'Review timing, time to approve and time to release' },
    { image: `${IMG}/route-replay.jpg`, caption: 'Route replay, what was on air at every event' },
  ],

  next: {
    title: 'Silicon Atlas',
    url: '/work/case-studies/silicon-atlas/',
    image: '/images/case-studies/silicon-atlas/run-comparison.jpg',
  },
};

export default function RelayPage() {
  return <CaseStudyLayout config={config} />;
}
