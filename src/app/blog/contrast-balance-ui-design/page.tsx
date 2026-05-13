import type { Metadata } from 'next';
import BlogContrastBalance from '@/pages-ported/blog/contrast-balance-ui-design';

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.marcfriedmanportfolio.com/blog/contrast-balance-ui-design/' },
};

export default function Page() {
  return <BlogContrastBalance />;
}
