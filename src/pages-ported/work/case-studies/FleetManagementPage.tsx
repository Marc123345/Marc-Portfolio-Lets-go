"use client";

import React, { useRef, useState } from 'react';
import { ArrowRight, Code, Database, Shield, Zap, Settings, Users, Target, ChevronRight, TrendingUp, Clock, Award, CircleCheck as CheckCircle2 } from 'lucide-react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import TextReveal from '@/components/TextReveal';
import AnimatedCounter from '@/components/AnimatedCounter';
import { useRouter } from 'next/navigation';
function Feature({ icon: Icon, title, description }: {
  icon: any;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      className="bg-gradient-to-br from-[#1b1b1b] to-[#0a0a0a] p-8 rounded-xl border border-white/10 hover:border-[#A3D1FF] transition-all group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.03 }}
    >
      <div className="mb-6">
        <div className="w-14 h-14 bg-[#A3D1FF]/10 rounded-xl flex items-center justify-center group-hover:bg-[#A3D1FF]/20 transition-colors">
          <Icon className="w-8 h-8 text-[#A3D1FF] group-hover:scale-110 transition-transform" />
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
      <p className="text-white leading-relaxed">{description}</p>
    </motion.div>
  );
}

function StatCard({ value, label, icon: Icon }: { value: string; label: string; icon: any }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className="bg-gradient-to-br from-[#1b1b1b] to-[#0a0a0a] p-8 rounded-xl border border-white/10 hover:border-[#A3D1FF] transition-all"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
    >
      <div className="flex items-center justify-center mb-4">
        <div className="p-3 bg-[#A3D1FF]/10 rounded-lg">
          <Icon className="w-6 h-6 text-[#A3D1FF]" />
        </div>
      </div>
      <div className="text-5xl font-bold text-[#A3D1FF] mb-2 text-center">
        {value.includes('%') ? (
          <>
            <AnimatedCounter end={parseInt(value)} duration={2000} />
            <span>%</span>
          </>
        ) : (
          value
        )}
      </div>
      <div className="text-white text-center text-sm">{label}</div>
    </motion.div>
  );
}

