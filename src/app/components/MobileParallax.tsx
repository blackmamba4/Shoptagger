import { motion } from 'motion/react';
import lifestyleImg from '@/assets/laptop-phone-mockup.jpeg';

type MobileParallaxProps = {
  variant?: 'dark' | 'light';
};

export function MobileParallax({ variant = 'dark' }: MobileParallaxProps) {
  const isLight = variant === 'light';

  return (
    <section className="relative w-full h-[80vh] overflow-hidden flex items-center justify-center z-10">
      {/* Background Image with Parallax-like fixity or just simple cover */}
      <div className="absolute inset-0 z-0">
        <img 
          src={lifestyleImg} 
          alt="Mobile Lifestyle" 
          className="w-full h-full object-cover opacity-60"
        />
        <div
          className={`absolute inset-0 bg-gradient-to-t ${
            isLight ? 'from-white via-white/50 to-white/60' : 'from-zinc-950 via-zinc-950/40 to-zinc-950/80'
          }`}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2
            className={`text-4xl md:text-6xl font-bold mb-6 tracking-tight ${
              isLight ? 'text-zinc-900' : 'text-white'
            }`}
          >
            Your Studio. <span className="text-indigo-500">Anywhere.</span>
          </h2>
          <p
            className={`text-xl max-w-2xl mx-auto mb-8 ${
              isLight ? 'text-zinc-700' : 'text-zinc-300 text-shadow-sm'
            }`}
          >
            Capture inspiration the moment it strikes. Record a voice memo or import a track, 
            and get chords instantly on your phone.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
