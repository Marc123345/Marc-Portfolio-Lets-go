"use client";

import React from 'react';
import { ArrowRight, Target, Users, Code, Sparkles, Lightbulb, Layers, Database, Zap, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import SplitText from '@/components/SplitText';
import MagneticButton from '@/components/MagneticButton';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface ExpertiseCardProps {
  icon: any;
  title: string;
  description: string;
  features?: string[];
}

function ExpertiseCard({ icon: Icon, title, description, features }: ExpertiseCardProps) {
  return (
    <div className="bg-[#1b1b1b] p-8 rounded-xl border border-white/10 hover:border-[#A3D1FF] transition-all group h-full">
      <div className="relative mb-6">
        <div className="absolute inset-0 bg-[#A3D1FF]/20 blur-xl rounded-full"></div>
        <div className="bg-[#A3D1FF]/10 p-4 rounded-xl relative">
          <Icon className="w-8 h-8 text-[#A3D1FF] group-hover:scale-110 transition-transform" />
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-white">{description}</p>
      {features && (
        <div className="flex flex-wrap gap-2 mt-4">
          {features.map((feature, index) => (
            <span 
              key={index} 
              className="px-3 py-1 bg-white/5 rounded-full text-sm text-[#A3D1FF]"
            >
              {feature}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

function BenefitCard({ title, description }: {
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function ProcessCard({ title, description, items, quote, attribution }: {
  title: string;
  description: string;
  items: string[];
  quote?: string;
  attribution?: string;
}) {
  return (
    <div className="bg-[#1b1b1b] p-8 rounded-xl border border-white/10 hover:border-[#A3D1FF] transition-all h-full flex flex-col">
      <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
      <p className="text-white mb-6">{description}</p>
      <ul className="space-y-2 mb-6">
        {items.map((item, index) => (
          <li key={index} className="flex items-center text-gray-300">
            <ArrowRight className="w-4 h-4 text-[#A3D1FF] mr-2 flex-shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      {quote && (
        <div className="mt-auto pt-6 border-t border-white/10">
          <p className="text-sm italic text-gray-300 leading-relaxed">&ldquo;{quote}&rdquo;</p>
          {attribution && (
            <p className="text-xs text-[#A3D1FF] mt-2 font-medium">— {attribution}</p>
          )}
        </div>
      )}
    </div>
  );
}

export default function AboutPage() {
  const router = useRouter();
  
  // Person schema for structured data
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Marc Friedman",
    "jobTitle": "Web Designer Tel Aviv | Full Stack Designer & Developer",
    "description": "Professional web designer based in Tel Aviv creating exceptional digital experiences for clients worldwide. Expert in web development, UI/UX design, and conversion optimization.",
    "knowsAbout": [
      "Web Design",
      "Web Development",
      "UI/UX Design",
      "SaaS Development",
      "API Development",
      "Design Systems",
      "Conversion Optimization"
    ],
    "url": "https://www.marcfriedmanportfolio.com/about",
    "sameAs": [
      "https://www.linkedin.com/in/portfolio2/",
      "https://www.behance.net/marcfriedmanweb",
      "https://g.co/kgs/78fRZ6r"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Tel Aviv",
      "addressRegion": "Tel Aviv District",
      "addressCountry": "IL"
    }
  };

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: [0.22, 1, 0.36, 1] 
      }
    }
  };

  return (
    <>
      

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://ik.imagekit.io/qcvroy8xpd/PW8VUKH.png?updatedAt=1759693058055&tr=f-webp"
            alt="Marc Friedman - Full Stack Designer & Developer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/90"></div>
        </div>

        <div className="container-custom relative z-10">
          <motion.div 
            className="max-w-3xl"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
          >
            <motion.h1
              className="font-heading text-[clamp(2.2rem,4vw,3rem)] font-semibold tracking-[-0.01em] text-white leading-[1.15] mb-6"
              variants={fadeInUp}
            >
              About Marc Friedman
            </motion.h1>
            <motion.h2
              className="font-body text-xl sm:text-2xl text-[#A3D1FF] mb-6"
              variants={fadeInUp}
            >
              Full Stack Designer & Developer
            </motion.h2>
            <motion.p
              className="font-heading text-2xl sm:text-3xl font-semibold tracking-[-0.01em] leading-[1.15] text-[#A3D1FF] mb-6"
              variants={fadeInUp}
            >
              Solving Digital Challenges Through Design & Development Excellence
            </motion.p>
            <motion.p
              className="text-xl text-gray-300 mb-8"
              variants={fadeInUp}
            >
              I&apos;m Marc. I design and build websites that bring in customers — not just compliments. Over the past 6 years, I&apos;ve shipped <strong className="text-white">50+ projects</strong> for startups, agencies, and brands across the US, Europe, and Africa. Every one of them was designed, coded, and launched by me personally.
            </motion.p>
            <motion.div 
              variants={fadeInUp}
              className="flex flex-wrap gap-4"
            >
              <MagneticButton>
                <Link href="/work" className="mr_btn mr_btn_outline">
                  <span>View Portfolio</span>
                </Link>
              </MagneticButton>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Images */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="aspect-[4/3] overflow-hidden rounded-xl">
                <img
                  src="https://ik.imagekit.io/qcvroy8xpd/PW8VUKH.png?updatedAt=1759693058055&tr=f-webp"
                  alt="Marc Friedman Working"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="aspect-[4/3] overflow-hidden rounded-xl">
                <img 
                  src="https://i.imgur.com/IU0mmH7.jpeg"
                  alt="Marc's Project"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </motion.div>
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="aspect-[4/3] overflow-hidden rounded-xl">
                <img 
                  src="https://ik.imagekit.io/qcvroy8xpd/uoq5Ztg.jpeg"
                  alt="Marc Coding"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="aspect-[4/3] overflow-hidden rounded-xl">
                <img 
                  src="https://ik.imagekit.io/qcvroy8xpd/TTV8Liw.jpg"
                  alt="Technical Skills"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-3xl font-bold mb-12 text-white">The Problems I Solve</h2>
            <div className="bg-[#1b1b1b] p-8 rounded-lg shadow-md mb-16">
              <p className="text-xl text-gray-300 mb-6">
                Most clients come to me saying one of these things:
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-[#A3D1FF] mt-1 mr-3 flex-shrink-0" />
                    <p className="text-white italic">&ldquo;Our website looks like it was built in 2018 and we&apos;re embarrassed to send people there.&rdquo;</p>
                  </div>
                  <div className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-[#A3D1FF] mt-1 mr-3 flex-shrink-0" />
                    <p className="text-white italic">&ldquo;We&apos;re getting traffic but nobody&apos;s filling out the contact form.&rdquo;</p>
                  </div>
                  <div className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-[#A3D1FF] mt-1 mr-3 flex-shrink-0" />
                    <p className="text-white italic">&ldquo;Our site takes forever to load and we&apos;re losing people before they even see what we do.&rdquo;</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-[#A3D1FF] mt-1 mr-3 flex-shrink-0" />
                    <p className="text-white italic">&ldquo;We&apos;re copy-pasting data between 4 different tools and it&apos;s eating our week.&rdquo;</p>
                  </div>
                  <div className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-[#A3D1FF] mt-1 mr-3 flex-shrink-0" />
                    <p className="text-white italic">&ldquo;I know what I want but I can&apos;t explain it to a developer.&rdquo;</p>
                  </div>
                  <div className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-[#A3D1FF] mt-1 mr-3 flex-shrink-0" />
                    <p className="text-white italic">&ldquo;We&apos;ve spent money on marketing but have no idea what&apos;s working.&rdquo;</p>
                  </div>
                </div>
              </div>
              <p className="text-xl text-gray-300 mt-6">
                If any of those sound familiar — that&apos;s where I come in. I don&apos;t just build websites, I fix the problems that are quietly costing you customers.
              </p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="text-3xl font-bold text-white mb-12">My Expertise</h2>
              <div className="grid gap-8">
                <ExpertiseCard
                  icon={Target}
                  title="Strategy & Planning"
                  description="Strategic planning and roadmap development that aligns with your business goals."
                  features={[
                    "Market Research",
                    "User Analysis",
                    "Competitive Analysis",
                    "ROI Planning"
                  ]}
                />
                <ExpertiseCard
                  icon={Users}
                  title="UI/UX Design"
                  description="User-centered design that transforms visitors into customers."
                  features={[
                    "User Research",
                    "Wireframing",
                    "Prototyping",
                    "Design Systems"
                  ]}
                />
                <ExpertiseCard
                  icon={Code}
                  title="Development"
                  description="Modern technologies and performance optimization for exceptional results."
                  features={[
                    "React/Next.js",
                    "Node.js",
                    "TypeScript",
                    "API Development"
                  ]}
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <img
                src="https://ik.imagekit.io/qcvroy8xpd/PW8VUKH.png?updatedAt=1759693058055&tr=f-webp"
                alt="Marc Friedman"
                className="rounded-xl shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1b1b1b]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <img 
                src="https://i.imgur.com/PiKh199.png"
                alt="Technical Skills"
                className="rounded-xl shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="text-3xl font-bold text-white mb-12">Proof, Not Percentages</h2>
              <div className="grid gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-6 text-white">Design</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3 border-l-2 border-[#A3D1FF] pl-4">
                      <div>
                        <div className="text-white font-medium">UI/UX Design</div>
                        <div className="text-gray-400 text-sm">50+ interfaces shipped to production</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3 border-l-2 border-[#A3D1FF] pl-4">
                      <div>
                        <div className="text-white font-medium">Design Systems</div>
                        <div className="text-gray-400 text-sm">Built from scratch for Binns Media, Untapped Africa, and 8 others</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3 border-l-2 border-[#A3D1FF] pl-4">
                      <div>
                        <div className="text-white font-medium">Prototyping</div>
                        <div className="text-gray-400 text-sm">Figma-to-code workflow on every project since 2020</div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-6 text-white">Development</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3 border-l-2 border-[#A3D1FF] pl-4">
                      <div>
                        <div className="text-white font-medium">React / Next.js</div>
                        <div className="text-gray-400 text-sm">Primary stack for 40+ production sites</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3 border-l-2 border-[#A3D1FF] pl-4">
                      <div>
                        <div className="text-white font-medium">TypeScript</div>
                        <div className="text-gray-400 text-sm">Used on every project since 2023</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3 border-l-2 border-[#A3D1FF] pl-4">
                      <div>
                        <div className="text-white font-medium">Node.js</div>
                        <div className="text-gray-400 text-sm">Built 15+ APIs and backends</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3 border-l-2 border-[#A3D1FF] pl-4">
                      <div>
                        <div className="text-white font-medium">PostgreSQL</div>
                        <div className="text-gray-400 text-sm">Production databases for SaaS and B2B platforms</div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-white mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, amount: 0.3 }}
          >
            My Approach
          </motion.h2>
          <div className="grid md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <ProcessCard
                title="Discover"
                description="Understanding your business goals, challenges, and market position."
                items={[
                  "In-depth stakeholder interviews",
                  "Comprehensive market analysis",
                  "User research with real customers",
                  "Competitive audit with actionable insights"
                ]}
                quote="Marc asked questions about our business that our last agency never thought to ask."
                attribution="Omar Turner, Binns Media"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <ProcessCard
                title="Define"
                description="Translating research insights into clear strategies and requirements."
                items={[
                  "Strategic roadmap with measurable KPIs",
                  "Detailed user personas based on research",
                  "Information architecture optimized for conversions",
                  "Technical requirements with scalability in mind"
                ]}
                quote="He turned our half-formed ideas into a plan we could actually execute on."
                attribution="Dinesh Varahni, Varahni Group"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <ProcessCard
                title="Design"
                description="Creating intuitive interfaces and seamless user experiences."
                items={[
                  "Data-driven wireframing process",
                  "Conversion-focused UI design",
                  "Interactive prototyping for user testing",
                  "Comprehensive design systems for consistency"
                ]}
                quote="The first mockup was closer to what we wanted than three months of work with a previous designer."
                attribution="AutoMarginX Team"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <ProcessCard
                title="Develop"
                description="Building robust and scalable solutions with modern technologies."
                items={[
                  "SEO-optimized frontend development",
                  "Secure backend integration",
                  "High quality scores through best practices",
                  "Comprehensive testing & QA process"
                ]}
                quote="Our site went from failing Core Web Vitals to a 98 Lighthouse score. Leads doubled in the first month."
                attribution="Paving Leads"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1b1b1b]">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-3xl font-bold text-white mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, amount: 0.3 }}
          >
            The Work, In Their Words
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="bg-[#2d3035] p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-4">Binns Media Group</h3>
                <p className="text-white mb-4">
                  <strong className="text-white">Challenge:</strong> Outdated platform with poor user engagement and high bounce rates.
                </p>
                <p className="text-white mb-4">
                  <strong className="text-white">Solution:</strong> Complete redesign with modern architecture, intuitive navigation, and optimized performance.
                </p>
                <p className="text-white">
                  <strong className="text-white">Result:</strong> Increased engagement, faster load times, and improved content discovery.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="bg-[#2d3035] p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-4">Wellness TCYS</h3>
                <p className="text-white mb-4">
                  <strong className="text-white">Challenge:</strong> Manual booking processes consuming hours weekly and limiting business growth.
                </p>
                <p className="text-white mb-4">
                  <strong className="text-white">Solution:</strong> Comprehensive digital platform with automated booking and client management.
                </p>
                <p className="text-white">
                  <strong className="text-white">Result:</strong> Dramatic increase in bookings, reduced administrative work, and improved client retention.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="bg-[#2d3035] p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-4">MarginX</h3>
                <p className="text-white mb-4">
                  <strong className="text-white">Challenge:</strong> Dealerships making decisions based on outdated, fragmented market data.
                </p>
                <p className="text-white mb-4">
                  <strong className="text-white">Solution:</strong> Real-time data platform with intuitive visualizations and AI-powered recommendations.
                </p>
                <p className="text-white">
                  <strong className="text-white">Result:</strong> Faster decisions, higher profits, and significant time savings for dealerships.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-3xl font-bold text-white mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Why Work With Me
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="bg-[#2d3035] p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-4">Results-Driven</h3>
                <p className="text-white"> 
                  I focus on creating digital experiences that drive <strong className="text-white">measurable business outcomes</strong>, not just pretty designs. My projects deliver <strong className="text-white">increased conversions</strong>.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="bg-[#2d3035] p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-4">Full-Stack Expertise</h3>
                <p className="text-white"> 
                  With skills spanning design and development, I deliver <strong className="text-white">cohesive solutions without handoff issues</strong>. This integrated approach <strong className="text-white">reduces project timelines</strong>.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="bg-[#2d3035] p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-4">Strategic Partner</h3>
                <p className="text-white"> 
                  I work as an extension of your team, providing <strong className="text-white">strategic guidance beyond just execution</strong>. My clients report <strong className="text-white">improvement in decision-making</strong> efficiency.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Personal Life Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-3xl font-bold text-white mb-8">Beyond Work</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <p className="text-xl text-gray-300 mb-6">
                  When I&apos;m not shipping websites, I&apos;m usually hiking somewhere in the Galilee, hunting for the best coffee in Tel Aviv, or helping junior designers build their first portfolios.
                </p>
                <p className="text-xl text-gray-300">
                  I&apos;ve mentored 20+ designers and contributed to open-source projects that other developers actually use.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square overflow-hidden rounded-xl">
                  <img
                    src="https://ik.imagekit.io/qcvroy8xpd/PW8VUKH.png?updatedAt=1759693058055&tr=f-webp"
                    alt="Marc Friedman Portrait"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="aspect-square overflow-hidden rounded-xl">
                  <img
                    src="https://ik.imagekit.io/qcvroy8xpd/PW8VUKH.png?updatedAt=1759693058055&tr=f-webp"
                    alt="Marc Friedman Working"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="aspect-square overflow-hidden rounded-xl">
                  <img 
                    src="https://ik.imagekit.io/qcvroy8xpd/uoq5Ztg.jpeg"
                    alt="Marc Coding"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="aspect-square overflow-hidden rounded-xl">
                  <img 
                    src="https://ik.imagekit.io/qcvroy8xpd/TTV8Liw.jpg"
                    alt="Marc's Workspace"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Discuss Your Project?</h2>
            <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
              Let's schedule a call to explore how I can help you achieve your digital goals.
            </p>
            <MagneticButton>
              <button onClick={() => router.push('/contact')} className="mr_btn mr_btn_primary">
                <span>Get in Touch</span>
              </button>
            </MagneticButton>
            
            {/* Related Links */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <h3 className="text-xl font-semibold text-white mb-6">Explore My Work</h3>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/work"
                  className="mr_btn mr_btn_outline"
                  title="View portfolio and case studies"
                >
                  <span>Portfolio & Case Studies</span>
                </Link>
                <Link
                  href="/blog"
                  className="mr_btn mr_btn_outline"
                  title="Read design and development insights"
                >
                  <span>Blog & Insights</span>
                </Link>
                <Link
                  href="/contact"
                  className="mr_btn mr_btn_outline"
                  title="Get in touch"
                >
                  <span>Get in Touch</span>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}