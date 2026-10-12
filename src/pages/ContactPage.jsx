import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, ChevronDown } from 'lucide-react';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('allocation');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);
  const [errors, setErrors] = useState({});
  const [openFaq, setOpenFaq] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = {};
    if (!name.trim()) errs.name = 'Please provide your name';
    if (!email || !email.includes('@')) errs.email = 'Valid contact email required';
    if (!message.trim()) errs.message = 'Please provide inquiry notes';

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setIsSent(true);
    setName('');
    setEmail('');
    setMessage('');
  };

  const faqs = [
    {
      q: "How does white-glove insured courier shipping operate?",
      a: "Every LuxeCart item valued over $150 ships via dedicated temperature-controlled DHL Express or Ferrari Logistics with direct signature verification. In major metropolitan areas (NYC, London, Zurich, Paris), same-day private courier is complimentary."
    },
    {
      q: "What is the 30-Day Atelier Trial Guarantee?",
      a: "You have 30 days from physical receipt to examine the ergonomics and weight of any timepiece or leather piece. If it does not harmonize with your wardrobe, our concierge schedules an insured courier retrieval with zero return shipping deductions."
    },
    {
      q: "Are the chronometers accompanied by individual timing certificates?",
      a: "Yes. Every mechanical piece ships in a sealed security vault containing its individual Geneva bench test rate certificate, serialized warranty card, and provenance monograph signed by the supervising watchmaker."
    }
  ];

  return (
    <div className="w-full pt-28 pb-24 bg-[#f8f9fa] dark:bg-zinc-950 min-h-screen transition-colors">
      <div className="max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-16">
        
        {/* Header */}
        <div className="max-w-2xl mb-14 space-y-3">
          <span className="text-xs uppercase tracking-widest text-[#4b41e1] dark:text-[#a5b4fc] font-bold">
            Private Concierge &amp; Salon
          </span>
          <h1 className="font-headline text-3xl sm:text-5xl font-semibold text-black dark:text-white tracking-tight">
            Initiate Conversation
          </h1>
          <p className="text-xs sm:text-sm text-[#45474b] dark:text-zinc-300 leading-relaxed">
            Our atelier client liaisons in Geneva, Paris, and Manhattan are on hand to arrange private viewings, custom monograms, or private numbered reserve allocations. Average response within 2 hours.
          </p>
        </div>

        {/* 2-Column: Inquiry Form + Contact Desks */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start mb-24">
          
          {/* Inquiry Form (7 Cols) */}
          <div className="lg:col-span-7 bg-white dark:bg-zinc-900 rounded-3xl p-6 sm:p-10 shadow-sm border border-black/5 dark:border-white/5 space-y-6">
            <h2 className="font-headline font-bold text-xl text-black dark:text-white">
              Direct Liaison Dispatch
            </h2>

            {isSent ? (
              <div className="p-8 rounded-2xl bg-[#e2dfff] dark:bg-[#201d4a] text-[#4b41e1] dark:text-[#c3c0ff] text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 mx-auto text-[#4b41e1]" />
                <h3 className="font-headline font-bold text-lg">Inquiry Confirmed</h3>
                <p className="text-xs max-w-sm mx-auto">
                  Your message has been assigned to a Senior Atelier Advisor. An encrypted reply will arrive in your inbox shortly.
                </p>
                <button
                  onClick={() => setIsSent(false)}
                  className="mt-2 text-xs font-bold underline hover:opacity-80"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[11px] uppercase font-bold text-zinc-500">Your Full Name *</label>
                    <input
                      type="text"
                      placeholder="Lord Julian Aubrey"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-[#f8f9fa] dark:bg-zinc-800 px-4 py-3 rounded-xl text-xs text-black dark:text-white border border-black/5 dark:border-white/10 focus:outline-none"
                    />
                    {errors.name && <p className="text-[10px] text-red-500 font-bold">{errors.name}</p>}
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] uppercase font-bold text-zinc-500">Email Address *</label>
                    <input
                      type="email"
                      placeholder="julian@collector.ch"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-[#f8f9fa] dark:bg-zinc-800 px-4 py-3 rounded-xl text-xs text-black dark:text-white border border-black/5 dark:border-white/10 focus:outline-none"
                    />
                    {errors.email && <p className="text-[10px] text-red-500 font-bold">{errors.email}</p>}
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] uppercase font-bold text-zinc-500">Inquiry Subject</label>
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full bg-[#f8f9fa] dark:bg-zinc-800 px-4 py-3 rounded-xl text-xs text-black dark:text-white border border-black/5 dark:border-white/10 focus:outline-none cursor-pointer"
                  >
                    <option value="allocation">Private Release Allocation Request</option>
                    <option value="viewing">Private Salon Viewing in Geneva or Paris</option>
                    <option value="monogram">Bespoke Monogramming &amp; Leather Customization</option>
                    <option value="support">Existing Order Tracking &amp; Concierge Care</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] uppercase font-bold text-zinc-500">Message Notes *</label>
                  <textarea
                    rows="5"
                    placeholder="Describe your inquiry, requested timepiece references, or preferred appointment dates..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-[#f8f9fa] dark:bg-zinc-800 p-4 rounded-xl text-xs text-black dark:text-white border border-black/5 dark:border-white/10 focus:outline-none resize-none"
                  />
                  {errors.message && <p className="text-[10px] text-red-500 font-bold">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-black dark:bg-white text-white dark:text-black font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#4b41e1] dark:hover:bg-[#4b41e1] hover:text-white dark:hover:text-white transition-all shadow-md cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmit Inquiry to Concierge</span>
                </button>
              </form>
            )}
          </div>

          {/* Contact Desks & Salons (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 sm:p-8 shadow-sm border border-black/5 dark:border-white/5 space-y-6">
              <h3 className="font-headline font-bold text-lg text-black dark:text-white pb-3 border-b border-black/5 dark:border-white/5">
                Active Atelier Salons
              </h3>

              <div className="space-y-4 text-xs">
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 font-bold text-black dark:text-white">
                    <MapPin className="w-3.5 h-3.5 text-[#4b41e1]" />
                    <span>Geneva Horology Salon</span>
                  </div>
                  <p className="text-zinc-500 pl-5">Rue du Rhône 42, 1204 Genève, Switzerland</p>
                  <p className="text-zinc-500 pl-5">+41 22 819 4000 • geneva@luxecart.com</p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 font-bold text-black dark:text-white">
                    <MapPin className="w-3.5 h-3.5 text-[#4b41e1]" />
                    <span>Paris Leather Workshop</span>
                  </div>
                  <p className="text-zinc-500 pl-5">Place Vendôme 18, 75001 Paris, France</p>
                  <p className="text-zinc-500 pl-5">+33 1 42 68 2200 • paris@luxecart.com</p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 font-bold text-black dark:text-white">
                    <MapPin className="w-3.5 h-3.5 text-[#4b41e1]" />
                    <span>Manhattan Private Suite</span>
                  </div>
                  <p className="text-zinc-500 pl-5">Madison Ave 740, New York, NY 10065</p>
                  <p className="text-zinc-500 pl-5">+1 (212) 555-0192 • nyc@luxecart.com</p>
                </div>
              </div>
            </div>

            <div className="bg-[#0F1115] text-white rounded-3xl p-6 sm:p-8 space-y-3 border border-white/10">
              <span className="text-[10px] uppercase font-bold text-[#e2dfff] tracking-widest">
                Direct Hotline
              </span>
              <h4 className="font-headline font-bold text-xl">
                24/7 Dedicated Concierge
              </h4>
              <p className="text-xs text-zinc-400">
                VIP members can initiate a private telephone consultation with our head archivist at any time.
              </p>
              <p className="font-mono text-sm font-bold text-[#e2dfff] pt-1">
                +1 (800) 840-LUXE
              </p>
            </div>
          </div>

        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="text-center mb-8">
            <span className="text-xs uppercase tracking-widest text-[#4b41e1] dark:text-[#a5b4fc] font-bold">
              Clarifications
            </span>
            <h2 className="font-headline text-2xl font-bold text-black dark:text-white mt-1">
              Frequently Addressed Inquiries
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden border border-black/5 dark:border-white/5"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-5 flex items-center justify-between text-left font-headline font-semibold text-xs sm:text-sm text-black dark:text-white cursor-pointer hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-zinc-400 transition-transform ${openFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 text-xs text-[#45474b] dark:text-zinc-300 leading-relaxed border-t border-black/5 dark:border-white/5 pt-3">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
