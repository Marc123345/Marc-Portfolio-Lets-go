import type { Metadata } from 'next';
import FleetManagementPage from '@/pages-ported/work/case-studies/FleetManagementPage';

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.marcfriedmanportfolio.com/work/case-studies/fleet-management/' },
};

export default function Page() {
  return <FleetManagementPage />;
}
