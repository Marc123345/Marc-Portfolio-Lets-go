"use client";

import React, { useState } from 'react';
import { Calendar, Clock, SquareCheck as CheckSquare, FileText, Code, Zap, Rocket, ArrowRight } from 'lucide-react';

const SERIF = 'var(--font-heading)';

interface TimelinePhase {
  id: string;
  title: string;
  duration: string;
  description: string;
  clientResponsibilities: string[];
  deliverables: string[];
  icon: React.ReactNode;
}

export default function ProjectTimelineVisualizer() {
  const [activePhase, setActivePhase] = useState<string>('discovery');
  
  const phases: TimelinePhase[] = [
    {
      id: 'discovery',
      title: 'Discovery & Strategy',
      duration: 'Week 1',
      description: 'We\'ll dive deep into your business goals, target audience, and competitive landscape to create a strategic foundation for your project.',
      clientResponsibilities: [
        'Complete project questionnaire',
        'Provide brand assets',
        'Schedule kickoff call',
        'Share access to analytics (if available)'
      ],
      deliverables: [
        'Project roadmap',
        'Content requirements',
        'Technical specifications',
        'Strategic recommendations'
      ],
      icon: <Calendar className="w-6 h-6 text-[#A3D1FF]" />
    },
    {
      id: 'design',
      title: 'UX/UI Design',
      duration: 'Weeks 2-3',
      description: 'We\'ll create wireframes and high-fidelity designs that align with your brand and optimize for user experience and conversions.',
      clientResponsibilities: [
        'Provide feedback on wireframes',
        'Approve design direction',
        'Supply content and images',
        'Participate in design review'
      ],
      deliverables: [
        'Wireframes',
        'UI design mockups',
        'Interactive prototype',
        'Design system'
      ],
      icon: <FileText className="w-6 h-6 text-[#A3D1FF]" />
    },
    {
      id: 'development',
      title: 'Development',
      duration: 'Weeks 3-5',
      description: 'Our development team will build your website using modern technologies that ensure performance, security, and scalability.',
      clientResponsibilities: [
        'Provide final content',
        'Review development milestones',
        'Test functionality',
        'Prepare for launch'
      ],
      deliverables: [
        'Responsive website',
        'Content management system',
        'Form integrations',
        'Analytics setup'
      ],
      icon: <Code className="w-6 h-6 text-[#A3D1FF]" />
    },
    {
      id: 'testing',
      title: 'Testing & Optimization',
      duration: 'Week 6',
      description: 'We\'ll rigorously test your website across devices and browsers, and optimize for performance, SEO, and conversions.',
      clientResponsibilities: [
        'Participate in user testing',
        'Review and approve final site',
        'Prepare marketing materials',
        'Schedule launch activities'
      ],
      deliverables: [
        'Cross-browser testing report',
        'Performance optimization',
        'SEO implementation',
        'Conversion tracking setup'
      ],
      icon: <Zap className="w-6 h-6 text-[#A3D1FF]" />
    },
    {
      id: 'launch',
      title: 'Launch & Support',
      duration: 'Week 7',
      description: 'We\'ll deploy your website to production and provide training and support to ensure a smooth transition.',
      clientResponsibilities: [
        'Final approval',
        'Participate in training',
        'Provide launch feedback',
        'Share testimonial (if satisfied)'
      ],
      deliverables: [
        'Live website',
        'Training documentation',
        'Maintenance plan',
        '30 days of post-launch support'
      ],
      icon: <Rocket className="w-6 h-6 text-[#A3D1FF]" />
    }
  ];
  
  const activePhaseData = phases.find(phase => phase.id === activePhase);
  
  return (
    <div className="border border-white/10 bg-[#0b0b0b]">
      <div className="p-6 md:p-8">
        {/* Header */}
        <div className="flex items-center gap-3 mb-10 pb-6 border-b border-white/10">
          <Clock className="w-4 h-4 text-[#A3D1FF]" />
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/50">
            Project Timeline
          </span>
        </div>

        {/* Timeline Navigation */}
        <div className="relative mb-12">
          <div className="absolute top-5 left-0 right-0 h-[1px] bg-white/10" />

          <div className="relative flex justify-between">
            {phases.map((phase, index) => {
              const isActive = activePhase === phase.id;
              return (
                <button
                  key={phase.id}
                  onClick={() => setActivePhase(phase.id)}
                  aria-current={isActive ? 'step' : undefined}
                  className="flex flex-col items-center relative z-10 group"
                >
                  <div
                    className={`w-10 h-10 flex items-center justify-center mb-3 border font-mono text-xs transition-colors ${
                      isActive
                        ? 'border-[#A3D1FF] bg-[#A3D1FF] text-black'
                        : 'border-white/15 bg-black text-white/50 group-hover:border-white/40 group-hover:text-white'
                    }`}
                    style={{ fontVariantNumeric: 'tabular-nums' }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <span
                    className={`text-[10px] font-mono uppercase tracking-[0.2em] transition-colors ${
                      isActive ? 'text-[#A3D1FF]' : 'text-white/40 group-hover:text-white/70'
                    }`}
                  >
                    {phase.title.split(' ')[0]}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Phase Details */}
        {activePhaseData && (
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center gap-4 mb-5">
                {activePhaseData.icon}
                <div>
                  <h4
                    className="text-white leading-tight"
                    style={{
                      fontFamily: SERIF,
                      fontSize: 'clamp(1.25rem, 2vw, 1.65rem)',
                      fontWeight: 500,
                    }}
                  >
                    {activePhaseData.title}
                  </h4>
                  <p className="mt-1 text-[10px] font-mono uppercase tracking-[0.25em] text-[#A3D1FF]">
                    {activePhaseData.duration}
                  </p>
                </div>
              </div>

              <p className="text-white/70 leading-relaxed mb-8">
                {activePhaseData.description}
              </p>

              <div className="border border-white/10 bg-white/[0.03] p-5">
                <h5 className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/40 mb-4">
                  Your Responsibilities
                </h5>
                <ul className="space-y-3">
                  {activePhaseData.clientResponsibilities.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-white/70">
                      <CheckSquare className="w-4 h-4 text-[#A3D1FF] mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <div className="border border-white/10 bg-white/[0.03] p-5 md:p-6 h-full">
                <h5 className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/40 mb-5">
                  What You&apos;ll Receive
                </h5>
                <ul className="space-y-4">
                  {activePhaseData.deliverables.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-4 border-b border-white/10 pb-4 last:border-b-0 last:pb-0"
                    >
                      <span
                        className="font-mono text-xs text-[#A3D1FF] mt-0.5 shrink-0"
                        style={{ fontVariantNumeric: 'tabular-nums' }}
                      >
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <p className="text-white/80 text-sm leading-relaxed">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-10 pt-6 border-t border-white/10">
          <button
            onClick={() => {
              const currentIndex = phases.findIndex(phase => phase.id === activePhase);
              if (currentIndex > 0) {
                setActivePhase(phases[currentIndex - 1].id);
              }
            }}
            disabled={activePhase === phases[0].id}
            className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.25em] text-white/60 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            <ArrowRight className="w-3.5 h-3.5 rotate-180" />
            Previous step
          </button>

          <button
            onClick={() => {
              const currentIndex = phases.findIndex(phase => phase.id === activePhase);
              if (currentIndex < phases.length - 1) {
                setActivePhase(phases[currentIndex + 1].id);
              }
            }}
            disabled={activePhase === phases[phases.length - 1].id}
            className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.25em] text-[#A3D1FF] hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            Next step
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}