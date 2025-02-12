import React from 'react';
import { Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  const navItems = {
    Product: ['Features', 'Contests', 'Problems', 'Leaderboard'],
    'About Us': []
  };

  const socialIcons = [
    { Icon: Instagram, href: '#' },
    { Icon: Twitter, href: '#' },
    { Icon: Linkedin, href: '#' },
    // { Icon: Discord, href: '#' }
  ];

  return (
    <footer className="bg-[#00072E] text-gray-400 py-8 px-4 md:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Description */}
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
              <span className="text-white text-xl">◁</span>
            </div>
            <span className="text-white text-xl font-semibold">CodeArena</span>
          </div>
          <p className="text-sm mb-6">
            Empowering developers to improve their <br /> coding skills through competitive <br /> programming.
          </p>
          <div className="flex space-x-4">
            {socialIcons.map(({ Icon, href }, index) => (
              <a 
                key={index} 
                href={href}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* Navigation Links */}
        {Object.entries(navItems).map(([title, items]) => (
          <div key={title}>
            <h3 className="text-white font-semibold mb-4">{title}</h3>
            <ul className="space-y-2">
              {items.map(item => (
                <li key={item}>
                  <a href="#" className="hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom Bar */}
      <div className="max-w-6xl mx-auto mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm mb-4 md:mb-0">
          © 2024 CodeArena. All rights reserved.
        </p>
        <div className="flex space-x-6 text-sm">
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Cookies</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;