"use client";

import React from 'react';
import { ArrowRight, Star, Timer, Users, Target, Zap, CircleCheck as CheckCircle2, ArrowUpRight, ExternalLink } from 'lucide-react';
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

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="bg-[#1b1b1b] p-8 rounded-xl border border-white/10 hover:border-[#A3D1FF] transition-all text-center">
      <div className="text-4xl font-bold text-[#A3D1FF] mb-2">{value}</div>
      <div className="text-white">{label}</div>
    </div>
  );
}

export default function StartupMVPPage() {
  const router = useRouter();

  return (
    <>
      

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-black overflow-hidden">
        {/* Hero Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://ik.imagekit.io/qcvroy8xpd/TTV8Liw.jpg"
            alt="Startup MVP Development"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        {/* Content */}
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10 hover:border-[#A3D1FF] transition-all duration-300 mb-6">
              <span className="text-[#A3D1FF] text-sm font-medium">MVP Development Services</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Launch Your Startup MVP in 30 Days
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              <strong className="text-white">Get to market faster</strong> with an investor-ready MVP. Built by a founder who's pitched 5 VCs, got into AWS Accelerator, and knows exactly what it takes to <strong className="text-white">impress investors and acquire early users</strong>.
            </p>
            <div className="flex gap-4">
              <button 
                onClick={() => {
                  const form = document.getElementById('contact-form');
                  form?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="mr_btn mr_btn_primary group relative overflow-hidden"
              >
                <span className="relative z-10">Book Free MVP Strategy Call</span>
                <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                <ArrowRight className="ml-2 w-5 h-5 relative z-10 group-hover:rotate-45 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Why Choose Us For Your MVP</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={Target}
              title="Built by a Founder"
              description="Higher investor appeal with MVPs built by someone who's raised capital, pitched to VCs, and knows what investors really look for."
            />
            <FeatureCard
              icon={Timer}
              title="30-Day Launch"
              description="Faster time-to-market with our focused approach that prioritizes core features that validate your idea and impress investors."
            />
            <FeatureCard
              icon={Users}
              title="Future-Ready Tech"
              description="Lower technical debt with scalable architecture using React, Node.js, and cloud infrastructure that grows with you."
            />
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">Startup MVP Success Stories</h2>
          <p className="text-white mb-12 max-w-2xl">
            See how we've helped startups launch successful MVPs and scale their platforms.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <Link
              href="/work/case-studies/automarginx"
              className="bg-[#1b1b1b] rounded-xl overflow-hidden border border-white/10 hover:border-[#A3D1FF] transition-all group"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src="https://i.imgur.com/PiKh199.png"
                  alt="AutoMarginX MVP"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2 flex items-center justify-between">
                  AutoMarginX
                  <ExternalLink className="w-5 h-5 text-[#A3D1FF]" />
                </h3>
                <p className="text-white mb-4">Automotive dealership platform launched in 8 weeks.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[#A3D1FF]/10 text-[#A3D1FF] rounded-full text-sm">Fast Launch</span>
                  <span className="px-3 py-1 bg-[#A3D1FF]/10 text-[#A3D1FF] rounded-full text-sm">Analytics</span>
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
                  alt="MyTube MVP"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2 flex items-center justify-between">
                  MyTube
                  <ExternalLink className="w-5 h-5 text-[#A3D1FF]" />
                </h3>
                <p className="text-white mb-4">Video metadata management MVP with AI integration.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[#A3D1FF]/10 text-[#A3D1FF] rounded-full text-sm">AI/ML</span>
                  <span className="px-3 py-1 bg-[#A3D1FF]/10 text-[#A3D1FF] rounded-full text-sm">Scalable</span>
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
                  alt="Fleet Management MVP"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2 flex items-center justify-between">
                  Fleet Management
                  <ExternalLink className="w-5 h-5 text-[#A3D1FF]" />
                </h3>
                <p className="text-white mb-4">Complete fleet tracking solution with mobile app.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[#A3D1FF]/10 text-[#A3D1FF] rounded-full text-sm">Mobile</span>
                  <span className="px-3 py-1 bg-[#A3D1FF]/10 text-[#A3D1FF] rounded-full text-sm">Real-time</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Service Lead Form Section */}
      <section id="contact-form" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <ServiceLeadForm 
            service="Startup MVP"
            benefits={[
              "Faster time-to-market",
              "Higher investor appeal",
              "Lower technical debt",
              "VC-ready architecture",
              "Post-launch support & iteration"
            ]}
            testimonial={{
              quote: "Marc helped us build and launch our MVP in record time, enabling us to secure our first round of funding.",
              author: "Benny Even Ari",
              role: "Investments & Real Estate | MA Financial Economics"
            }}
          />
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">MVP Development Packages</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#1b1b1b] p-8 rounded-xl border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-2">Validation Sprint</h3>
              <div className="text-4xl font-bold text-[#A3D1FF] mb-4">$4,999</div>
              <p className="text-white mb-6">Quick validation of your startup idea</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-[#A3D1FF] mr-3" />
                  <strong>Launch in just 14 days</strong>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-[#A3D1FF] mr-3" />
                  <strong>Core feature development</strong>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-[#A3D1FF] mr-3" />
                  <strong>User authentication system</strong>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-[#A3D1FF] mr-3" />
                  <strong>Conversion-optimized landing page</strong>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-[#A3D1FF] mr-3" />
                  <strong>Analytics for user insights</strong>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-[#A3D1FF] mr-3" />
                  <strong>2-week delivery</strong>
                </li>
              </ul>
              <button
                onClick={() => {
                  const form = document.getElementById('contact-form');
                  form?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="mr_btn mr_btn_primary w-full"
              >
                <span>Get Started</span>
              </button>
            </div>

            <div className="bg-[#1b1b1b] p-8 rounded-xl border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-2">MVP Launch</h3>
              <div className="text-4xl font-bold text-[#A3D1FF] mb-4">$14,999</div>
              <p className="text-white mb-6">Complete MVP development and launch</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-[#A3D1FF] mr-3" />
                  <strong>Investor-ready completion</strong>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-[#A3D1FF] mr-3" />
                  <strong>Full feature set implementation</strong>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-[#A3D1FF] mr-3" />
                  <strong>Comprehensive user management</strong>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-[#A3D1FF] mr-3" />
                  <strong>Admin dashboard with analytics</strong>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-[#A3D1FF] mr-3" />
                  <strong>Payment integration system</strong>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-[#A3D1FF] mr-3" />
                  <strong>6-8 week delivery</strong>
                </li>
              </ul>
              <button
                onClick={() => {
                  const form = document.getElementById('contact-form');
                  form?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="mr_btn mr_btn_primary w-full"
              >
                <span>Get Started</span>
              </button>
            </div>

            <div className="bg-[#1b1b1b] p-8 rounded-xl border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-2">Startup Growth</h3>
              <div className="text-4xl font-bold text-[#A3D1FF] mb-4">Custom</div>
              <p className="text-white mb-6">Comprehensive development and coaching</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-[#A3D1FF] mr-3" />
                  <strong>Investor-ready solution</strong>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-[#A3D1FF] mr-3" />
                  <strong>Custom development roadmap</strong>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-[#A3D1FF] mr-3" />
                  <strong>Technical strategy & architecture</strong>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-[#A3D1FF] mr-3" />
                  <strong>Weekly founder coaching sessions</strong>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-[#A3D1FF] mr-3" />
                  <strong>Scalable infrastructure setup</strong>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-[#A3D1FF] mr-3" />
                  <strong>Custom timeline & support</strong>
                </li>
              </ul>
              <button
                onClick={() => {
                  const form = document.getElementById('contact-form');
                  form?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="mr_btn mr_btn_primary w-full"
              >
                <span>Get Started</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Digital Experience?</h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Let's create an <strong className="text-white">investor-ready MVP in just 30 days</strong> that validates your idea and positions you for success.
          </p>
          <button 
            onClick={() => {
              const form = document.getElementById('contact-form');
              form?.scrollIntoView({ behavior: 'smooth' });
            }}
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