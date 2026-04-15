import React from 'react';
import ContactForm from '@/components/ContactForm';

interface Props {
  benefits: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

export default function ServiceLeadForm({ benefits }: Props) {
  const calendlyUXAuditLink = "https://calendly.com/marc-friedman-web-design--meeting-link/30min";

  return (
    <div className="bg-[#1b1b1b] p-8 border border-white/10">
      <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
        {/* Left Column: Benefits */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">Start Your Project</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Why Choose Us</h3>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-[#A3D1FF] rounded-full mr-3" />
                    <strong className="text-sm sm:text-base">{benefit}</strong>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Prefer a Quick Call?</h3>
              <a 
                href={calendlyUXAuditLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mr_btn mr_btn_outline inline-block"
              >
                <span>Book a Free UX Audit</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="w-full overflow-hidden">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}