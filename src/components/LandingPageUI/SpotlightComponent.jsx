import React from "react";
import TrueFocus from '../animations/TrueFocus';

const SpotlightComponent = ({ isDarkMode }) => {
  return (
    <div className={`w-full mx-auto text-center px-4 py-16 ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
      <div className={`inline-block px-4 py-1 rounded-full ${isDarkMode ? 'bg-white text-black' : 'bg-blue-100 text-blue-600'} text-sm font-medium mb-8`}>
        CODING PRACTICE
      </div>

      <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>
        It's not a pipeline problem.
      </h1>

      <TrueFocus 
        sentence="It's a spotlight problem."
        manualMode={true}
        blurAmount={3}
        borderColor="blue"
        animationDuration={0.5}
        pauseBetweenAnimations={0.5}
        fontColor={isDarkMode ? 'white' : 'black'}
      />

      <p className={`text-lg mb-12 max-w-3xl mx-auto leading-relaxed mt-8 ${isDarkMode ? 'text-white' : 'text-black'}`}>
        Tech hiring needs a reset. From prepping for jobs and practicing coding
        to running a world-class technical interview, give developers the tools
        they need to showcase their skills, passion, and potential.
      </p>

      <button className={`px-6 py-3 rounded-md font-medium transition-colors ${isDarkMode ? 'bg-white text-black' : 'bg-blue-500 text-white hover:bg-blue-600'}`}>
        Get started
      </button>
    </div>
  );
};

export default SpotlightComponent;