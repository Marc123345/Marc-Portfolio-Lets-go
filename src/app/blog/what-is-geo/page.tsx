import type { Metadata } from 'next';
import BlogGEO from '@/pages-ported/blog/what-is-geo';

const title = 'What Is GEO? Generative Engine Optimization Explained';
const description =
  'Generative Engine Optimization for AI-driven search results. Getting content surfaced in Google AI Overviews and other generative answers.';
const url = 'https://marcfriedmanportfolio.com/blog/what-is-geo/';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: 'article' },
  twitter: { card: 'summary_large_image', title, description },
};

export default function Page() {
  return <BlogGEO />;
}
