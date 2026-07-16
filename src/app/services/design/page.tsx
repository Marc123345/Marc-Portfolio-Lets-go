import type { Metadata } from 'next';
import DesignPage from '@/pages-ported/services/DesignPage';

export const metadata: Metadata = {
  title: { absolute: 'Professional UI UX Design Services | UX Design Consultancy | Marc Friedman' },
  description: 'UI/UX design and consultancy from Tel Aviv, user research, high-fidelity interface design, design systems, and prototyping, delivered by a designer who also ships the front-end code.',
  alternates: { canonical: 'https://www.marcfriedmanportfolio.com/services/design/' },
  openGraph: {
    title: 'Professional UI UX Design Services | UX Design Consultancy | Marc Friedman',
    description: 'UI/UX design and consultancy from Tel Aviv, user research, high-fidelity interface design, design systems, and prototyping, delivered by a designer who also ships the front-end code.',
    url: 'https://www.marcfriedmanportfolio.com/services/design/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional UI UX Design Services | UX Design Consultancy | Marc Friedman',
    description: 'UI/UX design and consultancy from Tel Aviv, user research, high-fidelity interface design, design systems, and prototyping, delivered by a designer who also ships the front-end code.',
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Marc Friedman, UI/UX Design Services',
  url: 'https://www.marcfriedmanportfolio.com/services/design/',
  areaServed: 'Worldwide',
  knowsAbout: [
    'UI Design',
    'UX Research',
    'Prototyping',
    'Design Systems',
    'Accessibility',
    'Figma',
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
      author: { '@type': 'Person', name: 'Bar Levy' },
      reviewBody:
        'Marc initiated and led the UX & UI tasks and provided valuable insights during the entire process.',
    },
    {
      '@type': 'Review',
      reviewRating: { '@type': 'Rating', ratingValue: '5' },
      author: { '@type': 'Person', name: 'Stallone Sweeney' },
      reviewBody:
        'Marc listened carefully to my ideas and needs, ensuring the final design perfectly reflected my vision. His attention to detail is incredible.',
    },
    {
      '@type': 'Review',
      reviewRating: { '@type': 'Rating', ratingValue: '5' },
      author: { '@type': 'Person', name: 'Guneet K. Singh' },
      reviewBody:
        'Marc took the time to understand our goals and adapt as needed. His professionalism and openness to feedback made it a seamless collaboration.',
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
      <DesignPage />
    </>
  );
}
