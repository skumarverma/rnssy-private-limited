import React from 'react';
import { Logo } from './Logo';
import { ActiveTab } from '../types';
import { Phone, Mail, MapPin, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { companyOverview } from '../data';

interface FooterProps {
  setActiveTab: (tab: ActiveTab, offeringIdx?: number) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab }) => {
  const currentYear = new Date().getFullYear();

  const handleTabClick = (tabId: ActiveTab, offeringIdx?: number) => {
    setActiveTab(tabId, offeringIdx);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B192C] text-white pt-16" id="app-footer">
      {/* Upper Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 border-b border-slate-800">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
          
          {/* Column 1: Brand & Identity */}
          <div className="md:col-span-5 flex flex-col space-y-6">
            <div className="flex items-center space-x-2 bg-white/5 p-3 rounded-lg w-fit">
              <Logo size={46} textColor="text-white" />
            </div>
            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              We specialize in delivering high-quality civil and infrastructure solutions with precision, efficiency, and sustainability. Handling CPWD, KPWD, and railway tenders with elite corporate compliance.
            </p>
            {/* Quick trust badges */}
            <div className="flex flex-wrap gap-2 pt-2">
              {companyOverview.credentials.map((cred, idx) => (
                <span 
                  key={idx} 
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-slate-800 text-teal-400 border border-slate-700"
                >
                  <CheckCircle2 size={10} />
                  {cred}
                </span>
              ))}
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="md:col-span-2 flex flex-col space-y-4">
            <h3 className="text-xs uppercase font-extrabold tracking-widest text-slate-400 border-b border-slate-800 pb-2">
              Sitemap
            </h3>
            <ul className="space-y-2.5">
              <li>
                <button 
                  onClick={() => handleTabClick('home')} 
                  className="text-sm text-slate-300 hover:text-white flex items-center gap-1 group cursor-pointer"
                >
                  Home
                  <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleTabClick('about')} 
                  className="text-sm text-slate-300 hover:text-white flex items-center gap-1 group cursor-pointer"
                >
                  About Us
                  <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleTabClick('offerings')} 
                  className="text-sm text-slate-300 hover:text-white flex items-center gap-1 group cursor-pointer"
                >
                  Our Services
                  <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleTabClick('team')} 
                  className="text-sm text-slate-300 hover:text-white flex items-center gap-1 group cursor-pointer"
                >
                  The Team
                  <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleTabClick('contact')} 
                  className="text-sm text-slate-300 hover:text-white flex items-center gap-1 group cursor-pointer"
                >
                  Contact Us
                  <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Corporate Offerings */}
          <div className="md:col-span-2 flex flex-col space-y-4">
            <h3 className="text-xs uppercase font-extrabold tracking-widest text-slate-400 border-b border-slate-800 pb-2">
              Services
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <button 
                  onClick={() => handleTabClick('offerings', 1)} 
                  className="hover:text-white transition-colors flex items-center gap-1.5 group cursor-pointer text-left w-full"
                >
                  <span>Bridge Engineering</span>
                  <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity text-[#800A2C]" />
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleTabClick('offerings', 2)} 
                  className="hover:text-white transition-colors flex items-center gap-1.5 group cursor-pointer text-left w-full"
                >
                  <span>Highway Grading</span>
                  <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity text-[#800A2C]" />
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleTabClick('offerings', 3)} 
                  className="hover:text-white transition-colors flex items-center gap-1.5 group cursor-pointer text-left w-full"
                >
                  <span>Water Networks</span>
                  <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity text-[#800A2C]" />
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleTabClick('offerings', 4)} 
                  className="hover:text-white transition-colors flex items-center gap-1.5 group cursor-pointer text-left w-full"
                >
                  <span>Government Tenders</span>
                  <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity text-[#800A2C]" />
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleTabClick('offerings', 0)} 
                  className="hover:text-white transition-colors flex items-center gap-1.5 group cursor-pointer text-left w-full"
                >
                  <span>Civil Architecture</span>
                  <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity text-[#800A2C]" />
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Headquarters Contacts */}
          <div className="md:col-span-3 flex flex-col space-y-4">
            <h3 className="text-xs uppercase font-extrabold tracking-widest text-slate-400 border-b border-slate-800 pb-2">
              Inquiries
            </h3>
            <div className="space-y-3.5 text-sm text-slate-300">
              <a 
                href={`tel:${companyOverview.phone}`} 
                className="flex items-center gap-2.5 hover:text-white transition-colors"
              >
                <Phone size={16} className="text-[#800A2C]" />
                <span>{companyOverview.phone}</span>
              </a>
              <a 
                href={`mailto:${companyOverview.email}`} 
                className="flex items-center gap-2.5 hover:text-white transition-colors break-all"
              >
                <Mail size={16} className="text-[#800A2C]" />
                <span>{companyOverview.email}</span>
              </a>
              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="text-[#800A2C] shrink-0 mt-0.5" />
                <span className="text-xs leading-normal">
                  {companyOverview.fullAddress}
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Middle Copyright Band */}
      <div className="bg-[#07101E] py-4 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>
            © {companyOverview.established} - {currentYear} {companyOverview.name}. All rights reserved.
          </span>
          <span className="text-[10px] text-slate-600 uppercase tracking-widest">
            CIN Registered • Central Davanagere Hub
          </span>
        </div>
      </div>

      {/* Bottom Feature Bar (Matches Professional Polish Spec exactly) */}
      <div className="bg-[#800A2C] py-4 md:py-3.5 text-white overflow-x-auto whitespace-nowrap scrollbar-none border-t border-red-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-8 text-[10px] font-bold uppercase tracking-widest">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2 shrink-0">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Active Projects: NH-4 Expansion</span>
            </div>
            <div className="flex items-center space-x-2 shrink-0">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Approval: A-Class Contractor Status</span>
            </div>
            <div className="flex items-center space-x-2 shrink-0">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Compliance: RERA & GST Registered</span>
            </div>
          </div>
          <div className="shrink-0 opacity-70 tracking-wider text-right hidden lg:block">
            Seed Fund Series A • Document v1.2
          </div>
        </div>
      </div>
    </footer>
  );
};
