import type { Metadata } from 'next';
import BlogBrutalism from '@/pages-ported/blog/brutalism-anti-design-web-trends';

const title = 'Brutalist Web Design: Digital Brutalism & Anti-Design Trends';
const description =
  'What digital brutalism is and why designers are dropping polished UI for stark grids, exposed structure, raw type, and deliberate imperfection in web design.';
const url = 'https://www.marcfriedmanportfolio.com/blog/brutalism-anti-design-web-trends/';

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: 'article' },
  twitter: { card: 'summary_large_image', title, description },
};

export default function Page() {
  return <BlogBrutalism />;
}
