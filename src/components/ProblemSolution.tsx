import { problemStatements, solutionStatements } from '../data';
import { AlertTriangle, ShieldCheck, ArrowRight, Construction, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function ProblemSolution() {
  return (
    <section className="py-20 bg-brand-bg border-b border-brand-border/40 relative">
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-30" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-brand-accent uppercase tracking-widest bg-brand-accent-light px-3 py-1 rounded-full border border-brand-accent/10">
            Bridging The Gap
          </span>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-brand-primary sm:text-4xl mt-3 leading-tight">
            Overcoming Crucial Challenges in Civil Infrastructure
          </h2>
          <p className="font-sans text-brand-text-light text-base mt-4">
            India's booming construction landscape requires a standard of reliability, compliance, and ecological responsibility that traditional players consistently fail to achieve.
          </p>
        </div>

        {/* Side-by-Side Problem & Solution Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT: Market Bottlenecks (The Problems) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="bg-red-50 text-red-600 p-2 rounded-lg border border-red-100">
                <AlertTriangle className="h-5 w-5" />
              </div>
              <h3 className="font-display text-xl font-bold text-brand-primary">
                Current Structural Bottlenecks
              </h3>
            </div>

            <div className="space-y-4">
              {problemStatements.map((prob, idx) => (
                <div 
                  key={prob.id} 
                  className="p-5 rounded-xl border border-red-100 bg-red-50/20 flex gap-4 transition-all hover:bg-red-50/30"
                  id={`problem-card-${prob.id}`}
                >
                  <span className="font-mono text-sm font-bold text-red-500 bg-red-50 border border-red-100 flex h-6 w-6 rounded-full items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <div className="font-sans">
                    <h4 className="font-bold text-sm text-brand-primary">{prob.title}</h4>
                    <p className="text-xs text-brand-text-light leading-relaxed mt-1">{prob.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: RNSSY's Enterprise Blueprint (The Solutions) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="bg-brand-accent-light text-brand-accent p-2 rounded-lg border border-brand-accent/10">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="font-display text-xl font-bold text-brand-primary">
                The RNSSY Engineering Blueprint
              </h3>
            </div>

            <div className="space-y-4">
              {solutionStatements.map((sol, idx) => (
                <div 
                  key={sol.id} 
                  className="p-5 rounded-xl border border-brand-accent/20 bg-white shadow-sm flex gap-4 transition-all hover:border-brand-accent/40 hover:shadow-md"
                  id={`solution-card-${sol.id}`}
                >
                  <span className="font-mono text-sm font-bold text-brand-accent bg-brand-accent-light border border-brand-accent/10 flex h-6 w-6 rounded-full items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <div className="font-sans">
                    <h4 className="font-bold text-sm text-brand-primary">{sol.title}</h4>
                    <p className="text-xs text-brand-text-light leading-relaxed mt-1">{sol.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick trust metrics link */}
            <div className="bg-gradient-to-r from-brand-primary to-brand-secondary p-6 rounded-xl text-white flex items-center justify-between gap-4 shadow-sm font-sans mt-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-white/10 text-brand-accent">
                  <Construction className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white">Need a Fully Compliant Partner?</h4>
                  <p className="text-xs text-slate-300">We respond to state bids in under 48 hours.</p>
                </div>
              </div>
              <ArrowRight className="h-5 w-5 text-brand-accent shrink-0" />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
