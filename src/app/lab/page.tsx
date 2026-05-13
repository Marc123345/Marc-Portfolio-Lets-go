import type { Metadata } from 'next';
import LabPage from '@/pages-ported/LabPage';

export const metadata: Metadata = {
  title: { absolute: 'CORE — Lab Experiment · Marc Friedman' },
  description:
    'CORE: a 3×3×3 living matrix of cubes. A CSS 3D experiment — no physics engine, no WebGL, just transforms and time.',
  alternates: { canonical: 'https://marcfriedmanportfolio.com/lab/' },
  openGraph: {
    title: 'CORE — Lab Experiment · Marc Friedman',
    description:
      'A 3×3×3 living cube matrix. Pure CSS 3D transforms, lerped rotation, a sweeping light wave.',
    url: 'https://marcfriedmanportfolio.com/lab/',
    type: 'website',
  },
};

export default function Page() {
  return <LabPage />;
}
