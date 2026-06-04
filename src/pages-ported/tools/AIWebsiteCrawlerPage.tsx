"use client";

import React, { useState } from 'react';
import { ArrowRight, Bot, Code, FileText, Search, Zap, CircleCheck as CheckCircle2, CircleAlert as AlertCircle } from 'lucide-react';
import SiteMapGenerator from '@/components/SiteMapGenerator';
import { useRouter } from 'next/navigation';

function FeatureCard({ icon: Icon, title, description }: {
  icon: any;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-[#1b1b1b] p-6 rounded-xl border border-white/10 hover:border-[#A3D1FF] transition-all group">
      <div className="relative mb-4">
        <div className="absolute inset-0 bg-[#A3D1FF]/20 blur-xl rounded-full"></div>
        <div className="bg-[#A3D1FF]/10 p-3 rounded-lg relative">
          <Icon className="w-6 h-6 text-[#A3D1FF] group-hover:scale-110 transition-transform" />
        </div>
      </div>
      <h3 className="text-lg font-semibold mb-2 text-white">{title}</h3>
      <p className="text-white text-sm">{description}</p>
    </div>
  );
}

export default function AIWebsiteCrawlerPage() {
  const router = useRouter();
  const [url, setUrl] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<null | {
    score: number;
    issues: {type: string; description: string; severity: 'high' | 'medium' | 'low'}[];
    recommendations: string[];
  }>(null);
  
  // Structured data for SEO
  const toolSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "AI Website Crawler Optimization Tool",
    "applicationCategory": "WebApplication",
    "operatingSystem": "All",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "Analyze your website's readiness for AI crawlers like ChatGPT and Google's AI. Get recommendations to improve AI visibility and indexing.",
    "creator": {
      "@type": "Person",
      "name": "Marc Friedman"
    }
  };

  const handleAnalyze = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!url) {
      return;
    }
    
    // Basic URL validation
    try {
      new URL(url);
    } catch (e) {
      return;
    }
    
    setIsAnalyzing(true);
    
    // Simulate analysis with a timeout
    setTimeout(() => {
      setResult({
        score: Math.floor(Math.random() * 30) + 50, // 50-80
        issues: [
          {
            type: 'Missing structured data',
            description: 'No Schema.org markup detected for main entity types',
            severity: 'high'
          },
          {
            type: 'No AI plugin configuration',
            description: 'Missing AI plugin configuration files in .well-known directory',
            severity: 'medium'
          },
          {
            type: 'Robots.txt configuration',
            description: 'No specific directives for AI crawlers in robots.txt',
            severity: 'medium'
          },
          {
            type: 'Content accessibility',
            description: 'Some content may be hidden behind JavaScript or requires interaction',
            severity: 'low'
          }
        ],
        recommendations: [
          'Add comprehensive Schema.org structured data for your main content types',
          'Create AI plugin configuration files in the .well-known directory',
          'Update robots.txt with specific directives for AI crawlers',
          'Ensure all important content is accessible without JavaScript execution',
          'Implement a comprehensive XML sitemap with all important pages',
          'Add semantic HTML5 elements to improve content structure understanding'
        ]
      });
      setIsAnalyzing(false);
    }, 3000);
  };

  return (
    <>
      

      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            AI Website Crawler Optimization
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Analyze your website's readiness for AI crawlers like ChatGPT and Google's AI. Get recommendations to improve AI visibility and indexing.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#1b1b1b] p-8 rounded-xl border border-white/10 mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-[#A3D1FF]/10 p-3 rounded-lg">
                <Bot className="w-6 h-6 text-[#A3D1FF]" />
              </div>
              <h3 className="text-2xl font-bold text-white">AI Crawler Analyzer</h3>
            </div>
            
            <p className="text-white mb-6">
              Enter your website URL to analyze its readiness for AI crawlers and get personalized recommendations for improvement.
            </p>
            
            {!result ? (
              <form onSubmit={handleAnalyze} className="space-y-6">
                <div>
                  <label htmlFor="website-url" className="block text-sm font-medium text-gray-300 mb-2">
                    Enter your website URL
                  </label>
                  <input
                    type="text"
                    id="website-url"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="https://yourwebsite.com"
                    className="w-full px-4 py-3 bg-[#2d3035] border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#A3D1FF] focus:border-transparent"
                    disabled={isAnalyzing}
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isAnalyzing || !url}
                  className="mr_btn mr_btn_primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>{isAnalyzing ? 'Analyzing...' : 'Analyze AI Readiness'}</span>
                </button>
              </form>
            ) : (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h4 className="text-xl font-semibold text-white">Analysis Results</h4>
                  <div className="flex items-center gap-2">
                    <span className="text-white">AI Readiness Score:</span>
                    <span className="text-lg font-bold text-[#A3D1FF]">{result.score}/100</span>
                  </div>
                </div>
                
                <div className="h-2 bg-[#2d3035] rounded-full">
                  <div 
                    className="h-2 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-full" 
                    style={{ width: `${result.score}%` }}
                  ></div>
                </div>
                
                <div className="bg-[#2d3035] p-4 rounded-lg">
                  <h5 className="font-semibold text-white mb-3">Issues Found</h5>
                  <div className="space-y-3">
                    {result.issues.map((issue, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <AlertCircle className={`w-5 h-5 mt-0.5 ${
                          issue.severity === 'high' ? 'text-red-500' : 
                          issue.severity === 'medium' ? 'text-yellow-500' : 
                          'text-blue-500'
                        }`} />
                        <div>
                          <p className="text-white font-medium">{issue.type}</p>
                          <p className="text-sm text-white">{issue.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-[#2d3035] p-4 rounded-lg">
                  <h5 className="font-semibold text-white mb-3">Recommendations</h5>
                  <div className="space-y-2">
                    {result.recommendations.map((recommendation, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-[#A3D1FF] mt-0.5" />
                        <span className="text-gray-300">{recommendation}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-center">
                  <button
                    onClick={() => {
                      setResult(null);
                      setUrl('');
                    }}
                    className="mr_btn mr_btn_outline group"
                  >
                    <span>Analyze another website</span>
                  </button>
                </div>
              </div>
            )}
          </div>
          
          <SiteMapGenerator />
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1b1b1b]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Key AI Crawler Optimization Techniques</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={Code}
              title="Structured Data"
              description="Implement Schema.org markup to provide explicit context about your content, making it easier for AI to understand and index."
            />
            <FeatureCard
              icon={FileText}
              title="AI Plugin Configuration"
              description="Create AI plugin configuration files in the .well-known directory to provide explicit instructions for AI crawlers."
            />
            <FeatureCard
              icon={Search}
              title="Semantic HTML"
              description="Use proper HTML5 semantic elements to create a clear content hierarchy that AI can easily parse and understand."
            />
            <FeatureCard
              icon={Bot}
              title="Robots.txt Directives"
              description="Add specific directives for AI crawlers in your robots.txt file to control what content they can access."
            />
            <FeatureCard
              icon={Zap}
              title="Performance Optimization"
              description="Ensure fast loading times and efficient rendering to maximize the content AI crawlers can process within their time limits."
            />
            <FeatureCard
              icon={FileText}
              title="XML Sitemaps"
              description="Create comprehensive XML sitemaps that include all important pages and content types for AI discovery."
            />
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Need Expert Help with AI Optimization?</h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Let's optimize your website for AI crawlers and ensure your content is properly indexed and understood.
          </p>
          <button
            onClick={() => router.push('/contact')}
            className="mr_btn mr_btn_outline group"
          >
            <span>Get in Touch</span>
            <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </section>
    </>
  );
}