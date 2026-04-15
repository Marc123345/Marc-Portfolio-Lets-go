"use client";

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Accessibility,
  X,
  Type,
  Contrast,
  MousePointer,
  Zap,
  RotateCcw,
  Sun,
  Moon,
  Volume2,
  Languages,
  HelpCircle
} from 'lucide-react';

interface AccessibilityPanelProps {
  className?: string;
}

// Hebrew translations for the accessibility panel
const hebrewTranslations = {
  title: 'אפשרויות נגישות',
  textSize: 'גודל טקסט',
  normal: 'רגיל',
  large: 'גדול',
  larger: 'גדול יותר',
  highContrast: 'ניגודיות גבוהה',
  on: 'פעיל',
  off: 'כבוי',
  reducedMotion: 'הפחתת תנועה',
  cursorSize: 'גודל סמן',
  darkMode: 'מצב כהה',
  lightMode: 'מצב בהיר',
  resetSettings: 'איפוס הגדרות',
  screenReader: 'קורא מסך',
  language: 'שפה',
  hebrew: 'עברית',
  english: 'אנגלית',
  help: 'עזרה',
  closePanel: 'סגור פאנל נגישות',
  openPanel: 'פתח פאנל נגישות'
};

// English translations
const englishTranslations = {
  title: 'Accessibility Options',
  textSize: 'Text Size',
  normal: 'Normal',
  large: 'Large',
  larger: 'Larger',
  highContrast: 'High Contrast',
  on: 'ON',
  off: 'OFF',
  reducedMotion: 'Reduced Motion',
  cursorSize: 'Cursor Size',
  darkMode: 'Dark Mode',
  lightMode: 'Light Mode',
  resetSettings: 'Reset All Settings',
  screenReader: 'Screen Reader',
  language: 'Language',
  hebrew: 'Hebrew',
  english: 'English',
  help: 'Help',
  closePanel: 'Close accessibility panel',
  openPanel: 'Open accessibility panel'
};

