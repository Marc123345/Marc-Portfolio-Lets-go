import type { Metadata } from 'next';
import ProjectTimelinePage from '@/pages-ported/tools/ProjectTimelinePage';

const url = 'https://www.marcfriedmanportfolio.com/tools/project-timeline/';
const description =
  'Free website project timeline estimator. Map your build phase by phase — discovery, design, development, and launch — with realistic milestones and dates for your scope.';

export const metadata: Metadata = {
  title: { absolute: 'Website Project Timeline Estimator | Plan Your Build | Marc Friedman' },
  description,
  alternates: { canonical: url },
  openGraph: { title: 'Website Project Timeline Estimator | Marc Friedman', description, url, type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Website Project Timeline Estimator | Marc Friedman', description },
};

export default function Page() {
  return <ProjectTimelinePage />;
}
