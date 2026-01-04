import { Hero } from '../components/Hero';
import { FeatureShowcase } from '../components/FeatureShowcase';
import { ValueProps } from '../components/ValueProps';
import { MobileParallax } from '../components/MobileParallax';
import { Footer } from '../components/Footer';
import logoImg from '@/assets/lowkeylab-logo.png';

export default function WaitlistPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col font-['Open_Sans',_sans-serif] selection:bg-indigo-500/30 overflow-x-hidden relative">
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-900/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-900/10 rounded-full blur-[120px]" />
        
        {/* Large Background Hero Logo - Centered */}
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-[0.02] z-0">
          <img src={logoImg} alt="" className="w-full h-full object-contain" />
        </div>
      </div>

      <header className="w-full py-6 px-6 md:px-12 z-20 flex items-center justify-between sticky top-0 bg-zinc-950/80 backdrop-blur-md border-b border-white/5">
        <div className="font-bold text-xl tracking-tighter flex items-center gap-3">
          <img 
            src={logoImg} 
            alt="LowkeyLab Logo" 
            className="w-8 h-8 object-contain" 
          />
          <span className="font-semibold text-white">LowkeyLab</span>
        </div>
        <a 
          href="https://prong-relay-74750516.figma.site" 
          target="_blank" 
          rel="noreferrer"
          className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
        >
          Try Demo
        </a>
      </header>

      <main className="flex-1 flex flex-col items-center z-10 w-full">
        {/* Hero Section */}
        <section className="w-full px-6 md:px-12 pb-12 pt-8">
          <Hero />
        </section>

        {/* Value Proposition */}
        <ValueProps />
        
        {/* Feature Showcase (Desktop & Mobile Hand) */}
        <section className="w-full bg-gradient-to-b from-zinc-950 to-zinc-900/50">
          <FeatureShowcase />
        </section>

        {/* Mobile Lifestyle Parallax */}
        <MobileParallax />
      </main>

      <Footer />
    </div>
  );
}
