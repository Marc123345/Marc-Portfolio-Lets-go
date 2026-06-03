import type { Metadata } from 'next';
import BlogCssEatingJsLunch from '@/pages-ported/blog/css-eating-javascript-lunch';

const title = "CSS Is Eating JavaScript's Lunch";
const description =
  "Scroll-driven animations, @starting-style, and :has() have quietly made huge chunks of UI JavaScript obsolete. A field guide to what's shippable in CSS today and what it replaces.";
const url = 'https://www.marcfriedmanportfolio.com/blog/css-eating-javascript-lunch/';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: 'article' },
  twitter: { card: 'summary_large_image', title, description },
};

export default function Page() {
  return <BlogCssEatingJsLunch />;
}
