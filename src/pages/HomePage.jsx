import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  ArrowRight,
  Eye,
  CheckCircle,
  Shield,
  Leaf,
  Star,
  ShoppingBag,
  Sparkles,
  Award
} from 'lucide-react';
import { PRODUCTS, CATEGORIES } from '../data/products.js';
import ProductCard from '../components/products/ProductCard.jsx';
import { useCart } from '../context/CartContext.jsx';

export default function HomePage() {
  const [trendingFilter, setTrendingFilter] = useState('all');
  const [catalogTab, setCatalogTab] = useState('bestsellers');
  const { addToCart } = useCart();
  const navigate = useNavigate();

  // Featured hero piece
  const heroPiece = PRODUCTS.find(p => p.id === 'aethelgard-chronometer-01') || PRODUCTS[0];

  // Trending filter
  const trendingProducts = PRODUCTS.filter(p => {
    if (trendingFilter === 'all') return p.trending || p.bestSeller;
    if (trendingFilter === 'apparel') return p.category === 'apparel';
    if (trendingFilter === 'leather') return p.category === 'leather';
    if (trendingFilter === 'tech') return p.category === 'audio';
    return true;
  }).slice(0, 4);

  // Catalog tab items
  const bestSellers = PRODUCTS.filter(p => p.bestSeller).slice(0, 3);
  const newArrivals = PRODUCTS.filter(p => p.badge === 'Just In' || p.badge === 'New Arrival' || p.badge === 'Capsule Release').slice(0, 3);

  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero Section */}
      <section className="relative w-full overflow-hidden bg-[#f3f4f5] dark:bg-zinc-900 pt-28 pb-20 sm:pb-28">
        <div className="max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Editorial Column */}
            <div className="lg:col-span-7 flex flex-col items-start gap-6 z-10">
              {/* Capsule Release Pill */}
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white dark:bg-zinc-800 shadow-sm border border-black/5 dark:border-white/5">
                <span className="w-2 h-2 rounded-full bg-[#4b41e1] animate-pulse" />
                <span className="text-xs uppercase tracking-widest text-black dark:text-white font-bold">
                  SS/25 Capsule Release
                </span>
                <span className="text-zinc-400">•</span>
                <span className="text-[11px] font-bold uppercase text-[#4b41e1] dark:text-[#a5b4fc]">
                  Edition 01
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#191c1d] dark:text-white tracking-tight leading-[1.08]">
                Elevate Every <br className="hidden sm:inline" />
                <span className="italic font-light">Dimension</span> of <br />
                Everyday Luxury.
              </h1>

              {/* Sub-paragraph */}
              <p className="text-base sm:text-lg text-[#45474b] dark:text-zinc-300 max-w-xl leading-relaxed">
                Disciplined craftsmanship meets contemporary Scandinavian form. Discover our latest archival drop of timeless wardrobe centerpieces and tactile everyday objects.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-black dark:bg-white text-white dark:text-black font-semibold text-xs uppercase tracking-wider hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all duration-300 shadow-md"
                >
                  <span>Explore New Season</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="#editorial"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-[#edeeef] dark:bg-zinc-800 text-[#191c1d] dark:text-white font-semibold text-xs uppercase tracking-wider hover:bg-[#e7e8e9] dark:hover:bg-zinc-700 transition-colors"
                >
                  <span>View Lookbook</span>
                  <Eye className="w-4 h-4" />
                </a>
              </div>

              {/* 3 Value Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 w-full">
                <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-white dark:bg-zinc-800/80 shadow-sm border border-black/5 dark:border-white/5">
                  <div className="w-10 h-10 rounded-xl bg-[#f3f4f5] dark:bg-zinc-700 flex items-center justify-center flex-shrink-0 text-black dark:text-white">
                    <Award className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-black dark:text-white">Handcrafted Precision</span>
                    <span className="text-[11px] text-[#76777b] dark:text-zinc-400">Atelier Certified</span>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-white dark:bg-zinc-800/80 shadow-sm border border-black/5 dark:border-white/5">
                  <div className="w-10 h-10 rounded-xl bg-[#f3f4f5] dark:bg-zinc-700 flex items-center justify-center flex-shrink-0 text-[#4b41e1] dark:text-[#a5b4fc]">
                    <Leaf className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-black dark:text-white">Carbon-Neutral</span>
                    <span className="text-[11px] text-[#76777b] dark:text-zinc-400">Complimentary Express</span>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-white dark:bg-zinc-800/80 shadow-sm border border-black/5 dark:border-white/5">
                  <div className="w-10 h-10 rounded-xl bg-[#f3f4f5] dark:bg-zinc-700 flex items-center justify-center flex-shrink-0 text-black dark:text-white">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-black dark:text-white">30-Day Guarantee</span>
                    <span className="text-[11px] text-[#76777b] dark:text-zinc-400">Seamless Concierge</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Hero Visual Showcase */}
            <div className="lg:col-span-5 relative mt-6 lg:mt-0">
              <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl bg-[#edeeef] dark:bg-zinc-800 group">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuArO-ftyA7RTncq4XlqyiZzC_KVGuYv_lt13EmHRaaDknx-Bzt0-vtikZToPbwKSEQ3ZbflVo2g1QnOW-ew_XdYkEVXXOzPGKjNzi1Jdtzh_a4A-Xuhb7ubDoX87xZAGU7LOwMrGQQEbGjMDPV7pvErKYt1j8-fIoDxQZGNk3qCebfKF495fRttsWs_DtzMRoIOFW3TLB1JAajzyyVBdaZenPE-Maehr1IxSgc1uGHEB_bekRzASquK"
                  alt="Aethelgard 40mm Tourbillon"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6 sm:p-8">
                  <div className="bg-white/95 dark:bg-zinc-900/95 backdrop-blur-xl p-5 rounded-2xl shadow-xl flex items-center justify-between gap-4 border border-white/20">
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-[#4b41e1] dark:text-[#a5b4fc] font-bold">
                        Limited Run • 100 Pieces
                      </span>
                      <h3 className="font-headline text-base font-bold text-black dark:text-white">
                        Aethelgard 40mm Tourbillon
                      </h3>
                      <p className="text-xs text-[#76777b] dark:text-zinc-400">
                        $2,850 • Grade 5 Titanium Calibre
                      </p>
                    </div>

                    <button
                      onClick={() => addToCart(heroPiece, 1)}
                      aria-label="Quick add featured piece"
                      className="w-12 h-12 rounded-xl bg-black dark:bg-white text-white dark:text-black flex items-center justify-center hover:bg-[#4b41e1] dark:hover:bg-[#4b41e1] hover:text-white dark:hover:text-white transition-colors shadow-md flex-shrink-0 cursor-pointer"
                    >
                      <ShoppingBag className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Floating Overlap Score Badge */}
              <div className="hidden sm:flex absolute -top-5 -left-5 bg-white dark:bg-zinc-800 px-5 py-3.5 rounded-2xl shadow-xl items-center gap-3.5 border border-black/5 dark:border-white/10">
                <div className="w-10 h-10 rounded-full bg-[#e2dfff] dark:bg-[#201d4a] flex items-center justify-center text-[#4b41e1] dark:text-[#c3c0ff]">
                  <Star className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <p className="font-headline text-lg font-bold text-black dark:text-white leading-none">
                    4.98 / 5
                  </p>
                  <p className="text-[10px] uppercase tracking-wider text-[#76777b] dark:text-zinc-400 mt-1 font-semibold">
                    Atelier Rating Index
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Categories Bento Grid (Categories of Distinction) */}
      <section className="w-full py-20 sm:py-28 bg-[#f8f9fa] dark:bg-zinc-950 transition-colors">
        <div className="max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#4b41e1] dark:text-[#a5b4fc] font-bold">
                Curation Tiers
              </span>
              <h2 className="font-headline text-3xl sm:text-4xl font-semibold text-black dark:text-white mt-1">
                Categories of Distinction
              </h2>
            </div>
            <p className="text-sm text-[#45474b] dark:text-zinc-400 max-w-md">
              Carefully indexed archival pieces, handcrafted using ethically sourced raw materials and precision assembly.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.id}
                to={`/products?category=${cat.id}`}
                className={`group relative ${cat.colSpan} ${
                  cat.colSpan.includes('col-span-7') || cat.colSpan.includes('col-span-5')
                    ? 'h-96 sm:h-[460px]'
                    : 'h-80'
                } rounded-3xl overflow-hidden bg-zinc-200 dark:bg-zinc-800 shadow-sm flex flex-col justify-end p-6 sm:p-8`}
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                <div className="relative z-10 flex items-end justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#e2dfff] font-bold">
                      {cat.itemCount}
                    </span>
                    <h3 className="font-headline text-xl sm:text-2xl text-white font-semibold mt-1">
                      {cat.name}
                    </h3>
                    <p className="text-xs text-zinc-300 mt-1 hidden sm:block">
                      {cat.description}
                    </p>
                  </div>
                  <div className="w-11 h-11 rounded-xl bg-white/20 backdrop-blur-md text-white flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors flex-shrink-0 ml-4">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Trending Products Section with Filter Chips */}
      <section className="w-full py-20 sm:py-28 bg-[#f3f4f5] dark:bg-zinc-900 transition-colors" id="trending">
        <div className="max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-10 gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#4b41e1] dark:text-[#a5b4fc] font-bold">
                Seasonal Velocity
              </span>
              <h2 className="font-headline text-3xl sm:text-4xl font-semibold text-black dark:text-white mt-1">
                Trending Right Now
              </h2>
            </div>

            {/* Filter Chips */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0">
              {[
                { id: 'all', label: 'All Trending' },
                { id: 'apparel', label: 'Apparel' },
                { id: 'leather', label: 'Leather' },
                { id: 'tech', label: 'Hardware' }
              ].map(chip => (
                <button
                  key={chip.id}
                  onClick={() => setTrendingFilter(chip.id)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                    trendingFilter === chip.id
                      ? 'bg-black dark:bg-white text-white dark:text-black shadow-sm'
                      : 'bg-white dark:bg-zinc-800 text-[#191c1d] dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700'
                  }`}
                >
                  {chip.label}
                </button>
              ))}
            </div>
          </div>

          {/* 4-Card Luxury Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trendingProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-white dark:bg-zinc-800 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black text-black dark:text-white text-xs font-semibold uppercase tracking-wider transition-colors border border-black/5 dark:border-white/10 shadow-sm"
            >
              <span>View Full 48-Piece Exhibition Catalog</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Editorial Spotlight / Artisan Collaboration Banner */}
      <section className="w-full py-20 sm:py-28 bg-[#f8f9fa] dark:bg-zinc-950 transition-colors" id="editorial">
        <div className="max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-16">
          <div className="bg-white dark:bg-zinc-900 rounded-3xl overflow-hidden shadow-xl border border-black/5 dark:border-white/5 grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Story Column */}
            <div className="lg:col-span-6 p-8 sm:p-12 lg:p-16 flex flex-col justify-center gap-6">
              <div className="inline-flex items-center gap-2">
                <span className="text-xs uppercase tracking-widest text-[#4b41e1] dark:text-[#a5b4fc] font-bold">
                  Artisan Collaboration
                </span>
                <span className="text-zinc-400">•</span>
                <span className="text-xs uppercase tracking-widest text-[#76777b] dark:text-zinc-400 font-semibold">
                  LuxeCart × Studio Værn
                </span>
              </div>

              <h2 className="font-headline text-3xl sm:text-5xl font-semibold text-black dark:text-white leading-[1.1]">
                Silence, Form, and Living Bronze.
              </h2>

              <p className="text-sm sm:text-base text-[#45474b] dark:text-zinc-300 leading-relaxed">
                In our newest partnership with Copenhagen-based casting studio Værn, we explore heirloom homeware formed from sand-cast recycled architectural bronze. Every vessel develops its own deliberate patina with touch and atmosphere.
              </p>

              {/* Stats Bar */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8 pt-2">
                <div>
                  <p className="font-headline text-2xl sm:text-3xl font-bold text-black dark:text-white">150</p>
                  <p className="text-[10px] uppercase tracking-wider text-[#76777b] dark:text-zinc-400">Numbered Artifacts</p>
                </div>
                <div className="hidden sm:block w-px h-8 bg-black/10 dark:bg-white/10" />
                <div>
                  <p className="font-headline text-2xl sm:text-3xl font-bold text-black dark:text-white">100%</p>
                  <p className="text-[10px] uppercase tracking-wider text-[#76777b] dark:text-zinc-400">Reclaimed Bronze Alloy</p>
                </div>
                <div className="hidden sm:block w-px h-8 bg-black/10 dark:bg-white/10" />
                <div>
                  <p className="font-headline text-2xl sm:text-3xl font-bold text-black dark:text-white">Copenhagen</p>
                  <p className="text-[10px] uppercase tracking-wider text-[#76777b] dark:text-zinc-400">Hand Poured Atelier</p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/products?category=living"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-black dark:bg-white text-white dark:text-black font-semibold text-xs uppercase tracking-wider hover:bg-[#4b41e1] dark:hover:bg-[#4b41e1] hover:text-white dark:hover:text-white transition-colors shadow-md"
                >
                  <span>Shop the Story</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Visual Workshop Mosaic */}
            <div className="lg:col-span-6 relative min-h-[380px] lg:min-h-full bg-zinc-200 dark:bg-zinc-800 overflow-hidden group">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC95YVVgM91vfftznCnt-axAgd61p9h1CuX77Z22SWdy1v2N5abBggkL4Gzh2yLpTyK72If3qAWfVIxox4n0noJH-hyU3dYty5Xsf2C-WMklt5f9EgnbhsR-XLXxrP34SnNEYd0nvbuYDIuITgoOsPiVKzvRWNMDDpa0nQKnpEWcdMocZYDb3ydbHDdk8UlUZQQLdpQZy5h2-h0xUeBYdjtTrNGZXbYPpMHur4VGOFBH5ztj_a3_lCP"
                alt="Studio Værn Bronze Workshop"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md flex items-center justify-between border border-white/20">
                <span className="text-xs text-black dark:text-white font-medium">
                  Documentary Vignette: Act 03 / The Burnishing
                </span>
                <span className="text-[11px] uppercase tracking-wider text-[#4b41e1] dark:text-[#a5b4fc] font-bold">
                  Read Monograph ↗
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Exhibition Catalog Interactive Tabs (Best Sellers vs New Arrivals) */}
      <section className="w-full py-20 sm:py-28 bg-[#f3f4f5] dark:bg-zinc-900 transition-colors">
        <div className="max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-10 gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#4b41e1] dark:text-[#a5b4fc] font-bold">
                Vault Archive
              </span>
              <h2 className="font-headline text-3xl sm:text-4xl font-semibold text-black dark:text-white mt-1">
                Exhibition Catalog
              </h2>
            </div>

            {/* Interactive Tabs */}
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-white dark:bg-zinc-800 border border-black/5 dark:border-white/10">
              <button
                onClick={() => setCatalogTab('bestsellers')}
                className={`px-5 py-2 rounded-lg text-xs font-semibold tracking-wider uppercase transition-all cursor-pointer ${
                  catalogTab === 'bestsellers'
                    ? 'bg-black dark:bg-white text-white dark:text-black shadow-sm'
                    : 'text-[#45474b] dark:text-zinc-400 hover:text-black dark:hover:text-white'
                }`}
              >
                Best Sellers
              </button>
              <button
                onClick={() => setCatalogTab('newarrivals')}
                className={`px-5 py-2 rounded-lg text-xs font-semibold tracking-wider uppercase transition-all cursor-pointer ${
                  catalogTab === 'newarrivals'
                    ? 'bg-black dark:bg-white text-white dark:text-black shadow-sm'
                    : 'text-[#45474b] dark:text-zinc-400 hover:text-black dark:hover:text-white'
                }`}
              >
                New Arrivals
              </button>
            </div>
          </div>

          {/* 3-Column Catalog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(catalogTab === 'bestsellers' ? bestSellers : newArrivals).map(item => (
              <div
                key={item.id}
                className="bg-white dark:bg-zinc-900 rounded-3xl p-6 shadow-sm border border-black/5 dark:border-white/5 flex flex-col justify-between gap-6 group hover:shadow-xl transition-all duration-300"
              >
                <div className="relative w-full aspect-square rounded-2xl bg-[#edeeef] dark:bg-zinc-800 overflow-hidden">
                  <Link to={`/product/${item.id}`} className="block w-full h-full">
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </Link>
                  {item.badge && (
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-black dark:bg-white text-white dark:text-black text-[10px] font-bold uppercase tracking-wider">
                      {item.badge}
                    </span>
                  )}
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1 text-xs">
                    <span className="text-[10px] uppercase text-[#76777b] dark:text-zinc-400 font-semibold">
                      {item.categoryLabel}
                    </span>
                    <span className="font-headline font-bold text-sm text-black dark:text-white">
                      ${item.price.toFixed(2)}
                    </span>
                  </div>
                  <Link to={`/product/${item.id}`} className="font-headline font-semibold text-base text-black dark:text-white hover:text-[#4b41e1] transition-colors block">
                    {item.name}
                  </Link>
                  <p className="text-xs text-[#76777b] dark:text-zinc-400 mt-1 line-clamp-2">
                    {item.description}
                  </p>
                </div>

                <button
                  onClick={() => addToCart(item, 1)}
                  className="w-full py-3 rounded-xl bg-[#f3f4f5] dark:bg-zinc-800 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black text-black dark:text-white text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add to Bag</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. As Featured In & Voices of Discernment (Testimonials) */}
      <section className="w-full py-20 sm:py-28 bg-[#f8f9fa] dark:bg-zinc-950 transition-colors">
        <div className="max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-16">
          
          {/* Press Badges */}
          <div className="pb-16 text-center">
            <p className="text-xs uppercase tracking-widest text-[#76777b] dark:text-zinc-400 font-semibold mb-8">
              As Featured &amp; Recognized By
            </p>
            <div className="flex flex-wrap items-center justify-center gap-10 sm:gap-16 opacity-60 dark:opacity-40 hover:opacity-100 transition-opacity">
              <span className="font-serif italic font-bold text-2xl sm:text-3xl text-black dark:text-white tracking-widest">VOGUE</span>
              <span className="font-black text-2xl sm:text-3xl text-black dark:text-white tracking-widest">GQ</span>
              <span className="font-sans font-bold text-xl sm:text-2xl text-black dark:text-white tracking-tight uppercase">MONOCLE</span>
              <span className="font-mono text-xl sm:text-2xl text-black dark:text-white">Wallpaper*</span>
              <span className="font-serif uppercase text-xl sm:text-2xl text-black dark:text-white tracking-wider">Esquire</span>
            </div>
          </div>

          {/* Testimonials Header */}
          <div className="text-center max-w-xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-widest text-[#4b41e1] dark:text-[#a5b4fc] font-bold">
              Client Endorsements
            </span>
            <h2 className="font-headline text-3xl sm:text-4xl font-semibold text-black dark:text-white mt-1">
              Voices of Discernment
            </h2>
          </div>

          {/* 3 Review Cards (matching screenshot) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-zinc-900 p-8 rounded-3xl flex flex-col justify-between gap-6 shadow-sm border border-black/5 dark:border-white/5">
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-[#4b41e1] dark:text-[#a5b4fc]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <h4 className="font-headline font-semibold text-base text-black dark:text-white">
                  “Exceeded Swiss atelier expectations.”
                </h4>
                <p className="text-xs sm:text-sm text-[#45474b] dark:text-zinc-300 leading-relaxed">
                  “The Aethelgard Tourbillon is an absolute masterwork in person. The finishing on the titanium chamfers easily rivals pieces three times the acquisition cost. Shipping to London took under 48 hours.”
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-black/5 dark:border-white/5">
                <div className="w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center font-bold text-xs text-black dark:text-white">
                  JA
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="text-xs font-bold text-black dark:text-white">Julian Aubrey</span>
                    <CheckCircle className="w-3.5 h-3.5 text-[#4b41e1] dark:text-[#a5b4fc]" />
                  </div>
                  <span className="text-[11px] text-[#76777b] dark:text-zinc-400">Verified Collector • London</span>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-zinc-900 p-8 rounded-3xl flex flex-col justify-between gap-6 shadow-sm border border-black/5 dark:border-white/5">
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-[#4b41e1] dark:text-[#a5b4fc]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <h4 className="font-headline font-semibold text-base text-black dark:text-white">
                  “Packaging alone is pure museum art.”
                </h4>
                <p className="text-xs sm:text-sm text-[#45474b] dark:text-zinc-300 leading-relaxed">
                  “Unboxing the Soren Courier was an architectural experience. Heavy bonded linen casing, wax-sealed provenance card, and calfskin that has already begun patinating gorgeously in New York humidity.”
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-black/5 dark:border-white/5">
                <div className="w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center font-bold text-xs text-black dark:text-white">
                  EL
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="text-xs font-bold text-black dark:text-white">Elena Lindqvist</span>
                    <CheckCircle className="w-3.5 h-3.5 text-[#4b41e1] dark:text-[#a5b4fc]" />
                  </div>
                  <span className="text-[11px] text-[#76777b] dark:text-zinc-400">Verified Buyer • Manhattan</span>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-zinc-900 p-8 rounded-3xl flex flex-col justify-between gap-6 shadow-sm border border-black/5 dark:border-white/5">
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-[#4b41e1] dark:text-[#a5b4fc]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <h4 className="font-headline font-semibold text-base text-black dark:text-white">
                  “The highest acoustic clarity.”
                </h4>
                <p className="text-xs sm:text-sm text-[#45474b] dark:text-zinc-300 leading-relaxed">
                  “The Aura One Spatial headsets are the first audio equipment in years that made me re-listen to my entire lossless orchestral library. Unbelievable isolation and featherlight balance.”
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-black/5 dark:border-white/5">
                <div className="w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center font-bold text-xs text-black dark:text-white">
                  MK
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="text-xs font-bold text-black dark:text-white">Marcus Keller</span>
                    <CheckCircle className="w-3.5 h-3.5 text-[#4b41e1] dark:text-[#a5b4fc]" />
                  </div>
                  <span className="text-[11px] text-[#76777b] dark:text-zinc-400">Verified Collector • Zurich</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
