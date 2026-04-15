"use client";

import React from 'react';
import { ArrowRight, Star, Timer, Users, Target, Zap, CircleCheck as CheckCircle2, ArrowUpRight, Code, Shield, Sparkles } from 'lucide-react';
import { useRouter } from 'next/navigation';
function FeatureCard({ icon: Icon, title, description }: {
  icon: any;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-[#1b1b1b] p-8 border border-white/10 hover:border-[#A3D1FF] transition-all group">
      <div className="relative mb-6">
        <div className="absolute inset-0 bg-[#A3D1FF]/20 blur-xl rounded-full"></div>
        <div className="bg-[#A3D1FF]/10 p-4 relative">
          <Icon className="w-8 h-8 text-[#A3D1FF] group-hover:scale-110 transition-transform" />
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-white">{description}</p>
    </div>
  );
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="bg-[#1b1b1b] p-8 border border-white/10 hover:border-[#A3D1FF] transition-all text-center">
      <div className="text-4xl font-bold text-[#A3D1FF] mb-2">{value}</div>
      <div className="text-white">{label}</div>
    </div>
  );
}

export default function VideoleapPage() {
  const router = useRouter();

  return (
    <>
      

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-black overflow-hidden">
        {/* Hero Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.imgur.com/SubVB9A.jpeg"
            alt="Videoleap"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        {/* Content */}
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10 hover:border-[#A3D1FF] transition-all duration-300 mb-6">
              <span className="text-[#A3D1FF] text-sm font-medium">Featured Project</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Videoleap
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Enhancing user engagement and template utilization for a leading video editing platform.
            </p>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6">Project Overview</h2>
          <p className="text-white mb-8">
            Videoleap aims to enhance user engagement by improving the app's discoverability and utilization of templates. This project was initiated based on user feedback indicating difficulty in finding relevant templates and low incentive to upload content.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">The Challenge</h3>
              <p className="text-white mb-6">
                Research and design how to increase traffic in Videoleap's new template feature to create a more popular community-driven app for creating, sharing, and consuming video content.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#A3D1FF] mt-1 mr-3" />
                  <div>
                    <p className="text-white font-medium">Problem Statement</p>
                    <p className="text-white">How might we incentivize users to upload content and help them quickly find relevant templates to increase engagement and retention?</p>
                  </div>
                </div>
                <img 
                  src="https://i.imgur.com/NFzsZ4x.jpeg"
                  alt="Problem Statement Visualization"
                  className="w-full mt-6"
                />
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-[#1b1b1b] p-6 border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-4">Key Findings</h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-[#A3D1FF] mr-3" />
                    Lack of relevant and personalized templates
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-[#A3D1FF] mr-3" />
                    Editing features too complex for average users
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-[#A3D1FF] mr-3" />
                    High volume content production needs
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-[#A3D1FF] mr-3" />
                    Low incentive for template sharing
                  </li>
                </ul>
              </div>
              <img 
                src="https://i.imgur.com/d3AoNgS.jpeg"
                alt="Target User Analysis"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stakeholder Interviews & Design Thinking Workshop */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1b1b1b]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6">Stakeholder Interviews & Design Thinking Workshop</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">Research Process</h3>
              <p className="text-white mb-6">
                We conducted extensive stakeholder interviews and organized design thinking workshops to understand user needs and pain points in depth. This collaborative approach helped us identify key opportunities for improvement.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#A3D1FF] mt-1 mr-3" />
                  <div>
                    <p className="text-white font-medium">User Interviews</p>
                    <p className="text-white">Conducted in-depth interviews with content creators and professional editors</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#A3D1FF] mt-1 mr-3" />
                  <div>
                    <p className="text-white font-medium">Workshop Sessions</p>
                    <p className="text-white">Organized collaborative design thinking workshops with stakeholders</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#A3D1FF] mt-1 mr-3" />
                  <div>
                    <p className="text-white font-medium">Data Analysis</p>
                    <p className="text-white">Analyzed user feedback and behavior patterns</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://i.imgur.com/mYkjfcr.png"
                alt="Design Thinking Workshop Process"
                className="w-full shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Presentation */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6">Team Presentation</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-white mb-6">
                Our team presented the research findings and proposed solutions to stakeholders, demonstrating how our design decisions would address user pain points and improve overall engagement.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#A3D1FF] mt-1 mr-3" />
                  <div>
                    <p className="text-white font-medium">Research Insights</p>
                    <p className="text-white">Presented key findings from user interviews and data analysis</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#A3D1FF] mt-1 mr-3" />
                  <div>
                    <p className="text-white font-medium">Solution Strategy</p>
                    <p className="text-white">Outlined proposed features and implementation approach</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://i.imgur.com/n5O9B0A.jpeg"
                alt="Team Presentation"
                className="w-full shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Photo */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6">Our Team</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-white mb-6">
                Our dedicated team of designers and developers worked collaboratively to create an intuitive and engaging video editing experience. The diverse expertise of our team members enabled us to tackle complex challenges and deliver innovative solutions.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#A3D1FF] mt-1 mr-3" />
                  <div>
                    <p className="text-white font-medium">Cross-functional Collaboration</p>
                    <p className="text-white">UX designers, developers, and product managers working in sync</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#A3D1FF] mt-1 mr-3" />
                  <div>
                    <p className="text-white font-medium">Agile Methodology</p>
                    <p className="text-white">Iterative development with regular feedback cycles</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://i.imgur.com/e0YNmub.jpeg"
                alt="Videoleap Team"
                className="w-full shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Press Coverage */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1b1b1b]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6">Press Coverage</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">TikTok Star Charli D'Amelio Partners with Videoleap</h3>
              <p className="text-white mb-6">
                Featured in NoCamels, our collaboration with TikTok sensation Charli D'Amelio showcases how Videoleap is revolutionizing content creation for the next generation of creators.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#A3D1FF] mt-1 mr-3" />
                  <div>
                    <p className="text-white font-medium">Strategic Partnership</p>
                    <p className="text-white">Collaboration with one of TikTok's biggest stars</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#A3D1FF] mt-1 mr-3" />
                  <div>
                    <p className="text-white font-medium">Media Coverage</p>
                    <p className="text-white">Featured in leading tech publications</p>
                  </div>
                </div>
              </div>
              <a 
                href="https://nocamels.com/2022/02/tiktok-star-charli-damelio/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 text-[#A3D1FF] hover:underline"
              >
                Read Full Article
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://i.imgur.com/bUr02As.jpeg"
                alt="Charli D'Amelio Videoleap Partnership"
                className="w-full shadow-lg hover:scale-105 transition-transform duration-300"
              />
              <img 
                src="https://i.imgur.com/mb9FO2b.jpeg"
                alt="Charli D'Amelio Using Videoleap"
                className="w-full shadow-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Wireframes */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1b1b1b]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6">Wireframes – Onboarding Flow</h2>
          <p className="text-white mb-8">
            We developed comprehensive wireframes for the onboarding flow to ensure a smooth and intuitive user experience. The designs focus on progressive disclosure and clear user guidance.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <img 
                src="https://i.imgur.com/tvM9tB4.jpeg"
                alt="Onboarding Flow Wireframes"
                className="w-full shadow-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div>
              <img 
                src="https://i.imgur.com/qBePcfz.png"
                alt="Onboarding Flow Details"
                className="w-full shadow-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          <div className="mt-8 space-y-4">
            <div className="flex items-start">
              <CheckCircle2 className="w-5 h-5 text-[#A3D1FF] mt-1 mr-3" />
              <div>
                <p className="text-white font-medium">User-Centric Design</p>
                <p className="text-white">Focused on creating an intuitive and engaging onboarding experience</p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle2 className="w-5 h-5 text-[#A3D1FF] mt-1 mr-3" />
              <div>
                <p className="text-white font-medium">Clear Navigation</p>
                <p className="text-white">Step-by-step guidance to help users understand and utilize key features</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Designs & Prototypes */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6">Final Designs & Prototypes</h2>
          <p className="text-white mb-12">
            After multiple iterations and user testing, we finalized three key flows that address the main user pain points and improve overall engagement.
          </p>

          {/* Onboarding Flow */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-white mb-6">Onboarding Flow</h3>
            <p className="text-white mb-8">
              A personalized onboarding experience that helps users discover relevant templates and understand key features.
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-[#A3D1FF] mt-1 mr-3" />
                <div>
                  <p className="text-white font-medium">Personalized Experience</p>
                  <p className="text-white">Tailored content recommendations based on user preferences</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-[#A3D1FF] mt-1 mr-3" />
                <div>
                  <p className="text-white font-medium">Progressive Disclosure</p>
                  <p className="text-white">Step-by-step introduction to key features</p>
                </div>
              </div>
            </div>
          </div>

          {/* Video Editor Flow */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-white mb-6">Video Editor Flow</h3>
            <p className="text-white mb-8">
              A dual-mode editor that caters to both beginners and advanced users, making video editing accessible to everyone.
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-[#A3D1FF] mt-1 mr-3" />
                <div>
                  <p className="text-white font-medium">Simplified Interface</p>
                  <p className="text-white">Easy-to-use controls for quick edits</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-[#A3D1FF] mt-1 mr-3" />
                <div>
                  <p className="text-white font-medium">Advanced Features</p>
                  <p className="text-white">Professional tools for experienced users</p>
                </div>
              </div>
            </div>
          </div>

          {/* Gamification Flow */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">Gamification Flow</h3>
            <p className="text-white mb-8">
              A rewards system that encourages template creation and sharing, building an active community of creators.
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-[#A3D1FF] mt-1 mr-3" />
                <div>
                  <p className="text-white font-medium">Points System</p>
                  <p className="text-white">Earn points through active participation and content creation</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-[#A3D1FF] mt-1 mr-3" />
                <div>
                  <p className="text-white font-medium">Rewards & Recognition</p>
                  <p className="text-white">Exclusive perks and features for active contributors</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Users */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1b1b1b]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6">Target Users</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={Users}
              title="Content Creators"
              description="Professional content creators looking for efficient video editing solutions."
            />
            <FeatureCard
              icon={Star}
              title="Influencers"
              description="Social media influencers needing quick, high-quality video edits."
            />
            <FeatureCard
              icon={Code}
              title="Professional Editors"
              description="Video editors seeking advanced tools and template sharing capabilities."
            />
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12">Solution</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Advanced vs Simple Editor</h3>
              <p className="text-white mb-6">
                Introduced dual editing modes to cater to both beginners and advanced users, ensuring everyone can create content efficiently regardless of their skill level.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#A3D1FF] mt-1 mr-3" />
                  <p className="text-gray-300">Simplified interface for quick edits</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#A3D1FF] mt-1 mr-3" />
                  <p className="text-gray-300">Advanced mode for professional features</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Community Points System</h3>
              <p className="text-white mb-6">
                Implemented a rewards system to incentivize template creation and sharing, fostering an active community of creators.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#A3D1FF] mt-1 mr-3" />
                  <p className="text-gray-300">Points for daily logins and submissions</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#A3D1FF] mt-1 mr-3" />
                  <p className="text-gray-300">Exclusive perks for active contributors</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1b1b1b]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={Shield}
              title="Smart Templates"
              description="AI-powered template recommendations based on user behavior and preferences."
            />
            <FeatureCard
              icon={Sparkles}
              title="Gamification"
              description="Points system and rewards for active community participation."
            />
            <FeatureCard
              icon={Zap}
              title="Dual Editing Modes"
              description="Simple and advanced interfaces for different skill levels."
            />
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12">Results & Impact</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <StatCard
              value="45%"
              label="Template Usage"
            />
            <StatCard
              value="30%"
              label="User Retention"
            />
            <StatCard
              value="60%"
              label="Content Sharing"
            />
            <StatCard
              value="4.8/5"
              label="User Satisfaction"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Digital Experience?</h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Let's create an engaging solution that drives real results for your business.
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