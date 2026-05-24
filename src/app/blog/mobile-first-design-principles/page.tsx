import type { Metadata } from 'next';
import BlogMobileFirst from '@/pages-ported/blog/mobile-first-design-principles';

const title = 'Mobile-First Design Principles That Hold Up in 2026';
const description =
  'The mobile-first patterns that still matter, and the ones that quietly got obsolete. How to design from the small screen out without losing the big-screen layout.';
const url = 'https://www.marcfriedmanportfolio.com/blog/mobile-first-design-principles/';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: 'article' },
  twitter: { card: 'summary_large_image', title, description },
};

export default function Page() {
  return <BlogMobileFirst />;
}
