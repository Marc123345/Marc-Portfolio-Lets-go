import type { Metadata } from 'next';
import BlogMicrointeractionsMotion3D from '@/pages-ported/blog/microinteractions-motion-3d-2026';

const title = 'Microinteractions, Motion and 3D: Making Websites Feel Physical in 2026';
const description =
  'How microinteractions, motion design and immersive 3D give websites a tangible feel in 2026, and how to use them without slowing pages down or ignoring reduced-motion users.';
const url = 'https://www.marcfriedmanportfolio.com/blog/microinteractions-motion-3d-2026/';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: 'article' },
  twitter: { card: 'summary_large_image', title, description },
};

export default function Page() {
  return <BlogMicrointeractionsMotion3D />;
}
