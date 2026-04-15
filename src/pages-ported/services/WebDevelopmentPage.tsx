"use client";

import React from 'react';
import { ArrowRight, Code, Database, Globe, Zap, Shield, Gauge, ExternalLink } from 'lucide-react';
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

function TechnologyStack({ icon: Icon, name, description }: {
  icon: any;
  name: string;
  description: string;
}) {
  return (
    <div className="flex items-start space-x-4">
      <div className="bg-[#A3D1FF]/10 p-3 rounded-lg">
        <Icon className="w-6 h-6 text-[#A3D1FF]" />
      </div>
      <div>
        <h4 className="font-semibold text-white mb-1">{name}</h4>
        <p className="text-sm text-white">{description}</p>
      </div>
    </div>
  );
}

function ServicePackage({ title, description, features, recommended = false }: {
  title: string;
  description?: string;
  features: string[];
  recommended?: boolean;
}) {
  return (
    <div className={`bg-[#1b1b1b] p-8 rounded-xl border ${recommended ? 'border-[#A3D1FF]' : 'border-white/10'} hover:border-[#A3D1FF] transition-all relative flex flex-col`}>
      {recommended && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#A3D1FF] text-black px-4 py-1 rounded-full text-sm font-medium">
          Most Popular
        </div>
      )}
      <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
      {description && (
        <p className="text-gray-300 mb-6 leading-relaxed">{description}</p>
      )}
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-300">
            <ArrowRight className="w-4 h-4 text-[#A3D1FF] mr-2 flex-shrink-0" />
            <strong>{feature}</strong>
          </li>
        ))}
      </ul>
      <button
        onClick={() => {
          const form = document.getElementById('contact-form');
          form?.scrollIntoView({ behavior: 'smooth' });
        }}
        className="mr_btn mr_btn_primary w-full mt-auto"
      >
        <span>Request a Quote</span>
      </button>
    </div>
  );
}

