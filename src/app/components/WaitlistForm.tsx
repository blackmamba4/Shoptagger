import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Loader2, Check, ArrowRight } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

function maskEmail(value: string) {
  const [user, domain] = value.split('@');
  if (!user || !domain) return value;
  const visible = user.slice(0, 2);
  return `${visible}${'*'.repeat(Math.max(user.length - 2, 1))}@${domain}`;
}

type WaitlistFormProps = {
  variant?: 'dark' | 'light';
};

export function WaitlistForm({ variant = 'dark' }: WaitlistFormProps) {
  const isLight = variant === 'light';
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const defaultLoopsFormId = 'cmhjq89y909kfzp0im2mnf4z1';
  const loopsFormId = import.meta.env.VITE_LOOPS_FORM_ID || defaultLoopsFormId;
  const loopsProxyPath = import.meta.env.VITE_LOOPS_PROXY_PATH;
  const loopsEndpoint =
    loopsProxyPath ||
    import.meta.env.VITE_LOOPS_FORM_URL ||
    `https://app.loops.so/api/newsletter-form/${loopsFormId}`;
  const loopsUserGroup = import.meta.env.VITE_LOOPS_USER_GROUP;
  const loopsSource = import.meta.env.VITE_LOOPS_SOURCE;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || status === 'loading') return;

    console.info('[waitlist] submit:start', {
      email: maskEmail(email),
      loopsFormId,
      loopsEndpoint,
    });

    if (!loopsEndpoint || !loopsFormId) {
      setErrorMessage('Missing Loops config. Add VITE_LOOPS_FORM_ID or VITE_LOOPS_PROXY_PATH.');
      setStatus('error');
      console.error('[waitlist] submit:missing-config');
      return;
    }

    setStatus('loading');
    setErrorMessage(null);

    try {
      const metadata =
        typeof window !== 'undefined'
          ? {
              path: window.location.pathname,
              referrer: document.referrer || 'direct',
              ...(loopsSource ? { source: loopsSource } : {}),
            }
          : undefined;

      const endpointHasInlineId = /newsletter-form\/[^/]+$/i.test(loopsEndpoint);

      const payload = new URLSearchParams({
        email,
        ...(endpointHasInlineId ? {} : { formId: loopsFormId }),
        ...(loopsUserGroup ? { userGroup: loopsUserGroup } : {}),
        ...(metadata ? { metadata: JSON.stringify(metadata) } : {}),
      });

      const response = await fetch(loopsEndpoint, {
        method: 'POST',
        headers: {
          // Safe-listed header so the request stays "simple" and avoids CORS preflight.
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        },
        body: payload,
      });

      if (!response.ok) {
        const error = await response.json().catch(() => null);
        console.error('[waitlist] submit:api-error', {
          status: response.status,
          message: error?.message,
        });
        throw new Error(error?.message || 'Request failed');
      }

      setStatus('success');
      setEmail('');
      console.info('[waitlist] submit:success');
    } catch (err) {
      console.error(err);
      setStatus('error');
      setErrorMessage('Could not join right now. Please try again in a moment.');
      console.error('[waitlist] submit:failure', { message: (err as Error)?.message });
    }
  };

  return (
    <div className="w-full max-w-sm">
      <AnimatePresence mode="wait">
        {status === 'success' ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={cn(
              "flex items-center gap-2 font-medium p-2 rounded-lg justify-center",
              isLight
                ? "text-green-700 bg-green-50 border border-green-200"
                : "text-green-400 bg-green-400/10"
            )}
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
              onChange={(e) => setEmail(e.target.value)}
              className={cn(
                "w-full px-4 py-3 pr-12 rounded-xl border transition-all duration-300 backdrop-blur-sm",
                "focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50",
                isLight
                  ? "bg-white border-zinc-200 text-zinc-900 placeholder:text-zinc-500"
                  : "bg-zinc-900/50 border-zinc-800 text-zinc-100 placeholder:text-zinc-500"
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
      <p className={cn("mt-3 text-xs text-center", isLight ? "text-zinc-500" : "text-zinc-500")}>
        Join 2,000+ musicians waiting for early access.
      </p>
      {errorMessage && (
        <p
          className={cn(
            "mt-2 text-xs text-center",
            isLight ? "text-red-600" : "text-red-400"
          )}
        >
          {errorMessage}
        </p>
      )}
    </div>
  );
}
