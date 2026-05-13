import type { Metadata } from 'next';
import StartupMVPPage from '@/pages-ported/services/StartupMVPPage';

export const metadata: Metadata = {
  title: { absolute: 'MVP Development Services | Launch Your Startup in 30 Days | From $4,999' },
  description: 'Launch your MVP in 30 days. Built by a founder who pitched 5 VCs and got into AWS Accelerator. Validation sprints from $4,999. Full MVP from $14,999.',
  alternates: { canonical: 'https://marcfriedmanportfolio.com/services/startup-mvp/' },
  openGraph: {
    title: 'MVP Development Services | Launch Your Startup in 30 Days | From $4,999',
    description: 'Launch your MVP in 30 days. Built by a founder who pitched 5 VCs and got into AWS Accelerator. Validation sprints from $4,999. Full MVP from $14,999.',
    url: 'https://marcfriedmanportfolio.com/services/startup-mvp/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MVP Development Services | Launch Your Startup in 30 Days | From $4,999',
    description: 'Launch your MVP in 30 days. Built by a founder who pitched 5 VCs and got into AWS Accelerator. Validation sprints from $4,999. Full MVP from $14,999.',
  },
};

export default function Page() {
  return <StartupMVPPage />;
}
