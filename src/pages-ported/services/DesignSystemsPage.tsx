"use client";

import React from 'react';
import { ArrowRight, Layers, Code, Palette, Zap, Users, CircleCheck as CheckCircle2, ExternalLink } from 'lucide-react';
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

export default function DesignSystemsPage() {
  const router = useRouter();

  return (
    <>
      

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Design Systems
            </h1>
            <p className="text-xl text-white mb-8">
              Create <strong className="text-white">scalable, consistent design systems</strong> that streamline development and ensure brand consistency across all touchpoints.
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
              icon={Layers}
              title="Component Libraries"
              description="Build reusable component libraries that ensure consistency and speed up development."
            />
            <FeatureCard
              icon={Code}
              title="Design Tokens"
              description="Implement design tokens for colors, typography, and spacing that sync between design and code."
            />
            <FeatureCard
              icon={Palette}
              title="Style Guides"
              description="Comprehensive style guides that maintain brand consistency across all platforms."
            />
            <FeatureCard
              icon={Zap}
              title="Development Efficiency"
              description="Reduce development time by 40% with pre-built, tested components."
            />
            <FeatureCard
              icon={Users}
              title="Team Collaboration"
              description="Improve designer-developer collaboration with shared design language."
            />
            <FeatureCard
              icon={CheckCircle2}
              title="Quality Assurance"
              description="Ensure consistent user experiences across all products and platforms."
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1b1b1b]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12">Why Design Systems Matter</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">For Development Teams</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#A3D1FF] mt-1 mr-3" />
                  <p className="text-gray-300">40% faster development with reusable components</p>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#A3D1FF] mt-1 mr-3" />
                  <p className="text-gray-300">Reduced bugs and inconsistencies</p>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#A3D1FF] mt-1 mr-3" />
                  <p className="text-gray-300">Easier maintenance and updates</p>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">For Design Teams</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#A3D1FF] mt-1 mr-3" />
                  <p className="text-gray-300">Consistent brand experience across platforms</p>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#A3D1FF] mt-1 mr-3" />
                  <p className="text-gray-300">Focus on innovation instead of repetitive tasks</p>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#A3D1FF] mt-1 mr-3" />
                  <p className="text-gray-300">Better collaboration with developers</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">Design System Projects</h2>
          <p className="text-white mb-12 max-w-2xl">
            Explore how we've built scalable design systems for leading companies across different industries.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <Link
              href="/work/case-studies/binns-media"
              className="bg-[#1b1b1b] rounded-xl overflow-hidden border border-white/10 hover:border-[#A3D1FF] transition-all group"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src="https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%204%20-%2016x9.png?updatedAt=1767539579710"
                  alt="Binns Media Group Platform"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2 flex items-center justify-between">
                  Binns Media Group
                  <ExternalLink className="w-5 h-5 text-[#A3D1FF]" />
                </h3>
                <p className="text-white mb-4">Comprehensive design system for digital media platform with React and TypeScript.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[#A3D1FF]/10 text-[#A3D1FF] rounded-full text-sm">React 18</span>
                  <span className="px-3 py-1 bg-[#A3D1FF]/10 text-[#A3D1FF] rounded-full text-sm">TypeScript</span>
                </div>
              </div>
            </Link>

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
                <p className="text-white mb-4">AI-powered video editing platform with scalable component architecture.</p>
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
                  src="https://i.imgur.com/QNHXpzT.jpeg"
                  alt="MyTube Platform"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2 flex items-center justify-between">
                  MyTube
                  <ExternalLink className="w-5 h-5 text-[#A3D1FF]" />
                </h3>
                <p className="text-white mb-4">Video metadata management system with reusable UI components.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[#A3D1FF]/10 text-[#A3D1FF] rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-[#A3D1FF]/10 text-[#A3D1FF] rounded-full text-sm">Node.js</span>
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
            service="Design Systems"
            benefits={[
              "40% faster development cycles",
              "Consistent brand experience",
              "Reduced design debt",
              "Improved team collaboration",
              "Scalable component architecture"
            ]}
            testimonial={{
              quote: "The design system Marc created transformed our development process and ensured consistency across all our products.",
              author: "VP Product",
              role: "WebAI | VP Product at MarginX.ai"
            }}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Build Your Design System?</h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Let's create a <strong className="text-white">scalable design system</strong> that accelerates development and ensures consistency.
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