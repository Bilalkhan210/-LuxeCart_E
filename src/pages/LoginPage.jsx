import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Lock, Mail, ArrowRight, UserCheck } from 'lucide-react';
import { useAuth } from '../context/AuthContext.jsx';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = {};
    if (!email || !email.includes('@')) errs.email = 'Please provide a valid email address';
    if (!password || password.length < 6) errs.password = 'Password must be at least 6 characters';
    
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    login(email, password);
    navigate('/profile');
  };

  const handleDemoLogin = () => {
    login('alexandra.vane@atelier-vane.com', 'password123');
    navigate('/profile');
  };

  return (
    <div className="w-full pt-32 pb-24 bg-[#f8f9fa] dark:bg-zinc-950 min-h-screen flex items-center justify-center transition-colors">
      <div className="max-w-md w-full mx-auto px-4">
        
        <div className="bg-white dark:bg-zinc-900 rounded-3xl p-8 sm:p-10 shadow-xl border border-black/5 dark:border-white/5 space-y-6">
          <div className="text-center space-y-1">
            <span className="text-[10px] uppercase tracking-widest text-[#4b41e1] dark:text-[#a5b4fc] font-bold">
              Private Access
            </span>
            <h1 className="font-headline text-2xl sm:text-3xl font-bold text-black dark:text-white">
              Atelier Client Portal
            </h1>
            <p className="text-xs text-[#76777b] dark:text-zinc-400">
              Sign in to access your acquisition records and priority allocations.
            </p>
          </div>

          {/* One-Click Demo Login Banner */}
          <button
            type="button"
            onClick={handleDemoLogin}
            className="w-full p-3.5 rounded-2xl bg-[#e2dfff] dark:bg-[#201d4a] text-[#4b41e1] dark:text-[#c3c0ff] hover:opacity-90 transition-opacity text-xs font-semibold flex items-center justify-center gap-2 cursor-pointer border border-[#4b41e1]/20"
          >
            <UserCheck className="w-4 h-4" />
            <span>Instant Demo Collector Sign-In</span>
          </button>

          <div className="relative flex items-center justify-center">
            <div className="w-full border-t border-black/5 dark:border-white/10" />
            <span className="bg-white dark:bg-zinc-900 px-3 text-[10px] uppercase font-bold text-zinc-400 absolute">
              Or email credentials
            </span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1">
              <label className="text-[11px] uppercase font-bold tracking-wider text-zinc-600 dark:text-zinc-300">
                Email Address
              </label>
              <div className="relative">
                <input
                  type="email"
                  placeholder="alexandra@atelier.com"
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
              <div className="flex justify-between items-center text-[11px]">
                <label className="uppercase font-bold tracking-wider text-zinc-600 dark:text-zinc-300">
                  Password
                </label>
                <a href="#" className="text-zinc-400 hover:text-black dark:hover:text-white">
                  Forgot?
                </a>
              </div>
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

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-black dark:bg-white text-white dark:text-black font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#4b41e1] dark:hover:bg-[#4b41e1] hover:text-white dark:hover:text-white transition-all shadow-md cursor-pointer mt-2"
            >
              <span>Sign In to Account</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <p className="text-center text-xs text-zinc-500 pt-2">
            New to the Atelier?{' '}
            <Link to="/register" className="font-bold text-black dark:text-white hover:underline">
              Create an account
            </Link>
          </p>
        </div>

      </div>
    </div>
  );
}
