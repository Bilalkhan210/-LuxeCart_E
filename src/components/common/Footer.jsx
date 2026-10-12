import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, Mail, ArrowRight, Instagram, Globe, Headphones } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim() && email.includes('@')) {
      setIsSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="w-full bg-[#edeeef] dark:bg-zinc-950 mt-24 border-t border-black/5 dark:border-white/5 transition-colors">
      <div className="max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-16 pt-16 pb-12">
        
        {/* Newsletter Editorial Box (matching screenshot) */}
        <div className="bg-white dark:bg-zinc-900 rounded-3xl p-8 lg:p-12 mb-16 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-sm border border-black/5 dark:border-white/5">
          <div className="max-w-xl text-center lg:text-left">
            <p className="text-xs font-bold uppercase tracking-wider text-[#4b41e1] dark:text-[#a5b4fc] mb-1.5">
              The LuxeCart Journal
            </p>
            <h3 className="font-headline text-2xl lg:text-3xl font-semibold text-[#191c1d] dark:text-white mb-2">
              Curated Privileges &amp; Private Releases
            </h3>
            <p className="text-xs sm:text-sm text-[#45474b] dark:text-zinc-400">
              Subscribe for invitation-only preview access to limited seasonal capsules and architectural design drops.
            </p>
          </div>

          <div className="w-full max-w-md">
            {isSubscribed ? (
              <div className="flex items-center gap-2 p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 text-xs font-semibold">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>You are registered for invitation-only release monographs.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your personal email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-[#f8f9fa] dark:bg-zinc-800 px-4 py-3 rounded-xl text-xs text-[#191c1d] dark:text-white placeholder:text-[#76777b] dark:placeholder:text-zinc-500 border border-black/5 dark:border-white/10 focus:outline-none focus:bg-white dark:focus:bg-zinc-700 transition-colors"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-black dark:bg-white text-white dark:text-black font-semibold text-xs uppercase tracking-wider hover:opacity-90 transition-opacity whitespace-nowrap cursor-pointer"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        {/* 4 Navigation Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-14 border-b border-black/5 dark:border-white/10">
          <div className="flex flex-col gap-3">
            <h4 className="font-headline text-sm font-bold text-[#191c1d] dark:text-white">Shop</h4>
            <ul className="flex flex-col gap-2 text-xs text-[#45474b] dark:text-zinc-400">
              <li><Link to="/products?category=timepieces" className="hover:text-black dark:hover:text-white transition-colors">Timepieces &amp; Chronos</Link></li>
              <li><Link to="/products?category=leather" className="hover:text-black dark:hover:text-white transition-colors">Fine Leather Goods</Link></li>
              <li><Link to="/products?category=audio" className="hover:text-black dark:hover:text-white transition-colors">Spatial Audio</Link></li>
              <li><Link to="/products?category=apparel" className="hover:text-black dark:hover:text-white transition-colors">Pure Cashmere &amp; Silk</Link></li>
              <li><Link to="/products?category=living" className="hover:text-black dark:hover:text-white transition-colors">Living &amp; Objects</Link></li>
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="font-headline text-sm font-bold text-[#191c1d] dark:text-white">Customer Care</h4>
            <ul className="flex flex-col gap-2 text-xs text-[#45474b] dark:text-zinc-400">
              <li><Link to="/profile" className="hover:text-black dark:hover:text-white transition-colors">Order Tracking</Link></li>
              <li><Link to="/contact" className="hover:text-black dark:hover:text-white transition-colors">Returns &amp; Exchanges</Link></li>
              <li><Link to="/contact" className="hover:text-black dark:hover:text-white transition-colors">Worldwide Shipping</Link></li>
              <li><Link to="/contact" className="hover:text-black dark:hover:text-white transition-colors">Frequently Asked Questions</Link></li>
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="font-headline text-sm font-bold text-[#191c1d] dark:text-white">Company</h4>
            <ul className="flex flex-col gap-2 text-xs text-[#45474b] dark:text-zinc-400">
              <li><Link to="/about" className="hover:text-black dark:hover:text-white transition-colors">Our Story &amp; Ethos</Link></li>
              <li><Link to="/about" className="hover:text-black dark:hover:text-white transition-colors">Sustainable Metallurgy</Link></li>
              <li><Link to="/about" className="hover:text-black dark:hover:text-white transition-colors">Geneva &amp; Paris Ateliers</Link></li>
              <li><Link to="/contact" className="hover:text-black dark:hover:text-white transition-colors">Press &amp; Media Inquiries</Link></li>
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="font-headline text-sm font-bold text-[#191c1d] dark:text-white">Legal &amp; Ethics</h4>
            <ul className="flex flex-col gap-2 text-xs text-[#45474b] dark:text-zinc-400">
              <li><a href="#" className="hover:text-black dark:hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-black dark:hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-black dark:hover:text-white transition-colors">Cookie Preferences</a></li>
              <li><a href="#" className="hover:text-black dark:hover:text-white transition-colors">Accessibility Standards</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Payment Badges & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 flex-wrap justify-center md:justify-start">
            <span className="text-[10px] px-2.5 py-1 rounded bg-black/5 dark:bg-white/10 text-black dark:text-white font-bold tracking-widest uppercase">
              Visa
            </span>
            <span className="text-[10px] px-2.5 py-1 rounded bg-black/5 dark:bg-white/10 text-black dark:text-white font-bold tracking-widest uppercase">
              Mastercard
            </span>
            <span className="text-[10px] px-2.5 py-1 rounded bg-black/5 dark:bg-white/10 text-black dark:text-white font-bold tracking-widest uppercase">
              Amex
            </span>
            <span className="text-[10px] px-2.5 py-1 rounded bg-black/5 dark:bg-white/10 text-black dark:text-white font-bold tracking-widest uppercase">
              Apple Pay
            </span>
            <span className="text-[10px] px-2.5 py-1 rounded bg-black/5 dark:bg-white/10 text-black dark:text-white font-bold tracking-widest uppercase">
              PayPal
            </span>
          </div>

          <div className="flex items-center gap-4 text-[#76777b] dark:text-zinc-400">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:text-black dark:hover:text-white transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" aria-label="Global Community" className="hover:text-black dark:hover:text-white transition-colors">
              <Globe className="w-4 h-4" />
            </a>
            <Link to="/contact" aria-label="Hotline" className="hover:text-black dark:hover:text-white transition-colors">
              <Headphones className="w-4 h-4" />
            </Link>
          </div>

          <p className="text-xs text-[#76777b] dark:text-zinc-500 text-center md:text-right">
            © 2024 LuxeCart Atelier Inc. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
