"use client";

import React from 'react';
import { ArrowRight, CircleCheck as CheckCircle, Building2, Globe, Rocket, Users, Calendar, TrendingUp } from 'lucide-react';
import ServiceLeadForm from '@/components/ServiceLeadForm';
import MagneticButton from '@/components/MagneticButton';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

function BenefitCard({ icon: Icon, title, description }: {
  icon: any;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      className="bg-[#1b1b1b] p-6 rounded-xl border border-white/10 hover:border-[#A3D1FF] transition-all group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="relative mb-4">
        <div className="absolute inset-0 bg-[#A3D1FF]/20 blur-xl rounded-full"></div>
        <div className="bg-[#A3D1FF]/10 p-3 rounded-xl relative w-fit">
          <Icon className="w-6 h-6 text-[#A3D1FF] group-hover:scale-110 transition-transform" />
        </div>
      </div>
      <h3 className="text-lg font-semibold mb-2 text-white">{title}</h3>
      <p className="text-white text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
}

function ProcessStep({ number, title, description }: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      className="flex items-start gap-4"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="bg-[#A3D1FF] text-black min-w-[3rem] h-12 rounded-full flex items-center justify-center font-bold text-lg">
        {number}
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
        <p className="text-white leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}

function ExampleCard({ title, description }: {
  title: string;
  description: string;
}) {
  return (
    <motion.div
      className="bg-[#1b1b1b] p-6 rounded-xl border border-white/10 hover:border-[#A3D1FF] transition-all"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h3 className="text-lg font-semibold mb-3 text-white">{title}</h3>
      <p className="text-white text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
}

export default function ExternalWebDepartmentPage() {
  const router = useRouter();
  const calendlyLink = "https://calendly.com/marc-friedman-web-design--meeting-link/30min";

  return (
    <>
      

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Award-winning websites that turn attention into revenue for multi-location and multi-brand companies
              </h1>
              <p className="text-xl text-white mb-8 leading-relaxed">
                If you're opening new locations, rolling out new brands, or running recurring campaigns, I act as your <strong className="text-white">external web department</strong> – designing, building, and maintaining every site you launch.
              </p>

              {/* Benefit Bullets */}
              <ul className="space-y-3 mb-10">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#A3D1FF] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-lg">Consistent, on-brand sites across all your locations and brands</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#A3D1FF] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-lg">Faster launches with a reusable design system</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#A3D1FF] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-lg">Pages built to capture leads, bookings, and sales – not just look good</span>
                </li>
              </ul>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <MagneticButton>
                  <a
                    href={calendlyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr_btn mr_btn_primary inline-flex items-center"
                  >
                    <span>Book a strategy call</span>
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </MagneticButton>
                <button
                  onClick={() => document.getElementById('free-landing-page')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-6 py-3 border border-white/20 text-white rounded-lg hover:bg-white/5 transition-all"
                >
                  See how the free landing page works
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 1: Who this is for */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              For teams managing many brands, locations, or launches
            </h2>
            <p className="text-xl text-white mb-10 leading-relaxed max-w-4xl">
              If you lead marketing or growth for a company with multiple brands, locations, or recurring campaigns, you already know how hard it is to keep every site on-brand, up to date, and actually driving revenue. Instead of juggling freelancers or building an in-house web team, you get a single expert partner who handles your web production from end to end.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <Building2 className="w-6 h-6 text-[#A3D1FF] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Franchise and chain businesses</h3>
                  <p className="text-white">Opening new branches and maintaining brand consistency</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Globe className="w-6 h-6 text-[#A3D1FF] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Multi-brand groups and holding companies</h3>
                  <p className="text-white">Managing several websites across different brands</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users className="w-6 h-6 text-[#A3D1FF] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Healthcare, education, and service networks</h3>
                  <p className="text-white">With many locations requiring individual web presence</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Rocket className="w-6 h-6 text-[#A3D1FF] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Event-driven teams</h3>
                  <p className="text-white">Running repeated launches and promotions</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 2: What I do */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              What you get when we work together
            </h2>
            <p className="text-xl text-white mb-12">
              I focus on turning your web presence into a reliable acquisition channel, not just a set of online brochures.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <BenefitCard
                icon={Rocket}
                title="Ongoing website production"
                description="New sites and landing pages for every location, brand, or campaign you launch."
              />
              <BenefitCard
                icon={TrendingUp}
                title="Redesigns of underperforming sites"
                description="Clearer UX, faster load times, and layouts built around your real business goals."
              />
              <BenefitCard
                icon={Building2}
                title="A scalable design system"
                description="Shared components, styles, and guidelines so future launches are faster and more consistent."
              />
              <BenefitCard
                icon={Calendar}
                title="Continuous improvements"
                description="Iterative updates based on performance data, not random redesigns."
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 3: Free Landing Page */}
      <section id="free-landing-page" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0a0a0a] to-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-[#1b1b1b] border border-[#A3D1FF]/30 rounded-2xl p-8 lg:p-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Try it with a free landing page for one brand or location
              </h2>
              <p className="text-xl text-white mb-8 leading-relaxed">
                To make it easy to see how this works in your world, first-time partners can get a custom landing page for one brand or location at no design or build fee.
              </p>

              {/* What "free" means */}
              <div className="bg-black/50 rounded-xl p-6 mb-8">
                <h3 className="text-lg font-semibold text-white mb-4">What this includes:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#A3D1FF] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">You choose a brand, location, or campaign that needs a new landing page</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#A3D1FF] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">I design and build a conversion-ready page that matches your brand and goals</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#A3D1FF] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">You can use the page whether or not we continue working together</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#A3D1FF] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">If additional tools, paid apps, or media spend are required, those costs stay on your side</span>
                  </li>
                </ul>
              </div>

              {/* What you'll walk away with */}
              <h3 className="text-lg font-semibold text-white mb-4">What you'll walk away with:</h3>
              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <div className="bg-black/30 rounded-lg p-4">
                  <p className="text-gray-300">A live landing page you can send real traffic to</p>
                </div>
                <div className="bg-black/30 rounded-lg p-4">
                  <p className="text-gray-300">Clear recommendations on how to roll this approach out across other brands or locations</p>
                </div>
                <div className="bg-black/30 rounded-lg p-4">
                  <p className="text-gray-300">A sense of what it's like to have an external web department on call</p>
                </div>
              </div>

              {/* CTA */}
              <div className="text-center">
                <MagneticButton>
                  <a
                    href={calendlyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr_btn mr_btn_primary inline-flex items-center text-lg"
                  >
                    <span>Book a 20-minute Web Department Strategy Call</span>
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </MagneticButton>
                <p className="text-white mt-4 text-sm">
                  We'll choose the best brand/location for your free landing page and map out what a scalable web system could look like for you.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 4: Process */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">
              How the process works
            </h2>

            <div className="space-y-8 max-w-4xl">
              <ProcessStep
                number="1"
                title="Discovery call"
                description="We map your brands, locations, and current web setup, and define a clear goal for the first landing page (leads, bookings, orders, or something else)."
              />
              <ProcessStep
                number="2"
                title="Free landing page build"
                description="I design and develop the page, integrating your brand guidelines and any existing assets."
              />
              <ProcessStep
                number="3"
                title="Launch and review"
                description="You send traffic, we review early performance, and I share a short, plain-language report."
              />
              <ProcessStep
                number="4"
                title="Ongoing partnership (optional)"
                description="If it's a fit, we design a monthly or project-based engagement that matches how often you launch new sites or campaigns."
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 5: Examples */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">
              Examples of outcomes I aim for
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <ExampleCard
                title="Multi-location clinic group"
                description="Built a reusable design system and new location templates, helping the team launch new location sites in weeks instead of months."
              />
              <ExampleCard
                title="Food & beverage franchise"
                description="Redesigned key location pages and landing flows, contributing to more online orders and easier campaign launches."
              />
              <ExampleCard
                title="Portfolio of brands"
                description="Consolidated scattered microsites into a single system, making it easier to keep everything on-brand and consistent."
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 6: Why me */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Why teams choose me as their external web department
            </h2>

            <div className="space-y-4">
              <p className="text-xl text-gray-300">
                <strong className="text-white">Award-winning websites</strong> focused on performance, not just aesthetics
              </p>
              <p className="text-xl text-gray-300">
                Experience shipping sites for <strong className="text-white">growth-minded, multi-location and multi-brand teams</strong>
              </p>
              <p className="text-xl text-gray-300">
                <strong className="text-white">Direct access</strong> – you message one person who understands your brands and systems
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 7: Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-[#0a0a0a]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to see how this works for your brands and locations?
            </h2>
            <p className="text-xl text-white mb-10 leading-relaxed">
              If you're juggling multiple brands, branches, or campaigns and need a reliable way to ship high-performing sites without adding headcount, let's talk. We'll use your free landing page as a low-risk way to test how an external web department can support your team.
            </p>

            <MagneticButton>
              <a
                href={calendlyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mr_btn mr_btn_primary inline-flex items-center text-lg"
              >
                <span>Book your Web Department Strategy Call</span>
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </MagneticButton>
          </motion.div>
        </div>
      </section>

      {/* Lead Form Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Or send me your details
            </h2>
            <p className="text-white">
              Share your project details and I'll get back to you within 24 hours
            </p>
          </div>
          <ServiceLeadForm
            benefits={[
              'Single expert partner for all your web production',
              'Consistent branding across all locations and brands',
              'Faster launches with reusable design systems',
              'Free landing page to test the approach',
              'Direct access without managing a team'
            ]}
          />
        </div>
      </section>
    </>
  );
}
