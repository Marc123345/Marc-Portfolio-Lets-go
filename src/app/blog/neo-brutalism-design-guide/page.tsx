import type { Metadata } from 'next';
import BlogNeoBrutalismGuide from '@/pages-ported/blog/neo-brutalism-design-guide';

const title = 'Neo Brutalism in Modern Design: A Complete Guide for Bold, High-Contrast Interfaces';
const seoTitle = 'Neo Brutalism Web Design: Traits, Colors, Fonts & Examples';
const description =
  'A practical guide to neo brutalism in web and UI design: thick borders, hard shadows, loud color palettes, typography, CSS tips, accessibility, and real examples.';
const url = 'https://www.marcfriedmanportfolio.com/blog/neo-brutalism-design-guide/';

export const metadata: Metadata = {
  title: { absolute: seoTitle },
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: 'article' },
  twitter: { card: 'summary_large_image', title, description },
};

export default function Page() {
  return <BlogNeoBrutalismGuide />;
}
