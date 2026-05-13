import type { Metadata } from 'next';
import BlogAINativeUX from '@/pages-ported/blog/ai-native-ux-personalization';

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.marcfriedmanportfolio.com/blog/ai-native-ux-personalization/' },
};

export default function Page() {
  return <BlogAINativeUX />;
}
