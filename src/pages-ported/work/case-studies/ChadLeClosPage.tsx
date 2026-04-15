"use client";

import React, { useRef } from 'react';
import { ArrowRight, Star, Timer, Users, Target, Zap, CircleCheck as CheckCircle2, ArrowUpRight, TrendingUp, Award, Clock } from 'lucide-react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import TextReveal from '@/components/TextReveal';
import AnimatedCounter from '@/components/AnimatedCounter';
import { useRouter } from 'next/navigation';
function FeatureCard({ icon: Icon, title, description }: {
  icon: any;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-[#1b1b1b] p-8 border border-white/10 hover:border-[#A3D1FF] transition-all group">
      <div className="relative mb-6">
        <div className="absolute inset-0 bg-[#A3D1FF]/20 blur-xl rounded-full"></div>
        <div className="bg-[#A3D1FF]/10 p-4 relative">
          <Icon className="w-8 h-8 text-[#A3D1FF] group-hover:scale-110 transition-transform" />
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-white">{description}</p>
    </div>
  );
}

function StatCard({ value, label, icon: Icon }: { value: string; label: string; icon?: any }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className="bg-gradient-to-br from-[#1b1b1b] to-[#0a0a0a] p-8 border border-white/10 hover:border-[#A3D1FF] transition-all text-center group"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
    >
      {Icon && (
        <div className="flex justify-center mb-4">
          <div className="p-3 bg-[#A3D1FF]/10">
            <Icon className="w-6 h-6 text-[#A3D1FF]" />
          </div>
        </div>
      )}
      <div className="text-5xl font-bold text-[#A3D1FF] mb-3">
        {value.includes('+') ? (
          <span>{value}</span>
        ) : value.includes('%') ? (
          <>
            <AnimatedCounter end={parseInt(value)} duration={2000} />
            <span>%</span>
          </>
        ) : value.includes('s') ? (
          <span>{value}</span>
        ) : (
          value
        )}
      </div>
      <div className="text-white text-sm">{label}</div>
    </motion.div>
  );
}

