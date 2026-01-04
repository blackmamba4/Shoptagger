import { motion } from 'motion/react';
import { Play } from 'lucide-react';
import { WaitlistForm } from './WaitlistForm';

export function Hero() {
  return (
    <div className="flex flex-col justify-center items-center text-center space-y-10 max-w-4xl mx-auto py-12 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-sm text-zinc-400 mb-4">
          <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
          <span>v2.0 Early Access Waitlist</span>
        </div>
        
        <h1 className="text-5xl md:text-8xl font-bold tracking-tight text-white leading-[1.1]">
          Music to <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 bg-[length:200%_auto] animate-gradient">
            Chords & Lyrics
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          LowkeyLab uses advanced AI to listen to any song and instantly transcribe it into accurate chords, lyrics, and beats.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-full max-w-md space-y-8 flex flex-col items-center"
      >
        <WaitlistForm />
        
        <div className="flex flex-col items-center gap-4">
          <button 
            className="group flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 text-zinc-200 transition-all border border-zinc-800 hover:border-zinc-700 w-fit backdrop-blur-sm"
            onClick={() => window.open('https://prong-relay-74750516.figma.site', '_blank')} 
          >
            <div className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center group-hover:bg-indigo-500/30 transition-colors">
              <Play className="w-3 h-3 fill-indigo-400 text-indigo-400" />
            </div>
            <span className="font-medium">Try Interactive Demo</span>
          </button>
          <p className="text-xs text-zinc-600">
            (No login required)
          </p>
        </div>
      </motion.div>
    </div>
  );
}
