import React from 'react';
import CandidateCard from '../../components/LandingPageUI/CandidateCard.jsx';

const SummaryReport = ({ isDarkMode }) => {
  return (
    <div className={`min-h-[50vh] md:min-h-[75vh] lg:min-h-screen bg-[#0e054d] py-8 md:py-16`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-8 md:mb-12">
          <h1 className={`text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-white`}>
            Summary report
          </h1>
          
          <p className={`text-xl mb-6 md:mb-8 max-w-2xl text-white`}>
            Candidate skills performance
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className={`text-lg font-bold mb-4 text-white`}>Identify top contenders</h2>
            <p className={`mb-4 text-white`}>
              Identify top contenders and invite them to meet your team using data-driven decisions that help level the playing field for developers everywhere.
            </p>
            <a href="#" className={` text-white`}>
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