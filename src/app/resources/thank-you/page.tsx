import type { Metadata } from 'next';
import DownloadThankYou from './DownloadThankYou';

export const metadata: Metadata = {
  title: 'Your download is ready',
  description: 'Your free resource download from Marc Friedman.',
  robots: { index: false, follow: false },
};

export default function ResourceThankYouPage() {
  return <DownloadThankYou />;
}
