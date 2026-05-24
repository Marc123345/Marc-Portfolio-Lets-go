import type { Metadata } from 'next';
import BlogAICodesigner from '@/pages-ported/blog/ai-as-codesigner';

const title = 'AI as Co-Designer: Moving Beyond Tools to True Partnership';
const description =
  'How AI is evolving from a design tool into a creative partner. Frameworks for human-AI collaboration, keeping creative control, and shipping with both.';
const url = 'https://marcfriedmanportfolio.com/blog/ai-as-codesigner/';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: 'article' },
  twitter: { card: 'summary_large_image', title, description },
};

export default function Page() {
  return <BlogAICodesigner />;
}
