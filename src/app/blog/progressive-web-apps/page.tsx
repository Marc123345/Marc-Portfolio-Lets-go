import type { Metadata } from 'next';
import BlogPWA from '@/pages-ported/blog/progressive-web-apps';

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.marcfriedmanportfolio.com/blog/progressive-web-apps/' },
};

export default function Page() {
  return <BlogPWA />;
}
