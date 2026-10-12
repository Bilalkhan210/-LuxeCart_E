import React, { createContext, useContext, useState, useEffect } from 'react';
import { useCart } from './CartContext.jsx';

const WishlistContext = createContext();

export function WishlistProvider({ children }) {
  const { addToCart, showToast } = useCart();
  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem('luxecart_wishlist');
      if (saved) return JSON.parse(saved);
      // Pre-seed a couple of saved pieces for demo convenience
      return [
        {
          id: 'the-soren-courier-bag',
          name: 'The Soren Courier Bag',
          subtitle: 'Tuscan Vegetable Leather',
          price: 890.00,
          originalPrice: 1050.00,
          rating: 4.9,
          badge: 'Bestseller',
          images: [
            'https://lh3.googleusercontent.com/aida-public/AB6AXuACGIR5lA4WTfLvQ5CodUrUIXV1i-LqM6SrwPZabQ05ydhwhceLkOMpfoPFzH0DOH_An0C_ImTeCoZu-gwUsOPyNxAZf1G2ErIBrObS6A7AdIl_5pqNPELZ2OJED1LHei2qX0PDohPEelCGs8mh4DVSH4rHgtcOMSfxTaR_EFaUUYNFN_raXYdkfmdeF91qWXTkayKR4dD3CpewXuqzdaiJbipZXihWxLDB-aBK3yHYXkodEccyAmj1'
          ],
          category: 'leather'
        },
        {
          id: 'sora-resonance-pebble',
          name: 'Sora Resonance Pebble',
          subtitle: 'Basalt Ceramic Wireless Speaker',
          price: 290.00,
          originalPrice: 340.00,
          rating: 4.9,
          badge: 'New Arrival',
          images: [
            'https://lh3.googleusercontent.com/aida-public/AB6AXuAdYHx76F7FIpda0bkddtXJ27YfbgkheJsrcHepkfnNkXWDZJ5fWG-s_djGR3hqJS3plF5gvO65X-rIDIeTP9aKwPqh3gN-wgVO-JpmRY2g0_xVqUjU6WNvUfgOFGZmJOltF2CEJ-RIbm29TmhnP_NNaY9g25CE3lm1L1QxMTrMyNOSxO7imAFNt3qniE6L0LUmOGUJDYCXgGGsVM9kAZLc1fmNr7-R8MHJBqVR5dRJ6BlugZndH5OE'
          ],
          category: 'audio'
        }
      ];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('luxecart_wishlist', JSON.stringify(wishlist));
    } catch (e) {
      console.warn('Failed to save wishlist to localStorage:', e);
    }
  }, [wishlist]);

  const isInWishlist = (productId) => {
    return wishlist.some(item => item.id === productId);
  };

  const addToWishlist = (product) => {
    if (!isInWishlist(product.id)) {
      setWishlist(prev => [...prev, product]);
      showToast('Saved to Wishlist', product.name);
    }
  };

  const removeFromWishlist = (productId) => {
    const item = wishlist.find(i => i.id === productId);
    setWishlist(prev => prev.filter(i => i.id !== productId));
    if (item) {
      showToast('Removed from Wishlist', item.name);
    }
  };

  const toggleWishlist = (product) => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const moveToCart = (product) => {
    addToCart(product, 1);
    removeFromWishlist(product.id);
    showToast('Moved to Curation Bag', product.name);
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        wishlistCount: wishlist.length,
        isInWishlist,
        addToWishlist,
        removeFromWishlist,
        toggleWishlist,
        moveToCart
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
}
