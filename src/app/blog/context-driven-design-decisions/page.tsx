import type { Metadata } from 'next';
import BlogContextDrivenDesign from '@/pages-ported/blog/context-driven-design-decisions';

const title = 'Why Context Matters: A Junior Designer\'s Guide to Better Decisions';
const description =
  'Contextual thinking is the most critical skill a UX/UI designer can develop. Patterns for reading the situation before reaching for the same solution twice.';
const url = 'https://marcfriedmanportfolio.com/blog/context-driven-design-decisions/';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: 'article' },
  twitter: { card: 'summary_large_image', title, description },
};

export default function Page() {
  return <BlogContextDrivenDesign />;
}
