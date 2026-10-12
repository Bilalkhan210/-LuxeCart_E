import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Star, ShoppingBag, Check } from 'lucide-react';
import { useCart } from '../../context/CartContext.jsx';
import { useWishlist } from '../../context/WishlistContext.jsx';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [isAddedQuick, setIsAddedQuick] = useState(false);

  const isFavorited = isInWishlist(product.id);
  const selectedColor = product.colors ? product.colors[selectedColorIndex] : null;

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(
      product,
      1,
      selectedColor?.name || null,
      product.sizes ? product.sizes[0]?.label : null
    );
    setIsAddedQuick(true);
    setTimeout(() => setIsAddedQuick(false), 1500);
  };

  const handleWishlistClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product);
  };

  return (
    <div className="group flex flex-col bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-black/5 dark:border-white/5">
      {/* Product Image Frame */}
      <div className="relative w-full aspect-[4/5] bg-[#edeeef] dark:bg-zinc-800 overflow-hidden">
        <Link to={`/product/${product.id}`} className="block w-full h-full">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </Link>

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1 z-10 pointer-events-none">
          {product.badge && (
            <span
              className={`px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider shadow-sm ${
                product.badge === 'Bestseller' || product.badge === 'Signature'
                  ? 'bg-black text-white dark:bg-white dark:text-black'
                  : product.badge === 'Trending' || product.badge === 'Just In'
                  ? 'bg-[#4b41e1] text-white'
                  : 'bg-zinc-200 dark:bg-zinc-700 text-zinc-900 dark:text-white'
              }`}
            >
              {product.badge}
            </span>
          )}
        </div>

        {/* Wishlist Heart Button */}
        <button
          onClick={handleWishlistClick}
          aria-label={isFavorited ? "Remove from wishlist" : "Add to wishlist"}
          className={`absolute top-3 right-3 w-9 h-9 rounded-full backdrop-blur-md flex items-center justify-center transition-all duration-200 shadow-sm z-10 ${
            isFavorited
              ? 'bg-[#4b41e1] text-white'
              : 'bg-white/80 dark:bg-zinc-900/80 text-black dark:text-white hover:bg-white dark:hover:bg-zinc-800 hover:text-[#4b41e1]'
          }`}
        >
          <Heart className={`w-4 h-4 ${isFavorited ? 'fill-current' : ''}`} />
        </button>

        {/* Quick Add Overlay on Hover */}
        <div className="absolute inset-x-3 bottom-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
          <button
            onClick={handleQuickAdd}
            className="w-full py-2.5 rounded-xl bg-black dark:bg-white text-white dark:text-black font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 hover:bg-[#4b41e1] dark:hover:bg-[#4b41e1] hover:text-white dark:hover:text-white transition-colors shadow-md"
          >
            {isAddedQuick ? (
              <>
                <Check className="w-4 h-4" />
                <span>Added to Bag</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-4 h-4" />
                <span>Quick Add</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Card Body Details */}
      <div className="p-5 flex flex-col flex-1 justify-between gap-3">
        <div>
          {/* Metadata Row: Material/Brand + Rating */}
          <div className="flex items-center justify-between mb-1.5 text-xs">
            <span className="text-[10px] uppercase tracking-wider text-[#76777b] dark:text-zinc-400 font-semibold truncate max-w-[140px]">
              {product.subtitle || product.brand}
            </span>
            <div className="flex items-center gap-1 text-[#4b41e1] dark:text-[#a5b4fc]">
              <Star className="w-3.5 h-3.5 fill-current" />
              <span className="text-xs font-bold text-black dark:text-white">
                {product.rating}
              </span>
              <span className="text-[10px] text-zinc-400">
                ({product.reviewCount})
              </span>
            </div>
          </div>

          {/* Product Title */}
          <Link
            to={`/product/${product.id}`}
            className="font-headline text-sm sm:text-base font-semibold text-[#191c1d] dark:text-white group-hover:text-[#4b41e1] dark:group-hover:text-[#a5b4fc] transition-colors line-clamp-1 block"
          >
            {product.name}
          </Link>
        </div>

        {/* Color Dots and Price Tier */}
        <div className="flex items-center justify-between pt-1 border-t border-black/5 dark:border-white/5">
          {/* Colors */}
          <div className="flex items-center gap-1.5">
            {product.colors && product.colors.length > 0 ? (
              product.colors.map((color, idx) => (
                <button
                  key={color.name}
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedColorIndex(idx);
                  }}
                  aria-label={color.name}
                  className={`w-3.5 h-3.5 rounded-full transition-all ${color.bgClass} ${
                    selectedColorIndex === idx
                      ? 'ring-2 ring-black dark:ring-white ring-offset-2 ring-offset-white dark:ring-offset-zinc-900 scale-110'
                      : 'hover:scale-110 opacity-80'
                  }`}
                />
              ))
            ) : (
              <span className="text-[10px] text-zinc-400">Atelier Grade</span>
            )}
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-1.5">
            <span className="font-headline text-sm sm:text-base font-bold text-black dark:text-white">
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && product.originalPrice > product.price && (
              <span className="text-xs text-[#76777b] dark:text-zinc-500 line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
