import type { Metadata } from 'next';
import BlogDataDrivenDesign from '@/pages-ported/blog/building-data-driven-design-systems';

const title = 'Building Data-Driven Design Systems for Scale';
const description =
  'Track component usage, performance, and user feedback to build design systems that evolve with the product instead of rotting in a Figma library.';
const url = 'https://marcfriedmanportfolio.com/blog/building-data-driven-design-systems/';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: 'article' },
  twitter: { card: 'summary_large_image', title, description },
};

export default function Page() {
  return <BlogDataDrivenDesign />;
}
