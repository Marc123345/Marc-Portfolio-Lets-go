import type { Metadata } from 'next';
import BlogGSCAI from '@/pages-ported/blog/google-search-console-ai-reports';

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.marcfriedmanportfolio.com/blog/google-search-console-ai-reports/' },
};

export default function Page() {
  return <BlogGSCAI />;
}
