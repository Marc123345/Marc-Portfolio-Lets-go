import type { Metadata } from 'next';
import WebDevelopmentPage from '@/pages-ported/services/WebDevelopmentPage';

export const metadata: Metadata = {
  title: { absolute: 'Custom Website Development | React & Next.js Websites | Marc Friedman' },
  description: 'Custom website development with React & Next.js. SEO-optimized, sub-2-second load times, mobile-first design. Packages from landing pages to full web apps.',
  alternates: { canonical: 'https://www.marcfriedmanportfolio.com/services/web-development/' },
  openGraph: {
    title: 'Custom Website Development | React & Next.js Websites | Marc Friedman',
    description: 'Custom website development with React & Next.js. SEO-optimized, sub-2-second load times, mobile-first design. Packages from landing pages to full web apps.',
    url: 'https://www.marcfriedmanportfolio.com/services/web-development/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom Website Development | React & Next.js Websites | Marc Friedman',
    description: 'Custom website development with React & Next.js. SEO-optimized, sub-2-second load times, mobile-first design. Packages from landing pages to full web apps.',
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Marc Friedman, Custom Website Development',
  url: 'https://www.marcfriedmanportfolio.com/services/web-development/',
  areaServed: 'Worldwide',
  knowsAbout: [
    'React',
    'Next.js',
    'TypeScript',
    'Core Web Vitals',
    'Technical SEO',
    'Web application development',
  ],
  founder: {
    '@type': 'Person',
    name: 'Marc Friedman',
    jobTitle: 'Full-Stack Designer & Developer',
    url: 'https://www.marcfriedmanportfolio.com/about/',
    sameAs: [
      'https://www.linkedin.com/in/portfolio2/',
      'https://clutch.co/profile/marc-friedman-design-agency',
      'https://www.awwwards.com/marc-friedman/',
      'https://www.cssdesignawards.com/sites/marc-friedman-web-design-agency/49357/',
      'https://www.designrush.com/agency/profile/marc-friedman-design-agency',
      'https://www.behance.net/marcfriedmanweb',
      'https://dribbble.com/marcf9199/about',
    ],
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '17',
  },
  review: [
    {
      '@type': 'Review',
      reviewRating: { '@type': 'Rating', ratingValue: '5' },
      author: { '@type': 'Person', name: 'Omar Turner' },
      reviewBody:
        "Marc was able to execute the vision perfectly. He's big on communication and dedicates his time to the client, ensuring you're completely satisfied at each step.",
    },
    {
      '@type': 'Review',
      reviewRating: { '@type': 'Rating', ratingValue: '5' },
      author: { '@type': 'Person', name: 'Bradley Thompson' },
      reviewBody:
        'Marc is an incredible ally, highly responsive with quick solutions as he built our landing page. The real deal, a true professional.',
    },
    {
      '@type': 'Review',
      reviewRating: { '@type': 'Rating', ratingValue: '5' },
      author: { '@type': 'Person', name: 'Darren Youngleson' },
      reviewBody:
        'Marc is an absolute winner. No limits to his depth of expertise, unwavering customer service, and the quality and creativity of his product.',
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
      <WebDevelopmentPage />
    </>
  );
}
