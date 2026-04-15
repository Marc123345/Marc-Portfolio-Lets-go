import { init, track as plausibleTrack } from '@plausible-analytics/tracker';

const domain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN || 'marcfriedmanportfolio.com';
const endpoint = process.env.NEXT_PUBLIC_PLAUSIBLE_ENDPOINT || 'https://plausible.io/api/event';

export const initPlausible = () => {
  if (typeof window === 'undefined') {
    return;
  }

  try {
    init({
      domain,
      endpoint,
      autoCapturePageviews: true,
      hashBasedRouting: false,
      outboundLinks: true,
      fileDownloads: true,
      formSubmissions: false,
      captureOnLocalhost: false,
      logging: (process.env.NODE_ENV === 'development'),
      bindToWindow: true,
    });
  } catch (error) {
    console.error('Failed to initialize Plausible:', error);
  }
};

export const trackEvent = (
  eventName: string,
  options?: {
    props?: Record<string, string | number | boolean>;
    revenue?: { amount: number; currency: string };
    interactive?: boolean;
    callback?: (result?: { status?: number; error?: Error }) => void;
  }
) => {
  if (typeof window === 'undefined') {
    return;
  }

  try {
    plausibleTrack(eventName, options);
  } catch (error) {
    console.error('Failed to track Plausible event:', error);
  }
};

export const trackPageview = (
  url?: string,
  options?: {
    props?: Record<string, string | number | boolean>;
  }
) => {
  if (typeof window === 'undefined') {
    return;
  }

  try {
    plausibleTrack('pageview', {
      ...options,
      props: {
        url: url || window.pathname,
        ...options?.props,
      },
    });
  } catch (error) {
    console.error('Failed to track Plausible pageview:', error);
  }
};

export const optOutPlausible = () => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('plausible_ignore', 'true');
  }
};

export const optInPlausible = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('plausible_ignore');
  }
};

export const isOptedOutPlausible = (): boolean => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('plausible_ignore') === 'true';
  }
  return false;
};
