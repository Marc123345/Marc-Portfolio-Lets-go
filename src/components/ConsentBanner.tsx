"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, ChevronDown, ChevronUp, X, Cookie, ChartBar as BarChart3, Megaphone, Settings2 } from 'lucide-react';
import { useConsent, ConsentPreferences } from '@/hooks/useConsent';
import Link from 'next/link';

const trackingCategories = [
  {
    id: 'essential' as const,
    label: 'Essential',
    icon: Shield,
    always: true,
    description: 'Required for the website to function. Includes session management and security features.',
    services: ['Session cookies', 'Security tokens', 'Load balancing'],
  },
  {
    id: 'analytics' as const,
    label: 'Analytics',
    icon: BarChart3,
    always: false,
    description: 'Help us understand how visitors interact with our website to improve user experience.',
    services: ['Plausible Analytics', 'Google Analytics', 'Hotjar', 'Performance monitoring'],
  },
  {
    id: 'marketing' as const,
    label: 'Marketing & Advertising',
    icon: Megaphone,
    always: false,
    description: 'Used to deliver relevant ads and measure advertising campaign effectiveness across platforms.',
    services: ['Meta (Facebook) Pixel', 'Google Ads / Remarketing', 'LinkedIn Insight Tag', 'Twitter / X Pixel', 'TikTok Pixel'],
  },
  {
    id: 'functional' as const,
    label: 'Functional',
    icon: Settings2,
    always: false,
    description: 'Enable enhanced functionality like live chat, personalized content, and saved preferences.',
    services: ['Live chat widget', 'Content personalization', 'User preferences'],
  },
];

export default function ConsentBanner() {
  const { showBanner, saving, acceptAll, rejectAll, savePreferences } = useConsent();
  const [showDetails, setShowDetails] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [customPrefs, setCustomPrefs] = useState<ConsentPreferences>({
    analytics: false,
    marketing: false,
    functional: false,
  });

  const toggleCategory = (id: 'analytics' | 'marketing' | 'functional') => {
    setCustomPrefs(prev => ({ ...prev, [id]: !prev[id] }));
  };

  if (!showBanner) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[9999] flex items-end sm:items-end justify-center"
      >
        <motion.div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />

        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-2xl mx-4 mb-4 sm:mb-6"
        >
          <div className="bg-[#0a0a0a] border border-white/10 shadow-2xl overflow-hidden">
            <div className="p-5 sm:p-6">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#A3D1FF]/10 flex items-center justify-center flex-shrink-0">
                    <Cookie className="w-5 h-5 text-[#A3D1FF]" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg leading-tight">
                      We value your privacy
                    </h3>
                    <p className="text-white text-sm mt-0.5">
                      Manage your tracking preferences
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-gray-300 text-sm leading-relaxed mb-5">
                We use cookies and similar technologies including tracking pixels from{' '}
                <span className="text-white font-medium">Meta (Facebook)</span>,{' '}
                <span className="text-white font-medium">Google Ads</span>,{' '}
                <span className="text-white font-medium">LinkedIn</span>, and other platforms
                to enhance your experience, analyze traffic, and serve personalized content and ads.
                By clicking "Accept All", you consent to the use of all cookies and tracking technologies.
              </p>

              <AnimatePresence>
                {showDetails && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="space-y-2 mb-5 max-h-[40vh] overflow-y-auto pr-1 custom-scrollbar">
                      {trackingCategories.map((cat) => {
                        const isExpanded = expandedCategory === cat.id;
                        const Icon = cat.icon;
                        const isEnabled = cat.always || customPrefs[cat.id as keyof ConsentPreferences];

                        return (
                          <div
                            key={cat.id}
                            className="border border-white/5 bg-white/[0.02] overflow-hidden"
                          >
                            <div className="flex items-center justify-between p-3 sm:p-4">
                              <button
                                onClick={() => setExpandedCategory(isExpanded ? null : cat.id)}
                                className="flex items-center gap-3 flex-1 text-left"
                              >
                                <Icon className="w-4 h-4 text-white flex-shrink-0" />
                                <span className="text-white text-sm font-medium">{cat.label}</span>
                                {cat.always && (
                                  <span className="text-[10px] uppercase tracking-wider text-[#A3D1FF] bg-[#A3D1FF]/10 px-2 py-0.5 rounded-full font-medium">
                                    Required
                                  </span>
                                )}
                                {isExpanded ? (
                                  <ChevronUp className="w-4 h-4 text-gray-500 ml-auto" />
                                ) : (
                                  <ChevronDown className="w-4 h-4 text-gray-500 ml-auto" />
                                )}
                              </button>

                              {!cat.always && (
                                <button
                                  onClick={() => toggleCategory(cat.id as 'analytics' | 'marketing' | 'functional')}
                                  className={`relative w-11 h-6 rounded-full transition-colors duration-200 flex-shrink-0 ml-3 ${
                                    isEnabled ? 'bg-[#A3D1FF]' : 'bg-white/10'
                                  }`}
                                  aria-label={`Toggle ${cat.label}`}
                                >
                                  <span
                                    className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white shadow transition-transform duration-200 ${
                                      isEnabled ? 'translate-x-5' : 'translate-x-0'
                                    }`}
                                  />
                                </button>
                              )}
                            </div>

                            <AnimatePresence>
                              {isExpanded && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: 'auto', opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.2 }}
                                  className="overflow-hidden"
                                >
                                  <div className="px-4 pb-4 pt-0">
                                    <p className="text-white text-xs leading-relaxed mb-2">
                                      {cat.description}
                                    </p>
                                    <div className="flex flex-wrap gap-1.5">
                                      {cat.services.map((service) => (
                                        <span
                                          key={service}
                                          className="text-[11px] text-gray-500 bg-white/5 px-2 py-1"
                                        >
                                          {service}
                                        </span>
                                      ))}
                                    </div>
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3">
                <button
                  onClick={acceptAll}
                  disabled={saving}
                  className="flex-1 bg-[#A3D1FF] text-black font-semibold text-sm py-2.5 px-5 hover:bg-[#92bce6] transition-colors disabled:opacity-50"
                >
                  Accept All
                </button>

                {showDetails ? (
                  <button
                    onClick={() => savePreferences(customPrefs)}
                    disabled={saving}
                    className="flex-1 bg-white/10 text-white font-medium text-sm py-2.5 px-5 hover:bg-white/15 transition-colors disabled:opacity-50"
                  >
                    Save Preferences
                  </button>
                ) : (
                  <button
                    onClick={rejectAll}
                    disabled={saving}
                    className="flex-1 bg-white/10 text-white font-medium text-sm py-2.5 px-5 hover:bg-white/15 transition-colors disabled:opacity-50"
                  >
                    Reject All
                  </button>
                )}

                <button
                  onClick={() => setShowDetails(!showDetails)}
                  className="flex items-center justify-center gap-1.5 text-white hover:text-white text-sm py-2.5 px-4 hover:bg-white/5 transition-colors"
                >
                  <Settings2 className="w-4 h-4" />
                  <span>{showDetails ? 'Less' : 'Customize'}</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-3 mt-4 pt-3 border-t border-white/5">
                <Link
                  href="/cookies-policy"
                  className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
                >
                  Cookie Policy
                </Link>
                <span className="text-gray-700 text-xs">|</span>
                <Link
                  href="/privacy-policy"
                  className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
                >
                  Privacy Policy
                </Link>
                <span className="text-gray-700 text-xs">|</span>
                <Link
                  href="/terms-and-conditions"
                  className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
                >
                  Terms & Conditions
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
