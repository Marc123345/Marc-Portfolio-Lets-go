import type { Metadata } from 'next';
import MaintenanceHostingPage from '@/pages-ported/services/MaintenanceHostingPage';

const title = 'Website Maintenance & Hosting | Marc Friedman';
const description =
  'Monthly maintenance and hosting: performance care, priority fixes, same-day support, and Cloudflare hosting with a 99.99% uptime SLA.';
const url = 'https://www.marcfriedmanportfolio.com/services/maintenance-hosting/';

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: url },
};

export default function Page() {
  return <MaintenanceHostingPage />;
}
