import React from 'react';
import WorldMap from '../../components/LandingPageUI/WorldMap.jsx';

const SkillsSection = ({ isDarkMode }) => {
  return (
    <div className={`min-h-[50vh] md:min-h-[75vh] lg:min-h-screen bg-[#0e054d] py-8 md:py-16`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-8 md:mb-12 text-center">
          <h1 className={`text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-white`}>
            Explore and expand your skills.
          </h1>
          
          <p className={`text-xl mb-6 md:mb-8 max-w-2xl mx-auto text-white`}>
            Every idea has a first line of code. Prep for jobs and sharpen your 
            skills alongside a global community of developers. Access the 
            content you need to develop new skills — and land the job you've 
            dreamed of.
          </p>
          
          <button className={`px-6 py-3 rounded-md font-medium transition-colors bg-blue-600 text-white`}>
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