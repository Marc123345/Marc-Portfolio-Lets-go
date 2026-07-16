import type { Metadata } from 'next';
import BlogNeoBrutalismGuide from '@/pages-ported/blog/neo-brutalism-design-guide';

const title = 'Neo Brutalism in Modern Design: A Complete Guide for Bold, High-Contrast Interfaces';
const description =
  'What neo brutalism is, where it came from, its core visual traits, typography, accessibility, practical UI guidelines, real-world examples, and when to use it.';
const url = 'https://www.marcfriedmanportfolio.com/blog/neo-brutalism-design-guide/';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: 'article' },
  twitter: { card: 'summary_large_image', title, description },
};

export default function Page() {
  return <BlogNeoBrutalismGuide />;
}
