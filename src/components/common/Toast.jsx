import React from 'react';
import { Check, X } from 'lucide-react';
import { useCart } from '../../context/CartContext.jsx';

export default function Toast() {
  const { toastMessage, hideToast } = useCart();

  if (!toastMessage) return null;

  return (
    <aside
      aria-label="Notifications"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3.5 bg-[#191c1d] dark:bg-white text-white dark:text-[#191c1d] px-5 py-3.5 rounded-2xl shadow-2xl transition-all duration-300 animate-in slide-in-from-bottom-5 border border-white/10 dark:border-black/10"
    >
      <div className="w-8 h-8 rounded-full bg-[#4b41e1] text-white flex items-center justify-center flex-shrink-0">
        <Check className="w-4 h-4" />
      </div>
      <div className="flex flex-col">
        <span className="text-xs font-bold leading-tight">
          {toastMessage.title}
        </span>
        {toastMessage.message && (
          <span className="text-[11px] text-zinc-300 dark:text-zinc-600 leading-tight mt-0.5">
            {toastMessage.message}
          </span>
        )}
      </div>
      <button
        onClick={hideToast}
        aria-label="Close notification"
        className="p-1 hover:opacity-75 transition-opacity ml-2"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </aside>
  );
}
