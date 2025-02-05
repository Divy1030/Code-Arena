import React from 'react';
import WorldMap from '../../components/LandingPageUI/WorldMap.jsx';

const SkillsSection = ({ isDarkMode }) => {
  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="mb-12">
          <h1 className={`text-4xl md:text-5xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-black'}`}>
            Explore and expand your skills.
          </h1>
          
          <p className={`text-xl mb-8 max-w-2xl ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
            Every idea has a first line of code. Prep for jobs and sharpen your 
            skills alongside a global community of developers. Access the 
            content you need to develop new skills — and land the job you've 
            dreamed of.
          </p>
          
          <button className={`border px-6 py-3 rounded-md font-medium transition-colors ${isDarkMode ? 'border-white text-black bg-white hover:text-gray-900' : ' text-white bg-blue-500 hover:text-white'}`}>
            Sign up and practice
          </button>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="col-span-2">
            <WorldMap 
              dots={[
                {
                  start: {
                    lat: 64.2008,
                    lng: -149.4937,
                  },
                  end: {
                    lat: 34.0522,
                    lng: -118.2437,
                  },
                },
                {
                  start: { lat: 64.2008, lng: -149.4937 },
                  end: { lat: -15.7975, lng: -47.8919 },
                },
                {
                  start: { lat: -15.7975, lng: -47.8919 },
                  end: { lat: 38.7223, lng: -9.1393 },
                },
                {
                  start: { lat: 51.5074, lng: -0.1278 },
                  end: { lat: 28.6139, lng: 77.209 },
                },
                {
                  start: { lat: 28.6139, lng: 77.209 },
                  end: { lat: 43.1332, lng: 131.9113 },
                },
                {
                  start: { lat: 28.6139, lng: 77.209 }, 
                  end: { lat: -1.2921, lng: 36.8219 },
                },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;