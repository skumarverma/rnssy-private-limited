import React, { useState } from 'react';
import { Logo } from './Logo';
import { ActiveTab } from '../types';
import { Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home' as ActiveTab, label: 'Home' },
    { id: 'about' as ActiveTab, label: 'About Us' },
    { id: 'offerings' as ActiveTab, label: 'Our Services' },
    { id: 'team' as ActiveTab, label: 'The Team' },
    { id: 'contact' as ActiveTab, label: 'Contact Us' },
  ];

  const handleTabClick = (tabId: ActiveTab) => {
    setActiveTab(tabId);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-xs backdrop-blur-md/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Brand Emblem */}
          <button 
            onClick={() => handleTabClick('home')} 
            className="cursor-pointer transition-transform duration-200 active:scale-98"
            id="nav-logo-btn"
          >
            <Logo size={52} />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8" id="desktop-nav">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`nav-item-${item.id}`}
                onClick={() => handleTabClick(item.id)}
                className={`text-sm font-bold uppercase tracking-wider transition-all duration-200 relative py-2 cursor-pointer ${
                  activeTab === item.id
                    ? 'text-[#800A2C]'
                    : 'text-gray-600 hover:text-gray-900 hover:scale-[1.02]'
                }`}
              >
                {item.label}
                {activeTab === item.id && (
                  <span className="absolute bottom-0 left-0 w-full h-0.75 bg-[#800A2C] rounded-full" />
                )}
              </button>
            ))}

            {/* Accent CTA Partner Button */}
            <button
              id="nav-cta-btn"
              onClick={() => handleTabClick('contact')}
              className="ml-4 px-6 py-2.5 bg-[#800A2C] hover:bg-[#60051E] text-white text-xs font-bold uppercase tracking-widest rounded-md shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer flex items-center gap-2 hover:translate-y-[-1px] active:translate-y-0"
            >
              Partner With Us
              <ArrowRight size={14} />
            </button>
          </nav>

          {/* Mobile Hamburguer Toggle */}
          <div className="flex md:hidden">
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-[#800A2C] p-2 focus:outline-hidden cursor-pointer"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-200 shadow-xl transition-all duration-300 z-40 animate-fadeIn" id="mobile-nav-drawer">
          <div className="px-4 pt-4 pb-6 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`mobile-nav-item-${item.id}`}
                onClick={() => handleTabClick(item.id)}
                className={`block w-full text-left px-4 py-3 rounded-md text-base font-bold uppercase tracking-wide cursor-pointer transition-colors ${
                  activeTab === item.id
                    ? 'bg-[#FDF2F4] text-[#800A2C]'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                {item.label}
              </button>
            ))}
            
            <div className="pt-4 border-t border-gray-100">
              <button
                id="mobile-nav-cta"
                onClick={() => handleTabClick('contact')}
                className="w-full text-center px-6 py-3.5 bg-[#800A2C] hover:bg-[#60051E] text-white text-sm font-bold uppercase tracking-widest rounded-md shadow-md cursor-pointer flex items-center justify-center gap-2"
              >
                Partner With Us
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
