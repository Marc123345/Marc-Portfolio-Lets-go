import type { Metadata } from 'next';
import BlogAsphalt from '@/pages-ported/blog/digital-marketing-asphalt-contractors';

const title = 'Digital Marketing for Asphalt Contractors: A Practical Guide';
const description =
  'Digital marketing strategies built for paving and asphalt contractors. Attract local customers, increase revenue, and grow the book online.';
const url = 'https://www.marcfriedmanportfolio.com/blog/digital-marketing-asphalt-contractors/';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: 'article' },
  twitter: { card: 'summary_large_image', title, description },
};

export default function Page() {
  return <BlogAsphalt />;
}
