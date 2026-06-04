"use client";

import React, { useState } from 'react';
import { ArrowRight, Download, FileText } from 'lucide-react';

export default function SiteMapGenerator() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [isGenerated, setIsGenerated] = useState(false);
  
  const handleGenerate = () => {
    setIsGenerating(true);
    
    // Simulate generation process
    setTimeout(() => {
      setIsGenerating(false);
      setIsGenerated(true);
    }, 2000);
  };
  
  return (
    <div className="bg-[#1b1b1b] rounded-xl border border-white/10 overflow-hidden">
      <div className="p-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-[#A3D1FF]/10 p-3 rounded-lg">
            <FileText className="w-6 h-6 text-[#A3D1FF]" />
          </div>
          <h3 className="text-2xl font-bold text-white">Sitemap Generator</h3>
        </div>
        
        <p className="text-white mb-6">
          Generate a comprehensive XML sitemap for your website to improve search engine indexing and AI crawling capabilities.
        </p>
        
        <div className="space-y-6">
          <div className="bg-[#2d3035] p-4 rounded-lg">
            <h4 className="font-medium text-white mb-2">Benefits of a Sitemap</h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-sm">
                <ArrowRight className="w-4 h-4 text-[#A3D1FF] mt-0.5" />
                <span className="text-gray-300">Helps search engines discover and index all your pages</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <ArrowRight className="w-4 h-4 text-[#A3D1FF] mt-0.5" />
                <span className="text-gray-300">Improves AI crawlers' understanding of your site structure</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <ArrowRight className="w-4 h-4 text-[#A3D1FF] mt-0.5" />
                <span className="text-gray-300">Provides metadata about content types and update frequency</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <ArrowRight className="w-4 h-4 text-[#A3D1FF] mt-0.5" />
                <span className="text-gray-300">Essential for large websites with many pages</span>
              </li>
            </ul>
          </div>
          
          {isGenerated ? (
            <div className="bg-[#2d3035] p-4 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-[#A3D1FF]" />
                  <span className="text-white font-medium">sitemap.xml</span>
                </div>
                <span className="text-sm text-white">12KB</span>
              </div>
              <div className="bg-[#1b1b1b] p-3 rounded-lg mb-4 overflow-x-auto">
                <pre className="text-gray-300 text-sm">
                  <code>{`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://example.com/</loc>
    <lastmod>2025-05-27T00:00:00+00:00</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://example.com/about</loc>
    <lastmod>2025-05-27T00:00:00+00:00</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <!-- More URLs would be listed here -->
</urlset>`}</code>
                </pre>
              </div>
              <a 
                href="/sitemap.xml" 
                download
                className="inline-flex items-center px-4 py-2 bg-[#A3D1FF] text-black rounded-lg hover:bg-[#92bce6] transition-colors"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Sitemap
              </a>
            </div>
          ) : (
            <button
              onClick={handleGenerate}
              disabled={isGenerating}
              className="w-full inline-flex items-center justify-center px-6 py-3 bg-[#A3D1FF] text-black rounded-lg hover:bg-[#92bce6] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isGenerating ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black mr-3"></div>
                  Generating Sitemap...
                </>
              ) : (
                <>
                  Generate Sitemap
                  <ArrowRight className="ml-2 w-5 h-5" />
                </>
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}