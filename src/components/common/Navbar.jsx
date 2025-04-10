import React, { useState } from 'react';
import logo from '../../assets/image 3.png'

const Navbar = ({ isDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`px-6 py-4 border-b ${isDarkMode ? 'bg-black border-black border-b-white' : 'bg-[#00072e] border-gray-200 border-b-black'} md:px-0`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-8">
          <span className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-white'}`}><img src={logo} alt='csilogo' /></span>
          <span className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-white'}`}>CodeArena</span>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button className="px-4 py-2 rounded-md bg-white text-black border-black hover:bg-gray-300">
            <a href="#" className="text-black ">Sign-Up</a>
          </button>
          <a href="/login" className="px-4 py-2 rounded-md bg-white text-black hover:bg-gray-300">
            Log-In
          </a>
        </div>

        <div className="md:hidden flex items-center gap-4">
          <button onClick={toggleMenu} className={`focus:outline-none`}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden mt-4">
          <button className="block mb-2 px-4 py-2 rounded-md bg-white text-black border-black">
            <a href="#" className="text-black hover:text-gray-300">Sign-Up</a>
          </button>
          <a href="/login" className="block mb-2 px-4 py-2 rounded-md bg-white text-black hover:bg-gray-300">
            Log-In
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;