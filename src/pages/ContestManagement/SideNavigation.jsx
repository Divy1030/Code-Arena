import React from 'react';
import { Command, Info } from 'lucide-react';

// Sidebar Component
const SideNavigation = ({ activeItem = 1 }) => {
  const navigationItems = [
    { id: 'command', icon: <Command className="w-5 h-5" />, type: 'icon' },
    { id: 'info', icon: <Info className="w-5 h-5" />, type: 'icon' },
    { id: 1, label: '1', type: 'number' },
    { id: 2, label: '2', type: 'number' },
    { id: 3, label: '3', type: 'number' },
    { id: 4, label: '4', type: 'number' }
  ];

  const getItemStyles = (item) => {
    const baseStyles = "w-full h-12 flex items-center justify-center transition-colors duration-200";
    if (item.type === 'icon') {
      return `${baseStyles} text-gray-400 hover:text-gray-200`;
    }
    return item.id === activeItem 
      ? `${baseStyles} text-blue-500 hover:text-blue-400`
      : `${baseStyles} text-gray-400 hover:text-gray-300`;
  };

  return (
    <nav className="fixed left-0 top-20 h-full w-16 bg-navy-800 flex flex-col py-6 border-r border-navy-700 z-10 bg-slate-500">
      <div className="flex flex-col space-y-2">
        {navigationItems.map((item) => (
          <button
            key={item.id}
            className={getItemStyles(item)}
          >
            {item.type === 'icon' ? item.icon : (
              <span className="text-sm font-medium">{item.label}</span>
            )}
          </button>
        ))}
      </div>
      <div 
        className="absolute left-0 w-0.5 bg-blue-500 transition-all duration-200"
        style={{ 
          top: `${(activeItem + 1) * 48 + 24}px`,
          height: '48px'
        }}
      />
    </nav>
  );
};

export default SideNavigation;