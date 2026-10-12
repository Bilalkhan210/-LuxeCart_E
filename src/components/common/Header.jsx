import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import {
  ShoppingBag,
  Heart,
  Search,
  User,
  Sun,
  Moon,
  Menu,
  X,
  Truck,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { useCart } from '../../context/CartContext.jsx';
import { useWishlist } from '../../context/WishlistContext.jsx';
import { useTheme } from '../../context/ThemeContext.jsx';
import { useAuth } from '../../context/AuthContext.jsx';
import { PRODUCTS } from '../../data/products.js';

export default function Header() {
  const [showPromo, setShowPromo] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currency, setCurrency] = useState('USD');

  const { totalItemCount, subtotal, openCart } = useCart();
  const { wishlistCount } = useWishlist();
  const { isDark, toggleTheme } = useTheme();
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
      setIsMobileMenuOpen(false);
    }
  };

  const filteredPreview = searchQuery.trim()
    ? PRODUCTS.filter(p =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.brand.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 4)
    : [];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#f8f9fa]/90 dark:bg-[#121417]/90 backdrop-blur-xl border-b border-black/[0.04] dark:border-white/[0.06] transition-colors duration-300">
      {/* Top Announcement Bar */}
      {showPromo && (
        <div className="w-full bg-[#0F1115] dark:bg-black text-white px-4 sm:px-8 lg:px-16 py-2 text-xs flex items-center justify-between transition-all">
          <div className="flex-1 text-center font-medium tracking-wider uppercase flex items-center justify-center gap-2">
            <Truck className="w-3.5 h-3.5 text-[#e2dfff]" />
            <span className="hidden sm:inline">Complimentary Worldwide Express Shipping on Orders Over $150 • Code: LUXE24</span>
            <span className="sm:hidden">Complimentary Shipping Over $150 • LUXE24</span>
          </div>
          <button
            onClick={() => setShowPromo(false)}
            aria-label="Dismiss announcement"
            className="p-1 hover:text-[#e2dfff] transition-colors cursor-pointer"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Main Header Container */}
      <div className="h-20 max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-16 flex items-center justify-between gap-4">
        {/* Left: Mobile Menu Trigger + Brand Logo */}
        <div className="flex items-center gap-3 sm:gap-6 flex-shrink-0">
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open navigation menu"
            className="xl:hidden p-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/10 text-[#191c1d] dark:text-white transition-colors"
          >
            <Menu className="w-6 h-6" />
          </button>

          <Link to="/" className="flex items-center gap-2.5 group">
            {/* Custom Minimalist Architectural Emblem */}
            <div className="w-9 h-9 rounded-xl bg-black dark:bg-white flex items-center justify-center text-white dark:text-black font-semibold text-lg shadow-sm transition-transform duration-300 group-hover:scale-105">
              <span className="font-headline tracking-tighter">L</span>
            </div>
            <div className="flex flex-col">
              <span className="font-headline text-xl font-bold tracking-tight uppercase text-[#191c1d] dark:text-white group-hover:text-[#4b41e1] dark:group-hover:text-[#a5b4fc] transition-colors">
                LuxeCart
              </span>
              <span className="text-[9px] uppercase tracking-widest text-[#76777b] dark:text-zinc-400 -mt-1 font-semibold">
                Atelier Geneva
              </span>
            </div>
          </Link>
        </div>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-7">
          <NavLink
            to="/products"
            className={({ isActive }) =>
              `text-sm font-medium tracking-wide transition-colors ${
                isActive
                  ? 'text-black dark:text-white font-bold'
                  : 'text-[#45474b] dark:text-zinc-400 hover:text-black dark:hover:text-white'
              }`
            }
          >
            Shop All
          </NavLink>
          <NavLink
            to="/products?category=timepieces"
            className={({ isActive }) =>
              `text-sm font-medium tracking-wide transition-colors ${
                isActive
                  ? 'text-black dark:text-white font-bold'
                  : 'text-[#45474b] dark:text-zinc-400 hover:text-black dark:hover:text-white'
              }`
            }
          >
            Timepieces
          </NavLink>
          <NavLink
            to="/products?category=leather"
            className={({ isActive }) =>
              `text-sm font-medium tracking-wide transition-colors ${
                isActive
                  ? 'text-black dark:text-white font-bold'
                  : 'text-[#45474b] dark:text-zinc-400 hover:text-black dark:hover:text-white'
              }`
            }
          >
            Leather Goods
          </NavLink>
          <NavLink
            to="/products?filter=trending"
            className={({ isActive }) =>
              `text-sm font-medium tracking-wide transition-colors ${
                isActive
                  ? 'text-black dark:text-white font-bold'
                  : 'text-[#45474b] dark:text-zinc-400 hover:text-black dark:hover:text-white'
              }`
            }
          >
            Trending
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `text-sm font-medium tracking-wide transition-colors ${
                isActive
                  ? 'text-black dark:text-white font-bold'
                  : 'text-[#45474b] dark:text-zinc-400 hover:text-black dark:hover:text-white'
              }`
            }
          >
            About Us
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `text-sm font-medium tracking-wide transition-colors ${
                isActive
                  ? 'text-black dark:text-white font-bold'
                  : 'text-[#45474b] dark:text-zinc-400 hover:text-black dark:hover:text-white'
              }`
            }
          >
            Contact
          </NavLink>
        </nav>

        {/* Center-Right: Search Input with Fast Filter Drops */}
        <div className="hidden md:flex flex-1 max-w-xs lg:max-w-md items-center relative">
          <form onSubmit={handleSearchSubmit} className="w-full">
            <div className="w-full flex items-center bg-[#f3f4f5] dark:bg-zinc-800/80 rounded-xl px-3.5 py-2 border border-transparent focus-within:border-black/20 dark:focus-within:border-white/20 transition-all">
              <Search className="w-4 h-4 text-[#76777b] dark:text-zinc-400 mr-2 flex-shrink-0" />
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setIsSearchOpen(true);
                }}
                onFocus={() => setIsSearchOpen(true)}
                placeholder="Search luxury curation..."
                className="w-full bg-transparent text-xs text-[#191c1d] dark:text-white placeholder:text-[#76777b] dark:placeholder:text-zinc-500 focus:outline-none"
              />
              <div className="hidden lg:flex items-center gap-1.5 ml-2">
                <button
                  type="button"
                  onClick={() => navigate('/products?category=leather')}
                  className="text-[10px] px-1.5 py-0.5 rounded bg-white dark:bg-zinc-700 text-[#45474b] dark:text-zinc-300 uppercase font-semibold hover:text-black"
                >
                  Bags
                </button>
                <button
                  type="button"
                  onClick={() => navigate('/products?category=apparel')}
                  className="text-[10px] px-1.5 py-0.5 rounded bg-white dark:bg-zinc-700 text-[#45474b] dark:text-zinc-300 uppercase font-semibold hover:text-black"
                >
                  Silk
                </button>
              </div>
            </div>
          </form>

          {/* Quick Search Dropdown */}
          {isSearchOpen && searchQuery.trim() && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-zinc-900 rounded-2xl shadow-xl border border-black/5 dark:border-white/10 p-3 z-50 animate-in fade-in slide-in-from-top-2">
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-black/5 dark:border-white/10 text-xs font-semibold text-[#76777b]">
                <span>Matching Exhibition Items</span>
                <button
                  onClick={() => setIsSearchOpen(false)}
                  className="hover:text-black dark:hover:text-white text-[11px]"
                >
                  Close
                </button>
              </div>
              {filteredPreview.length > 0 ? (
                <div className="flex flex-col gap-2">
                  {filteredPreview.map(item => (
                    <button
                      key={item.id}
                      onClick={() => {
                        navigate(`/product/${item.id}`);
                        setIsSearchOpen(false);
                        setSearchQuery('');
                      }}
                      className="flex items-center gap-3 p-2 rounded-xl hover:bg-[#f3f4f5] dark:hover:bg-zinc-800 transition-colors text-left"
                    >
                      <img
                        src={item.images[0]}
                        alt={item.name}
                        className="w-10 h-10 rounded-lg object-cover bg-zinc-100"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-semibold text-black dark:text-white truncate">
                          {item.name}
                        </p>
                        <p className="text-[11px] text-[#76777b] dark:text-zinc-400">
                          {item.brand} • ${item.price.toFixed(2)}
                        </p>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-zinc-400" />
                    </button>
                  ))}
                  <button
                    onClick={handleSearchSubmit}
                    className="w-full mt-1 py-2 text-center text-xs font-semibold text-[#4b41e1] dark:text-[#a5b4fc] hover:underline"
                  >
                    View all results for "{searchQuery}"
                  </button>
                </div>
              ) : (
                <p className="text-xs text-[#76777b] py-2 text-center">
                  No artifacts found matching "{searchQuery}".
                </p>
              )}
            </div>
          )}
        </div>

        {/* Right: Actions, Currency, Theme Toggle, Wishlist, Cart, Profile */}
        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          {/* Currency Selector */}
          <div className="hidden sm:flex items-center bg-[#f3f4f5] dark:bg-zinc-800 rounded-xl px-2.5 py-1.5">
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="bg-transparent text-xs font-semibold text-[#191c1d] dark:text-white focus:outline-none cursor-pointer"
            >
              <option value="USD">USD $</option>
              <option value="EUR">EUR €</option>
              <option value="GBP">GBP £</option>
            </select>
          </div>

          {/* Theme Toggle (Light / Dark) */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme mode"
            className="p-2 rounded-xl text-[#45474b] dark:text-zinc-300 hover:text-black dark:hover:text-white hover:bg-[#edeeef] dark:hover:bg-zinc-800 transition-colors"
          >
            {isDark ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5" />}
          </button>

          {/* Wishlist Button */}
          <Link
            to="/wishlist"
            aria-label="View saved wishlist"
            className="relative p-2 rounded-xl text-[#45474b] dark:text-zinc-300 hover:text-black dark:hover:text-white hover:bg-[#edeeef] dark:hover:bg-zinc-800 transition-colors"
          >
            <Heart className="w-5 h-5" />
            {wishlistCount > 0 && (
              <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-[#4b41e1] text-white text-[10px] font-bold flex items-center justify-center animate-in zoom-in">
                {wishlistCount}
              </span>
            )}
          </Link>

          {/* Shopping Bag Button (Triggers Drawer) */}
          <button
            onClick={openCart}
            aria-label="Open curated shopping cart"
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#f3f4f5] dark:bg-zinc-800 hover:bg-[#e7e8e9] dark:hover:bg-zinc-700 transition-colors cursor-pointer"
          >
            <div className="relative flex items-center justify-center">
              <ShoppingBag className="w-5 h-5 text-[#191c1d] dark:text-white" />
              {totalItemCount > 0 && (
                <span className="absolute -top-1.5 -right-2 w-4 h-4 rounded-full bg-black dark:bg-white text-white dark:text-black text-[10px] font-bold flex items-center justify-center animate-in zoom-in">
                  {totalItemCount}
                </span>
              )}
            </div>
            <span className="hidden sm:inline text-xs font-semibold text-[#191c1d] dark:text-white ml-1">
              ${subtotal.toFixed(2)}
            </span>
          </button>

          {/* Account Profile Link */}
          <Link
            to={isAuthenticated ? "/profile" : "/login"}
            aria-label="User Account"
            className="w-9 h-9 rounded-full bg-black dark:bg-white text-white dark:text-black flex items-center justify-center hover:opacity-90 transition-opacity ml-1"
          >
            <User className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="xl:hidden fixed inset-0 z-50 bg-black/60 backdrop-blur-md animate-in fade-in">
          <div className="w-4/5 max-w-sm h-full bg-[#f8f9fa] dark:bg-zinc-900 p-6 flex flex-col justify-between shadow-2xl animate-in slide-in-from-left duration-300">
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-6 border-b border-black/5 dark:border-white/10">
                <Link
                  to="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-2"
                >
                  <div className="w-8 h-8 rounded-lg bg-black dark:bg-white text-white dark:text-black flex items-center justify-center font-bold text-base">
                    L
                  </div>
                  <span className="font-headline font-bold text-lg text-black dark:text-white uppercase tracking-tight">
                    LuxeCart
                  </span>
                </Link>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-xl text-zinc-500 hover:text-black dark:hover:text-white"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Mobile Search */}
              <form onSubmit={handleSearchSubmit} className="mt-6 mb-6">
                <div className="flex items-center bg-[#f3f4f5] dark:bg-zinc-800 rounded-xl px-3.5 py-2.5">
                  <Search className="w-4 h-4 text-zinc-400 mr-2" />
                  <input
                    type="search"
                    placeholder="Search curated archives..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-transparent text-sm text-black dark:text-white placeholder:text-zinc-400 focus:outline-none"
                  />
                </div>
              </form>

              {/* Mobile Nav Links */}
              <nav className="flex flex-col gap-2">
                {[
                  { name: 'Shop All Products', path: '/products' },
                  { name: 'Timepieces & Chronographs', path: '/products?category=timepieces' },
                  { name: 'Fine Leather Goods', path: '/products?category=leather' },
                  { name: 'Spatial Audio & Tech', path: '/products?category=audio' },
                  { name: 'Cashmere & Apparel', path: '/products?category=apparel' },
                  { name: 'Architectural Living', path: '/products?category=living' },
                  { name: 'About Atelier', path: '/about' },
                  { name: 'Concierge Contact', path: '/contact' }
                ].map(link => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                        isActive
                          ? 'bg-black text-white dark:bg-white dark:text-black font-semibold'
                          : 'text-[#45474b] dark:text-zinc-300 hover:bg-black/5 dark:hover:bg-white/5'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}
              </nav>
            </div>

            {/* Mobile Drawer Footer */}
            <div className="pt-6 border-t border-black/5 dark:border-white/10 flex flex-col gap-3">
              <Link
                to={isAuthenticated ? "/profile" : "/login"}
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full py-3 rounded-xl bg-black dark:bg-white text-white dark:text-black text-center text-xs font-semibold uppercase tracking-wider"
              >
                {isAuthenticated ? `Signed in as ${user?.name}` : "Sign In to Private Account"}
              </Link>
              <div className="flex items-center justify-between text-xs text-[#76777b]">
                <span>Currency: USD $</span>
                <span>Language: EN</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
