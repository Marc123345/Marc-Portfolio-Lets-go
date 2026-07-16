import type { Metadata } from 'next';
import BlogConstructionSEO from '@/pages-ported/blog/seo-for-construction-companies';

const title = 'SEO for Construction Companies: Win More Projects from Google in 2026';
const description =
  'How construction firms turn a website into a steady source of project leads: local SEO, keyword research, on-page and technical SEO, content, link building, AI answer engines, and how to track results.';
const url = 'https://www.marcfriedmanportfolio.com/blog/seo-for-construction-companies/';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: 'article' },
  twitter: { card: 'summary_large_image', title, description },
};

export default function Page() {
  return <BlogConstructionSEO />;
}
