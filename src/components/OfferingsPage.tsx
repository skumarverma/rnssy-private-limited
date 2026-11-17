import React, { useState } from 'react';
import { offerings, marketPositioningTable } from '../data';
import { ActiveTab } from '../types';
import { CheckCircle, ShieldCheck, Award, Zap, Layers, Compass } from 'lucide-react';

interface OfferingsPageProps {
  setActiveTab: (tab: ActiveTab, offeringIdx?: number) => void;
  initialOfferingIdx?: number;
}

export const OfferingsPage: React.FC<OfferingsPageProps> = ({ setActiveTab, initialOfferingIdx = 0 }) => {
  const [activeTabIdx, setActiveTabIdx] = useState(initialOfferingIdx);

  React.useEffect(() => {
    if (initialOfferingIdx !== undefined) {
      setActiveTabIdx(initialOfferingIdx);
    }
  }, [initialOfferingIdx]);

  return (
    <div className="animate-fadeIn py-12 md:py-20 lg:py-24 bg-[#FAF5F5]" id="offerings-view">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Title */}
        <div className="text-left max-w-3xl mb-16">
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#800A2C] bg-red-50 px-3 py-1.5 rounded border border-red-100">
            Our Infrastructure Offerings
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-[#0B192C] tracking-tight font-display mt-4 mb-6">
            Elite Civil Engineering & Public Works
          </h1>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            We deliver state-of-the-art public civil assets. Our operations combine traditional structural durability with digital scheduling, local logistics, and certified ecological responsibility.
          </p>
        </div>

        {/* Vertical/Horizontal Quick Selector Tab for Offerings (Slide 5) */}
        <div className="flex flex-wrap gap-2.5 mb-10 border-b border-gray-200 pb-4">
          {offerings.map((off, idx) => (
            <button
              key={off.id}
              id={`offering-tab-${off.id}`}
              onClick={() => setActiveTabIdx(idx)}
              className={`px-5 py-3 text-xs font-bold uppercase tracking-wider rounded-lg transition-all cursor-pointer ${
                activeTabIdx === idx
                  ? 'bg-[#800A2C] text-white shadow-sm'
                  : 'bg-white text-gray-500 hover:text-gray-800 border border-gray-150 hover:border-gray-350'
              }`}
            >
              {off.title}
            </button>
          ))}
        </div>

        {/* Selected Offering Deep Dive Layout */}
        <div className="bg-white rounded-2xl border border-gray-150 p-6 sm:p-8 md:p-10 shadow-xs mb-20" id="offering-deep-dive">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Visual Element column */}
            <div className="lg:col-span-5 relative group overflow-hidden rounded-2xl shadow-sm border border-gray-100 bg-gray-900">
              <img 
                src={offerings[activeTabIdx].imageUrl} 
                alt={offerings[activeTabIdx].title}
                className="w-full h-80 sm:h-96 md:h-[400px] object-cover object-center rounded-2xl transition-transform duration-700 group-hover:scale-105"
                id={`offering-img-${offerings[activeTabIdx].id}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-70"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white flex items-center justify-between">
                <span className="text-[10px] uppercase font-black tracking-widest bg-[#800A2C] px-2.5 py-1 rounded-md shadow-xs">
                  RNSSY Engineering Asset
                </span>
                <span className="text-[10px] font-bold text-slate-200 bg-black/40 backdrop-blur-md px-2 py-1 rounded">
                  {offerings[activeTabIdx].title}
                </span>
              </div>
            </div>

            {/* Text description column */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#800A2C] flex items-center gap-1">
                <ShieldCheck size={14} />
                Division Specifications
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#0B192C] tracking-tight font-display">
                {offerings[activeTabIdx].title}
              </h2>
              <p className="text-xs sm:text-sm font-semibold text-gray-700">
                {offerings[activeTabIdx].shortDescription}
              </p>
              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                {offerings[activeTabIdx].detailedDescription}
              </p>

              {/* Deliverables checklist */}
              <div className="pt-4 border-t border-gray-100">
                <h4 className="text-xs uppercase font-extrabold text-[#0B192C] tracking-wider mb-3">
                  Core Structural Deliverables
                </h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {offerings[activeTabIdx].deliverables.map((del, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-gray-600">
                      <span className="text-emerald-600 font-bold shrink-0">✓</span>
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Competitive Edge - Benchmarking success (Slide 11) */}
        <div className="bg-white rounded-2xl border border-gray-150 p-6 sm:p-8 md:p-10 shadow-xs" id="competitive-matrix">
          <div className="text-left max-w-2xl mb-10">
            <span className="text-xs uppercase font-extrabold tracking-widest text-[#800A2C] flex items-center gap-1">
              <Compass size={14} className="text-[#800A2C]" />
              Strategic Advantage
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-[#0B192C] tracking-tight font-display mt-2 mb-4">
              Benchmarking Success: Standing Out in the Market
            </h3>
            <p className="text-gray-500 text-xs sm:text-sm">
              Established multi-billion builders often deliver legacy, carbon-heavy, slow-mobilized templated works. Here is how RNSSY's agile structure wins regional public tenders.
            </p>
          </div>

          {/* Responsive Table Overlay */}
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="min-w-full divide-y divide-gray-200 text-left text-xs sm:text-sm">
              <thead className="bg-[#FAF5F5]">
                <tr>
                  <th scope="col" className="px-6 py-4 font-black uppercase tracking-wider text-[#0B192C]">
                    Infrastructure Metric
                  </th>
                  <th scope="col" className="px-6 py-4 font-bold text-gray-500 uppercase tracking-wider">
                    Traditional Giants (L&T, Tata, etc.)
                  </th>
                  <th scope="col" className="px-6 py-4 font-black uppercase tracking-widest text-[#800A2C] bg-red-50/50">
                    RNSSY Edge
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {marketPositioningTable.features.map((feature, idx) => (
                  <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-6 py-4 font-bold text-[#0B192C]">
                      {feature.name}
                    </td>
                    <td className="px-6 py-4 text-gray-500">
                      {feature.competitors}
                    </td>
                    <td className="px-6 py-4 font-extrabold text-[#800A2C] bg-red-50/30">
                      <span className="inline-flex items-center gap-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#800A2C]"></span>
                        {feature.rnssy}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 p-5 bg-[#FAF5F5] rounded-xl border border-red-50 text-[11px] text-gray-600 leading-relaxed text-center font-medium">
            "By maintaining a localized Davanagere materials hub and integrating direct procurement with aggregate clusters, we reduce mobilization costs, offering competitive bidding figures on bills-of-quantities without sacrificing raw materials grades."
          </div>
        </div>

        {/* Global call to action block */}
        <div className="mt-20 text-center bg-[#0B192C] text-white p-8 md:p-12 rounded-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
          <span className="text-[10px] font-bold text-[#FF5B7F] uppercase tracking-widest bg-white/5 px-2.5 py-1.5 rounded">
            Fulfill Civil Criteria
          </span>
          <h4 className="text-2xl md:text-3xl font-black mt-4 mb-4 font-display">
            Accelerate Your Municipal Bids & Pipelines
          </h4>
          <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto mb-8 leading-relaxed">
            Partner with us to secure class-A contractor standards, local state highway approvals, and top-tier civil durability.
          </p>
          <button
            id="offerings-cta-btn"
            onClick={() => setActiveTab('contact')}
            className="px-8 py-3.5 bg-[#800A2C] hover:bg-[#60051E] text-white text-xs font-bold uppercase tracking-widest rounded-md shadow-md transition-all duration-200 cursor-pointer"
          >
            Initiate Contact
          </button>
        </div>

      </div>
    </div>
  );
};
