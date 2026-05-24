import type { Metadata } from 'next';
import CaseStudiesPage from '@/pages-ported/work/CaseStudiesPage';

export const metadata: Metadata = {
  title: 'Case Studies — Real Web Design Results',
  description:
    'Detailed case studies from React/Next.js website builds: conversion lifts, engagement gains, and technical wins across SaaS, ecommerce, and B2B clients.',
  alternates: { canonical: 'https://www.marcfriedmanportfolio.com/work/case-studies/' },
  openGraph: {
    title: 'Case Studies — Real Web Design Results',
    description:
      'Detailed case studies from React/Next.js website builds with measurable conversion and engagement results.',
    url: 'https://www.marcfriedmanportfolio.com/work/case-studies/',
    type: 'website',
  },
};

export default function Page() {
  return <CaseStudiesPage />;
}
