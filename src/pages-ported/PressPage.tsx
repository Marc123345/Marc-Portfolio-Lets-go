"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Calendar, Award, Globe, Users, Star, ExternalLink } from 'lucide-react';
import TextReveal from '@/components/TextReveal';
import HoverCard3D from '@/components/HoverCard3D';
import MagneticButton from '@/components/MagneticButton';
import { useRouter } from 'next/navigation';

interface PressItem {
  title: string;
  publication: string;
  date: string;
  description: string;
  url: string;
  image?: string;
  category: 'award' | 'feature' | 'interview' | 'review';
  featured?: boolean;
}

const pressItems: PressItem[] = [
  {
    title: "Untapped Africa Website Design Featured",
    publication: "DesignRush",
    date: "2024",
    description: "Untapped Africa's innovative website design was featured by DesignRush for its exceptional user experience and social impact focus.",
    url: "https://www.designrush.com/best-designs/websites/untapped-africa-website-design",
    image: "https://ik.imagekit.io/qcvroy8xpd/Screenshot.png?updatedAt=1754018965491",
    category: "feature",
    featured: true
  },
  {
    title: "Marc Friedman Design Agency Profile",
    publication: "DesignRush",
    date: "2024",
    description: "Comprehensive profile showcasing our design expertise and client success stories on DesignRush's platform.",
    url: "https://www.designrush.com/agency/profile/marc-friedman-design-agency",
    category: "feature"
  }, 
  {
    title: "Award Recognition",
    publication: "Awwwards",
    date: "2024",
    description: "Recognition for excellence in digital design and user experience across multiple projects.",
    url: "https://www.awwwards.com/marc-friedman/",
    category: "award"
  }
];

const pressSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Press & Media Coverage - Marc Friedman",
  "description": "Media coverage, awards, and recognition for Marc Friedman's design and development work. Featured in DesignRush, NoCamels, and other industry publications.",
  "url": "https://www.marcfriedmanportfolio.com/press",
  "mainEntity": {
    "@type": "ItemList",
    "itemListElement": pressItems.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "NewsArticle",
        "headline": item.title,
        "publisher": {
          "@type": "Organization",
          "name": item.publication
        },
        "datePublished": item.date,
        "description": item.description,
        "url": item.url
      }
    }))
  }
};

