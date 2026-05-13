import type { Metadata } from 'next';
import BlogAIImperfect from '@/pages-ported/blog/ai-imperfect-aesthetics';

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.marcfriedmanportfolio.com/blog/ai-imperfect-aesthetics/' },
};

export default function Page() {
  return <BlogAIImperfect />;
}