export default function FleetManagementPage() {
  const router = useRouter();

  return (
    <>
      

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(163,209,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(163,209,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
        </div>

        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0051a3]/10 via-transparent to-[#A3D1FF]/10 mix-blend-overlay"></div>
          <img
            src="https://i.imgur.com/ozcuJ2k.jpeg"
            alt="Fleet Management System"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/75 to-black"></div>
        </div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 right-10 w-24 h-24 rounded-full bg-[#A3D1FF]/10 blur-3xl"
          animate={{ y: [0, 30, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

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
              <div className="w-2 h-2 bg-[#A3D1FF] rounded-full animate-pulse"></div>
              <span className="text-[#A3D1FF] text-sm font-medium">Enterprise Fleet Solution</span>
            </motion.div>

            <h1 className="text-5xl sm:text-7xl font-bold text-white mb-8 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-[#A3D1FF] to-white">
                Fleet Management Platform
              </span>
            </h1>
            <p className="text-2xl text-gray-300 mb-6 leading-relaxed">
              A comprehensive enterprise solution revolutionizing fleet operations through real-time tracking, predictive maintenance, and intelligent route optimization.
            </p>
            <p className="text-xl text-white mb-10 leading-relaxed">
              Designed for automotive dealerships and logistics companies, this platform delivers actionable insights that reduce costs, improve efficiency, and enhance driver safety across operations.
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.div
                className="bg-white/5 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/10"
                whileHover={{ scale: 1.05, borderColor: 'rgba(163, 209, 255, 0.5)' }}
              >
                <div className="text-[#A3D1FF] text-2xl font-bold">500+</div>
                <div className="text-white text-sm">Vehicles Tracked</div>
              </motion.div>
              <motion.div
                className="bg-white/5 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/10"
                whileHover={{ scale: 1.05, borderColor: 'rgba(163, 209, 255, 0.5)' }}
              >
                <div className="text-[#A3D1FF] text-2xl font-bold">95%</div>
                <div className="text-white text-sm">User Satisfaction</div>
              </motion.div>
              <motion.div
                className="bg-white/5 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/10"
                whileHover={{ scale: 1.05, borderColor: 'rgba(163, 209, 255, 0.5)' }}
              >
                <div className="text-[#A3D1FF] text-2xl font-bold">35%</div>
                <div className="text-white text-sm">Cost Reduction</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Executive Summary */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black relative">
        <div className="max-w-7xl mx-auto">
          <TextReveal>
            <h2 className="text-4xl font-bold text-white mb-6">Executive Summary</h2>
          </TextReveal>
          <p className="text-xl text-white mb-16 max-w-4xl">
            A comprehensive fleet management platform addressing critical inefficiencies in vehicle tracking, maintenance scheduling, and driver management for automotive dealerships and logistics operations.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              className="bg-gradient-to-br from-[#1b1b1b] to-[#0a0a0a] p-8 rounded-xl border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 bg-[#A3D1FF]/10 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-[#A3D1FF]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">The Problem</h3>
              <p className="text-white leading-relaxed">
                Fleet managers struggled with fragmented systems, manual processes, and lack of real-time visibility, leading to inefficiencies and increased operational costs.
              </p>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-[#1b1b1b] to-[#0a0a0a] p-8 rounded-xl border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 bg-[#A3D1FF]/10 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-[#A3D1FF]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">The Solution</h3>
              <p className="text-white leading-relaxed">
                An integrated platform combining GPS tracking, maintenance scheduling, driver management, and advanced analytics in a unified, mobile-first interface.
              </p>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-[#1b1b1b] to-[#0a0a0a] p-8 rounded-xl border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 bg-[#A3D1FF]/10 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-[#A3D1FF]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">The Impact</h3>
              <p className="text-white leading-relaxed">
                35% reduction in operational costs, 40% faster response times, and 95% user satisfaction, transforming fleet operations industry-wide.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industry Overview */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#1b1b1b]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">The Changing Landscape</h2>
          <p className="text-xl text-white mb-8">
            The automotive industry faces unprecedented challenges that demand innovative solutions. Rising customer expectations, fluctuating market dynamics, and complex inventory management require dealerships to embrace digital transformation.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#2d3035] p-6 rounded-xl border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-4">Market Challenges</h3>
              <ul className="space-y-3">
                {[
                  "Rising customer expectations",
                  "Fluctuating market dynamics",
                  "Complex inventory management",
                  "Need for real-time insights"
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <ChevronRight className="w-5 h-5 text-[#A3D1FF] mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#2d3035] p-6 rounded-xl border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-4">Digital Solutions</h3>
              <ul className="space-y-3">
                {[
                  "Real-time market analysis",
                  "Dynamic pricing tools",
                  "Inventory optimization",
                  "Performance tracking"
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <ChevronRight className="w-5 h-5 text-[#A3D1FF] mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#2d3035] p-6 rounded-xl border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-4">Key Benefits</h3>
              <ul className="space-y-3">
                {[
                  "Increased profit margins",
                  "Reduced inventory costs",
                  "Improved decision-making",
                  "Enhanced customer satisfaction"
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <ChevronRight className="w-5 h-5 text-[#A3D1FF] mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Screenshots */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-8">
              <div className="aspect-[4/3] overflow-hidden rounded-xl">
                <img 
                  src="https://i.imgur.com/EwgHAuK.png"
                  alt="Fleet Management Dashboard"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="aspect-[4/3] overflow-hidden rounded-xl">
                <img 
                  src="https://i.imgur.com/ACKUFLy.jpeg"
                  alt="Fleet Management Mobile App"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            <div className="space-y-8">
              <div className="aspect-[4/3] overflow-hidden rounded-xl">
                <img 
                  src="https://i.imgur.com/gEbm2d0.png"
                  alt="Fleet Analytics"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="aspect-[4/3] overflow-hidden rounded-xl">
                <img 
                  src="https://i.imgur.com/0npIa3u.png"
                  alt="Fleet Tracking Interface"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">Platform Features</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Real-Time Market Analysis</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-[#A3D1FF] mt-1 mr-3" />
                  <p className="text-gray-300">Live market data integration for accurate pricing decisions</p>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-[#A3D1FF] mt-1 mr-3" />
                  <p className="text-gray-300">Competitive analysis tools for market positioning</p>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-[#A3D1FF] mt-1 mr-3" />
                  <p className="text-gray-300">Trend forecasting for inventory planning</p>
                </li>
              </ul>
            </div>
            <div>
              <img 
                src="https://i.imgur.com/EwgHAuK.png"
                alt="Market Analysis Dashboard"
                className="rounded-xl shadow-2xl hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Pricing Tools */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1b1b1b]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <img 
                src="https://i.imgur.com/gEbm2d0.png"
                alt="Dynamic Pricing Interface"
                className="rounded-xl shadow-2xl hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Dynamic Pricing Tools</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-[#A3D1FF] mt-1 mr-3" />
                  <p className="text-gray-300">AI-driven price recommendations based on market conditions</p>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-[#A3D1FF] mt-1 mr-3" />
                  <p className="text-gray-300">Automated price adjustments for optimal margins</p>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-[#A3D1FF] mt-1 mr-3" />
                  <p className="text-gray-300">Historical pricing analysis for strategic planning</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Experience */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12">Mobile Experience</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://i.imgur.com/ACKUFLy.jpeg"
                alt="Fleet Mobile App"
                className="rounded-xl shadow-2xl hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Driver-Focused Design</h3>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-300">
                  <ArrowRight className="w-5 h-5 text-[#A3D1FF] mr-3" />
                  Real-time route updates and navigation
                </li>
                <li className="flex items-center text-gray-300">
                  <ArrowRight className="w-5 h-5 text-[#A3D1FF] mr-3" />
                  Instant communication with dispatch
                </li>
                <li className="flex items-center text-gray-300">
                  <ArrowRight className="w-5 h-5 text-[#A3D1FF] mr-3" />
                  Digital documentation and signatures
                </li>
                <li className="flex items-center text-gray-300">
                  <ArrowRight className="w-5 h-5 text-[#A3D1FF] mr-3" />
                  Offline functionality for remote areas
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Impact & Results */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <TextReveal>
            <h2 className="text-4xl font-bold text-white mb-4">Measurable Impact & Results</h2>
          </TextReveal>
          <p className="text-xl text-white mb-16 max-w-3xl">
            Comprehensive metrics demonstrating significant improvements across all key performance indicators
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <StatCard value="20" label="Revenue Growth" icon={TrendingUp} />
            <StatCard value="35" label="Faster Decisions" icon={Zap} />
            <StatCard value="40" label="Time Saved" icon={Clock} />
            <StatCard value="95" label="User Satisfaction" icon={Award} />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              className="bg-gradient-to-br from-[#1b1b1b] to-[#0a0a0a] p-8 rounded-xl border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-[#A3D1FF] text-5xl font-bold mb-2">500+</div>
              <div className="text-white font-semibold mb-2">Vehicles Managed</div>
              <div className="text-white text-sm">Across multiple fleet operations daily</div>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-[#1b1b1b] to-[#0a0a0a] p-8 rounded-xl border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-[#A3D1FF] text-5xl font-bold mb-2">$1.5M</div>
              <div className="text-white font-semibold mb-2">Cost Savings</div>
              <div className="text-white text-sm">Annual operational cost reduction</div>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-[#1b1b1b] to-[#0a0a0a] p-8 rounded-xl border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-[#A3D1FF] text-5xl font-bold mb-2">99.8%</div>
              <div className="text-white font-semibold mb-2">Platform Uptime</div>
              <div className="text-white text-sm">Ensuring reliable fleet monitoring</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Future Development */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1b1b1b]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">Future Development</h2>
          <p className="text-xl text-white mb-8">
            As technology continues to advance, the platform is evolving to meet tomorrow&apos;s challenges:
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <Feature
              icon={Database}
              title="AI Integration"
              description="Enhanced AI capabilities for predictive analytics and automated decision-making."
            />
            <Feature
              icon={Code}
              title="API Expansion"
              description="Extended API capabilities for seamless third-party integrations."
            />
            <Feature
              icon={Shield}
              title="Advanced Security"
              description="Enhanced security features to protect sensitive business data."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Transform Your Dealership Operations</h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Ready to revolutionize your automotive business with data-driven solutions?
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