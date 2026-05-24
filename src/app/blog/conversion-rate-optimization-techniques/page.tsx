import type { Metadata } from 'next';
import BlogCRO from '@/pages-ported/blog/conversion-rate-optimization-techniques';

const title = '7 Conversion Rate Optimization Techniques That Actually Move the Number';
const description =
  'Seven tested CRO patterns and the situations they apply to. Specific changes, the metrics they move, and how to know whether they work for your site.';
const url = 'https://www.marcfriedmanportfolio.com/blog/conversion-rate-optimization-techniques/';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: 'article' },
  twitter: { card: 'summary_large_image', title, description },
};

export default function Page() {
  return <BlogCRO />;
}
