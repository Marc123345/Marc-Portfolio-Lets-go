"use client";

import React from 'react';
import { ArrowRight, Brain, Code, Database, Zap, Bot, Sparkles, ExternalLink } from 'lucide-react';
import ServiceLeadForm from '@/components/ServiceLeadForm';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
function FeatureCard({ icon: Icon, title, description }: {
  icon: any;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-[#1b1b1b] p-8 rounded-xl border border-white/10 hover:border-[#A3D1FF] transition-all group">
      <div className="relative mb-6">
        <div className="absolute inset-0 bg-[#A3D1FF]/20 blur-xl rounded-full"></div>
        <div className="bg-[#A3D1FF]/10 p-4 rounded-xl relative">
          <Icon className="w-8 h-8 text-[#A3D1FF] group-hover:scale-110 transition-transform" />
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-white">{description}</p>
    </div>
  );
}

function ProcessStep({ number, title, description }: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-start">
      <div className="bg-[#A3D1FF] text-black w-12 h-12 rounded-full flex items-center justify-center font-bold mr-6">
        {number}
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
        <p className="text-white">{description}</p>
      </div>
    </div>
  );
}

export default function AIIntegrationPage() {
  const router = useRouter();

  return (
    <>
      

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              AI Integration Services
            </h1>
            <p className="text-xl text-white mb-8">
              <strong className="text-white">Automate manual tasks</strong> and gain <strong className="text-white">data-driven insights</strong> with cutting-edge AI solutions that enhance decision-making and create exceptional user experiences.
            </p>
            <button 
              onClick={() => router.push('/contact')}
              className="mr_btn mr_btn_primary group relative overflow-hidden"
            >
              <span className="relative z-10">Start Your Project</span>
              <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              <ArrowRight className="ml-2 w-5 h-5 relative z-10 group-hover:rotate-45 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={Code}
              title="API Integration"
              description="Reduce development time with seamless connections to OpenAI, Google Cloud AI, AWS SageMaker, and more."
            />
            <FeatureCard
              icon={Database}
              title="Custom Model Deployment"
              description="Achieve high accuracy with fine-tuned AI models specifically trained for your business needs."
            />
            <FeatureCard
              icon={Bot}
              title="AI-Powered Applications"
              description="Increase user engagement with intelligent features like chatbots, recommendations, and predictive analytics."
            />
            <FeatureCard
              icon={Brain}
              title="Machine Learning & Data Services"
              description="Extract more value from your data with comprehensive ML pipelines and analytics."
            />
            <FeatureCard
              icon={Zap}
              title="Process Automation"
              description="Cut operational costs with intelligent automation of repetitive business processes."
            />
            <FeatureCard
              icon={Sparkles}
              title="AI-Powered Chat & Support"
              description="Resolve customer inquiries automatically with conversational AI agents."
            />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1b1b1b]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12">Our AI Integration Process</h2>
          <div className="space-y-12">
            <ProcessStep
              number="01"
              title="Discovery & Assessment"
              description="More accurate project scoping through comprehensive analysis of your business needs and data landscape."
            />
            <ProcessStep
              number="02"
              title="Solution Design"
              description="Higher adoption rates with tailored AI solutions aligned with your business goals and technical requirements."
            />
            <ProcessStep
              number="03"
              title="Development & Integration"
              description="Faster implementation with seamless integration into your existing systems and workflows."
            />
            <ProcessStep
              number="04"
              title="Testing & Optimization"
              description="High accuracy achieved through rigorous testing and fine-tuning of AI models and systems."
            />
            <ProcessStep
              number="05"
              title="Deployment & Training"
              description="High user satisfaction with comprehensive training and smooth deployment processes."
            />
            <ProcessStep
              number="06"
              title="Monitoring & Improvement"
              description="Continuous performance improvements through ongoing monitoring and model refinement."
            />
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Our AI Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#1b1b1b] p-8 rounded-xl border border-white/10 hover:border-[#A3D1FF] transition-all">
              <h3 className="text-2xl font-bold text-white mb-4">AI Integration Services</h3>
              <p className="text-white mb-6"><strong className="text-white">Faster development</strong> by connecting AI capabilities with your existing systems.</p>
              <ul className="space-y-3">
                {[
                  "Seamless API integration with major AI providers",
                  "Custom model deployment with high accuracy",
                  "Embedded AI in existing products",
                  "Automated AI workflows reducing manual tasks"
                ].map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <ArrowRight className="w-4 h-4 text-[#A3D1FF] mr-2" />
                    <strong>{feature}</strong>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#1b1b1b] p-8 rounded-xl border border-white/10 hover:border-[#A3D1FF] transition-all">
              <h3 className="text-2xl font-bold text-white mb-4">Machine Learning & Data Services</h3>
              <p className="text-white mb-6"><strong className="text-white">Extract more value</strong> from your data with comprehensive ML solutions.</p>
              <ul className="space-y-3">
                {[
                  "Data preparation with high accuracy",
                  "Custom model training with strong performance",
                  "Real-time monitoring and maintenance",
                  "Scalable data pipelines processing many records daily"
                ].map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <ArrowRight className="w-4 h-4 text-[#A3D1FF] mr-2" />
                    <strong>{feature}</strong>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#1b1b1b] p-8 rounded-xl border border-white/10 hover:border-[#A3D1FF] transition-all">
              <h3 className="text-2xl font-bold text-white mb-4">Process Automation</h3>
              <p className="text-white mb-6"><strong className="text-white">Reduction in operational costs</strong> through intelligent automation.</p>
              <ul className="space-y-3">
                {[
                  "AI-powered workflow automation saving hours weekly",
                  "Intelligent document processing with high accuracy",
                  "Decision support systems improving outcomes",
                  "RPA + AI integration for end-to-end automation"
                ].map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <ArrowRight className="w-4 h-4 text-[#A3D1FF] mr-2" />
                    <strong>{feature}</strong>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#1b1b1b] p-8 rounded-xl border border-white/10 hover:border-[#A3D1FF] transition-all">
              <h3 className="text-2xl font-bold text-white mb-4">AI-Powered Chat & Support</h3>
              <p className="text-white mb-6"><strong className="text-white">Resolve inquiries automatically</strong> with conversational AI.</p>
              <ul className="space-y-3">
                {[
                  "Custom chatbots with 24/7 availability",
                  "Voice-to-text systems with high accuracy",
                  "Multilingual support in 40+ languages",
                  "Knowledge base integration with high query resolution"
                ].map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <ArrowRight className="w-4 h-4 text-[#A3D1FF] mr-2" />
                    <strong>{feature}</strong>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1b1b1b]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12">AI Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-[#2d3035] p-8 rounded-xl border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">E-commerce Recommendation Engine</h3>
              <p className="text-white mb-6">
                Implemented a personalized product recommendation system that <strong className="text-white">increased average order value</strong> and improved customer engagement.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Machine Learning', 'API Integration', 'Data Processing'].map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-white/5 rounded-full text-sm text-[#A3D1FF]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-[#2d3035] p-8 rounded-xl border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">Customer Support Chatbot</h3>
              <p className="text-white mb-6">
                Developed an AI-powered chatbot that <strong className="text-white">handles customer inquiries automatically</strong>, reducing support costs and improving response times.
              </p>
              <div className="flex flex-wrap gap-2">
                {['NLP', 'Conversational AI', 'Knowledge Base Integration'].map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-white/5 rounded-full text-sm text-[#A3D1FF]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">AI Integration Projects</h2>
          <p className="text-white mb-12 max-w-2xl">
            Discover how we've integrated AI to transform business operations and user experiences.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <Link
              href="/work/case-studies/videoleap"
              className="bg-[#1b1b1b] rounded-xl overflow-hidden border border-white/10 hover:border-[#A3D1FF] transition-all group"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src="https://i.imgur.com/SubVB9A.jpeg"
                  alt="Videoleap AI Platform"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2 flex items-center justify-between">
                  Videoleap
                  <ExternalLink className="w-5 h-5 text-[#A3D1FF]" />
                </h3>
                <p className="text-white mb-4">AI-powered video editing with intelligent template generation.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[#A3D1FF]/10 text-[#A3D1FF] rounded-full text-sm">AI/ML</span>
                  <span className="px-3 py-1 bg-[#A3D1FF]/10 text-[#A3D1FF] rounded-full text-sm">Computer Vision</span>
                </div>
              </div>
            </Link>

            <Link
              href="/work/case-studies/mytube"
              className="bg-[#1b1b1b] rounded-xl overflow-hidden border border-white/10 hover:border-[#A3D1FF] transition-all group"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src="https://i.imgur.com/QNHXpzT.jpeg"
                  alt="MyTube AI Platform"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2 flex items-center justify-between">
                  MyTube
                  <ExternalLink className="w-5 h-5 text-[#A3D1FF]" />
                </h3>
                <p className="text-white mb-4">AI-driven video metadata analysis and processing system.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[#A3D1FF]/10 text-[#A3D1FF] rounded-full text-sm">NLP</span>
                  <span className="px-3 py-1 bg-[#A3D1FF]/10 text-[#A3D1FF] rounded-full text-sm">Automation</span>
                </div>
              </div>
            </Link>

            <Link
              href="/work/case-studies/automarginx"
              className="bg-[#1b1b1b] rounded-xl overflow-hidden border border-white/10 hover:border-[#A3D1FF] transition-all group"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src="https://i.imgur.com/PiKh199.png"
                  alt="AutoMarginX Analytics"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2 flex items-center justify-between">
                  AutoMarginX
                  <ExternalLink className="w-5 h-5 text-[#A3D1FF]" />
                </h3>
                <p className="text-white mb-4">Predictive analytics for dealership profit optimization.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[#A3D1FF]/10 text-[#A3D1FF] rounded-full text-sm">Analytics</span>
                  <span className="px-3 py-1 bg-[#A3D1FF]/10 text-[#A3D1FF] rounded-full text-sm">Predictions</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Lead Form Section */}
      <section id="contact-form" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <ServiceLeadForm 
            service="AI Integration"
            benefits={[
              "Reduction in manual tasks",
              "Improvement in decision-making",
              "High AI model accuracy",
              "Lower operational costs",
              "24/7 automated customer support"
            ]}
            testimonial={{
              quote: "The AI integration has transformed our business processes, saving us countless hours and providing insights we never had before.",
              author: "VP Product",
              role: "WebAI | VP Product at MarginX.ai"
            }}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Harness the Power of AI?</h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Let's create <strong className="text-white">intelligent solutions</strong> that automate <strong className="text-white">manual tasks</strong> and drive innovation and growth for your business.
          </p>
          <button 
            onClick={() => router.push('/contact')}
            className="mr_btn mr_btn_primary group relative overflow-hidden"
          >
            <span className="relative z-10">Start Your AI Journey</span>
            <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
            <ArrowRight className="ml-2 w-5 h-5 relative z-10 group-hover:rotate-45 transition-transform duration-300" />
          </button>
        </div>
      </section>
    </>
  );
}