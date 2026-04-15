"use client";

import React, { useRef, useEffect, useState } from 'react';
import { ArrowRight, Code, Database, Shield, Zap, Settings, Users, Target, CircleCheck as CheckCircle2, ArrowUpRight, Star, TrendingUp, Clock, DollarSign, ChartBar as BarChart3, ChartLine as LineChart, Activity, Layers, GitBranch, Workflow } from 'lucide-react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import TextReveal from '@/components/TextReveal';
import MagneticButton from '@/components/MagneticButton';
import HoverCard3D from '@/components/HoverCard3D';
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

function StatCard({ value, label, icon: Icon, delay = 0 }: { value: string; label: string; icon?: any; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className="bg-gradient-to-br from-[#1b1b1b] to-[#0a0a0a] p-8 border border-white/10 hover:border-[#A3D1FF] transition-all text-center group relative overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.05, y: -5 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#A3D1FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      {Icon && (
        <div className="mb-4 flex justify-center">
          <div className="p-3 bg-[#A3D1FF]/10">
            <Icon className="w-6 h-6 text-[#A3D1FF]" />
          </div>
        </div>
      )}
      <div className="text-5xl font-bold text-[#A3D1FF] mb-3 relative z-10">
        <AnimatedCounter end={parseInt(value)} duration={2000} />
        {value.includes('%') && <span>%</span>}
      </div>
      <div className="text-white text-sm font-medium relative z-10">{label}</div>
    </motion.div>
  );
}

function ProcessStep({ number, title, description, delay = 0 }: { number: string; title: string; description: string; delay?: number }) {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
    >
      <div className="flex gap-6">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#A3D1FF] to-[#0051a3] flex items-center justify-center text-white font-bold text-lg">
            {number}
          </div>
        </div>
        <div className="flex-1 pb-8">
          <h4 className="text-xl font-bold text-white mb-2">{title}</h4>
          <p className="text-white leading-relaxed">{description}</p>
        </div>
      </div>
      <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-gradient-to-b from-[#A3D1FF]/50 to-transparent"></div>
    </motion.div>
  );
}

