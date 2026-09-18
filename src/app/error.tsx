'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service if you have one
    console.error("Global Error Boundary caught:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center text-center px-6">
      <div className="bg-white p-10 sm:p-14 rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] max-w-xl border border-gray-100">
        <div className="w-20 h-20 bg-red-100 text-red-500 rounded-full flex items-center justify-center mx-auto mb-8 text-3xl">
          <i className="fa-solid fa-triangle-exclamation"></i>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-4 tracking-tight">
          Something went wrong
        </h2>
        <p className="text-gray-500 mb-8 leading-relaxed">
          We&apos;re sorry, but an unexpected error occurred.
          Please try refreshing or head back to the homepage.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => reset()}
            className="px-6 py-3 font-bold text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors flex items-center justify-center gap-2"
          >
            <i className="fa-solid fa-rotate-right"></i> Try Again
          </button>
          <Link 
            href="/"
            className="px-6 py-3 font-bold text-white bg-brand-primary hover:bg-brand-primary-light rounded-full transition-colors flex items-center justify-center gap-2"
          >
            <i className="fa-solid fa-house"></i> Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
