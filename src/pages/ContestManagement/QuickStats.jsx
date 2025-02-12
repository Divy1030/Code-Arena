import React from 'react';
import { PlusIcon, CalendarDays, Clock3, Users, Star, CircleCheck, CircleX, ChevronsDown } from 'lucide-react';

const QuickStats = () => {
  const stats = [
    { label: 'Active', count: 12, color: 'bg-[#01224f]', textColor: 'text-[#5E8FF9]', icon: <Clock3 className="w-5 h-5 mr-2 text-[#5E8FF9]" /> },
    { label: 'Upcoming', count: 8, color: 'bg-[#003f12]', textColor: 'text-[#34D46F]', icon: <CalendarDays className="w-5 h-5 mr-2 text-[#34D46F]" /> },
    { label: 'Users', count: '2.4K', color: 'bg-[#26034c]', textColor: 'text-[#C17DFF]', icon: <Users className="w-5 h-5 mr-2 text-[#C17DFF]" /> },
    { label: 'Success', count: '76%', color: 'bg-[#3a2101]', textColor: 'text-[#FF742B]', icon: <Star className="w-5 h-5 mr-2 text-[#FF742B]" /> }
  ];

  return (
    <div className="grid grid-cols-2 gap-4">
      {stats.map((stat) => (
        <div key={stat.label} className={`${stat.color} p-4 rounded-lg text-white flex flex-col justify-center items-start h-24 w-36`}>
          <div className="flex items-center">
            {stat.icon}
            <div className={`text-sm ${stat.textColor}`}>{stat.label}</div>
          </div>
          <div className={`text-2xl font-bold ${stat.textColor}`}>{stat.count}</div>
        </div>
      ))}
    </div>
  );
};

const Filters = () => {
  const filters = [
    { label: 'All Contests', count: 24, icon: <ChevronsDown className="w-5 h-5 mr-2 text-white" /> },
    { label: 'Active', count: 12, icon: <CircleCheck className="w-5 h-5 mr-2 text-[#22C55E]" /> },
    { label: 'Upcoming', count: 8, icon: <Clock3 className="w-5 h-5 mr-2 text-[#F97316]" /> },
    { label: 'Ended', count: 4, icon: <CircleX className="w-5 h-5 mr-2 text-[#EF4444]" /> }
  ];

  return (
    <div className="space-y-2">
      {filters.map((filter) => (
        <div 
          key={filter.label} 
          className="flex justify-between items-center text-gray-300 hover:bg-blue-900 bg-[#03071C] p-2 rounded cursor-pointer"
        >
          <div className="flex items-center">
            {filter.icon}
            <span>{filter.label}</span>
          </div>
          <span>{filter.count}</span>
        </div>
      ))}
    </div>
  );
};

const Sidebar = () => {
  return (
    <div className="w-full bg-[#121B38] p-4 rounded-lg">
      <button className="bg-[#2563EB] hover:bg-blue-800 rounded-lg px-4 py-2 flex items-center justify-center mb-4 w-full">
        <PlusIcon className="mr-2" /> Create New Contest
      </button>
      <h3 className="text-xl font-semibold mb-4 text-white">Quick Stats</h3>
      <QuickStats />
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4 text-white">Filters</h3>
        <Filters />
      </div>
    </div>
  );
};

export { QuickStats, Filters, Sidebar };