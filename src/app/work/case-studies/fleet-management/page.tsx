import type { Metadata } from 'next';
import FleetManagementPage from '@/pages-ported/work/case-studies/FleetManagementPage';

const title = 'Fleet Management Case Study | Real-Time Vehicle Tracking | Marc Friedman';
const description =
  'Enterprise fleet platform with real-time tracking and predictive maintenance for 500+ vehicles. Dashboard built for dispatchers monitoring 20+ concurrent feeds.';
const url = 'https://marcfriedmanportfolio.com/work/case-studies/fleet-management/';

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: 'website' },
  twitter: { card: 'summary_large_image', title, description },
};

export default function Page() {
  return <FleetManagementPage />;
}
