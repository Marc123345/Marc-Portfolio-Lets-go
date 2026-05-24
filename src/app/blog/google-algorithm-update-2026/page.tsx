import type { Metadata } from 'next';
import BlogGoogleAlgo2026 from '@/pages-ported/blog/google-algorithm-update-2026';

const title = 'Google\'s 2026 Algorithm Update: What Actually Changed';
const description =
  'AI-generated content detection, E-E-A-T signals, and the ranking shifts most sites missed. What to audit on your own pages, and what to leave alone.';
const url = 'https://www.marcfriedmanportfolio.com/blog/google-algorithm-update-2026/';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: 'article' },
  twitter: { card: 'summary_large_image', title, description },
};

export default function Page() {
  return <BlogGoogleAlgo2026 />;
}
