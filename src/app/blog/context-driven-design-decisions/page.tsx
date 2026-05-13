import type { Metadata } from 'next';
import BlogContextDrivenDesign from '@/pages-ported/blog/context-driven-design-decisions';

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.marcfriedmanportfolio.com/blog/context-driven-design-decisions/' },
};

export default function Page() {
  return <BlogContextDrivenDesign />;
}
