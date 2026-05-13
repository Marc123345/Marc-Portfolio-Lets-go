import type { Metadata } from 'next';
import BlogBiohackingMiami from '@/pages-ported/blog/biohacking-clinic-web-design-miami';

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.marcfriedmanportfolio.com/blog/biohacking-clinic-web-design-miami/' },
};

export default function Page() {
  return <BlogBiohackingMiami />;
}
