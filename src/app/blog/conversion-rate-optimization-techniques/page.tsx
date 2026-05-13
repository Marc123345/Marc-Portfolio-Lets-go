import type { Metadata } from 'next';
import BlogCRO from '@/pages-ported/blog/conversion-rate-optimization-techniques';

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.marcfriedmanportfolio.com/blog/conversion-rate-optimization-techniques/' },
};

export default function Page() {
  return <BlogCRO />;
}
