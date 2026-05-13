import type { Metadata } from 'next';
import BlogMinimalUX from '@/pages-ported/blog/minimal-fast-sustainable-ux';

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.marcfriedmanportfolio.com/blog/minimal-fast-sustainable-ux/' },
};

export default function Page() {
  return <BlogMinimalUX />;
}
