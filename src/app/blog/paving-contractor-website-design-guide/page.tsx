import type { Metadata } from 'next';
import BlogPavingGuide from '@/pages-ported/blog/paving-contractor-website-design-guide';

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.marcfriedmanportfolio.com/blog/paving-contractor-website-design-guide/' },
};

export default function Page() {
  return <BlogPavingGuide />;
}
