import React from 'react';

const CandidateCard = ({ isDarkMode }) => {
  return (
    <div className={`rounded-lg shadow-lg p-6 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}>
      <h2 className="text-xl font-semibold mb-4">Candidate profile</h2>
      
      <div className="mb-6">
        <h3 className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Julia Roberts</h3>
        
        <div className="mt-4">
          <p className={`text-sm mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Badges earned</p>
          <div className="flex gap-2">
            <div className={`w-10 h-10 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full`}></div>
            <div className={`w-10 h-10 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full`}></div>
            <div className={`w-10 h-10 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full`}></div>
            <div className={`w-10 h-10 ${isDarkMode ? 'bg-white' : 'bg-blue-500'} ${isDarkMode ? 'text-black' : 'text-white'} rounded-full flex items-center justify-center text-xs`}>30</div>
          </div>
        </div>

        <div className="mt-6">
          <p className={`text-sm mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Verified skills</p>
          <div className="flex gap-2">
            <div className="bg-green-500 text-white px-3 py-1 rounded text-sm">HR</div>
            <div className="bg-green-500 text-white px-3 py-1 rounded text-sm">HR</div>
          </div>
        </div>

        <div className="mt-6">
          <p className={`text-sm mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Work experience</p>
          <div className={`h-20 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'} rounded`}></div>
        </div>
      </div>
    </div>
  );
};

export default CandidateCard;