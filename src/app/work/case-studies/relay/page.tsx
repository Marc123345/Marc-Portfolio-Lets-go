import type { Metadata } from 'next';
import RelayPage from '@/pages-ported/work/case-studies/RelayPage';

export const metadata: Metadata = {
  title: { absolute: 'Relay, AI Output Review Console UI Kit | Marc Friedman' },
  description:
    'Relay is a dark control-room UI kit for reviewing AI-generated media before it goes live: eight React workspaces, a Figma file and a token-based design system.',
  alternates: {
    canonical: 'https://www.marcfriedmanportfolio.com/work/case-studies/relay/',
  },
  openGraph: {
    title: 'Relay, AI Output Review Console UI Kit',
    description:
      'An AI model proposes a change, an operator checks it against the original, and only a person can release it. React 19 app, Figma file and design system.',
    url: 'https://www.marcfriedmanportfolio.com/work/case-studies/relay/',
    type: 'website',
    images: ['/images/case-studies/relay/cover.jpg'],
  },
};

export default function Page() {
  return <RelayPage />;
}
