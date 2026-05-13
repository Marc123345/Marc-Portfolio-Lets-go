import type { Metadata } from 'next';
import BlogAIEcommerce from '@/pages-ported/blog/ai-personalization-ecommerce';

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.marcfriedmanportfolio.com/blog/ai-personalization-ecommerce/' },
};

export default function Page() {
  return <BlogAIEcommerce />;
}
