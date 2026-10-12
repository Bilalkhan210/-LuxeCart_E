import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, Plus, Minus, Trash2, ArrowRight, ShieldCheck, Tag, ShoppingBag, Truck } from 'lucide-react';
import { useCart } from '../../context/CartContext.jsx';

export default function CartDrawer() {
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
    isCartOpen,
    closeCart
  } = useCart();

  const [inputCode, setInputCode] = useState('');
  const [couponError, setCouponError] = useState('');
  const navigate = useNavigate();

  if (!isCartOpen) return null;

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    if (!inputCode.trim()) return;
    const res = applyCoupon(inputCode);
    if (!res.success) {
      setCouponError(res.message);
    } else {
      setCouponError('');
      setInputCode('');
    }
  };

  const handleProceedCheckout = () => {
    closeCart();
    navigate('/checkout');
  };

  const handleViewFullCart = () => {
    closeCart();
    navigate('/cart');
  };

  const shippingPercent = Math.min(100, Math.round((subtotal / freeShippingThreshold) * 100));

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-in fade-in duration-300">
      {/* Backdrop Scrim */}
      <div
        onClick={closeCart}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
      />

      {/* Drawer Container */}
      <div className="fixed inset-y-0 right-0 max-w-full flex pl-6 sm:pl-10">
        <div className="w-screen max-w-md bg-white dark:bg-[#18191c] text-[#191c1d] dark:text-white shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-300">
          
          {/* Header */}
          <div className="p-5 sm:p-6 border-b border-black/5 dark:border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <ShoppingBag className="w-5 h-5 text-black dark:text-white" />
              <h2 className="font-headline text-lg font-bold">Curated Bag ({totalItemCount})</h2>
            </div>
            <button
              onClick={closeCart}
              aria-label="Close cart drawer"
              className="p-2 rounded-xl text-zinc-500 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Status */}
          <div className="px-5 sm:px-6 py-3.5 bg-[#f8f9fa] dark:bg-zinc-900 border-b border-black/5 dark:border-white/10">
            <div className="flex items-center justify-between text-xs font-semibold mb-2">
              <span className="flex items-center gap-1.5 text-zinc-700 dark:text-zinc-300">
                <Truck className="w-4 h-4 text-[#4b41e1] dark:text-[#a5b4fc]" />
                {qualifiesForFreeShipping ? (
                  <span className="text-emerald-700 dark:text-emerald-400">Complimentary Courier Qualified</span>
                ) : (
                  <span>Add ${amountNeededForFreeShipping.toFixed(2)} for Free Shipping</span>
                )}
              </span>
              <span className="text-[11px] uppercase tracking-wider text-zinc-500">
                Threshold $150
              </span>
            </div>
            <div className="w-full bg-zinc-200 dark:bg-zinc-800 h-1.5 rounded-full overflow-hidden">
              <div
                className="bg-[#4b41e1] h-full rounded-full transition-all duration-500"
                style={{ width: `${shippingPercent}%` }}
              />
            </div>
          </div>

          {/* Items List */}
          <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-4">
            {items.length === 0 ? (
              <div className="py-16 text-center flex flex-col items-center justify-center gap-3">
                <div className="w-16 h-16 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-400">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h3 className="font-headline font-semibold text-base">Your curation is empty</h3>
                <p className="text-xs text-zinc-500 max-w-xs">
                  Discover our archival drops of hand-finished chronographs, fine leather goods, and spatial audio pieces.
                </p>
                <button
                  onClick={() => {
                    closeCart();
                    navigate('/products');
                  }}
                  className="mt-2 px-5 py-2.5 rounded-xl bg-black dark:bg-white text-white dark:text-black text-xs font-semibold uppercase tracking-wider hover:opacity-90 transition-opacity"
                >
                  Explore Collection
                </button>
              </div>
            ) : (
              items.map(item => (
                <div
                  key={item.uniqueKey}
                  className="flex gap-3.5 pb-4 border-b border-black/5 dark:border-white/5 last:border-none"
                >
                  <img
                    src={item.product.images[0]}
                    alt={item.product.name}
                    className="w-20 h-24 rounded-xl object-cover bg-zinc-100 dark:bg-zinc-800 flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="text-xs font-bold text-black dark:text-white line-clamp-1">
                          {item.product.name}
                        </h4>
                        <button
                          onClick={() => removeFromCart(item.uniqueKey)}
                          aria-label="Remove item"
                          className="text-zinc-400 hover:text-red-500 transition-colors p-0.5"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <p className="text-[11px] text-zinc-500 mt-0.5">
                        {item.selectedColor} • {item.selectedSize}
                      </p>
                      <p className="text-xs font-bold text-black dark:text-white mt-1">
                        ${item.product.price.toFixed(2)}
                      </p>
                    </div>

                    {/* Quantity Stepper & Subtotal */}
                    <div className="flex items-center justify-between mt-2 pt-1">
                      <div className="flex items-center bg-zinc-100 dark:bg-zinc-800 rounded-lg p-0.5">
                        <button
                          onClick={() => updateQuantity(item.uniqueKey, -1)}
                          className="w-6 h-6 flex items-center justify-center rounded text-zinc-600 dark:text-zinc-300 hover:bg-white dark:hover:bg-zinc-700 transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-7 text-center text-xs font-semibold">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.uniqueKey, 1)}
                          className="w-6 h-6 flex items-center justify-center rounded text-zinc-600 dark:text-zinc-300 hover:bg-white dark:hover:bg-zinc-700 transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <span className="text-xs font-bold text-black dark:text-white">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Calculation & Actions */}
          {items.length > 0 && (
            <div className="p-5 sm:p-6 bg-[#f8f9fa] dark:bg-zinc-900 border-t border-black/5 dark:border-white/10 space-y-3.5">
              {/* Promo Code Input */}
              <form onSubmit={handleApplyCoupon} className="flex gap-2">
                <div className="relative flex-1">
                  <Tag className="w-3.5 h-3.5 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Privilege code (LUXE24)"
                    value={inputCode}
                    onChange={(e) => {
                      setInputCode(e.target.value);
                      setCouponError('');
                    }}
                    className="w-full bg-white dark:bg-zinc-800 pl-8 pr-3 py-2 rounded-xl text-xs uppercase tracking-wider text-black dark:text-white placeholder:text-zinc-400 border border-black/5 dark:border-white/10 focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="px-3.5 py-2 rounded-xl bg-black dark:bg-white text-white dark:text-black text-xs font-semibold uppercase tracking-wider hover:opacity-90 transition-opacity"
                >
                  Apply
                </button>
              </form>

              {couponError && (
                <p className="text-[11px] text-red-500 font-medium">{couponError}</p>
              )}

              {couponData && (
                <div className="flex items-center justify-between text-xs px-3 py-1.5 rounded-lg bg-[#e2dfff] dark:bg-[#201d4a] text-[#4b41e1] dark:text-[#c3c0ff]">
                  <span className="font-semibold uppercase tracking-wider">
                    {couponCode} Applied ({couponData.description})
                  </span>
                  <button
                    onClick={removeCoupon}
                    className="text-xs font-bold hover:text-red-500 ml-2"
                  >
                    Remove
                  </button>
                </div>
              )}

              {/* Price Breakdown */}
              <div className="space-y-1.5 text-xs text-zinc-600 dark:text-zinc-400 pt-1">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-black dark:text-white">${subtotal.toFixed(2)}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-[#4b41e1] dark:text-[#a5b4fc]">
                    <span>VIP Privilege Discount</span>
                    <span className="font-semibold">-${discountAmount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Estimated Shipping</span>
                  <span className="font-semibold text-black dark:text-white">
                    {shippingFee === 0 ? 'Complimentary' : `$${shippingFee.toFixed(2)}`}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Estimated Tax (NYC 8.875%)</span>
                  <span className="font-semibold text-black dark:text-white">${taxAmount.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-baseline pt-2 border-t border-black/5 dark:border-white/10 text-black dark:text-white">
                  <span className="font-headline font-bold text-sm">Estimated Total</span>
                  <span className="font-headline font-bold text-lg tracking-tight">${total.toFixed(2)}</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col gap-2 pt-1">
                <button
                  onClick={handleProceedCheckout}
                  className="w-full py-3.5 rounded-xl bg-black dark:bg-white text-white dark:text-black font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-md"
                >
                  <ShieldCheck className="w-4 h-4 text-[#4b41e1] dark:text-[#4b41e1]" />
                  <span>Direct Secure Checkout</span>
                </button>
                <button
                  onClick={handleViewFullCart}
                  className="w-full py-2.5 rounded-xl bg-white dark:bg-zinc-800 text-black dark:text-white text-xs font-semibold uppercase tracking-wider hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors border border-black/5 dark:border-white/10"
                >
                  Review Detailed Bag
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
