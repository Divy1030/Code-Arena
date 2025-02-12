import React, { useState } from 'react';
import { FileCode, EditIcon, TrashIcon, Files,Users } from 'lucide-react';

const ContestTable = () => {
  const [selectedContests, setSelectedContests] = useState([]);
  const contests = [
    {
      name: 'Advanced Algorithm Challenge',
      date: 'Feb 15, 2024',
      duration: '3 Hours',
      participants: 256,
      status: 'Active'
    },
    {
      name: 'Advanced Algorithm Challenge',
      date: 'Feb 15, 2024',
      duration: '3 Hours',
      participants: 256,
      status: 'Upcoming'
    },
    {
      name: 'Advanced Algorithm Challenge',
      date: 'Feb 15, 2024',
      duration: '3 Hours',
      participants: 256,
      status: 'Ended'
    },
    {
      name: 'Advanced Algorithm Challenge',
      date: 'Feb 15, 2024',
      duration: '3 Hours',
      participants: 256,
      status: 'Ended'
    }
  ];

  const getStatusColor = (status) => {
    switch(status) {
      case 'Active': return 'text-green-500';
      case 'Upcoming': return 'text-blue-500';
      case 'Ended': return 'text-red-500';
      default: return 'text-gray-500';
    }
  };

  return (
    <div className="bg-[#131A2B] rounded-lg overflow-x-auto">
      <table className="w-full text-white">
        <thead className="bg-[#1E2536] text-gray-400">
          <tr>
            {['CONTEST NAME', 'DATE', 'DURATION', 'PARTICIPANTS', 'STATUS', 'ACTIONS'].map(header => (
              <th key={header} className="p-4 text-left">{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {contests.map((contest, index) => (
            <tr key={index} className="border-b border-[#1E2536] hover:bg-[#1E2536]/50">
              <td className="p-4 flex items-center">
                <FileCode className="mr-2 bg-[#DBEAFE] w-10 h-10 rounded p-2 text-[#2563EB]" />
                {contest.name}
              </td>
              <td className="p-4">{contest.date}</td>
              <td className="p-4">{contest.duration}</td>
              <td className="p-4 flex gap-3">{contest.participants}<Users className='w-6 h-6'/></td>
              <td className="p-4">
                <span className={`${getStatusColor(contest.status)} font-bold`}>
                  {contest.status}
                </span>
              </td>
              <td className="p-4 flex space-x-4">
                <EditIcon className="text-white cursor-pointer" size={20} />
                <Files className="text-white cursor-pointer" size={20} />
                <TrashIcon className="text-white cursor-pointer" size={20} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="p-4 text-gray-400">
        Showing 1 to 4 of 24 entries
      </div>
      <div className="flex justify-end p-4 space-x-2">
        <button className="px-4 py-2 bg-[#1E2536] text-white rounded">Previous</button>
        {[1, 2, 3].map(page => (
          <button 
            key={page} 
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            {page}
          </button>
        ))}
        <button className="px-4 py-2 bg-[#1E2536] text-white rounded">Next</button>
      </div>
    </div>
  );
};

export default ContestTable;