import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  ShoppingBag,
  Trash2,
  Plus,
  Minus,
  ArrowRight,
  ShieldCheck,
  Tag,
  Truck,
  RotateCcw,
  Heart,
  Bookmark
} from 'lucide-react';
import { useCart } from '../context/CartContext.jsx';
import { useWishlist } from '../context/WishlistContext.jsx';

export default function CartPage() {
  const {
    items,
    totalItemCount,
    subtotal,
    discountAmount,
    shippingFee,
    taxAmount,
    total,
    freeShippingThreshold,
    qualifiesForFreeShipping,
    amountNeededForFreeShipping,
    couponCode,
    couponData,
    applyCoupon,
    removeCoupon,
    updateQuantity,
    removeFromCart,
    clearCart
  } = useCart();

  const { wishlist, moveToCart } = useWishlist();
  const [promoInput, setPromoInput] = useState('');
  const [promoError, setPromoError] = useState('');
  const navigate = useNavigate();

  const handleApplyPromo = (e) => {
    e.preventDefault();
    if (!promoInput.trim()) return;
    const res = applyCoupon(promoInput);
    if (!res.success) {
      setPromoError(res.message);
    } else {
      setPromoError('');
      setPromoInput('');
    }
  };

  const shippingPercent = Math.min(100, Math.round((subtotal / freeShippingThreshold) * 100));

  return (
    <div className="w-full pt-28 pb-24 bg-[#f8f9fa] dark:bg-zinc-950 min-h-screen transition-colors">
      <div className="max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-16">
        
        {/* Stepper Progress Bar */}
        <section className="mb-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 gap-2">
            <div className="flex items-center gap-2">
              <span className="text-[10px] uppercase tracking-widest text-[#4b41e1] dark:text-[#a5b4fc] font-bold">
                Checkout Sequence
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#4b41e1]" />
              <span className="text-xs text-[#76777b] dark:text-zinc-400 font-semibold">
                Order Bag #{Math.abs(Date.now() % 100000)}
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-[#76777b] dark:text-zinc-400">
              <ShieldCheck className="w-4 h-4 text-[#4b41e1] dark:text-[#a5b4fc]" />
              <span>256-Bit Encrypted Secure Enclave</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 bg-[#edeeef] dark:bg-zinc-900 p-1.5 rounded-2xl">
            <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white dark:bg-zinc-800 shadow-sm">
              <div className="w-7 h-7 rounded-full bg-black dark:bg-white text-white dark:text-black flex items-center justify-center font-bold text-xs">
                1
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-wider text-[#4b41e1] dark:text-[#a5b4fc] font-bold">
                  Active Review
                </span>
                <span className="font-headline font-semibold text-xs text-black dark:text-white">
                  Curated Bag
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-transparent opacity-75">
              <div className="w-7 h-7 rounded-full bg-zinc-300 dark:bg-zinc-700 text-zinc-800 dark:text-zinc-200 flex items-center justify-center font-bold text-xs">
                2
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-wider text-zinc-400 font-bold">
                  Destination
                </span>
                <span className="font-headline font-semibold text-xs text-zinc-600 dark:text-zinc-400">
                  Shipping Details
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-transparent opacity-50">
              <div className="w-7 h-7 rounded-full bg-zinc-300 dark:bg-zinc-700 text-zinc-800 dark:text-zinc-200 flex items-center justify-center font-bold text-xs">
                3
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-wider text-zinc-400 font-bold">
                  Verification
                </span>
                <span className="font-headline font-semibold text-xs text-zinc-600 dark:text-zinc-400">
                  Payment &amp; Finalize
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Empty State */}
        {items.length === 0 ? (
          <div className="bg-white dark:bg-zinc-900 rounded-3xl p-16 text-center flex flex-col items-center justify-center gap-4 border border-black/5 dark:border-white/5 max-w-xl mx-auto shadow-sm">
            <div className="w-20 h-20 rounded-full bg-[#f3f4f5] dark:bg-zinc-800 flex items-center justify-center text-zinc-400">
              <ShoppingBag className="w-10 h-10" />
            </div>
            <h2 className="font-headline text-2xl font-bold text-black dark:text-white">
              Your Curation Bag is Empty
            </h2>
            <p className="text-xs sm:text-sm text-zinc-500 max-w-md">
              You have not reserved any exhibition pieces. Explore our limited drops to curate your wardrobe.
            </p>
            <Link
              to="/products"
              className="mt-2 px-8 py-3.5 rounded-xl bg-black dark:bg-white text-white dark:text-black text-xs font-semibold uppercase tracking-wider hover:opacity-90 transition-opacity"
            >
              Explore Collection
            </Link>
          </div>
        ) : (
          /* Main Cart Content (8 Col + 4 Col) */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* LEFT COLUMN: Items and Options */}
            <div className="lg:col-span-8 flex flex-col gap-6">
              
              {/* Free Shipping Progress Tracker */}
              <div className="bg-white dark:bg-zinc-900 rounded-2xl p-5 shadow-sm border border-black/5 dark:border-white/5 space-y-2.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-semibold text-black dark:text-white">
                    <Truck className="w-4 h-4 text-[#4b41e1] dark:text-[#a5b4fc]" />
                    <span>Complimentary Express Dispatch</span>
                  </div>
                  <span
                    className={`text-[10px] uppercase px-2.5 py-0.5 rounded-full font-bold ${
                      qualifiesForFreeShipping
                        ? 'bg-[#e2dfff] dark:bg-[#201d4a] text-[#4b41e1] dark:text-[#c3c0ff]'
                        : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300'
                    }`}
                  >
                    {qualifiesForFreeShipping ? 'Qualified' : `$${amountNeededForFreeShipping.toFixed(2)} Away`}
                  </span>
                </div>
                
                <div className="w-full bg-[#f3f4f5] dark:bg-zinc-800 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-[#4b41e1] h-full rounded-full transition-all duration-500"
                    style={{ width: `${shippingPercent}%` }}
                  />
                </div>

                <p className="text-[11px] text-zinc-500">
                  {qualifiesForFreeShipping
                    ? 'Your bag qualifies for free white-glove courier dispatch.'
                    : `Add items valued over $${amountNeededForFreeShipping.toFixed(2)} to qualify for complimentary express delivery.`}
                </p>
              </div>

              {/* Items Card */}
              <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 sm:p-8 shadow-sm border border-black/5 dark:border-white/5 space-y-6">
                <div className="flex items-baseline justify-between border-b border-black/5 dark:border-white/5 pb-4">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-zinc-400 font-bold">
                      Vault Selection
                    </span>
                    <h2 className="font-headline text-xl sm:text-2xl font-bold text-black dark:text-white">
                      Your Cart Items ({totalItemCount})
                    </h2>
                  </div>
                  <button
                    onClick={clearCart}
                    className="text-xs text-zinc-400 hover:text-red-500 transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Clear All</span>
                  </button>
                </div>

                {/* Items List */}
                <div className="space-y-6">
                  {items.map(item => (
                    <div
                      key={item.uniqueKey}
                      className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-black/5 dark:border-white/5 last:border-none last:pb-0"
                    >
                      <div className="flex items-center gap-4">
                        <Link to={`/product/${item.product.id}`}>
                          <img
                            src={item.product.images[0]}
                            alt={item.product.name}
                            className="w-20 sm:w-24 h-24 sm:h-28 rounded-2xl object-cover bg-zinc-100 dark:bg-zinc-800 flex-shrink-0"
                          />
                        </Link>
                        <div className="space-y-1">
                          {item.product.badge && (
                            <span className="text-[9px] uppercase tracking-wider text-[#4b41e1] dark:text-[#a5b4fc] font-bold">
                              {item.product.badge}
                            </span>
                          )}
                          <Link
                            to={`/product/${item.product.id}`}
                            className="font-headline font-semibold text-sm sm:text-base text-black dark:text-white hover:text-[#4b41e1] transition-colors block"
                          >
                            {item.product.name}
                          </Link>
                          <p className="text-[11px] text-zinc-500">
                            Color: {item.selectedColor} • Spec: {item.selectedSize}
                          </p>
                          <div className="flex items-baseline gap-2 pt-1">
                            <span className="text-xs font-bold text-black dark:text-white">
                              ${item.product.price.toFixed(2)}
                            </span>
                            {item.product.originalPrice && (
                              <span className="text-[11px] text-zinc-400 line-through">
                                ${item.product.originalPrice.toFixed(2)}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Stepper + Subtotal + Remove */}
                      <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-6">
                        <div className="flex items-center bg-[#f3f4f5] dark:bg-zinc-800 rounded-xl p-1">
                          <button
                            onClick={() => updateQuantity(item.uniqueKey, -1)}
                            className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white dark:hover:bg-zinc-700 text-black dark:text-white transition-colors cursor-pointer"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="w-8 text-center font-bold text-xs text-black dark:text-white">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.uniqueKey, 1)}
                            className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white dark:hover:bg-zinc-700 text-black dark:text-white transition-colors cursor-pointer"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        <div className="flex flex-col items-end">
                          <span className="font-headline font-bold text-sm sm:text-base text-black dark:text-white">
                            ${(item.product.price * item.quantity).toFixed(2)}
                          </span>
                          <button
                            onClick={() => removeFromCart(item.uniqueKey)}
                            className="text-[11px] uppercase tracking-wider text-zinc-400 hover:text-red-500 transition-colors mt-1 cursor-pointer"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Promo Code Box */}
                <div className="p-4 rounded-2xl bg-[#f8f9fa] dark:bg-zinc-800/60 border border-black/5 dark:border-white/5 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <label className="block text-[11px] uppercase tracking-wider text-zinc-500 font-bold mb-1">
                      Promotional Access Privilege
                    </label>
                    <form onSubmit={handleApplyPromo} className="flex gap-2">
                      <div className="relative flex-1">
                        <input
                          type="text"
                          placeholder="Try LUXE24 for 15% off"
                          value={promoInput}
                          onChange={(e) => {
                            setPromoInput(e.target.value);
                            setPromoError('');
                          }}
                          className="w-full bg-white dark:bg-zinc-800 px-4 py-2.5 rounded-xl text-xs uppercase tracking-wider text-black dark:text-white border border-black/5 dark:border-white/10 focus:outline-none"
                        />
                      </div>
                      <button
                        type="submit"
                        className="px-5 py-2.5 rounded-xl bg-black dark:bg-white text-white dark:text-black font-bold text-xs uppercase tracking-wider hover:opacity-90 transition-opacity"
                      >
                        Apply
                      </button>
                    </form>
                    {promoError && (
                      <p className="text-[11px] text-red-500 font-semibold mt-1">{promoError}</p>
                    )}
                  </div>

                  {couponData && (
                    <div className="flex items-center justify-between gap-3 bg-[#e2dfff] dark:bg-[#201d4a] text-[#4b41e1] dark:text-[#c3c0ff] px-4 py-3 rounded-xl">
                      <div className="flex flex-col">
                        <span className="text-[10px] font-bold uppercase tracking-widest">{couponCode} APPLIED</span>
                        <span className="text-xs font-semibold">{couponData.description}</span>
                      </div>
                      <button
                        onClick={removeCoupon}
                        className="text-xs font-bold hover:text-red-500 ml-2 cursor-pointer"
                      >
                        ✕
                      </button>
                    </div>
                  )}
                </div>

              </div>

            </div>

            {/* RIGHT COLUMN: Sticky Order Summary & Quick Wishlist */}
            <div className="lg:col-span-4 flex flex-col gap-6 sticky top-28">
              
              {/* Order Summary Card */}
              <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 sm:p-8 shadow-xl border border-black/5 dark:border-white/5 space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-black/5 dark:border-white/5">
                  <h3 className="font-headline font-bold text-lg text-black dark:text-white">
                    Order Summary
                  </h3>
                  <span className="text-xs font-bold text-zinc-400">
                    {totalItemCount} Items
                  </span>
                </div>

                {/* Calculation Rows */}
                <div className="space-y-3 text-xs text-[#45474b] dark:text-zinc-300">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="font-bold text-black dark:text-white">${subtotal.toFixed(2)}</span>
                  </div>

                  {discountAmount > 0 && (
                    <div className="flex justify-between text-[#4b41e1] dark:text-[#a5b4fc]">
                      <span>VIP Privilege ({couponCode})</span>
                      <span className="font-bold">-${discountAmount.toFixed(2)}</span>
                    </div>
                  )}

                  <div className="flex justify-between">
                    <span>Estimated Shipping</span>
                    <span className="font-bold text-black dark:text-white">
                      {shippingFee === 0 ? 'Complimentary' : `$${shippingFee.toFixed(2)}`}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span>Estimated Tax (NYC 8.875%)</span>
                    <span className="font-bold text-black dark:text-white">${taxAmount.toFixed(2)}</span>
                  </div>

                  <div className="bg-[#f8f9fa] dark:bg-zinc-800/80 p-4 rounded-2xl flex items-baseline justify-between pt-3 border-t border-black/5 dark:border-white/5 text-black dark:text-white mt-2">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-zinc-400 block tracking-wider">
                        Total Payable
                      </span>
                      <span className="text-[11px] text-zinc-500">All duties included</span>
                    </div>
                    <div className="text-right">
                      <span className="font-headline text-2xl font-bold tracking-tight">
                        ${total.toFixed(2)}
                      </span>
                      <span className="text-[10px] text-zinc-400 uppercase font-mono block">USD</span>
                    </div>
                  </div>
                </div>

                {/* Checkout CTA */}
                <button
                  onClick={() => navigate('/checkout')}
                  className="w-full py-4 rounded-xl bg-black dark:bg-white text-white dark:text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#4b41e1] dark:hover:bg-[#4b41e1] hover:text-white dark:hover:text-white transition-all shadow-md cursor-pointer"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>Proceed to Checkout</span>
                </button>

                {/* 3 Guarantees */}
                <div className="grid grid-cols-3 gap-2 pt-2 text-center text-[10px] font-bold uppercase text-zinc-500">
                  <div className="p-2 rounded-xl bg-[#f8f9fa] dark:bg-zinc-800">256-Bit SSL</div>
                  <div className="p-2 rounded-xl bg-[#f8f9fa] dark:bg-zinc-800">30-Day Returns</div>
                  <div className="p-2 rounded-xl bg-[#f8f9fa] dark:bg-zinc-800">Geneva Certified</div>
                </div>
              </div>

              {/* Saved Items Mini-Drawer */}
              {wishlist.length > 0 && (
                <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 shadow-sm border border-black/5 dark:border-white/5 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-black dark:text-white">
                      <Bookmark className="w-4 h-4 text-[#4b41e1]" />
                      <span>Saved in Vault ({wishlist.length})</span>
                    </div>
                    <Link to="/wishlist" className="text-[10px] uppercase tracking-wider text-[#4b41e1] hover:underline font-bold">
                      View All
                    </Link>
                  </div>

                  <div className="space-y-3">
                    {wishlist.slice(0, 2).map(saved => (
                      <div
                        key={saved.id}
                        className="flex items-center justify-between gap-3 p-2.5 rounded-xl bg-[#f8f9fa] dark:bg-zinc-800/50"
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <img
                            src={saved.images[0]}
                            alt={saved.name}
                            className="w-10 h-12 rounded-lg object-cover bg-zinc-100 flex-shrink-0"
                          />
                          <div className="min-w-0">
                            <p className="text-xs font-bold text-black dark:text-white truncate">
                              {saved.name}
                            </p>
                            <p className="text-[11px] text-zinc-500">${saved.price.toFixed(2)}</p>
                          </div>
                        </div>
                        <button
                          onClick={() => moveToCart(saved)}
                          className="px-3 py-1.5 rounded-lg bg-black dark:bg-white text-white dark:text-black text-[10px] uppercase font-bold tracking-wider hover:bg-[#4b41e1] hover:text-white transition-colors cursor-pointer flex-shrink-0"
                        >
                          Move to Bag
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>

          </div>
        )}

      </div>
    </div>
  );
}
