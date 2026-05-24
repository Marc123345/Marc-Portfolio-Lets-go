import type { Metadata } from 'next';
import BlogAIReadyDesign from '@/pages-ported/blog/ai-ready-design-systems';

const title = 'AI-Ready Design Systems: Building for Human-AI Collaboration';
const description =
  'Structure design tokens and components so AI tools generate on-brand outputs reliably. The patterns and pitfalls when AI fights your system.';
const url = 'https://www.marcfriedmanportfolio.com/blog/ai-ready-design-systems/';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: 'article' },
  twitter: { card: 'summary_large_image', title, description },
};

export default function Page() {
  return <BlogAIReadyDesign />;
}
