"use client";

import React from 'react';
import { ArrowRight, CircleCheck as CheckCircle2 } from 'lucide-react';
import ProjectTimelineVisualizer from '@/components/ProjectTimelineVisualizer';
import { useRouter } from 'next/navigation';

export default function ProjectTimelinePage() {
  const router = useRouter();
  
  // Structured data for SEO
  const toolSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Website Project Timeline Visualizer",
    "applicationCategory": "WebApplication",
    "operatingSystem": "All",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "See exactly what to expect during your website project with our interactive timeline tool. Our transparent process ensures you're informed every step of the way.",
    "creator": {
      "@type": "Person",
      "name": "Marc Friedman"
    }
  };

  return (
    <>
      

      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Website Project Timeline
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            See exactly what to expect during your website project. Our transparent process ensures you're informed and involved every step of the way.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <ProjectTimelineVisualizer />
          
          <div className="mt-16 bg-[#1b1b1b] p-8 rounded-xl border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-6">Why Our Process Works</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Transparency</h3>
                <p className="text-white">
                  No surprises or hidden steps. You'll know exactly what to expect at every stage of the project.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Collaboration</h3>
                <p className="text-white">
                  We work closely with you throughout the process, ensuring your vision is realized.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Efficiency</h3>
                <p className="text-white">
                  Our streamlined process eliminates delays and keeps your project on track for timely delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1b1b1b]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Client Success Stories</h2>
              <p className="text-white mb-6">
                Our proven process has helped numerous clients achieve their goals on time and within budget:
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-[#A3D1FF]/10 p-3 rounded-lg mr-4">
                    <CheckCircle2 className="w-6 h-6 text-[#A3D1FF]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Binns Media Group</h3>
                    <p className="text-white">"The timeline was clear from day one, and Marc delivered exactly as promised. No surprises, just excellent results."</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#A3D1FF]/10 p-3 rounded-lg mr-4">
                    <CheckCircle2 className="w-6 h-6 text-[#A3D1FF]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Wellness TCYS</h3>
                    <p className="text-white">"The project timeline made it easy to plan our marketing around the launch. Everything was delivered on schedule."</p>
                  </div>
                </div>
              </div>
              
              <button
                onClick={() => router.push('/contact')}
                className="mr_btn mr_btn_outline group"
              >
                <span>Start Your Project</span>
                <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
            
            <div>
              <img 
                src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80" 
                alt="Project timeline planning and management session for web development"
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Let's create a website that delivers real results for your business, with a clear timeline and process you can trust.
          </p>
          <button
            onClick={() => router.push('/contact')}
            className="mr_btn mr_btn_outline group"
          >
            <span>Book a Free Strategy Call</span>
            <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </section>
    </>
  );
}