import type { Metadata } from 'next';
import MentorshipPage from '@/pages-ported/services/MentorshipPage';

export const metadata: Metadata = {
  title: { absolute: 'UX/UI Design Mentorship & Tutoring | Figma, Portfolio & Career Growth' },
  description: '1-on-1 UX/UI mentorship from $499/month. Master Figma, build your portfolio, accelerate your design career. Flexible programs from 1-3 months.',
  alternates: { canonical: 'https://marcfriedmanportfolio.com/services/mentorship/' },
  openGraph: {
    title: 'UX/UI Design Mentorship & Tutoring | Figma, Portfolio & Career Growth',
    description: '1-on-1 UX/UI mentorship from $499/month. Master Figma, build your portfolio, accelerate your design career. Flexible programs from 1-3 months.',
    url: 'https://marcfriedmanportfolio.com/services/mentorship/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UX/UI Design Mentorship & Tutoring | Figma, Portfolio & Career Growth',
    description: '1-on-1 UX/UI mentorship from $499/month. Master Figma, build your portfolio, accelerate your design career. Flexible programs from 1-3 months.',
  },
};

export default function Page() {
  return <MentorshipPage />;
}
