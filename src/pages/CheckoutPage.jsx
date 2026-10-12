import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  ShieldCheck,
  CheckCircle2,
  Lock,
  Truck,
  CreditCard,
  Wallet,
  AlertCircle,
  Printer,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { useCart } from '../context/CartContext.jsx';
import { useAuth } from '../context/AuthContext.jsx';

export default function CheckoutPage() {
  const {
    items,
    totalItemCount,
    subtotal,
    discountAmount,
    couponCode,
    taxAmount,
    clearCart
  } = useCart();
  const { user, addOrder } = useAuth();
  const navigate = useNavigate();

  // Form states with realistic default demo data
  const [email, setEmail] = useState(user?.email || 'alexandra.vane@atelier-vane.com');
  const [phone, setPhone] = useState(user?.phone || '+1 (555) 234-8901');
  const [recipient, setRecipient] = useState(user?.name || 'Alexandra Vane');
  const [street, setStreet] = useState(user?.shippingAddress?.street || '742 Evergreen Terrace, Apt 4B');
  const [city, setCity] = useState(user?.shippingAddress?.city || 'New York');
  const [state, setState] = useState(user?.shippingAddress?.state || 'NY');
  const [zip, setZip] = useState(user?.shippingAddress?.zip || '10021');
  const [country, setCountry] = useState('US');

  // Delivery method
  const [deliveryMethod, setDeliveryMethod] = useState('free'); // 'free' or 'express'
  const deliveryFee = deliveryMethod === 'express' ? 18.00 : 0.00;

  // Payment tab
  const [paymentTab, setPaymentTab] = useState('card'); // 'card', 'apple', 'paypal'
  const [cardNumber, setCardNumber] = useState('4242 •••• •••• 4242');
  const [cardExp, setCardExp] = useState('12 / 28');
  const [cardCvc, setCardCvc] = useState('888');
  const [cardName, setCardName] = useState('ALEXANDRA VANE');

  // Form errors & submission
  const [errors, setErrors] = useState({});
  const [isProcessing, setIsProcessing] = useState(false);
  const [completedOrder, setCompletedOrder] = useState(null);

  // Computed total
  const finalTotal = subtotal - discountAmount + deliveryFee + taxAmount;

  const validate = () => {
    const errs = {};
    if (!email || !email.includes('@')) errs.email = 'Valid email address required';
    if (!phone) errs.phone = 'Mobile phone required';
    if (!recipient) errs.recipient = 'Recipient name required';
    if (!street) errs.street = 'Street address required';
    if (!city) errs.city = 'City required';
    if (!zip) errs.zip = 'ZIP code required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleCompletePurchase = (e) => {
    e.preventDefault();
    if (!validate()) {
      window.scrollTo({ top: 200, behavior: 'smooth' });
      return;
    }

    setIsProcessing(true);
    setTimeout(() => {
      const orderRecord = addOrder({
        items: items.map(i => ({
          id: i.product.id,
          name: i.product.name,
          price: i.product.price,
          quantity: i.quantity,
          spec: `${i.selectedColor} • ${i.selectedSize}`,
          image: i.product.images[0]
        })),
        total: finalTotal,
        shippingAddress: { recipient, street, city, state, zip, country },
        deliveryMethod: deliveryMethod === 'express' ? 'Express White-Glove' : 'Standard Insured'
      });

      setCompletedOrder(orderRecord);
      clearCart();
      setIsProcessing(false);
    }, 1200);
  };

  return (
    <div className="w-full pt-28 pb-24 bg-[#f8f9fa] dark:bg-zinc-950 min-h-screen transition-colors">
      <div className="max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-16">
        
        {/* Stepper Header */}
        <section className="mb-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 gap-2">
            <div className="flex items-center gap-2">
              <span className="text-[10px] uppercase tracking-widest text-[#4b41e1] dark:text-[#a5b4fc] font-bold">
                Checkout Sequence
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#4b41e1]" />
              <span className="text-xs text-[#76777b] dark:text-zinc-400 font-semibold">
                Direct Express Flow
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-[#76777b] dark:text-zinc-400">
              <ShieldCheck className="w-4 h-4 text-[#4b41e1] dark:text-[#a5b4fc]" />
              <span>256-Bit Encrypted Secure Enclave</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 bg-[#edeeef] dark:bg-zinc-900 p-1.5 rounded-2xl">
            <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white dark:bg-zinc-800/60 shadow-sm opacity-80">
              <div className="w-7 h-7 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xs">
                ✓
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-bold">
                  Verified
                </span>
                <span className="font-headline font-semibold text-xs text-black dark:text-white">
                  Curated Bag
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white dark:bg-zinc-800 shadow-sm">
              <div className="w-7 h-7 rounded-full bg-black dark:bg-white text-white dark:text-black flex items-center justify-center font-bold text-xs">
                2
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-wider text-[#4b41e1] dark:text-[#a5b4fc] font-bold">
                  Active Stage
                </span>
                <span className="font-headline font-semibold text-xs text-black dark:text-white">
                  Shipping &amp; Courier Details
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white dark:bg-zinc-800 shadow-sm">
              <div className="w-7 h-7 rounded-full bg-black dark:bg-white text-white dark:text-black flex items-center justify-center font-bold text-xs">
                3
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-wider text-[#4b41e1] dark:text-[#a5b4fc] font-bold">
                  Verification
                </span>
                <span className="font-headline font-semibold text-xs text-black dark:text-white">
                  Payment Instrument
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Form Grid: 8 Cols Inputs + 4 Cols Sticky Order Summary */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* LEFT 8 COLUMNS: Form */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            
            {/* Customer Contact Card */}
            <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 sm:p-8 shadow-sm border border-black/5 dark:border-white/5 space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-black/5 dark:border-white/5">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#4b41e1] dark:text-[#a5b4fc] font-bold">
                    Primary Contact
                  </span>
                  <h2 className="font-headline text-xl font-bold text-black dark:text-white">
                    Client Identification &amp; Dispatch
                  </h2>
                </div>
                <span className="text-xs text-zinc-400">Sandbox Verified</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[11px] uppercase font-bold tracking-wider text-zinc-600 dark:text-zinc-300">
                    Contact Email *
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#f8f9fa] dark:bg-zinc-800 px-4 py-3 rounded-xl text-xs text-black dark:text-white border border-black/5 dark:border-white/10 focus:outline-none focus:bg-white dark:focus:bg-zinc-700"
                  />
                  {errors.email && <p className="text-[10px] text-red-500 font-bold">{errors.email}</p>}
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] uppercase font-bold tracking-wider text-zinc-600 dark:text-zinc-300">
                    Mobile Phone (For Courier Updates) *
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-[#f8f9fa] dark:bg-zinc-800 px-4 py-3 rounded-xl text-xs text-black dark:text-white border border-black/5 dark:border-white/10 focus:outline-none focus:bg-white dark:focus:bg-zinc-700"
                  />
                  {errors.phone && <p className="text-[10px] text-red-500 font-bold">{errors.phone}</p>}
                </div>
              </div>
            </div>

            {/* Shipping Address Card */}
            <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 sm:p-8 shadow-sm border border-black/5 dark:border-white/5 space-y-6">
              <div className="pb-3 border-b border-black/5 dark:border-white/5">
                <span className="text-[10px] uppercase tracking-widest text-[#4b41e1] dark:text-[#a5b4fc] font-bold">
                  Destination Spec
                </span>
                <h2 className="font-headline text-xl font-bold text-black dark:text-white">
                  Vault Shipping Address
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2 space-y-1">
                  <label className="text-[11px] uppercase font-bold tracking-wider text-zinc-600 dark:text-zinc-300">
                    Recipient Full Name *
                  </label>
                  <input
                    type="text"
                    value={recipient}
                    onChange={(e) => setRecipient(e.target.value)}
                    className="w-full bg-[#f8f9fa] dark:bg-zinc-800 px-4 py-3 rounded-xl text-xs text-black dark:text-white border border-black/5 dark:border-white/10 focus:outline-none"
                  />
                  {errors.recipient && <p className="text-[10px] text-red-500 font-bold">{errors.recipient}</p>}
                </div>

                <div className="md:col-span-2 space-y-1">
                  <label className="text-[11px] uppercase font-bold tracking-wider text-zinc-600 dark:text-zinc-300">
                    Street Address &amp; Penthouse / Suite *
                  </label>
                  <input
                    type="text"
                    value={street}
                    onChange={(e) => setStreet(e.target.value)}
                    className="w-full bg-[#f8f9fa] dark:bg-zinc-800 px-4 py-3 rounded-xl text-xs text-black dark:text-white border border-black/5 dark:border-white/10 focus:outline-none"
                  />
                  {errors.street && <p className="text-[10px] text-red-500 font-bold">{errors.street}</p>}
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] uppercase font-bold tracking-wider text-zinc-600 dark:text-zinc-300">
                    City *
                  </label>
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full bg-[#f8f9fa] dark:bg-zinc-800 px-4 py-3 rounded-xl text-xs text-black dark:text-white border border-black/5 dark:border-white/10 focus:outline-none"
                  />
                  {errors.city && <p className="text-[10px] text-red-500 font-bold">{errors.city}</p>}
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="space-y-1">
                    <label className="text-[11px] uppercase font-bold tracking-wider text-zinc-600 dark:text-zinc-300">
                      State
                    </label>
                    <input
                      type="text"
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                      className="w-full bg-[#f8f9fa] dark:bg-zinc-800 px-4 py-3 rounded-xl text-xs text-black dark:text-white border border-black/5 dark:border-white/10 focus:outline-none"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[11px] uppercase font-bold tracking-wider text-zinc-600 dark:text-zinc-300">
                      ZIP *
                    </label>
                    <input
                      type="text"
                      value={zip}
                      onChange={(e) => setZip(e.target.value)}
                      className="w-full bg-[#f8f9fa] dark:bg-zinc-800 px-4 py-3 rounded-xl text-xs text-black dark:text-white border border-black/5 dark:border-white/10 focus:outline-none"
                    />
                    {errors.zip && <p className="text-[10px] text-red-500 font-bold">{errors.zip}</p>}
                  </div>
                </div>

                <div className="md:col-span-2 space-y-1">
                  <label className="text-[11px] uppercase font-bold tracking-wider text-zinc-600 dark:text-zinc-300">
                    Country / Territory
                  </label>
                  <select
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="w-full bg-[#f8f9fa] dark:bg-zinc-800 px-4 py-3 rounded-xl text-xs text-black dark:text-white border border-black/5 dark:border-white/10 focus:outline-none cursor-pointer"
                  >
                    <option value="US">United States (Continental &amp; Metro)</option>
                    <option value="UK">United Kingdom</option>
                    <option value="FR">France</option>
                    <option value="CH">Switzerland</option>
                    <option value="JP">Japan</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Delivery Method Selection */}
            <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 sm:p-8 shadow-sm border border-black/5 dark:border-white/5 space-y-4">
              <div className="pb-2 border-b border-black/5 dark:border-white/5">
                <span className="text-[10px] uppercase tracking-widest text-[#4b41e1] dark:text-[#a5b4fc] font-bold">
                  Logistics Dispatch
                </span>
                <h2 className="font-headline text-xl font-bold text-black dark:text-white">
                  Delivery Speed &amp; White-Glove Service
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Standard Free Option */}
                <div
                  onClick={() => setDeliveryMethod('free')}
                  className={`p-5 rounded-2xl cursor-pointer transition-all border ${
                    deliveryMethod === 'free'
                      ? 'bg-[#f8f9fa] dark:bg-zinc-800/80 border-[#4b41e1] shadow-sm'
                      : 'bg-white dark:bg-zinc-900 border-black/5 dark:border-white/5 hover:border-black/20'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2.5">
                      <div className={`w-4 h-4 rounded-full flex items-center justify-center border ${
                        deliveryMethod === 'free' ? 'border-[#4b41e1] bg-[#4b41e1]' : 'border-zinc-400'
                      }`}>
                        {deliveryMethod === 'free' && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                      </div>
                      <span className="font-headline font-bold text-sm text-black dark:text-white">
                        Standard Insured
                      </span>
                    </div>
                    <span className="font-bold text-xs text-[#4b41e1]">FREE</span>
                  </div>
                  <p className="text-[11px] text-zinc-500 pl-6">
                    Signature delivery via carbon-neutral parcel logistics. 3-5 business days.
                  </p>
                </div>

                {/* Express Option */}
                <div
                  onClick={() => setDeliveryMethod('express')}
                  className={`p-5 rounded-2xl cursor-pointer transition-all border ${
                    deliveryMethod === 'express'
                      ? 'bg-[#f8f9fa] dark:bg-zinc-800/80 border-[#4b41e1] shadow-sm'
                      : 'bg-white dark:bg-zinc-900 border-black/5 dark:border-white/5 hover:border-black/20'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2.5">
                      <div className={`w-4 h-4 rounded-full flex items-center justify-center border ${
                        deliveryMethod === 'express' ? 'border-[#4b41e1] bg-[#4b41e1]' : 'border-zinc-400'
                      }`}>
                        {deliveryMethod === 'express' && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                      </div>
                      <span className="font-headline font-bold text-sm text-black dark:text-white">
                        Express White-Glove
                      </span>
                    </div>
                    <span className="font-bold text-xs text-black dark:text-white">$18.00</span>
                  </div>
                  <p className="text-[11px] text-zinc-500 pl-6">
                    Overnight priority courier dispatch with dedicated delivery window scheduling.
                  </p>
                </div>
              </div>
            </div>

            {/* Payment Method Tabs & Fields */}
            <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 sm:p-8 shadow-sm border border-black/5 dark:border-white/5 space-y-5">
              <div className="flex items-center justify-between pb-2 border-b border-black/5 dark:border-white/5">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#4b41e1] dark:text-[#a5b4fc] font-bold">
                    Financial Instrument
                  </span>
                  <h2 className="font-headline text-xl font-bold text-black dark:text-white">
                    Simulated Sandbox Payment
                  </h2>
                </div>
                <span className="text-[10px] text-zinc-400 uppercase font-semibold">Test Sandbox</span>
              </div>

              {/* 3 Tabs */}
              <div className="grid grid-cols-3 gap-2 bg-[#f3f4f5] dark:bg-zinc-800 p-1 rounded-xl">
                <button
                  type="button"
                  onClick={() => setPaymentTab('card')}
                  className={`py-2 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                    paymentTab === 'card'
                      ? 'bg-white dark:bg-zinc-900 text-black dark:text-white shadow-sm'
                      : 'text-zinc-500 hover:text-black dark:hover:text-white'
                  }`}
                >
                  <CreditCard className="w-4 h-4" />
                  <span>Credit Card</span>
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentTab('apple')}
                  className={`py-2 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                    paymentTab === 'apple'
                      ? 'bg-white dark:bg-zinc-900 text-black dark:text-white shadow-sm'
                      : 'text-zinc-500 hover:text-black dark:hover:text-white'
                  }`}
                >
                  <Wallet className="w-4 h-4" />
                  <span>Apple Pay</span>
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentTab('paypal')}
                  className={`py-2 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                    paymentTab === 'paypal'
                      ? 'bg-white dark:bg-zinc-900 text-black dark:text-white shadow-sm'
                      : 'text-zinc-500 hover:text-black dark:hover:text-white'
                  }`}
                >
                  <CreditCard className="w-4 h-4" />
                  <span>PayPal</span>
                </button>
              </div>

              {/* Panel: Credit Card */}
              {paymentTab === 'card' && (
                <div className="bg-[#f8f9fa] dark:bg-zinc-800/60 p-5 rounded-2xl space-y-4 border border-black/5 dark:border-white/5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[10px] uppercase font-bold text-zinc-400">Card Credentials</span>
                    <div className="flex gap-1.5 text-[10px] font-bold text-zinc-500 uppercase">
                      <span>Visa</span> • <span>Mastercard</span> • <span>Amex</span>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] uppercase font-bold tracking-wider text-zinc-500">
                      Card Number
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        className="w-full bg-white dark:bg-zinc-800 px-4 py-3 rounded-xl text-xs font-mono text-black dark:text-white border border-black/5 dark:border-white/10 focus:outline-none"
                      />
                      <Lock className="w-4 h-4 text-[#4b41e1] absolute right-3.5 top-1/2 -translate-y-1/2" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-[10px] uppercase font-bold tracking-wider text-zinc-500">
                        Expiration
                      </label>
                      <input
                        type="text"
                        value={cardExp}
                        onChange={(e) => setCardExp(e.target.value)}
                        className="w-full bg-white dark:bg-zinc-800 px-4 py-3 rounded-xl text-xs font-mono text-black dark:text-white border border-black/5 dark:border-white/10 focus:outline-none"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] uppercase font-bold tracking-wider text-zinc-500">
                        CVC Security
                      </label>
                      <input
                        type="text"
                        value={cardCvc}
                        onChange={(e) => setCardCvc(e.target.value)}
                        className="w-full bg-white dark:bg-zinc-800 px-4 py-3 rounded-xl text-xs font-mono text-black dark:text-white border border-black/5 dark:border-white/10 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] uppercase font-bold tracking-wider text-zinc-500">
                      Cardholder Name
                    </label>
                    <input
                      type="text"
                      value={cardName}
                      onChange={(e) => setCardName(e.target.value)}
                      className="w-full bg-white dark:bg-zinc-800 px-4 py-3 rounded-xl text-xs uppercase tracking-wider text-black dark:text-white border border-black/5 dark:border-white/10 focus:outline-none"
                    />
                  </div>
                </div>
              )}

              {paymentTab === 'apple' && (
                <div className="bg-[#f8f9fa] dark:bg-zinc-800/60 p-8 rounded-2xl text-center space-y-3">
                  <Wallet className="w-10 h-10 mx-auto text-black dark:text-white" />
                  <h4 className="font-headline font-bold text-sm text-black dark:text-white">
                    Apple Pay One-Touch Express
                  </h4>
                  <p className="text-xs text-zinc-500 max-w-sm mx-auto">
                    Biometric keychain authorization simulated. Ready to verify order upon confirmation.
                  </p>
                </div>
              )}

              {paymentTab === 'paypal' && (
                <div className="bg-[#f8f9fa] dark:bg-zinc-800/60 p-8 rounded-2xl text-center space-y-3">
                  <CreditCard className="w-10 h-10 mx-auto text-[#4b41e1]" />
                  <h4 className="font-headline font-bold text-sm text-black dark:text-white">
                    PayPal Instant Transfer
                  </h4>
                  <p className="text-xs text-zinc-500 max-w-sm mx-auto">
                    Simulated PayPal checkout channel configured with full buyer acquisition protection.
                  </p>
                </div>
              )}

              <div className="flex items-center gap-2 p-3 rounded-xl bg-[#edeeef] dark:bg-zinc-800 text-xs text-zinc-600 dark:text-zinc-300">
                <AlertCircle className="w-4 h-4 text-[#4b41e1] flex-shrink-0" />
                <span>
                  <strong>Demo Checkout Sandbox:</strong> No live charge will be made. Confirmed order will be saved to your local profile archives.
                </span>
              </div>
            </div>

          </div>

          {/* RIGHT 4 COLUMNS: Sticky Order Summary */}
          <div className="lg:col-span-4 flex flex-col gap-6 sticky top-28">
            <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 sm:p-8 shadow-xl border border-black/5 dark:border-white/5 space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-black/5 dark:border-white/5">
                <h3 className="font-headline font-bold text-lg text-black dark:text-white">
                  Order Summary
                </h3>
                <span className="text-xs font-bold text-zinc-400">
                  {totalItemCount} Items
                </span>
              </div>

              {/* Items Preview */}
              <div className="max-h-48 overflow-y-auto space-y-3 pr-1">
                {items.map(i => (
                  <div key={i.uniqueKey} className="flex items-center justify-between gap-3 text-xs">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <img src={i.product.images[0]} alt={i.product.name} className="w-10 h-12 rounded-lg object-cover bg-zinc-100 flex-shrink-0" />
                      <div className="min-w-0">
                        <p className="font-bold text-black dark:text-white truncate">{i.product.name}</p>
                        <p className="text-[11px] text-zinc-500">Qty: {i.quantity}</p>
                      </div>
                    </div>
                    <span className="font-bold text-black dark:text-white whitespace-nowrap">
                      ${(i.product.price * i.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>

              <div className="space-y-3 text-xs text-[#45474b] dark:text-zinc-300 pt-2 border-t border-black/5 dark:border-white/5">
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
                  <span>Courier Delivery</span>
                  <span className="font-bold text-black dark:text-white">
                    {deliveryFee === 0 ? 'Complimentary' : `$${deliveryFee.toFixed(2)}`}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>Estimated Tax (NYC 8.875%)</span>
                  <span className="font-bold text-black dark:text-white">${taxAmount.toFixed(2)}</span>
                </div>

                <div className="bg-[#f8f9fa] dark:bg-zinc-800/80 p-4 rounded-2xl flex items-baseline justify-between pt-3 border-t border-black/5 dark:border-white/5 text-black dark:text-white">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-zinc-400 block tracking-wider">
                      Total Payable
                    </span>
                    <span className="text-[11px] text-zinc-500">All duties included</span>
                  </div>
                  <div className="text-right">
                    <span className="font-headline text-2xl font-bold tracking-tight">
                      ${finalTotal.toFixed(2)}
                    </span>
                    <span className="text-[10px] text-zinc-400 uppercase font-mono block">USD</span>
                  </div>
                </div>
              </div>

              {/* Complete Purchase Button */}
              <button
                type="button"
                onClick={handleCompletePurchase}
                disabled={isProcessing}
                className="w-full py-4 rounded-xl bg-black dark:bg-white text-white dark:text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#4b41e1] dark:hover:bg-[#4b41e1] hover:text-white dark:hover:text-white transition-all shadow-xl cursor-pointer disabled:opacity-50"
              >
                {isProcessing ? (
                  <span>Securing Order Token...</span>
                ) : (
                  <>
                    <Lock className="w-4 h-4" />
                    <span>Complete Acquisition</span>
                  </>
                )}
              </button>

              <div className="grid grid-cols-3 gap-2 pt-1 text-center text-[10px] font-bold uppercase text-zinc-500">
                <div className="p-2 rounded-xl bg-[#f8f9fa] dark:bg-zinc-800">256-Bit SSL</div>
                <div className="p-2 rounded-xl bg-[#f8f9fa] dark:bg-zinc-800">30-Day Returns</div>
                <div className="p-2 rounded-xl bg-[#f8f9fa] dark:bg-zinc-800">Insured Door</div>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Confirmation Modal Overlay */}
      {completedOrder && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-4">
          <div className="w-full max-w-lg bg-white dark:bg-zinc-900 rounded-3xl p-8 shadow-2xl flex flex-col items-center text-center gap-5 relative border border-white/10 animate-in zoom-in-95 duration-300">
            <div className="w-16 h-16 rounded-full bg-[#e2dfff] dark:bg-[#201d4a] flex items-center justify-center text-[#4b41e1] dark:text-[#c3c0ff]">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <div>
              <span className="text-[10px] uppercase tracking-widest text-[#4b41e1] font-bold">
                Acquisition Confirmed
              </span>
              <h3 className="font-headline text-2xl sm:text-3xl font-bold text-black dark:text-white mt-1">
                Thank You, {recipient.split(' ')[0]}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-500 mt-2 leading-relaxed">
                Your order <strong className="text-black dark:text-white">#{completedOrder.id}</strong> has been received by our private reserve. A digital provenance certificate has been sent to <strong className="text-black dark:text-white">{email}</strong>.
              </p>
            </div>

            <div className="w-full p-4 rounded-2xl bg-[#f8f9fa] dark:bg-zinc-800/80 flex flex-col gap-2 text-left text-xs text-black dark:text-white">
              <div className="flex justify-between">
                <span className="text-zinc-500">Tracking Code:</span>
                <span className="font-mono font-bold">{completedOrder.trackingNumber}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Total Charged:</span>
                <span className="font-bold">${completedOrder.total.toFixed(2)} USD</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Est. Dispatch:</span>
                <span className="font-bold text-emerald-600 dark:text-emerald-400">Overnight Express White-Glove</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full pt-2">
              <button
                onClick={() => navigate('/profile')}
                className="flex-1 py-3.5 rounded-xl bg-black dark:bg-white text-white dark:text-black font-semibold text-xs uppercase tracking-wider hover:opacity-90 transition-opacity"
              >
                View in Order History
              </button>
              <button
                onClick={() => window.print()}
                className="px-5 py-3.5 rounded-xl bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-black dark:text-white font-semibold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5"
              >
                <Printer className="w-4 h-4" />
                <span>Receipt</span>
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
