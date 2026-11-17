import React, { useState } from 'react';
import {
  companyOverview,
  problemStatements,
  solutionStatements,
  marketStats,
  gtmSteps,
  growthRoadmap
} from '../data';
import { ActiveTab } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowRight,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Award,
  ChevronRight,
  Layers,
  Compass,
  Calendar,
  Check
} from 'lucide-react';

interface HomeViewProps {
  setActiveTab: (tab: ActiveTab) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ setActiveTab }) => {
  const [activeProblemIdx, setActiveProblemIdx] = useState(0);
  const [activeRoadmapPhase, setActiveRoadmapPhase] = useState(0);

  const handleCTA = (tab: ActiveTab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="animate-fadeIn" id="home-view">

      {/* 1. PROFESSIONAL POLISH HERO SECTION */}
      <section className="relative overflow-hidden py-10 md:py-20 lg:py-24 bg-[#FAF5F5] border-b border-gray-100" id="hero-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

            {/* Left Hero Column: Col-span-7 */}
            <div className="lg:col-span-7 flex flex-col justify-center text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 bg-red-50 text-[#800A2C] text-[10px] font-bold uppercase tracking-[0.2em] rounded-md border border-red-100 w-fit">
                <span className="h-2 w-2 rounded-full bg-[#800A2C] animate-pulse"></span>
                Established 2026 • Karnataka, India
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0B192C] leading-[1.15] mb-6 tracking-tight font-display">
                Building Sustainable <br className="hidden sm:inline" />
                <span className="text-[#800A2C] relative inline-block">
                  Infrastructure for the Future
                  <span className="absolute bottom-1 left-0 w-full h-1.5 bg-red-100 -z-10"></span>
                </span>
              </h1>

              <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-lg mb-8">
                Strategic regional mobilization for large-scale government infrastructure. Bridging the gap between ambitious planning and precision civil execution across roads, bridges, and municipal grids.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
                <button
                  id="hero-cta-contact"
                  onClick={() => handleCTA('contact')}
                  className="px-8 py-4 bg-[#800A2C] hover:bg-[#60051E] text-white text-xs font-bold uppercase tracking-widest rounded-md shadow-lg hover:shadow-xl transition-all duration-250 cursor-pointer flex items-center justify-center gap-2 group"
                >
                  Initiate Partnership Bids
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  id="hero-cta-services"
                  onClick={() => handleCTA('offerings')}
                  className="px-8 py-4 bg-white hover:bg-gray-50 text-[#0B192C] hover:text-[#800A2C] text-xs font-bold uppercase tracking-widest rounded-md border border-gray-200 hover:border-[#800A2C] transition-all duration-250 cursor-pointer text-center"
                >
                  Explore Capabilities
                </button>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200 max-w-lg">
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-[#800A2C] font-display">USD 206B</div>
                  <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Indian Market Size</p>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-[#800A2C] font-display">~8%</div>
                  <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Annual CAGR</p>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-[#800A2C] font-display">100%</div>
                  <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Gov Compliance</p>
                </div>
              </div>
            </div>

            {/* Right Hero Column: Col-span-5 */}
            <div className="lg:col-span-5 bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 flex flex-col justify-between shadow-xl shadow-gray-100/40 relative">

              {/* Floating aesthetic background indicator */}
              <div className="absolute -top-3 -right-3 w-20 h-20 bg-[#800A2C] opacity-5 rounded-full blur-xl"></div>

              {/* Solution Cards */}
              <div className="space-y-5">
                <h3 className="text-xs uppercase font-extrabold tracking-widest text-gray-400 mb-2">Our Strategic Pillars</h3>

                <div className="p-5 bg-[#FAF5F5] rounded-xl border border-red-50 relative overflow-hidden group hover:border-[#800A2C]/20 transition-all duration-300">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-[#800A2C] opacity-5 -mr-10 -mt-10 rounded-full"></div>
                  <h4 className="text-xs font-black text-[#800A2C] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#800A2C]"></span>
                    Advanced Tender Bidding
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Utilizing local expertise to design compliant, competitive bids for CPWD, KPWD, and Railway tenders.
                  </p>
                </div>

                <div className="p-5 bg-white rounded-xl border border-gray-150 hover:border-gray-300 shadow-xs transition-all duration-300">
                  <h4 className="text-xs font-black text-[#0B192C] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    Sustainable Infrastructure
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Integrating eco-concrete aggregates, wastewater grids, and low-emissions logistics into civic works.
                  </p>
                </div>

                <div className="p-5 bg-white rounded-xl border border-gray-150 hover:border-gray-300 shadow-xs transition-all duration-300">
                  <h4 className="text-xs font-black text-[#0B192C] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                    Regional Mobility Hub
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Rapid-response physical hub located in Davanagere coordinates for immediate regional mobilization.
                  </p>
                </div>
              </div>

              {/* Secondary Footer Info Inside Hero Column */}
              <div className="mt-8 p-5 bg-[#0B192C] rounded-xl flex items-center justify-between text-white shadow-md">
                <div>
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Registered Hub</p>
                  <p className="text-xs font-semibold text-slate-100">Davanagere, Karnataka</p>
                </div>
                <div className="w-px h-8 bg-slate-700"></div>
                <div className="text-right">
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Inquiry Desk</p>
                  <p className="text-xs font-bold text-[#FF5B7F]">{companyOverview.phone}</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 2. BRIDGING THE GAP (Interactive Problem vs Solution) */}
      <section className="py-16 md:py-24 bg-white" id="problem-solution-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs uppercase font-extrabold tracking-widest text-[#800A2C] mb-3">Bridging the Gap</h2>
            <p className="text-3xl md:text-4xl font-black text-[#0B192C] tracking-tight font-display mb-4">
              Solving Chronic Bottlenecks in India's Civic Civil Space
            </p>
            <p className="text-gray-500 text-sm md:text-base">
              Traditional infrastructure giants struggle with local compliance, eco-adoption, and deployment speed. RNSSY introduces systematic structural responsiveness.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            {/* Left Box: Bottlenecks (Slide 3) */}
            <div className="lg:col-span-5 space-y-3.5">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="text-amber-500 shrink-0" size={18} />
                <span className="text-xs uppercase font-black tracking-widest text-slate-400">Industry Constraints</span>
              </div>

              {problemStatements.map((prob, idx) => (
                <button
                  key={prob.id}
                  id={`prob-card-${prob.id}`}
                  onClick={() => setActiveProblemIdx(idx)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-300 cursor-pointer flex items-start gap-3.5 ${
                    activeProblemIdx === idx
                      ? 'bg-red-50/80 border-[#800A2C] shadow-xs ring-1 ring-[#800A2C]/20'
                      : 'bg-white border-gray-150 hover:border-gray-300 hover:bg-slate-50/60'
                  }`}
                >
                  <span
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 transition-colors ${
                      activeProblemIdx === idx ? 'bg-[#800A2C] text-white' : 'bg-gray-200 text-gray-600'
                    }`}
                  >
                    0{idx + 1}
                  </span>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <h3
                        className={`text-sm font-bold tracking-tight ${
                          activeProblemIdx === idx ? 'text-[#800A2C]' : 'text-[#0B192C]'
                        }`}
                      >
                        {prob.title}
                      </h3>
                      {activeProblemIdx === idx && (
                        <span className="text-[10px] uppercase font-extrabold text-[#800A2C] bg-red-100/70 px-2 py-0.5 rounded">
                          Selected Focus
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-gray-600 mt-1.5 leading-relaxed">
                      {prob.description}
                    </p>
                  </div>
                </button>
              ))}
            </div>

            {/* Right Box: Dynamic Matching RNSSY Solutions (Slide 4) */}
            <div className="lg:col-span-7 bg-[#FAF5F5] rounded-2xl border border-red-50/50 p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-6">
                <CheckCircle className="text-[#800A2C] shrink-0" size={20} />
                <span className="text-xs uppercase font-black tracking-widest text-[#800A2C]">
                  RNSSY Engineering Solution
                </span>
              </div>

              <div className="space-y-6">
                <div className="pb-4 border-b border-gray-200/60">
                  <span className="text-xs uppercase font-extrabold text-[#800A2C]/70">Mitigating Industry Failure:</span>
                  <p className="text-sm font-bold text-[#0B192C] mt-1 italic">
                    "{problemStatements[activeProblemIdx].title}"
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
                  {solutionStatements.map((sol, idx) => (
                    <div
                      key={sol.id}
                      className="p-5 bg-white rounded-xl border border-gray-100 shadow-xs hover:shadow-md transition-shadow group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-red-50 text-[#800A2C] flex items-center justify-center font-bold text-xs mb-3 group-hover:bg-[#800A2C] group-hover:text-white transition-colors">
                        ✓
                      </div>
                      <h4 className="text-xs font-bold uppercase tracking-wide text-[#0B192C] mb-1.5">
                        {sol.title}
                      </h4>
                      <p className="text-[11px] text-gray-500 leading-relaxed">
                        {sol.description}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-4 p-4 bg-white/70 rounded-xl border border-red-100/40 text-[11px] text-gray-500 text-center leading-relaxed font-medium">
                  "The civil market demands an agile partner that scales with speed while ensuring 100% adherence to regulatory CPWD, KPWD, and Railway frameworks."
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. MARKET EXPANSION BENTO GRID (Slide 8) */}
      <section className="py-16 md:py-24 bg-[#FAF5F5] border-y border-gray-100" id="market-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
            <div className="lg:col-span-6 text-left">
              <h2 className="text-xs uppercase font-extrabold tracking-widest text-[#800A2C] mb-3">
                India's Infrastructure Boom
              </h2>
              <p className="text-3xl md:text-4xl font-black text-[#0B192C] tracking-tight font-display">
                Trillion-Rupee Scale Opportunities
              </p>
            </div>
            <div className="lg:col-span-6 lg:text-left text-gray-500 text-sm leading-relaxed">
              We align our bidding strategy with aggressive national fiscal allocations. India’s infrastructure expansion is fueled by unprecedented smart city grants, state-highway expansions, and major rail upgrades.
            </div>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

            {/* Bento Block 1: Market Grow (2026 vs 2031) */}
            <div className="col-span-1 md:col-span-8 bg-white p-6 sm:p-8 rounded-2xl border border-gray-150 flex flex-col justify-between shadow-xs min-h-60 group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#800A2C] bg-red-50 px-2.5 py-1 rounded">
                    Sustained Market CAGR
                  </span>
                  <TrendingUp className="text-[#800A2C]" size={18} />
                </div>
                <h3 className="text-lg font-bold text-[#0B192C] tracking-tight mb-2">
                  India's Civil Market Trajectory
                </h3>
                <p className="text-xs text-gray-500 max-w-lg mb-6 leading-relaxed">
                  The Indian infrastructure market is projected to skyrocket from <strong className="text-gray-800">USD 206 Billion in 2026</strong> to <strong className="text-gray-800">USD 303 Billion by 2031</strong>, fueled by continuous central and state capital spending.
                </p>
              </div>

              {/* Progress visual comparison bar */}
              <div className="space-y-3 pt-4 border-t border-gray-100">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-semibold text-gray-600">2026: USD 206 Billion</span>
                  <span className="font-extrabold text-[#800A2C]">Baseline launch</span>
                </div>
                <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-[#800A2C]/40 h-full rounded-full transition-all duration-1000" style={{ width: '68%' }}></div>
                </div>

                <div className="flex justify-between items-center text-xs pt-1">
                  <span className="font-semibold text-gray-600">2031: USD 303 Billion</span>
                  <span className="font-extrabold text-[#800A2C] flex items-center gap-1">
                    +47% Expansion <TrendingUp size={12} />
                  </span>
                </div>
                <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-[#800A2C] h-full rounded-full transition-all duration-1000" style={{ width: '100%' }}></div>
                </div>
              </div>
            </div>

            {/* Bento Block 2: CAGR Card */}
            <div className="col-span-1 md:col-span-4 bg-[#800A2C] text-white p-6 sm:p-8 rounded-2xl flex flex-col justify-between shadow-md group">
              <div>
                <span className="text-[9px] uppercase font-extrabold tracking-widest text-red-200">
                  Expansion Speed
                </span>
                <div className="text-5xl font-black tracking-tighter mt-4 font-display text-white">
                  ~8%
                </div>
                <div className="text-sm font-bold text-red-100 mt-1">
                  Compound Annual Growth Rate
                </div>
              </div>
              <p className="text-[11px] text-red-100/80 leading-relaxed mt-6">
                Representing rapid and continuous demand curves in roads, potable water distribution pipeline meshes, and railway structural engineering.
              </p>
            </div>

            {/* Bento Block 3: Construction Volume (Rupees) */}
            <div className="col-span-1 md:col-span-5 bg-white p-6 sm:p-8 rounded-2xl border border-gray-150 flex flex-col justify-between shadow-xs">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400">
                  National Segment Size
                </span>
                <div className="text-4xl font-black text-[#0B192C] font-display mt-3">
                  ₹25.31 T
                </div>
                <p className="text-xs font-bold text-gray-600 mt-1">
                  Construction Sector (2026)
                </p>
              </div>
              <p className="text-[11px] text-gray-500 leading-relaxed mt-6">
                India's construction market scales to unmatched heights, offering vast scope for agile class-A contractors to lock in premium project packages.
              </p>
            </div>

            {/* Bento Block 4: Major Market Trends */}
            <div className="col-span-1 md:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-gray-150 flex flex-col justify-between shadow-xs">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#800A2C]">
                  Key Growth Catalysts
                </span>
                <h3 className="text-sm font-bold text-[#0B192C] mt-3 uppercase tracking-wide">
                  What is driving this infrastructure cycle?
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 text-[11px] text-gray-600">
                  <div className="flex items-start gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#800A2C] shrink-0 mt-1"></span>
                    <span><strong>Urbanization Pressure:</strong> Surging demand for municipal drinking grids and inter-city flyovers.</span>
                  </div>
                  <div className="flex items-start gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#800A2C] shrink-0 mt-1"></span>
                    <span><strong>Tighter Compliance:</strong> Government mandates preferring contractors with verified green credentials.</span>
                  </div>
                  <div className="flex items-start gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#800A2C] shrink-0 mt-1"></span>
                    <span><strong>Smart City Allocations:</strong> Multi-million rupee state budgets for centralized Karnataka highway work.</span>
                  </div>
                  <div className="flex items-start gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#800A2C] shrink-0 mt-1"></span>
                    <span><strong>Railway Modernization:</strong> Intense bidding cycles for platform widening and grade-crossing structures.</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-gray-100 text-[10px] text-gray-400">
                Source: mordorintelligence, finance, finance.yahoo.com
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. GO-TO-MARKET BIDDING STRATEGY (Slide 12 & 7) */}
      <section className="py-16 md:py-24 bg-white" id="gtm-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase font-extrabold tracking-widest text-[#800A2C]">
              Strategic Market Entry
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-[#0B192C] tracking-tight font-display mt-2 mb-4">
              Our 5-Tier Go-To-Market Blueprint
            </h2>
            <p className="text-gray-500 text-sm">
              We don't just wait for requests. We orchestrate a systematic path from early identification of CPWD/KPWD pipelines to rapid, sustainability-focused delivery.
            </p>
          </div>

          {/* GTM Steps timeline */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {gtmSteps.map((step) => (
              <div
                key={step.step}
                className="relative bg-white p-5 rounded-xl border border-gray-150 hover:border-[#800A2C]/20 transition-all duration-300 flex flex-col justify-between group shadow-2xs hover:translate-y-[-2px]"
                id={`gtm-step-card-${step.step}`}
              >
                <div>
                  <div className="w-9 h-9 rounded-full bg-red-50 text-[#800A2C] font-extrabold text-sm flex items-center justify-center mb-4 group-hover:bg-[#800A2C] group-hover:text-white transition-colors">
                    0{step.step}
                  </div>
                  <h3 className="text-xs font-black uppercase tracking-wider text-[#0B192C] mb-2 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-[11px] text-gray-500 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Visual arrow connector */}
                {step.step < 5 && (
                  <div className="hidden md:block absolute top-1/2 -right-3.5 transform -translate-y-1/2 z-10 text-gray-300">
                    <ChevronRight size={20} />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* STP highlights (Slide 7) */}
          <div className="mt-12 p-6 sm:p-8 bg-[#FAF5F5] rounded-2xl border border-red-50/50">
            <h3 className="text-xs uppercase font-extrabold tracking-widest text-[#800A2C] mb-6 text-center">
              STP Strategy: Strategic Market Focus
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-gray-600">
              <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-3xs">
                <h4 className="font-extrabold uppercase tracking-wider text-[#0B192C] mb-3 flex items-center gap-1.5 pb-2 border-b border-gray-100">
                  <Layers size={14} className="text-[#800A2C]" />
                  1. Segmentation
                </h4>
                <ul className="space-y-2">
                  <li><strong>Geographic:</strong> Focus on Pan-India, starting with Karnataka urban & rural districts.</li>
                  <li><strong>Demographic:</strong> Public departments, railway boards, and class-A developmental agencies.</li>
                  <li><strong>Behavioral:</strong> Clients seeking cost-effective, durable, and green-compliant road/bridge civil works.</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-3xs">
                <h4 className="font-extrabold uppercase tracking-wider text-[#0B192C] mb-3 flex items-center gap-1.5 pb-2 border-b border-gray-100">
                  <Compass size={14} className="text-[#800A2C]" />
                  2. Targeting
                </h4>
                <ul className="space-y-2">
                  <li><strong>Primary:</strong> KPWD, CPWD, and Railway tenders where our localized execution footprint offers immediate mobilization advantages.</li>
                  <li><strong>Secondary:</strong> Regional developers seeking high-grade, sustainable earthmoving, concrete structures, and water line laying subcontracts.</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-3xs">
                <h4 className="font-extrabold uppercase tracking-wider text-[#0B192C] mb-3 flex items-center gap-1.5 pb-2 border-b border-gray-100">
                  <Award size={14} className="text-[#800A2C]" />
                  3. Positioning
                </h4>
                <p className="leading-relaxed">
                  <strong>The Agile Regional Champion:</strong> We position ourselves as the premier tech-enabled, highly compliant, local alternative to standard legacy central builders. Delivering projects ahead of schedule, with eco-responsible concrete, and zero audit friction.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 5. GROWTH ROADMAP SLIDER (Slide 13) */}
      <section className="py-16 md:py-24 bg-[#FAF5F5] border-t border-gray-100" id="roadmap-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div className="text-left max-w-xl">
              <h2 className="text-xs uppercase font-extrabold tracking-widest text-[#800A2C] mb-3">
                Scaling for Success
              </h2>
              <p className="text-3xl font-black text-[#0B192C] tracking-tight font-display">
                Growth Roadmap & Timeline
              </p>
            </div>
            {/* Toggle tabs for Phases */}
            <div className="flex bg-white border border-gray-200 rounded-lg p-1.5 mt-6 md:mt-0 shadow-2xs">
              {growthRoadmap.map((rm, idx) => (
                <button
                  key={idx}
                  id={`roadmap-tab-${idx}`}
                  onClick={() => setActiveRoadmapPhase(idx)}
                  className={`px-5 py-2 text-xs font-bold uppercase tracking-wider rounded-md cursor-pointer transition-all duration-200 ${activeRoadmapPhase === idx
                    ? 'bg-[#800A2C] text-white shadow-sm'
                    : 'text-gray-500 hover:text-gray-800 hover:bg-gray-50'
                    }`}
                >
                  Phase {idx + 1}
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Phase Content */}
          <div className="bg-white rounded-2xl border border-gray-150 p-6 sm:p-8 shadow-xs">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeRoadmapPhase}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                id="active-roadmap-content"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-gray-100">
                  <div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#FDF2F4] text-[#800A2C] text-xs font-extrabold uppercase tracking-widest">
                      <Calendar size={12} />
                      {growthRoadmap[activeRoadmapPhase].timeframe}
                    </span>
                    <h3 className="text-xl font-bold text-[#0B192C] mt-2 tracking-tight">
                      {growthRoadmap[activeRoadmapPhase].title}
                    </h3>
                  </div>
                  <div className="text-sm font-extrabold uppercase tracking-widest text-gray-400">
                    {growthRoadmap[activeRoadmapPhase].phase}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
                  {growthRoadmap[activeRoadmapPhase].points.map((pt, index) => (
                    <div
                      key={index}
                      className="bg-[#FAF5F5] p-5 rounded-xl border border-red-50/50 hover:border-[#800A2C]/10 transition-colors"
                    >
                      <div className="w-7 h-7 rounded-full bg-white text-[#800A2C] font-extrabold text-xs flex items-center justify-center border border-red-50 shadow-3xs mb-4">
                        {index + 1}
                      </div>
                      <h4 className="text-xs uppercase font-extrabold tracking-wider text-[#0B192C] mb-2">
                        {pt.category}
                      </h4>
                      <p className="text-[11px] text-gray-500 leading-relaxed">
                        {pt.description}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Secondary Footer Highlights */}
          <div className="mt-8 flex flex-wrap gap-4 items-center justify-center text-xs text-gray-500 font-medium bg-white/60 p-4 rounded-xl border border-gray-150">
            <span className="flex items-center gap-1 text-[#800A2C] font-bold">
              <Check size={14} /> Regional Consolidation
            </span>
            <span className="text-gray-300">•</span>
            <span className="flex items-center gap-1 text-[#800A2C] font-bold">
              <Check size={14} /> Operational Scale-up
            </span>
            <span className="text-gray-300">•</span>
            <span className="flex items-center gap-1 text-[#800A2C] font-bold">
              <Check size={14} /> Green Infrastructure Leadership
            </span>
          </div>

        </div>
      </section>

      {/* 6. GLOBAL BOTTOM CALL TO ACTION */}
      <section className="bg-[#0B192C] text-white py-16 relative overflow-hidden" id="cta-bottom">
        {/* Abstract vector overlays */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-1/2 left-1/4 w-80 h-80 rounded-full border-4 border-white/20 transform -translate-y-1/2 -translate-x-1/2"></div>
          <div className="absolute top-1/2 right-1/4 w-96 h-96 rounded-full border border-white/10 transform -translate-y-1/2 translate-x-1/2"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-[10px] uppercase font-extrabold tracking-widest text-[#FF5B7F] bg-white/5 px-3 py-1.5 rounded border border-white/10">
            Open For Tender Collaboration & Series A discussions
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight font-display mt-6 mb-4">
            Partner With Us to Build <br />the Infrastructure of Tomorrow
          </h2>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-8">
            Whether you are a government department aiming for clean, timely civil completion, or a strategic investor eyeing Series A growth, RNSSY represents a highly competent, low-overhead partner.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              id="cta-bottom-btn"
              onClick={() => handleCTA('contact')}
              className="w-full sm:w-auto px-8 py-4 bg-[#800A2C] hover:bg-[#60051E] text-white text-xs font-bold uppercase tracking-widest rounded-md shadow-md transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 group hover:translate-y-[-1px]"
            >
              Contact Our Davanagere Hub
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              id="cta-bottom-about"
              onClick={() => handleCTA('about')}
              className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 text-white text-xs font-bold uppercase tracking-widest rounded-md border border-white/15 hover:border-white/30 transition-all duration-200 cursor-pointer"
            >
              Learn Our Vision
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
