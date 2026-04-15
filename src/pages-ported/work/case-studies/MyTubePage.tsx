"use client";

import React from 'react';
import { ArrowRight, Play, Search, Settings, Zap, CircleCheck as CheckCircle2 } from 'lucide-react';
function Feature({ icon: Icon, title, description }: {
  icon: any;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-[#1b1b1b] p-8 rounded-xl border border-white/10 hover:border-[#A3D1FF] transition-all group">
      <Icon className="w-8 h-8 text-[#A3D1FF] mb-4" />
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-white">{description}</p>
    </div>
  );
}

function WireframeCard({ image, title, description }: {
  image: string;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-[#1b1b1b] p-6 rounded-xl border border-white/10 hover:border-[#A3D1FF] transition-all">
      <div className="aspect-video overflow-hidden rounded-lg mb-6">
        <img 
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-white">{description}</p>
    </div>
  );
}

export default function MyTubePage() {
  return (
    <>
      

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              MyTube Platform
            </h1>
            <p className="text-xl text-white mb-8">
              A comprehensive video metadata management system built on data-driven design principles, empowering media and manufacturing sectors with AI-powered insights.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Design Showcase */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-8">
              <div className="aspect-[4/3] overflow-hidden rounded-xl">
                <img
                  src="https://ik.imagekit.io/qcvroy8xpd/QNHXpzT%20(1).jpeg"
                  alt="MyTube Dashboard Interface"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="aspect-[4/3] overflow-hidden rounded-xl">
                <img 
                  src="https://i.imgur.com/ZGLdkzN.jpeg"
                  alt="MyTube Analytics View"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            <div className="space-y-8">
              <div className="aspect-[4/3] overflow-hidden rounded-xl">
                <img 
                  src="https://i.imgur.com/ZDPU1yO.png"
                  alt="MyTube Content Management"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="aspect-[4/3] overflow-hidden rounded-xl">
                <img 
                  src="https://i.imgur.com/Vt1rIYu.jpeg"
                  alt="MyTube User Interface"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design System Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1b1b1b]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">Data-Driven Design System</h2>
          <p className="text-xl text-gray-300 mb-12">
            Our approach combines modular design principles with data analytics to create a scalable, user-friendly platform that evolves with user needs and business requirements.
          </p>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-4">Interface Design</h3>
                  <img
                    src="https://ik.imagekit.io/qcvroy8xpd/QNHXpzT%20(1).jpeg"
                    alt="Interface Design"
                    className="rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 mb-4"
                  />
                  <p className="text-white">
                    Clean, intuitive interface design that prioritizes user experience and accessibility.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-4">Analytics Dashboard</h3>
                  <img 
                    src="https://i.imgur.com/ZGLdkzN.jpeg"
                    alt="Analytics Dashboard"
                    className="rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 mb-4"
                  />
                  <p className="text-white">
                    Comprehensive analytics tools providing actionable insights and performance metrics.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">Content Management</h3>
                <img 
                  src="https://i.imgur.com/ZDPU1yO.png"
                  alt="Content Management"
                  className="rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 mb-4"
                />
                <p className="text-white">
                  Efficient content management system with advanced metadata handling capabilities.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">User Experience</h3>
                <img 
                  src="https://i.imgur.com/Vt1rIYu.jpeg"
                  alt="User Experience"
                  className="rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 mb-4"
                />
                <p className="text-white">
                  Seamless user experience with intuitive navigation and workflow optimization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Prototypes */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12">Interactive Prototypes</h2>
          
          {/* Onboarding Flow */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-white mb-6">Onboarding Experience</h3>
            <p className="text-white mb-8">
              A personalized onboarding flow that guides users through key features and functionality.
            </p>
            <div className="bg-[#1b1b1b] p-8 rounded-xl border border-white/10">
              <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
                <iframe 
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    border: '1px solid rgba(0, 0, 0, 0.1)',
                    borderRadius: '0.5rem'
                  }}
                  src="https://embed.figma.com/proto/6gJhFkgvP0Uqc2fJv0RPzQ/Mytube?node-id=26-12919&scaling=contain&content-scaling=contain&page-id=0%3A1&starting-point-node-id=26%3A12919&show-proto-sidebar=1&embed-host=share" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>

          {/* Data Analytics Flow */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-white mb-6">Data Analytics Dashboard</h3>
            <p className="text-white mb-8">
              Comprehensive analytics interface providing actionable insights and real-time data visualization.
            </p>
            <div className="bg-[#1b1b1b] p-8 rounded-xl border border-white/10">
              <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
                <iframe 
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    border: '1px solid rgba(0, 0, 0, 0.1)',
                    borderRadius: '0.5rem'
                  }}
                  src="https://embed.figma.com/proto/6gJhFkgvP0Uqc2fJv0RPzQ/Mytube?node-id=26-13016&scaling=contain&content-scaling=contain&page-id=0%3A1&starting-point-node-id=26%3A13016&show-proto-sidebar=1&embed-host=share" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>

          {/* Additional Features */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">Advanced Features</h3>
            <p className="text-white mb-8">
              Explore additional platform capabilities and integrations.
            </p>
            <div className="bg-[#1b1b1b] p-8 rounded-xl border border-white/10">
              <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
                <iframe 
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    border: '1px solid rgba(0, 0, 0, 0.1)',
                    borderRadius: '0.5rem'
                  }}
                  src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F6gJhFkgvP0Uqc2fJv0RPzQ%2FMytube%3Fnode-id%3D175-22602%26t%3D8g4064Q14V1QZYGW-1%26scaling%3Dcontain%26content-scaling%3Dcontain%26page-id%3D0%253A1%26starting-point-node-id%3D175%253A22602%26show-proto-sidebar%3D1" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1b1b1b]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12">Design Process</h2>
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">1. Research & Discovery</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-white mb-4">
                    Our process began with comprehensive user research and stakeholder interviews:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-[#A3D1FF] mr-3" />
                      User interviews and surveys
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-[#A3D1FF] mr-3" />
                      Competitor analysis
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-[#A3D1FF] mr-3" />
                      Market research
                    </li>
                  </ul>
                </div>
                <div className="bg-[#2d3035] p-6 rounded-xl">
                  <h4 className="text-lg font-semibold text-white mb-4">Key Findings</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-[#A3D1FF] mr-3" />
                      Need for streamlined metadata management
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-[#A3D1FF] mr-3" />
                      Demand for real-time analytics
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-[#A3D1FF] mr-3" />
                      Integration requirements
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">2. Design System Development</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-white mb-4">
                    Created a comprehensive design system focusing on:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-[#A3D1FF] mr-3" />
                      Component library
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-[#A3D1FF] mr-3" />
                      Design tokens
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-[#A3D1FF] mr-3" />
                      Documentation
                    </li>
                  </ul>
                </div>
                <div className="bg-[#2d3035] p-6 rounded-xl">
                  <h4 className="text-lg font-semibold text-white mb-4">Implementation</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-[#A3D1FF] mr-3" />
                      Figma component library
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-[#A3D1FF] mr-3" />
                      Style guide
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-[#A3D1FF] mr-3" />
                      Pattern library
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wireframes Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">Wireframe Designs</h2>
          <p className="text-xl text-white mb-12">
            Our wireframe designs focus on creating intuitive user flows and clear information hierarchy, ensuring a seamless experience for both content creators and viewers.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <WireframeCard
              image="https://i.imgur.com/q2chntq.png"
              title="Content Management Dashboard"
              description="Centralized dashboard providing quick access to video analytics, metadata management, and content organization tools."
            />
            <WireframeCard
              image="https://i.imgur.com/ib7VgQq.png"
              title="Video Upload Interface"
              description="Streamlined upload process with drag-and-drop functionality and batch metadata editing capabilities."
            />
            <WireframeCard
              image="https://i.imgur.com/lfygewJ.png"
              title="Analytics Overview"
              description="Comprehensive analytics view with customizable metrics and performance insights for content optimization."
            />
            <WireframeCard
              image="https://i.imgur.com/eJMI6YJ.png"
              title="Metadata Editor"
              description="Advanced metadata editing interface with AI-powered suggestions and batch processing tools."
            />
          </div>

          <div className="mt-12 bg-[#2d3035] p-8 rounded-xl border border-white/10">
            <h3 className="text-2xl font-semibold text-white mb-6">Design Considerations</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">User Interface</h4>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-[#A3D1FF] mr-3" />
                    Intuitive navigation and clear hierarchy
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-[#A3D1FF] mr-3" />
                    Consistent layout patterns
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-[#A3D1FF] mr-3" />
                    Responsive design principles
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">User Experience</h4>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-[#A3D1FF] mr-3" />
                    Streamlined workflows
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-[#A3D1FF] mr-3" />
                    Progressive disclosure
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-[#A3D1FF] mr-3" />
                    Error prevention
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results & Impact */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12">Results & Impact</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-[#1b1b1b] p-8 rounded-xl border border-white/10">
              <div className="text-4xl font-bold text-[#A3D1FF] mb-2">60%</div>
              <div className="text-white">Faster Processing</div>
            </div>
            <div className="bg-[#1b1b1b] p-8 rounded-xl border border-white/10">
              <div className="text-4xl font-bold text-[#A3D1FF] mb-2">85%</div>
              <div className="text-white">User Satisfaction</div>
            </div>
            <div className="bg-[#1b1b1b] p-8 rounded-xl border border-white/10">
              <div className="text-4xl font-bold text-[#A3D1FF] mb-2">40%</div>
              <div className="text-white">Time Saved</div>
            </div>
            <div className="bg-[#1b1b1b] p-8 rounded-xl border border-white/10">
              <div className="text-4xl font-bold text-[#A3D1FF] mb-2">95%</div>
              <div className="text-white">Data Accuracy</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Start Your Project</h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Ready to transform your digital presence with innovative solutions?
          </p>
          <button
            onClick={() => router.push('/contact')}
            className="mr_btn mr_btn_primary inline-flex items-center gap-2"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </>
  );
}