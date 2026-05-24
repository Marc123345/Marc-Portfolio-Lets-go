import type { Metadata } from 'next';
import BlogBrutalism from '@/pages-ported/blog/brutalism-anti-design-web-trends';

const title = 'Brutalism & Anti-Design: The Raw, Unpolished Web Revolution';
const description =
  'Raw grids, minimal imagery, deliberately imperfect layouts. How anti-design rejects algorithmic perfection in favor of work that reads authentic.';
const url = 'https://marcfriedmanportfolio.com/blog/brutalism-anti-design-web-trends/';

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
