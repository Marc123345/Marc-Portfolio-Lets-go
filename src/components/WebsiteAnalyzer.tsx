"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Gauge, Loader2, TriangleAlert, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

/**
 * Live website analyzer powered by Google's free PageSpeed Insights API
 * (CORS-enabled, no backend required, works on the static export). Returns
 * real Lighthouse scores + Core Web Vitals for any public URL.
 */

const PSI_ENDPOINT = 'https://www.googleapis.com/pagespeedonline/v5/runPagespeed';
// PageSpeed Insights requires an API key for a usable quota. Without one the
// shared anonymous quota is permanently exhausted (429). This key is restricted
// to the PageSpeed Insights API; add a Websites (HTTP referrer) restriction to
// lock it to this domain. Overridable via NEXT_PUBLIC_PAGESPEED_API_KEY.
const PSI_API_KEY =
  process.env.NEXT_PUBLIC_PAGESPEED_API_KEY || 'AIzaSyBdYw1M3qVs4Zk5LIZvo-UaZUP4-thzX8c';
const ACCENT = '#A3D1FF';

type CategoryKey = 'performance' | 'accessibility' | 'best-practices' | 'seo';

const CATEGORY_LABELS: Record<CategoryKey, string> = {
  performance: 'Performance',
  accessibility: 'Accessibility',
  'best-practices': 'Best Practices',
  seo: 'SEO',
};

const METRIC_AUDITS = [
  { id: 'first-contentful-paint', label: 'First Contentful Paint' },
  { id: 'largest-contentful-paint', label: 'Largest Contentful Paint' },
  { id: 'total-blocking-time', label: 'Total Blocking Time' },
  { id: 'cumulative-layout-shift', label: 'Cumulative Layout Shift' },
  { id: 'speed-index', label: 'Speed Index' },
  { id: 'interactive', label: 'Time to Interactive' },
];

interface AnalysisResult {
  finalUrl: string;
  scores: Partial<Record<CategoryKey, number>>;
  metrics: { label: string; value: string }[];
}

function normalizeUrl(input: string): string {
  const trimmed = input.trim();
  if (!trimmed) return '';
  return /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
}

function scoreColor(score: number): string {
  if (score >= 90) return '#22c55e';
  if (score >= 50) return '#f59e0b';
  return '#ef4444';
}

function ScoreGauge({ label, score }: { label: string; score: number }) {
  const radius = 46;
  const circumference = 2 * Math.PI * radius;
  const color = scoreColor(score);
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative w-28 h-28">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 110 110">
          <circle cx="55" cy="55" r={radius} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="8" />
          <motion.circle
            cx="55"
            cy="55"
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: circumference * (1 - score / 100) }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-bold tabular-nums" style={{ color }}>{score}</span>
        </div>
      </div>
      <span className="text-xs font-mono uppercase tracking-[0.18em] text-white/60 text-center">{label}</span>
    </div>
  );
}

export default function WebsiteAnalyzer() {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<AnalysisResult | null>(null);

  const analyze = async (e: React.FormEvent) => {
    e.preventDefault();
    const target = normalizeUrl(url);
    if (!target) return;

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const params = new URLSearchParams({ url: target, strategy: 'mobile' });
      ['performance', 'accessibility', 'best-practices', 'seo'].forEach((c) =>
        params.append('category', c),
      );
      if (PSI_API_KEY) params.append('key', PSI_API_KEY);
      const res = await fetch(`${PSI_ENDPOINT}?${params.toString()}`);
      if (!res.ok) {
        throw new Error(
          res.status === 429
            ? PSI_API_KEY
              ? 'This analyzer is over its quota for now, please try again in a minute.'
              : 'The analyzer is temporarily unavailable. Please try again shortly.'
            : res.status === 400
              ? 'That doesn’t look like a reachable public URL. Check the address and try again.'
              : `Could not analyze that URL (error ${res.status}). Make sure it’s a public, live page.`,
        );
      }
      const data = await res.json();
      const lh = data.lighthouseResult;
      if (!lh) throw new Error('No results returned. Double-check the URL is reachable.');

      const scores: Partial<Record<CategoryKey, number>> = {};
      (Object.keys(CATEGORY_LABELS) as CategoryKey[]).forEach((key) => {
        const raw = lh.categories?.[key]?.score;
        if (typeof raw === 'number') scores[key] = Math.round(raw * 100);
      });

      const metrics = METRIC_AUDITS
        .map(({ id, label }) => {
          const v = lh.audits?.[id]?.displayValue;
          return v ? { label, value: v } : null;
        })
        .filter(Boolean) as { label: string; value: string }[];

      setResult({ finalUrl: lh.finalUrl || target, scores, metrics });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      {/* Input */}
      <form onSubmit={analyze} className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="yourwebsite.com"
            className="w-full bg-white/[0.04] border border-white/10 text-white placeholder-white/30 pl-11 pr-4 py-4 focus:outline-none focus:border-[#A3D1FF] transition-colors"
            aria-label="Website URL to analyze"
          />
        </div>
        <button
          type="submit"
          disabled={loading || !url.trim()}
          className="inline-flex items-center justify-center gap-2 bg-white text-black font-semibold px-7 py-4 hover:bg-[#A3D1FF] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Gauge className="w-4 h-4" />}
          {loading ? 'Analyzing…' : 'Analyze'}
        </button>
      </form>
      <p className="mt-3 text-xs text-white/35">
        Live Lighthouse scores via Google PageSpeed Insights (mobile). Public URLs only.
      </p>

      {/* Loading */}
      {loading && (
        <div className="mt-12 flex flex-col items-center gap-4 text-white/50">
          <Loader2 className="w-8 h-8 animate-spin" style={{ color: ACCENT }} />
          <p className="text-sm">Running a full audit, this takes 10–30 seconds.</p>
        </div>
      )}

      {/* Error */}
      {error && (
        <div className="mt-8 flex items-start gap-3 border border-red-500/30 bg-red-500/[0.06] p-4">
          <TriangleAlert className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
          <p className="text-sm text-white/80">{error}</p>
        </div>
      )}

      {/* Results */}
      {result && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-12"
        >
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-white/40 mb-6 break-all">
            Results for {result.finalUrl}
          </p>

          {/* Scores */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {(Object.keys(CATEGORY_LABELS) as CategoryKey[]).map((key) =>
              typeof result.scores[key] === 'number' ? (
                <ScoreGauge key={key} label={CATEGORY_LABELS[key]} score={result.scores[key] as number} />
              ) : null,
            )}
          </div>

          {/* Metrics */}
          {result.metrics.length > 0 && (
            <div className="border border-white/10 divide-y divide-white/10">
              {result.metrics.map((m) => (
                <div key={m.label} className="flex items-center justify-between px-5 py-3.5">
                  <span className="text-sm text-white/70">{m.label}</span>
                  <span className="text-sm font-semibold tabular-nums text-white">{m.value}</span>
                </div>
              ))}
            </div>
          )}

          {/* Lead-gen CTA */}
          <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border border-[#A3D1FF]/25 bg-[#A3D1FF]/[0.05] p-6">
            <p className="text-sm text-white/75 max-w-md">
              Want a <strong className="text-white">human</strong> to interpret these numbers and hand you
              a prioritized fix list? Get a free, hand-reviewed audit.
            </p>
            <Link
              href="/free-website-analyzer"
              className="group inline-flex items-center gap-2 bg-white text-black text-sm font-semibold px-5 py-3 hover:bg-[#A3D1FF] transition-colors whitespace-nowrap"
            >
              Get a Human Audit
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </motion.div>
      )}
    </div>
  );
}
