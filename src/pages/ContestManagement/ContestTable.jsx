import React, { useState } from 'react';
import { FileCode, EditIcon, TrashIcon, Files, Users, Clock4, CalendarDays } from 'lucide-react';

const ContestTable = () => {
  const [selectedPage, setSelectedPage] = useState(1);
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
    switch (status) {
      case 'Active': return 'text-[#166534] bg-[#DCFCE7] rounded-3xl p-2';
      case 'Upcoming': return 'text-[#1E40AF] bg-[#DBEAFE] rounded-3xl p-2';
      case 'Ended': return 'text-[#EF4444] bg-red-200 rounded-3xl p-2';
      default: return 'text-gray-500';
    }
  };

  return (
    <div className="bg-[#131A2B] overflow-x-auto">
      <table className="w-full text-white">
        <thead className="bg-[#353B5F] text-[#DADADA]">
          <tr>
            {['CONTEST NAME', 'DATE', 'DURATION', 'PARTICIPANTS', 'STATUS', 'ACTIONS'].map(header => (
              <th key={header} className="p-4 text-left">{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {contests.map((contest, index) => (
            <tr key={index} className="border-b-2 border-[#000] bg-[#03071C]">
              <td className="p-4 flex items-center">
                <FileCode className="mr-2 bg-[#DBEAFE] w-10 h-10 rounded p-2 text-[#2563EB]" />
                {contest.name}
              </td>
              <td className="p-4">
                <span className='flex items-center gap-2'>
                  <CalendarDays className='w-6 h-6' />{contest.date}
                </span>
              </td>
              <td className="p-4">
                <span className='flex items-center gap-2'>
                  <Clock4 className='w-5 h-5' />{contest.duration}
                </span>
              </td>
              <td className="p-4">
                <span className='flex items-center gap-2'>
                  {contest.participants}<Users className='w-6 h-6' />
                </span>
              </td>
              <td className="p-4">
                <span className={`${getStatusColor(contest.status)} font-semibold pointer-cursor`}>
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
      <div className="flex justify-between items-center p-4 text-white bg-[#03071C]">
        <div>
          Showing 1 to 4 of 24 entries
        </div>
        <div className="flex space-x-2">
          <button className="px-4 py-2 bg-[#353B5F] text-white rounded">Previous</button>
          {[1, 2, 3].map(page => (
            <button
              key={page}
              onClick={() => setSelectedPage(page)}
              className={`px-4 py-2 text-white rounded ${selectedPage === page ? 'bg-[#0D1439]' : 'bg-[#353B5F]'}`}
            >
              {page}
            </button>
          ))}
          <button className="px-4 py-2 bg-[#353B5F] text-white rounded">Next</button>
        </div>
      </div>
    </div>
  );
};

export default ContestTable;