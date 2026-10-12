import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  Star,
  Heart,
  ShoppingBag,
  Plus,
  Minus,
  Check,
  ChevronDown,
  RotateCw,
  ZoomIn,
  Award,
  ShieldCheck,
  Truck,
  ArrowRight,
  Flame,
  CheckCircle,
  ThumbsUp,
  X
} from 'lucide-react';
import { PRODUCTS } from '../data/products.js';
import { useCart } from '../context/CartContext.jsx';
import { useWishlist } from '../context/WishlistContext.jsx';

export default function ProductDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();

  // Find product by id, fallback to first product
  const product = PRODUCTS.find(p => p.id === id) || PRODUCTS[0];

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState(
    product.colors ? product.colors[0]?.name : 'Default'
  );
  const [selectedSize, setSelectedSize] = useState(
    product.sizes ? product.sizes[0]?.label : 'Standard'
  );
  const [quantity, setQuantity] = useState(1);
  const [expandedAccordion, setExpandedAccordion] = useState(1);
  const [isZoomed, setIsZoomed] = useState(false);
  const [show360Modal, setShow360Modal] = useState(false);
  const [turntableRotation, setTurntableRotation] = useState(0);
  const [showSizeGuide, setShowSizeGuide] = useState(false);
  const [quickAddedId, setQuickAddedId] = useState(null);

  const isFavorited = isInWishlist(product.id);

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedColor, selectedSize);
  };

  const handleQuickAddCurated = (curatedProduct) => {
    addToCart(curatedProduct, 1);
    setQuickAddedId(curatedProduct.id);
    setTimeout(() => setQuickAddedId(null), 1500);
  };

  const accompaniments = PRODUCTS.filter(p => p.id !== product.id).slice(0, 4);

  return (
    <div className="w-full pt-28 pb-20 bg-[#f8f9fa] dark:bg-zinc-950 transition-colors">
      
      {/* 1. Breadcrumb Navigation */}
      <div className="max-w-[1680px] w-full mx-auto px-4 sm:px-8 lg:px-16 py-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <nav className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#76777b] dark:text-zinc-400">
            <Link to="/" className="hover:text-black dark:hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link to="/products" className="hover:text-black dark:hover:text-white transition-colors">Catalog</Link>
            <span>/</span>
            <Link to={`/products?category=${product.category}`} className="hover:text-black dark:hover:text-white transition-colors capitalize">
              {product.categoryLabel}
            </Link>
            <span>/</span>
            <span className="text-black dark:text-white font-bold truncate max-w-[200px] sm:max-w-none">
              {product.name}
            </span>
          </nav>

          <div className="inline-flex items-center gap-2 bg-[#edeeef] dark:bg-zinc-800 px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-bold text-black dark:text-white self-start sm:self-auto">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4b41e1] animate-pulse" />
            <span>{product.badge || 'Capsule Release'} • {product.edition || 'Ref. 01'}</span>
          </div>
        </div>
      </div>

      {/* 2. Main Product Stage (Asymmetric 2-Column) */}
      <section className="max-w-[1680px] w-full mx-auto px-4 sm:px-8 lg:px-16 pb-24 pt-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          
          {/* LEFT COLUMN: Gallery with Studio Tools */}
          <div className="lg:col-span-7 flex flex-col gap-4 lg:sticky lg:top-28">
            {/* Main Viewer Frame */}
            <div className="relative w-full aspect-[4/5] bg-[#edeeef] dark:bg-zinc-900 rounded-3xl overflow-hidden shadow-sm group">
              <img
                src={product.images[activeImageIndex] || product.images[0]}
                alt={product.name}
                className={`w-full h-full object-cover transition-all duration-500 ${
                  isZoomed ? 'scale-125 cursor-zoom-out' : 'cursor-zoom-in'
                }`}
                onClick={() => setIsZoomed(!isZoomed)}
              />

              {/* Floating Badges */}
              <div className="absolute top-4 left-4 flex flex-col gap-1.5 z-10 pointer-events-none">
                <span className="px-3 py-1 rounded-full bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md text-black dark:text-white text-[10px] tracking-wider uppercase font-bold shadow-sm">
                  {product.edition || 'Edition 01'}
                </span>
                <span className="px-3 py-1 rounded-full bg-black text-white text-[10px] tracking-wider uppercase font-bold shadow-sm">
                  {product.subtitle || 'Atelier Spec'}
                </span>
              </div>

              {/* Top Right Utilities: 360° View & Zoom */}
              <div className="absolute top-4 right-4 z-10 flex items-center gap-2">
                <button
                  onClick={() => setShow360Modal(true)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors text-xs font-semibold shadow-sm cursor-pointer"
                >
                  <RotateCw className="w-3.5 h-3.5" />
                  <span>360° Studio View</span>
                </button>
                <button
                  onClick={() => setIsZoomed(!isZoomed)}
                  className="w-8 h-8 rounded-full bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md text-black dark:text-white flex items-center justify-center hover:bg-black hover:text-white transition-colors shadow-sm cursor-pointer"
                  aria-label="Toggle zoom view"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
              </div>

              {/* Bottom Subtle Overlay */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                <span className="px-3 py-1 rounded-lg bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md text-[10px] uppercase text-[#76777b] dark:text-zinc-400">
                  Double Anti-Reflective Crystal
                </span>
                <span className="px-3 py-1 rounded-lg bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md text-[10px] uppercase font-bold text-black dark:text-white">
                  0{activeImageIndex + 1} / View Elevation
                </span>
              </div>
            </div>

            {/* Thumbnail Selector Strip */}
            <div className="grid grid-cols-4 gap-3">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setActiveImageIndex(idx);
                    setIsZoomed(false);
                  }}
                  className={`aspect-square rounded-2xl overflow-hidden p-1 transition-all ${
                    activeImageIndex === idx
                      ? 'ring-2 ring-black dark:ring-white scale-100 bg-white dark:bg-zinc-800 shadow-md'
                      : 'opacity-70 hover:opacity-100 bg-zinc-200 dark:bg-zinc-800'
                  }`}
                >
                  <img src={img} alt={`View angle ${idx + 1}`} className="w-full h-full object-cover rounded-xl" />
                </button>
              ))}
            </div>

            {/* Material Innovation Strip */}
            <div className="bg-white dark:bg-zinc-900 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-sm border border-black/5 dark:border-white/5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#e2dfff] dark:bg-[#201d4a] text-[#4b41e1] dark:text-[#c3c0ff] flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-headline font-bold text-xs text-black dark:text-white leading-tight">
                    Grade 5 Aerospace Metallurgy
                  </h4>
                  <p className="text-[11px] text-[#76777b] dark:text-zinc-400">
                    Diamond-like carbon (DLC) scratch resistance &amp; hypoallergenic biocompatibility.
                  </p>
                </div>
              </div>
              <button
                onClick={() => setExpandedAccordion(3)}
                className="text-xs font-bold uppercase tracking-wider text-[#4b41e1] dark:text-[#a5b4fc] hover:underline flex-shrink-0 cursor-pointer"
              >
                View Material Data
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN: Purchase Canvas & Details */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Header Tier */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest text-[#4b41e1] dark:text-[#a5b4fc] font-bold">
                  {product.brand} • Geneva Atelier
                </span>
                <span className="text-[10px] text-zinc-400 font-mono uppercase bg-[#edeeef] dark:bg-zinc-800 px-2 py-0.5 rounded">
                  {product.sku}
                </span>
              </div>
              <h1 className="font-headline text-3xl sm:text-4xl font-semibold text-black dark:text-white tracking-tight">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-3 pt-1">
                <div className="flex items-center gap-1 text-[#4b41e1] dark:text-[#a5b4fc]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                  <span className="text-xs font-bold text-black dark:text-white ml-1">
                    {product.rating}
                  </span>
                </div>
                <span className="text-xs text-[#76777b] dark:text-zinc-400">
                  {product.reviewCount} Verified Collector Evaluations
                </span>
              </div>
            </div>

            {/* Pricing Box */}
            <div className="bg-white dark:bg-zinc-900 rounded-2xl p-5 flex items-center justify-between shadow-sm border border-black/5 dark:border-white/5">
              <div className="flex items-baseline gap-2.5">
                <span className="font-headline text-3xl font-bold text-black dark:text-white">
                  ${product.price.toFixed(2)}
                </span>
                {product.originalPrice && (
                  <span className="text-base text-zinc-400 line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                )}
                {product.originalPrice && (
                  <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-[#4b41e1] text-white">
                    Save {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                  </span>
                )}
              </div>
              <div className="text-right">
                <span className="text-[10px] uppercase text-zinc-400 block font-semibold">Taxes Included</span>
                <span className="text-xs font-bold text-[#4b41e1] dark:text-[#a5b4fc]">Free Express Courier</span>
              </div>
            </div>

            {/* Live Stock Urgency Banner */}
            <div className="flex items-center gap-2.5 p-3.5 rounded-xl bg-red-50 dark:bg-red-950/40 text-red-900 dark:text-red-300 border border-red-200/50 dark:border-red-800/30">
              <Flame className="w-4 h-4 text-red-600 animate-pulse flex-shrink-0" />
              <p className="text-xs font-bold">
                Only {product.stockCount || 4} units left in atelier vault — dispatched today.
              </p>
            </div>

            {/* Finish / Case Metallurgy Selector */}
            {product.colors && product.colors.length > 0 && (
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold uppercase tracking-wider text-black dark:text-white">
                    Metallurgy &amp; Finish
                  </span>
                  <span className="text-[#76777b] dark:text-zinc-400 font-semibold">{selectedColor}</span>
                </div>
                <div className="flex items-center gap-2">
                  {product.colors.map(col => (
                    <button
                      key={col.name}
                      onClick={() => setSelectedColor(col.name)}
                      className={`flex-1 py-3 px-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                        selectedColor === col.name
                          ? 'bg-black text-white dark:bg-white dark:text-black shadow-md'
                          : 'bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-700 border border-black/5 dark:border-white/5'
                      }`}
                    >
                      <span className={`w-3.5 h-3.5 rounded-full ${col.bgClass}`} />
                      <span className="truncate">{col.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Strap / Sizing Architecture Selector */}
            {product.sizes && product.sizes.length > 0 && (
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold uppercase tracking-wider text-black dark:text-white">
                    Strap Architecture &amp; Contour
                  </span>
                  <button
                    onClick={() => setShowSizeGuide(true)}
                    className="text-[11px] font-bold uppercase tracking-wider text-[#4b41e1] dark:text-[#a5b4fc] hover:underline cursor-pointer"
                  >
                    Lug &amp; Sizing Guide
                  </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {product.sizes.map(sz => (
                    <button
                      key={sz.label}
                      onClick={() => setSelectedSize(sz.label)}
                      className={`p-3 rounded-xl text-left transition-all cursor-pointer ${
                        selectedSize === sz.label
                          ? 'bg-black text-white dark:bg-white dark:text-black shadow-md'
                          : 'bg-white dark:bg-zinc-800 text-black dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-700 border border-black/5 dark:border-white/5'
                      }`}
                    >
                      <span className="text-xs font-bold block">{sz.label}</span>
                      <span className="text-[10px] opacity-70 block mt-0.5">{sz.subtitle}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity Stepper & Add to Bag CTA */}
            <div className="flex items-center gap-3 pt-2">
              <div className="flex items-center bg-white dark:bg-zinc-900 border border-black/5 dark:border-white/10 rounded-xl px-2 py-1">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="w-8 h-10 flex items-center justify-center hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg text-black dark:text-white transition-colors"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-8 text-center font-bold text-sm text-black dark:text-white">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(q => Math.min(product.stockCount || 5, q + 1))}
                  className="w-8 h-10 flex items-center justify-center hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg text-black dark:text-white transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Acquire CTA */}
              <button
                onClick={handleAddToCart}
                className="flex-1 h-14 bg-black dark:bg-white text-white dark:text-black rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#4b41e1] dark:hover:bg-[#4b41e1] hover:text-white dark:hover:text-white transition-all shadow-lg cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Acquire Piece — ${(product.price * quantity).toFixed(2)}</span>
              </button>

              {/* Wishlist Toggle Button */}
              <button
                onClick={() => toggleWishlist(product)}
                aria-label="Save to Wishlist"
                className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all shadow-sm cursor-pointer ${
                  isFavorited
                    ? 'bg-[#4b41e1] text-white'
                    : 'bg-white dark:bg-zinc-800 text-black dark:text-white border border-black/5 dark:border-white/10 hover:border-black'
                }`}
              >
                <Heart className={`w-5 h-5 ${isFavorited ? 'fill-current' : ''}`} />
              </button>
            </div>

            {/* Numbered Guarantee Pill Ribbons */}
            <div className="grid grid-cols-3 gap-2 pt-2 text-center">
              <div className="bg-white dark:bg-zinc-900 rounded-xl p-3 border border-black/5 dark:border-white/5 flex flex-col items-center">
                <Award className="w-4 h-4 text-[#4b41e1] mb-1" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-black dark:text-white">Numbered Geneva Certificate</span>
                <span className="text-[10px] text-zinc-400 mt-0.5">100% Guaranteed</span>
              </div>
              <div className="bg-white dark:bg-zinc-900 rounded-xl p-3 border border-black/5 dark:border-white/5 flex flex-col items-center">
                <ShieldCheck className="w-4 h-4 text-[#4b41e1] mb-1" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-black dark:text-white">2-Year Atelier Warranty</span>
                <span className="text-[10px] text-zinc-400 mt-0.5">Global Care</span>
              </div>
              <div className="bg-white dark:bg-zinc-900 rounded-xl p-3 border border-black/5 dark:border-white/5 flex flex-col items-center">
                <Truck className="w-4 h-4 text-[#4b41e1] mb-1" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-black dark:text-white">Carbon-Neutral Courier</span>
                <span className="text-[10px] text-zinc-400 mt-0.5">Express Direct</span>
              </div>
            </div>

            {/* Accordion Specification Panels */}
            <div className="space-y-2 pt-2">
              {/* Accordion 1 */}
              <div className="bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden border border-black/5 dark:border-white/5">
                <button
                  onClick={() => setExpandedAccordion(expandedAccordion === 1 ? 0 : 1)}
                  className="w-full p-4 flex items-center justify-between text-left hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
                >
                  <span className="font-headline font-semibold text-xs uppercase tracking-wider text-black dark:text-white">
                    Architectural Description &amp; Design Ethos
                  </span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${expandedAccordion === 1 ? 'rotate-180' : ''}`} />
                </button>
                {expandedAccordion === 1 && (
                  <div className="px-4 pb-4 text-xs text-[#45474b] dark:text-zinc-300 leading-relaxed space-y-2 border-t border-black/5 dark:border-white/5 pt-3">
                    <p>{product.description}</p>
                    <p>{product.designEthos}</p>
                  </div>
                )}
              </div>

              {/* Accordion 2 */}
              <div className="bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden border border-black/5 dark:border-white/5">
                <button
                  onClick={() => setExpandedAccordion(expandedAccordion === 2 ? 0 : 2)}
                  className="w-full p-4 flex items-center justify-between text-left hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
                >
                  <span className="font-headline font-semibold text-xs uppercase tracking-wider text-black dark:text-white">
                    Technical Specifications &amp; Dimensions
                  </span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${expandedAccordion === 2 ? 'rotate-180' : ''}`} />
                </button>
                {expandedAccordion === 2 && (
                  <div className="px-4 pb-4 text-xs text-[#45474b] dark:text-zinc-300 border-t border-black/5 dark:border-white/5 pt-3">
                    <div className="grid grid-cols-2 gap-3">
                      {product.specifications && Object.entries(product.specifications).map(([key, val]) => (
                        <div key={key}>
                          <span className="text-[10px] text-zinc-400 uppercase tracking-wider block capitalize">
                            {key.replace(/([A-Z])/g, ' $1')}
                          </span>
                          <span className="font-semibold text-black dark:text-white">{val}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Accordion 3 */}
              <div className="bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden border border-black/5 dark:border-white/5">
                <button
                  onClick={() => setExpandedAccordion(expandedAccordion === 3 ? 0 : 3)}
                  className="w-full p-4 flex items-center justify-between text-left hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
                >
                  <span className="font-headline font-semibold text-xs uppercase tracking-wider text-black dark:text-white">
                    Materials &amp; Sustainable Metallurgy
                  </span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${expandedAccordion === 3 ? 'rotate-180' : ''}`} />
                </button>
                {expandedAccordion === 3 && (
                  <div className="px-4 pb-4 text-xs text-[#45474b] dark:text-zinc-300 border-t border-black/5 dark:border-white/5 pt-3 leading-relaxed">
                    <p>{product.materials}</p>
                  </div>
                )}
              </div>

              {/* Accordion 4 */}
              <div className="bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden border border-black/5 dark:border-white/5">
                <button
                  onClick={() => setExpandedAccordion(expandedAccordion === 4 ? 0 : 4)}
                  className="w-full p-4 flex items-center justify-between text-left hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
                >
                  <span className="font-headline font-semibold text-xs uppercase tracking-wider text-black dark:text-white">
                    Complimentary Shipping &amp; 30-Day Returns
                  </span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${expandedAccordion === 4 ? 'rotate-180' : ''}`} />
                </button>
                {expandedAccordion === 4 && (
                  <div className="px-4 pb-4 text-xs text-[#45474b] dark:text-zinc-300 border-t border-black/5 dark:border-white/5 pt-3 leading-relaxed">
                    <p>
                      Every piece ships in a tamper-evident security vault via DHL Express with direct signature verification. Should the piece not resonate with your wardrobe, return within 30 days for complimentary insured courier retrieval and immediate refund.
                    </p>
                  </div>
                )}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. Industrial Narrative Feature Break (Geneva Hand-Finished Story) */}
      <section className="w-full bg-[#f3f4f5] dark:bg-zinc-900 py-20 my-16 transition-colors">
        <div className="max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-5 flex flex-col gap-4">
              <span className="text-xs uppercase tracking-widest text-[#4b41e1] dark:text-[#a5b4fc] font-bold">
                Industrial Narrative
              </span>
              <h2 className="font-headline text-3xl sm:text-4xl font-semibold text-black dark:text-white leading-tight">
                Sculpted from Silence. Hand-Finished in Geneva.
              </h2>
              <p className="text-sm text-[#45474b] dark:text-zinc-300 leading-relaxed">
                Each bezel is micro-milled from a solid billet of Grade 5 titanium, then bead-blasted by master artisans to achieve a velvety, reflection-free surface that absorbs light rather than scattering it.
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="bg-white dark:bg-zinc-800 p-4 rounded-2xl shadow-sm border border-black/5 dark:border-white/5">
                  <span className="font-headline text-2xl font-bold text-black dark:text-white block">0.02 mm</span>
                  <span className="text-[11px] text-[#76777b] dark:text-zinc-400">Bezel Machining Tolerance</span>
                </div>
                <div className="bg-white dark:bg-zinc-800 p-4 rounded-2xl shadow-sm border border-black/5 dark:border-white/5">
                  <span className="font-headline text-2xl font-bold text-black dark:text-white block">72 Hrs</span>
                  <span className="text-[11px] text-[#76777b] dark:text-zinc-400">Manual Bench Polish Per Case</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 relative">
              <div className="aspect-[16/10] rounded-3xl overflow-hidden shadow-xl bg-zinc-200 dark:bg-zinc-800">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQrj_qQVFmy7w4XnRonTE0N53O-ZwMGspN2aQP2Y67cYwxfexCkDO5kv4ACNARR7fQMNP632AL-pOUE2__-RXIXGOuD80DlPnCskWfZmG1_scweOH6AWpjclTpYSS3BJnv6AMoKVrRAodD3uSkK8Ap6fuVwwPcl1T83fxBtMtV6MNuxTJx-LIpHCaR3u_ftEZye3VvdiL56z2ra1QIDOxBY2zyf9i2kho029CqbxnK7rIoJbHc4azE"
                  alt="Geneva Watchmaker Atelier Craftsmanship"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="hidden sm:block absolute -bottom-6 -left-6 bg-white dark:bg-zinc-800 p-5 rounded-2xl shadow-2xl max-w-xs border border-black/5 dark:border-white/10">
                <div className="flex items-center gap-2 mb-1.5">
                  <Award className="w-5 h-5 text-[#4b41e1] dark:text-[#a5b4fc]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-black dark:text-white">Certified Chronometer</span>
                </div>
                <p className="text-[11px] text-[#76777b] dark:text-zinc-400 leading-relaxed">
                  Exceeds Swiss COSC standards with an average daily rate delta of -2/+4 seconds under dynamic stress.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Curated Accompaniments (The Monochrome Ensemble) */}
      <section className="max-w-[1680px] w-full mx-auto px-4 sm:px-8 lg:px-16 mb-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-[#4b41e1] dark:text-[#a5b4fc]">
              The Monochrome Ensemble
            </p>
            <h3 className="font-headline text-2xl sm:text-3xl font-semibold text-black dark:text-white mt-1">
              Curated Accompaniments
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-[#45474b] dark:text-zinc-400 max-w-md">
            Carefully paired pieces from our current capsule, calibrated to complement the matte finish and architectural proportions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {accompaniments.map(item => (
            <div
              key={item.id}
              className="bg-white dark:bg-zinc-900 rounded-3xl p-5 shadow-sm border border-black/5 dark:border-white/5 flex flex-col justify-between group hover:shadow-xl transition-all"
            >
              <div className="relative aspect-square rounded-2xl bg-[#edeeef] dark:bg-zinc-800 overflow-hidden mb-4">
                <Link to={`/product/${item.id}`} className="block w-full h-full">
                  <img
                    src={item.images[0]}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </Link>
                <button
                  onClick={() => handleQuickAddCurated(item)}
                  aria-label={`Quick add ${item.name}`}
                  className="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md text-black dark:text-white flex items-center justify-center hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors shadow-md cursor-pointer"
                >
                  {quickAddedId === item.id ? (
                    <Check className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Plus className="w-4 h-4" />
                  )}
                </button>
              </div>

              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#4b41e1] dark:text-[#a5b4fc] font-bold">
                  {item.categoryLabel}
                </span>
                <Link
                  to={`/product/${item.id}`}
                  className="font-headline font-semibold text-sm text-black dark:text-white hover:text-[#4b41e1] transition-colors line-clamp-1 mt-0.5 block"
                >
                  {item.name}
                </Link>
                <div className="flex items-center justify-between mt-2 pt-2 border-t border-black/5 dark:border-white/5 text-xs">
                  <span className="font-bold text-black dark:text-white">${item.price.toFixed(2)}</span>
                  <span className="text-[11px] text-zinc-400">{item.brand}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Client Impressions & Critiques (Review Scorecard) */}
      <section className="max-w-[1680px] w-full mx-auto px-4 sm:px-8 lg:px-16" id="reviews">
        <div className="border-t border-black/5 dark:border-white/10 pt-16 mb-12">
          <p className="text-xs font-bold uppercase tracking-wider text-[#4b41e1] dark:text-[#a5b4fc]">
            Collector Verifications
          </p>
          <h3 className="font-headline text-2xl sm:text-3xl font-semibold text-black dark:text-white mt-1">
            Client Impressions &amp; Critiques
          </h3>
        </div>

        {/* Bento Scorecard */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">
          <div className="lg:col-span-4 bg-[#f3f4f5] dark:bg-zinc-900 rounded-3xl p-8 flex flex-col justify-between">
            <div>
              <span className="font-headline text-5xl sm:text-6xl font-bold text-black dark:text-white tracking-tighter">
                {product.rating}
              </span>
              <div className="flex items-center gap-1 my-3 text-[#4b41e1] dark:text-[#a5b4fc]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-xs text-[#45474b] dark:text-zinc-400">
                Based on {product.reviewCount} verified global acquisitions from release batches I &amp; II.
              </p>
            </div>

            <div className="pt-6">
              <div className="bg-white dark:bg-zinc-800 rounded-2xl p-4 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-bold text-black dark:text-white">
                  <ThumbsUp className="w-4 h-4 text-[#4b41e1]" />
                  <span>98% Recommendation Rate</span>
                </div>
                <span className="text-[10px] uppercase font-bold text-zinc-400">Geneva Certified</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 bg-white dark:bg-zinc-900 rounded-3xl p-8 shadow-sm border border-black/5 dark:border-white/5 flex flex-col justify-center gap-3.5">
            {[
              { star: 5, pct: 91, count: 78 },
              { star: 4, pct: 7, count: 6 },
              { star: 3, pct: 2, count: 2 },
              { star: 2, pct: 0, count: 0 },
              { star: 1, pct: 0, count: 0 }
            ].map(row => (
              <div key={row.star} className="flex items-center gap-4 text-xs font-semibold">
                <span className="w-8 flex items-center gap-1 text-black dark:text-white">
                  {row.star} <Star className="w-3 h-3 fill-current text-[#4b41e1]" />
                </span>
                <div className="flex-1 h-2.5 rounded-full bg-zinc-100 dark:bg-zinc-800 overflow-hidden">
                  <div className="h-full bg-black dark:bg-white rounded-full transition-all" style={{ width: `${row.pct}%` }} />
                </div>
                <span className="w-10 text-right text-zinc-400 font-mono">{row.count}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Reviews List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {product.reviews && product.reviews.length > 0 ? (
            product.reviews.map(rev => (
              <div
                key={rev.id}
                className="bg-white dark:bg-zinc-900 p-8 rounded-3xl shadow-sm border border-black/5 dark:border-white/5 flex flex-col justify-between gap-6"
              >
                <div>
                  <div className="flex items-center justify-between mb-3 text-xs">
                    <div className="flex items-center gap-1 text-[#4b41e1] dark:text-[#a5b4fc]">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                    <span className="text-[11px] uppercase text-zinc-400 font-semibold">{rev.date}</span>
                  </div>
                  <h4 className="font-headline font-semibold text-base text-black dark:text-white mb-2">
                    "{rev.title}"
                  </h4>
                  <p className="text-xs sm:text-sm text-[#45474b] dark:text-zinc-300 leading-relaxed">
                    {rev.comment}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-black/5 dark:border-white/5">
                  <div>
                    <span className="text-xs font-bold text-black dark:text-white block">{rev.author}</span>
                    <span className="text-[11px] text-zinc-400">{rev.location}</span>
                  </div>
                  <div className="flex items-center gap-1 bg-[#edeeef] dark:bg-zinc-800 px-2.5 py-1 rounded-md text-[10px] uppercase font-bold text-[#4b41e1] dark:text-[#a5b4fc]">
                    <CheckCircle className="w-3 h-3" />
                    <span>Verified Collector</span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-2 p-8 text-center bg-white dark:bg-zinc-900 rounded-3xl text-zinc-400 text-xs">
              This newly curated piece is awaiting its first public collector monographs.
            </div>
          )}
        </div>
      </section>

      {/* 360 Studio Modal */}
      {show360Modal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xl flex items-center justify-center p-4">
          <div className="bg-white dark:bg-zinc-900 w-full max-w-3xl rounded-3xl p-6 sm:p-8 flex flex-col gap-6 shadow-2xl border border-white/10">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#4b41e1] font-bold">
                  Photogrammetry Spatial Turntable
                </span>
                <h3 className="font-headline text-xl font-bold text-black dark:text-white">
                  360° Studio Inspection: {product.name}
                </h3>
              </div>
              <button
                onClick={() => setShow360Modal(false)}
                className="w-9 h-9 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center hover:bg-zinc-200 dark:hover:bg-zinc-700 text-black dark:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="relative aspect-video w-full bg-[#f3f4f5] dark:bg-zinc-950 rounded-2xl overflow-hidden flex items-center justify-center">
              <img
                src={product.images[0]}
                alt="360 view"
                className="max-h-full object-contain transition-transform"
                style={{ transform: `rotate(${turntableRotation}deg)` }}
              />
              <div className="absolute bottom-4 inset-x-4 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md p-3 rounded-xl flex items-center justify-between text-xs">
                <span className="font-semibold text-zinc-600 dark:text-zinc-300">Rotate Axis:</span>
                <input
                  type="range"
                  min="-180"
                  max="180"
                  value={turntableRotation}
                  onChange={(e) => setTurntableRotation(Number(e.target.value))}
                  className="w-1/2 accent-black dark:accent-white cursor-pointer"
                />
                <span className="text-[10px] uppercase font-bold text-[#4b41e1]">{turntableRotation}°</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Sizing Guide Modal */}
      {showSizeGuide && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-zinc-900 max-w-md w-full rounded-3xl p-6 sm:p-8 space-y-4 shadow-2xl border border-white/10">
            <div className="flex items-center justify-between">
              <h3 className="font-headline font-bold text-lg text-black dark:text-white">
                Atelier Sizing Guide
              </h3>
              <button onClick={() => setShowSizeGuide(false)} className="p-1 hover:opacity-75">
                <X className="w-5 h-5 text-black dark:text-white" />
              </button>
            </div>
            <p className="text-xs text-[#76777b] dark:text-zinc-300 leading-relaxed">
              LuxeCart pieces are engineered to fit ergonomic wrist and body profiles comfortably.
            </p>
            <div className="bg-[#f3f4f5] dark:bg-zinc-800 p-4 rounded-xl text-xs space-y-2 text-black dark:text-white font-medium">
              <div className="flex justify-between"><span>Case Diameter:</span><span className="font-bold">40.0 mm</span></div>
              <div className="flex justify-between"><span>Lug-to-Lug:</span><span className="font-bold">47.8 mm</span></div>
              <div className="flex justify-between"><span>Strap Width:</span><span className="font-bold">20 mm tapered to 18 mm</span></div>
              <div className="flex justify-between"><span>Wrist Circumference:</span><span className="font-bold">155 mm – 205 mm</span></div>
            </div>
            <button
              onClick={() => setShowSizeGuide(false)}
              className="w-full py-3 rounded-xl bg-black dark:bg-white text-white dark:text-black text-xs font-bold uppercase tracking-wider"
            >
              Understood
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
