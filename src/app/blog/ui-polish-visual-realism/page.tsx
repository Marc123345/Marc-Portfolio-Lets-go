import type { Metadata } from 'next';
import BlogUIPolish from '@/pages-ported/blog/ui-polish-visual-realism';

const title = 'UI Polish: Visual Realism in Modern Interface Design';
const description =
  'The small details — light, shadow, material, depth — that separate an interface that feels finished from one that feels generic.';
const url = 'https://www.marcfriedmanportfolio.com/blog/ui-polish-visual-realism/';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: 'article' },
  twitter: { card: 'summary_large_image', title, description },
};

export default function Page() {
  return <BlogUIPolish />;
}
