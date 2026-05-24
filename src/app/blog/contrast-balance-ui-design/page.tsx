import type { Metadata } from 'next';
import BlogContrastBalance from '@/pages-ported/blog/contrast-balance-ui-design';

const title = 'Contrast & Balance: The Foundation of Accessible UI Design';
const description =
  'Foreground vs. background clarity, WCAG-compliant contrast ratios, and how to manage both across light and dark themes without breaking the design.';
const url = 'https://www.marcfriedmanportfolio.com/blog/contrast-balance-ui-design/';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: 'article' },
  twitter: { card: 'summary_large_image', title, description },
};

export default function Page() {
  return <BlogContrastBalance />;
}
