import React from "react";
import { Users, Calendar, Star, Layers } from "lucide-react";

export const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-900 text-white p-4 flex flex-col">
      <h2 className="text-xl font-bold mb-4">My Calendars</h2>

      <div className="mb-4">
        <h3 className="text-gray-400">Categories</h3>
        <div className="flex items-center gap-2 mt-2">
          <Layers className="text-blue-400" size={16} />
          <span>Work</span>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <Star className="text-purple-400" size={16} />
          <span>Personal</span>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <Calendar className="text-green-400" size={16} />
          <span>Education</span>
        </div>
      </div>

      <div className="mt-auto">
        <h3 className="text-gray-400">Favorites</h3>
        <div className="flex items-center mt-2">
          <Users className="text-yellow-400" size={16} />
          <span>Team Members</span>
        </div>
      </div>
    </div>
  );
};
