import type { Metadata } from 'next';
import ROICalculatorPage from '@/pages-ported/tools/ROICalculatorPage';

const url = 'https://www.marcfriedmanportfolio.com/tools/roi-calculator/';
const description =
  "Free website ROI calculator. Enter your traffic and conversion rate to estimate the extra revenue a faster, higher-converting website could add to your business.";

export const metadata: Metadata = {
  title: { absolute: "Website ROI Calculator | Estimate Your Site's Revenue Impact | Marc Friedman" },
  description,
  alternates: { canonical: url },
  openGraph: { title: 'Website ROI Calculator | Marc Friedman', description, url, type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Website ROI Calculator | Marc Friedman', description },
};

export default function Page() {
  return <ROICalculatorPage />;
}
