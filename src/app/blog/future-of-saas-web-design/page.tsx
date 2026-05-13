import type { Metadata } from 'next';
import BlogFutureSaaS from '@/pages-ported/blog/future-of-saas-web-design';

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.marcfriedmanportfolio.com/blog/future-of-saas-web-design/' },
};

export default function Page() {
  return <BlogFutureSaaS />;
}
