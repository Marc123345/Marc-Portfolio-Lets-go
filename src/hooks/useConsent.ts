"use client";

import { useState, useEffect, useCallback } from 'react';
import { optOutPlausible, optInPlausible } from '@/lib/plausible';
import { initMetaPixel, removeMetaPixel } from '@/lib/metaPixel';

export interface ConsentPreferences {
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
}

const STORAGE_KEY = 'consent_preferences';
const VISITOR_ID_KEY = 'consent_visitor_id';
const CONSENT_DECIDED_KEY = 'consent_decided';

function getVisitorId(): string {
  let id = localStorage.getItem(VISITOR_ID_KEY);
  if (!id) {
    id = crypto.randomUUID();
    localStorage.setItem(VISITOR_ID_KEY, id);
  }
  return id;
}

function getStoredPreferences(): ConsentPreferences | null {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return JSON.parse(stored);
  } catch {}
  return null;
}

function hasDecided(): boolean {
  return localStorage.getItem(CONSENT_DECIDED_KEY) === 'true';
}

function applyPreferences(prefs: ConsentPreferences) {
  if (prefs.analytics) {
    optInPlausible();
  } else {
    optOutPlausible();
  }

  if (prefs.marketing) {
    initMetaPixel();
  } else {
    removeMetaPixel();
  }
}

export function useConsent() {
  const [preferences, setPreferences] = useState<ConsentPreferences>(
    () => getStoredPreferences() || { analytics: false, marketing: false, functional: false }
  );
  const [showBanner, setShowBanner] = useState(false);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!hasDecided()) {
      const timer = setTimeout(() => setShowBanner(true), 1500);
      return () => clearTimeout(timer);
    }
    applyPreferences(getStoredPreferences() || preferences);
  }, []);

  const savePreferences = useCallback(async (prefs: ConsentPreferences) => {
    setSaving(true);
    const visitorId = getVisitorId();

    localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
    localStorage.setItem(CONSENT_DECIDED_KEY, 'true');
    setPreferences(prefs);
    applyPreferences(prefs);
    setShowBanner(false);

    try {
      console.log('[consent] saved', { visitorId, ...prefs });
      await new Promise((r) => setTimeout(r, 200));
    } catch {}

    setSaving(false);
  }, []);

  const acceptAll = useCallback(() => {
    savePreferences({ analytics: true, marketing: true, functional: true });
  }, [savePreferences]);

  const rejectAll = useCallback(() => {
    savePreferences({ analytics: false, marketing: false, functional: false });
  }, [savePreferences]);

  const openSettings = useCallback(() => {
    setShowBanner(true);
  }, []);

  return {
    preferences,
    showBanner,
    saving,
    savePreferences,
    acceptAll,
    rejectAll,
    openSettings,
  };
}
