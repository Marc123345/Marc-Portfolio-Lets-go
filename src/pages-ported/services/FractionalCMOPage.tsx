"use client";

import React from 'react';
import { ArrowRight, Zap, Globe, Code, Users, Target, CircleCheck as CheckCircle2, ArrowUpRight } from 'lucide-react';
import ServiceLeadForm from '@/components/ServiceLeadForm';
import MagneticButton from '@/components/MagneticButton';
import TextReveal from '@/components/TextReveal';
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

function BenefitItem({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex items-start">
      <CheckCircle2 className="w-5 h-5 text-[#A3D1FF] mt-1 mr-3 flex-shrink-0" />
      <div>
        <p className="text-white font-medium">{title}</p>
        <p className="text-white">{description}</p>
      </div>
    </div>
  );
}

function TechItem({ name }: { name: string }) {
  return (
    <div className="flex items-center bg-[#2d3035] px-4 py-2 rounded-lg">
      <span className="w-2 h-2 bg-[#A3D1FF] rounded-full mr-3"></span>
      <span className="text-white">{name}</span>
    </div>
  );
}

export default function FractionalCMOPage() {
  const router = useRouter();
  
  // Calendly link for UX Audit
  const calendlyUXAuditLink = "https://calendly.com/marc-friedman-web-design--meeting-link/30min";

  return (
    <>
      

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10 hover:border-[#A3D1FF] transition-all duration-300 mb-6">
              <span className="text-[#A3D1FF] text-sm font-medium">🔧 Web Partner for Fractional CMOs</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Design & Dev Execution for Go-To-Market Strategy, Without the Bottlenecks
            </h1>
            <p className="text-xl text-gray-300 mb-4">
              <strong className="text-white">You own the strategy. I bring it to life.</strong>
            </p>
            <p className="text-xl text-white mb-8">
              As a Fractional CMO, you're crafting big-picture growth plans. The last thing you need is a dev who delays your vision or landing pages that underperform.
            </p>
            <p className="text-xl text-white mb-8">
              I'm Marc — a React-based designer & developer who partners with marketing leaders to execute websites and landing pages that actually convert.
            </p>
            <MagneticButton>
              <a 
                href={calendlyUXAuditLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mr_btn mr_btn_primary group relative overflow-hidden"
              >
                <span className="relative z-10">Book a Strategy Call</span>
                <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                <ArrowRight className="ml-2 w-5 h-5 relative z-10 group-hover:rotate-45 transition-transform duration-300" />
              </a>
            </MagneticButton>
          </div>
        </div>
      </section>

      {/* What I Handle Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <TextReveal>
            <h2 className="text-3xl font-bold text-white mb-12">✅ What I Handle</h2>
          </TextReveal>
          <div className="grid md:grid-cols-2 gap-8">
            <FeatureCard
              icon={Zap}
              title="→ High-Converting Landing Pages"
              description="For paid campaigns, email funnels, and go-to-market launches. Fast, responsive, and conversion-optimized."
            />
            <FeatureCard
              icon={Globe}
              title="→ Sales-Ready Websites"
              description="Modern, animated sites that position your clients as the category leader — with speed, clarity, and no WordPress bloating."
            />
            <FeatureCard
              icon={Code}
              title="→ White-Label Execution"
              description="I work quietly behind the scenes, plug into your team, and follow your lead. Happy to ghost-design or develop under your brand."
            />
            <FeatureCard
              icon={Target}
              title="→ Strategy-Aligned Implementation"
              description="Whether you need a lead magnet opt-in, product launch site, or conversion revamp, I build with your KPIs in mind."
            />
          </div>
        </div>
      </section>

      {/* Why CMOs Work With Me */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1b1b1b]">
        <div className="max-w-7xl mx-auto">
          <TextReveal>
            <h2 className="text-3xl font-bold text-white mb-12">Why CMOs Work With Me</h2>
          </TextReveal>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <BenefitItem 
                title="Speed"
                description="I ship polished, production-ready builds in days — not weeks."
              />
              <BenefitItem 
                title="Conversion Focus"
                description="Every page is built with a goal: more leads, more signups, more clarity."
              />
            </div>
            <div className="space-y-8">
              <BenefitItem 
                title="No Dev Drama"
                description="No hand-holding, no flaky freelancers. Just quiet, clean execution."
              />
              <BenefitItem 
                title="Creative-First"
                description="I collaborate well with brand, design, and media teams — or I can handle it end-to-end."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tools & Tech */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <TextReveal>
            <h2 className="text-3xl font-bold text-white mb-12">Tools & Tech</h2>
          </TextReveal>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <TechItem name="React / Next.js" />
              <TechItem name="Tailwind / Framer Motion / GSAP" />
            </div>
            <div className="space-y-4">
              <TechItem name="Cloudflare, Vercel, Netlify" />
              <TechItem name="Figma-ready, pixel-perfect builds" />
            </div>
            <div className="space-y-4">
              <TechItem name="SEO, speed, and accessibility best practices" />
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1b1b1b]">
        <div className="max-w-7xl mx-auto">
          <TextReveal>
            <h2 className="text-3xl font-bold text-white mb-12">Success Stories</h2>
          </TextReveal>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#2d3035] p-8 rounded-xl border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">SaaS Go-to-Market Launch</h3>
              <p className="text-white mb-6">
                Partnered with a Fractional CMO to execute a complete website redesign and product launch for a B2B SaaS platform.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-[#A3D1FF] mr-3" />
                  <span>40% increase in demo requests</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-[#A3D1FF] mr-3" />
                  <span>2.1s average page load time</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-[#A3D1FF] mr-3" />
                  <span>Delivered in 14 days from concept to launch</span>
                </div>
              </div>
              <button 
                onClick={() => router.push('/work')}
                className="text-[#A3D1FF] hover:underline flex items-center gap-1"
              >
                View Case Study
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <div className="bg-[#2d3035] p-8 rounded-xl border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">Multi-Channel Campaign</h3>
              <p className="text-white mb-6">
                Created a series of landing pages for a multi-channel marketing campaign, each optimized for different traffic sources.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-[#A3D1FF] mr-3" />
                  <span>65% increase in conversion rate</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-[#A3D1FF] mr-3" />
                  <span>Reduced bounce rate by 40%</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-[#A3D1FF] mr-3" />
                  <span>White-labeled under agency brand</span>
                </div>
              </div>
              <button 
                onClick={() => router.push('/work')}
                className="text-[#A3D1FF] hover:underline flex items-center gap-1"
              >
                View Case Study
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Form Section */}
      <section id="contact-form" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <TextReveal>
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Let's Collaborate</h2>
          </TextReveal>
          <p className="text-xl text-white mb-12 text-center max-w-3xl mx-auto">
            If you're looking for a design+dev partner who gets it — and gets it done — I'd love to be your go-to.
          </p>
          <ServiceLeadForm 
            service="Fractional CMO"
            benefits={[
              "Fast turnaround times",
              "Conversion-focused design",
              "White-label ready",
              "Strategy-aligned execution",
              "No dev drama or bottlenecks"
            ]}
            testimonial={{
              quote: "Marc understands marketing strategy and translates it into high-performing digital assets. He's become our go-to for all client website projects.",
              author: "VP Product",
              role: "Marketing Agency | CMO"
            }}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Execute Your Strategy?</h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Let's discuss how I can help bring your marketing vision to life with <strong className="text-white">fast, conversion-focused execution</strong>.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <MagneticButton>
              <a 
                href={calendlyUXAuditLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mr_btn mr_btn_primary group relative overflow-hidden"
              >
                <span className="relative z-10">Book a Call</span>
                <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                <ArrowRight className="ml-2 w-5 h-5 relative z-10 group-hover:rotate-45 transition-transform duration-300" />
              </a>
            </MagneticButton>
            <MagneticButton>
              <button 
                onClick={() => router.push('/work')}
                className="mr_btn mr_btn_outline group"
              >
                <span className="relative z-10">View Work Samples</span>
                <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </MagneticButton>
          </div>
        </div>
      </section>
    </>
  );
}