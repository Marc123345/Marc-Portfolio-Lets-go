import type { Metadata } from 'next';
import SiliconAtlasPage from '@/pages-ported/work/case-studies/SiliconAtlasPage';

export const metadata: Metadata = {
  title: { absolute: 'Silicon Atlas, Engineering Dashboard UI Kit | Marc Friedman' },
  description:
    'Silicon Atlas is a dark, data-dense dashboard kit for lab, hardware and telemetry tools: five React workspaces, a Figma file and a token-based design system.',
  alternates: {
    canonical: 'https://www.marcfriedmanportfolio.com/work/case-studies/silicon-atlas/',
  },
  openGraph: {
    title: 'Silicon Atlas, Engineering Dashboard UI Kit',
    description:
      'Compare lanes, capture evidence, plan a retest and record a decision. React 19 app, Figma file and design system on one set of tokens.',
    url: 'https://www.marcfriedmanportfolio.com/work/case-studies/silicon-atlas/',
    type: 'website',
    images: ['/images/case-studies/silicon-atlas/run-comparison.jpg'],
  },
};

export default function Page() {
  return <SiliconAtlasPage />;
}
