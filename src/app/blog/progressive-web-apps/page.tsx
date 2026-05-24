import type { Metadata } from 'next';
import BlogPWA from '@/pages-ported/blog/progressive-web-apps';

const title = 'Progressive Web Apps: When PWAs Beat Native (and When They Don\'t)';
const description =
  'PWAs sit between websites and native apps. When that trade-off works, when it breaks, and how to know which one your product needs.';
const url = 'https://www.marcfriedmanportfolio.com/blog/progressive-web-apps/';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: 'article' },
  twitter: { card: 'summary_large_image', title, description },
};

export default function Page() {
  return <BlogPWA />;
}
