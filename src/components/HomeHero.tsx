import { ActiveTab } from '../types';
import { ArrowRight, Shield, Zap, TrendingUp, CheckCircle } from 'lucide-react';
import { companyOverview } from '../data';
import { motion } from 'motion/react';

interface HomeHeroProps {
  setActiveTab: (tab: ActiveTab) => void;
}

export default function HomeHero({ setActiveTab }: HomeHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-accent-light/30 via-transparent to-transparent py-16 sm:py-24 lg:py-32 border-b border-brand-border/40">
      
      {/* Decorative clean ambient background glow */}
      <div className="absolute top-1/4 right-0 -z-10 h-96 w-96 rounded-full bg-brand-accent/5 blur-3xl" />
      <div className="absolute bottom-10 left-10 -z-10 h-80 w-80 rounded-full bg-blue-500/5 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* Left Column: Title & Action Content */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Tagline pill */}
            <div className="self-start inline-flex items-center gap-2 rounded-full border border-brand-accent/30 bg-brand-accent-light/60 px-3.5 py-1.5 text-xs font-bold text-brand-accent tracking-wide uppercase font-sans">
              <span className="flex h-2 w-2 rounded-full bg-brand-accent animate-pulse" />
              {companyOverview.tagline}
            </div>

            {/* Display Header */}
            <h1 className="font-display text-4xl font-extrabold tracking-tight text-brand-primary sm:text-5xl lg:text-6xl leading-[1.1]">
              Engineered for <br />
              <span className="text-brand-accent relative inline-block">
                Sustainability
              </span> & Precision
            </h1>

            <p className="font-sans text-lg text-brand-text-light leading-relaxed max-w-2xl">
              RNSSY Private Limited is a specialized civil contractor delivering high-performance infrastructure solutions across India. From state-of-the-art bridges and arterial roadworks to certified municipal water management networks, we bid with financial integrity and execute with ecological precision.
            </p>

            {/* Credential Indicators */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 pt-2 font-sans">
              <div className="flex items-start gap-2.5">
                <CheckCircle className="h-5 w-5 text-brand-accent shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-brand-primary">KPWD & CPWD Approved</h4>
                  <p className="text-xs text-brand-text-light font-medium">Fully certified government bidding</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle className="h-5 w-5 text-brand-accent shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-brand-primary">100% Quality Audited</h4>
                  <p className="text-xs text-brand-text-light font-medium">Strictest structural longevity tests</p>
                </div>
              </div>
            </div>

            {/* Hero CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <button
                onClick={() => setActiveTab('contact')}
                className="flex items-center justify-center gap-2 bg-brand-accent hover:bg-brand-accent/90 text-white font-sans text-base font-bold py-3.5 px-7 rounded-lg transition-all shadow-sm hover:shadow-md cursor-pointer"
                id="hero-cta-primary"
              >
                Submit Bidding Request
                <ArrowRight className="h-5 w-5" />
              </button>
              <button
                onClick={() => setActiveTab('offerings')}
                className="flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-brand-primary border border-brand-border font-sans text-base font-bold py-3.5 px-7 rounded-lg transition-all cursor-pointer"
                id="hero-cta-secondary"
              >
                Explore Offerings
              </button>
            </div>

          </div>

          {/* Right Column: Visual Showcase Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Structural Frame */}
              <div className="overflow-hidden rounded-2xl border border-brand-border bg-white shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=600&auto=format&fit=crop" 
                  alt="RNSSY Infrastructure Project Site" 
                  className="h-72 w-full object-cover transition-transform hover:scale-102 duration-700"
                  referrerPolicy="no-referrer"
                />
                
                {/* Embedded status board */}
                <div className="p-6 bg-white font-sans">
                  <div className="flex justify-between items-center border-b border-brand-border pb-4 mb-4">
                    <span className="text-xs font-bold text-brand-accent uppercase tracking-wider">Current Operations Hub</span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-brand-accent-light text-brand-accent text-xs font-bold">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-accent animate-ping" />
                      Active
                    </span>
                  </div>
                  
                  <div className="space-y-3.5 text-sm font-medium">
                    <div className="flex justify-between text-brand-text-light">
                      <span>Headquarters:</span>
                      <span className="text-brand-primary font-bold">Davanagere, Karnataka</span>
                    </div>
                    <div className="flex justify-between text-brand-text-light">
                      <span>Bidding Footprint:</span>
                      <span className="text-brand-primary font-bold">Pan-India (Focus Karnataka)</span>
                    </div>
                    <div className="flex justify-between text-brand-text-light">
                      <span>Structural Focus:</span>
                      <span className="text-brand-primary font-bold">Eco-Tech Civil EPC Works</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badges for a high-end feel */}
              <div className="absolute -top-4 -right-4 bg-brand-primary text-white p-4 rounded-xl shadow-lg border border-slate-800 flex items-center gap-3 font-sans">
                <div className="bg-brand-accent/20 p-2.5 rounded-lg text-brand-accent">
                  <Shield className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Tender Rating</p>
                  <p className="text-sm font-bold text-white">Class-A Standard</p>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-brand-accent text-white py-3 px-4.5 rounded-xl shadow-lg flex items-center gap-3 font-sans">
                <div className="bg-white/10 p-2 rounded-lg text-white">
                  <Zap className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-[9px] uppercase font-bold text-brand-accent-light tracking-wider">Mobilization</p>
                  <p className="text-xs font-extrabold text-white">Rapid Site Deployment</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
