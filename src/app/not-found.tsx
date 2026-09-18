'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_left,rgba(0,86,210,0.1),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(227,24,55,0.1),transparent_40%)]"></div>
      
      <div className="relative z-10 max-w-2xl mx-auto">
        <h1 className="text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-500 mb-6 drop-shadow-lg">
          404
        </h1>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 tracking-tight">
          Oops! You&apos;ve ventured off the map.
        </h2>
        <p className="text-lg text-slate-400 mb-10 leading-relaxed max-w-md mx-auto">
          The page you are looking for doesn&apos;t exist, has been moved, or is temporarily unavailable. Let&apos;s get you back home.
        </p>
        <Link 
          href="/" 
          className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-white bg-brand-primary hover:bg-brand-primary-light rounded-full transition-all hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(227,24,55,0.3)]"
        >
          <i className="fa-solid fa-house"></i> Return to Homepage
        </Link>
      </div>
    </div>
  );
}
