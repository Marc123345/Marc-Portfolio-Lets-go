"use client";

import { ArrowRight, Heart, TrendingUp, MessageSquare, Eye, HandHeart, Rocket, Users, Star, CircleCheck as CheckCircle2, Quote, Shield } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import ServiceLeadForm from '@/components/ServiceLeadForm';
import Link from 'next/link';
const ACCENT = '#C8913C';
const ACCENT_LIGHT = '#D4A853';

const pillarImages = [
  'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=800&q=80',
  'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=800&q=80',
  'https://images.unsplash.com/photo-1504159506876-f8338247a14a?w=800&q=80',
];

const pillars = [
  {
    icon: Eye,
    title: 'Immersive Storytelling',
    focus: 'Custom-animated visuals and cinematic layouts.',
    outcome: 'Deep emotional connection with partners and donors.',
    image: pillarImages[0],
  },
  {
    icon: HandHeart,
    title: 'Frictionless Giving',
    focus: 'Integrated, secure donation flows and campaign tools.',
    outcome: 'Increased conversion and recurring funding.',
    image: pillarImages[1],
  },
  {
    icon: MessageSquare,
    title: 'Narrative Clarity',
    focus: 'Strategic messaging that simplifies complex missions.',
    outcome: 'A clear, professional global presence.',
    image: pillarImages[2],
  },
];

const processSteps = [
  {
    number: '01',
    title: 'Discovery & Empathy',
    description: 'I dive deep into your cause, your community, and the change you want to create. I listen before I design.',
    image: 'https://ik.imagekit.io/qcvroy8xpd/PW8VUKH.png?updatedAt=1759693058055&tr=f-webp',
    imageAlt: 'Marc Friedman, web designer, during project discovery',
  },
  {
    number: '02',
    title: 'Creative Direction',
    description: 'I define the visual language of your impact. Typography, color, motion -- every detail chosen to amplify your mission.',
    image: 'https://ik.imagekit.io/qcvroy8xpd/uoq5Ztg.jpeg',
    imageAlt: 'Marc Friedman designing creative direction for a project',
  },
  {
    number: '03',
    title: 'The Build',
    description: 'High-performance CMS development with donation integration, multilingual support, and SEO infrastructure for global reach.',
    image: 'https://ik.imagekit.io/qcvroy8xpd/TTV8Liw.jpg',
    imageAlt: 'Marc Friedman building a web project',
  },
  {
    number: '04',
    title: 'Launch & Scale',
    description: 'I equip your team to manage campaigns independently. Training, documentation, and ongoing support included.',
    image: 'https://i.imgur.com/PiKh199.png',
    imageAlt: 'Marc Friedman reviewing a launched website project',
  },
];

const includedFeatures = [
  'Emotional, story-driven layout with custom visuals',
  'Smooth GSAP & Framer Motion animations',
  'Impact-focused hero section + team/mission content',
  'Donation integration (Stripe, PayPal, crypto optional)',
  'CMS for blogs, initiatives, and campaign updates',
  'Video embeds + multilingual support',
  'SEO infrastructure for international discoverability',
  'Mobile-first responsive design',
  'Accessibility compliance (WCAG 2.1)',
  'Analytics & conversion tracking',
];

