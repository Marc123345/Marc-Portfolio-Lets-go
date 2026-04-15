import React from 'react';
import Link from 'next/link';

const services = [
  { slug: 'web-development', label: 'Web Development' },
  { slug: 'design', label: 'UI/UX Design' },
  { slug: 'design-systems', label: 'Design Systems' },
  { slug: 'startup-mvp', label: 'Startup MVP' },
  { slug: 'ai-integration', label: 'AI Integration' },
  { slug: 'cybersecurity', label: 'Cybersecurity' },
  { slug: 'external-web-department', label: 'External Web Department' },
  { slug: 'premium-web-package', label: 'Premium Web Package' },
  { slug: 'monthly-retainer', label: 'Monthly Retainer' },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-black text-white py-24">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-4xl md:text-6xl mb-6">Services</h1>
        <p className="text-lg text-white/80 mb-12 max-w-2xl">
          Professional web design, development, and digital strategy services.
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s) => (
            <li key={s.slug}>
              <Link
                href={`/services/${s.slug}`}
                className="block p-6 border border-white/10 hover:border-[#A3D1FF] hover:bg-white/5 transition-all"
              >
                <span className="text-lg font-medium">{s.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
