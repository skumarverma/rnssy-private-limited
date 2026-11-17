import React from 'react';
import { teamMembers } from '../data';
import { ActiveTab } from '../types';
import { ShieldCheck, HardHat, GraduationCap, Briefcase, Award } from 'lucide-react';

interface TeamPageProps {
  setActiveTab: (tab: ActiveTab) => void;
}

export const TeamPage: React.FC<TeamPageProps> = ({ setActiveTab }) => {
  return (
    <div className="animate-fadeIn py-12 md:py-20 lg:py-24 bg-[#FAF5F5]" id="team-view">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Title */}
        <div className="text-left max-w-3xl mb-16">
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#800A2C] bg-red-50 px-3 py-1.5 rounded border border-red-100">
            Corporate Leadership
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-[#0B192C] tracking-tight font-display mt-4 mb-6">
            The Visionaries Guiding RNSSY
          </h1>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Our board combines elite corporate compliance, commercial contract mastery, and more than a decade of ground-level civil project execution. Balancing regulatory bidding rigor with robust site-level management.
          </p>
        </div>

        {/* Directors grid layout (Slide 14) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
          {teamMembers.map((member) => (
            <div 
              key={member.id}
              className="bg-white rounded-2xl border border-gray-150 p-6 sm:p-8 shadow-xs flex flex-col md:flex-row gap-6 items-start hover:border-[#800A2C]/20 transition-all duration-300 group"
              id={`team-card-${member.id}`}
            >
              {/* Director Icon Frame */}
              <div className="w-full md:w-40 h-48 md:h-52 shrink-0 relative rounded-xl overflow-hidden bg-red-50/50 flex items-center justify-center shadow-2xs border border-red-100/50">
                {member.id === 'team1' ? (
                  // Female silhouette icon
                  <svg className="w-16 h-16 text-[#800A2C] opacity-80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 21v-2a4 4 0 0 0-4-4H10a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                    <path d="M8 7c0-2.5 1-4 4-4s4 1.5 4 4c0 1.5-.5 2-1 2.5S14 11 14 11h-4s0-1.5-.5-2S8 8.5 8 7z" fill="currentColor" fillOpacity="0.15" />
                  </svg>
                ) : (
                  // Male silhouette icon
                  <svg className="w-16 h-16 text-[#800A2C] opacity-80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 21v-2a4 4 0 0 0-4-4H10a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                )}
                <div className="absolute bottom-2 left-2 text-white">
                  <span className="text-[8px] uppercase font-bold tracking-widest bg-[#800A2C] px-1.5 py-0.5 rounded">
                    Director
                  </span>
                </div>
              </div>

              {/* Director Description */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-extrabold text-[#0B192C] tracking-tight">
                    {member.name}
                  </h3>
                  <p className="text-xs font-bold text-[#800A2C] uppercase tracking-wider mt-0.5">
                    {member.role}
                  </p>
                </div>

                {/* Badges details */}
                <div className="space-y-2 pt-2 border-t border-gray-100 text-[11px] text-gray-600">
                  <div className="flex items-center gap-2">
                    <GraduationCap size={14} className="text-gray-400" />
                    <span><strong>Academic:</strong> {member.qualifications}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Briefcase size={14} className="text-gray-400" />
                    <span><strong>Experience:</strong> {member.experience}</span>
                  </div>
                </div>

                <p className="text-xs text-gray-500 leading-relaxed pt-2">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Corporate Credo / Leadership Values */}
        <div className="bg-[#0B192C] text-white rounded-2xl p-6 sm:p-8 md:p-12 shadow-md relative overflow-hidden" id="governance-credo">
          <div className="absolute top-0 right-0 w-48 h-48 bg-white/2 rounded-full blur-2xl"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs uppercase font-extrabold tracking-widest text-[#FF5B7F] bg-white/5 px-2.5 py-1 rounded">
                Robust Governance
              </span>
              <h3 className="text-2xl md:text-3xl font-black font-display tracking-tight">
                Our Operational Philosophy
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                By fusing commercial administrative compliance (MBA-led) with rigid engineering site supervision (Technical track), RNSSY guarantees high-durability infrastructure builds. We do not compromise on material grades, we eliminate subcontracting delays, and we comply fully with GST and RERA mandates.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-2">
                <div className="flex items-center gap-2 text-xs">
                  <ShieldCheck className="text-emerald-400" size={16} />
                  <span>Transparent Auditing</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <HardHat className="text-[#FF5B7F]" size={16} />
                  <span>On-site Safety Audits</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <Award className="text-amber-400" size={16} />
                  <span>A-Class Mobilization</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white/5 rounded-xl border border-white/10 p-6 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#FF5B7F]">
                Corporate Registrations
              </h4>
              
              <div className="space-y-3 text-xs text-slate-300">
                <div className="flex justify-between py-2 border-b border-white/10">
                  <span className="font-semibold">Registered Year</span>
                  <span className="text-white font-bold">2026</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/10">
                  <span className="font-semibold">Tender Compliance</span>
                  <span className="text-white font-bold">CPWD & KPWD</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/10">
                  <span className="font-semibold">Sourcing Policy</span>
                  <span className="text-white font-bold">Direct Local aggregates</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="font-semibold">Legal Operations</span>
                  <span className="text-white font-bold">Davanagere Hub</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
