import React from 'react';
import SpotlightComponent from '../../components/LandingPageUI/SpotlightComponent.jsx';
import SkillsSection from '../../components/LandingPageUI/SkillsSection.jsx';
import FloatingDock from '../../components/animations/FloatingDock.jsx';
import { FaInstagram, FaTwitter, FaEnvelope, FaSun, FaMoon } from 'react-icons/fa';
import Hyperspeed from '../../components/animations/HyperSpeed/Hyperspeed.jsx';
import ShinyText from '../../components/animations/ShinyText.jsx';
import Footer from '../../components/ui/Footer.jsx';
import FocusOnCode from '../../components/LandingPageUI/FocusOnCode.jsx';
import SummaryReport from '../../components/LandingPageUI/SummaryReport.jsx';

const LandingPage = ({ isDarkMode, toggleDarkMode }) => {
  const dockItems = [
    { title: 'Instagram', href: '/instagram', icon: <FaInstagram /> },
    { title: 'Twitter', href: '/twitter', icon: <FaTwitter /> },
    { title: 'Gmail', href: '/gmail', icon: <FaEnvelope /> },
  ];

  return (
    <div className={`relative h-screen w-full ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
      <div className="absolute inset-0 z-0 h-full w-full">
        <Hyperspeed isDarkMode={isDarkMode} />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 text-left z-10 flex flex-col justify-center h-screen mr-0">
        <button
          onClick={toggleDarkMode}
          className="absolute top-4 right-4 bg-black dark:bg-gray-800 text-white dark:text-white p-2 rounded-full flex items-center justify-center"
        >
          {isDarkMode ? <FaSun className="text-yellow-500" /> : <FaMoon className="text-white" />}
        </button>
        <h1 className={`text-4xl md:text-6xl font-normal mb-8 ${isDarkMode ? 'text-white' : 'text-black'}`}>
          Skills speak<br />louder than words
        </h1>
        <p className={`text-lg md:text-xl mb-12 max-w-3xl ${isDarkMode ? 'text-white' : 'text-black'}`}>
          We help companies develop the strongest tech teams around. We help candidates sharpen their tech skills and pursue job opportunities.
        </p>
        <div className="flex flex-col md:flex-row gap-4 mb-20">
          <button className={`px-6 py-3 rounded-md border ${isDarkMode ? 'bg-white text-black border-black' : 'bg-black text-white border-white'}`}>
            <ShinyText text="Get Started →" disabled={false} speed={5} className={`${isDarkMode ? 'text-black' : 'text-white'}`} />
          </button>
        </div>
        <FloatingDock 
          className="z-10 inline-block"
          items={dockItems} 
        />
      </div>
      <SpotlightComponent isDarkMode={isDarkMode} />
      <SkillsSection isDarkMode={isDarkMode} />
      <FocusOnCode isDarkMode={isDarkMode} />
      <SummaryReport isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
};

export default LandingPage;