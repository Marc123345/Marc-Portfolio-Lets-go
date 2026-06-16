import type { Metadata } from 'next';
import HomePage from '@/pages-ported/HomePage';

export const metadata: Metadata = {
  title: { absolute: 'Custom React & Next.js Web Design for B2B & Service Businesses | Marc Friedman' },
  description: 'Custom React & Next.js websites for B2B and service businesses. 98/100 PageSpeed, sub-2s loads, 50+ projects shipped, 5.0★ rating. Book a free strategy call.',
  alternates: { canonical: 'https://www.marcfriedmanportfolio.com/' },
  openGraph: {
    title: 'Custom React & Next.js Web Design for B2B & Service Businesses | Marc Friedman',
    description: 'Custom React & Next.js websites for B2B and service businesses. 98/100 PageSpeed, sub-2s loads, 50+ projects shipped, 5.0★ rating. Book a free strategy call.',
    url: 'https://www.marcfriedmanportfolio.com/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom React & Next.js Web Design for B2B & Service Businesses | Marc Friedman',
    description: 'Custom React & Next.js websites for B2B and service businesses. 98/100 PageSpeed, sub-2s loads, 50+ projects shipped, 5.0★ rating. Book a free strategy call.',
  },
};

const BASE = 'https://www.marcfriedmanportfolio.com';

const homepageJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['ProfessionalService', 'LocalBusiness'],
      '@id': `${BASE}/#business`,
      name: 'Marc Friedman Web Design',
      alternateName: 'Marc Friedman Design & Marketing Agency',
      url: `${BASE}/`,
      image: `${BASE}/images/marc-friedman-primary.svg`,
      logo: `${BASE}/apple-touch-icon.png`,
      description:
        'Web design agency building custom React & Next.js websites with sub-2-second load times and 98/100 PageSpeed scores. 50+ projects shipped across three continents.',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Tel Aviv',
        addressCountry: 'IL',
      },
      areaServed: ['United States', 'Europe', 'Africa', 'Worldwide'],
      priceRange: '$$$',
      founder: { '@id': `${BASE}/#marc` },
      sameAs: [
        'https://www.linkedin.com/in/portfolio2/',
        'https://www.linkedin.com/company/105745552/',
        'https://www.youtube.com/@MarcFriedmanWebDesign',
        'https://www.behance.net/marcfriedmanweb',
        'https://dribbble.com/marcf9199/about',
        'https://www.awwwards.com/marc-friedman/',
        'https://clutch.co/profile/marc-friedman-design-agency',
      ],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5.0',
        reviewCount: '25',
        bestRating: '5',
        worstRating: '1',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Web Design & Development Services',
        itemListElement: [
          'Web Development',
          'UI/UX Design',
          'Design Systems',
          'AI Integration',
          'SEO & Content Layout',
          'Local SEO',
        ].map((s) => ({
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: s },
        })),
      },
    },
    {
      '@type': 'Person',
      '@id': `${BASE}/#marc`,
      name: 'Marc Friedman',
      url: `${BASE}/about`,
      jobTitle: 'Web Designer & Developer',
      worksFor: { '@id': `${BASE}/#business` },
      sameAs: [
        'https://www.linkedin.com/in/portfolio2/',
        'https://www.awwwards.com/marc-friedman/',
      ],
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageJsonLd) }}
      />
      <HomePage />
    </>
  );
}
