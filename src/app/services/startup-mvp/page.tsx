import type { Metadata } from 'next';
import StartupMVPPage from '@/pages-ported/services/StartupMVPPage';
import { MVP_FAQS, faqSchema } from '@/content/serviceFaqs';

const title = 'MVP Development Services for Startups | Launch in 30 Days';
const description =
  'MVP development services for startups: a production React MVP in about 30 days, fixed pricing from $4,999, built by a founder who went through the AWS accelerator.';
const url = 'https://www.marcfriedmanportfolio.com/services/startup-mvp/';

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: 'website' },
  twitter: { card: 'summary_large_image', title, description },
};

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'MVP Development Services',
      serviceType: 'Startup MVP development',
      url,
      description,
      areaServed: [
        { '@type': 'Country', name: 'United States' },
        { '@type': 'Place', name: 'Europe' },
      ],
      provider: {
        '@type': 'Organization',
        name: 'Marc Friedman Web Design',
        url: 'https://www.marcfriedmanportfolio.com',
        founder: { '@type': 'Person', name: 'Marc Friedman' },
      },
      offers: [
        { '@type': 'Offer', name: 'Validation Sprint', price: '4999', priceCurrency: 'USD' },
        { '@type': 'Offer', name: 'Full MVP', price: '14999', priceCurrency: 'USD' },
        { '@type': 'Offer', name: 'MVP + Fundraise', price: '24999', priceCurrency: 'USD' },
      ],
    },
    faqSchema(MVP_FAQS),
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <StartupMVPPage />
    </>
  );
}
