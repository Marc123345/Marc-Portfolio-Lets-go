import type { Metadata } from 'next';
import BlogAIImperfect from '@/pages-ported/blog/ai-imperfect-aesthetics';

const title = 'AI + Human Imperfection: The New Aesthetic Revolution';
const description =
  'Designers are layering hand-made, tactile aesthetics on AI-generated content. Why intentional imperfection creates work that actually feels human.';
const url = 'https://marcfriedmanportfolio.com/blog/ai-imperfect-aesthetics/';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: 'article' },
  twitter: { card: 'summary_large_image', title, description },
};

export default function Page() {
  return <BlogAIImperfect />;
}
