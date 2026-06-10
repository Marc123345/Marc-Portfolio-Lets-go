import type { Metadata } from 'next';
import AIWebsiteCrawlerPage from '@/pages-ported/tools/AIWebsiteCrawlerPage';

const url = 'https://www.marcfriedmanportfolio.com/tools/ai-crawler-optimization/';
const description =
  'Free AI crawler check. See how ChatGPT, Perplexity and Google AI read your site, find what blocks AI visibility, and get fixes to earn citations in AI answers.';

export const metadata: Metadata = {
  title: { absolute: 'AI Crawler Optimization Tool | Get Cited by ChatGPT & AI Search | Marc Friedman' },
  description,
  alternates: { canonical: url },
  openGraph: { title: 'AI Crawler Optimization Tool | Marc Friedman', description, url, type: 'website' },
  twitter: { card: 'summary_large_image', title: 'AI Crawler Optimization Tool | Marc Friedman', description },
};

export default function Page() {
  return <AIWebsiteCrawlerPage />;
}
