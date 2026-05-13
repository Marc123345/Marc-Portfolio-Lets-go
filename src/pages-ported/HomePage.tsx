import TrustedBy from '@/components/TrustedBy';
import AccessibilityPanel from '@/components/AccessibilityPanel';
import HeroSection from '@/components/home/HeroSection';
import FeaturedWorkSection from '@/components/home/FeaturedWorkSection';
import GlobeSection from '@/components/home/GlobeSection';
import ServicesArcSection from '@/components/home/ServicesArcSection';
import HowItWorksSection from '@/components/home/HowItWorksSection';
import AboutSection from '@/components/home/AboutSection';
import FAQSection from '@/components/home/FAQSection';
import CTASection from '@/components/home/CTASection';

const homeSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Marc Friedman - Web Designer Tel Aviv",
  "description": "Professional web designer in Tel Aviv creating high-performance React/Node websites for agencies, ecommerce, and B2B companies. Expert in web development and conversion optimization.",
  "image": "https://marcfriedmanportfolio.com/wp-content/uploads/2024/12/image-1.webp",
  "url": "https://marcfriedmanportfolio.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Tel Aviv",
    "addressRegion": "Tel Aviv District",
    "addressCountry": "IL"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "32.0853",
    "longitude": "34.7818"
  },
  "sameAs": [
    "https://www.linkedin.com/in/portfolio2/",
    "https://www.behance.net/marcfriedmanweb",
    "https://g.co/kgs/78fRZ6r"
  ],
  "founder": {
    "@type": "Person",
    "name": "Marc Friedman",
    "jobTitle": "Web Designer Tel Aviv | Full Stack Designer & Developer"
  },
  "areaServed": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": "32.0853",
      "longitude": "34.7818"
    },
    "geoRadius": "50000"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Design & Development Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Web Development",
          "description": "Custom website development services"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "UI/UX Design",
          "description": "User interface and experience design"
        }
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "40"
  }
};

export default function HomePage() {
  return (
    <>
      

      <AccessibilityPanel />
      <HeroSection />
      <TrustedBy />
      <FeaturedWorkSection />
      <GlobeSection />
      <ServicesArcSection />
      <HowItWorksSection />
      <AboutSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
