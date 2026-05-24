import type { Metadata } from 'next';
import BlogAutomotiveDealers from '@/pages-ported/blog/designing-platforms-for-automotive-dealers';

const title = 'From Concept to Profit: Designing Platforms for Automotive Dealers';
const description =
  'Design patterns for dealer-facing platforms. Inventory, lead flow, and reporting screens dealers actually use day to day.';
const url = 'https://www.marcfriedmanportfolio.com/blog/designing-platforms-for-automotive-dealers/';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: 'article' },
  twitter: { card: 'summary_large_image', title, description },
};

export default function Page() {
  return <BlogAutomotiveDealers />;
}
