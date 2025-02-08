import React, { useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: 'Jan', Website: 100, Ticketmaster: 200, Eventbrite: 150 },
  { name: 'Feb', Website: 150, Ticketmaster: 250, Eventbrite: 200 },
  { name: 'Mar', Website: 200, Ticketmaster: 300, Eventbrite: 250 },
  { name: 'Apr', Website: 250, Ticketmaster: 350, Eventbrite: 300 },
  { name: 'May', Website: 300, Ticketmaster: 400, Eventbrite: 350 },
  { name: 'Jun', Website: 400, Ticketmaster: 450, Eventbrite: 400 },
  { name: 'Jul', Website: 350, Ticketmaster: 400, Eventbrite: 450 },
  { name: 'Aug', Website: 300, Ticketmaster: 350, Eventbrite: 400 },
  { name: 'Sep', Website: 250, Ticketmaster: 300, Eventbrite: 350 },
  { name: 'Oct', Website: 200, Ticketmaster: 250, Eventbrite: 300 },
  { name: 'Nov', Website: 150, Ticketmaster: 200, Eventbrite: 250 },
];

const CustomLineChart = () => {
  const [renderChart, setRenderChart] = useState(true); // State to control chart re-mounting

  // Handle mouse enter to briefly unmount and re-mount the chart
  const handleMouseEnter = () => {
    setRenderChart(false); // Unmount the chart
    setTimeout(() => setRenderChart(true), 0); // Re-mount the chart instantly
  };

  return (
    <div
      className="bg-gray-900 rounded-lg p-6 text-white"
      onMouseEnter={handleMouseEnter} // Trigger re-mount on mouse enter
    >
      <h3 className="text-center text-lg font-semibold mb-6">Event Statistics</h3>
      <div className="flex justify-center">
        {renderChart && ( // Only render the chart when renderChart is true
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              {/* Gradient Definitions */}
              <defs>
                <linearGradient id="gradientWebsite" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#00cfe8" stopOpacity={0.2} />
                  <stop offset="15%" stopColor="#00cfe8" stopOpacity={1} />
                  <stop offset="85%" stopColor="#00cfe8" stopOpacity={1} />
                  <stop offset="100%" stopColor="#00cfe8" stopOpacity={0.2} />
                </linearGradient>
                <linearGradient id="gradientTicketmaster" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#8c4ff7" stopOpacity={0.2} />
                  <stop offset="15%" stopColor="#8c4ff7" stopOpacity={1} />
                  <stop offset="85%" stopColor="#8c4ff7" stopOpacity={1} />
                  <stop offset="100%" stopColor="#8c4ff7" stopOpacity={0.2} />
                </linearGradient>
                <linearGradient id="gradientEventbrite" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#ffc107" stopOpacity={0.2} />
                  <stop offset="15%" stopColor="#ffc107" stopOpacity={1} />
                  <stop offset="85%" stopColor="#ffc107" stopOpacity={1} />
                  <stop offset="100%" stopColor="#ffc107" stopOpacity={0.2} />
                </linearGradient>
              </defs>
              {/* Chart Elements */}
              <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
              <XAxis dataKey="name" tick={{ fill: '#D1D5DB' }} />
              <YAxis tick={{ fill: '#D1D5DB' }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1F2937',
                  border: 'none',
                  borderRadius: '8px',
                  color: '#FFF',
                }}
                labelStyle={{ color: '#9CA3AF' }}
              />
              <Legend wrapperStyle={{ color: '#D1D5DB' }} />
              <Line
                type="monotone"
                dataKey="Website"
                stroke="url(#gradientWebsite)"
                strokeWidth={3}
                dot={{ r: 5, fill: '#00cfe8', strokeWidth: 2 }}
              />
              <Line
                type="monotone"
                dataKey="Ticketmaster"
                stroke="url(#gradientTicketmaster)"
                strokeWidth={3}
                dot={{ r: 5, fill: '#8c4ff7', strokeWidth: 2 }}
              />
              <Line
                type="monotone"
                dataKey="Eventbrite"
                stroke="url(#gradientEventbrite)"
                strokeWidth={3}
                dot={{ r: 5, fill: '#ffc107', strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
  );
};

export default CustomLineChart;
