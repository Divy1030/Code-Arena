import React, { useState } from 'react';
import { SearchIcon, Menu } from 'lucide-react';
import ContestTable from './ContestTable';
import { Sidebar } from './QuickStats'; // Corrected import

const ContestManagementDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen bg-[#0D1439] p-4 text-white">
      <div className="flex justify-between items-center mb-4 lg:hidden">
        <h1 className="text-3xl font-bold">Contest Management</h1>
        <button onClick={toggleSidebar} className="text-white">
          <Menu className="w-8 h-8" />
        </button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className={`col-span-1 lg:col-span-1 ${isSidebarOpen ? 'block' : 'hidden'} lg:block`}>
          <Sidebar />
        </div>
        <div className="col-span-1 lg:col-span-3">
          <div className="mb-8">
            <h1 className="hidden lg:block text-3xl font-bold">Contest Management</h1>
            <p className="text-white text-xl">Manage and monitor all coding contests</p>
            <div className="relative flex items-center mt-4 lg:mt-2">
              <input 
                type="text" 
                placeholder="Search Contest" 
                className="bg-[#03071C] rounded-lg px-4 py-2 pl-10 text-white placeholder-white w-64"
              />
              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#E0E0E0]" />
            </div>
          </div>
          <ContestTable />
        </div>
      </div>
    </div>
  );
};

export default ContestManagementDashboard;