import type { Metadata } from 'next';
import BlogGoogleAlgo2026 from '@/pages-ported/blog/google-algorithm-update-2026';

const title = 'Google Algorithm Update 2026: What Changed and What to Fix';
const description =
  'A plain breakdown of the 2026 Google algorithm updates: AI content signals, E-E-A-T, the ranking shifts most sites missed, and what to audit on your own pages.';
const url = 'https://www.marcfriedmanportfolio.com/blog/google-algorithm-update-2026/';

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: 'article' },
  twitter: { card: 'summary_large_image', title, description },
};

export default function Page() {
  return <BlogGoogleAlgo2026 />;
}
