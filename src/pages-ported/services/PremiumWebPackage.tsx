"use client";

import { ArrowRight, Check } from 'lucide-react';
import ServiceLeadForm from '@/components/ServiceLeadForm';
import { useRouter } from 'next/navigation';
export default function PremiumWebPackage() {
  const router = useRouter();

  const includedFeatures = [
    'Strategic Discovery & SEO Research',
    'UX Wireframes (up to 10 pages)',
    'UI Design System (Home, Templates, Style Guide)',
    'Custom React Frontend Development',
    'GSAP & Framer Motion Animations',
    'Responsive, SEO-Optimized Layouts',
    'CRM & Automation Integrations',
    'Cloudflare Hosting, DNS, SSL Setup',
    'QA Testing + Analytics/Pixel Integration'
  ];

  const optionalAddons = [
    'Managed Backend + Auth',
    'Stripe or Calendly Integration',
    'Headless CMS',
    'Cloudinary for Media Delivery',
    'Ongoing Optimization & Retainers'
  ];

  const relatedServices = [
    { name: 'advanced web design', url: '#' },
    { name: 'react development', url: '#' },
    { name: 'gsap animations', url: '#' },
    { name: 'seo strategy', url: '#' },
    { name: 'frontend development', url: '#' },
    { name: 'responsive design', url: '#' },
    { name: 'crm integrations', url: '#' },
    { name: 'conversion optimization', url: '#' }
  ];

  return (
    <>
      

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0a0a0a] to-black"></div>

        <div className="container-custom relative z-10 text-center">
          <div className="inline-block px-4 py-2 bg-[#A3D1FF]/10 border border-[#A3D1FF]/20 rounded-full text-[#A3D1FF] text-sm font-medium mb-6">
            Premium Package
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Complete Website Solution
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            A complete, high-end website solution tailored for law firms, SaaS startups, and media teams
          </p>
          <div className="text-5xl font-bold text-[#A3D1FF] mb-8">
            $8,000
          </div>
          <button
            onClick={() => {
              const form = document.getElementById('contact-form');
              form?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="mr_btn mr_btn_primary inline-flex items-center gap-2 text-lg font-semibold"
          >
            <span>Get Started</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6">About this Service</h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-gray-300 mb-6">
              A complete, high-end website solution tailored for law firms, SaaS startups, and media teams. This package includes strategic planning, UX wireframes, custom UI design, and full frontend development using React. I integrate GSAP animations, SEO optimization, CRM workflows (like HubSpot or Salesforce), and host everything securely with Cloudflare. Designed for scale, speed, and conversion.
            </p>
          </div>
        </div>
      </section>

      {/* Includes Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1b1b1b]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Includes</h2>
              <ul className="space-y-4">
                {includedFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="w-6 h-6 text-[#A3D1FF] mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Optional Add-ons</h2>
              <ul className="space-y-4">
                {optionalAddons.map((addon, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="w-6 h-6 text-[#A3D1FF]/60 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-white">{addon}</span>
                  </li>
                ))}
              </ul>
              <p className="text-white mt-6 text-sm">
                Optional add-ons available for additional cost
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6">Browse Related Services</h2>
          <div className="flex flex-wrap gap-3">
            {relatedServices.map((service, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-[#1b1b1b] border border-white/10 rounded-lg text-gray-300 text-sm hover:border-[#A3D1FF] hover:text-[#A3D1FF] transition-colors cursor-pointer"
              >
                {service.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1b1b1b]">
        <div className="max-w-7xl mx-auto">
          <ServiceLeadForm
            service="Premium Web Development Package"
            benefits={[
              'Strategic planning & discovery phase',
              'Custom UI/UX design system',
              'React frontend with animations',
              'SEO optimization included',
              'CRM integrations & hosting setup'
            ]}
            testimonial={{
              quote: "Marc was able to execute the vision perfectly! He's big on communication and easy to speak with. Marc dedicates his time to the client, ensuring the client is completely satisfied at each step of the process.",
              author: "Omar Turner",
              role: "Chief Executive Officer, Binns Media Group"
            }}
          />
        </div>
      </section>
    </>
  );
}
