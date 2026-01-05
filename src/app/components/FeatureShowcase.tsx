import { motion } from 'motion/react';
import desktopImg from '@/assets/pic4.png';
import handImg from '@/assets/hand-phone-mockup.jpeg';

type FeatureShowcaseProps = {
  variant?: 'dark' | 'light';
};

export function FeatureShowcase({ variant = 'dark' }: FeatureShowcaseProps) {
  const isLight = variant === 'light';

  return (
    <div className="w-full space-y-24 py-12">
      
      {/* Feature 1: Desktop Powerhouse */}
      <div className="flex flex-col items-center gap-8">
        <div className="text-center space-y-4 max-w-3xl mx-auto px-6">
          <h3 className={`text-3xl font-bold ${isLight ? 'text-zinc-900' : 'text-white'}`}>
            Professional Desktop Environment
          </h3>
          <p className={`text-lg ${isLight ? 'text-zinc-600' : 'text-zinc-400'}`}>
            A full-featured DAW-like experience for deep analysis. Edit chords, adjust timing, and export to MIDI or MusicXML.
          </p>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="w-full max-w-6xl mx-auto px-4 md:px-8"
        >
          <div
            className={`relative rounded-xl overflow-hidden shadow-2xl border ${
              isLight ? 'border-zinc-200 bg-white shadow-indigo-100/40' : 'border-zinc-800 bg-zinc-900'
            }`}
          >
             {/* Browser/Window Header Mockup */}
            <div
              className={`h-8 flex items-center px-4 gap-2 border-b ${
                isLight ? 'bg-zinc-100 border-zinc-200' : 'bg-zinc-800 border-zinc-700'
              }`}
            >
              <div className={`w-3 h-3 rounded-full ${isLight ? 'bg-red-200' : 'bg-red-500/20'}`} />
              <div className={`w-3 h-3 rounded-full ${isLight ? 'bg-yellow-200' : 'bg-yellow-500/20'}`} />
              <div className={`w-3 h-3 rounded-full ${isLight ? 'bg-green-200' : 'bg-green-500/20'}`} />
            </div>
            <img 
              src={desktopImg} 
              alt="LowkeyLab Desktop App" 
              className="w-full h-auto object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* Feature 2: Mobile Utility */}
      <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="w-full md:w-1/2"
        >
          <div
            className={`relative rounded-3xl overflow-hidden shadow-2xl border aspect-square md:aspect-auto md:h-[600px] ${
              isLight ? 'border-zinc-200 bg-white shadow-indigo-100/40' : 'border-zinc-800 bg-zinc-900'
            }`}
          >
            <img 
              src={handImg} 
              alt="LowkeyLab Mobile Hand" 
              className="w-full h-full object-cover"
            />
            <div
              className={`absolute inset-0 bg-gradient-to-t ${
                isLight ? 'from-white/80 via-white/10 to-transparent' : 'from-zinc-950/80 via-transparent to-transparent'
              }`}
            />
          </div>
        </motion.div>

        <div className="w-full md:w-1/2 space-y-6">
          <h3 className={`text-3xl font-bold ${isLight ? 'text-zinc-900' : 'text-white'}`}>
            Chords in the Palm of Your Hand
          </h3>
          <p className={`text-lg leading-relaxed ${isLight ? 'text-zinc-600' : 'text-zinc-400'}`}>
            Whether you're at a gig, a rehearsal, or just jamming in the park, LowkeyLab Mobile gives you instant access to your library.
            <br /><br />
            Snap a photo of your handwritten charts to digitize them, or record audio on the fly.
          </p>
          <ul className="space-y-3">
            {['Offline access', 'Quick audio recorder', 'Instant sync'].map((item) => (
              <li key={item} className={`flex items-center ${isLight ? 'text-zinc-700' : 'text-zinc-300'}`}>
                <div
                  className={`w-1.5 h-1.5 rounded-full mr-3 ${
                    isLight ? 'bg-indigo-500' : 'bg-indigo-500'
                  }`}
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
