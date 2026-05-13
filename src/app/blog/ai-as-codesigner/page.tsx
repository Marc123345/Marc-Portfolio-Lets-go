import type { Metadata } from 'next';
import BlogAICodesigner from '@/pages-ported/blog/ai-as-codesigner';

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.marcfriedmanportfolio.com/blog/ai-as-codesigner/' },
};

export default function Page() {
  return <BlogAICodesigner />;
}
