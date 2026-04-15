"use client";

import { ArrowUpRight, CircleCheck as CheckCircle } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import MagneticButton from '@/components/MagneticButton';
import FeaturedWorkCarousel from '@/components/FeaturedWorkCarousel';
import Link from 'next/link';

const SERIF = "Georgia, 'Times New Roman', serif";

const portfolioProjects = [
  {
    title: 'H2H Marketing',
    image: 'https://ik.imagekit.io/qcvroy8xpd/image%201%20(5).png',
    description:
      'A bold digital presence for a social marketing agency connecting brands with audiences through authentic strategies',
    tech: ['React', 'Tailwind CSS', 'Vite', 'Framer Motion'],
    liveUrl: 'https://www.h2hsocialmarketing.com/',
    caseStudy: '/work/case-studies/h2h-marketing',
  },
  {
    title: 'Ask Africa',
    image: 'https://ik.imagekit.io/qcvroy8xpd/image%202%20(1).png',
    description:
      "A commanding digital presence for one of Africa's leading research and consultancy firms",
    tech: ['React', 'Tailwind CSS', 'Vite', 'Framer Motion'],
    liveUrl: 'https://askafrica.co.za/',
    caseStudy: '/work/case-studies/ask-africa',
  },
  {
    title: 'Binns Media Group Platform',
    image:
      'https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%204%20-%2016x9.png?updatedAt=1767539579710',
    description:
      'A cutting-edge digital media platform transforming the way content creators connect with audiences',
    tech: ['React 18', 'TypeScript', 'Postgres', 'Framer Motion'],
    liveUrl: 'https://www.binnsmediagroup.com',
    caseStudy: '/work/case-studies/binns-media',
  },
  {
    title: 'Paving Leads',
    image:
      'https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%204%20-%2016_9.png?updatedAt=1767539579010',
    description:
      'High-velocity SEO engine ranked #1 on Google, generating qualified leads for paving contractors',
    tech: ['React', 'Node.js', 'SEO Optimization', 'Lead Generation'],
    liveUrl: 'https://pavinglead.com/',
    caseStudy: '/work/case-studies/paving-leads',
  },
  {
    title: 'A Secure Annapolis Locksmith',
    image:
      'https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%201%20-%201x1(2).png?updatedAt=1767539579194',
    description:
      'Professional locksmith website with emergency service booking and local SEO dominance',
    tech: ['React', 'Node.js', 'Tailwind CSS', 'Local SEO'],
    liveUrl: 'https://www.asecureannapolislocksmith.com',
    caseStudy: '/work/case-studies/secure-annapolis',
  },
  {
    title: 'Friedman & Cohen',
    image:
      'https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%201%20-%201x1(3).png?updatedAt=1767539579776',
    description:
      'B2B procurement platform streamlining wholesale operations for retail businesses',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Real-time Data'],
    liveUrl: 'https://b2b.fandc.co.za',
    caseStudy: '/work/case-studies/friedman-cohen',
  },
  {
    title: 'iLight Care',
    image:
      'https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%201%20-%201x1(5).png?updatedAt=1767539579818',
    description: 'AI-powered healthcare platform for patient care and medical diagnostics',
    tech: ['React', 'Node.js', 'AI/ML', 'Healthcare Tech'],
    liveUrl: 'https://www.ilight.care',
    caseStudy: '/work/case-studies/ilight',
  },
  {
    title: 'Chad Le Clos Swimming',
    image: 'https://i.imgur.com/ApfYPlH.jpg',
    description:
      "Olympic champion's swimming clinics platform with booking and athlete management",
    tech: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Booking System'],
    liveUrl: 'https://chadleclosswimming.com',
    caseStudy: '/work/case-studies/chad-le-clos',
  },
  {
    title: 'Tar & Chip Paving',
    image:
      'https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%201%20-%201x1(6).png?updatedAt=1767539579420',
    description:
      'Specialized surface solutions showcase with project portfolio and instant quote generation',
    tech: ['React', 'Tailwind CSS', 'Responsive Design', 'Quote System'],
    liveUrl: 'https://cumberlandtarchip.org/',
    caseStudy: '/work/case-studies/tar-chip-paving',
  },
];

function ChapterMarker({ number, label }: { number: string; label: string }) {
  return (
    <div className="flex items-center gap-4 mb-10">
      <span className="text-white/50 text-xs font-mono tracking-[0.3em] uppercase">
        {number}
      </span>
      <span className="h-[1px] flex-1 bg-white/15 max-w-[60px]" />
      <span className="text-white/50 text-xs font-mono tracking-[0.3em] uppercase">
        {label}
      </span>
    </div>
  );
}

