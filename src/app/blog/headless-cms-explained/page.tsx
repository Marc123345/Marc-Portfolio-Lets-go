import type { Metadata } from 'next';
import BlogHeadlessCmsExplained from '@/pages-ported/blog/headless-cms-explained';

const title = 'Headless CMS Explained: Can My Team Still Edit the Site?';
const description =
  'What a headless CMS is, what your team can and can\'t edit without a developer, how previews and publishing work, and when headless is overkill.';
const url = 'https://www.marcfriedmanportfolio.com/blog/headless-cms-explained/';

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: 'article' },
  twitter: { card: 'summary_large_image', title, description },
};

export default function Page() {
  return <BlogHeadlessCmsExplained />;
}
