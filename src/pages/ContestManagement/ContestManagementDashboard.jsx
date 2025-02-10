import React from 'react';
import { SearchIcon } from 'lucide-react';
import ContestTable from './ContestTable';
import { Sidebar } from './QuickStats'; // Corrected import

const ContestManagementDashboard = () => {
  return (
    <div className="min-h-screen bg-[#0F1A2A] p-8 text-white">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1">
          <Sidebar />
        </div>
        <div className="col-span-3">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold">Contest Management</h1>
              <p className="text-gray-400">Manage and monitor all coding contests</p>
            </div>
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search Contest" 
                className="bg-[#1E2536] rounded-lg px-4 py-2 pl-10 text-white w-64"
              />
              <SearchIcon className="absolute left-3 top-3 text-gray-400" />
            </div>
          </div>
          <ContestTable />
        </div>
      </div>
    </div>
  );
};

export default ContestManagementDashboard;