import type { Metadata } from 'next';
import BlogWebsiteNotADACompliant from '@/pages-ported/blog/website-not-ada-compliant';

const title = 'Website Not ADA Compliant: Risks, Requirements, and How to Fix It';
const description =
  'When the ADA applies to your website, the WCAG 2.1/2.2 AA standard courts and the DOJ use, the failures that trigger lawsuits and demand letters, and a practical roadmap to fix them.';
const url = 'https://www.marcfriedmanportfolio.com/blog/website-not-ada-compliant/';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: 'article' },
  twitter: { card: 'summary_large_image', title, description },
};

export default function Page() {
  return <BlogWebsiteNotADACompliant />;
}
