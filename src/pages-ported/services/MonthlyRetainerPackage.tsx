"use client";

import { ArrowRight, Check } from 'lucide-react';
import ServiceLeadForm from '@/components/ServiceLeadForm';
import { useRouter } from 'next/navigation';
export default function MonthlyRetainerPackage() {
  const router = useRouter();

  const includedFeatures = [
    'Full website management',
    'Premium hosting & maintenance',
    'Technical SEO optimization',
    'On-page SEO updates',
    'Content creation & strategy',
    'Landing page design',
    'Analytics & performance tracking',
    'Monthly optimization strategy',
    'Ongoing UX improvements',
    'Unlimited landing pages for ads/campaigns',
    '24/7 lead-capture chatbot',
    'Monthly SEO blog posts',
    'Backlink building',
    'Performance monitoring',
    'GA4 & conversion tracking'
  ];

  const technologies = [
    'React',
    'Next.js',
    'Figma',
    'Cloudflare',
    'Google Analytics 4',
    'SEO-optimized workflows'
  ];

  const relatedServices = [
    { name: 'web design', url: '#' },
    { name: 'web development', url: '#' },
    { name: 'seo & analytics', url: '#' }
  ];

  return (
    <>
      

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0a0a0a] to-black"></div>

        <div className="container-custom relative z-10 text-center">
          <div className="inline-block px-4 py-2 bg-[#A3D1FF]/10 border border-[#A3D1FF]/20 rounded-full text-[#A3D1FF] text-sm font-medium mb-6">
            Monthly Retainer
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Website Growth Engine
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your website into a high-performing growth engine with ongoing management and optimization
          </p>
          <div className="flex items-baseline justify-center mb-8">
            <div className="text-5xl font-bold text-[#A3D1FF]">
              $500
            </div>
            <span className="text-2xl text-white ml-2">/month</span>
          </div>
          <button
            onClick={() => {
              const form = document.getElementById('contact-form');
              form?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="mr_btn mr_btn_primary inline-flex items-center gap-2 text-lg font-semibold"
          >
            <span>Start Your Retainer</span>
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
              Transform your website into a high-performing growth engine. This service includes full website management, premium hosting, technical SEO, on-page SEO, content creation, landing page design, analytics, and a monthly optimization strategy.
            </p>
            <p className="text-lg text-gray-300 mb-6">
              You'll receive ongoing updates, UX improvements, unlimited landing pages (for ads/campaigns), a 24/7 lead-capture chatbot, monthly SEO blogs, backlink building, and performance monitoring. Everything is delivered using tools like React, Next.js, Figma, Cloudflare, GA4, and SEO-optimized workflows.
            </p>
            <p className="text-lg text-[#A3D1FF] font-semibold">
              Perfect for businesses that want consistent traffic, higher rankings, better conversions, and a professional website that is always improving.
            </p>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1b1b1b]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">What's Included Every Month</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {includedFeatures.map((feature, index) => (
              <div key={index} className="flex items-start">
                <Check className="w-6 h-6 text-[#A3D1FF] mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">Technologies & Tools Used</h2>
          <div className="flex flex-wrap gap-4">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-[#1b1b1b] border border-[#A3D1FF]/30 rounded-lg text-[#A3D1FF] font-medium"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1b1b1b]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Why Choose a Monthly Retainer?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-black/50 p-6 rounded-xl border border-white/10">
              <h3 className="text-xl font-semibold text-[#A3D1FF] mb-3">Consistent Growth</h3>
              <p className="text-gray-300">
                Your website is always improving with regular updates, content, and optimization strategies that drive measurable results.
              </p>
            </div>
            <div className="bg-black/50 p-6 rounded-xl border border-white/10">
              <h3 className="text-xl font-semibold text-[#A3D1FF] mb-3">Higher Rankings</h3>
              <p className="text-gray-300">
                Monthly SEO work ensures your site climbs search rankings and attracts more organic traffic consistently.
              </p>
            </div>
            <div className="bg-black/50 p-6 rounded-xl border border-white/10">
              <h3 className="text-xl font-semibold text-[#A3D1FF] mb-3">Better Conversions</h3>
              <p className="text-gray-300">
                Continuous UX improvements and A/B testing lead to higher conversion rates and more qualified leads.
              </p>
            </div>
            <div className="bg-black/50 p-6 rounded-xl border border-white/10">
              <h3 className="text-xl font-semibold text-[#A3D1FF] mb-3">Peace of Mind</h3>
              <p className="text-gray-300">
                Professional website management means you can focus on your business while we handle all technical aspects.
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
            service="Monthly Website Retainer"
            benefits={[
              'Full website management & hosting',
              'Technical & on-page SEO',
              'Unlimited landing pages',
              '24/7 lead capture chatbot',
              'Monthly content & backlinks'
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
