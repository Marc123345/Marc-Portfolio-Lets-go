import type { Metadata } from 'next';
import BlogEmptyIsntMinimal from '@/pages-ported/blog/empty-isnt-minimal';

const title = "Empty Isn't Minimal";
const description =
  "Minimalism is the most faked skill in web design. Why empty pages aren't minimal, why hierarchy is the real product, and the only test that actually counts.";
const url = 'https://www.marcfriedmanportfolio.com/blog/empty-isnt-minimal/';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: 'article' },
  twitter: { card: 'summary_large_image', title, description },
};

export default function Page() {
  return <BlogEmptyIsntMinimal />;
}
