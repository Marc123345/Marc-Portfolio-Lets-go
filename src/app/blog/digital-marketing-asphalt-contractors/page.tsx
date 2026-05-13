import type { Metadata } from 'next';
import BlogAsphalt from '@/pages-ported/blog/digital-marketing-asphalt-contractors';

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.marcfriedmanportfolio.com/blog/digital-marketing-asphalt-contractors/' },
};

export default function Page() {
  return <BlogAsphalt />;
}
