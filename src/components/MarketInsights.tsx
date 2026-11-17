import { marketStats } from '../data';
import { TrendingUp, Award, Activity, BarChart3, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function MarketInsights() {
  const trends = [
    { title: "Aggressive Public Expenditure", desc: "Government-led funding across state highways and national railway grids represents unparalleled volume in Class-A tenders." },
    { title: "Rapid Urbanization & Smart Cities", desc: "Sustained rural-to-urban migrations demand intelligent stormwater systems, potable pipelines, and robust municipal facilities." },
    { title: "Green Directives & Low-Waste Sourcing", desc: "Advanced tenders heavily weight carbon footprint reductions, favoring companies utilizing recycled materials and local logistics." },
    { title: "Advanced Prefabrication", desc: "Adoption of off-site casting and pre-stressed steel modules reduces project execution windows and material degradation." }
  ];

  return (
    <section className="py-20 bg-white border-b border-brand-border/40 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Block: Text, Stats Projection */}
          <div className="lg:col-span-5 flex flex-col gap-6 font-sans">
            <span className="text-xs font-bold text-brand-accent uppercase tracking-widest bg-brand-accent-light self-start px-3 py-1 rounded-full border border-brand-accent/10">
              Market Expansion & Scale
            </span>
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-brand-primary sm:text-4xl leading-tight">
              A ₹25+ Trillion Bidding Landscape
            </h2>
            <p className="text-brand-text-light text-base leading-relaxed">
              The Indian civil infrastructure market is experiencing unprecedented velocity. Backed by intense public funding and smart city initiatives, regional operators who combine regulatory execution with sustainable building practices command a massive strategic premium.
            </p>

            <div className="p-5 rounded-xl border border-brand-border bg-brand-bg/50 flex gap-4 items-start">
              <div className="bg-brand-accent/10 p-2.5 rounded-lg text-brand-accent shrink-0">
                <TrendingUp className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-brand-primary">Growth Catalyst</h4>
                <p className="text-xs text-brand-text-light leading-relaxed mt-1">
                  Market sizing projects a steady climb from **USD 206 Billion (2026)** to **USD 303 Billion (2031)** at an impressive **~8% CAGR**, powered by the national Gati Shakti master plan.
                </p>
              </div>
            </div>
          </div>

          {/* Right Block: Interactive Bento Metrics Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {marketStats.map((stat, idx) => (
              <div 
                key={stat.id}
                className="p-6 rounded-2xl border border-brand-border bg-brand-bg-card shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-48"
                id={`stat-card-${stat.id}`}
              >
                <div className="flex justify-between items-start">
                  <span className="text-brand-accent text-xs font-bold font-sans uppercase tracking-widest">
                    Key Projection
                  </span>
                  <div className="p-1.5 rounded-md bg-slate-50 text-brand-primary/50">
                    <BarChart3 className="h-4 w-4" />
                  </div>
                </div>

                <div className="my-3">
                  <span className="font-display text-3xl sm:text-4xl font-extrabold text-brand-primary tracking-tight">
                    {stat.value}
                  </span>
                  <h4 className="font-sans font-bold text-sm text-brand-primary mt-1">
                    {stat.label}
                  </h4>
                </div>

                <p className="font-sans text-[11px] text-brand-text-light font-medium leading-relaxed">
                  {stat.subtext}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom Panel: Strategic Trends */}
        <div className="mt-16 pt-12 border-t border-brand-border/60">
          <h3 className="font-display text-xl font-bold text-brand-primary text-center mb-8">
            Strategic Infrastructure Trends
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trends.map((tr, idx) => (
              <div 
                key={idx} 
                className="p-5.5 rounded-xl border border-brand-border bg-brand-bg-card flex flex-col gap-2 transition-transform hover:-translate-y-1"
                id={`trend-box-${idx}`}
              >
                <div className="flex items-center gap-2">
                  <span className="text-xs font-extrabold text-brand-accent bg-brand-accent-light px-2 py-0.5 rounded">
                    0{idx + 1}
                  </span>
                  <h4 className="font-sans font-bold text-sm text-brand-primary tracking-tight">
                    {tr.title}
                  </h4>
                </div>
                <p className="font-sans text-xs text-brand-text-light leading-relaxed mt-1">
                  {tr.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
