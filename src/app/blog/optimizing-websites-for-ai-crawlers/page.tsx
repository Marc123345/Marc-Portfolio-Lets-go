import type { Metadata } from 'next';
import BlogAICrawlers from '@/pages-ported/blog/optimizing-websites-for-ai-crawlers';

const title = 'Optimizing Your Website for AI Crawlers';
const description =
  'AI crawlers from OpenAI, Anthropic, Perplexity, and Google read your site differently than Googlebot. How to be readable to both without bloating the page.';
const url = 'https://marcfriedmanportfolio.com/blog/optimizing-websites-for-ai-crawlers/';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: 'article' },
  twitter: { card: 'summary_large_image', title, description },
};

export default function Page() {
  return <BlogAICrawlers />;
}
