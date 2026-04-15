"use client";

import React, { useState } from 'react';
import { Calendar, Clock, SquareCheck as CheckSquare, FileText, Code, Zap, Rocket, ArrowRight } from 'lucide-react';

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
    <div className="bg-[#1b1b1b] rounded-xl border border-white/10 overflow-hidden">
      <div className="p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-[#A3D1FF]/10 p-3 rounded-lg">
            <Clock className="w-6 h-6 text-[#A3D1FF]" />
          </div>
          <h3 className="text-2xl font-bold text-white">Project Timeline</h3>
        </div>
        
        <p className="text-white mb-8">
          See exactly what to expect during your website project. Our transparent process ensures you're informed and involved every step of the way.
        </p>
        
        {/* Timeline Navigation */}
        <div className="relative mb-12">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-[#2d3035] -translate-y-1/2"></div>
          
          <div className="relative flex justify-between">
            {phases.map((phase, index) => (
              <button
                key={phase.id}
                onClick={() => setActivePhase(phase.id)}
                className={`flex flex-col items-center relative z-10 transition-all duration-300 ${
                  activePhase === phase.id ? 'scale-110' : 'opacity-70 hover:opacity-100'
                }`}
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 transition-colors ${
                  activePhase === phase.id ? 'bg-[#A3D1FF] text-black' : 'bg-[#2d3035] text-white'
                }`}>
                  {index + 1}
                </div>
                <span className={`text-xs font-medium ${
                  activePhase === phase.id ? 'text-[#A3D1FF]' : 'text-white'
                }`}>
                  {phase.title.split(' ')[0]}
                </span>
              </button>
            ))}
          </div>
        </div>
        
        {/* Active Phase Details */}
        {activePhaseData && (
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                {activePhaseData.icon}
                <div>
                  <h4 className="text-xl font-semibold text-white">{activePhaseData.title}</h4>
                  <p className="text-[#A3D1FF]">{activePhaseData.duration}</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6">
                {activePhaseData.description}
              </p>
              
              <div className="bg-[#2d3035] p-4 rounded-lg mb-4">
                <h5 className="font-medium text-white mb-3">Your Responsibilities</h5>
                <ul className="space-y-2">
                  {activePhaseData.clientResponsibilities.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-300">
                      <CheckSquare className="w-5 h-5 text-[#A3D1FF] mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div>
              <div className="bg-[#2d3035] p-6 rounded-lg h-full">
                <h5 className="font-medium text-white mb-4">What You'll Receive</h5>
                <ul className="space-y-4">
                  {activePhaseData.deliverables.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-[#A3D1FF]/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-[#A3D1FF] text-sm font-medium">{index + 1}</span>
                      </div>
                      <div>
                        <p className="text-white font-medium">{item}</p>
                        <p className="text-sm text-white">
                          {[
                            'A comprehensive document outlining project goals, timeline, and strategy.',
                            'Visual designs showing the layout, colors, and user interface of your website.',
                            'Fully functional website code built with modern technologies.',
                            'Thorough testing across devices and optimization for performance.',
                            'Your website launched and live with ongoing support.'
                          ][index]}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
        
        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8 pt-6 border-t border-white/10">
          <button
            onClick={() => {
              const currentIndex = phases.findIndex(phase => phase.id === activePhase);
              if (currentIndex > 0) {
                setActivePhase(phases[currentIndex - 1].id);
              }
            }}
            disabled={activePhase === phases[0].id}
            className="text-white hover:text-white disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            <ArrowRight className="w-4 h-4 rotate-180" />
            ← Previous Step
          </button>
          
          <button
            onClick={() => {
              const currentIndex = phases.findIndex(phase => phase.id === activePhase);
              if (currentIndex < phases.length - 1) {
                setActivePhase(phases[currentIndex + 1].id);
              }
            }}
            disabled={activePhase === phases[phases.length - 1].id}
            className="text-[#A3D1FF] hover:text-white disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            Next Step →
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}