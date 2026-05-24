import type { Metadata } from 'next';
import VideoleapPage from '@/pages-ported/work/case-studies/VideoleapPage';

const title = 'Videoleap Redesign Case Study | AI Video Editor UX | Marc Friedman';
const description =
  'AI-powered mobile video editor redesigned through UX research. Improved onboarding, dual-mode editor, and gamification for creator engagement.';
const url = 'https://marcfriedmanportfolio.com/work/case-studies/videoleap/';

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: 'website' },
  twitter: { card: 'summary_large_image', title, description },
};

export default function Page() {
  return <VideoleapPage />;
}
