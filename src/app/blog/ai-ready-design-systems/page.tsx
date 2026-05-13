import type { Metadata } from 'next';
import BlogAIReadyDesign from '@/pages-ported/blog/ai-ready-design-systems';

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.marcfriedmanportfolio.com/blog/ai-ready-design-systems/' },
};

export default function Page() {
  return <BlogAIReadyDesign />;
}
