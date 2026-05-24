import type { Metadata } from 'next';
import BlogFutureSaaS from '@/pages-ported/blog/future-of-saas-web-design';

const title = 'The Future of SaaS Web Design: Where Aesthetics and Function Meet';
const description =
  'How SaaS marketing sites are evolving. Patterns that hold up, patterns that age fast, and where aesthetics and usability finally stop fighting.';
const url = 'https://www.marcfriedmanportfolio.com/blog/future-of-saas-web-design/';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: 'article' },
  twitter: { card: 'summary_large_image', title, description },
};

export default function Page() {
  return <BlogFutureSaaS />;
}
