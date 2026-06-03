import type { Metadata } from 'next';
import YouTubeAssetsPage from '@/pages-ported/YouTubeAssetsPage';

export const metadata: Metadata = {
  title: { absolute: 'YouTube Assets — Internal' },
  robots: { index: false, follow: false },
};

export default function Page() {
  return <YouTubeAssetsPage />;
}
