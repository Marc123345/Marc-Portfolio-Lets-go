import type { Metadata } from 'next';
import BlogAEO from '@/pages-ported/blog/what-is-aeo';

const title = 'What Is AEO? Answer Engine Optimization Explained';
const description =
  'Answer Engine Optimization for ChatGPT, Perplexity, Claude, and Google AI Overviews. How AEO differs from SEO, and what content structure actually gets cited.';
const url = 'https://www.marcfriedmanportfolio.com/blog/what-is-aeo/';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: 'article' },
  twitter: { card: 'summary_large_image', title, description },
};

export default function Page() {
  return <BlogAEO />;
}
