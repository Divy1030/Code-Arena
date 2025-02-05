import React from 'react';
import CandidateCard from '../../components/LandingPageUI/CandidateCard.jsx';

const SummaryReport = ({ isDarkMode }) => {
  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="mb-12">
          <h1 className={`text-4xl md:text-5xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-black'}`}>
            Summary report
          </h1>
          
          <p className={`text-xl mb-8 max-w-2xl ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
            Candidate skills performance
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className={`text-lg font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>Identify top contenders</h2>
            <p className={`mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
              Identify top contenders and invite them to meet your team using data-driven decisions that help level the playing field for developers everywhere.
            </p>
            <a href="#" className={` ${isDarkMode ? 'text-white' : 'text-black'}`}>
              Learn more →
            </a>
          </div>
          
          <CandidateCard isDarkMode={isDarkMode} /> 
        </div>  
       
      </div>
    </div>
  );
};

export default SummaryReport;