function PressCard({ item }: { item: PressItem }) {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'award': return <Award className="w-5 h-5 text-[#FFB800]" />;
      case 'feature': return <Star className="w-5 h-5 text-[#FFD700]" />;
      case 'interview': return <Users className="w-5 h-5 text-[#00A2FF]" />;
      case 'review': return <Globe className="w-5 h-5 text-[#00C851]" />;
      default: return <Globe className="w-5 h-5 text-[#FFD700]" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'award': return 'bg-[#FFB800]/10 text-[#FFB800]';
      case 'feature': return 'bg-[#FFD700]/10 text-[#FFD700]';
      case 'interview': return 'bg-[#00A2FF]/10 text-[#00A2FF]';
      case 'review': return 'bg-[#00C851]/10 text-[#00C851]';
      default: return 'bg-[#FFD700]/10 text-[#FFD700]';
    }
  };

  return (
    <HoverCard3D className={`bg-[#1b1b1b] rounded-xl overflow-hidden border border-white/10 hover:border-[#A3D1FF] transition-all group h-full ${item.featured ? 'border-[#A3D1FF]/50' : ''}`}>
      {item.featured && (
        <div className="absolute -top-3 left-4 bg-[#A3D1FF] text-black px-3 py-1 rounded-full text-xs font-medium z-10">
          Featured
        </div>
      )}
      
      {item.image && (
        <div className="aspect-[16/9] overflow-hidden">
          <img 
            src={item.image} 
            alt={item.title} 
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}
      
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          {getCategoryIcon(item.category)}
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(item.category)}`}>
            {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
          </span>
        </div>
        
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#A3D1FF] transition-colors">
          {item.title}
        </h3>
        
        <div className="flex items-center gap-2 text-sm text-white mb-3">
          <Calendar className="w-4 h-4" />
          <span>{item.publication}</span>
          <span>•</span>
          <span>{item.date}</span>
        </div>
        
        <p className="text-white mb-4 text-sm">
          {item.description}
        </p>
        
        <a 
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-[#A3D1FF] hover:underline text-sm font-medium"
        >
          Read Full Article
          <ExternalLink className="ml-1 w-3 h-3" />
        </a>
      </div>
    </HoverCard3D>
  );
}

export default function PressPage() {
  const router = useRouter();
  
  const featuredItems = pressItems.filter(item => item.featured);
  const regularItems = pressItems.filter(item => !item.featured);

  return (
    <>
      

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <TextReveal>
            <h1 className="font-heading text-[clamp(2.2rem,4vw,3rem)] font-semibold tracking-[-0.01em] text-white leading-[1.15] mb-6">
              Press & Media Coverage
            </h1>
            <h2 className="font-body text-xl sm:text-2xl text-[#A3D1FF] mb-6">
              Recognition & Industry Features
            </h2>
            <p className="font-body text-xl leading-[1.7] text-white max-w-3xl">
              Our work has been recognized by leading industry publications and platforms, showcasing the impact of our design and development solutions.
            </p>
          </TextReveal>
        </div>
      </section>

      {/* Featured Press */}
      {featuredItems.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-[#1b1b1b]">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8">Featured Coverage</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <PressCard item={item} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Press Coverage */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">All Coverage</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <PressCard item={item} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1b1b1b]">
        <div className="max-w-7xl mx-auto">
          <TextReveal>
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Industry Recognition</h2>
          </TextReveal>
          
          <div className="grid md:grid-cols-4 gap-6">
            <motion.div 
              className="bg-[#2d3035] p-6 rounded-xl border border-white/10 hover:border-[#A3D1FF] transition-all text-center group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Award className="w-12 h-12 text-[#FFB800] mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold text-white mb-2">Awwwards</h3>
              <p className="text-white text-sm">Excellence in Digital Design</p> 
            </motion.div>
            
            <motion.div 
              className="bg-[#2d3035] p-6 rounded-xl border border-white/10 hover:border-[#A3D1FF] transition-all text-center group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Star className="w-12 h-12 text-[#FF3D2E] mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold text-white mb-2">DesignRush</h3>
              <p className="text-white text-sm">Featured Website Design Agency</p>
            </motion.div>
            
            <motion.div 
              className="bg-[#2d3035] p-6 rounded-xl border border-white/10 hover:border-[#A3D1FF] transition-all text-center group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Globe className="w-12 h-12 text-[#4285F4] mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold text-white mb-2">Google Reviews</h3>
              <p className="text-white text-sm">5.0/5 Client Rating</p>
            </motion.div>
            
            <motion.div 
              className="bg-[#2d3035] p-6 rounded-xl border border-white/10 hover:border-[#A3D1FF] transition-all text-center group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Users className="w-12 h-12 text-[#0077B5] mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold text-white mb-2">LinkedIn</h3>
              <p className="text-white text-sm">Professional Network</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Media Kit Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Media Kit & Resources</h2>
              <p className="text-white mb-6">
                Looking to feature our work or interview Marc? Download our media kit with high-resolution images, 
                project details, and background information.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-[#A3D1FF] mt-1 mr-3" />
                  <div>
                    <p className="text-white font-medium">High-resolution project images</p>
                    <p className="text-white text-sm">Professional screenshots and mockups</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-[#A3D1FF] mt-1 mr-3" />
                  <div>
                    <p className="text-white font-medium">Company background & bio</p>
                    <p className="text-white text-sm">Professional biography and company information</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-[#A3D1FF] mt-1 mr-3" />
                  <div>
                    <p className="text-white font-medium">Project case studies</p>
                    <p className="text-white text-sm">Detailed project information and results</p>
                  </div>
                </div>
              </div>
              
              <MagneticButton>
                <button onClick={() => router.push('/contact')} className="mr_btn mr_btn_primary">
                  <span>Request Media Kit</span>
                </button>
              </MagneticButton>
            </div>
            
            <div>
              <img
                src="https://ik.imagekit.io/qcvroy8xpd/PW8VUKH.png?updatedAt=1759693058055&tr=f-webp"
                alt="Marc Friedman - Professional headshot for media use"
                className="rounded-xl shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1b1b1b]">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Create Award-Winning Work?</h2>
            <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
              Let's create a digital solution that not only delivers results but earns recognition for its excellence.
            </p>
            <MagneticButton>
              <button onClick={() => router.push('/contact')} className="mr_btn mr_btn_primary">
                <span>Start Your Project</span>
              </button>
            </MagneticButton>
          </motion.div>
        </div>
      </section>
    </>
  );
}