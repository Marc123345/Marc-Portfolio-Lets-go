// External URLs and constants used throughout the application

export const CALENDLY_LINK = 'https://calendly.com/marc-friedman-web-design--meeting-link/30min';

export const SOCIAL_LINKS = {
  TWITTER: 'https://twitter.com/marcfriedman',
  LINKEDIN: 'https://linkedin.com/in/marcfriedman',
  GITHUB: 'https://github.com/marcfriedman',
} as const;

// Rate limiting
export const FORM_SUBMIT_COOLDOWN_MS = 30000; // 30 seconds

// API Timeouts
export const API_TIMEOUT_MS = 10000; // 10 seconds
export const ANALYSIS_TIMEOUT_MS = 30000; // 30 seconds for website analysis
