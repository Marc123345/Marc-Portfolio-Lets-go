import type { Metadata } from 'next';
import BlogCloudflare from '@/pages-ported/blog/getting-the-best-out-of-cloudflare';

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.marcfriedmanportfolio.com/blog/getting-the-best-out-of-cloudflare/' },
};

export default function Page() {
  return <BlogCloudflare />;
}
