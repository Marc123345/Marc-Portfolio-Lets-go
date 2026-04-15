"use client";

import React from 'react';
import { ArrowRight, Database, Code, Shield, Zap, Cloud, Users, ExternalLink } from 'lucide-react';
import ServiceLeadForm from '@/components/ServiceLeadForm';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
function FeatureCard({ icon: Icon, title, description }: {
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
        <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
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
        className="w-full mr_btn mr_btn_primary group relative overflow-hidden"
      >
        <span className="relative z-10">Request a Quote</span>
        <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
      </button>
    </div>
  );
}

export default function SaaSPage() {
  const router = useRouter();

  return (
    <>
      

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Startup MVP Development
            </h1>
            <h2 className="text-xl sm:text-2xl text-[#A3D1FF] mb-6">
              Launch Your Product Fast and Validate Your Idea
            </h2>
            <p className="text-xl text-white mb-8">
              <strong className="text-white">Bring your startup vision to life</strong> with rapid MVP development that gets you to market in 8-12 weeks with a lean, scalable product.
            </p>
            <button 
              onClick={() => router.push('/contact')}
             className="mr_btn mr_btn_primary group relative overflow-hidden"
            >
             <span className="relative z-10">Start Your Project</span>
             <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
             <ArrowRight className="ml-2 w-5 h-5 relative z-10 group-hover:rotate-45 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={Database}
              title="Scalable Architecture"
              description="Infrastructure that grows with your business, handling significant user growth without performance degradation."
            />
            <FeatureCard
              icon={Code}
              title="Modern Tech Stack"
              description="Future-proof technologies delivering faster development cycles and high uptime."
            />
            <FeatureCard
              icon={Shield}
              title="Security First"
              description="Enterprise-grade protection with SOC 2 compliance standards and robust data protection."
            />
            <FeatureCard
              icon={Zap}
              title="Performance"
              description="Lightning-fast response times, even at peak loads with many concurrent users."
            />
            <FeatureCard
              icon={Cloud}
              title="Cloud Native"
              description="Lower infrastructure costs with auto-scaling cloud architecture and containerization."
            />
            <FeatureCard
              icon={Users}
              title="User Experience"
              description="Intuitive interfaces that reduce onboarding time and increase user retention."
            />
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1b1b1b]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12">MVP Development Process</h2>
          <div className="space-y-12">
            <ProcessStep
              number="01"
              title="Product Discovery"
              description="Define core features and validate assumptions through market research and user interviews."
            />
            <ProcessStep
              number="02"
              title="Rapid Prototyping"
              description="Create interactive prototypes to test user flows and gather early feedback."
            />
            <ProcessStep
              number="03"
              title="Lean Development"
              description="Build only essential features with clean code and scalable architecture."
            />
            <ProcessStep
              number="04"
              title="Launch & Iterate"
              description="Deploy quickly, measure user behavior, and iterate based on real data."
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Development Packages</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <ServicePackage
              title="MVP"
              description="Validate your SaaS idea in just 8 weeks"
              features={[
                "Faster time-to-market",
                "Core features implementation",
                "User authentication system",
                "Cloud hosting setup",
                "Basic analytics integration",
                "8-12 week delivery"
              ]}
            />
            <ServicePackage
              title="Professional"
              description="Complete SaaS solution with advanced features"
              features={[
                "Higher user retention",
                "Advanced feature set",
                "Custom admin dashboard",
                "Payment system integration",
                "API development & documentation",
                "12-16 week delivery"
              ]}
              recommended={true}
            />
            <ServicePackage
              title="Enterprise"
              description="Scalable solution for complex business needs"
              features={[
                "Reduction in operational costs",
                "Custom architecture design",
                "Advanced security implementation",
                "Third-party integrations",
                "High-availability infrastructure",
                "Custom timeline"
              ]}
            />
          </div>
          <div className="mt-8 text-center">
            <p className="text-white">
              Each SaaS project is unique. Contact us for a detailed quote tailored to your specific requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">Startup MVP Projects</h2>
          <p className="text-white mb-12 max-w-2xl">
            See how we've helped startups launch their MVPs and validate their ideas quickly.
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
                <p className="text-white mb-4">Modern lighting e-commerce MVP launched in 10 weeks.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[#A3D1FF]/10 text-[#A3D1FF] rounded-full text-sm">Next.js</span>
                  <span className="px-3 py-1 bg-[#A3D1FF]/10 text-[#A3D1FF] rounded-full text-sm">Shopify</span>
                </div>
              </div>
            </Link>

            <Link
              href="/work/case-studies/automarginx"
              className="bg-[#1b1b1b] rounded-xl overflow-hidden border border-white/10 hover:border-[#A3D1FF] transition-all group"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src="https://i.imgur.com/PiKh199.png"
                  alt="AutoMarginX Platform"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2 flex items-center justify-between">
                  AutoMarginX
                  <ExternalLink className="w-5 h-5 text-[#A3D1FF]" />
                </h3>
                <p className="text-white mb-4">Dealership management MVP with real-time analytics.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[#A3D1FF]/10 text-[#A3D1FF] rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-[#A3D1FF]/10 text-[#A3D1FF] rounded-full text-sm">PostgreSQL</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Lead Form Section */}
      <section id="contact-form" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <ServiceLeadForm
            service="Startup MVP Development"
            benefits={[
              "Launch in 8-12 weeks",
              "Lean, validated features only",
              "User-tested design and flows",
              "Scalable architecture from day one",
              "Post-launch iteration support"
            ]}
            testimonial={{
              quote: "Marc helped us validate our startup idea quickly with an MVP that our early users loved. His lean approach saved us months of development time.",
              author: "Stallone Sweeney",
              role: "Attorney | Founder of LegalContent"
            }}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Launch Your MVP?</h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Let's <strong className="text-white">validate your startup idea</strong> with a lean MVP that gets you to market fast.
          </p>
          <button 
            onClick={() => router.push('/contact')}
           className="mr_btn mr_btn_primary group relative overflow-hidden"
          >
           <span className="relative z-10">Start Your Project</span>
           <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
           <ArrowRight className="ml-2 w-5 h-5 relative z-10 group-hover:rotate-45 transition-transform duration-300" />
          </button>
        </div>
      </section>
    </>
  );
}