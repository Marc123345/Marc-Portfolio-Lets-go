import type { Metadata } from 'next';
import B2BWebDesignPage from '@/pages-ported/services/B2BWebDesignPage';

const title = 'Choosing the Right B2B Web Design Agency for Your Business Needs';
const description =
  'Discover how to choose the ideal B2B web design agency that aligns with your business needs and goals. Read the article for expert tips and insights.';
const url = 'https://www.marcfriedmanportfolio.com/services/b2b-web-design/';

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
      name: 'B2B Web Design Agency',
      serviceType: 'B2B web design and development',
      url,
      description:
        'Custom React and Next.js web design for B2B companies in the US and Europe, built to generate qualified leads and drive pipeline. 50+ projects across three continents.',
      areaServed: [
        { '@type': 'Country', name: 'United States' },
        { '@type': 'Place', name: 'Europe' },
      ],
      audience: {
        '@type': 'BusinessAudience',
        audienceType: 'B2B companies, dental practices, manufacturers, and service businesses',
      },
      provider: {
        '@type': 'Organization',
        name: 'Marc Friedman Web Design',
        url: 'https://www.marcfriedmanportfolio.com',
        email: 'marcf@marcfriedmanwebdesign.com',
        founder: { '@type': 'Person', name: 'Marc Friedman' },
        sameAs: [
          'https://www.linkedin.com/in/portfolio2/',
          'https://clutch.co/profile/marc-friedman-design-agency',
          'https://www.awwwards.com/marc-friedman/',
          'https://www.designrush.com/agency/profile/marc-friedman-design-agency',
        ],
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What does a B2B web design project cost?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Engagements typically run $3k to $6k per month depending on scope, complexity, and ongoing optimization. We scope every project around your revenue targets rather than billing hours.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does a B2B website redesign take?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Most projects run six to 12 weeks from discovery to launch. Smaller, clearly scoped sites go faster; larger builds with custom functionality or multiple languages take longer.',
          },
        },
        {
          '@type': 'Question',
          name: 'What happens after our B2B website goes live?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Launch is the start, not the finish. We monitor performance, run tests, and keep tuning for conversions using analytics and user-behavior data.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you only work with large B2B companies?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. We work with everyone from growing service businesses to established manufacturers. What our best clients share is treating the website as a lead-generation tool rather than a brochure.',
          },
        },
      ],
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <B2BWebDesignPage />
    </>
  );
}
