import type { Metadata } from 'next';
import BlogPavingGuide from '@/pages-ported/blog/paving-contractor-website-design-guide';

const title = 'Website Design for Paving Contractors: Converting Visitors to Quotes';
const description =
  'How a paving contractor site should be laid out. Hero choices, trust signals, work galleries, and the quote-request flow that actually converts.';
const url = 'https://marcfriedmanportfolio.com/blog/paving-contractor-website-design-guide/';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: 'article' },
  twitter: { card: 'summary_large_image', title, description },
};

export default function Page() {
  return <BlogPavingGuide />;
}
