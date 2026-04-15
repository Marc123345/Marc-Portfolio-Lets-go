"use client";

import { ArrowRight, CircleCheck as CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import MagneticButton from '@/components/MagneticButton';
import Reveal from '@/components/Reveal';
import FeaturedWorkCarousel from '@/components/FeaturedWorkCarousel';
import Link from 'next/link';

const portfolioProjects = [
  {
    title: "H2H Marketing",
    image: "https://ik.imagekit.io/qcvroy8xpd/image%201%20(5).png",
    description: "A bold digital presence for a social marketing agency connecting brands with audiences through authentic strategies",
    tech: ["React", "Tailwind CSS", "Vite", "Framer Motion"],
    liveUrl: "https://www.h2hsocialmarketing.com/",
    caseStudy: "/work/case-studies/h2h-marketing"
  },
  {
    title: "Ask Africa",
    image: "https://ik.imagekit.io/qcvroy8xpd/image%202%20(1).png",
    description: "A commanding digital presence for one of Africa's leading research and consultancy firms",
    tech: ["React", "Tailwind CSS", "Vite", "Framer Motion"],
    liveUrl: "https://askafrica.co.za/",
    caseStudy: "/work/case-studies/ask-africa"
  },
  {
    title: "Binns Media Group Platform",
    image: "https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%204%20-%2016x9.png?updatedAt=1767539579710",
    description: "A cutting-edge digital media platform transforming the way content creators connect with audiences",
    tech: ["React 18", "TypeScript", "Postgres", "Framer Motion"],
    liveUrl: "https://www.binnsmediagroup.com",
    caseStudy: "/work/case-studies/binns-media"
  },
  {
    title: "Paving Leads",
    image: "https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%204%20-%2016_9.png?updatedAt=1767539579010",
    description: "High-velocity SEO engine ranked #1 on Google, generating qualified leads for paving contractors",
    tech: ["React", "Node.js", "SEO Optimization", "Lead Generation"],
    liveUrl: "https://pavinglead.com/",
    caseStudy: "/work/case-studies/paving-leads"
  },
  {
    title: "A Secure Annapolis Locksmith",
    image: "https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%201%20-%201x1(2).png?updatedAt=1767539579194",
    description: "Professional locksmith website with emergency service booking and local SEO dominance",
    tech: ["React", "Node.js", "Tailwind CSS", "Local SEO"],
    liveUrl: "https://www.asecureannapolislocksmith.com",
    caseStudy: "/work/case-studies/secure-annapolis"
  },
  {
    title: "Friedman & Cohen",
    image: "https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%201%20-%201x1(3).png?updatedAt=1767539579776",
    description: "B2B procurement platform streamlining wholesale operations for retail businesses",
    tech: ["React", "Node.js", "PostgreSQL", "Real-time Data"],
    liveUrl: "https://b2b.fandc.co.za",
    caseStudy: "/work/case-studies/friedman-cohen"
  },
  {
    title: "iLight Care",
    image: "https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%201%20-%201x1(5).png?updatedAt=1767539579818",
    description: "AI-powered healthcare platform revolutionizing patient care and medical diagnostics",
    tech: ["React", "Node.js", "AI/ML", "Healthcare Tech"],
    liveUrl: "https://www.ilight.care",
    caseStudy: "/work/case-studies/ilight"
  },
  {
    title: "Chad Le Clos Swimming",
    image: "https://i.imgur.com/ApfYPlH.jpg",
    description: "Olympic champion's swimming clinics platform with booking and athlete management",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "Booking System"],
    liveUrl: "https://chadleclosswimming.com",
    caseStudy: "/work/case-studies/chad-le-clos"
  },
  {
    title: "Tar & Chip Paving",
    image: "https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%201%20-%201x1(6).png?updatedAt=1767539579420",
    description: "Specialized surface solutions showcase with project portfolio and instant quote generation",
    tech: ["React", "Tailwind CSS", "Responsive Design", "Quote System"],
    liveUrl: "https://cumberlandtarchip.org/",
    caseStudy: "/work/case-studies/tar-chip-paving"
  }
];

export default function FeaturedWorkSection() {
  return (
    <section className="py-32 px-6 sm:px-8 lg:px-12 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-6 border-4 border-[#A3D1FF] shadow-lg">
            <img
              src="https://ik.imagekit.io/qcvroy8xpd/PW8VUKH.png?updatedAt=1759693058055&tr=f-webp"
              alt="Marc Friedman"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer-when-downgrade"
              crossOrigin="anonymous"
              loading="eager"
            />
          </div>
          <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-black mb-6 leading-tight text-white">
            Featured <span className="text-[#A3D1FF]">Work</span>
          </h2>
          <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
            Real projects. Real results. No templates, no WordPress, no shortcuts.
          </p>
        </motion.div>

        <motion.div
          className="bg-[#1b1b1b] rounded-xl overflow-hidden border border-white/10 hover:border-[#A3D1FF] transition-all group col-span-full mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div className="aspect-[16/10] overflow-hidden relative">
              <img
                src="https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%201%20-%201x1(1).png?updatedAt=1767539579782"
                alt="Untapped Africa"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1b1b1b] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="p-6 md:p-8">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[#A3D1FF] text-sm bg-[#A3D1FF]/10 px-4 py-2 rounded-full">Featured Project</span>
              </div>
              <h3 className="text-xl md:text-3xl font-bold text-white mb-3 md:mb-4">Untapped Africa</h3>
              <p className="text-sm md:text-base text-white mb-4 md:mb-6">A platform that helps bring clean water to 500,000+ people across 8 African countries. Built with Next.js and Mapbox to track, manage, and fund water infrastructure projects at scale.</p>
              <div className="space-y-3 md:space-y-4 mb-4 md:mb-6">
                <div className="flex items-center text-xs md:text-sm">
                  <CheckCircle className="w-4 h-4 text-[#A3D1FF] mr-2 flex-shrink-0" />
                  <span className="text-gray-300">250% increase in engagement</span>
                </div>
                <div className="flex items-center text-xs md:text-sm">
                  <CheckCircle className="w-4 h-4 text-[#A3D1FF] mr-2 flex-shrink-0" />
                  <span className="text-gray-300">8 countries impacted</span>
                </div>
                <div className="flex items-center text-xs md:text-sm">
                  <CheckCircle className="w-4 h-4 text-[#A3D1FF] mr-2 flex-shrink-0" />
                  <span className="text-gray-300">500,000+ people served</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
                {["Next.js", "TypeScript", "Postgres", "Mapbox GL"].map((tech, index) => (
                  <span
                    key={index}
                    className="px-2 md:px-3 py-1 bg-white/5 text-[#A3D1FF] rounded-full text-xs md:text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <a href="https://untappedafrica.co.za" target="_blank" rel="noopener noreferrer" className="mr_btn mr_btn_outline">
                  <span>View Live Website</span>
                </a>
                <Link href="/work/case-studies/untapped-africa" className="mr_btn mr_btn_primary">
                  <span>Read Case Study</span>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        <Reveal direction="up" delay={0.2}>
          <FeaturedWorkCarousel
            projects={portfolioProjects}
            autoplayInterval={6000}
          />
        </Reveal>

        <Reveal direction="up" delay={0.3}>
          <div className="text-center">
            <MagneticButton>
              <Link
                href="/work"
                className="mr_btn mr_btn_primary inline-flex items-center gap-2 text-xl"
              >
                <span>View All Projects</span>
                <ArrowRight className="w-6 h-6" />
              </Link>
            </MagneticButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
