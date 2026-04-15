"use client";

import React from 'react';
import { ArrowRight, Palette, LayoutGrid as Layout, Users, Sparkles, Lightbulb, Layers, ExternalLink } from 'lucide-react';
import TrustedBy from '@/components/TrustedBy';
import ServiceLeadForm from '@/components/ServiceLeadForm';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
function DesignService({ icon: Icon, title, description }: {
  icon: any;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-[#1b1b1b] p-8 rounded-xl border border-white/10 hover:border-[#A3D1FF] transition-all group">
      <div className="relative mb-6">
        <div className="absolute inset-0 bg-[#A3D1FF]/20 blur-xl rounded-full"></div>
        <div className="bg-[#A3D1FF]/10 p-4 rounded-xl relative">
          <Icon className="w-8 h-8 text-[#A3D1FF] group-hover:scale-110 transition-transform" />
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-white">{description}</p>
    </div>
  );
}

function ProcessStep({ number, title, description }: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-start">
      <div className="bg-[#A3D1FF] text-black w-12 h-12 rounded-full flex items-center justify-center font-bold mr-6">
        {number}
      </div>
      <div>
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-white">{description}</p>
      </div>
    </div>
  );
}

function ServicePackage({ title, description, features, recommended = false }: {
  title: string;
  description: string;
  features: string[];
  recommended?: boolean;
}) {
  const router = useRouter();
  
  return (
    <div className={`bg-[#1b1b1b] p-8 rounded-xl border ${recommended ? 'border-[#A3D1FF]' : 'border-white/10'} hover:border-[#A3D1FF] transition-all relative`}>
      {recommended && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#A3D1FF] text-black px-4 py-1 rounded-full text-sm font-medium">
          Most Popular
        </div>
      )}
      <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
      <p className="text-white mb-6">{description}</p>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-300">
            <ArrowRight className="w-4 h-4 text-[#A3D1FF] mr-2" />
            <strong>{feature}</strong>
          </li>
        ))}
      </ul>
      <button
        onClick={() => {
          const form = document.getElementById('contact-form');
          form?.scrollIntoView({ behavior: 'smooth' });
        }}
        className="mr_btn mr_btn_primary w-full"
      >
        <span>Request a Quote</span>
      </button>
    </div>
  );
}

