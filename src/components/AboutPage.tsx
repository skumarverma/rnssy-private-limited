import React from 'react';
import { companyOverview, coreValues } from '../data';
import { ActiveTab } from '../types';
import { 
  Shield, 
  Briefcase, 
  Leaf, 
  Zap, 
  Cpu, 
  Users, 
  Building2, 
  MapPin, 
  ArrowRight, 
  Award,
  BookOpen
} from 'lucide-react';

interface AboutViewProps {
  setActiveTab: (tab: ActiveTab) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ setActiveTab }) => {
  // Map standard string keys to beautiful Lucide icons
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Shield': return <Shield className="text-[#800A2C]" size={24} />;
      case 'Briefcase': return <Briefcase className="text-[#800A2C]" size={24} />;
      case 'Leaf': return <Leaf className="text-emerald-600" size={24} />;
      case 'Zap': return <Zap className="text-amber-500" size={24} />;
      case 'Cpu': return <Cpu className="text-blue-600" size={24} />;
      case 'Users': return <Users className="text-[#800A2C]" size={24} />;
      default: return <Award className="text-[#800A2C]" size={24} />;
    }
  };

  return (
    <div className="animate-fadeIn py-12 md:py-20 lg:py-24 bg-[#FAF5F5]" id="about-view">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Introduction */}
        <div className="text-left max-w-3xl mb-16">
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#800A2C] bg-red-50 px-3 py-1.5 rounded border border-red-100">
            About RNSSY Private Limited
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-[#0B192C] tracking-tight font-display mt-4 mb-6">
            Pioneering Robust, Eco-Responsible Infrastructure
          </h1>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Established in 2026, RNSSY Private Limited specializes in delivering high-quality civil and infrastructure solutions, ranging from bridge construction and road maintenance to water management and government contracts.
          </p>
        </div>

        {/* Vision & Mission Side-by-Side (Slide 2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          
          {/* Vision card */}
          <div className="bg-white rounded-2xl border border-gray-150 p-6 sm:p-8 shadow-xs relative overflow-hidden group hover:border-[#800A2C]/20 transition-all duration-300">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#800A2C] opacity-5 -mr-12 -mt-12 rounded-full"></div>
            <div className="w-10 h-10 rounded-lg bg-red-50 text-[#800A2C] flex items-center justify-center font-bold text-lg mb-6">
              👁
            </div>
            <h3 className="text-lg uppercase font-black tracking-wider text-[#800A2C] mb-4">
              Our Vision
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              To be a leading provider of innovative and sustainable civil infrastructure solutions, shaping India’s development through quality, efficiency, and timely execution of large-scale projects. We aim to bridge urban and rural landscapes with structural assets designed to endure.
            </p>
          </div>

          {/* Mission card */}
          <div className="bg-[#0B192C] text-white rounded-2xl p-6 sm:p-8 shadow-md relative overflow-hidden group transition-all duration-300">
            <div className="absolute top-0 right-0 w-24 h-24 bg-white opacity-5 -mr-12 -mt-12 rounded-full"></div>
            <div className="w-10 h-10 rounded-lg bg-white/10 text-[#FF5B7F] flex items-center justify-center font-bold text-lg mb-6">
              🎯
            </div>
            <h3 className="text-lg uppercase font-black tracking-wider text-[#FF5B7F] mb-4">
              Our Mission
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Deliver top-tier civil services in bridge construction, roadworks, and water management, focusing on government tenders, community impact, and long-term infrastructure development with the highest standards of professionalism and strict environmental compliance.
            </p>
          </div>

        </div>

        {/* Corporate Background Details and Credentials */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-20 bg-white rounded-2xl border border-gray-150 p-6 sm:p-8 shadow-2xs">
          
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xl font-bold text-[#0B192C] tracking-tight flex items-center gap-2">
              <Building2 className="text-[#800A2C]" size={20} />
              Corporate Roots & Bidding Credentials
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
              Based in the central hub of <strong className="text-gray-700">Davanagere, Karnataka</strong>, our strategic positioning allows us to mobilize engineers, heavy machinery, and aggregates swiftly across rural and urban developmental zones.
            </p>
            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
              Our legal and operating structure was built to fulfill strict central regulatory criteria. We operate with high internal transparency and maintain clean credit parameters, qualifying our bidding teams for high-value CPWD, KPWD, and railway project tenders.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-2.5">
                <MapPin className="text-[#800A2C] shrink-0 mt-0.5" size={16} />
                <div>
                  <h4 className="text-xs font-bold text-gray-800 uppercase tracking-wider">Registered Hub Address</h4>
                  <p className="text-[11px] text-gray-500 leading-normal mt-0.5">
                    {companyOverview.fullAddress}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <BookOpen className="text-[#800A2C] shrink-0 mt-0.5" size={16} />
                <div>
                  <h4 className="text-xs font-bold text-gray-800 uppercase tracking-wider">Strategic Focus Area</h4>
                  <p className="text-[11px] text-gray-500 leading-normal mt-0.5">
                    Central & Southern Karnataka, with active scaling to National pipelines.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#FAF5F5] rounded-xl border border-gray-100 p-6 space-y-4">
            <h4 className="text-xs uppercase font-extrabold tracking-widest text-[#800A2C]">
              Why government departments trust us:
            </h4>
            
            <div className="space-y-3 text-xs text-gray-600">
              <div className="flex items-center gap-2.5 bg-white p-3 rounded-lg border border-gray-150">
                <span className="text-emerald-600">✓</span>
                <span><strong>ISO compliance</strong> guidelines observed at site level</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white p-3 rounded-lg border border-gray-150">
                <span className="text-emerald-600">✓</span>
                <span><strong>Warm-mix asphalt paving</strong> for low thermal carbon emission</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white p-3 rounded-lg border border-gray-150">
                <span className="text-emerald-600">✓</span>
                <span><strong>Zero project-delay tolerance</strong> scheduling mechanisms</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white p-3 rounded-lg border border-gray-150">
                <span className="text-emerald-600">✓</span>
                <span><strong>Strict material grading</strong> certificates with every bill</span>
              </div>
            </div>
          </div>

        </div>

        {/* Six Foundational Values Grid (Slide 2) */}
        <div id="core-values-section">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs uppercase font-extrabold tracking-widest text-[#800A2C] mb-3">
              Corporate Creed
            </h2>
            <p className="text-3xl font-black text-[#0B192C] tracking-tight font-display">
              Our Foundational Core Values
            </p>
            <p className="text-gray-500 text-sm mt-3">
              We guide every project, bid negotiation, and material choice by these six professional pillars.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((val, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-xl border border-gray-150 p-6 shadow-3xs hover:border-[#800A2C]/20 transition-all duration-350 flex flex-col justify-between group"
                id={`value-card-${val.title.toLowerCase()}`}
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center mb-5 group-hover:bg-[#FDF2F4] transition-all duration-300">
                    {getIcon(val.iconName)}
                  </div>
                  <h3 className="text-sm font-extrabold text-[#0B192C] uppercase tracking-wider mb-2">
                    {val.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {val.description}
                  </p>
                </div>
                
                <div className="mt-5 pt-3 border-t border-gray-100 flex justify-end text-[#800A2C] opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                    Certified Pillar <ArrowRight size={10} />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Link block */}
        <div className="mt-20 bg-[#0B192C] text-white p-6 sm:p-8 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#FF5B7F]">
              Have a Government or Private Bidding Opportunity?
            </h4>
            <p className="text-xs text-slate-300 mt-1 max-w-xl leading-relaxed">
              Our engineers and bidding specialists can formulate a detailed, cost-optimized, and green-compliant bill-of-quantities proposal matching your parameters.
            </p>
          </div>
          <button
            id="about-cta-contact"
            onClick={() => setActiveTab('contact')}
            className="w-full sm:w-auto px-6 py-3 bg-[#800A2C] hover:bg-[#60051E] text-white text-xs font-bold uppercase tracking-widest rounded-md shadow-lg transition-transform duration-200 active:scale-98 cursor-pointer text-center whitespace-nowrap"
          >
            Contact Bidding Desk
          </button>
        </div>

      </div>
    </div>
  );
};
