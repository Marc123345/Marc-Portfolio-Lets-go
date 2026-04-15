"use client";

import React from 'react';
import { ArrowRight, ShieldCheck, Lock, Search, Database, Server, FileCode, Users, Eye, ExternalLink } from 'lucide-react';
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

function ServiceCard({ title, description, features }: {
  title: string;
  description: string;
  features: string[];
}) {
  return (
    <div className="bg-[#1b1b1b] p-8 rounded-xl border border-white/10 hover:border-[#A3D1FF] transition-all">
      <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
      <p className="text-white mb-6">{description}</p>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start text-gray-300">
            <ArrowRight className="w-4 h-4 text-[#A3D1FF] mt-1 mr-2" />
            <strong>{feature}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function CybersecurityPage() {
  const router = useRouter();

  return (
    <>
      

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Cybersecurity Services
            </h1>
            <p className="text-xl text-white mb-8">
              <strong className="text-white">Prevent security breaches</strong> with comprehensive security solutions that protect your digital assets, ensure compliance, and <strong className="text-white">build unshakeable trust</strong> with your customers.
            </p>
            <button 
              onClick={() => router.push('/contact')}
              className="mr_btn mr_btn_primary group relative overflow-hidden"
            >
              <span className="relative z-10">Secure Your Business</span>
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
              icon={Search}
              title="Security Assessment"
              description="Identify vulnerabilities with comprehensive reviews that uncover security gaps before attackers can exploit them."
            />
            <FeatureCard
              icon={Users}
              title="UX Audit for Security"
              description="Reduce user security errors with workflows that balance protection and usability."
            />
            <FeatureCard
              icon={Database}
              title="Secure Backend Development"
              description="Prevent data breaches with hardened APIs, role-based access control, and encryption."
            />
            <FeatureCard
              icon={Eye}
              title="Monitoring & Alerting"
              description="Detect security incidents quickly through real-time monitoring and automated alerts."
            />
            <FeatureCard
              icon={Server}
              title="Cloud Security"
              description="Achieve high security compliance with cloud infrastructure hardening and automated security checks."
            />
            <FeatureCard
              icon={FileCode}
              title="Secure Code Review"
              description="Eliminate vulnerabilities before deployment with expert code analysis and security testing."
            />
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Comprehensive Security Solutions</h2>
          <div className="space-y-12">
            <ServiceCard
              title="1. Discovery & Security Assessment"
              description="Identify vulnerabilities and security gaps in your digital infrastructure."
              features={[
                "High vulnerability detection rate through OWASP Top 10 analysis",
                "Reduction in security risks through penetration testing",
                "Improvement in secure user workflows through UX audits",
                "Compliance verification with industry standards"
              ]}
            />
            
            <ServiceCard
              title="2. Secure Backend Foundations"
              description="Build robust security into your application's core infrastructure."
              features={[
                "Strong data protection with role-based access control (RBAC)",
                "Data protection with encryption-at-rest and in-transit",
                "Faster threat detection with real-time monitoring",
                "Reduction in incident response time with automated alerts"
              ]}
            />
            
            <ServiceCard
              title="3. Future-Proof Infrastructure"
              description="Ensure your infrastructure is secure, scalable, and adaptable to future needs."
              features={[
                "Secure container deployment with image scanning",
                "Reduction in security issues with CI/CD pipeline checks",
                "High data integrity with multi-region backups",
                "Zero downtime security updates with hybrid-cloud architecture"
              ]}
            />
            
            <ServiceCard
              title="4. Secure, Intuitive UX/UI"
              description="Create user interfaces that enhance security without sacrificing usability."
              features={[
                "Reduction in user security errors with clear status indicators",
                "High completion rate for security-critical flows like MFA enrollment",
                "Faster security management with visual role interfaces",
                "Full transparency with comprehensive audit logs"
              ]}
            />
            
            <ServiceCard
              title="5. Compliance & Training"
              description="Ensure regulatory compliance and build a security-conscious culture."
              features={[
                "Complete GDPR/POPIA compliance implementation",
                "Reduction in compliance reporting time",
                "Decrease in security incidents through staff training",
                "Documented incident response procedures"
              ]}
            />
            
            <ServiceCard
              title="6. Roadmap & Ongoing Support"
              description="Maintain and enhance your security posture over time."
              features={[
                "Critical issues resolved quickly",
                "Quarterly security roadmap updates",
                "24/7 incident support with fast response time",
                "Complete coverage with regular penetration testing"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1b1b1b]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">The Benefits of Our Approach</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-[#2d3035] p-6 rounded-xl border border-white/10 text-center">
              <ShieldCheck className="w-12 h-12 text-[#A3D1FF] mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Rock-Solid Security</h3>
              <p className="text-white"><strong className="text-white">Strong breach prevention</strong> with a technology stack that safeguards your data and protects against threats.</p>
            </div>
            <div className="bg-[#2d3035] p-6 rounded-xl border border-white/10 text-center">
              <Users className="w-12 h-12 text-[#A3D1FF] mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Seamless Experience</h3>
              <p className="text-white"><strong className="text-white">Reduction</strong> in security-related friction with interfaces that make security intuitive, not a burden.</p>
            </div>
            <div className="bg-[#2d3035] p-6 rounded-xl border border-white/10 text-center">
              <Lock className="w-12 h-12 text-[#A3D1FF] mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Compliance Built-In</h3>
              <p className="text-white"><strong className="text-white">Regulatory compliance</strong> at every layer, reducing legal and business risk.</p>
            </div>
            <div className="bg-[#2d3035] p-6 rounded-xl border border-white/10 text-center">
              <Eye className="w-12 h-12 text-[#A3D1FF] mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Proactive Protection</h3>
              <p className="text-white"><strong className="text-white">Threats detected</strong> before they cause damage through ongoing monitoring and threat intelligence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">Security-Focused Projects</h2>
          <p className="text-white mb-12 max-w-2xl">
            Explore projects where we've implemented enterprise-grade security measures.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <Link
              href="/work/case-studies/fleet-management"
              className="bg-[#1b1b1b] rounded-xl overflow-hidden border border-white/10 hover:border-[#A3D1FF] transition-all group"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src="https://i.imgur.com/EwgHAuK.png"
                  alt="Fleet Management Security"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2 flex items-center justify-between">
                  Fleet Management
                  <ExternalLink className="w-5 h-5 text-[#A3D1FF]" />
                </h3>
                <p className="text-white mb-4">Secure real-time tracking with encrypted data transmission.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[#A3D1FF]/10 text-[#A3D1FF] rounded-full text-sm">Encryption</span>
                  <span className="px-3 py-1 bg-[#A3D1FF]/10 text-[#A3D1FF] rounded-full text-sm">Real-time</span>
                </div>
              </div>
            </Link>

            <Link
              href="/work/case-studies/friedman-cohen"
              className="bg-[#1b1b1b] rounded-xl overflow-hidden border border-white/10 hover:border-[#A3D1FF] transition-all group"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src="https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%201%20-%201x1(3).png?updatedAt=1767539579776"
                  alt="Friedman & Cohen Security"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2 flex items-center justify-between">
                  Friedman & Cohen
                  <ExternalLink className="w-5 h-5 text-[#A3D1FF]" />
                </h3>
                <p className="text-white mb-4">Enterprise B2B platform with secure transaction processing.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[#A3D1FF]/10 text-[#A3D1FF] rounded-full text-sm">B2B Security</span>
                  <span className="px-3 py-1 bg-[#A3D1FF]/10 text-[#A3D1FF] rounded-full text-sm">Compliance</span>
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
                  alt="AutoMarginX Security"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2 flex items-center justify-between">
                  AutoMarginX
                  <ExternalLink className="w-5 h-5 text-[#A3D1FF]" />
                </h3>
                <p className="text-white mb-4">Secure dealership platform with role-based access control.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[#A3D1FF]/10 text-[#A3D1FF] rounded-full text-sm">RBAC</span>
                  <span className="px-3 py-1 bg-[#A3D1FF]/10 text-[#A3D1FF] rounded-full text-sm">Data Protection</span>
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
            service="Cybersecurity"
            benefits={[
              "Strong breach prevention rate",
              "Regulatory compliance",
              "Reduction in security friction",
              "Faster threat detection",
              "24/7 security monitoring"
            ]}
            testimonial={{
              quote: "The security assessment and implementation provided by Marc's team transformed our approach to data protection and gave us confidence in our systems.",
              author: "Lior Shimon",
              role: "Algorithm Engineer | Data Scientist"
            }}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Secure Your Digital Assets?</h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Let's build a comprehensive security strategy that <strong className="text-white">protects your business</strong> and <strong className="text-white">builds trust with your customers</strong>.
          </p>
          <button 
            onClick={() => router.push('/contact')}
            className="mr_btn mr_btn_primary group relative overflow-hidden"
          >
            <span className="relative z-10">Get Started</span>
            <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
            <ArrowRight className="ml-2 w-5 h-5 relative z-10 group-hover:rotate-45 transition-transform duration-300" />
          </button>
        </div>
      </section>
    </>
  );
}