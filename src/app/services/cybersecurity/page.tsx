import type { Metadata } from 'next';
import CybersecurityPage from '@/pages-ported/services/CybersecurityPage';

export const metadata: Metadata = {
  title: { absolute: 'Cybersecurity Assessment Services | IT Security Assessments & Penetration Testing | Marc Friedman' },
  description: 'Cybersecurity assessment services, IT security assessments, cyber security audit and compliance, and cyber security penetration testing services. OWASP, GDPR, SOC 2 ready.',
  alternates: { canonical: 'https://www.marcfriedmanportfolio.com/services/cybersecurity/' },
  openGraph: {
    title: 'Cybersecurity Assessment Services | IT Security Assessments & Penetration Testing | Marc Friedman',
    description: 'Cybersecurity assessment services, IT security assessments, cyber security audit and compliance, and cyber security penetration testing services. OWASP, GDPR, SOC 2 ready.',
    url: 'https://www.marcfriedmanportfolio.com/services/cybersecurity/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cybersecurity Assessment Services | IT Security Assessments & Penetration Testing | Marc Friedman',
    description: 'Cybersecurity assessment services, IT security assessments, cyber security audit and compliance, and cyber security penetration testing services. OWASP, GDPR, SOC 2 ready.',
  },
};

export default function Page() {
  return <CybersecurityPage />;
}