export default function AccessibilityPanel({ className = '' }: AccessibilityPanelProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState({
    fontSize: 0, // 0: normal, 1: large, 2: larger
    highContrast: false,
    reducedMotion: false,
    cursorSize: 0, // 0: normal, 1: large, 2: larger
    darkMode: false,
    screenReader: false,
    language: 'en' // 'en' or 'he'
  });
  const [showHelp, setShowHelp] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  // Get translations based on selected language
  const t = settings.language === 'he' ? hebrewTranslations : englishTranslations;

  const applySettings = useCallback((currentSettings: typeof settings) => {
    // Apply font size
    const htmlElement = document.documentElement;
    
    // Font size
    if (currentSettings.fontSize === 1) {
      htmlElement.style.fontSize = '112.5%'; // 18px base
    } else if (currentSettings.fontSize === 2) {
      htmlElement.style.fontSize = '125%'; // 20px base
    } else {
      htmlElement.style.fontSize = '100%'; // 16px base
    }
    
    // High contrast
    if (currentSettings.highContrast) {
      htmlElement.classList.add('high-contrast');
    } else {
      htmlElement.classList.remove('high-contrast');
    }
    
    // Reduced motion
    if (currentSettings.reducedMotion) {
      htmlElement.classList.add('reduced-motion');
    } else {
      htmlElement.classList.remove('reduced-motion');
    }
    
    // Cursor size
    if (currentSettings.cursorSize === 1) {
      htmlElement.classList.add('cursor-large');
      htmlElement.classList.remove('cursor-larger');
    } else if (currentSettings.cursorSize === 2) {
      htmlElement.classList.add('cursor-larger');
      htmlElement.classList.remove('cursor-large');
    } else {
      htmlElement.classList.remove('cursor-large', 'cursor-larger');
    }
    
    // Dark mode
    if (currentSettings.darkMode) {
      htmlElement.classList.add('forced-dark-mode');
    } else {
      htmlElement.classList.remove('forced-dark-mode');
    }
    
    // Screen reader announcements
    if (currentSettings.screenReader) {
      // Add screen reader announcements
      const srAnnounce = document.getElementById('sr-announce');
      if (!srAnnounce) {
        const announcer = document.createElement('div');
        announcer.id = 'sr-announce';
        announcer.setAttribute('aria-live', 'polite');
        announcer.setAttribute('aria-atomic', 'true');
        announcer.className = 'sr-only';
        document.body.appendChild(announcer);
      }
    } else {
      // Remove screen reader announcements
      const srAnnounce = document.getElementById('sr-announce');
      if (srAnnounce) {
        srAnnounce.remove();
      }
    }
    
    // Language direction
    if (currentSettings.language === 'he') {
      htmlElement.setAttribute('dir', 'rtl');
      htmlElement.setAttribute('lang', 'he');
    } else {
      htmlElement.setAttribute('dir', 'ltr');
      htmlElement.setAttribute('lang', 'en');
    }
  }, []);

  // Load settings from localStorage on mount
  useEffect(() => {
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings));
      applySettings(JSON.parse(savedSettings));
    }
  }, [applySettings]);

  // Save settings to localStorage when they change
  useEffect(() => {
    localStorage.setItem('accessibility-settings', JSON.stringify(settings));
    applySettings(settings);
  }, [settings, applySettings]);

  // Close panel when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }

      // Alt+A to toggle panel (common accessibility shortcut)
      if (e.altKey && e.key === 'a') {
        setIsOpen(prev => !prev);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const resetSettings = () => {
    const defaultSettings = {
      fontSize: 0,
      highContrast: false,
      reducedMotion: false,
      cursorSize: 0,
      darkMode: false,
      screenReader: false,
      language: 'en'
    };
    setSettings(defaultSettings);
    
    // Announce to screen readers
    announceToScreenReader(t.resetSettings);
  };
  
  // Function to announce changes to screen readers
  const announceToScreenReader = (message: string) => {
    if (settings.screenReader) {
      const announcer = document.getElementById('sr-announce');
      if (announcer) {
        announcer.textContent = message;
      }
    }
  };

  return (
    <div className={`fixed left-4 bottom-20 z-50 ${className}`} dir={settings.language === 'he' ? 'rtl' : 'ltr'}>
      {/* Accessibility Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 bg-[#A3D1FF] text-black rounded-full flex items-center justify-center shadow-lg hover:bg-[#92bce6] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#A3D1FF]"
        aria-label={isOpen ? t.closePanel : t.openPanel}
        aria-expanded={isOpen}
        aria-controls="accessibility-panel"
        title={isOpen ? t.closePanel : t.openPanel}
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <Accessibility className="w-6 h-6" />
        )}
      </button>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={panelRef}
            id="accessibility-panel"
            initial={{ opacity: 0, x: settings.language === 'he' ? -100 : 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: settings.language === 'he' ? -100 : 100 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className={`absolute bottom-16 left-0 w-72 bg-[#1b1b1b] border border-white/10 rounded-xl shadow-xl p-4`}
            role="dialog"
            aria-labelledby="accessibility-title"
          >
            <h2 id="accessibility-title" className="text-lg font-bold text-white mb-4 flex items-center">
              <Accessibility className="w-5 h-5 mr-2 text-[#A3D1FF]" />
              {t.title}
            </h2>

            <div className="space-y-4">
              {/* Font Size */}
              <div>
                <h3 className="text-sm font-medium text-white mb-2 flex items-center">
                  <Type className="w-4 h-4 mr-2 text-[#A3D1FF]" />
                  {t.textSize}
                </h3>
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      setSettings({ ...settings, fontSize: 0 });
                      announceToScreenReader(`${t.textSize}: ${t.normal}`);
                    }}
                    className={`flex-1 px-3 py-2 rounded-lg text-sm ${
                      settings.fontSize === 0
                        ? 'bg-[#A3D1FF] text-black'
                        : 'bg-[#2d3035] text-white hover:bg-[#3d4045]'
                    } transition-colors`}
                    aria-pressed={settings.fontSize === 0}
                    aria-label={`Set text size to ${t.normal}`}
                  >
                    {t.normal}
                  </button>
                  <button
                    onClick={() => {
                      setSettings({ ...settings, fontSize: 1 });
                      announceToScreenReader(`${t.textSize}: ${t.large}`);
                    }}
                    className={`flex-1 px-3 py-2 rounded-lg text-sm ${
                      settings.fontSize === 1
                        ? 'bg-[#A3D1FF] text-black'
                        : 'bg-[#2d3035] text-white hover:bg-[#3d4045]'
                    } transition-colors`}
                    aria-pressed={settings.fontSize === 1}
                    aria-label={`Set text size to ${t.large}`}
                  >
                    {t.large}
                  </button>
                  <button
                    onClick={() => {
                      setSettings({ ...settings, fontSize: 2 });
                      announceToScreenReader(`${t.textSize}: ${t.larger}`);
                    }}
                    className={`flex-1 px-3 py-2 rounded-lg text-sm ${
                      settings.fontSize === 2
                        ? 'bg-[#A3D1FF] text-black'
                        : 'bg-[#2d3035] text-white hover:bg-[#3d4045]'
                    } transition-colors`}
                    aria-pressed={settings.fontSize === 2}
                    aria-label={`Set text size to ${t.larger}`}
                  >
                    {t.larger}
                  </button>
                </div>
              </div>

              {/* High Contrast */}
              <div>
                <button
                  onClick={() => {
                    setSettings({ ...settings, highContrast: !settings.highContrast });
                    announceToScreenReader(`${t.highContrast}: ${!settings.highContrast ? t.on : t.off}`);
                  }}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm ${
                    settings.highContrast
                      ? 'bg-[#A3D1FF] text-black'
                      : 'bg-[#2d3035] text-white hover:bg-[#3d4045]'
                  } transition-colors`}
                  aria-pressed={settings.highContrast}
                >
                  <span className="flex items-center">
                    <Contrast className="w-4 h-4 mr-2" />
                    {t.highContrast}
                  </span>
                  <span className="text-xs">
                    {settings.highContrast ? t.on : t.off}
                  </span>
                </button>
              </div>

              {/* Reduced Motion */}
              <div>
                <button
                  onClick={() => {
                    setSettings({ ...settings, reducedMotion: !settings.reducedMotion });
                    announceToScreenReader(`${t.reducedMotion}: ${!settings.reducedMotion ? t.on : t.off}`);
                  }}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm ${
                    settings.reducedMotion
                      ? 'bg-[#A3D1FF] text-black'
                      : 'bg-[#2d3035] text-white hover:bg-[#3d4045]'
                  } transition-colors`}
                  aria-pressed={settings.reducedMotion}
                >
                  <span className="flex items-center">
                    <Zap className="w-4 h-4 mr-2" />
                    {t.reducedMotion}
                  </span>
                  <span className="text-xs">
                    {settings.reducedMotion ? t.on : t.off}
                  </span>
                </button>
              </div>

              {/* Cursor Size */}
              <div>
                <h3 className="text-sm font-medium text-white mb-2 flex items-center">
                  <MousePointer className="w-4 h-4 mr-2 text-[#A3D1FF]" />
                  {t.cursorSize}
                </h3>
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      setSettings({ ...settings, cursorSize: 0 });
                      announceToScreenReader(`${t.cursorSize}: ${t.normal}`);
                    }}
                    className={`flex-1 px-3 py-2 rounded-lg text-sm ${
                      settings.cursorSize === 0
                        ? 'bg-[#A3D1FF] text-black'
                        : 'bg-[#2d3035] text-white hover:bg-[#3d4045]'
                    } transition-colors`}
                    aria-pressed={settings.cursorSize === 0}
                  >
                    {t.normal}
                  </button>
                  <button
                    onClick={() => {
                      setSettings({ ...settings, cursorSize: 1 });
                      announceToScreenReader(`${t.cursorSize}: ${t.large}`);
                    }}
                    className={`flex-1 px-3 py-2 rounded-lg text-sm ${
                      settings.cursorSize === 1
                        ? 'bg-[#A3D1FF] text-black'
                        : 'bg-[#2d3035] text-white hover:bg-[#3d4045]'
                    } transition-colors`}
                    aria-pressed={settings.cursorSize === 1}
                  >
                    {t.large}
                  </button>
                  <button
                    onClick={() => {
                      setSettings({ ...settings, cursorSize: 2 });
                      announceToScreenReader(`${t.cursorSize}: ${t.larger}`);
                    }}
                    className={`flex-1 px-3 py-2 rounded-lg text-sm ${
                      settings.cursorSize === 2
                        ? 'bg-[#A3D1FF] text-black'
                        : 'bg-[#2d3035] text-white hover:bg-[#3d4045]'
                    } transition-colors`}
                    aria-pressed={settings.cursorSize === 2}
                  >
                    {t.larger}
                  </button>
                </div>
              </div>

              {/* Dark Mode */}
              <div>
                <button
                  onClick={() => {
                    setSettings({ ...settings, darkMode: !settings.darkMode });
                    announceToScreenReader(`${settings.darkMode ? t.lightMode : t.darkMode}: ${!settings.darkMode ? t.on : t.off}`);
                  }}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm ${
                    settings.darkMode
                      ? 'bg-[#A3D1FF] text-black'
                      : 'bg-[#2d3035] text-white hover:bg-[#3d4045]'
                  } transition-colors`}
                  aria-pressed={settings.darkMode}
                >
                  <span className="flex items-center">
                    {settings.darkMode ? (
                      <Moon className="w-4 h-4 mr-2" />
                    ) : (
                      <Sun className="w-4 h-4 mr-2" />
                    )}
                    {settings.darkMode ? t.darkMode : t.lightMode}
                  </span>
                  <span className="text-xs">
                    {settings.darkMode ? t.on : t.off}
                  </span>
                </button>
              </div>

              {/* Screen Reader Support */}
              <div>
                <button
                  onClick={() => {
                    setSettings({ ...settings, screenReader: !settings.screenReader });
                    announceToScreenReader(`${t.screenReader}: ${!settings.screenReader ? t.on : t.off}`);
                  }}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm ${
                    settings.screenReader
                      ? 'bg-[#A3D1FF] text-black'
                      : 'bg-[#2d3035] text-white hover:bg-[#3d4045]'
                  } transition-colors`}
                  aria-pressed={settings.screenReader}
                >
                  <span className="flex items-center">
                    <Volume2 className="w-4 h-4 mr-2" />
                    {t.screenReader}
                  </span>
                  <span className="text-xs">
                    {settings.screenReader ? t.on : t.off}
                  </span>
                </button>
              </div>

              {/* Language Selection */}
              <div>
                <h3 className="text-sm font-medium text-white mb-2 flex items-center">
                  <Languages className="w-4 h-4 mr-2 text-[#A3D1FF]" />
                  {t.language}
                </h3>
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      setSettings({ ...settings, language: 'en' });
                      announceToScreenReader('Language: English');
                    }}
                    className={`flex-1 px-3 py-2 rounded-lg text-sm ${
                      settings.language === 'en'
                        ? 'bg-[#A3D1FF] text-black'
                        : 'bg-[#2d3035] text-white hover:bg-[#3d4045]'
                    } transition-colors`}
                    aria-pressed={settings.language === 'en'}
                  >
                    {t.english}
                  </button>
                  <button
                    onClick={() => {
                      setSettings({ ...settings, language: 'he' });
                      announceToScreenReader('שפה: עברית');
                    }}
                    className={`flex-1 px-3 py-2 rounded-lg text-sm ${
                      settings.language === 'he'
                        ? 'bg-[#A3D1FF] text-black'
                        : 'bg-[#2d3035] text-white hover:bg-[#3d4045]'
                    } transition-colors`}
                    aria-pressed={settings.language === 'he'}
                  >
                    {t.hebrew}
                  </button>
                </div>
              </div>

              {/* Help Button */}
              <button
                onClick={() => setShowHelp(!showHelp)}
                className="w-full flex items-center justify-between px-4 py-3 bg-[#2d3035] text-white rounded-lg hover:bg-[#3d4045] transition-colors text-sm"
                aria-expanded={showHelp}
                aria-controls="accessibility-help"
              >
                <span className="flex items-center">
                  <HelpCircle className="w-4 h-4 mr-2" />
                  {t.help}
                </span>
              </button>

              {/* Help Content */}
              <AnimatePresence>
                {showHelp && (
                  <motion.div
                    id="accessibility-help"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-[#2d3035] p-4 rounded-lg text-sm text-gray-300 overflow-hidden"
                  >
                    <p className="mb-2">
                      {settings.language === 'he' 
                        ? 'כלי נגישות זה מאפשר לך להתאים את האתר לצרכים שלך. השתמש בקיצור המקלדת Alt+A כדי לפתוח או לסגור את הפאנל.'
                        : 'This accessibility tool allows you to customize the site to your needs. Use keyboard shortcut Alt+A to open or close the panel.'}
                    </p>
                    <p>
                      {settings.language === 'he'
                        ? 'אתר זה תואם לתקן הישראלי 5568 ולהנחיות WCAG 2.1 AA.'
                        : 'This site complies with Israeli Standard 5568 and WCAG 2.1 AA guidelines.'}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Reset Button */}
              <button
                onClick={resetSettings}
                className="w-full flex items-center justify-center px-4 py-3 bg-[#2d3035] text-white rounded-lg hover:bg-[#3d4045] transition-colors text-sm"
              >
                <RotateCcw className="w-4 h-4 mr-2" />
                {t.resetSettings}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Accessibility Statement - Hidden but available for screen readers */}
      <div className="sr-only">
        <p>This website is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone, and applying the relevant accessibility standards.</p>
        <p>The Web Content Accessibility Guidelines (WCAG) defines requirements for designers and developers to improve accessibility for people with disabilities. It defines three levels of conformance: Level A, Level AA, and Level AAA. This website is compliant with WCAG 2.1 level AA standards.</p>
      </div>
    </div>
  );
}