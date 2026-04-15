import type { Metadata } from 'next';
import CybersecurityPage from '@/pages-ported/services/CybersecurityPage';

export const metadata: Metadata = {
  title: { absolute: 'Website Security & Cybersecurity Services | OWASP Audits | Marc Friedman' },
  description: 'Cybersecurity assessment and secure development. OWASP Top 10 analysis, penetration testing, GDPR compliance, 24/7 monitoring. Protect your web assets.',
  alternates: { canonical: 'https://marcfriedmanportfolio.com/services/cybersecurity/' },
  openGraph: {
    title: 'Website Security & Cybersecurity Services | OWASP Audits | Marc Friedman',
    description: 'Cybersecurity assessment and secure development. OWASP Top 10 analysis, penetration testing, GDPR compliance, 24/7 monitoring. Protect your web assets.',
    url: 'https://marcfriedmanportfolio.com/services/cybersecurity/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website Security & Cybersecurity Services | OWASP Audits | Marc Friedman',
    description: 'Cybersecurity assessment and secure development. OWASP Top 10 analysis, penetration testing, GDPR compliance, 24/7 monitoring. Protect your web assets.',
  },
};

export default function Page() {
  return <CybersecurityPage />;
}
