import type { Metadata } from 'next';
import BlogAEO from '@/pages-ported/blog/what-is-aeo';

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.marcfriedmanportfolio.com/blog/what-is-aeo/' },
};

export default function Page() {
  return <BlogAEO />;
}
