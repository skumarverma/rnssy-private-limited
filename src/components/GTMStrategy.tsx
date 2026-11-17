import { gtmSteps } from '../data';
import { Target, Users2, ShieldAlert, CheckCircle, Navigation } from 'lucide-react';
import { motion } from 'motion/react';

export default function GTMStrategy() {
  const stpData = [
    {
      title: "Segmentation",
      icon: <Target className="h-5 w-5 text-brand-accent" />,
      bullets: [
        { key: "Geographic", value: "Pan-India infrastructure development, with deep tactical concentration inside urban & rural Karnataka." },
        { key: "Demographic", value: "State departments (KPWD, CPWD), Central Railway lines, municipal councils, and selective commercial developers." },
        { key: "Behavioral", value: "A high-integrity tier of clients demanding strict project delivery schedules, green certifications, and competitive costing." }
      ]
    },
    {
      title: "Targeting Focus",
      icon: <Users2 className="h-5 w-5 text-brand-accent" />,
      bullets: [
        { key: "Government Agencies", value: "Agile, high-compliance bidding targeting CPWD municipal sites, regional KPWD grids, and southern railway expansions." },
        { key: "Primary Sub-contractors", value: "Forming operational joint-ventures on heavy machinery pools and material aggregates with local Tier-1 operators." }
      ]
    },
    {
      title: "Positioning Standard",
      icon: <CheckCircle className="h-5 w-5 text-brand-accent" />,
      bullets: [
        { key: "Agile Regional Leader", value: "Positioned as the go-to regional execution specialist, handling complex public audits and logistics with 100% compliance." },
        { key: "Sustainability Built-In", value: "Standardizing low-carbon concrete and eco-sensitive operations, lowering public environmental compliance hurdles." }
      ]
    }
  ];

  return (
    <section className="py-20 bg-brand-bg border-b border-brand-border/40 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-brand-accent uppercase tracking-widest bg-brand-accent-light px-3 py-1 rounded-full border border-brand-accent/10">
            Market Alignment
          </span>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-brand-primary sm:text-4xl mt-3 leading-tight">
            Strategic STP Alignment & GTM Path
          </h2>
          <p className="font-sans text-brand-text-light text-base mt-4">
            How we identify opportunities, target key public bodies, and execute with structural and fiscal discipline.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* LEFT: STP framework details */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="font-display text-xl font-bold text-brand-primary mb-4 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-brand-accent" />
              STP Framework (Segment, Target, Position)
            </h3>

            <div className="space-y-6">
              {stpData.map((sec, idx) => (
                <div 
                  key={idx} 
                  className="p-6 rounded-xl border border-brand-border bg-white shadow-sm flex flex-col gap-4 hover:border-brand-accent/20 transition-all"
                  id={`stp-card-${idx}`}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-brand-accent-light">
                      {sec.icon}
                    </div>
                    <h4 className="font-sans font-bold text-base text-brand-primary">
                      {sec.title}
                    </h4>
                  </div>
                  
                  <ul className="space-y-3 font-sans text-xs">
                    {sec.bullets.map((b, bIdx) => (
                      <li key={bIdx} className="leading-relaxed text-brand-text-light">
                        <strong className="text-brand-primary font-semibold block sm:inline mr-1">
                          {b.key}:
                        </strong>
                        {b.value}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: GTM steps timeline */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="font-display text-xl font-bold text-brand-primary mb-4 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-brand-accent" />
              Go-To-Market Bidding Pipeline
            </h3>

            <div className="relative border-l-2 border-brand-border pl-6 ml-4 space-y-8 font-sans">
              {gtmSteps.map((step) => (
                <div key={step.step} className="relative" id={`gtm-step-${step.step}`}>
                  {/* Timeline bullet */}
                  <span className="absolute -left-[35px] top-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-white border-2 border-brand-accent font-mono text-xs font-bold text-brand-accent">
                    {step.step}
                  </span>

                  <div>
                    <h4 className="font-bold text-sm text-brand-primary flex items-center gap-2">
                      {step.title}
                    </h4>
                    <p className="text-xs text-brand-text-light leading-relaxed mt-1">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-brand-accent-light/50 border border-brand-accent/20 rounded-xl p-5 font-sans mt-6">
              <p className="text-xs font-semibold text-brand-primary leading-relaxed">
                "Our GTM relies on deep technical coordination and agile bidding. By remaining localized in central Davanagere, Karnataka, we outpace traditional contractors in regional mobilization time by over 40%."
              </p>
              <div className="flex items-center gap-2 mt-3">
                <Navigation className="h-4 w-4 text-brand-accent" />
                <span className="text-[10px] font-extrabold text-brand-accent uppercase tracking-wider">Davangere Headquarters Hub</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
