"use client";

import React from 'react';
import { ArrowRight, Palette, LayoutGrid as Layout, Users, Sparkles, BookOpen, Rocket, Figma, Briefcase } from 'lucide-react';
import ServiceLeadForm from '@/components/ServiceLeadForm';
import { useRouter } from 'next/navigation';
function MentorshipProgram({ icon: Icon, title, description }: {
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

function Testimonial({ name, role, quote, image }: {
  name: string;
  role: string;
  quote: string;
  image: string;
}) {
  return (
    <div className="bg-[#1b1b1b] p-8 rounded-xl border border-white/10 hover:border-[#A3D1FF] transition-all">
      <div className="flex items-center mb-6">
        <img src={image} alt={name} className="w-12 h-12 rounded-full object-cover" />
        <div className="ml-4">
          <h4 className="font-semibold text-white">{name}</h4>
          <p className="text-sm text-white">{role}</p>
        </div>
      </div>
      <p className="text-gray-300 italic">{quote}</p>
    </div>
  );
}

function MentorshipPackage({ title, price, duration, description, features }: {
  title: string;
  price: string;
  duration: string;
  description: string;
  features: string[];
}) {
  const router = useRouter();
  
  return (
    <div className="bg-[#1b1b1b] p-8 rounded-xl border border-white/10 hover:border-[#A3D1FF] transition-all">
      <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
      <div className="text-4xl font-bold text-[#A3D1FF] mb-4">{price}</div>
      <p className="text-white mb-6">{description}</p>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-300">
            <ArrowRight className="w-4 h-4 text-[#A3D1FF] mr-2" />
            <strong>{feature}</strong>
          </li>
        ))}
      </ul>
      <button 
        onClick={() => router.push('/contact')}
       className="w-full mr_btn mr_btn_primary group relative overflow-hidden"
      >
       <span className="relative z-10">Get Started</span>
       <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
      </button>
    </div>
  );
}

export default function MentorshipPage() {
  const router = useRouter();

  return (
    <>
      

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-black overflow-hidden">
        {/* Hero Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=2000&q=80"
            alt="Mentorship Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        {/* Content */}
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              UX/UI Tutoring & Mentorship
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              <strong className="text-white">Accelerate your career growth</strong> with personalized mentorship, Figma mastery training, and portfolio development that <strong className="text-white">lands you dream jobs</strong> in UX/UI design.
            </p>
            <button 
              onClick={() => router.push('/contact')}
             className="mr_btn mr_btn_primary group relative overflow-hidden"
            >
             <span className="relative z-10">Start Your Journey</span>
             <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
             <ArrowRight className="ml-2 w-5 h-5 relative z-10 group-hover:rotate-45 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <MentorshipProgram
              icon={Figma}
              title="Figma Mastery"
              description="Become more efficient with advanced Figma techniques that most designers don't know, giving you a competitive edge."
            />
            <MentorshipProgram
              icon={Layout}
              title="UI Design Skills"
              description="Create interfaces that are more visually appealing through modern design principles, typography, and visual hierarchy."
            />
            <MentorshipProgram
              icon={Users}
              title="UX Best Practices"
              description="Increase user satisfaction with research-backed UX methodologies and user-centered design approaches."
            />
            <MentorshipProgram
              icon={Briefcase}
              title="Portfolio Development"
              description="Improve your interview callback rate with a standout portfolio that showcases your skills and problem-solving abilities."
            />
            <MentorshipProgram
              icon={Rocket}
              title="Career Growth"
              description="Land jobs faster with personalized guidance on job searching, interviewing, and salary negotiation."
            />
            <MentorshipProgram
              icon={BookOpen}
              title="Design Systems"
              description="Become more valuable to employers by mastering scalable design systems for enterprise products."
            />
          </div>
        </div>
      </section>

      {/* Mentorship Packages */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Mentorship Packages</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <MentorshipPackage
              title="Figma Mastery"
              price="$499"
              duration="/month"
              description="Master Figma and modern UI design fundamentals"
              features={[
                "Faster workflow efficiency",
                "4 one-hour sessions monthly",
                "Advanced component creation",
                "Auto-layout mastery",
                "Plugin development intro",
                "1-month commitment"
              ]}
            />
            <MentorshipPackage
              title="Portfolio Builder"
              price="$799"
              duration="/month"
              description="Create a standout design portfolio"
              features={[
                "More interview callbacks",
                "6 one-hour sessions monthly",
                "Strategic portfolio planning",
                "Case study development",
                "Personalized feedback",
                "2-month commitment"
              ]}
            />
            <MentorshipPackage
              title="Career Accelerator"
              price="$1,299"
              duration="/month"
              description="Comprehensive UX/UI career growth"
              features={[
                "Faster job placement",
                "8 one-hour sessions monthly",
                "Personalized learning path",
                "Portfolio development",
                "Interview coaching",
                "3-month commitment"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1b1b1b]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12">How It Works</h2>
          <div className="space-y-12">
            <div className="flex items-start">
              <div className="bg-[#A3D1FF] text-black w-12 h-12 rounded-full flex items-center justify-center font-bold mr-6">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Initial Assessment</h3>
                <p className="text-white"><strong className="text-white">Personalized approach</strong> based on evaluating your current skills, goals, and choosing the right mentorship package.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-[#A3D1FF] text-black w-12 h-12 rounded-full flex items-center justify-center font-bold mr-6">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Learning Path</h3>
                <p className="text-white"><strong className="text-white">Faster skill acquisition</strong> through a customized curriculum focused on your specific career goals.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-[#A3D1FF] text-black w-12 h-12 rounded-full flex items-center justify-center font-bold mr-6">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Hands-on Practice</h3>
                <p className="text-white"><strong className="text-white">Better skill retention</strong> through real-world projects with detailed feedback and guidance.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-[#A3D1FF] text-black w-12 h-12 rounded-full flex items-center justify-center font-bold mr-6">
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Career Support</h3>
                <p className="text-white"><strong className="text-white">Faster job placement</strong> with ongoing support for job applications, interviews, and career advancement.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Form Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <ServiceLeadForm 
            service="UX/UI Mentorship"
            benefits={[
              "Faster career advancement",
              "More efficient workflow",
              "Higher salary potential",
              "More interview callbacks",
              "Better skill retention"
            ]}
            testimonial={{
              quote: "Marc's mentorship was transformative for my design career. His guidance helped me land my dream job in UX design.",
              author: "Julia Friedman",
              role: "UX Designer"
            }}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Level Up Your Design Career?</h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Take the first step towards <strong className="text-white">faster career growth</strong> with personalized UX/UI mentorship.
          </p>
          <button 
            onClick={() => router.push('/contact')}
            className="mr_btn mr_btn_primary group relative overflow-hidden"
          >
            <span className="relative z-10">Schedule Your Free Consultation</span>
            <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
            <ArrowRight className="ml-2 w-5 h-5 relative z-10 group-hover:rotate-45 transition-transform duration-300" />
          </button>
        </div>
      </section>
    </>
  );
}