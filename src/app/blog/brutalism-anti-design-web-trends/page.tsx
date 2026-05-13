import type { Metadata } from 'next';
import BlogBrutalism from '@/pages-ported/blog/brutalism-anti-design-web-trends';

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.marcfriedmanportfolio.com/blog/brutalism-anti-design-web-trends/' },
};

export default function Page() {
  return <BlogBrutalism />;
}
