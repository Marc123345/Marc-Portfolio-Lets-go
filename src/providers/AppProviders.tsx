"use client";

import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Toaster } from 'sonner';
import { MotionConfig } from 'framer-motion';

interface Props {
  children: React.ReactNode;
}

function ErrorFallback({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong</h2>
        <p className="text-gray-600 mb-4">{error.message}</p>
        <button
          onClick={resetErrorBoundary}
          className="bg-black text-white px-6 py-3 hover:bg-gray-800 transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  );
}

export function AppProviders({ children }: Props) {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <MotionConfig reducedMotion="user">
        {children}
        <Toaster position="top-right" expand={true} richColors />
      </MotionConfig>
    </ErrorBoundary>
  );
}
