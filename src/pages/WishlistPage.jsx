import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag, Trash2, ArrowRight } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext.jsx';
import { useCart } from '../context/CartContext.jsx';

export default function WishlistPage() {
  const { wishlist, removeFromWishlist, moveToCart } = useWishlist();

  return (
    <div className="w-full pt-28 pb-24 bg-[#f8f9fa] dark:bg-zinc-950 min-h-screen transition-colors">
      <div className="max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-16">
        
        {/* Header */}
        <div className="flex flex-col gap-2 mb-10">
          <nav className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#76777b] dark:text-zinc-400">
            <Link to="/" className="hover:text-black dark:hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-black dark:text-white font-bold">Curated Wishlist</span>
          </nav>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#4b41e1] dark:text-[#a5b4fc] font-bold">
                Private Vault
              </span>
              <h1 className="font-headline text-3xl sm:text-4xl font-semibold text-black dark:text-white mt-1">
                Saved Items ({wishlist.length})
              </h1>
            </div>
            <p className="text-xs sm:text-sm text-[#45474b] dark:text-zinc-400 max-w-md">
              Pieces saved to your personal archival gallery. Prices and limited run inventories are updated in real-time.
            </p>
          </div>
        </div>

        {wishlist.length === 0 ? (
          <div className="bg-white dark:bg-zinc-900 rounded-3xl p-16 text-center flex flex-col items-center justify-center gap-4 border border-black/5 dark:border-white/5 max-w-lg mx-auto shadow-sm">
            <div className="w-20 h-20 rounded-full bg-[#f3f4f5] dark:bg-zinc-800 flex items-center justify-center text-zinc-400">
              <Heart className="w-10 h-10" />
            </div>
            <h2 className="font-headline text-2xl font-bold text-black dark:text-white">
              Your Wishlist is Empty
            </h2>
            <p className="text-xs text-zinc-500 max-w-sm">
              Save pieces you desire to track availability or assemble your seasonal ensemble.
            </p>
            <Link
              to="/products"
              className="mt-2 px-8 py-3.5 rounded-xl bg-black dark:bg-white text-white dark:text-black text-xs font-semibold uppercase tracking-wider hover:opacity-90 transition-opacity"
            >
              Browse Exhibition
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {wishlist.map(item => (
              <div
                key={item.id}
                className="bg-white dark:bg-zinc-900 rounded-3xl p-5 shadow-sm border border-black/5 dark:border-white/5 flex flex-col justify-between group hover:shadow-xl transition-all"
              >
                <div className="relative aspect-[4/5] rounded-2xl bg-[#edeeef] dark:bg-zinc-800 overflow-hidden mb-4">
                  <Link to={`/product/${item.id}`} className="block w-full h-full">
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </Link>

                  <button
                    onClick={() => removeFromWishlist(item.id)}
                    aria-label="Remove from wishlist"
                    className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md flex items-center justify-center text-red-500 hover:scale-110 transition-all shadow-sm"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>

                  {item.badge && (
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black text-white text-[10px] uppercase font-bold tracking-wider">
                      {item.badge}
                    </span>
                  )}
                </div>

                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#4b41e1] dark:text-[#a5b4fc] font-bold">
                    {item.category || 'Atelier Vault'}
                  </span>
                  <Link
                    to={`/product/${item.id}`}
                    className="font-headline font-semibold text-sm sm:text-base text-black dark:text-white hover:text-[#4b41e1] transition-colors block line-clamp-1 mt-0.5"
                  >
                    {item.name}
                  </Link>
                  <p className="text-xs text-zinc-400 mt-1 line-clamp-1">
                    {item.subtitle || 'Archival Edition'}
                  </p>
                  
                  <div className="flex items-center justify-between mt-3 pt-2 border-t border-black/5 dark:border-white/5">
                    <span className="font-headline font-bold text-base text-black dark:text-white">
                      ${item.price.toFixed(2)}
                    </span>
                    {item.originalPrice && (
                      <span className="text-xs text-zinc-400 line-through">
                        ${item.originalPrice.toFixed(2)}
                      </span>
                    )}
                  </div>
                </div>

                <div className="mt-4 pt-1">
                  <button
                    onClick={() => moveToCart(item)}
                    className="w-full py-3 rounded-xl bg-black dark:bg-white text-white dark:text-black font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 hover:bg-[#4b41e1] dark:hover:bg-[#4b41e1] hover:text-white dark:hover:text-white transition-colors cursor-pointer"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Move to Bag</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
