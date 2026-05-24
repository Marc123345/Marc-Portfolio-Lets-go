import type { Metadata } from 'next';
import BlogAIEcommerce from '@/pages-ported/blog/ai-personalization-ecommerce';

const title = 'AI-Driven Personalization in Ecommerce: A Practical Guide';
const description =
  'AI personalization patterns that have moved conversion rates 20–30%. Implementation strategies for small teams, privacy-first design, omnichannel personalization.';
const url = 'https://marcfriedmanportfolio.com/blog/ai-personalization-ecommerce/';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: 'article' },
  twitter: { card: 'summary_large_image', title, description },
};

export default function Page() {
  return <BlogAIEcommerce />;
}
