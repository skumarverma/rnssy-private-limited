import { useState } from 'react';
import { growthRoadmap } from '../data';
import { Calendar, Compass, Milestone, ArrowRight, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Roadmap() {
  const [activePhase, setActivePhase] = useState<number>(0);

  return (
    <section className="py-20 bg-white border-b border-brand-border/40 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold text-brand-accent uppercase tracking-widest bg-brand-accent-light px-3 py-1 rounded-full border border-brand-accent/10">
            Growth Timeline
          </span>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-brand-primary sm:text-4xl mt-3 leading-tight">
            Strategic Scaling & Innovation Roadmap
          </h2>
          <p className="font-sans text-brand-text-light text-sm mt-4">
            Our multi-tier growth strategy protects capital investments, standardizes operational workflows, and scales execution capabilities systematically over the next five years.
          </p>
        </div>

        {/* Phase selector tabs */}
        <div className="flex justify-center mb-12 font-sans">
          <div className="bg-brand-bg border border-brand-border p-1.5 rounded-xl flex gap-1.5">
            {growthRoadmap.map((p, idx) => (
              <button
                key={idx}
                onClick={() => setActivePhase(idx)}
                className={`px-5 py-2.5 rounded-lg text-xs font-bold tracking-wider uppercase transition-all cursor-pointer ${
                  activePhase === idx
                    ? 'bg-brand-accent text-white shadow-sm'
                    : 'text-brand-primary hover:text-brand-accent'
                }`}
                id={`roadmap-tab-${idx}`}
              >
                {p.phase.split(':')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Phase View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center" id="roadmap-content">
          
          {/* Left info block */}
          <div className="lg:col-span-4 flex flex-col gap-6 font-sans">
            <div className="flex items-center gap-2 text-brand-accent">
              <Calendar className="h-5 w-5" />
              <span className="text-xs font-extrabold tracking-wider uppercase">
                {growthRoadmap[activePhase].timeframe}
              </span>
            </div>

            <h3 className="font-display text-2xl font-extrabold text-brand-primary leading-tight">
              {growthRoadmap[activePhase].title}
            </h3>

            <p className="text-brand-text-light text-sm leading-relaxed">
              We leverage meticulous scheduling and strategic supply line alliances to fulfill large government tenders efficiently. Each step is structured to ensure positive cash flows and pristine public safety metrics.
            </p>

            <div className="border-t border-brand-border pt-6 space-y-4 text-xs font-medium text-brand-primary">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="h-4.5 w-4.5 text-brand-accent" />
                <span>Zero safety infringements target</span>
              </div>
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="h-4.5 w-4.5 text-brand-accent" />
                <span>Green material compliance standards</span>
              </div>
            </div>
          </div>

          {/* Right milestones timeline/cards */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {growthRoadmap[activePhase].points.map((pt, pIdx) => (
              <div
                key={pIdx}
                className="p-6 rounded-xl border border-brand-border bg-white shadow-sm hover:border-brand-accent/30 hover:shadow-md transition-all flex flex-col justify-between h-64"
                id={`roadmap-point-${pIdx}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-[10px] font-bold text-brand-accent bg-brand-accent-light px-2 py-0.5 rounded">
                      Milestone 0{pIdx + 1}
                    </span>
                    <Milestone className="h-4 w-4 text-brand-primary/20" />
                  </div>
                  
                  <h4 className="font-sans font-extrabold text-sm text-brand-primary tracking-tight leading-snug">
                    {pt.category}
                  </h4>
                  <p className="font-sans text-xs text-brand-text-light leading-relaxed mt-2">
                    {pt.description}
                  </p>
                </div>

                <div className="flex items-center gap-1.5 text-[10px] font-bold text-brand-accent uppercase tracking-wider font-sans mt-4">
                  <span>Track Status</span>
                  <ArrowRight className="h-3 w-3" />
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
