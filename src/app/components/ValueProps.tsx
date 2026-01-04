import { motion } from 'motion/react';
import { Music2, Sparkles, Smartphone } from 'lucide-react';

const features = [
  {
    icon: Music2,
    title: "Instant Transcription",
    description: "Upload any audio file or paste a YouTube link. Our AI breaks it down into chords, lyrics, and beats in seconds."
  },
  {
    icon: Sparkles,
    title: "AI-Powered Accuracy",
    description: "Powered by state-of-the-art machine learning models that detect even the most complex jazz chords and voicings."
  },
  {
    icon: Smartphone,
    title: "Sync Everywhere",
    description: "Start a project on your desktop and take it with you on mobile. Your library stays perfectly in sync across all devices."
  }
];

export function ValueProps() {
  return (
    <section className="py-24 relative z-10 overflow-hidden">
      {/* Abstract Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1756457920631-2a3149102fd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwYWJzdHJhY3QlMjBtdXNpYyUyMHNvdW5kJTIwd2F2ZSUyMGFlc3RoZXRpY3xlbnwxfHx8fDE3Njc1NjA2ODl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-950/50 to-zinc-950" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why LowkeyLab?</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Don't just guess. Let this tool help you figure out chords to any song instantly.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 hover:bg-zinc-800/80 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/10"
            >
              <div className="w-12 h-12 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-6">
                <feature.icon className="w-6 h-6 text-indigo-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-zinc-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
