import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem('luxecart_user');
      if (saved) return JSON.parse(saved);
      // Default demo logged-in user so profile and order history work smoothly out of the box!
      return {
        name: "Alexandra Vane",
        email: "alexandra.vane@atelier-vane.com",
        phone: "+1 (555) 234-8901",
        tier: "VIP Atelier Circle",
        memberSince: "November 2023",
        shippingAddress: {
          recipient: "Alexandra Vane",
          street: "742 Evergreen Terrace, Apt 4B",
          city: "New York",
          state: "NY",
          zip: "10021",
          country: "United States"
        }
      };
    } catch {
      return null;
    }
  });

  const [orders, setOrders] = useState(() => {
    try {
      const saved = localStorage.getItem('luxecart_orders');
      if (saved) return JSON.parse(saved);
      return [
        {
          id: "LC-94821",
          date: "Oct 10, 2024",
          status: "In Transit",
          trackingNumber: "DHL-EXP-88492019US",
          total: 684.82,
          deliveryEstimate: "Tomorrow by 4:00 PM",
          items: [
            {
              id: "aethelgard-chronometer-01",
              name: "The Horizon Automatic Chronograph",
              price: 480.00,
              quantity: 1,
              spec: "Matte Black Titanium • Milanese Mesh",
              image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDS6OJwWYs_MxgTVZR_HDbctxys7ANwDC6Xut2RvFlfxCPC-pxiu-7slmRvAj3wibMRdqPXTR3Zo8n8-iWMY9uJOzuqXrcNMtnPHkRF-w3ofKGFLKfl-TphTRTiNx_gW9nE3cBM3hQ4ngKBQIZi4jAVbZjZEOOVFNwSGXrOURGDSl56CsR5DyDK5KXuc6RBncL_ZEhJgi3YkkTECR8zKvXeaiX6JFj3r6zgigEy2BJ1voRhkj8TaiWh"
            },
            {
              id: "travertine-foldover-pouch",
              name: "Travertine Foldover Pouch",
              price: 240.00,
              quantity: 1,
              spec: "Raw Alabaster • Full-Grain Leather",
              image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBUnUKx5zxp-aArvDKnNjz7RAuDTMyDkwEmtC6d-xXLX26hhuE7KOpX7KEc8323p0m8xpNPBDVD3wh3ase94uQ7LWvrG8nV1vthrkvZLflMScCWPlHKujlmgpf3gw0UWxRswLn7y_tBTmteU-eds_7TMftvIiA9R6-EAjQTgihXdAEFx7vzppVTFx3shT-IK2ZTdRMtEFwJ-3iIoL80tgMlFey8wBNFo5Fj3gxiNnmtooeIwaWuePQu"
            }
          ]
        },
        {
          id: "LC-88102",
          date: "Aug 14, 2024",
          status: "Delivered",
          trackingNumber: "DHL-EXP-77291044US",
          total: 520.00,
          deliveryEstimate: "Delivered on Aug 16, 2024",
          items: [
            {
              id: "monolith-ribbed-cardigan",
              name: "Monolith Ribbed Cardigan",
              price: 520.00,
              quantity: 1,
              spec: "Charcoal Slate • Size L",
              image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD5IU0rtk3iaYV68tu5e5PRtRoyFKGHFUPncwwuXZ9TVdf1CbFKPX6PS7tnJjKbrWDhascPNedQg6xl_X1Lx0i1ORuhpOFO7zbxDerfmMcvYP17DKKoh83NylurbECeTJMPGaISxdcVWsadUSEDNBKN4FTAMsV-VC85TAxHUQBrVJpHpfwWkUjvJ7wM7fHgXq3YENN3N36UQZYPyuzklj7lYrmZWg5gGnS9OharT0MeInv7EWSLKrzy"
            }
          ]
        }
      ];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      if (user) {
        localStorage.setItem('luxecart_user', JSON.stringify(user));
      } else {
        localStorage.removeItem('luxecart_user');
      }
    } catch (e) {
      console.warn('Failed to save user:', e);
    }
  }, [user]);

  useEffect(() => {
    try {
      localStorage.setItem('luxecart_orders', JSON.stringify(orders));
    } catch (e) {
      console.warn('Failed to save orders:', e);
    }
  }, [orders]);

  const login = (email, password) => {
    const newUser = {
      name: email.split('@')[0].replace(/[._]/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
      email,
      phone: "+1 (555) 234-8901",
      tier: "VIP Atelier Circle",
      memberSince: "October 2024",
      shippingAddress: {
        recipient: email.split('@')[0],
        street: "742 Evergreen Terrace, Apt 4B",
        city: "New York",
        state: "NY",
        zip: "10021",
        country: "United States"
      }
    };
    setUser(newUser);
    return { success: true };
  };

  const register = (name, email, password) => {
    const newUser = {
      name,
      email,
      phone: "+1 (555) 000-0000",
      tier: "Atelier Initiate",
      memberSince: "Just now",
      shippingAddress: {
        recipient: name,
        street: "100 Hudson Street",
        city: "New York",
        state: "NY",
        zip: "10013",
        country: "United States"
      }
    };
    setUser(newUser);
    return { success: true };
  };

  const logout = () => {
    setUser(null);
  };

  const updateProfile = (updates) => {
    setUser(prev => ({ ...prev, ...updates }));
  };

  const addOrder = (orderData) => {
    const newOrder = {
      id: `LC-${Math.floor(10000 + Math.random() * 90000)}`,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      status: "Processing",
      trackingNumber: `DHL-EXP-${Math.floor(10000000 + Math.random() * 90000000)}US`,
      deliveryEstimate: "Expected in 2-3 business days",
      ...orderData
    };
    setOrders(prev => [newOrder, ...prev]);
    return newOrder;
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        orders,
        login,
        register,
        logout,
        updateProfile,
        addOrder
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
