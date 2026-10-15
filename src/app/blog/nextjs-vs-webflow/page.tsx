import type { Metadata } from 'next';
import BlogNextjsVsWebflow from '@/pages-ported/blog/nextjs-vs-webflow';

const title = 'Next.js vs Webflow: When a No-Code Site Stops Being Enough';
const description =
  'What Webflow does well, six signs you\'ve outgrown it, what moving to Next.js costs, and the middle path that keeps both.';
const url = 'https://www.marcfriedmanportfolio.com/blog/nextjs-vs-webflow/';

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: 'article' },
  twitter: { card: 'summary_large_image', title, description },
};

export default function Page() {
  return <BlogNextjsVsWebflow />;
}
