import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass, Shield, Award, Sparkles, MapPin } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="w-full pt-28 pb-24 bg-[#f8f9fa] dark:bg-zinc-950 min-h-screen transition-colors">
      <div className="max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-16">
        
        {/* Editorial Hero Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-zinc-900 border border-black/5 dark:border-white/5 text-[10px] font-bold uppercase tracking-widest text-[#4b41e1] dark:text-[#a5b4fc]">
            <Compass className="w-3.5 h-3.5" />
            <span>The LuxeCart Atelier Manifesto</span>
          </div>
          <h1 className="font-headline text-4xl sm:text-6xl font-semibold text-black dark:text-white leading-[1.05] tracking-tight">
            Restraint Over Noise. <br />
            Longevity Over Novelty.
          </h1>
          <p className="text-base sm:text-lg text-[#45474b] dark:text-zinc-300 leading-relaxed">
            LuxeCart was founded on a singular conviction: that modern luxury should not shout. In an age of synthetic ubiquity, our workshops return to heavy metals, hand-turned timber, and full-grain hides assembled with patient architectural discipline.
          </p>
        </div>

        {/* Big Editorial Visual Banner */}
        <div className="w-full aspect-[21/9] rounded-3xl overflow-hidden bg-zinc-200 dark:bg-zinc-800 shadow-xl mb-20 relative">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQrj_qQVFmy7w4XnRonTE0N53O-ZwMGspN2aQP2Y67cYwxfexCkDO5kv4ACNARR7fQMNP632AL-pOUE2__-RXIXGOuD80DlPnCskWfZmG1_scweOH6AWpjclTpYSS3BJnv6AMoKVrRAodD3uSkK8Ap6fuVwwPcl1T83fxBtMtV6MNuxTJx-LIpHCaR3u_ftEZye3VvdiL56z2ra1QIDOxBY2zyf9i2kho029CqbxnK7rIoJbHc4azE"
            alt="Artisan Horology Bench"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-8 sm:p-12">
            <p className="text-white font-headline text-lg sm:text-2xl font-semibold max-w-xl">
              "Every curve is milled with purpose. Every edge is polished to reflect light without glare."
            </p>
          </div>
        </div>

        {/* 3 Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <div className="bg-white dark:bg-zinc-900 p-8 rounded-3xl border border-black/5 dark:border-white/5 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#e2dfff] dark:bg-[#201d4a] text-[#4b41e1] dark:text-[#c3c0ff] flex items-center justify-center">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="font-headline text-xl font-bold text-black dark:text-white">
              01 / Honest Metallurgy
            </h3>
            <p className="text-xs sm:text-sm text-[#45474b] dark:text-zinc-400 leading-relaxed">
              We exclusively employ Grade 5 aerospace titanium, solid recycled architectural bronze, and Mazzucchelli bio-acetate. No chrome plating that chips, no faux finishes that flake.
            </p>
          </div>

          <div className="bg-white dark:bg-zinc-900 p-8 rounded-3xl border border-black/5 dark:border-white/5 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#e2dfff] dark:bg-[#201d4a] text-[#4b41e1] dark:text-[#c3c0ff] flex items-center justify-center">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="font-headline text-xl font-bold text-black dark:text-white">
              02 / Multi-Generational Wear
            </h3>
            <p className="text-xs sm:text-sm text-[#45474b] dark:text-zinc-400 leading-relaxed">
              Our leather goods are assembled using continuous French saddle stitching. If a thread wears thin in thirty years, our Paris repair atelier restores it free of charge.
            </p>
          </div>

          <div className="bg-white dark:bg-zinc-900 p-8 rounded-3xl border border-black/5 dark:border-white/5 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#e2dfff] dark:bg-[#201d4a] text-[#4b41e1] dark:text-[#c3c0ff] flex items-center justify-center">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="font-headline text-xl font-bold text-black dark:text-white">
              03 / Unhurried Commerce
            </h3>
            <p className="text-xs sm:text-sm text-[#45474b] dark:text-zinc-400 leading-relaxed">
              No countdown timers, no synthetic urgency. Every release is produced in disciplined quantities calibrated strictly against atelier capacity and uncompromised quality.
            </p>
          </div>
        </div>

        {/* Global Ateliers Map / List */}
        <div className="bg-white dark:bg-zinc-900 rounded-3xl p-8 sm:p-12 border border-black/5 dark:border-white/5 shadow-sm space-y-8">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#4b41e1] dark:text-[#a5b4fc] font-bold">
              Provenance Network
            </span>
            <h2 className="font-headline text-2xl sm:text-3xl font-semibold text-black dark:text-white mt-1">
              Active European Workshops
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                city: "Geneva, Switzerland",
                role: "Calibre & Horology Atelier",
                desc: "Micro-machining, chronometer regulation, exhibition casing."
              },
              {
                city: "Florence, Italy",
                role: "Leather Master Craft",
                desc: "Full-grain Tuscan tanning, hand-burnishing, saddle stitching."
              },
              {
                city: "Copenhagen, Denmark",
                role: "Studio Værn Bronze Lab",
                desc: "Sand-cast reclaimed bronze homeware and tactile objects."
              },
              {
                city: "Biella, Italy",
                role: "Pure Cashmere & Textiles",
                desc: "Inner Mongolian staple combing, 7-gauge architectural knits."
              }
            ].map(loc => (
              <div key={loc.city} className="p-5 rounded-2xl bg-[#f8f9fa] dark:bg-zinc-800/60 space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-bold text-black dark:text-white">
                  <MapPin className="w-4 h-4 text-[#4b41e1]" />
                  <span>{loc.city}</span>
                </div>
                <p className="text-xs font-semibold text-[#4b41e1] dark:text-[#a5b4fc]">{loc.role}</p>
                <p className="text-[11px] text-[#76777b] dark:text-zinc-400">{loc.desc}</p>
              </div>
            ))}
          </div>

          <div className="pt-4 flex justify-center">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-black dark:bg-white text-white dark:text-black font-semibold text-xs uppercase tracking-wider hover:opacity-90 transition-opacity"
            >
              <span>Explore The Curated Archives</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
