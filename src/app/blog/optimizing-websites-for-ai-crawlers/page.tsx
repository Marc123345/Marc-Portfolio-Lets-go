import type { Metadata } from 'next';
import BlogAICrawlers from '@/pages-ported/blog/optimizing-websites-for-ai-crawlers';

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.marcfriedmanportfolio.com/blog/optimizing-websites-for-ai-crawlers/' },
};

export default function Page() {
  return <BlogAICrawlers />;
}
