import type { Metadata } from 'next';
import BlogAINativeUX from '@/pages-ported/blog/ai-native-ux-personalization';

const title = 'AI-Native UX and Personalization: Designing Experiences That Adapt';
const description =
  'Beyond bolting AI features onto traditional UX: how to design interfaces that adapt, anticipate needs, and personalize in real time.';
const url = 'https://marcfriedmanportfolio.com/blog/ai-native-ux-personalization/';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: 'article' },
  twitter: { card: 'summary_large_image', title, description },
};

export default function Page() {
  return <BlogAINativeUX />;
}
