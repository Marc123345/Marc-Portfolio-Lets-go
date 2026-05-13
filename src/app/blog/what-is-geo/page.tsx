import type { Metadata } from 'next';
import BlogGEO from '@/pages-ported/blog/what-is-geo';

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.marcfriedmanportfolio.com/blog/what-is-geo/' },
};

export default function Page() {
  return <BlogGEO />;
}
