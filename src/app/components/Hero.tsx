import { motion } from 'motion/react';
import { Play } from 'lucide-react';
import { WaitlistForm } from './WaitlistForm';

type HeroProps = {
  variant?: 'dark' | 'light';
};

export function Hero({ variant = 'dark' }: HeroProps) {
  const isLight = variant === 'light';

  return (
    <div className="flex flex-col justify-center items-center text-center space-y-10 max-w-4xl mx-auto py-12 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        <div
          className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm mb-4 border ${
            isLight
              ? 'bg-zinc-100 border-zinc-200 text-zinc-600'
              : 'bg-zinc-900 border-zinc-800 text-zinc-400'
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
          <span>v2.0 Early Access Waitlist</span>
        </div>
        
        <h1
          className={`text-5xl md:text-8xl font-bold tracking-tight leading-[1.1] ${
            isLight ? 'text-zinc-900' : 'text-white'
          }`}
        >
          Music to <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 bg-[length:200%_auto] animate-gradient">
            Chords & Lyrics
          </span>
        </h1>
        
        <p
          className={`text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed ${
            isLight ? 'text-zinc-600' : 'text-zinc-400'
          }`}
        >
          LowkeyLab uses advanced AI to listen to any song and instantly transcribe it into accurate chords, lyrics, and beats.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-full max-w-md space-y-8 flex flex-col items-center"
      >
        <WaitlistForm variant={variant} />
        
        <div className="flex flex-col items-center gap-4">
          <button 
            className={`group flex items-center gap-3 px-6 py-3 rounded-full transition-all border w-fit backdrop-blur-sm ${
              isLight
                ? 'bg-white hover:bg-zinc-100 text-zinc-800 border-zinc-200 hover:border-zinc-300 shadow-sm'
                : 'bg-white/5 hover:bg-white/10 text-zinc-200 border-zinc-800 hover:border-zinc-700'
            }`}
            onClick={() => window.open('https://prong-relay-74750516.figma.site', '_blank')} 
          >
            <div
              className={`w-6 h-6 rounded-full flex items-center justify-center transition-colors ${
                isLight
                  ? 'bg-indigo-500/15 group-hover:bg-indigo-500/25'
                  : 'bg-indigo-500/20 group-hover:bg-indigo-500/30'
              }`}
            >
              <Play
                className={`w-3 h-3 ${isLight ? 'fill-indigo-500 text-indigo-500' : 'fill-indigo-400 text-indigo-400'}`}
              />
            </div>
            <span className={`font-medium ${isLight ? 'text-zinc-800' : 'text-zinc-100'}`}>Try Interactive Demo</span>
          </button>
          <p className={`text-xs ${isLight ? 'text-zinc-500' : 'text-zinc-600'}`}>
            (No login required)
          </p>
        </div>
      </motion.div>
    </div>
  );
}
