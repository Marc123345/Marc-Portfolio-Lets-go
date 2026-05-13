import type { Metadata } from 'next';
import BlogUIPolish from '@/pages-ported/blog/ui-polish-visual-realism';

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.marcfriedmanportfolio.com/blog/ui-polish-visual-realism/' },
};

export default function Page() {
  return <BlogUIPolish />;
}
