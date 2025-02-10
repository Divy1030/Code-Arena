import React from 'react';
import { FaJs, FaPython, FaCuttlefish } from 'react-icons/fa';
import { CiUser } from 'react-icons/ci'; // Ensure this import is correct

const languageLogos = {
  js: <FaJs className="w-6 h-6 text-[#B0B3C3]" />, // JavaScript logo
  python: <FaPython className="w-6 h-6 text-[#B0B3C3]" />, // Python logo
  c: <FaCuttlefish className="w-6 h-6 text-[#B0B3C3]" />, // C logo
};

const ContestCard = ({ 
  title = 'Weekly Challenge #45', 
  difficulty = 'Medium', 
  participants = 234,
  languages = ['js', 'python', 'c']
}) => {
  const getDifficultyColor = (difficulty) => {
    switch (difficulty.toLowerCase()) {
      case 'easy':
        return 'bg-green-100 text-green-500';
      case 'medium':
        return 'bg-gray-500 text-yellow-500';
      case 'hard':
        return 'bg-red-200 text-red-500 round-lg';
      default:
        return 'bg-gray-500 text-gray-500';
    }
  };

  return (
    <div className="bg-[#4A55A2] rounded-lg p-4 flex flex-col justify-between h-48 min-w-60">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-white font-semibold mb-2">{title}</h3>
          <div className="text-white text-sm mb-2 flex items-center">
            <CiUser className="w-6 h-6 mr-2" />{participants} participants
          </div>
        </div>
        <span className={`px-2 py-1 rounded-2xl text-xs ${getDifficultyColor(difficulty)}`}>
          {difficulty}
        </span>
      </div>
      <div className="flex justify-between items-end">
        <div className="flex">
          {languages.map((lang) => (
            <div key={lang} className="w-6 h-6 mr-2">
              {languageLogos[lang]}
            </div>
          ))}
        </div>
        <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors">
          Join Now
        </button>
      </div>
    </div>
  );
};

export default ContestCard;