import React, { createContext, useContext, useState, useEffect } from 'react';
import { PROMO_CODES } from '../data/products.js';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    try {
      const saved = localStorage.getItem('luxecart_cart');
      if (saved) return JSON.parse(saved);
      // Default initial mock cart items so user immediately sees populated UI like the screenshot
      return [
        {
          uniqueKey: 'aethelgard-chronometer-01-Matte Black Titanium-Milanese Mesh',
          product: {
            id: 'aethelgard-chronometer-01',
            name: 'The Horizon Automatic Chronograph',
            subtitle: 'Calibre Valjoux 7750',
            price: 480.00,
            originalPrice: 600.00,
            images: [
              'https://lh3.googleusercontent.com/aida-public/AB6AXuDS6OJwWYs_MxgTVZR_HDbctxys7ANwDC6Xut2RvFlfxCPC-pxiu-7slmRvAj3wibMRdqPXTR3Zo8n8-iWMY9uJOzuqXrcNMtnPHkRF-w3ofKGFLKfl-TphTRTiNx_gW9nE3cBM3hQ4ngKBQIZi4jAVbZjZEOOVFNwSGXrOURGDSl56CsR5DyDK5KXuc6RBncL_ZEhJgi3YkkTECR8zKvXeaiX6JFj3r6zgigEy2BJ1voRhkj8TaiWh'
            ],
            badge: 'Limited Edition'
          },
          quantity: 1,
          selectedColor: 'Matte Black Titanium',
          selectedSize: 'Milanese Mesh'
        },
        {
          uniqueKey: 'travertine-foldover-pouch-Raw Alabaster-Medium Pouch',
          product: {
            id: 'travertine-foldover-pouch',
            name: 'Travertine Foldover Pouch',
            subtitle: 'Raw Alabaster Calfskin',
            price: 240.00,
            originalPrice: 280.00,
            images: [
              'https://lh3.googleusercontent.com/aida-public/AB6AXuBUnUKx5zxp-aArvDKnNjz7RAuDTMyDkwEmtC6d-xXLX26hhuE7KOpX7KEc8323p0m8xpNPBDVD3wh3ase94uQ7LWvrG8nV1vthrkvZLflMScCWPlHKujlmgpf3gw0UWxRswLn7y_tBTmteU-eds_7TMftvIiA9R6-EAjQTgihXdAEFx7vzppVTFx3shT-IK2ZTdRMtEFwJ-3iIoL80tgMlFey8wBNFo5Fj3gxiNnmtooeIwaWuePQu'
            ],
            badge: 'Atelier Core'
          },
          quantity: 1,
          selectedColor: 'Raw Alabaster',
          selectedSize: 'Medium Pouch'
        }
      ];
    } catch {
      return [];
    }
  });

  const [couponCode, setCouponCode] = useState(() => {
    try {
      return localStorage.getItem('luxecart_coupon') || 'LUXE24';
    } catch {
      return 'LUXE24';
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  // Persist cart items
  useEffect(() => {
    try {
      localStorage.setItem('luxecart_cart', JSON.stringify(items));
    } catch (e) {
      console.warn('Failed to save cart to localStorage:', e);
    }
  }, [items]);

  // Persist coupon code
  useEffect(() => {
    try {
      if (couponCode) {
        localStorage.setItem('luxecart_coupon', couponCode);
      } else {
        localStorage.removeItem('luxecart_coupon');
      }
    } catch (e) {
      console.warn('Failed to save coupon to localStorage:', e);
    }
  }, [couponCode]);

  const showToast = (title, message = '') => {
    setToastMessage({ title, message, id: Date.now() });
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const addToCart = (product, quantity = 1, selectedColor = null, selectedSize = null) => {
    const color = selectedColor || (product.colors && product.colors[0]?.name) || 'Default';
    const size = selectedSize || (product.sizes && product.sizes[0]?.label) || 'Standard';
    const uniqueKey = `${product.id}-${color}-${size}`;

    setItems(prevItems => {
      const existingIndex = prevItems.findIndex(i => i.uniqueKey === uniqueKey);
      if (existingIndex > -1) {
        const next = [...prevItems];
        next[existingIndex] = {
          ...next[existingIndex],
          quantity: next[existingIndex].quantity + quantity
        };
        return next;
      } else {
        return [
          ...prevItems,
          {
            uniqueKey,
            product,
            quantity,
            selectedColor: color,
            selectedSize: size
          }
        ];
      }
    });

    showToast('Added to Curation Bag', `${quantity}x ${product.name}`);
    setIsCartOpen(true);
  };

  const removeFromCart = (uniqueKey) => {
    setItems(prev => {
      const item = prev.find(i => i.uniqueKey === uniqueKey);
      if (item) {
        showToast('Removed from Bag', item.product.name);
      }
      return prev.filter(i => i.uniqueKey !== uniqueKey);
    });
  };

  const updateQuantity = (uniqueKey, delta) => {
    setItems(prev => {
      return prev.map(item => {
        if (item.uniqueKey === uniqueKey) {
          const newQty = item.quantity + delta;
          return newQty > 0 ? { ...item, quantity: newQty } : null;
        }
        return item;
      }).filter(Boolean);
    });
  };

  const clearCart = () => {
    setItems([]);
    showToast('Cart Cleared', 'All items have been removed.');
  };

  const applyCoupon = (code) => {
    const clean = code.trim().toUpperCase();
    if (PROMO_CODES[clean]) {
      setCouponCode(clean);
      showToast('Privilege Applied', `${clean}: ${PROMO_CODES[clean].description}`);
      return { success: true, message: PROMO_CODES[clean].description };
    }
    return { success: false, message: 'Invalid or expired privilege code.' };
  };

  const removeCoupon = () => {
    setCouponCode('');
    showToast('Privilege Removed', 'Discount removed from order.');
  };

  // Calculations
  const totalItemCount = items.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = items.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);

  const couponData = couponCode ? PROMO_CODES[couponCode] : null;
  const discountRate = couponData ? couponData.rate : 0;
  const discountAmount = subtotal * discountRate;
  const discountedSubtotal = Math.max(0, subtotal - discountAmount);

  const freeShippingThreshold = 150;
  const qualifiesForFreeShipping = subtotal >= freeShippingThreshold;
  const amountNeededForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);
  const shippingFee = qualifiesForFreeShipping || items.length === 0 ? 0 : 25;

  const taxRate = 0.08875;
  const taxAmount = discountedSubtotal * taxRate;
  const total = discountedSubtotal + shippingFee + taxAmount;

  return (
    <CartContext.Provider
      value={{
        items,
        totalItemCount,
        subtotal,
        discountRate,
        discountAmount,
        discountedSubtotal,
        shippingFee,
        taxAmount,
        taxRate,
        total,
        freeShippingThreshold,
        qualifiesForFreeShipping,
        amountNeededForFreeShipping,
        couponCode,
        couponData,
        applyCoupon,
        removeCoupon,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        isCartOpen,
        setIsCartOpen,
        openCart: () => setIsCartOpen(true),
        closeCart: () => setIsCartOpen(false),
        toastMessage,
        showToast,
        hideToast: () => setToastMessage(null)
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
