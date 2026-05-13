import type { Metadata } from 'next';
import BlogMobileFirst from '@/pages-ported/blog/mobile-first-design-principles';

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.marcfriedmanportfolio.com/blog/mobile-first-design-principles/' },
};

export default function Page() {
  return <BlogMobileFirst />;
}
