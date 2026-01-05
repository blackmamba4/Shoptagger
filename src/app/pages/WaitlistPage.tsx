import { useState } from 'react';
import { Hero } from '../components/Hero';
import { FeatureShowcase } from '../components/FeatureShowcase';
import { ValueProps } from '../components/ValueProps';
import { MobileParallax } from '../components/MobileParallax';
import { Footer } from '../components/Footer';
import logoImg from '@/assets/lowkeylab-logo.png';

export default function WaitlistPage() {
  const [variant, setVariant] = useState<'dark' | 'light'>('dark');
  const isLight = variant === 'light';

  const toggleVariant = () => setVariant((prev) => (prev === 'dark' ? 'light' : 'dark'));

  return (
    <div
      className={`min-h-screen flex flex-col font-['Open_Sans',_sans-serif] selection:bg-indigo-500/30 overflow-x-hidden relative ${
        isLight ? 'bg-white text-zinc-900' : 'bg-zinc-950 text-zinc-100'
      }`}
    >
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div
          className={`absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full blur-[120px] ${
            isLight ? 'bg-indigo-200/40' : 'bg-indigo-900/10'
          }`}
        />
        <div
          className={`absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full blur-[120px] ${
            isLight ? 'bg-purple-200/40' : 'bg-purple-900/10'
          }`}
        />
        
        {/* Large Background Hero Logo - Centered */}
        <div
          className={`absolute top-[20%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] z-0 ${
            isLight ? 'opacity-[0.03]' : 'opacity-[0.02]'
          }`}
        >
          <img src={logoImg} alt="" className="w-full h-full object-contain" />
        </div>
      </div>

      <header
        className={`w-full py-6 px-6 md:px-12 z-20 flex items-center justify-between sticky top-0 backdrop-blur-md ${
          isLight
            ? 'bg-white/80 border-b border-zinc-200'
            : 'bg-zinc-950/80 border-b border-white/5'
        }`}
      >
        <div className="font-bold text-xl tracking-tighter flex items-center gap-3">
          <img 
            src={logoImg} 
            alt="LowkeyLab Logo" 
            className="w-8 h-8 object-contain" 
          />
          <span className={`font-semibold ${isLight ? 'text-zinc-900' : 'text-white'}`}>LowkeyLab</span>
        </div>
        <div className="flex items-center gap-3">
          <a 
            href="https://prong-relay-74750516.figma.site" 
            target="_blank" 
            rel="noreferrer"
            className={`text-sm font-medium transition-colors ${
              isLight ? 'text-zinc-600 hover:text-zinc-900' : 'text-zinc-400 hover:text-white'
            }`}
          >
            Try Demo
          </a>
          <button
            onClick={toggleVariant}
            className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
              isLight
                ? 'border-zinc-300 text-zinc-700 hover:bg-zinc-100'
                : 'border-zinc-800 text-zinc-200 hover:bg-zinc-800'
            }`}
            aria-label="Toggle color mode"
          >
            {isLight ? 'Dark mode' : 'Light mode'}
          </button>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center z-10 w-full">
        {/* Hero Section */}
        <section className="w-full px-6 md:px-12 pb-12 pt-8">
          <Hero variant={variant} />
        </section>

        {/* Value Proposition */}
        <ValueProps variant={variant} />
        
        {/* Feature Showcase (Desktop & Mobile Hand) */}
        <section
          className={`w-full ${
            isLight ? 'bg-gradient-to-b from-white to-indigo-50/60' : 'bg-gradient-to-b from-zinc-950 to-zinc-900/50'
          }`}
        >
          <FeatureShowcase variant={variant} />
        </section>

        {/* Mobile Lifestyle Parallax */}
        <MobileParallax variant={variant} />
      </main>

      <Footer variant={variant} />
    </div>
  );
}