function AnimatedSection({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function ImpactStorySitePage() {
  const scrollToForm = () => {
    const form = document.getElementById('contact-form');
    form?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      

      {/* ===== HERO ===== */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-black">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0a0a0a] to-black" />
        <div
          className="absolute top-[-20%] right-[-10%] w-[700px] h-[700px] rounded-full pointer-events-none mix-blend-screen blur-[200px]"
          style={{ backgroundColor: ACCENT, opacity: 0.06 }}
        />
        <div
          className="absolute bottom-[-15%] left-[-5%] w-[500px] h-[500px] rounded-full pointer-events-none mix-blend-screen blur-[180px]"
          style={{ backgroundColor: ACCENT, opacity: 0.04 }}
        />

        <div className="container-custom relative z-10 py-28 md:py-36 lg:py-40">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="order-2 lg:order-1"
            >
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50">
                <img
                  src="https://ik.imagekit.io/qcvroy8xpd/unnamed%20(36)%201.png"
                  alt="Web designer portfolio - Impact Story Site for Untapped Africa NGO"
                  className="w-full h-auto object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
              </div>
              <div className="flex items-center gap-3 mt-5">
                <div className="flex items-center gap-1.5">
                  <Star size={14} className="fill-[#FFD700] text-[#FFD700]" />
                  <Star size={14} className="fill-[#FFD700] text-[#FFD700]" />
                  <Star size={14} className="fill-[#FFD700] text-[#FFD700]" />
                  <Star size={14} className="fill-[#FFD700] text-[#FFD700]" />
                  <Star size={14} className="fill-[#FFD700] text-[#FFD700]" />
                </div>
                <span className="text-sm text-white">DesignRush Best Web Design 2025</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="order-1 lg:order-2"
            >
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase mb-8 border"
                style={{ backgroundColor: `${ACCENT}15`, borderColor: `${ACCENT}30`, color: ACCENT }}
              >
                <Heart size={14} />
                For NGOs & Social Enterprises
              </div>

              <h1
                className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold tracking-tight mb-8 leading-[0.95]"
                style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
              >
                Digital Experiences
                <br />
                That Turn{' '}
                <span
                  className="italic"
                  style={{
                    background: `linear-gradient(135deg, ${ACCENT}, ${ACCENT_LIGHT})`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Spectators
                </span>
                <br />
                into Supporters.
              </h1>

              <p className="text-lg md:text-xl text-white max-w-xl leading-relaxed mb-10" style={{ fontFamily: 'Inter, sans-serif' }}>
                As a web designer for mission-driven organizations, I build high-impact storytelling platforms for NGOs and social enterprises that need more than a website -- they need a movement.
              </p>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={scrollToForm}
                  className="group px-8 py-4 font-bold rounded-full flex items-center gap-3 transition-all text-black hover:scale-[1.02] hover:shadow-lg hover:shadow-[#C8913C]/20"
                  style={{ backgroundColor: ACCENT }}
                >
                  <span>Start Your Impact Journey</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <Link
                  href="/work/case-studies/untapped-africa"
                  className="px-8 py-4 font-bold rounded-full flex items-center gap-3 border border-white/20 text-white hover:border-white/40 transition-all"
                >
                  <span>See It in Action</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== IMAGE STRIP ===== */}
      <section className="relative py-2 bg-black overflow-hidden">
        <div className="flex gap-2 animate-marquee-slow justify-center">
          {[
            'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=400&q=70',
            'https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=400&q=70',
            'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&q=70',
            'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=400&q=70',
            'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&q=70',
            'https://images.unsplash.com/photo-1542810634-71277d95dcbb?w=400&q=70',
          ].map((src, i) => (
            <div key={i} className="flex-shrink-0 w-48 h-28 rounded-lg overflow-hidden opacity-40">
              <img src={src} alt="" className="w-full h-full object-cover" loading="lazy" />
            </div>
          ))}
        </div>
      </section>

      {/* ===== STAKES ===== */}
      <section className="py-20 md:py-28 bg-[#0a0a0a] border-y border-white/5">
        <div className="container-custom">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center mb-16">
              <p className="text-sm font-bold uppercase tracking-widest mb-6" style={{ color: ACCENT }}>
                The Reality
              </p>
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight"
                style={{ fontFamily: 'Georgia, "Times New Roman", serif', textTransform: 'none' }}
              >
                Your mission is world-changing, but an outdated digital presence is holding your funding back.
              </h2>
              <p className="text-lg text-white max-w-3xl mx-auto leading-relaxed">
                Without a web designer who understands your cause, donors won't feel the urgency to act. You're not just losing traffic -- you're losing the partnerships and funding that fuel your mission.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                label: 'The Problem',
                title: 'Fragmented Narratives',
                description: 'Disconnected pages, clunky donation flows, and outdated designs that fail to communicate the urgency of your mission.',
                icon: Shield,
                image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&q=80',
              },
              {
                label: 'The Cost',
                title: 'Lost Opportunities',
                description: 'Every day with a subpar digital presence means missed funding rounds, overlooked partnerships, and supporters who never convert.',
                icon: TrendingUp,
                image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80',
              },
              {
                label: 'The Shift',
                title: 'Global Impact Brand',
                description: 'Transform from "just an NGO with a website" to a recognized global impact brand that commands attention and trust.',
                icon: Rocket,
                image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=600&q=80',
              },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-[#111] border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 transition-all group h-full">
                  <div className="h-40 overflow-hidden">
                    <img
                      src={item.image}
                      alt=""
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60 group-hover:opacity-80"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-8">
                    <div
                      className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
                      style={{ backgroundColor: `${ACCENT}15`, color: ACCENT }}
                    >
                      {item.label}
                    </div>
                    <item.icon className="w-7 h-7 mb-3 text-gray-500 group-hover:text-white transition-colors" />
                    <h3 className="text-xl font-bold text-white mb-3" style={{ fontFamily: 'Georgia, "Times New Roman", serif', textTransform: 'none' }}>
                      {item.title}
                    </h3>
                    <p className="text-white leading-relaxed text-sm">{item.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== IMPACT FRAMEWORK ===== */}
      <section className="py-20 md:py-28">
        <div className="container-custom">
          <AnimatedSection>
            <div className="text-center mb-16">
              <p className="text-sm font-bold uppercase tracking-widest mb-6" style={{ color: ACCENT }}>
                My Framework
              </p>
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
                style={{ fontFamily: 'Georgia, "Times New Roman", serif', textTransform: 'none' }}
              >
                Three Pillars of Impact
              </h2>
              <p className="text-lg text-white max-w-2xl mx-auto">
                As your dedicated web designer, every element of your platform is crafted around the outcomes that matter most to mission-driven organizations.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pillars.map((pillar, i) => (
              <AnimatedSection key={i} delay={i * 0.12}>
                <div className="relative bg-[#0a0a0a] border border-white/5 rounded-2xl overflow-hidden h-full hover:border-white/15 transition-all group">
                  <div
                    className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl transition-all group-hover:h-1.5"
                    style={{ backgroundColor: ACCENT }}
                  />
                  <div className="h-48 overflow-hidden relative">
                    <img
                      src={pillar.image}
                      alt=""
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent" />
                    <div
                      className="absolute bottom-4 left-6 w-12 h-12 rounded-xl flex items-center justify-center backdrop-blur-sm"
                      style={{ backgroundColor: `${ACCENT}25` }}
                    >
                      <pillar.icon className="w-6 h-6" style={{ color: ACCENT }} />
                    </div>
                  </div>
                  <div className="p-6 pt-4">
                    <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'Georgia, "Times New Roman", serif', textTransform: 'none' }}>
                      {pillar.title}
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">Focus</p>
                        <p className="text-gray-300 leading-relaxed">{pillar.focus}</p>
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">Outcome</p>
                        <p className="text-white font-medium leading-relaxed">{pillar.outcome}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FULL-WIDTH IMAGE BREAK ===== */}
      <section className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=1920&q=80"
          alt="Helping hands reaching out"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <AnimatedSection className="text-center px-4">
            <p
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white max-w-3xl leading-tight"
              style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
            >
              "The best non-profit websites don't just inform.{' '}
              <span style={{ color: ACCENT }}>They ignite.</span>"
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== CASE STUDY SHOWCASE ===== */}
      <section className="py-20 md:py-28 bg-[#0a0a0a]">
        <div className="container-custom">
          <AnimatedSection>
            <div className="mb-12">
              <p className="text-sm font-bold uppercase tracking-widest mb-6" style={{ color: ACCENT }}>
                From Purpose to Presence
              </p>
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white"
                style={{ fontFamily: 'Georgia, "Times New Roman", serif', textTransform: 'none' }}
              >
                See the Framework in Action
              </h2>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="grid lg:grid-cols-2 gap-8 items-stretch">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 group min-h-[400px]">
                <img
                  src="https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%204%20-%2016x9(1).png?updatedAt=1767539578544"
                  alt="Untapped Africa website showcase"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Star size={14} className="fill-[#FFD700] text-[#FFD700]" />
                    <span className="text-sm font-bold text-[#FFD700]">DesignRush Best Web Design 2025</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">Untapped Africa</h3>
                  <p className="text-gray-300 text-sm mt-1">Clean water initiative across 8 countries</p>
                </div>
              </div>

              <div className="flex flex-col gap-6">
                <div className="bg-[#111] border border-white/5 rounded-2xl p-8 flex-1">
                  <div className="grid grid-cols-3 gap-6 mb-8">
                    {[
                      { value: '500k+', label: 'People Served' },
                      { value: '12', label: 'New Partners' },
                      { value: '40%', label: 'More Engagement' },
                    ].map((stat, i) => (
                      <div key={i}>
                        <div className="text-3xl font-bold text-white">{stat.value}</div>
                        <p className="text-xs font-bold uppercase tracking-widest mt-1" style={{ color: ACCENT }}>{stat.label}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-white leading-relaxed mb-6">
                    Untapped Africa had a world-changing mission but their digital presence wasn&apos;t doing it justice. I deployed the Impact Story framework to build a platform that moves hearts and opens wallets.
                  </p>
                  <Link
                    href="/work/case-studies/untapped-africa"
                    className="inline-flex items-center gap-2 font-bold transition-all hover:gap-3"
                    style={{ color: ACCENT }}
                  >
                    <span>Read the Full Case Study</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>

                <div className="bg-[#111] border border-white/5 rounded-2xl p-8 relative overflow-hidden">
                  <Quote className="absolute top-6 right-6 w-10 h-10 text-white/5" />
                  <blockquote className="text-lg text-gray-300 italic leading-relaxed mb-4" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
                    "Working with Marc was a fantastic experience. He delivered a stunning, user-friendly site that exceeded our expectations. He captured the heart of our mission."
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <img
                      src="https://ik.imagekit.io/qcvroy8xpd/1682479506906.jpeg?updatedAt=1754019693073"
                      alt="Gabriel Sher"
                      className="w-12 h-12 rounded-full object-cover border-2"
                      style={{ borderColor: `${ACCENT}40` }}
                      loading="lazy"
                    />
                    <div>
                      <div className="font-bold text-white text-sm">Gabriel Sher</div>
                      <div className="text-xs uppercase tracking-widest font-bold" style={{ color: ACCENT }}>CEO, Untapped Africa</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== WHAT'S INCLUDED ===== */}
      <section className="py-20 md:py-28 border-t border-white/5">
        <div className="container-custom">
          <AnimatedSection>
            <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
              <div>
                <p className="text-sm font-bold uppercase tracking-widest mb-6" style={{ color: ACCENT }}>
                  What's Included
                </p>
                <h2
                  className="text-3xl sm:text-4xl font-bold text-white mb-8"
                  style={{ fontFamily: 'Georgia, "Times New Roman", serif', textTransform: 'none' }}
                >
                  Everything Your Mission Needs
                </h2>
                <div className="space-y-4 mb-10">
                  {includedFeatures.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: ACCENT }} />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="rounded-2xl overflow-hidden border border-white/10 aspect-video">
                  <img
                    src="https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&q=80"
                    alt="Fundraising and donation concept"
                    className="w-full h-full object-cover opacity-70"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 sticky top-32">
                <div className="text-center mb-8">
                  <p className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-2">Partnership Investment</p>
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-5xl font-bold text-white">$4K</span>
                    <span className="text-2xl text-gray-500">-</span>
                    <span className="text-5xl font-bold text-white">$12K</span>
                  </div>
                  <p className="text-white mt-3 text-sm">Based on scope, integrations, and content volume</p>
                </div>

                <div className="space-y-4 mb-8">
                  {[
                    { label: 'Timeline', value: '2-3 weeks' },
                    { label: 'Revisions', value: 'Unlimited during build' },
                    { label: 'Support', value: '30 days post-launch' },
                    { label: 'Projects/year', value: 'Limited to 4' },
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center py-3 border-b border-white/5">
                      <span className="text-white text-sm">{item.label}</span>
                      <span className="text-white font-bold text-sm">{item.value}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={scrollToForm}
                  className="w-full py-4 font-bold rounded-lg flex items-center justify-center gap-2 transition-all text-black hover:opacity-90 hover:shadow-lg"
                  style={{ backgroundColor: ACCENT }}
                >
                  <span>Start Your Impact Journey</span>
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <section className="py-20 md:py-28 bg-[#0a0a0a] border-y border-white/5">
        <div className="container-custom">
          <AnimatedSection>
            <div className="text-center mb-16">
              <p className="text-sm font-bold uppercase tracking-widest mb-6" style={{ color: ACCENT }}>
                Mission-Aligned Collaboration
              </p>
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
                style={{ fontFamily: 'Georgia, "Times New Roman", serif', textTransform: 'none' }}
              >
                I&apos;m a Partner, Not a Vendor
              </h2>
              <p className="text-lg text-white max-w-2xl mx-auto">
                NGOs deserve a web designer who cares about the cause as much as the craft. Here&apos;s how we work together.
              </p>
            </div>
          </AnimatedSection>

          <div className="max-w-5xl mx-auto space-y-16">
            {processSteps.map((step, i) => (
              <AnimatedSection key={i}>
                <div className={`grid md:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? 'md:direction-rtl' : ''}`}>
                  <div className={`${i % 2 === 1 ? 'md:order-2' : ''}`}>
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className="w-14 h-14 rounded-full flex items-center justify-center text-lg font-bold border-2 flex-shrink-0"
                        style={{ borderColor: `${ACCENT}40`, color: ACCENT }}
                      >
                        {step.number}
                      </div>
                      <h3 className="text-2xl font-bold text-white" style={{ fontFamily: 'Georgia, "Times New Roman", serif', textTransform: 'none' }}>
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-white leading-relaxed ml-[4.5rem]">{step.description}</p>
                  </div>
                  <div className={`${i % 2 === 1 ? 'md:order-1' : ''}`}>
                    <div className="rounded-2xl overflow-hidden border border-white/10 aspect-[4/3]">
                      <img
                        src={step.image}
                        alt={step.imageAlt}
                        className="w-full h-full object-cover object-top hover:scale-[1.03] transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CLOSING CTA ===== */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=1920&q=80"
            alt=""
            className="w-full h-full object-cover opacity-10"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-black" />
        </div>
        <div
          className="absolute bottom-[-30%] left-[-10%] w-[600px] h-[600px] rounded-full pointer-events-none mix-blend-screen blur-[180px]"
          style={{ backgroundColor: ACCENT, opacity: 0.05 }}
        />

        <div className="container-custom relative z-10">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <Users className="w-12 h-12 mx-auto mb-6" style={{ color: ACCENT }} />
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
              style={{ fontFamily: 'Georgia, "Times New Roman", serif', textTransform: 'none' }}
            >
              Ready to Scale Your Impact?
            </h2>
            <p className="text-lg text-white leading-relaxed mb-4">
              I only take on <span className="text-white font-bold">4 mission-driven projects a year</span> to ensure every story gets the depth it deserves.
            </p>
            <p className="text-gray-500 mb-10">
              Partnerships starting at $4,000.
            </p>
            <button
              onClick={scrollToForm}
              className="group px-10 py-5 font-bold rounded-full inline-flex items-center gap-3 transition-all text-black hover:scale-[1.02] text-lg hover:shadow-lg hover:shadow-[#C8913C]/20"
              style={{ backgroundColor: ACCENT }}
            >
              <span>Let's Make Yours One of Them</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== CONTACT FORM ===== */}
      <section id="contact-form" className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1b1b1b]">
        <div className="max-w-7xl mx-auto">
          <ServiceLeadForm
            service="The Impact Story Site"
            benefits={[
              'Mission-first storytelling design',
              'Donation & fundraising integration',
              'CMS for campaigns & blog content',
              'SEO for international visibility',
              'Multilingual support available',
              '2-3 week delivery timeline',
            ]}
            testimonial={{
              quote: "Working with Marc was a fantastic experience. He delivered a stunning, user-friendly site that exceeded our expectations. His professionalism and creativity made the process smooth.",
              author: "Gabriel Sher",
              role: "CEO, Untapped Africa"
            }}
          />
        </div>
      </section>
    </>
  );
}
