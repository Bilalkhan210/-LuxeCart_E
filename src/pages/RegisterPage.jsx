import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Lock, Mail, User, ArrowRight, ShieldCheck } from 'lucide-react';
import { useAuth } from '../context/AuthContext.jsx';

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(true);
  const [errors, setErrors] = useState({});
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = {};
    if (!name.trim()) errs.name = 'Please provide your full legal name';
    if (!email || !email.includes('@')) errs.email = 'Please provide a valid email address';
    if (!password || password.length < 6) errs.password = 'Password must be at least 6 characters';
    if (!agreeTerms) errs.terms = 'You must accept the terms of reservation';

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    register(name, email, password);
    navigate('/profile');
  };

  return (
    <div className="w-full pt-32 pb-24 bg-[#f8f9fa] dark:bg-zinc-950 min-h-screen flex items-center justify-center transition-colors">
      <div className="max-w-md w-full mx-auto px-4">
        
        <div className="bg-white dark:bg-zinc-900 rounded-3xl p-8 sm:p-10 shadow-xl border border-black/5 dark:border-white/5 space-y-6">
          <div className="text-center space-y-1">
            <span className="text-[10px] uppercase tracking-widest text-[#4b41e1] dark:text-[#a5b4fc] font-bold">
              Private Allocation
            </span>
            <h1 className="font-headline text-2xl sm:text-3xl font-bold text-black dark:text-white">
              Create Client Account
            </h1>
            <p className="text-xs text-[#76777b] dark:text-zinc-400">
              Receive private invitations, early release access, and white-glove concierge dispatch.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1">
              <label className="text-[11px] uppercase font-bold tracking-wider text-zinc-600 dark:text-zinc-300">
                Full Name *
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Julian Aubrey"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    setErrors({ ...errors, name: '' });
                  }}
                  className="w-full bg-[#f8f9fa] dark:bg-zinc-800 px-4 py-3 rounded-xl text-xs text-black dark:text-white border border-black/5 dark:border-white/10 focus:outline-none"
                />
                <User className="w-4 h-4 text-zinc-400 absolute right-3.5 top-1/2 -translate-y-1/2" />
              </div>
              {errors.name && <p className="text-[10px] text-red-500 font-bold">{errors.name}</p>}
            </div>

            <div className="space-y-1">
              <label className="text-[11px] uppercase font-bold tracking-wider text-zinc-600 dark:text-zinc-300">
                Email Address *
              </label>
              <div className="relative">
                <input
                  type="email"
                  placeholder="julian@example.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setErrors({ ...errors, email: '' });
                  }}
                  className="w-full bg-[#f8f9fa] dark:bg-zinc-800 px-4 py-3 rounded-xl text-xs text-black dark:text-white border border-black/5 dark:border-white/10 focus:outline-none"
                />
                <Mail className="w-4 h-4 text-zinc-400 absolute right-3.5 top-1/2 -translate-y-1/2" />
              </div>
              {errors.email && <p className="text-[10px] text-red-500 font-bold">{errors.email}</p>}
            </div>

            <div className="space-y-1">
              <label className="text-[11px] uppercase font-bold tracking-wider text-zinc-600 dark:text-zinc-300">
                Password *
              </label>
              <div className="relative">
                <input
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setErrors({ ...errors, password: '' });
                  }}
                  className="w-full bg-[#f8f9fa] dark:bg-zinc-800 px-4 py-3 rounded-xl text-xs text-black dark:text-white border border-black/5 dark:border-white/10 focus:outline-none"
                />
                <Lock className="w-4 h-4 text-zinc-400 absolute right-3.5 top-1/2 -translate-y-1/2" />
              </div>
              {errors.password && <p className="text-[10px] text-red-500 font-bold">{errors.password}</p>}
            </div>

            <label className="flex items-start gap-2.5 cursor-pointer text-xs text-zinc-600 dark:text-zinc-300 pt-1">
              <input
                type="checkbox"
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
                className="w-4 h-4 rounded accent-[#4b41e1] cursor-pointer mt-0.5"
              />
              <span className="text-[11px] leading-tight">
                I agree to the LuxeCart Atelier Terms of Privacy and Curated Reserve Rules.
              </span>
            </label>
            {errors.terms && <p className="text-[10px] text-red-500 font-bold">{errors.terms}</p>}

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-black dark:bg-white text-white dark:text-black font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#4b41e1] dark:hover:bg-[#4b41e1] hover:text-white dark:hover:text-white transition-all shadow-md cursor-pointer"
            >
              <span>Register Private Account</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <p className="text-center text-xs text-zinc-500 pt-2">
            Already registered?{' '}
            <Link to="/login" className="font-bold text-black dark:text-white hover:underline">
              Sign In
            </Link>
          </p>
        </div>

      </div>
    </div>
  );
}
