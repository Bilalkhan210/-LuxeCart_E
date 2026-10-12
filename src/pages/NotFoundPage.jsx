import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, ArrowRight } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="w-full pt-32 pb-24 bg-[#f8f9fa] dark:bg-zinc-950 min-h-screen flex items-center justify-center transition-colors">
      <div className="max-w-md w-full mx-auto px-4 text-center space-y-6">
        <div className="w-20 h-20 rounded-full bg-[#f3f4f5] dark:bg-zinc-800 flex items-center justify-center mx-auto text-[#4b41e1]">
          <Compass className="w-10 h-10" />
        </div>
        
        <div className="space-y-2">
          <span className="text-[10px] uppercase tracking-widest text-[#4b41e1] font-bold">
            Archival Error 404
          </span>
          <h1 className="font-headline text-3xl sm:text-4xl font-bold text-black dark:text-white">
            Uncatalogued Horizon
          </h1>
          <p className="text-xs text-[#76777b] dark:text-zinc-400 max-w-sm mx-auto leading-relaxed">
            The specific exhibit or curated monograph you are seeking has either transitioned to private collections or does not exist.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            to="/"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-black dark:bg-white text-white dark:text-black font-semibold text-xs uppercase tracking-wider hover:opacity-90 transition-opacity"
          >
            Return to Atelier
          </Link>
          <Link
            to="/products"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white dark:bg-zinc-800 text-black dark:text-white font-semibold text-xs uppercase tracking-wider hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors border border-black/5 dark:border-white/10"
          >
            Explore Catalog
          </Link>
        </div>
      </div>
    </div>
  );
}