export default function WebDevelopmentPage() {
  const router = useRouter();

  return (
    <>
      

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-black overflow-hidden">
        {/* Hero Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://ik.imagekit.io/qcvroy8xpd/PW8VUKH.png?updatedAt=1759693058055&tr=f-webp" 
            alt="Web Development Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        {/* Content */}
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Web Design Services
            </h1>
            <h2 className="text-xl sm:text-2xl text-[#A3D1FF] mb-6">
              Custom Websites That Convert Visitors Into Customers
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Your website should <strong className="text-white">load in under 2 seconds</strong>, rank on Google without paid ads, and turn strangers into customers while you sleep. That&apos;s not a fantasy — that&apos;s what custom-coded React sites do when they&apos;re built right. I&apos;ve built <strong className="text-white">50+ of them</strong>.
            </p>
            <div className="flex gap-4">
              <button 
                onClick={() => router.push('/contact')}
                className="mr_btn mr_btn_primary group relative overflow-hidden"
              >
                <span className="relative z-10">Start Your Project</span>
                <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                <ArrowRight className="ml-2 w-5 h-5 relative z-10 group-hover:rotate-45 transition-transform duration-300" />
              </button>
              <button 
                onClick={() => router.push('/work')}
                className="mr_btn mr_btn_outline group"
              >
                <span className="relative z-10">View Portfolio</span>
                <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Why Hire Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="grid gap-8">
                <FeatureCard
                  icon={Code}
                  title="Custom Development"
                  description="Websites built from scratch to meet your specific business needs, with higher conversion rates than templates."
                />
                <FeatureCard
                  icon={Database}
                  title="Scalable Architecture"
                  description="Future-proof solutions designed to grow with your business, reducing technical debt."
                />
                <FeatureCard
                  icon={Globe}
                  title="Responsive Design"
                  description="Seamless experience across all devices, capturing your potential audience regardless of device."
                />
              </div>
            </div>
            <div>
              <img 
                src="https://ik.imagekit.io/qcvroy8xpd/uoq5Ztg.jpeg" 
                alt="Marc Coding"
                className="rounded-xl shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://ik.imagekit.io/qcvroy8xpd/TTV8Liw.jpg" 
                alt="Web Development"
                className="rounded-xl shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div>
              <div className="grid gap-8">
                <FeatureCard
                  icon={Zap}
                  title="Performance Optimization"
                  description="High PageSpeed scores standard, with sites that load in under 2 seconds for lower bounce rates."
                />
                <FeatureCard
                  icon={Shield}
                  title="Security First"
                  description="Enterprise-grade security measures protecting your data and users with breach prevention."
                />
                <FeatureCard
                  icon={Gauge}
                  title="SEO Optimization"
                  description="Built-in best practices for maximum search visibility, increasing organic traffic."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1b1b1b]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12">Technology Stack</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <TechnologyStack
              icon={Code}
              name="Frontend Development"
              description="React, Next.js, TypeScript, and modern CSS frameworks for responsive, interactive interfaces"
            />
            <TechnologyStack
              icon={Database}
              name="Backend Development"
              description="Node.js, Express, and PostgreSQL for robust server-side solutions with high uptime"
            />
            <TechnologyStack
              icon={Shield}
              name="Security"
              description="Industry-standard security practices and regular audits for complete data protection"
            />
            <TechnologyStack
              icon={Gauge}
              name="Performance"
              description="Optimized for speed with modern build tools and caching strategies for sub-2-second load times"
            />
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Development Packages</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <ServicePackage
              title="Landing Page"
              description="Perfect for testing a new offer, launching a campaign, or replacing a page that isn't converting. A single, focused page designed to do ONE thing — get the visitor to take action. SEO-optimized, fast as hell, delivered in 2 weeks."
              features={[
                "Converts more visitors",
                "Mobile responsive design",
                "SEO optimization",
                "High PageSpeed score",
                "Analytics integration",
                "2-week delivery"
              ]}
            />
            <ServicePackage
              title="Business Website"
              description="Your full online presence, built from scratch. 5-7 custom pages designed to walk visitors from 'who is this?' to 'I need to work with them.' Includes a blog (Google rewards fresh content), a CMS so you can edit without calling a developer, and a performance score your competitors will envy."
              features={[
                "Increases leads",
                "5-7 custom pages",
                "Content management system",
                "Blog setup with SEO",
                "Performance optimization",
                "4-6 week delivery"
              ]}
              recommended={true}
            />
            <ServicePackage
              title="Custom Web App"
              description="For when a website isn't enough and you need software. Think booking systems, dashboards, internal tools, member portals. Custom-built to replace the 4 spreadsheets and 3 subscriptions you're currently duct-taping together."
              features={[
                "Reduces operational costs",
                "Custom functionality",
                "User authentication",
                "Database integration",
                "Admin dashboard",
                "8-12 week delivery"
              ]}
            />
          </div>
          <div className="mt-8 text-center">
            <p className="text-white">
              Need a custom solution? <button onClick={() => router.push('/contact')} className="text-[#A3D1FF] hover:underline">Get in touch</button> for a personalized quote.
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1b1b1b]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12">Development Process</h2>
          <div className="space-y-12">
            <div className="flex items-start">
              <div className="bg-[#A3D1FF] text-black w-12 h-12 rounded-full flex items-center justify-center font-bold mr-6">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Discovery & Planning</h3>
                <p className="text-white">I dig into your business, your competitors, and your customers before writing a single line of code. Most developers skip this. That&apos;s why most websites don&apos;t convert.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-[#A3D1FF] text-black w-12 h-12 rounded-full flex items-center justify-center font-bold mr-6">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Design & Prototyping</h3>
                <p className="text-white"><strong className="text-white">Higher engagement</strong> with user-tested interfaces and interactive prototypes.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-[#A3D1FF] text-black w-12 h-12 rounded-full flex items-center justify-center font-bold mr-6">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Development</h3>
                <p className="text-white"><strong className="text-white">High PageSpeed scores</strong> through optimized code and best practices.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-[#A3D1FF] text-black w-12 h-12 rounded-full flex items-center justify-center font-bold mr-6">
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Testing & Launch</h3>
                <p className="text-white"><strong className="text-white">High uptime</strong> with rigorous testing and optimized deployment.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">Web Design Projects</h2>
          <p className="text-white mb-12 max-w-2xl">
            A look at some of my recent builds — all custom-coded, all performance-tuned.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link
              href="/work/case-studies/binns-media"
              className="bg-[#1b1b1b] rounded-xl overflow-hidden border border-white/10 hover:border-[#A3D1FF] transition-all group"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src="https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%204%20-%2016x9.png?updatedAt=1767539579710"
                  alt="Binns Media Group Platform"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2 flex items-center justify-between">
                  Binns Media Group
                  <ExternalLink className="w-5 h-5 text-[#A3D1FF]" />
                </h3>
                <p className="text-white mb-4">Digital media platform with high performance and engagement.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[#A3D1FF]/10 text-[#A3D1FF] rounded-full text-sm">React 18</span>
                  <span className="px-3 py-1 bg-[#A3D1FF]/10 text-[#A3D1FF] rounded-full text-sm">GSAP</span>
                </div>
              </div>
            </Link>

            <Link
              href="/work/case-studies/untapped-africa"
              className="bg-[#1b1b1b] rounded-xl overflow-hidden border border-white/10 hover:border-[#A3D1FF] transition-all group"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src="https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%201%20-%201x1(1).png?updatedAt=1767539579782"
                  alt="Untapped Africa Platform"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2 flex items-center justify-between">
                  Untapped Africa
                  <ExternalLink className="w-5 h-5 text-[#A3D1FF]" />
                </h3>
                <p className="text-white mb-4">Comprehensive platform serving 500,000+ people across Africa.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[#A3D1FF]/10 text-[#A3D1FF] rounded-full text-sm">Next.js</span>
                  <span className="px-3 py-1 bg-[#A3D1FF]/10 text-[#A3D1FF] rounded-full text-sm">Postgres</span>
                </div>
              </div>
            </Link>

            <Link
              href="/work/case-studies/secure-annapolis"
              className="bg-[#1b1b1b] rounded-xl overflow-hidden border border-white/10 hover:border-[#A3D1FF] transition-all group"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src="https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%201%20-%201x1(2).png?updatedAt=1767539579194"
                  alt="A Secure Annapolis Locksmith"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2 flex items-center justify-between">
                  A Secure Annapolis
                  <ExternalLink className="w-5 h-5 text-[#A3D1FF]" />
                </h3>
                <p className="text-white mb-4">Professional locksmith website with strong mobile conversion.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[#A3D1FF]/10 text-[#A3D1FF] rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-[#A3D1FF]/10 text-[#A3D1FF] rounded-full text-sm">Local SEO</span>
                </div>
              </div>
            </Link>

            <Link
              href="/work/case-studies/paving-leads"
              className="bg-[#1b1b1b] rounded-xl overflow-hidden border border-white/10 hover:border-[#A3D1FF] transition-all group"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src="https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%204%20-%2016_9.png?updatedAt=1767539579010"
                  alt="Paving Leads Platform"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2 flex items-center justify-between">
                  Paving Leads
                  <ExternalLink className="w-5 h-5 text-[#A3D1FF]" />
                </h3>
                <p className="text-white mb-4">#1 Google ranking with 300% increase in organic traffic.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[#A3D1FF]/10 text-[#A3D1FF] rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-[#A3D1FF]/10 text-[#A3D1FF] rounded-full text-sm">SEO</span>
                </div>
              </div>
            </Link>

            <Link
              href="/work/case-studies/tarchip"
              className="bg-[#1b1b1b] rounded-xl overflow-hidden border border-white/10 hover:border-[#A3D1FF] transition-all group"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src="https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%204%20-%2016x9(5).png?updatedAt=1767539578933"
                  alt="Cumberland Tar & Chip"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2 flex items-center justify-between">
                  Cumberland Tar & Chip
                  <ExternalLink className="w-5 h-5 text-[#A3D1FF]" />
                </h3>
                <p className="text-white mb-4">Specialty paving website with professional showcase design.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[#A3D1FF]/10 text-[#A3D1FF] rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-[#A3D1FF]/10 text-[#A3D1FF] rounded-full text-sm">Portfolio</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Service Lead Form Section */}
      <section id="contact-form" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <ServiceLeadForm
            service="Web Design"
            benefits={[
              "Increase in conversion rates",
              "High PageSpeed scores standard",
              "SEO-optimized for higher rankings",
              "Mobile-first responsive design",
              "30-day post-launch support"
            ]}
            testimonial={{
              quote: "Marc was able to execute the vision perfectly! He's big on communication and easy to speak with. Marc dedicates his time to the client, ensuring the client is completely satisfied at each step of the process.",
              author: "Omar Turner",
              role: "Chief Executive Officer, Binns Media Group"
            }}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Web Project?</h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Let's create a high-performing website that drives <strong className="text-white">real, measurable results</strong> for your business.
          </p>
          <button 
            onClick={() => router.push('/contact')}
            className="mr_btn mr_btn_primary group relative overflow-hidden"
          >
            <span className="relative z-10">Schedule a Consultation</span>
            <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
            <ArrowRight className="ml-2 w-5 h-5 relative z-10 group-hover:rotate-45 transition-transform duration-300" />
          </button>
          
          {/* Related Services */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <h3 className="text-xl font-semibold text-white mb-6">Related Services</h3>
            <div className="grid md:grid-cols-4 gap-4">
              <Link 
                href="/services/design" 
                className="p-4 bg-[#1b1b1b] rounded-lg border border-white/10 hover:border-[#A3D1FF] transition-colors group"
                title="UI/UX design services"
              >
                <h4 className="text-white font-medium group-hover:text-[#A3D1FF] transition-colors">UI/UX Design</h4>
                <p className="text-white text-sm mt-1">User-centered design</p>
              </Link>
              <Link
                href="/services/design-systems"
                className="p-4 bg-[#1b1b1b] rounded-lg border border-white/10 hover:border-[#A3D1FF] transition-colors group"
                title="Design systems"
              >
                <h4 className="text-white font-medium group-hover:text-[#A3D1FF] transition-colors">Design Systems</h4>
                <p className="text-white text-sm mt-1">Scalable component libraries</p>
              </Link>
              <Link
                href="/services/ai-integration"
                className="p-4 bg-[#1b1b1b] rounded-lg border border-white/10 hover:border-[#A3D1FF] transition-colors group"
                title="AI integration services"
              >
                <h4 className="text-white font-medium group-hover:text-[#A3D1FF] transition-colors">AI Integration</h4>
                <p className="text-white text-sm mt-1">Smart automation</p>
              </Link>
              <Link
                href="/services/cybersecurity"
                className="p-4 bg-[#1b1b1b] rounded-lg border border-white/10 hover:border-[#A3D1FF] transition-colors group"
                title="Cybersecurity services"
              >
                <h4 className="text-white font-medium group-hover:text-[#A3D1FF] transition-colors">Cybersecurity</h4>
                <p className="text-white text-sm mt-1">Secure solutions</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}