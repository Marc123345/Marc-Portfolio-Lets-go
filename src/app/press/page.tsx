import type { Metadata } from 'next';
import PressPage from '@/pages-ported/PressPage';

export const metadata: Metadata = {
  title: { absolute: 'Press & Awards | Awwwards Nominee & DesignRush Featured | Marc Friedman' },
  description: 'Featured on Awwwards, DesignRush, and Clutch. Recognized for excellence in web design, UI/UX, and conversion-focused development.',
  alternates: { canonical: 'https://marcfriedmanportfolio.com/press/' },
  openGraph: {
    title: 'Press & Awards | Awwwards Nominee & DesignRush Featured | Marc Friedman',
    description: 'Featured on Awwwards, DesignRush, and Clutch. Recognized for excellence in web design, UI/UX, and conversion-focused development.',
    url: 'https://marcfriedmanportfolio.com/press/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Press & Awards | Awwwards Nominee & DesignRush Featured | Marc Friedman',
    description: 'Featured on Awwwards, DesignRush, and Clutch. Recognized for excellence in web design, UI/UX, and conversion-focused development.',
  },
};

export default function Page() {
  return <PressPage />;
}