export default function ChadLeClosPage() {
  const router = useRouter();

  return (
    <>
      

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(163,209,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(163,209,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
        </div>

        {/* Hero Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0051a3]/20 via-transparent to-[#A3D1FF]/20 mix-blend-overlay"></div>
          <img
            src="https://i.imgur.com/ApfYPlH.jpg"
            alt="Chad Le Clos Swimming"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/75 to-black"></div>
        </div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 left-10 w-24 h-24 rounded-full bg-[#A3D1FF]/10 blur-3xl"
          animate={{ y: [0, 30, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Content */}
        <div className="container-custom relative z-10">
          <motion.div
            className="max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm rounded-full px-5 py-2 border border-white/10 mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Award className="w-4 h-4 text-[#FFD700]" />
              <span className="text-[#FFD700] text-sm font-medium">Olympic Champion</span>
            </motion.div>

            <h1 className="text-5xl sm:text-7xl font-bold text-white mb-8 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-[#A3D1FF] to-white">
                Chad Le Clos Swimming
              </span>
            </h1>
            <p className="text-2xl text-gray-300 mb-6 leading-relaxed">
              A high-performance landing page designed to convert visitors into swimming clinic registrations for Olympic gold medalist Chad Le Clos.
            </p>
            <p className="text-xl text-white mb-10 leading-relaxed">
              Combining elegant design with conversion-optimized UX, this project delivered exceptional results within days of launch, setting new benchmarks for sports marketing landing pages.
            </p>
            <div className="flex gap-4">
              <a
                href="https://chadleclosswimming.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mr_btn mr_btn_primary inline-flex items-center gap-2"
              >
                <span>Visit Website</span>
                <ArrowUpRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Project Overview</h2>
              <p className="text-white mb-6">
                Chad Le Clos needed a professional landing page to promote his exclusive swimming clinics and streamline the booking process. The project focused on creating an engaging, conversion-optimized page that would showcase his achievements and drive registrations.
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  'Next.js',
                  'Tailwind CSS',
                  'Framer Motion',
                  'Form Optimization',
                  'Conversion Design',
                  'Performance'
                ].map((tag) => (
                  <span key={tag} className="px-4 py-2 bg-white/5 rounded-full text-sm text-[#A3D1FF]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-[#1b1b1b] p-6 border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-4">Key Achievements</h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-[#A3D1FF] mr-3" />
                    200+ sign-ups in just 6 days
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-[#A3D1FF] mr-3" />
                    95% form completion rate
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-[#A3D1FF] mr-3" />
                    2.1s average page load time
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-[#A3D1FF] mr-3" />
                    75% mobile conversion rate
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1b1b1b]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">The Challenge</h2>
              <p className="text-white mb-6">
                The project faced several key challenges:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Star className="w-5 h-5 text-[#FFD700] mt-1 mr-3" />
                  <p className="text-gray-300">Need for rapid deployment to meet upcoming clinic dates</p>
                </li>
                <li className="flex items-start">
                  <Star className="w-5 h-5 text-[#FFD700] mt-1 mr-3" />
                  <p className="text-gray-300">Complex booking form with multiple session options</p>
                </li>
                <li className="flex items-start">
                  <Star className="w-5 h-5 text-[#FFD700] mt-1 mr-3" />
                  <p className="text-gray-300">High-performance requirements for mobile users</p>
                </li>
                <li className="flex items-start">
                  <Star className="w-5 h-5 text-[#FFD700] mt-1 mr-3" />
                  <p className="text-gray-300">Need to effectively communicate value proposition</p>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">The Solution</h2>
              <div className="grid gap-6">
                <FeatureCard
                  icon={Timer}
                  title="Rapid Development"
                  description="Delivered a high-quality landing page in under a week using Next.js and Tailwind CSS."
                />
                <FeatureCard
                  icon={Users}
                  title="Optimized Forms"
                  description="Streamlined booking process with multi-step forms and validation."
                />
                <FeatureCard
                  icon={Zap}
                  title="Performance Focus"
                  description="Optimized for fast loading and smooth interactions on all devices."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Details */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12">Implementation</h2>
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">1. Design & Development</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-white mb-4">
                    The landing page was built with premium positioning in mind:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-[#A3D1FF] mr-3" />
                      Sophisticated visual design
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-[#A3D1FF] mr-3" />
                      Strategic social proof placement
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-[#A3D1FF] mr-3" />
                      Clear service packages
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-[#A3D1FF] mr-3" />
                      Compelling storytelling
                    </li>
                  </ul>
                </div>
                <div className="bg-[#1b1b1b] p-6 border border-white/10">
                  <h4 className="text-lg font-semibold text-white mb-4">Performance Metrics</h4>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-300">Form Completion Rate</span>
                        <span className="text-[#A3D1FF]">95%</span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full">
                        <div className="h-2 bg-[#A3D1FF] rounded-full" style={{ width: '95%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-300">Mobile Conversions</span>
                        <span className="text-[#A3D1FF]">75%</span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full">
                        <div className="h-2 bg-[#A3D1FF] rounded-full" style={{ width: '75%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">2. Conversion Optimization</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-white mb-4">
                    Implemented various conversion optimization techniques:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-[#A3D1FF] mr-3" />
                      Strategic CTA placement
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-[#A3D1FF] mr-3" />
                      Trust-building elements
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-[#A3D1FF] mr-3" />
                      Clear pricing tiers
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-[#A3D1FF] mr-3" />
                      Testimonial integration
                    </li>
                  </ul>
                </div>
                <div className="bg-[#1b1b1b] p-6 border border-white/10">
                  <h4 className="text-lg font-semibold text-white mb-4">Results</h4>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-300">Lead Quality</span>
                        <span className="text-[#A3D1FF]">90%</span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full">
                        <div className="h-2 bg-[#A3D1FF] rounded-full" style={{ width: '90%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-300">Client Satisfaction</span>
                        <span className="text-[#A3D1FF]">95%</span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full">
                        <div className="h-2 bg-[#A3D1FF] rounded-full" style={{ width: '95%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#1b1b1b]">
        <div className="max-w-7xl mx-auto">
          <TextReveal>
            <h2 className="text-4xl font-bold text-white mb-4">Results & Impact</h2>
          </TextReveal>
          <p className="text-xl text-white mb-16 max-w-3xl">
            Exceptional performance metrics demonstrating the power of conversion-focused design
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <StatCard value="200+" label="Sign-ups in 6 Days" icon={TrendingUp} />
            <StatCard value="95" label="Form Completion Rate" icon={CheckCircle2} />
            <StatCard value="75" label="Mobile Conversion Rate" icon={Users} />
            <StatCard value="2.1s" label="Average Load Time" icon={Clock} />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              className="bg-gradient-to-br from-[#0a0a0a] to-black p-8 border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-[#A3D1FF] text-5xl font-bold mb-2">6 Days</div>
              <div className="text-white font-semibold mb-2">From Launch to Success</div>
              <div className="text-white text-sm">Rapid deployment with immediate impact</div>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-[#0a0a0a] to-black p-8 border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-[#A3D1FF] text-5xl font-bold mb-2">90%</div>
              <div className="text-white font-semibold mb-2">Lead Quality Score</div>
              <div className="text-white text-sm">High-intent qualified registrations</div>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-[#0a0a0a] to-black p-8 border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-[#A3D1FF] text-5xl font-bold mb-2">100%</div>
              <div className="text-white font-semibold mb-2">Mobile Responsive</div>
              <div className="text-white text-sm">Optimized for all devices</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Digital Presence?</h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Let's create a high-converting landing page that drives real results for your business.
          </p>
          <button
            onClick={() => router.push('/contact')}
            className="mr_btn mr_btn_primary inline-flex items-center gap-2"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </>
  );
}