"use client";

import React from 'react';
import { ArrowRight, CircleCheck as CheckCircle2 } from 'lucide-react';
import ROICalculator from '@/components/ROICalculator';
import { useRouter } from 'next/navigation';

export default function ROICalculatorPage() {
  const router = useRouter();
  
  // Structured data for SEO
  const toolSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Website ROI Calculator - Free Business Tool",
    "applicationCategory": "WebApplication",
    "operatingSystem": "All",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "Calculate the potential return on investment for your website redesign project. See how a strategic website can impact your bottom line.",
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
            Website ROI Calculator
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Calculate the potential return on investment for your website redesign project. See how a strategic website can impact your bottom line.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <ROICalculator />
          
          <div className="mt-16 bg-[#1b1b1b] p-8 rounded-xl border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-6">How Our Clients See Real ROI</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-[#A3D1FF]/10 p-3 rounded-lg mr-4">
                  <CheckCircle2 className="w-6 h-6 text-[#A3D1FF]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Binns Media Group</h3>
                  <p className="text-white">Achieved a 40% increase in engagement and 60% faster load times, resulting in significantly improved user retention and content consumption.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[#A3D1FF]/10 p-3 rounded-lg mr-4">
                  <CheckCircle2 className="w-6 h-6 text-[#A3D1FF]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Wellness TCYS</h3>
                  <p className="text-white">Saw a 200% increase in online bookings and 150% growth in organic traffic after implementing our conversion-focused design strategy.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[#A3D1FF]/10 p-3 rounded-lg mr-4">
                  <CheckCircle2 className="w-6 h-6 text-[#A3D1FF]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">A Secure Annapolis Locksmith</h3>
                  <p className="text-white">Experienced a 150% increase in qualified leads and achieved top 3 rankings in local search results, dramatically growing their business.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1b1b1b]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80" 
                alt="Business strategy meeting discussing website ROI and investment planning"
                className="rounded-xl shadow-2xl"
              />
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Beyond the Numbers</h2>
              <p className="text-white mb-6">
                While ROI is important, a strategic website redesign delivers benefits that go beyond immediate financial returns:
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-[#A3D1FF] mt-1 mr-3" />
                  <p className="text-gray-300">Enhanced brand perception and credibility</p>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-[#A3D1FF] mt-1 mr-3" />
                  <p className="text-gray-300">Improved customer experience and satisfaction</p>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-[#A3D1FF] mt-1 mr-3" />
                  <p className="text-gray-300">Better competitive positioning in your market</p>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-[#A3D1FF] mt-1 mr-3" />
                  <p className="text-gray-300">Long-term scalability for future growth</p>
                </li>
              </ul>
              
              <button
                onClick={() => router.push('/contact')}
                className="mr_btn mr_btn_outline group"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Maximize Your Website ROI?</h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Let's create a strategic website that delivers measurable returns and helps you achieve your business goals.
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