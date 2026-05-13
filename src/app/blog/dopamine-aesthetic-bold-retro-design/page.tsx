import type { Metadata } from 'next';
import DopamineAestheticPage from '@/pages-ported/blog/dopamine-aesthetic-bold-retro-design';

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.marcfriedmanportfolio.com/blog/dopamine-aesthetic-bold-retro-design/' },
};

export default function Page() {
  return <DopamineAestheticPage />;
}
