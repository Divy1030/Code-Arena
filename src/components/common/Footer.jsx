import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = ({ isDarkMode }) => {
  return (
    <footer className={`py-10 px-4 sm:px-6 lg:px-8 text-white bg-[#01062e]`}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
        <div className="col-span-1 sm:col-span-1 lg:col-span-1">
          <h3 className="text-lg font-medium text-white">Products</h3>
          <ul className="mt-4 space-y-2">
            <li><a href="#" className="hover:text-white">Screen</a></li>
            <li><a href="#" className="hover:text-white">SkillUp</a></li>
            <li><a href="#" className="hover:text-white">Plagiarism Detection</a></li>
            <li><a href="#" className="hover:text-white">Real World Question</a></li>
          </ul>
        </div>
        <div className="col-span-1 sm:col-span-1 lg:col-span-1">
          <h3 className="text-lg font-medium text-white">Solutions</h3>
          <ul className="mt-4 space-y-2">
            <li><a href="#" className="hover:text-white">Set up a skills strategy</a></li>
            <li><a href="#" className="hover:text-white">Showcase your talent brand</a></li>
            <li><a href="#" className="hover:text-white">Enhance your internal skills</a></li>
          </ul>
        </div>
        <div className="col-span-1 sm:col-span-1 lg:col-span-1">
          <h3 className="text-lg font-medium text-white">Resources</h3>
          <ul className="mt-4 space-y-2">
            <li><a href="#" className="hover:text-white">Blog</a></li>
            <li><a href="#" className="hover:text-white">Customer stories</a></li>
            <li><a href="#" className="hover:text-white">Integrations</a></li>
            <li><a href="#" className="hover:text-white">What's new</a></li>
          </ul>
        </div>
        <div className="col-span-1 sm:col-span-1 lg:col-span-1">
          <h3 className="text-lg font-medium text-white">About us</h3>
          <ul className="mt-4 space-y-2">
            <li><a href="#" className="hover:text-white">Careers</a></li>
            <li><a href="#" className="hover:text-white">Newsroom</a></li>
            <li><a href="#" className="hover:text-white">Status</a></li>
            <li><a href="#" className="hover:text-white">Trust</a></li>
          </ul>
        </div>
        <div className="col-span-1 sm:col-span-2 lg:col-span-1">
          <h3 className="text-lg font-medium text-white">Get started</h3>
          <ul className="mt-4 space-y-2">
            <li><a href="#" className="hover:text-white">Sign-Up</a></li>
            <li><a href="#" className="hover:text-white">Log-In</a></li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <div className="text-2xl font-bold text-white mb-4">Follow us</div>
      </div>
      <div className="flex justify-center space-x-4">
        <a href="#" className="text-gray-400 hover:text-white"><FaFacebook size={24} /></a>
        <a href="#" className="text-gray-400 hover:text-white"><FaTwitter size={24} /></a>
        <a href="#" className="text-gray-400 hover:text-white"><FaLinkedin size={24} /></a>
        <a href="#" className="text-gray-400 hover:text-white"><FaInstagram size={24} /></a>
      </div>
    </footer>
  );
};

export default Footer;