function MetricVisualization({ label, before, after, unit = '%' }: { label: string; before: number; after: number; unit?: string }) {
  const [progress, setProgress] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setProgress(100), 100);
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  const improvement = ((after - before) / before * 100).toFixed(0);

  return (
    <motion.div
      ref={ref}
      className="bg-[#1b1b1b] p-6 border border-white/10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="flex justify-between items-center mb-4">
        <span className="text-white font-semibold">{label}</span>
        <span className="text-[#A3D1FF] text-sm font-bold">+{improvement}%</span>
      </div>
      <div className="space-y-3">
        <div>
          <div className="flex justify-between text-sm mb-2">
            <span className="text-gray-500">Before</span>
            <span className="text-white">{before}{unit}</span>
          </div>
          <div className="h-2 bg-white/5 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gray-600"
              initial={{ width: 0 }}
              animate={{ width: `${(before / after) * 100}%` }}
              transition={{ duration: 1, delay: 0.2 }}
            />
          </div>
        </div>
        <div>
          <div className="flex justify-between text-sm mb-2">
            <span className="text-gray-300">After</span>
            <span className="text-[#A3D1FF] font-bold">{after}{unit}</span>
          </div>
          <div className="h-2 bg-white/5 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-[#A3D1FF] to-[#0051a3]"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 1, delay: 0.4 }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function AutoMarginPage() {
  const router = useRouter();
  const heroRef = useRef<HTMLElement>(null);
  
  // Parallax scrolling effect
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <>
      

      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden"
      >
        {/* Animated Background Grid */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(163,209,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(163,209,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
        </div>

        {/* Hero Image with Enhanced Parallax */}
        <motion.div className="absolute inset-0 z-0" style={{ y, opacity }}>
          <div className="absolute inset-0 bg-gradient-to-br from-[#0051a3]/20 via-transparent to-[#A3D1FF]/20 mix-blend-overlay"></div>
          <img
            src="https://i.imgur.com/PiKh199.png"
            alt="AutoMarginX dealership management platform - real-time analytics dashboard showing market data and profit optimization tools for automotive dealers"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/75 to-black"></div>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 rounded-full bg-[#A3D1FF]/10 blur-3xl"
          animate={{
            y: [0, 30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-[#0051a3]/10 blur-3xl"
          animate={{
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Content */}
        <div className="container-custom relative z-10">
          <motion.div 
            className="max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10 hover:border-[#A3D1FF] transition-all duration-300 mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-2 h-2 bg-[#A3D1FF] rounded-full animate-pulse"></div>
              <span className="text-[#A3D1FF] text-sm font-medium">Award-Winning SaaS Platform</span>
            </motion.div>
            <h1 className="text-5xl sm:text-7xl font-bold text-white mb-6 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-[#A3D1FF] to-white">
                AutoMarginX
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Revolutionize your dealership with AutoMarginX—the award-winning platform that leverages real-time data to drive results.
            </p>
            <p className="text-xl text-gray-300 mb-8">
              Designed to empower dealerships, AutoMarginX delivers actionable insights that:
            </p>
            <ul className="text-gray-300 text-xl mb-8 list-disc pl-6 space-y-2">
              <li>Maximize pricing strategies for enhanced profit margins</li>
              <li>Optimize inventory management to streamline operations</li>
            </ul>
            <p className="text-xl text-white font-bold mb-8">
              By turning data into decisions, AutoMarginX transforms every aspect of your business:
            </p>
            <ul className="text-white text-xl font-bold mb-8 list-disc pl-6 space-y-2">
              <li>Boosting efficiency</li>
              <li>Increasing profits</li>
              <li>Keeping you ahead of the competition</li>
            </ul>
            <div className="flex gap-4">
              <MagneticButton>
                <a
                  href="https://marc123345.github.io/Automargin/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr_btn mr_btn_primary inline-flex items-center gap-2"
                >
                  <span>Explore AutoMargin</span>
                  <ArrowUpRight className="w-5 h-5" />
                </a>
              </MagneticButton>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Executive Summary */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0051a3]/5 to-black"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            className="max-w-4xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-[#A3D1FF] text-sm font-semibold tracking-wider uppercase mb-4 block">Executive Summary</span>
            <h2 className="text-4xl font-bold text-white mb-6">Transforming Automotive Dealerships Through Data Intelligence</h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              AutoMarginX revolutionizes how automotive dealerships operate by consolidating fragmented market data into a unified, real-time intelligence platform. This comprehensive SaaS solution empowers dealers to make data-driven decisions that directly impact profitability and operational efficiency.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <motion.div
              className="bg-gradient-to-br from-[#1b1b1b] to-[#0a0a0a] p-8 border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 bg-[#A3D1FF]/10 flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-[#A3D1FF]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">The Challenge</h3>
              <p className="text-white">Dealerships struggled with outdated, fragmented data systems that made real-time decision-making impossible and hindered competitive positioning.</p>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-[#1b1b1b] to-[#0a0a0a] p-8 border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 bg-[#A3D1FF]/10 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-[#A3D1FF]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">The Solution</h3>
              <p className="text-white">A comprehensive SaaS platform providing real-time market analytics, dynamic pricing tools, and inventory optimization powered by AI-driven insights.</p>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-[#1b1b1b] to-[#0a0a0a] p-8 border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 bg-[#A3D1FF]/10 flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-[#A3D1FF]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">The Impact</h3>
              <p className="text-white">35% faster decision-making, 20% profit increase, and 40% time savings across operations, transforming dealership performance metrics industry-wide.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Context & Background */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#1b1b1b]">
        <div className="max-w-7xl mx-auto">
          <TextReveal>
            <h2 className="text-4xl font-bold text-white mb-8 tracking-tight">Project Context & Scope</h2>
          </TextReveal>
          <motion.div
            className="grid md:grid-cols-2 gap-12 mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">The Market Opportunity</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                The automotive dealership industry was facing a critical challenge: existing tools were fragmented, outdated, and unable to provide the real-time insights needed to compete in an increasingly dynamic market.
              </p>
              <p className="text-gray-300 leading-relaxed">
                AutoMarginX was conceived to fill this gap by building a comprehensive platform that would consolidate multiple data sources, provide actionable insights, and enable dealerships to make confident, data-driven decisions in real-time.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">My Role & Approach</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                As the lead designer and developer, I was responsible for the entire product lifecycle—from initial market research and user interviews to final implementation and deployment. This comprehensive involvement ensured a cohesive vision throughout.
              </p>
              <div className="bg-[#0a0a0a] p-6 border border-white/10">
                <p className="text-[#A3D1FF] font-semibold mb-2">Project Duration</p>
                <p className="text-white text-2xl font-bold mb-4">6 Months</p>
                <p className="text-white text-sm">From concept to production launch with continuous iteration based on user feedback</p>
              </div>
            </div>
          </motion.div>
          <motion.p
            className="text-xl text-gray-300 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Built from the ground up with a focus on scalability, performance, and user experience, AutoMarginX provides real-time data and tools that measurably increase profits and improve operational efficiency across automotive dealerships.
          </motion.p>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-white mb-4">Core Competencies</h3>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-[#A3D1FF] mr-3" />
                  Product Design
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-[#A3D1FF] mr-3" />
                  Research
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-[#A3D1FF] mr-3" />
                  Complex Systems
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-[#A3D1FF] mr-3" />
                  Design Systems
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-white mb-4">Industry Focus</h3>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-[#A3D1FF] mr-3" />
                  SaaS Development
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-[#A3D1FF] mr-3" />
                  B2B Solutions
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-[#A3D1FF] mr-3" />
                  Automotive Market
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <HoverCard3D className="bg-[#1b1b1b] p-8 border-l-4 border-[#0051a3]">
            <div className="flex items-center gap-8">
              <img 
                src="https://i.imgur.com/3DtZKd7.jpeg"
                alt="Peng Zhang, VP Product at AutoMarginX - client testimonial photo"
                className="w-24 h-24 rounded-full object-cover"
              />
              <div>
                <p className="text-xl text-gray-300 italic mb-4">
                  "Marc excels in B2B SaaS and marketplace design. His ability to understand business needs and translate them into effective, data-driven solutions significantly enhanced the user experience and technical execution."
                </p>
                <p className="text-white font-bold">— Peng Zang, VP Product, AutoMarginX</p>
              </div>
            </div>
          </HoverCard3D>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1b1b1b]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-6 tracking-tight">Challenges</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Star className="w-5 h-5 text-[#FFD700] mt-1 mr-3" />
                  <div>
                    <p className="text-white font-semibold mb-2">Fragmented Data</p>
                    <p className="text-gray-300">Outdated, fragmented market data making decision-making slow and inefficient</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#A3D1FF] mt-1 mr-3" />
                  <div>
                    <p className="text-white font-semibold mb-2">Poor User Experience</p>
                    <p className="text-gray-300">Inconsistent tools leading to reduced operational performance</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#A3D1FF] mt-1 mr-3" />
                  <div>
                    <p className="text-white font-semibold mb-2">Manual Processes</p>
                    <p className="text-gray-300">Time-consuming manual data entry preventing quick market responses</p>
                  </div>
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-6 tracking-tight">Solutions</h2>
              <div className="grid gap-6">
                <FeatureCard
                  icon={Target}
                  title="Data Platform"
                  description="Centralized diverse sources into one intuitive platform, enhancing decision capabilities."
                />
                <FeatureCard
                  icon={Zap}
                  title="Real-time Analytics"
                  description="Adjusts pricing and inventory in real time, based on live market and internal data."
                />
                <FeatureCard
                  icon={Users}
                  title="Intuitive Interface"
                  description="Streamlined, easy-to-use interfaces to reduce learning curves and boost adoption."
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Design Process & Methodology */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <TextReveal>
            <h2 className="text-4xl font-bold text-white mb-4">Design Process & Methodology</h2>
          </TextReveal>
          <p className="text-xl text-white mb-16 max-w-3xl">A systematic approach combining user research, iterative design, and data-driven decision making</p>

          <div className="space-y-0">
            <ProcessStep
              number="1"
              title="Discovery & Research"
              description="Conducted extensive interviews with 25+ dealership managers and sales teams to understand pain points, workflows, and decision-making processes. Analyzed competitor solutions and identified critical gaps in the market."
              delay={0.1}
            />
            <ProcessStep
              number="2"
              title="User Personas & Journey Mapping"
              description="Created detailed personas for different user types (managers, sales staff, inventory specialists) and mapped their daily workflows to identify optimization opportunities and critical touchpoints."
              delay={0.2}
            />
            <ProcessStep
              number="3"
              title="Information Architecture"
              description="Designed a comprehensive data structure that could handle multiple data sources while maintaining performance. Prioritized features based on user needs and business impact."
              delay={0.3}
            />
            <ProcessStep
              number="4"
              title="Wireframing & Prototyping"
              description="Developed low-fidelity wireframes followed by high-fidelity prototypes. Conducted usability testing with 15+ users, iterating based on feedback to refine the user experience."
              delay={0.4}
            />
            <ProcessStep
              number="5"
              title="Visual Design & Design System"
              description="Created a comprehensive design system with reusable components, ensuring consistency across the platform. Focused on data visualization and making complex information easily digestible."
              delay={0.5}
            />
            <ProcessStep
              number="6"
              title="Development & Implementation"
              description="Built the platform using modern technologies with a focus on performance, scalability, and maintainability. Implemented real-time data processing and advanced analytics capabilities."
              delay={0.6}
            />
            <ProcessStep
              number="7"
              title="Testing & Iteration"
              description="Conducted extensive A/B testing, performance optimization, and gathered continuous feedback from beta users. Iterated rapidly based on real-world usage patterns and user feedback."
              delay={0.7}
            />
          </div>
        </div>
      </section>

      {/* Key Features Showcase */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#1b1b1b]">
        <div className="max-w-7xl mx-auto">
          <TextReveal>
            <h2 className="text-4xl font-bold text-white mb-4">Platform Features & Innovation</h2>
          </TextReveal>
          <p className="text-xl text-white mb-16 max-w-3xl">Comprehensive toolset designed to address every aspect of dealership operations</p>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              className="bg-gradient-to-br from-[#0a0a0a] to-[#1b1b1b] p-8 border border-white/10 hover:border-[#A3D1FF]/50 transition-all group"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-[#A3D1FF]/10 group-hover:bg-[#A3D1FF]/20 transition-colors">
                  <Activity className="w-8 h-8 text-[#A3D1FF]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Real-Time Market Analytics</h3>
                  <p className="text-white">Live data aggregation from multiple sources providing instant market insights</p>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-[#A3D1FF] mr-3 flex-shrink-0" />
                  <span>Automated data collection from 50+ market sources</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-[#A3D1FF] mr-3 flex-shrink-0" />
                  <span>Real-time competitive pricing analysis</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-[#A3D1FF] mr-3 flex-shrink-0" />
                  <span>Trend forecasting with AI-powered predictions</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-[#0a0a0a] to-[#1b1b1b] p-8 border border-white/10 hover:border-[#A3D1FF]/50 transition-all group"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-[#A3D1FF]/10 group-hover:bg-[#A3D1FF]/20 transition-colors">
                  <DollarSign className="w-8 h-8 text-[#A3D1FF]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Dynamic Pricing Engine</h3>
                  <p className="text-white">Intelligent pricing recommendations based on comprehensive market analysis</p>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-[#A3D1FF] mr-3 flex-shrink-0" />
                  <span>AI-driven price optimization algorithms</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-[#A3D1FF] mr-3 flex-shrink-0" />
                  <span>Profit margin projection modeling</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-[#A3D1FF] mr-3 flex-shrink-0" />
                  <span>Automated repricing based on market conditions</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-[#0a0a0a] to-[#1b1b1b] p-8 border border-white/10 hover:border-[#A3D1FF]/50 transition-all group"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-[#A3D1FF]/10 group-hover:bg-[#A3D1FF]/20 transition-colors">
                  <Layers className="w-8 h-8 text-[#A3D1FF]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Inventory Optimization</h3>
                  <p className="text-white">Smart inventory management with predictive analytics</p>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-[#A3D1FF] mr-3 flex-shrink-0" />
                  <span>Demand forecasting and stock recommendations</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-[#A3D1FF] mr-3 flex-shrink-0" />
                  <span>Aging inventory alerts and action suggestions</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-[#A3D1FF] mr-3 flex-shrink-0" />
                  <span>Turnover optimization strategies</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-[#0a0a0a] to-[#1b1b1b] p-8 border border-white/10 hover:border-[#A3D1FF]/50 transition-all group"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-[#A3D1FF]/10 group-hover:bg-[#A3D1FF]/20 transition-colors">
                  <BarChart3 className="w-8 h-8 text-[#A3D1FF]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Advanced Reporting Suite</h3>
                  <p className="text-white">Comprehensive analytics dashboard with customizable reports</p>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-[#A3D1FF] mr-3 flex-shrink-0" />
                  <span>Customizable KPI dashboards</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-[#A3D1FF] mr-3 flex-shrink-0" />
                  <span>Automated report generation and distribution</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-[#A3D1FF] mr-3 flex-shrink-0" />
                  <span>Performance tracking across all metrics</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Performance Metrics & Before/After */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <TextReveal>
            <h2 className="text-4xl font-bold text-white mb-4">Measurable Business Impact</h2>
          </TextReveal>
          <p className="text-xl text-white mb-16 max-w-3xl">Quantified improvements across all key performance indicators</p>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <MetricVisualization label="Decision Making Speed" before={100} after={135} unit="% efficiency" />
            <MetricVisualization label="Profit Margins" before={100} after={120} unit="% increase" />
            <MetricVisualization label="User Satisfaction" before={65} after={90} unit="% score" />
            <MetricVisualization label="Operational Efficiency" before={100} after={140} unit="% improvement" />
          </div>
        </div>
      </section>

      {/* Results Dashboard */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#1b1b1b]">
        <div className="max-w-7xl mx-auto">
          <TextReveal>
            <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">Results & Impact Dashboard</h2>
          </TextReveal>
          <p className="text-xl text-white mb-16 max-w-3xl">Comprehensive metrics demonstrating platform success across multiple dimensions</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <StatCard
              value="35"
              label="Faster Decision Making"
              icon={Clock}
              delay={0.1}
            />
            <StatCard
              value="20"
              label="Profit Increase"
              icon={TrendingUp}
              delay={0.2}
            />
            <StatCard
              value="90"
              label="User Satisfaction Score"
              icon={Star}
              delay={0.3}
            />
            <StatCard
              value="40"
              label="Time Saved Daily"
              icon={Zap}
              delay={0.4}
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              className="bg-gradient-to-br from-[#0a0a0a] to-black p-8 border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-[#A3D1FF] text-5xl font-bold mb-2">500+</div>
              <div className="text-white font-semibold mb-2">Active Dealerships</div>
              <div className="text-white text-sm">Using AutoMarginX daily across North America</div>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-[#0a0a0a] to-black p-8 border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-[#A3D1FF] text-5xl font-bold mb-2">$2M+</div>
              <div className="text-white font-semibold mb-2">Additional Revenue</div>
              <div className="text-white text-sm">Generated for clients in first year</div>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-[#0a0a0a] to-black p-8 border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="text-[#A3D1FF] text-5xl font-bold mb-2">99.9%</div>
              <div className="text-white font-semibold mb-2">Platform Uptime</div>
              <div className="text-white text-sm">Ensuring reliable access to critical data</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Future Development */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1b1b1b]">
        <div className="max-w-7xl mx-auto">
          <TextReveal>
            <h2 className="text-3xl font-bold text-white mb-8 tracking-tight">Future Development & Vision</h2>
          </TextReveal>
          <motion.p 
            className="text-xl text-gray-300 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            AutoMarginX continues to innovate with upcoming features aimed at further revolutionizing the dealership industry:
          </motion.p>
          <div className="grid md:grid-cols-3 gap-8">
            <HoverCard3D className="bg-[#1b1b1b] p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4 tracking-tight">Predictive Analytics</h3>
              <p className="text-gray-300">
                AI-powered tools to forecast market trends and customer demand, enabling proactive decision-making.
              </p>
            </HoverCard3D>
            <HoverCard3D className="bg-[#1b1b1b] p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4 tracking-tight">Automated Reporting</h3>
              <p className="text-gray-300">
                Streamlined reporting features for managers, reducing manual work and improving data accessibility.
              </p>
            </HoverCard3D>
            <HoverCard3D className="bg-[#1b1b1b] p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4 tracking-tight">AR/VR Integration</h3>
              <p className="text-gray-300">
                Exploring how AR/VR can be used to visualize vehicle inventories and enhance customer engagement.
              </p>
            </HoverCard3D>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">Ready to Transform Your Dealership?</h2>
            <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
              Let's create a data-driven solution that drives real results for your business.
            </p>
            <MagneticButton>
              <button
                onClick={() => router.push('/contact')}
                className="mr_btn mr_btn_primary inline-flex items-center gap-2"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </MagneticButton>
          </motion.div>
        </div>
      </section>
    </>
  );
}