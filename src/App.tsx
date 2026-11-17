import { useState } from 'react';
import { ActiveTab } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomeView } from './components/HomeView';
import { AboutView } from './components/AboutPage';
import { OfferingsPage } from './components/OfferingsPage';
import { TeamPage } from './components/TeamPage';
import { ContactPage } from './components/ContactPage';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('home');
  const [selectedOfferingIdx, setSelectedOfferingIdx] = useState<number>(0);

  const handleTabChange = (tab: ActiveTab, offeringIdx?: number) => {
    if (offeringIdx !== undefined) {
      setSelectedOfferingIdx(offeringIdx);
    }
    setActiveTab(tab);
  };

  // Render correct sub-page
  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <HomeView setActiveTab={handleTabChange} />;
      case 'about':
        return <AboutView setActiveTab={handleTabChange} />;
      case 'offerings':
        return <OfferingsPage setActiveTab={handleTabChange} initialOfferingIdx={selectedOfferingIdx} />;
      case 'team':
        return <TeamPage setActiveTab={handleTabChange} />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomeView setActiveTab={handleTabChange} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#FAF5F5] antialiased" id="root-container">
      {/* 1. STICKY BRAND NAVIGATION BAR */}
      <Navbar activeTab={activeTab} setActiveTab={handleTabChange} />

      {/* 2. DYNAMIC SLIDING TRANSITIONAL PAGE PORT */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab === 'offerings' ? `offerings-${selectedOfferingIdx}` : activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            id="page-content-wrapper"
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* 3. CORPORATE INDUSTRIAL FOOTER */}
      <Footer setActiveTab={handleTabChange} />
    </div>
  );
}
