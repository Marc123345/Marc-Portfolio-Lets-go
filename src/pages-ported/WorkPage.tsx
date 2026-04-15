"use client";

import React, { useState, useEffect, useRef } from 'react';
import { CircleCheck as CheckCircle2 } from 'lucide-react';
import TextReveal from '@/components/TextReveal';
import ProjectCard3D from '@/components/ProjectCard3D';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface Project {
  title: string;
  description: string;
  image: string;
  liveUrl?: string;
  caseStudyUrl?: string;
  impact: string[];
  technologies: string[];
  category: 'website' | 'landing' | 'saas';
  featured?: boolean;
  customContent?: React.ReactNode;
}

const projects: Project[] = [
  // Featured Project
  {
    title: "H2H Marketing",
    description: "A bold digital presence for a social marketing agency that connects brands with their audiences through authentic, human-to-human strategies. Built to establish credibility and convert visitors into clients.",
    image: "https://ik.imagekit.io/qcvroy8xpd/image%201%20(5).png",
    liveUrl: "https://www.h2hsocialmarketing.com/",
    caseStudyUrl: "/work/case-studies/h2h-marketing",
    impact: [
      "Modern brand-first design",
      "Conversion-focused layout",
      "Fully responsive experience"
    ],
    technologies: ["React", "Tailwind CSS", "Vite", "Framer Motion"],
    category: "website",
    featured: true
  },
  {
    title: "Untapped Africa",
    description: "Revolutionizing water infrastructure solutions across Africa with innovative technology and sustainable practices. A comprehensive platform for project management, data visualization, and community engagement.",
    image: "https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%201%20-%201x1(1).png?updatedAt=1767539579782",
    liveUrl: "https://untappedafrica.co.za",
    caseStudyUrl: "/work/case-studies/untapped-africa",
    impact: [
      "250% increase in engagement",
      "8 countries impacted",
      "500,000+ people served"
    ],
    technologies: ["Next.js", "TypeScript", "Postgres", "Mapbox GL"],
    category: "website"
  },

  {
    title: "Ask Africa",
    description: "A commanding digital presence for one of Africa's leading research and consultancy firms, built to reflect decades of expertise and continental reach.",
    image: "https://ik.imagekit.io/qcvroy8xpd/image%202%20(1).png",
    liveUrl: "https://askafrica.co.za/",
    caseStudyUrl: "/work/case-studies/ask-africa",
    impact: [
      "Authority-driven design",
      "Pan-African brand positioning",
      "Enterprise-ready platform"
    ],
    technologies: ["React", "Tailwind CSS", "Vite", "Framer Motion"],
    category: "website"
  },

  // Original Featured Project now as regular
  {
    title: "Binns Media Group Platform",
    description: "A cutting-edge digital media platform designed to showcase BMG's diverse content portfolio including podcasts, TV shows, and exclusive content. The platform serves as both a content hub and a representation of BMG's commitment to amplifying diverse voices in media.",
    image: "https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%204%20-%2016x9.png?updatedAt=1767539579710",
    liveUrl: "https://www.binnsmediagroup.com",
    caseStudyUrl: "/work/case-studies/binns-media",
    impact: [
      "High performance score",
      "Increased engagement",
      "Faster load times",
      "Excellent uptime"
    ],
    technologies: ["React 18", "TypeScript", "Postgres", "GSAP"],
    category: "website"
  },
  {
    title: "Paving Leads",
    description: "High-velocity SEO engine that dominated search results and ranked #1 on Google for competitive keywords.",
    image: "https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%204%20-%2016_9.png?updatedAt=1767539579010",
    liveUrl: "https://pavinglead.com/",
    caseStudyUrl: "/work/case-studies/paving-leads",
    impact: [
      "#1 Google ranking",
      "300% increase in organic traffic",
      "Strong lead conversion"
    ],
    technologies: ["React", "Node.js", "SEO Optimization", "Analytics"],
    category: "website"
  },

  // Websites
  {
    title: "A Secure Annapolis Locksmith",
    description: "Professional locksmith website showcasing residential, commercial, and automotive services.",
    image: "https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%201%20-%201x1(2).png?updatedAt=1767539579194",
    liveUrl: "https://www.asecureannapolislocksmith.com",
    caseStudyUrl: "/work/case-studies/secure-annapolis",
    impact: [
      "Increased leads",
      "Strong mobile conversion",
      "Excellent customer rating"
    ],
    technologies: ["React", "Node.js", "Tailwind CSS", "Local SEO"],
    category: "website"
  },
  {
    title: "Friedman & Cohen",
    description: "Professional B2B procurement platform for property developers.",
    image: "https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%201%20-%201x1(3).png?updatedAt=1767539579776",
    liveUrl: "https://b2b.fandc.co.za",
    caseStudyUrl: "/work/case-studies/friedman-cohen",
    impact: [
      "100+ years of excellence",
      "High customer rating",
      "Multiple property partners"
    ],
    technologies: ["React", "Node.js", "PostgreSQL"],
    category: "saas"
  },
  {
    title: "Tar & Chip Paving",
    description: "Specialized surface solutions showcase for tar and chip paving applications.",
    image: "https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%204%20-%2016x9(5).png?updatedAt=1767539578933",
    liveUrl: "https://cumberlandtarchip.org/",
    caseStudyUrl: "/work/case-studies/tar-chip-paving",
    impact: [
      "Professional web presence",
      "Mobile-optimized design",
      "Industry-focused aesthetic"
    ],
    technologies: ["React", "Tailwind CSS", "Responsive Design"],
    category: "website"
  },

  // Landing Pages
  {
    title: "Chad Le Clos Swimming",
    description: "Professional landing page for Olympic champion's swimming clinics.",
    image: "https://i.imgur.com/ApfYPlH.jpg",
    liveUrl: "https://chadleclosswimming.com",
    caseStudyUrl: "/work/case-studies/chad-le-clos",
    impact: [
      "Numerous sign-ups in days",
      "High form completion rate",
      "Strong mobile conversion rate"
    ],
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    category: "landing"
  },

  // SaaS Projects
  {
    title: "iLight",
    description: "Modern lighting e-commerce platform with seamless user experience.",
    image: "https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%204%20-%2016x9(4).png?updatedAt=1767539579060",
    liveUrl: "https://ilight.co.za",
    caseStudyUrl: "/work/case-studies/ilight",
    impact: [
      "Modern shopping experience",
      "Increased conversions",
      "Excellent mobile performance"
    ],
    technologies: ["Next.js", "Shopify", "TypeScript"],
    category: "saas"
  },
  {
    title: "MyTube Platform",
    description: "Video metadata management system for media and manufacturing.",
    image: "https://ik.imagekit.io/qcvroy8xpd/QNHXpzT%20(1).jpeg",
    caseStudyUrl: "/work/case-studies/mytube",
    impact: [
      "Faster metadata processing",
      "High user satisfaction",
      "Significant time saved in analysis"
    ],
    technologies: ["React", "Node.js", "AI/ML", "PostgreSQL"],
    category: "saas"
  },
  {
    title: "Fleet Management System",
    description: "Comprehensive fleet tracking and management solution.",
    image: "https://i.imgur.com/EwgHAuK.png",
    caseStudyUrl: "/work/case-studies/fleet-management",
    impact: [
      "Improved fleet efficiency",
      "Cost reduction",
      "High user satisfaction"
    ],
    technologies: ["React Native", "Node.js", "MongoDB"],
    category: "saas"
  },
  {
    title: "AutoMarginX",
    description: "Dealership management platform with real-time analytics.",
    image: "https://i.imgur.com/PiKh199.png",
    caseStudyUrl: "/work/case-studies/automarginx",
    impact: [
      "Faster decisions",
      "Higher profits",
      "Significant time saved"
    ],
    technologies: ["React", "Node.js", "PostgreSQL"],
    category: "saas"
  },
  {
    title: "Videoleap",
    description: "AI-powered video editing platform with template marketplace.",
    image: "https://i.imgur.com/SubVB9A.jpeg",
    caseStudyUrl: "/work/case-studies/videoleap",
    impact: [
      "Increased template usage",
      "Better user retention",
      "Enhanced content sharing"
    ],
    technologies: ["React", "Node.js", "AI/ML", "AWS"],
    category: "saas"
  }
];

const portfolioSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Portfolio - Marc Friedman's Digital Design & Development Work",
  "description": "Real projects. Real results. No templates, no WordPress, no shortcuts. Featured projects include websites, landing pages, and SaaS applications.",
  "creator": {
    "@type": "Person",
    "name": "Marc Friedman",
    "jobTitle": "Full Stack Designer & Developer",
    "url": "https://marcfriedmanportfolio.com"
  },
  "mainEntity": {
    "@type": "ItemList",
    "itemListElement": projects.map((project, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "CreativeWork",
        "name": project.title,
        "description": project.description,
        "image": project.image,
        "url": project.liveUrl || `https://marcfriedmanportfolio.com/work/case-studies/${project.caseStudyUrl?.split('/').pop()}`,
        "creator": {
          "@type": "Person",
          "name": "Marc Friedman"
        }
      }
    }))
  }
};

function FeaturedProjectCard({ project }: { project: Project }) {
  const router = useRouter();
  
  return (
    <div
      className="bg-[#1b1b1b] rounded-xl overflow-hidden border border-white/10 hover:border-[#A3D1FF] transition-all group col-span-full mb-12"
    >
      <div className="grid md:grid-cols-2 gap-8">
        <div className="aspect-[16/10] overflow-hidden relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6 md:p-8">
          <div className="flex items-center justify-between mb-4">
            <span className="text-[#A3D1FF] text-sm bg-[#A3D1FF]/10 px-4 py-2 rounded-full">Featured Project</span>
          </div>
          <h3 className="text-xl md:text-3xl font-bold text-white mb-3 md:mb-4">{project.title}</h3>
          <p className="text-sm md:text-base text-white mb-4 md:mb-6">{project.description}</p>
          <div className="space-y-3 md:space-y-4 mb-4 md:mb-6">
            {project.impact.map((impact, index) => (
              <div key={index} className="flex items-center text-xs md:text-sm">
                <CheckCircle2 className="w-4 h-4 text-[#A3D1FF] mr-2 flex-shrink-0" />
                <span className="text-gray-300">{impact}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
            {project.technologies.map((tech, index) => (
              <span 
                key={index} 
                className="px-2 md:px-3 py-1 bg-white/5 text-[#A3D1FF] rounded-full text-xs md:text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="mr_btn mr_btn_primary inline-flex items-center gap-2">
                <span>View Website</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function CategoryButton({ children, isActive = false, onClick }: { 
  children: React.ReactNode; 
  isActive?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-4 md:px-6 py-2 rounded-full transition-all duration-300 text-sm ${
        isActive
          ? 'bg-[#A3D1FF] text-black'
          : 'bg-white/5 text-gray-300 hover:bg-white/10'
      }`}
    >
      {children}
    </button>
  );
}

export default function WorkPage() {
  const router = useRouter();
  const [activeFilter, setActiveFilter] = useState('all');
  const heroRef = useRef<HTMLElement>(null);
  
  // Get filter from URL params
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const filter = urlParams.get('filter');
    if (filter) {
      setActiveFilter(filter);
    }
  }, []);
  
  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => {
        switch (activeFilter) {
          case 'media':
            return ['Binns Media Group Platform', 'Videoleap', 'MyTube Platform'].includes(project.title);
          case 'saas':
            return project.category === 'saas';
          case 'ecommerce':
            return ['Friedman & Cohen'].includes(project.title);
          case 'automotive':
            return ['AutoMarginX', 'Fleet Management System'].includes(project.title);
          case 'professional':
            return ['A Secure Annapolis Locksmith', 'Tar & Chip Paving', 'Paving Leads', 'H2H Marketing', 'Ask Africa'].includes(project.title);
          case 'social-impact':
            return ['Untapped Africa', 'Ask Africa'].includes(project.title);
          case 'sports':
            return ['Chad Le Clos Swimming'].includes(project.title);
          default:
            return true;
        }
      });

  const filterOptions = [
    { id: 'all', label: 'All Projects' },
    { id: 'media', label: 'Media & Entertainment' },
    { id: 'saas', label: 'SaaS & Technology' },
    { id: 'ecommerce', label: 'E-commerce' },
    { id: 'automotive', label: 'Automotive' },
    { id: 'professional', label: 'Professional Services' },
    { id: 'social-impact', label: 'Social Impact' },
    { id: 'sports', label: 'Sports & Entertainment' }
  ];

  return (
    <>
      

      <section
        ref={heroRef}
        className="relative min-h-[60vh] md:min-h-[80vh] flex items-center justify-center bg-black overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <img
            src="https://i.imgur.com/IU0mmH7.jpeg"
            alt="Featured portfolio projects by Marc Friedman - web development and design showcase"
            className="w-full h-full object-cover"
          />
          <div 
            className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/90"
            style={{ backdropFilter: 'blur(2px)' }}
          ></div>
        </div>

        <div className="container-custom relative z-10 py-16 md:py-0">
          <TextReveal className="max-w-3xl">
            <h1 className="font-heading text-[clamp(2.2rem,4vw,3rem)] font-semibold tracking-[-0.01em] text-white leading-[1.15] mb-4 md:mb-6">
              Featured Work
            </h1>
            <p className="font-body text-base md:text-xl leading-[1.7] text-gray-300 mb-6 md:mb-8">
              Real projects. Real results. No templates, no WordPress, no shortcuts.
            </p>
          </TextReveal>

          <div
            className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8 mt-8 md:mt-12"
          >
            <div className="bg-[#1b1b1b]/80 backdrop-blur-sm p-4 md:p-6 rounded-xl border border-white/10 hover:border-[#A3D1FF] transition-all text-center">
              <div className="text-2xl md:text-4xl font-bold text-[#A3D1FF] mb-1 md:mb-2 counter">50+</div>
              <div className="text-xs md:text-base text-white">Projects Completed</div>
            </div>
            <div className="bg-[#1b1b1b]/80 backdrop-blur-sm p-4 md:p-6 rounded-xl border border-white/10 hover:border-[#A3D1FF] transition-all text-center">
              <div className="text-2xl md:text-4xl font-bold text-[#A3D1FF] mb-1 md:mb-2 counter">6+</div>
              <div className="text-xs md:text-base text-white">Years Experience</div>
            </div>
            <div className="bg-[#1b1b1b]/80 backdrop-blur-sm p-4 md:p-6 rounded-xl border border-white/10 hover:border-[#A3D1FF] transition-all text-center">
              <div className="text-2xl md:text-4xl font-bold text-[#A3D1FF] mb-1 md:mb-2 counter">99%</div>
              <div className="text-xs md:text-base text-white">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 md:py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-[#1b1b1b]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
            <h2 className="text-2xl font-bold text-white">Filter by Industry</h2>
            <div className="flex flex-wrap gap-2">
              {filterOptions.map((option) => (
                <CategoryButton
                  key={option.id}
                  isActive={activeFilter === option.id}
                  onClick={() => setActiveFilter(option.id)}
                >
                  {option.label}
                </CategoryButton>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-8 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Portfolio Projects</h2>
          <div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {filteredProjects.map((project, index) => (
              project.featured ? (
                <FeaturedProjectCard key={index} project={project} />
              ) : (
                <ProjectCard3D 
                  key={index}
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  liveUrl={project.liveUrl}
                  caseStudyUrl={project.caseStudyUrl}
                  impact={project.impact}
                  technologies={project.technologies}
                  index={index}
                />
              )
            ))}
          </div>
          
          {/* Related Content Links */}
          <div className="mt-16 bg-[#1b1b1b] p-8 rounded-xl border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6">Explore More</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">My Services</h4>
                <div className="space-y-2">
                  <Link
                    href="/services/web-development"
                    className="block text-[#A3D1FF] hover:text-white transition-colors"
                    title="Professional web development services"
                  >
                    Web Development Services
                  </Link>
                  <Link
                    href="/services/design"
                    className="block text-[#A3D1FF] hover:text-white transition-colors"
                    title="UI/UX design solutions"
                  >
                    UI/UX Design Solutions
                  </Link>
                  <Link
                    href="/services/saas"
                    className="block text-[#A3D1FF] hover:text-white transition-colors"
                    title="SaaS development services"
                  >
                    SaaS Development
                  </Link>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Learn More</h4>
                <div className="space-y-2">
                  <Link 
                    href="/about" 
                    className="block text-[#A3D1FF] hover:text-white transition-colors"
                    title="About Marc Friedman"
                  >
                    About Marc Friedman
                  </Link>
                  <Link 
                    href="/blog" 
                    className="block text-[#A3D1FF] hover:text-white transition-colors"
                    title="Design and development insights"
                  >
                    Design & Development Blog
                  </Link>
                  <Link 
                    href="/contact" 
                    className="block text-[#A3D1FF] hover:text-white transition-colors"
                    title="Get in touch for your project"
                  >
                    Start Your Project
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1b1b1b] to-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <TextReveal>
            <h2 className="font-heading text-[clamp(1.75rem,3.5vw,2.5rem)] font-semibold tracking-[-0.01em] text-white leading-[1.15] mb-4 md:mb-6">Ready to Create Your Success Story?</h2>
            <p className="font-body text-base md:text-xl leading-[1.7] text-white mb-6 md:mb-10 max-w-2xl mx-auto">
              Let's build something extraordinary together that drives real results for your business.
            </p>
            <Link href="/contact" className="mr_btn mr_btn_primary">
              <span>Start Your Project</span>
            </Link>
          </TextReveal>
        </div>
      </section>
    </>
  );
}