export default function FeaturedWorkSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const featuredRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: featuredRef,
    offset: ['start end', 'end start'],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.05, 1, 1.05]);

  return (
    <section
      ref={sectionRef}
      className="relative py-28 md:py-36 px-6 lg:px-12 bg-[#0a0a0a] border-t border-white/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <ChapterMarker number="Chapter · Selected Work" label="Portfolio · Vol. 01" />

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9 }}
          className="text-white leading-[0.95] tracking-[-0.03em] mb-8 max-w-5xl"
          style={{
            fontFamily: SERIF,
            fontSize: 'clamp(2.75rem, 7vw, 6.5rem)',
            fontWeight: 400,
          }}
        >
          Real projects.{' '}
          <em className="italic text-[#A3D1FF]">Real results.</em>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-white/60 mb-20 max-w-2xl"
        >
          No templates. No WordPress. No shortcuts. Everything hand-built from the tokens up.
        </motion.p>
      </div>

      {/* ======== FEATURED PROJECT — magazine hero spread ======== */}
      <div ref={featuredRef} className="max-w-7xl mx-auto mb-32">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          className="relative grid lg:grid-cols-[1.3fr_1fr] gap-10 lg:gap-16 items-center"
        >
          {/* Image with parallax */}
          <div className="relative aspect-[4/5] lg:aspect-[16/12] overflow-hidden lg:bg-[#1b1b1b]">
            <motion.img
              src="https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%201%20-%201x1(1).png?updatedAt=1767539579782"
              alt="Untapped Africa"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ y: imageY, scale: imageScale }}
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-transparent" />
            <div className="absolute top-6 left-6 flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.3em] text-white/80">
              <span className="w-6 h-[1px] bg-[#A3D1FF]" />
              Featured
            </div>
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-[10px] font-mono uppercase tracking-[0.3em] text-white/70">
              <span>File · 01</span>
              <span>Untapped Africa · 2025</span>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-xs font-mono uppercase tracking-[0.35em] text-[#A3D1FF] mb-4">
              — Case File 01
            </p>
            <h3
              className="text-white mb-8 leading-[0.95] tracking-[-0.02em]"
              style={{
                fontFamily: SERIF,
                fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                fontWeight: 400,
              }}
            >
              Untapped <em className="italic text-[#A3D1FF]">Africa</em>
            </h3>
            <p className="text-lg text-white/75 leading-relaxed mb-8">
              A platform that brings clean water to{' '}
              <strong className="text-white">500,000+ people across 8 African countries</strong>.
              Built with Next.js and Mapbox to track, manage, and fund water infrastructure
              projects at scale.
            </p>

            <div className="grid grid-cols-3 gap-4 mb-10 pb-10 border-b border-white/10">
              {[
                { n: '250%', l: 'engagement' },
                { n: '8', l: 'countries' },
                { n: '500k+', l: 'people served' },
              ].map((s) => (
                <div key={s.l}>
                  <div
                    className="text-white leading-none mb-2"
                    style={{
                      fontFamily: SERIF,
                      fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                      fontWeight: 500,
                      fontVariantNumeric: 'tabular-nums',
                    }}
                  >
                    {s.n}
                  </div>
                  <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/50">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {['Next.js', 'TypeScript', 'Postgres', 'Mapbox GL'].map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 border border-white/15 text-white/70 text-xs font-mono"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://untappedafrica.co.za"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white font-medium border-b border-white/30 hover:border-[#A3D1FF] hover:text-[#A3D1FF] transition-colors py-1"
              >
                View live
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <Link
                href="/work/case-studies/untapped-africa"
                className="inline-flex items-center gap-2 bg-white text-black font-medium px-6 py-3 hover:bg-[#A3D1FF] transition-colors"
              >
                Read case study
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ======== OTHER PROJECTS — carousel ======== */}
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-10">
          <p className="text-xs font-mono uppercase tracking-[0.3em] text-white/50">
            — More from the archive
          </p>
          <span className="text-xs font-mono text-white/40">
            {portfolioProjects.length} more files
          </span>
        </div>

        <FeaturedWorkCarousel
          projects={portfolioProjects}
          autoplayInterval={6000}
        />

        <div className="mt-16 text-center">
          <MagneticButton>
            <Link
              href="/work"
              className="inline-flex items-center gap-3 bg-white text-black font-medium px-8 py-4 hover:bg-[#A3D1FF] transition-colors group"
            >
              <span>View the complete archive</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
