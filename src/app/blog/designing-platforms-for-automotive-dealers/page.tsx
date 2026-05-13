import type { Metadata } from 'next';
import BlogAutomotiveDealers from '@/pages-ported/blog/designing-platforms-for-automotive-dealers';

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.marcfriedmanportfolio.com/blog/designing-platforms-for-automotive-dealers/' },
};

export default function Page() {
  return <BlogAutomotiveDealers />;
}
