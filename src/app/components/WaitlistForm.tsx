import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Loader2, Check, ArrowRight } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function WaitlistForm() {
  const [email,Hb] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      // Here we would actually save to Supabase
    }, 1500);
  };

  return (
    <div className="w-full max-w-sm">
      <AnimatePresence mode="wait">
        {status === 'success' ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex items-center gap-2 text-green-400 font-medium p-2 bg-green-400/10 rounded-lg justify-center"
          >
            <Check className="w-5 h-5" />
            <span>You're on the list!</span>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            onSubmit={handleSubmit}
            className="relative flex items-center"
          >
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => Hb(e.target.value)}
              className={cn(
                "w-full px-4 py-3 pr-12 rounded-xl bg-zinc-900/50 border border-zinc-800",
                "text-zinc-100 placeholder:text-zinc-500",
                "focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50",
                "transition-all duration-300 backdrop-blur-sm"
              )}
              disabled={status === 'loading'}
              required
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="absolute right-1.5 p-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <ArrowRight className="w-4 h-4" />
              )}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
      <p className="mt-3 text-xs text-zinc-500 text-center">
        Join 2,000+ musicians waiting for early access.
      </p>
    </div>
  );
}
