import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { day: 'Sat', low: 10000, high: 20000 },
  { day: 'Sun', low: 20000, high: 30000 },
  { day: 'Mon', low: 15000, high: 40000 },
  { day: 'Tue', low: 30000, high: 20000 },
  { day: 'Wed', low: 25000, high: 35000 },
  { day: 'Thu', low: 20000, high: 25000 },
  { day: 'Fri', low: 15000, high: 30000 },
];

const CustomBarGraph = () => {
  return (
    <div className="bg-gray-900 rounded-lg p-6 text-white">
      <h3 className="text-center text-lg font-semibold mb-6">
        Number of Tickets / Week
      </h3>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
        >
          {/* Gradient Definitions */}
          <defs>
            <linearGradient id="lowGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#8c4ff7" stopOpacity={1} />
              <stop offset="100%" stopColor="#4b6cb7" stopOpacity={1} />
            </linearGradient>
            <linearGradient id="highGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ffc107" stopOpacity={1} />
              <stop offset="100%" stopColor="#ff8b00" stopOpacity={1} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
          <XAxis
            dataKey="day"
            tick={{ fill: '#D1D5DB' }}
            axisLine={{ stroke: '#D1D5DB' }}
          />
          <YAxis
            tick={{ fill: '#D1D5DB' }}
            axisLine={{ stroke: '#D1D5DB' }}
            tickFormatter={(value) => `${value / 1000}K`}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: '#1F2937',
              border: 'none',
              borderRadius: '8px',
              color: '#FFF',
            }}
            labelStyle={{ color: '#9CA3AF' }}
          />
          {/* Bars with Rounded Edges */}
          <Bar
            dataKey="low"
            stackId="a"
            fill="url(#lowGradient)"
            barSize={20}
            radius={[10, 10, 0, 0]} // Top corners rounded
          />
          <Bar
            dataKey="high"
            stackId="a"
            fill="url(#highGradient)"
            barSize={20}
            radius={[10, 10, 0, 0]} // Top corners rounded
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomBarGraph;
