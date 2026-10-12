import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  User,
  Package,
  MapPin,
  Settings,
  LogOut,
  Truck,
  CheckCircle,
  ExternalLink,
  ShieldCheck,
  Edit2,
  Save
} from 'lucide-react';
import { useAuth } from '../context/AuthContext.jsx';

export default function ProfilePage() {
  const { user, isAuthenticated, orders, logout, updateProfile } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('orders'); // 'orders', 'address', 'settings'

  // Editable profile states
  const [name, setName] = useState(user?.name || 'Alexandra Vane');
  const [phone, setPhone] = useState(user?.phone || '+1 (555) 234-8901');
  const [street, setStreet] = useState(user?.shippingAddress?.street || '742 Evergreen Terrace, Apt 4B');
  const [city, setCity] = useState(user?.shippingAddress?.city || 'New York');
  const [state, setState] = useState(user?.shippingAddress?.state || 'NY');
  const [zip, setZip] = useState(user?.shippingAddress?.zip || '10021');
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isAuthenticated) {
    return (
      <div className="w-full pt-32 pb-24 bg-[#f8f9fa] dark:bg-zinc-950 min-h-screen flex items-center justify-center">
        <div className="bg-white dark:bg-zinc-900 p-10 rounded-3xl text-center space-y-4 max-w-sm border border-black/5 dark:border-white/5 shadow-xl">
          <div className="w-16 h-16 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center mx-auto text-zinc-400">
            <User className="w-8 h-8" />
          </div>
          <h2 className="font-headline text-xl font-bold text-black dark:text-white">
            Client Sign-In Required
          </h2>
          <p className="text-xs text-zinc-500">
            Please authenticate to inspect your acquisition archives and concierge reservations.
          </p>
          <Link
            to="/login"
            className="block py-3.5 rounded-xl bg-black dark:bg-white text-white dark:text-black font-semibold text-xs uppercase tracking-wider"
          >
            Go to Sign In
          </Link>
        </div>
      </div>
    );
  }

  const handleSaveProfile = (e) => {
    e.preventDefault();
    updateProfile({
      name,
      phone,
      shippingAddress: {
        recipient: name,
        street,
        city,
        state,
        zip,
        country: "United States"
      }
    });
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2500);
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="w-full pt-28 pb-24 bg-[#f8f9fa] dark:bg-zinc-950 min-h-screen transition-colors">
      <div className="max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-16">
        
        {/* Profile Banner */}
        <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 sm:p-10 shadow-sm border border-black/5 dark:border-white/5 mb-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#0F1115] text-white flex items-center justify-center font-headline text-2xl font-bold shadow-md">
              {user.name.charAt(0)}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] uppercase tracking-widest text-[#4b41e1] dark:text-[#a5b4fc] font-bold">
                  {user.tier}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#4b41e1]" />
                <span className="text-xs text-zinc-400">Since {user.memberSince}</span>
              </div>
              <h1 className="font-headline text-2xl sm:text-3xl font-bold text-black dark:text-white mt-1">
                {user.name}
              </h1>
              <p className="text-xs text-zinc-500">{user.email}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/products"
              className="px-5 py-2.5 rounded-xl bg-[#f3f4f5] dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-black dark:text-white text-xs font-semibold uppercase tracking-wider transition-colors"
            >
              Browse Catalog
            </Link>
            <button
              onClick={handleLogout}
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-red-50 dark:bg-red-950/40 text-red-600 dark:text-red-400 hover:bg-red-100 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
            >
              <LogOut className="w-4 h-4" />
              <span>Sign Out</span>
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 pb-6 border-b border-black/5 dark:border-white/10 mb-8 overflow-x-auto">
          {[
            { id: 'orders', label: 'Acquisition & Order History', icon: Package },
            { id: 'address', label: 'Primary Delivery Vault', icon: MapPin },
            { id: 'settings', label: 'Security & Preferences', icon: Settings }
          ].map(tab => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-xs font-semibold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-black dark:bg-white text-white dark:text-black shadow-sm'
                    : 'bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white border border-black/5 dark:border-white/5'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab 1: Orders History */}
        {activeTab === 'orders' && (
          <div className="space-y-6">
            {orders.length === 0 ? (
              <div className="bg-white dark:bg-zinc-900 rounded-3xl p-12 text-center text-zinc-400 text-xs border border-black/5 dark:border-white/5">
                No past orders recorded.
              </div>
            ) : (
              orders.map(order => (
                <div
                  key={order.id}
                  className="bg-white dark:bg-zinc-900 rounded-3xl p-6 sm:p-8 shadow-sm border border-black/5 dark:border-white/5 space-y-6"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-black/5 dark:border-white/5 gap-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-headline font-bold text-base text-black dark:text-white">
                          Order #{order.id}
                        </span>
                        <span className="text-xs text-zinc-400">• {order.date}</span>
                      </div>
                      <p className="text-xs text-zinc-500 font-mono mt-0.5">
                        Tracking: {order.trackingNumber}
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                          order.status === 'Delivered'
                            ? 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300'
                            : 'bg-[#e2dfff] dark:bg-[#201d4a] text-[#4b41e1] dark:text-[#c3c0ff]'
                        }`}
                      >
                        {order.status}
                      </span>
                      <span className="font-headline font-bold text-base text-black dark:text-white">
                        ${order.total.toFixed(2)}
                      </span>
                    </div>
                  </div>

                  {/* Items Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {order.items.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3.5 p-3 rounded-2xl bg-[#f8f9fa] dark:bg-zinc-800/60"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-14 h-16 rounded-xl object-cover bg-zinc-200 flex-shrink-0"
                        />
                        <div className="min-w-0 flex-1">
                          <Link
                            to={`/product/${item.id}`}
                            className="font-headline font-semibold text-xs text-black dark:text-white hover:text-[#4b41e1] truncate block"
                          >
                            {item.name}
                          </Link>
                          <p className="text-[11px] text-zinc-500">{item.spec}</p>
                          <p className="text-xs font-bold text-black dark:text-white mt-0.5">
                            {item.quantity} × ${item.price.toFixed(2)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-zinc-500 pt-2 border-t border-black/5 dark:border-white/5 gap-2">
                    <span className="flex items-center gap-1.5">
                      <Truck className="w-4 h-4 text-[#4b41e1]" />
                      <span>{order.deliveryEstimate}</span>
                    </span>
                    <button
                      onClick={() => alert(`Tracking ${order.trackingNumber}: Package dispatched via DHL Express Secure Vault. On schedule.`)}
                      className="text-black dark:text-white font-bold uppercase hover:underline text-[11px] self-start sm:self-auto cursor-pointer"
                    >
                      Track Package Dispatch ↗
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        )}

        {/* Tab 2: Saved Address */}
        {activeTab === 'address' && (
          <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 sm:p-8 shadow-sm border border-black/5 dark:border-white/5 max-w-2xl space-y-6">
            <div className="pb-3 border-b border-black/5 dark:border-white/5">
              <span className="text-[10px] uppercase tracking-widest text-[#4b41e1] font-bold">
                Courier Destination
              </span>
              <h2 className="font-headline text-xl font-bold text-black dark:text-white">
                Primary Residential Dispatch Address
              </h2>
            </div>

            <form onSubmit={handleSaveProfile} className="space-y-4">
              <div className="space-y-1">
                <label className="text-[11px] uppercase font-bold text-zinc-500">Recipient Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-[#f8f9fa] dark:bg-zinc-800 px-4 py-3 rounded-xl text-xs text-black dark:text-white border border-black/5 dark:border-white/10 focus:outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[11px] uppercase font-bold text-zinc-500">Street &amp; Penthouse</label>
                <input
                  type="text"
                  value={street}
                  onChange={(e) => setStreet(e.target.value)}
                  className="w-full bg-[#f8f9fa] dark:bg-zinc-800 px-4 py-3 rounded-xl text-xs text-black dark:text-white border border-black/5 dark:border-white/10 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div className="space-y-1">
                  <label className="text-[11px] uppercase font-bold text-zinc-500">City</label>
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full bg-[#f8f9fa] dark:bg-zinc-800 px-4 py-3 rounded-xl text-xs text-black dark:text-white border border-black/5 dark:border-white/10 focus:outline-none"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[11px] uppercase font-bold text-zinc-500">State</label>
                  <input
                    type="text"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    className="w-full bg-[#f8f9fa] dark:bg-zinc-800 px-4 py-3 rounded-xl text-xs text-black dark:text-white border border-black/5 dark:border-white/10 focus:outline-none"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[11px] uppercase font-bold text-zinc-500">ZIP</label>
                  <input
                    type="text"
                    value={zip}
                    onChange={(e) => setZip(e.target.value)}
                    className="w-full bg-[#f8f9fa] dark:bg-zinc-800 px-4 py-3 rounded-xl text-xs text-black dark:text-white border border-black/5 dark:border-white/10 focus:outline-none"
                  />
                </div>
              </div>

              {savedSuccess && (
                <p className="text-xs text-emerald-600 font-bold">Address saved successfully.</p>
              )}

              <button
                type="submit"
                className="px-6 py-3.5 rounded-xl bg-black dark:bg-white text-white dark:text-black font-semibold text-xs uppercase tracking-wider hover:opacity-90 transition-opacity cursor-pointer"
              >
                Save Dispatch Address
              </button>
            </form>
          </div>
        )}

        {/* Tab 3: Security & Preferences */}
        {activeTab === 'settings' && (
          <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 sm:p-8 shadow-sm border border-black/5 dark:border-white/5 max-w-2xl space-y-6">
            <div className="pb-3 border-b border-black/5 dark:border-white/5">
              <span className="text-[10px] uppercase tracking-widest text-[#4b41e1] font-bold">
                Client Vault Guard
              </span>
              <h2 className="font-headline text-xl font-bold text-black dark:text-white">
                Account Security &amp; Concierge Preferences
              </h2>
            </div>

            <div className="space-y-4 text-xs text-zinc-600 dark:text-zinc-300">
              <div className="flex items-center justify-between p-4 rounded-2xl bg-[#f8f9fa] dark:bg-zinc-800/60">
                <div>
                  <h4 className="font-bold text-black dark:text-white">Two-Factor Authentication (2FA)</h4>
                  <p className="text-[11px] text-zinc-500">SMS / Authenticator biometric required on order confirmation.</p>
                </div>
                <span className="text-xs font-bold text-emerald-600">Enabled</span>
              </div>

              <div className="flex items-center justify-between p-4 rounded-2xl bg-[#f8f9fa] dark:bg-zinc-800/60">
                <div>
                  <h4 className="font-bold text-black dark:text-white">Early Release Telegram / SMS Alerts</h4>
                  <p className="text-[11px] text-zinc-500">Receive 24-hour advance access to numbered horology drops.</p>
                </div>
                <span className="text-xs font-bold text-[#4b41e1]">Active</span>
              </div>

              <div className="flex items-center justify-between p-4 rounded-2xl bg-[#f8f9fa] dark:bg-zinc-800/60">
                <div>
                  <h4 className="font-bold text-black dark:text-white">Private Concierge Dedicated Advisor</h4>
                  <p className="text-[11px] text-zinc-500">Assigned: Jean-Luc Fontaine (Geneva Atelier)</p>
                </div>
                <Link to="/contact" className="text-xs font-bold text-black dark:text-white underline">
                  Message
                </Link>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
