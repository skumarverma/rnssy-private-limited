import React, { useState } from 'react';
import { companyOverview, teamMembers } from '../data';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Check, 
  Copy, 
  ExternalLink, 
  Building2, 
  UserCheck, 
  FileText, 
  Navigation, 
  MessageSquare,
  ShieldCheck,
  PhoneCall,
  Calendar,
  Briefcase
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => {
      setCopiedField(null);
    }, 2500);
  };

  const mapDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(companyOverview.fullAddress)}`;
  const whatsappUrl = `https://wa.me/${companyOverview.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Hello RNSSY Private Limited, I would like to inquire about...')}`;

  return (
    <div className="animate-fadeIn py-12 md:py-20 lg:py-24 bg-[#FAF5F5]" id="contact-view">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* EXECUTIVE HERO HEADER BANNER */}
        <div className="relative rounded-3xl bg-gradient-to-br from-[#0B192C] via-[#1E293B] to-[#800A2C] p-8 md:p-12 mb-12 text-white shadow-xl overflow-hidden border border-slate-800">
          {/* Background Ambient Glow */}
          <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-[#800A2C]/25 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-1/3 -mb-12 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 max-w-4xl">
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="text-[11px] font-black tracking-widest uppercase text-white bg-[#800A2C] px-3.5 py-1.5 rounded-full border border-red-400/30 shadow-xs inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                Official Contact Desk
              </span>
              <span className="text-[11px] font-bold tracking-wider uppercase text-slate-300 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10">
                RNSSY Private Limited
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight font-display text-white mb-6 leading-tight">
              Direct Corporate <span className="text-red-400">Contact Information</span>
            </h1>

            {/* Subtitle / Summary */}
            <p className="text-slate-200 text-sm md:text-base lg:text-lg leading-relaxed max-w-3xl font-normal">
              Reach out directly to the executive management and engineering procurement desks of <strong className="text-white font-bold">RNSSY Private Limited</strong>. We are headquartered in Davanagere, Karnataka, providing dedicated response channels for government tenders, civil engineering partnerships, and supplier inquiries.
            </p>

            {/* Quick Metadata Strip */}
            <div className="mt-8 pt-6 border-t border-white/15 flex flex-wrap items-center gap-6 text-xs text-slate-300 font-medium">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>Headquarters: Davanagere, Karnataka</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                <span>Direct Executive Access</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-sky-400"></span>
                <span>Zero Middlemen</span>
              </div>
            </div>
          </div>
        </div>

        {/* TOP 3 PRIMARY CONTACT CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12" id="primary-contact-cards">
          
          {/* Card 1: Direct Phone Line */}
          <div className="bg-white rounded-2xl border border-gray-150 p-6 md:p-8 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-red-50/50 rounded-bl-full -mr-8 -mt-8 pointer-events-none transition-transform group-hover:scale-110"></div>
            <div>
              <div className="w-12 h-12 rounded-xl bg-red-50 text-[#800A2C] flex items-center justify-center mb-6 group-hover:bg-[#800A2C] group-hover:text-white transition-colors duration-300 shadow-2xs">
                <PhoneCall size={22} />
              </div>
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-gray-400 block mb-1">
                Direct Hotline Desk
              </span>
              <h3 className="text-xl font-black text-[#0B192C] mb-2 font-display">
                {companyOverview.phone}
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed mb-6">
                Available Monday through Saturday, 9:00 AM to 6:00 PM IST for urgent tender queries and project discussions.
              </p>
            </div>

            <div className="space-y-2.5 pt-4 border-t border-gray-100">
              <div className="grid grid-cols-2 gap-2">
                <a
                  href={`tel:${companyOverview.phone}`}
                  className="px-3 py-2.5 bg-[#800A2C] hover:bg-[#60051E] text-white text-xs font-bold rounded-lg text-center transition-colors flex items-center justify-center gap-1.5 shadow-2xs"
                  id="call-now-btn"
                >
                  <Phone size={13} />
                  Call Now
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-lg text-center transition-colors flex items-center justify-center gap-1.5 shadow-2xs"
                  id="whatsapp-btn"
                >
                  <MessageSquare size={13} />
                  WhatsApp
                </a>
              </div>
              <button
                onClick={() => handleCopy(companyOverview.phone, 'phone')}
                className="w-full px-3 py-2 bg-gray-50 hover:bg-gray-100 text-gray-700 text-xs font-semibold rounded-lg text-center transition-colors flex items-center justify-center gap-1.5 border border-gray-200 cursor-pointer"
                id="copy-phone-btn"
              >
                {copiedField === 'phone' ? (
                  <>
                    <Check size={13} className="text-emerald-600" />
                    <span className="text-emerald-600 font-bold">Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy size={13} />
                    <span>Copy Phone Number</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Card 2: Official Email */}
          <div className="bg-white rounded-2xl border border-gray-150 p-6 md:p-8 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-red-50/50 rounded-bl-full -mr-8 -mt-8 pointer-events-none transition-transform group-hover:scale-110"></div>
            <div>
              <div className="w-12 h-12 rounded-xl bg-red-50 text-[#800A2C] flex items-center justify-center mb-6 group-hover:bg-[#800A2C] group-hover:text-white transition-colors duration-300 shadow-2xs">
                <Mail size={22} />
              </div>
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-gray-400 block mb-1">
                Official Correspondence Email
              </span>
              <h3 className="text-lg md:text-xl font-black text-[#0B192C] mb-2 font-display break-all">
                {companyOverview.email}
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed mb-6">
                Official inbox for Bill-of-Quantities (BOQ), formal bids, procurement documents, and sub-contracting inquiries.
              </p>
            </div>

            <div className="space-y-2.5 pt-4 border-t border-gray-100">
              <a
                href={`mailto:${companyOverview.email}`}
                className="w-full px-3 py-2.5 bg-[#800A2C] hover:bg-[#60051E] text-white text-xs font-bold rounded-lg text-center transition-colors flex items-center justify-center gap-1.5 shadow-2xs"
                id="send-email-btn"
              >
                <Mail size={13} />
                Send Email Directly
              </a>
              <button
                onClick={() => handleCopy(companyOverview.email, 'email')}
                className="w-full px-3 py-2 bg-gray-50 hover:bg-gray-100 text-gray-700 text-xs font-semibold rounded-lg text-center transition-colors flex items-center justify-center gap-1.5 border border-gray-200 cursor-pointer"
                id="copy-email-btn"
              >
                {copiedField === 'email' ? (
                  <>
                    <Check size={13} className="text-emerald-600" />
                    <span className="text-emerald-600 font-bold">Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy size={13} />
                    <span>Copy Email Address</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Card 3: Registered Headquarters Address */}
          <div className="bg-white rounded-2xl border border-gray-150 p-6 md:p-8 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-red-50/50 rounded-bl-full -mr-8 -mt-8 pointer-events-none transition-transform group-hover:scale-110"></div>
            <div>
              <div className="w-12 h-12 rounded-xl bg-red-50 text-[#800A2C] flex items-center justify-center mb-6 group-hover:bg-[#800A2C] group-hover:text-white transition-colors duration-300 shadow-2xs">
                <MapPin size={22} />
              </div>
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-gray-400 block mb-1">
                Registered Central Office
              </span>
              <h3 className="text-base font-bold text-[#0B192C] mb-2 leading-snug">
                {companyOverview.fullAddress}
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed mb-6">
                Central Karnataka mobilization center and administrative office in Davanagere.
              </p>
            </div>

            <div className="space-y-2.5 pt-4 border-t border-gray-100">
              <a
                href={mapDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-3 py-2.5 bg-[#800A2C] hover:bg-[#60051E] text-white text-xs font-bold rounded-lg text-center transition-colors flex items-center justify-center gap-1.5 shadow-2xs"
                id="get-directions-btn"
              >
                <Navigation size={13} />
                Get Driving Directions
              </a>
              <button
                onClick={() => handleCopy(companyOverview.fullAddress, 'address')}
                className="w-full px-3 py-2 bg-gray-50 hover:bg-gray-100 text-gray-700 text-xs font-semibold rounded-lg text-center transition-colors flex items-center justify-center gap-1.5 border border-gray-200 cursor-pointer"
                id="copy-address-btn"
              >
                {copiedField === 'address' ? (
                  <>
                    <Check size={13} className="text-emerald-600" />
                    <span className="text-emerald-600 font-bold">Copied Address!</span>
                  </>
                ) : (
                  <>
                    <Copy size={13} />
                    <span>Copy Full Address</span>
                  </>
                )}
              </button>
            </div>
          </div>

        </div>

        {/* SECTION 2: KEY EXECUTIVE CONTACT DIRECTORY */}
        <div className="bg-white rounded-2xl border border-gray-150 p-6 md:p-8 shadow-xs mb-12" id="executives-contact-section">
          <div className="border-b border-gray-100 pb-6 mb-6">
            <span className="text-xs uppercase font-extrabold tracking-widest text-[#800A2C] bg-red-50 px-3 py-1 rounded">
              Leadership Directory
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-[#0B192C] font-display mt-3">
              Direct Executive Contact Personnel
            </h2>
            <p className="text-xs md:text-sm text-gray-500 mt-1">
              For high-value tender bidding, official compliance, and technical site mobilization, you can reach out directly to our corporate directors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {teamMembers.map((member) => (
              <div 
                key={member.id} 
                className="bg-[#FAF5F5] rounded-xl p-5 border border-red-100/60 flex flex-col sm:flex-row gap-5 items-start sm:items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#800A2C] text-white font-black text-lg flex items-center justify-center shrink-0 shadow-2xs">
                    {member.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-base font-black text-[#0B192C]">{member.name}</h3>
                    <p className="text-xs font-bold text-[#800A2C]">{member.role}</p>
                    <p className="text-[11px] text-gray-500 mt-0.5">{member.qualifications} • {member.experience}</p>
                  </div>
                </div>

                <div className="shrink-0 space-y-2 w-full sm:w-auto">
                  {member.id === 'team1' ? (
                    <a
                      href={`mailto:${companyOverview.email}?subject=${encodeURIComponent('Attention: Shruthi M - Tender & Operations Inquiry')}`}
                      className="w-full sm:w-auto px-4 py-2 bg-white hover:bg-red-50 text-[#800A2C] text-xs font-bold rounded-lg border border-red-200 transition-colors flex items-center justify-center gap-1.5"
                    >
                      <Mail size={13} />
                      Email Director
                    </a>
                  ) : (
                    <a
                      href={`tel:${companyOverview.phone}`}
                      className="w-full sm:w-auto px-4 py-2 bg-white hover:bg-red-50 text-[#800A2C] text-xs font-bold rounded-lg border border-red-200 transition-colors flex items-center justify-center gap-1.5"
                    >
                      <Phone size={13} />
                      Call Engineering Desk
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 3: CORPORATE CREDENTIALS & COMPLIANCE */}
        <div className="bg-white rounded-2xl border border-gray-150 p-6 md:p-8 shadow-xs mb-12" id="corporate-credentials-section">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <span className="text-xs uppercase font-extrabold tracking-widest text-[#800A2C] bg-red-50 px-3 py-1 rounded">
                Verified Accreditation
              </span>
              <h2 className="text-2xl font-black text-[#0B192C] font-display mt-3 mb-2">
                Corporate Compliance & Regulatory Standards
              </h2>
              <p className="text-xs text-gray-500 max-w-xl leading-relaxed">
                {companyOverview.name} maintains strict compliance with municipal, state, and railway regulatory frameworks in Davanagere and across Karnataka.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 shrink-0">
              {companyOverview.credentials.map((cred, i) => (
                <div key={i} className="flex items-center gap-2.5 px-4 py-3 bg-slate-50 border border-gray-150 rounded-xl text-xs font-bold text-[#0B192C] shadow-2xs">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs shrink-0 font-black">
                    ✓
                  </span>
                  <span>{cred}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SECTION 4: INTERACTIVE MAP & LOCATION GUIDANCE */}
        <div className="bg-white rounded-2xl border border-gray-150 p-6 md:p-8 shadow-xs" id="map-section">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-100 pb-6 mb-6">
            <div>
              <span className="text-xs uppercase font-extrabold tracking-widest text-[#800A2C] bg-red-50 px-3 py-1 rounded">
                Geographic Map Location
              </span>
              <h2 className="text-2xl md:text-3xl font-black text-[#0B192C] font-display mt-2">
                Davanagere Operational Headquarters Map
              </h2>
              <p className="text-xs text-gray-500 mt-1">
                Located at Survey No 385/9, CMC Limit, Avaragere, Davanagere, Karnataka 577002.
              </p>
            </div>
            
            <a
              href={mapDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 bg-[#800A2C] hover:bg-[#60051E] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center justify-center gap-2 shrink-0"
              id="open-maps-link"
            >
              <Navigation size={15} />
              Open in Google Maps
            </a>
          </div>

          <div className="w-full h-96 rounded-xl overflow-hidden border border-gray-200 bg-gray-50 relative shadow-inner">
            <iframe
              title="RNSSY Headquarters Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15446.592543916962!2d75.922097!3d14.453181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bba259dc2aaaaab%3A0x9d4a8eefc8808605!2sAvaragere%2C%20Davanagere%2C%20Karnataka%20577002!5e0!3m2!1sen!2sin!4v1700000000000"
              className="w-full h-full border-0"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 pt-6 border-t border-gray-100 text-xs">
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <span className="text-lg">🚆</span>
              <div>
                <p className="font-bold text-[#0B192C]">Rail Connectivity</p>
                <p className="text-[11px] text-gray-500">~4.5 km from Davanagere Railway Station</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <span className="text-lg">🛣️</span>
              <div>
                <p className="font-bold text-[#0B192C]">Highway Access</p>
                <p className="text-[11px] text-gray-500">Direct feeder corridor from NH-48 (Pune-Blr Expressway)</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <span className="text-lg">🏭</span>
              <div>
                <p className="font-bold text-[#0B192C]">Mobilization Yard</p>
                <p className="text-[11px] text-gray-500">Central Karnataka machinery & materials staging hub</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

