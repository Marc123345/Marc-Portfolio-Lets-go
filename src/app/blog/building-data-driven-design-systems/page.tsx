import type { Metadata } from 'next';
import BlogDataDrivenDesign from '@/pages-ported/blog/building-data-driven-design-systems';

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.marcfriedmanportfolio.com/blog/building-data-driven-design-systems/' },
};

export default function Page() {
  return <BlogDataDrivenDesign />;
}
