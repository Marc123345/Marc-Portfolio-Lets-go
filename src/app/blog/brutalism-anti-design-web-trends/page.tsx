import type { Metadata } from 'next';
import BlogBrutalism from '@/pages-ported/blog/brutalism-anti-design-web-trends';

const title = 'Digital Brutalism in Web Design: The Raw, Anti-Design Revolution';
const description =
  'Digital brutalism is the raw, anti-design movement reshaping modern web design. Why designers are rejecting polished interfaces in favor of stark grids, exposed structure, and unapologetic imperfection.';
const url = 'https://www.marcfriedmanportfolio.com/blog/brutalism-anti-design-web-trends/';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: 'article' },
  twitter: { card: 'summary_large_image', title, description },
};

export default function Page() {
  return <BlogBrutalism />;
}
