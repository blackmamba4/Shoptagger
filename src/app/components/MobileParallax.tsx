import { motion } from 'motion/react';
import lifestyleImg from '@/assets/laptop-phone-mockup.jpeg';

export function MobileParallax() {
  return (
    <section className="relative w-full h-[80vh] overflow-hidden flex items-center justify-center z-10">
      {/* Background Image with Parallax-like fixity or just simple cover */}
      <div className="absolute inset-0 z-0">
        <img 
          src={lifestyleImg} 
          alt="Mobile Lifestyle" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-zinc-950/80" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Your Studio. <span className="text-indigo-400">Anywhere.</span>
          </h2>
          <p className="text-xl text-zinc-300 max-w-2xl mx-auto mb-8 text-shadow-sm">
            Capture inspiration the moment it strikes. Record a voice memo or import a track, 
            and get chords instantly on your phone.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