export default function DesignPage() {
  const router = useRouter();

  return (
    <>
      

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-black overflow-hidden">
        {/* Hero Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=2000&q=80" 
            alt="UI/UX Design Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        {/* Content */}
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              UI/UX Design Services
            </h1>
            <h2 className="text-xl sm:text-2xl text-[#A3D1FF] mb-6">
              User-Centered Design That Drives Business Results
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              <strong className="text-white">Increase conversions</strong> and <strong className="text-white">reduce bounce rates</strong> through user-centered design that delights users and drives business growth.
            </p>
            <div className="flex gap-4">
              <button 
                onClick={() => router.push('/contact')}
                className="mr_btn mr_btn_primary group relative overflow-hidden"
              >
                <span className="relative z-10">Start Your Project</span>
                <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                <ArrowRight className="ml-2 w-5 h-5 relative z-10 group-hover:rotate-45 transition-transform duration-300" />
              </button>
              <button 
                onClick={() => router.push('/work')}
                className="mr_btn mr_btn_outline group"
              >
                <span className="relative z-10">View Portfolio</span>
                <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <TrustedBy />

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Design Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <DesignService
              icon={Layout}
              title="UI Design"
              description="Beautiful, intuitive interfaces that enhance user engagement and strengthen brand perception."
            />
            <DesignService
              icon={Users}
              title="UX Design"
              description="User-centered design solutions that optimize the customer journey and reduce friction points."
            />
            <DesignService
              icon={Palette}
              title="Design Systems"
              description="Scalable design systems that ensure brand coherence and streamline development."
            />
            <DesignService
              icon={Sparkles}
              title="Interaction Design"
              description="Micro-interactions and animations that provide feedback and delight users."
            />
            <DesignService
              icon={Lightbulb}
              title="Product Strategy"
              description="Strategic design thinking that solves complex business challenges."
            />
            <DesignService
              icon={Layers}
              title="Design Audits"
              description="Comprehensive analysis and actionable recommendations to improve usability."
            />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1b1b1b]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12">Design Process</h2>
          <div className="space-y-12">
            <ProcessStep
              number="01"
              title="Discovery"
              description="More accurate project scoping through comprehensive research, stakeholder interviews, and competitive analysis."
            />
            <ProcessStep
              number="02"
              title="Strategy"
              description="Higher alignment with business goals through data-driven design strategy and user-centered planning."
            />
            <ProcessStep
              number="03"
              title="Design"
              description="Increase in user satisfaction through iterative wireframing, prototyping, and visual design processes."
            />
            <ProcessStep
              number="04"
              title="Testing"
              description="Identify and fix usability issues before launch through comprehensive user testing and feedback integration."
            />
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">UX/UI Design Projects</h2>
          <p className="text-white mb-12 max-w-2xl">
            See how our user-centered design approach has helped businesses increase engagement and conversions.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link
              href="/work/case-studies/videoleap"
              className="bg-[#1b1b1b] rounded-xl overflow-hidden border border-white/10 hover:border-[#A3D1FF] transition-all group"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src="https://i.imgur.com/SubVB9A.jpeg"
                  alt="Videoleap Platform"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2 flex items-center justify-between">
                  Videoleap
                  <ExternalLink className="w-5 h-5 text-[#A3D1FF]" />
                </h3>
                <p className="text-white mb-4">AI-powered video editing platform with intuitive interface.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[#A3D1FF]/10 text-[#A3D1FF] rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-[#A3D1FF]/10 text-[#A3D1FF] rounded-full text-sm">AI/ML</span>
                </div>
              </div>
            </Link>

            <Link
              href="/work/case-studies/mytube"
              className="bg-[#1b1b1b] rounded-xl overflow-hidden border border-white/10 hover:border-[#A3D1FF] transition-all group"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src="https://i.imgur.com/ywKLdPM.jpeg"
                  alt="MyTube Platform"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2 flex items-center justify-between">
                  MyTube
                  <ExternalLink className="w-5 h-5 text-[#A3D1FF]" />
                </h3>
                <p className="text-white mb-4">Video streaming platform with enhanced user experience.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[#A3D1FF]/10 text-[#A3D1FF] rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-[#A3D1FF]/10 text-[#A3D1FF] rounded-full text-sm">Video API</span>
                </div>
              </div>
            </Link>

            <Link
              href="/work/case-studies/fleet-management"
              className="bg-[#1b1b1b] rounded-xl overflow-hidden border border-white/10 hover:border-[#A3D1FF] transition-all group"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src="https://i.imgur.com/EwgHAuK.png"
                  alt="Fleet Management System"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2 flex items-center justify-between">
                  Fleet Management
                  <ExternalLink className="w-5 h-5 text-[#A3D1FF]" />
                </h3>
                <p className="text-white mb-4">Comprehensive fleet tracking with clean interface design.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[#A3D1FF]/10 text-[#A3D1FF] rounded-full text-sm">React Native</span>
                  <span className="px-3 py-1 bg-[#A3D1FF]/10 text-[#A3D1FF] rounded-full text-sm">MongoDB</span>
                </div>
              </div>
            </Link>

            <Link
              href="/work/case-studies/ilight"
              className="bg-[#1b1b1b] rounded-xl overflow-hidden border border-white/10 hover:border-[#A3D1FF] transition-all group"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src="https://i.imgur.com/vXTIRo4.jpg"
                  alt="iLight Platform"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2 flex items-center justify-between">
                  iLight
                  <ExternalLink className="w-5 h-5 text-[#A3D1FF]" />
                </h3>
                <p className="text-white mb-4">Modern lighting e-commerce with seamless UX.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[#A3D1FF]/10 text-[#A3D1FF] rounded-full text-sm">Next.js</span>
                  <span className="px-3 py-1 bg-[#A3D1FF]/10 text-[#A3D1FF] rounded-full text-sm">Shopify</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Design Packages</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <ServicePackage
              title="Brand Design"
              description="Complete brand identity design package"
              features={[
                "Stronger brand recognition",
                "Professional logo design",
                "Comprehensive color system",
                "Typography selection",
                "Brand guidelines document",
                "2-3 week delivery"
              ]}
            />
            <ServicePackage
              title="Website Design"
              description="Custom website design package"
              features={[
                "Higher conversion rates",
                "5-7 page custom designs",
                "Responsive layouts for all devices",
                "Interactive prototypes",
                "Design system development",
                "3-4 week delivery"
              ]}
              recommended={true}
            />
            <ServicePackage
              title="Product Design"
              description="End-to-end product design solution"
              features={[
                "Improved user satisfaction",
                "Comprehensive UX research",
                "User journey mapping",
                "Wireframes and UI design",
                "Interactive prototype",
                "6-8 week delivery"
              ]}
            />
          </div>
          <div className="mt-8 text-center">
            <p className="text-white">
              Each project is unique. Contact us for a customized quote tailored to your specific needs.
            </p>
          </div>
        </div>
      </section>

      {/* Lead Form Section */}
      <section id="contact-form" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <ServiceLeadForm 
            service="UI/UX Design"
            benefits={[
              "Increase in conversion rates",
              "Reduction in bounce rates",
              "Improvement in user satisfaction",
              "Decrease in design inconsistencies",
              "Faster development with design systems"
            ]}
            testimonial={{
              quote: "Marc excels in crafting intuitive, data-centric design solutions that have greatly enhanced our platform's usability and visual analytics.",
              author: "VP Product",
              role: "WebAI | Founder and developer of @Hubters WebAI"
            }}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Digital Experience?</h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Let's create <strong className="text-white">user-centered designs</strong> that increase conversions and delight your users.
          </p>
          <button 
            onClick={() => router.push('/contact')}
            className="mr_btn mr_btn_primary group relative overflow-hidden"
          >
            <span className="relative z-10">Schedule a Design Consultation</span>
            <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
            <ArrowRight className="ml-2 w-5 h-5 relative z-10 group-hover:rotate-45 transition-transform duration-300" />
          </button>
        </div>
      </section>
    </>
  );
}