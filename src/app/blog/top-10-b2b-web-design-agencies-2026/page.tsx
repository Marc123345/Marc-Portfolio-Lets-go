import type { Metadata } from 'next';
import BlogTop10B2BWebDesignAgencies2026 from '@/pages-ported/blog/top-10-b2b-web-design-agencies-2026';

const title = 'Top 10 B2B Web Design Agencies in 2026';
const description =
  'An openly biased but honest list of the top 10 B2B web design agencies in 2026: who each is best for and not for, plus the Double Diamond process and business theory behind how I build B2B websites.';
const url = 'https://www.marcfriedmanportfolio.com/blog/top-10-b2b-web-design-agencies-2026/';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: 'article' },
  twitter: { card: 'summary_large_image', title, description },
};

export default function Page() {
  return <BlogTop10B2BWebDesignAgencies2026 />;
}
