import type { Metadata } from 'next';
import BlogEcommerceUX from '@/pages-ported/blog/ecommerce-ux-flaws-killing-conversions';

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.marcfriedmanportfolio.com/blog/ecommerce-ux-flaws-killing-conversions/' },
};

export default function Page() {
  return <BlogEcommerceUX />;
}
