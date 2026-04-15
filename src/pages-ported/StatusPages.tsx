"use client";

import React from 'react';
import { ArrowLeft, TriangleAlert as AlertTriangle, MoveRight } from 'lucide-react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
export function NotFoundPage() {
  const router = useRouter();
  
  return (
    <>
      

      <div className="min-h-screen flex items-center justify-center bg-black px-4">
        <div className="max-w-md text-center">
          <div className="w-20 h-20 bg-[#A3D1FF]/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <AlertTriangle className="h-10 w-10 text-[#A3D1FF]" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-white mb-6">Page Not Found</h2>
          <p className="text-white mb-8">
            The page you're looking for doesn't exist or has been moved. You can find what you need using the links below.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => router.back()}
              className="inline-flex items-center px-6 py-3 bg-[#1b1b1b] text-white rounded-lg hover:bg-[#2d3035] transition-colors"
            >
              <ArrowLeft className="mr-2 w-5 h-5" />
              Go Back
            </button>
            <Link 
              href="/"
              className="inline-flex items-center px-6 py-3 bg-[#A3D1FF] text-black rounded-lg hover:bg-[#92bce6] transition-colors"
            >
              Go Home
            </Link>
            <Link 
              href="/work"
              className="inline-flex items-center px-6 py-3 bg-[#2d3035] text-white rounded-lg hover:bg-[#3d4045] transition-colors"
            >
              View Portfolio
            </Link>
          </div>
          
          {/* Popular Pages */}
          <div className="mt-8 pt-6 border-t border-white/10">
            <h3 className="text-lg font-semibold text-white mb-4">Popular Pages</h3>
            <div className="grid grid-cols-2 gap-3">
              <Link href="/services" className="text-[#A3D1FF] hover:underline">Services</Link>
              <Link href="/work" className="text-[#A3D1FF] hover:underline">Portfolio</Link>
              <Link href="/about" className="text-[#A3D1FF] hover:underline">About</Link>
              <Link href="/contact" className="text-[#A3D1FF] hover:underline">Contact</Link>
              <Link href="/blog" className="text-[#A3D1FF] hover:underline">Blog</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function RedirectPage({ permanent = false }) {
  const pathname = usePathname();
  const router = useRouter();
  const statusCode = permanent ? 301 : 302;

  // Validate redirect URL to prevent open redirect vulnerability
  const getValidatedRedirectUrl = () => {
    const urlParam = new URLSearchParams(location.search).get('to') || '/';

    try {
      // If URL starts with /, it's a relative path - safe to use
      if (urlParam.startsWith('/')) {
        return urlParam;
      }

      // Parse absolute URLs and check if they're same origin
      const url = new URL(urlParam, window.location.origin);
      if (url.origin === window.location.origin) {
        return url.pathname + url.search + url.hash;
      }

      // External URL - redirect to home instead
      if ((process.env.NODE_ENV === 'development')) {
        console.warn('Blocked redirect to external URL:', urlParam);
      }
      return '/';
    } catch {
      // Invalid URL - redirect to home
      return '/';
    }
  };

  const redirectUrl = getValidatedRedirectUrl();

  // Auto-redirect after 5 seconds
  React.useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = redirectUrl;
    }, 5000);

    return () => clearTimeout(timer);
  }, [redirectUrl]);
  
  return (
    <>
      

      <div className="min-h-screen flex items-center justify-center bg-black px-4">
        <div className="max-w-md text-center">
          <div className="w-20 h-20 bg-[#A3D1FF]/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <MoveRight className="h-10 w-10 text-[#A3D1FF]" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">{statusCode}</h1>
          <h2 className="text-2xl font-semibold text-white mb-6">
            {permanent ? 'Permanent Redirect' : 'Temporary Redirect'}
          </h2>
          <p className="text-white mb-2">
            You are being redirected to:
          </p>
          <p className="text-[#A3D1FF] mb-8 break-all">
            {redirectUrl}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => router.back()}
              className="inline-flex items-center px-6 py-3 bg-[#1b1b1b] text-white rounded-lg hover:bg-[#2d3035] transition-colors"
            >
              <ArrowLeft className="mr-2 w-5 h-5" />
              Go Back
            </button>
            <a 
              href={redirectUrl}
              className="inline-flex items-center px-6 py-3 bg-[#A3D1FF] text-black rounded-lg hover:bg-[#92bce6] transition-colors"
            >
              Continue
              <MoveRight className="ml-2 w-5 h-5" />
            </a>
          </div>
          <p className="text-gray-500 mt-6">
            Redirecting automatically in 5 seconds...
          </p>
        </div>
      </div>
    </>
  );
}