import React from 'react';
import { PlusIcon } from 'lucide-react';

const QuickStats = () => {
  const stats = [
    { label: 'Active', count: 12, color: 'bg-blue-500' },
    { label: 'Upcoming', count: 8, color: 'bg-green-500' },
    { label: 'Users', count: '2.4K', color: 'bg-purple-500' },
    { label: 'Success', count: '76%', color: 'bg-yellow-500' }
  ];

  return (
    <div className="grid grid-cols-2 gap-4">
      {stats.map((stat) => (
        <div key={stat.label} className={`${stat.color} p-4 rounded-lg text-white flex flex-col justify-center items-center h-24 w-36`}>
          <div className="text-2xl font-bold">{stat.count}</div>
          <div className="text-sm">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

const Filters = () => {
  const filters = [
    { label: 'All Contests', count: 24 },
    { label: 'Active', count: 12 },
    { label: 'Upcoming', count: 8 },
    { label: 'Ended', count: 4 }
  ];

  return (
    <div className="space-y-2">
      {filters.map((filter) => (
        <div 
          key={filter.label} 
          className="flex justify-between text-gray-300 hover:bg-blue-900 bg-[#03071C] p-2 rounded cursor-pointer"
        >
          <span>{filter.label}</span>
          <span>{filter.count}</span>
        </div>
      ))}
    </div>
  );
};

const Sidebar = () => {
  return (
    <div className="w-full bg-[#1E2536] p-4 rounded-lg">
      <button className="bg-blue-500 hover:bg-blue-600 rounded-lg px-4 py-2 flex items-center justify-center mb-4 w-full">
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