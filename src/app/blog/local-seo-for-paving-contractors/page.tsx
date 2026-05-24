import type { Metadata } from 'next';
import BlogLocalSEO from '@/pages-ported/blog/local-seo-for-paving-contractors';

const title = 'Local SEO for Paving Contractors: A No-Fluff Playbook';
const description =
  'Local SEO patterns built for paving contractors. Google Business Profile, service-area pages, citations, and the order to do them in.';
const url = 'https://marcfriedmanportfolio.com/blog/local-seo-for-paving-contractors/';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: 'article' },
  twitter: { card: 'summary_large_image', title, description },
};

export default function Page() {
  return <BlogLocalSEO />;
}
