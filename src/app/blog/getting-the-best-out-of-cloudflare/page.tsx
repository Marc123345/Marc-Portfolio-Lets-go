import type { Metadata } from 'next';
import BlogCloudflare from '@/pages-ported/blog/getting-the-best-out-of-cloudflare';

const title = 'Getting the Best Out of Cloudflare: A Practical Guide';
const description =
  'Caching, security, Workers, and the configurations most sites get wrong. How to use Cloudflare beyond just pointing the nameservers and forgetting it.';
const url = 'https://marcfriedmanportfolio.com/blog/getting-the-best-out-of-cloudflare/';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: 'article' },
  twitter: { card: 'summary_large_image', title, description },
};

export default function Page() {
  return <BlogCloudflare />;
}
