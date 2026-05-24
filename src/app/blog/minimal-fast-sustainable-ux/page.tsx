import type { Metadata } from 'next';
import BlogMinimalUX from '@/pages-ported/blog/minimal-fast-sustainable-ux';

const title = 'Minimal, Fast, and Sustainable UX: Designing for Performance and the Planet';
const description =
  'Leaner layouts, fewer scripts, smaller bundles. How a UX that respects the device respects the user — and uses less energy doing it.';
const url = 'https://www.marcfriedmanportfolio.com/blog/minimal-fast-sustainable-ux/';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: 'article' },
  twitter: { card: 'summary_large_image', title, description },
};

export default function Page() {
  return <BlogMinimalUX />;
}
