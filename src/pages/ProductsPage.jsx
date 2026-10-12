import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import {
  SlidersHorizontal,
  ChevronDown,
  X,
  Star,
  Check,
  Diamond,
  ChevronLeft,
  ChevronRight,
  RotateCcw
} from 'lucide-react';
import { PRODUCTS, BRANDS } from '../data/products.js';
import ProductCard from '../components/products/ProductCard.jsx';

export default function ProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  // Search, category, and filter states from URL params
  const initialCategory = searchParams.get('category') || 'all';
  const initialSearch = searchParams.get('search') || '';

  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [selectedCategories, setSelectedCategories] = useState(
    initialCategory !== 'all' ? [initialCategory] : []
  );
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1200);
  const [minRating, setMinRating] = useState(0);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [preorderOnly, setPreorderOnly] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  // Sync state if URL search params change
  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat && cat !== 'all') {
      setSelectedCategories([cat]);
    }
    const q = searchParams.get('search');
    if (q) {
      setSearchQuery(q);
    }
  }, [searchParams]);

  const categoriesList = [
    { id: 'timepieces', label: 'Timepieces', count: 5 },
    { id: 'leather', label: 'Leather Goods', count: 14 },
    { id: 'audio', label: 'Audio & Acoustics', count: 7 },
    { id: 'apparel', label: 'Cashmere & Apparel', count: 18 },
    { id: 'living', label: 'Home Objects', count: 4 }
  ];

  const handleCategoryToggle = (catId) => {
    setSelectedCategories(prev =>
      prev.includes(catId) ? prev.filter(c => c !== catId) : [...prev, catId]
    );
    setCurrentPage(1);
  };

  const handleBrandToggle = (brandName) => {
    setSelectedBrands(prev =>
      prev.includes(brandName) ? prev.filter(b => b !== brandName) : [...prev, brandName]
    );
    setCurrentPage(1);
  };

  const handleClearAllFilters = () => {
    setSelectedCategories([]);
    setSelectedBrands([]);
    setMinPrice(0);
    setMaxPrice(1200);
    setMinRating(0);
    setInStockOnly(false);
    setPreorderOnly(false);
    setSearchQuery('');
    setSearchParams({});
    setCurrentPage(1);
  };

  // Filter products logic
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(p => {
      // Search
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matches =
          p.name.toLowerCase().includes(query) ||
          p.brand.toLowerCase().includes(query) ||
          p.categoryLabel.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query);
        if (!matches) return false;
      }

      // Categories
      if (selectedCategories.length > 0 && !selectedCategories.includes(p.category)) {
        return false;
      }

      // Brands
      if (selectedBrands.length > 0 && !selectedBrands.includes(p.brand)) {
        return false;
      }

      // Price range
      if (p.price < minPrice || p.price > maxPrice) {
        return false;
      }

      // Rating
      if (minRating > 0 && p.rating < minRating) {
        return false;
      }

      // In stock
      if (inStockOnly && !p.inStock) {
        return false;
      }

      // Preorder
      if (preorderOnly && !p.isPreorder) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'newest') return (b.badge === 'Just In' || b.badge === 'New Arrival') ? 1 : -1;
      return 0; // 'featured'
    });
  }, [searchQuery, selectedCategories, selectedBrands, minPrice, maxPrice, minRating, inStockOnly, preorderOnly, sortBy]);

  // Pagination (9 items per page)
  const itemsPerPage = 9;
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage) || 1;
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="w-full pt-28 pb-20 bg-[#f8f9fa] dark:bg-zinc-950 min-h-screen transition-colors">
      <div className="max-w-[1680px] w-full mx-auto px-4 sm:px-8 lg:px-16">
        
        {/* Top Breadcrumb & Editorial Header */}
        <div className="flex flex-col gap-4 mb-10">
          <nav className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#76777b] dark:text-zinc-400">
            <Link to="/" className="hover:text-black dark:hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="hover:text-black dark:hover:text-white transition-colors">Catalog</span>
            <span>/</span>
            <span className="text-black dark:text-white font-bold">All Products</span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#4b41e1] dark:text-[#a5b4fc] font-bold">
                Curated Archives • Autumn / Winter 2024
              </span>
              <h1 className="font-headline text-3xl sm:text-4xl font-semibold text-black dark:text-white tracking-tight mt-1">
                All Products
              </h1>
              <p className="text-sm text-[#45474b] dark:text-zinc-400 mt-1">
                Showing {filteredProducts.length} curated exhibition pieces engineered for tactile distinction.
              </p>
            </div>

            {/* Sort & Mobile Trigger */}
            <div className="flex items-center gap-3 flex-wrap">
              <div className="flex items-center gap-2 bg-[#f3f4f5] dark:bg-zinc-900 px-4 py-2.5 rounded-xl border border-black/5 dark:border-white/5">
                <span className="text-xs text-[#76777b] dark:text-zinc-400 uppercase tracking-wider font-semibold">
                  Sort By
                </span>
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="bg-transparent text-xs font-bold text-black dark:text-white focus:outline-none cursor-pointer pr-4 appearance-none"
                  >
                    <option value="featured" className="dark:bg-zinc-900">Featured Curations</option>
                    <option value="price-asc" className="dark:bg-zinc-900">Price: Low to High</option>
                    <option value="price-desc" className="dark:bg-zinc-900">Price: High to Low</option>
                    <option value="rating" className="dark:bg-zinc-900">Customer Rating</option>
                    <option value="newest" className="dark:bg-zinc-900">Newest Releases</option>
                  </select>
                  <ChevronDown className="w-3.5 h-3.5 absolute right-0 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none" />
                </div>
              </div>

              <button
                onClick={() => setIsMobileFiltersOpen(true)}
                className="lg:hidden flex items-center gap-2 px-4 py-2.5 rounded-xl bg-black dark:bg-white text-white dark:text-black text-xs uppercase tracking-wider font-semibold"
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span>Filters</span>
              </button>
            </div>
          </div>

          {/* Active Filter Strip */}
          <div className="flex items-center gap-2 flex-wrap pt-2">
            <span className="text-[11px] uppercase tracking-widest text-[#76777b] dark:text-zinc-400 font-semibold">
              Active Filters:
            </span>

            {searchQuery && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white dark:bg-zinc-800 text-black dark:text-white text-xs border border-black/5 dark:border-white/10 shadow-sm">
                "{searchQuery}"
                <button onClick={() => setSearchQuery('')} className="hover:text-red-500">
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}

            {selectedCategories.map(cat => (
              <span key={cat} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white dark:bg-zinc-800 text-black dark:text-white text-xs border border-black/5 dark:border-white/10 shadow-sm capitalize">
                {cat}
                <button onClick={() => handleCategoryToggle(cat)} className="hover:text-red-500">
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))}

            {(minPrice > 0 || maxPrice < 1200) && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white dark:bg-zinc-800 text-black dark:text-white text-xs border border-black/5 dark:border-white/10 shadow-sm">
                ${minPrice} – ${maxPrice}
                <button onClick={() => { setMinPrice(0); setMaxPrice(1200); }} className="hover:text-red-500">
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}

            {minRating > 0 && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e2dfff] dark:bg-[#201d4a] text-[#4b41e1] dark:text-[#c3c0ff] text-xs">
                {minRating}★ &amp; Above
                <button onClick={() => setMinRating(0)} className="hover:text-red-500">
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}

            <button
              onClick={handleClearAllFilters}
              className="text-xs text-[#76777b] dark:text-zinc-400 hover:text-black dark:hover:text-white underline ml-2 transition-colors cursor-pointer"
            >
              Clear All
            </button>
          </div>
        </div>

        {/* Dual Column Layout: Filter Sidebar + Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Desktop Left Sidebar: Filters */}
          <aside className="hidden lg:flex lg:col-span-3 flex-col gap-6 bg-white dark:bg-zinc-900 p-6 rounded-3xl shadow-sm border border-black/5 dark:border-white/5 sticky top-28">
            <div className="flex items-center justify-between pb-3 border-b border-black/5 dark:border-white/5">
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-[#4b41e1] dark:text-[#a5b4fc]" />
                <h2 className="font-headline font-semibold text-base text-black dark:text-white">
                  Refine Archive
                </h2>
              </div>
              <button
                onClick={handleClearAllFilters}
                className="text-[11px] uppercase tracking-wider text-zinc-400 hover:text-black dark:hover:text-white transition-colors"
              >
                Reset
              </button>
            </div>

            {/* 1. Category */}
            <div className="space-y-2.5">
              <span className="text-xs font-bold uppercase tracking-wider text-black dark:text-white">
                Category
              </span>
              <div className="space-y-2">
                {categoriesList.map(cat => (
                  <label
                    key={cat.id}
                    className="flex items-center justify-between text-xs text-[#45474b] dark:text-zinc-300 cursor-pointer hover:text-black dark:hover:text-white group"
                  >
                    <span className="flex items-center gap-2.5">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(cat.id)}
                        onChange={() => handleCategoryToggle(cat.id)}
                        className="w-4 h-4 rounded accent-[#4b41e1] cursor-pointer"
                      />
                      <span>{cat.label}</span>
                    </span>
                    <span className="text-[11px] text-zinc-400 font-mono">0{cat.count}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="h-px bg-black/5 dark:border-white/5" />

            {/* 2. Price Range */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-black dark:text-white">
                  Price Range
                </span>
                <span className="text-xs font-bold text-black dark:text-white">
                  ${minPrice} – ${maxPrice}
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="1200"
                step="50"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-black dark:accent-white h-1.5 bg-zinc-200 dark:bg-zinc-800 rounded-lg appearance-none cursor-pointer"
              />
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-[#f3f4f5] dark:bg-zinc-800 rounded-xl px-3 py-1.5">
                  <span className="text-[10px] text-zinc-400 block uppercase">Min</span>
                  <div className="flex items-center text-xs font-bold text-black dark:text-white">
                    <span>$</span>
                    <input
                      type="number"
                      value={minPrice}
                      onChange={(e) => setMinPrice(Number(e.target.value))}
                      className="w-full bg-transparent focus:outline-none ml-1"
                    />
                  </div>
                </div>
                <div className="bg-[#f3f4f5] dark:bg-zinc-800 rounded-xl px-3 py-1.5">
                  <span className="text-[10px] text-zinc-400 block uppercase">Max</span>
                  <div className="flex items-center text-xs font-bold text-black dark:text-white">
                    <span>$</span>
                    <input
                      type="number"
                      value={maxPrice}
                      onChange={(e) => setMaxPrice(Number(e.target.value))}
                      className="w-full bg-transparent focus:outline-none ml-1"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="h-px bg-black/5 dark:border-white/5" />

            {/* 3. Atelier & Brand */}
            <div className="space-y-2.5">
              <span className="text-xs font-bold uppercase tracking-wider text-black dark:text-white">
                Atelier &amp; Brand
              </span>
              <div className="space-y-2">
                {BRANDS.map(brand => (
                  <label
                    key={brand}
                    className="flex items-center justify-between text-xs text-[#45474b] dark:text-zinc-300 cursor-pointer hover:text-black dark:hover:text-white group"
                  >
                    <span className="flex items-center gap-2.5">
                      <input
                        type="checkbox"
                        checked={selectedBrands.includes(brand)}
                        onChange={() => handleBrandToggle(brand)}
                        className="w-4 h-4 rounded accent-[#4b41e1] cursor-pointer"
                      />
                      <span>{brand}</span>
                    </span>
                    <span className="text-[11px] text-zinc-400 font-mono">
                      {PRODUCTS.filter(p => p.brand === brand).length}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <div className="h-px bg-black/5 dark:border-white/5" />

            {/* 4. Rating */}
            <div className="space-y-2.5">
              <span className="text-xs font-bold uppercase tracking-wider text-black dark:text-white">
                Rating
              </span>
              <div className="space-y-1.5">
                {[
                  { stars: 4.8, label: '4.8 & up (Exceptional)' },
                  { stars: 4.5, label: '4.5 & up (Preferred)' }
                ].map(r => (
                  <button
                    key={r.stars}
                    onClick={() => setMinRating(minRating === r.stars ? 0 : r.stars)}
                    className={`w-full flex items-center justify-between p-2 rounded-xl text-left transition-colors ${
                      minRating === r.stars
                        ? 'bg-[#f3f4f5] dark:bg-zinc-800 text-black dark:text-white font-semibold'
                        : 'text-[#45474b] dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800/50'
                    }`}
                  >
                    <div className="flex items-center gap-1 text-[#4b41e1]">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <span className="text-xs ml-1">{r.label}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="h-px bg-black/5 dark:border-white/5" />

            {/* 5. Availability Toggles */}
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-black dark:text-white">
                Availability
              </span>
              <div className="flex items-center justify-between">
                <span className="text-xs text-[#45474b] dark:text-zinc-300">In Stock Only</span>
                <button
                  type="button"
                  onClick={() => setInStockOnly(!inStockOnly)}
                  className={`w-10 h-5 rounded-full transition-colors relative cursor-pointer ${
                    inStockOnly ? 'bg-[#4b41e1]' : 'bg-zinc-300 dark:bg-zinc-700'
                  }`}
                >
                  <span
                    className={`w-4 h-4 rounded-full bg-white absolute top-0.5 transition-transform ${
                      inStockOnly ? 'translate-x-5' : 'translate-x-0.5'
                    }`}
                  />
                </button>
              </div>
            </div>
          </aside>

          {/* Right Main Column: Product Grid */}
          <div className="col-span-1 lg:col-span-9 flex flex-col gap-10">
            {filteredProducts.length === 0 ? (
              <div className="bg-white dark:bg-zinc-900 rounded-3xl p-16 text-center flex flex-col items-center justify-center gap-4 border border-black/5 dark:border-white/5">
                <div className="w-16 h-16 rounded-full bg-[#f3f4f5] dark:bg-zinc-800 flex items-center justify-center text-zinc-400">
                  <SlidersHorizontal className="w-8 h-8" />
                </div>
                <h3 className="font-headline text-lg font-bold text-black dark:text-white">
                  No products matched your criteria
                </h3>
                <p className="text-xs text-zinc-500 max-w-sm">
                  Try broadening your price bounds, clearing categories, or resetting the active search query.
                </p>
                <button
                  onClick={handleClearAllFilters}
                  className="px-6 py-3 rounded-xl bg-black dark:bg-white text-white dark:text-black text-xs uppercase tracking-wider font-semibold hover:opacity-90 transition-opacity"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {paginatedProducts.map((product, idx) => (
                  <React.Fragment key={product.id}>
                    <ProductCard product={product} />

                    {/* Interspersed VIP Perk Promotional Card (at index 3 in mockups) */}
                    {idx === 2 && (
                      <div className="flex flex-col justify-between bg-[#0F1115] text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden border border-white/10">
                        <div className="absolute -right-8 -bottom-8 w-44 h-44 rounded-full bg-[#4b41e1]/20 blur-3xl pointer-events-none" />
                        
                        <div>
                          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#4b41e1] text-white text-[10px] font-bold uppercase tracking-widest mb-4">
                            <Diamond className="w-3 h-3" />
                            <span>Private Circle</span>
                          </div>
                          <h3 className="font-headline text-xl font-bold mb-2">
                            Join The Atelier Concierge
                          </h3>
                          <p className="text-xs text-zinc-400 leading-relaxed">
                            VIP members receive complimentary white-glove courier dispatch, personal archivist styling sessions, and 72-hour priority reservations for numbered seasonal capsules.
                          </p>
                        </div>

                        <div className="pt-6">
                          <Link
                            to="/contact"
                            className="w-full block py-3 rounded-xl bg-white text-black font-semibold text-xs uppercase tracking-wider text-center hover:bg-zinc-200 transition-colors shadow-sm"
                          >
                            Request Membership Pass
                          </Link>
                        </div>
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            )}

            {/* Pagination Controls */}
            {filteredProducts.length > 0 && (
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 bg-white dark:bg-zinc-900 p-6 rounded-3xl shadow-sm border border-black/5 dark:border-white/5">
                <div className="flex flex-col gap-1 text-center sm:text-left">
                  <span className="text-xs font-semibold text-black dark:text-white">
                    Showing {(currentPage - 1) * itemsPerPage + 1} – {Math.min(currentPage * itemsPerPage, filteredProducts.length)} of {filteredProducts.length} results
                  </span>
                  <div className="w-48 h-1.5 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-black dark:bg-white rounded-full transition-all"
                      style={{ width: `${(currentPage / totalPages) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Page Navigation */}
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    className="w-9 h-9 rounded-xl bg-[#f3f4f5] dark:bg-zinc-800 text-black dark:text-white flex items-center justify-center hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors disabled:opacity-30 cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>

                  {[...Array(totalPages)].map((_, i) => (
                    <button
                      key={i + 1}
                      onClick={() => setCurrentPage(i + 1)}
                      className={`w-9 h-9 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                        currentPage === i + 1
                          ? 'bg-black dark:bg-white text-white dark:text-black shadow-sm'
                          : 'bg-[#f3f4f5] dark:bg-zinc-800 text-black dark:text-white hover:bg-zinc-200 dark:hover:bg-zinc-700'
                      }`}
                    >
                      {i + 1}
                    </button>
                  ))}

                  <button
                    onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                    className="w-9 h-9 rounded-xl bg-[#f3f4f5] dark:bg-zinc-800 text-black dark:text-white flex items-center justify-center hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors disabled:opacity-30 cursor-pointer"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                <button
                  onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="px-6 py-2.5 rounded-xl bg-[#f3f4f5] dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-black dark:text-white text-xs font-semibold uppercase tracking-wider transition-colors disabled:opacity-40"
                >
                  Load More Products
                </button>
              </div>
            )}

          </div>
        </div>

      </div>

      {/* Mobile Filters Drawer */}
      {isMobileFiltersOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm lg:hidden flex justify-end">
          <div className="w-4/5 max-w-sm h-full bg-white dark:bg-zinc-900 p-6 overflow-y-auto flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-black/5 dark:border-white/10">
                <h3 className="font-headline font-bold text-base text-black dark:text-white">
                  Refine Archive
                </h3>
                <button
                  onClick={() => setIsMobileFiltersOpen(false)}
                  className="p-1 text-zinc-500 hover:text-black dark:hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile categories */}
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-black dark:text-white">Categories</span>
                {categoriesList.map(cat => (
                  <label key={cat.id} className="flex items-center gap-2 text-xs text-zinc-600 dark:text-zinc-300">
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(cat.id)}
                      onChange={() => handleCategoryToggle(cat.id)}
                      className="accent-[#4b41e1]"
                    />
                    <span>{cat.label}</span>
                  </label>
                ))}
              </div>

              {/* Mobile price */}
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-black dark:text-white">
                  Max Price: ${maxPrice}
                </span>
                <input
                  type="range"
                  min="0"
                  max="1200"
                  step="50"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="w-full accent-black dark:accent-white"
                />
              </div>
            </div>

            <div className="pt-6 border-t border-black/5 dark:border-white/10 flex gap-2">
              <button
                onClick={handleClearAllFilters}
                className="flex-1 py-3 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-xs font-bold uppercase"
              >
                Reset
              </button>
              <button
                onClick={() => setIsMobileFiltersOpen(false)}
                className="flex-1 py-3 rounded-xl bg-black dark:bg-white text-white dark:text-black text-xs font-bold uppercase"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
