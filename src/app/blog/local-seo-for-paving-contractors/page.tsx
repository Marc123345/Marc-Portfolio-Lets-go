import type { Metadata } from 'next';
import BlogLocalSEO from '@/pages-ported/blog/local-seo-for-paving-contractors';

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.marcfriedmanportfolio.com/blog/local-seo-for-paving-contractors/' },
};

export default function Page() {
  return <BlogLocalSEO />;
}
