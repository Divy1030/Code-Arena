import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  AreaChart,
  Area,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: 'Jan', profit: 100000 },
  { name: 'Feb', profit: 150000 },
  { name: 'Mar', profit: 200000 },
  { name: 'Apr', profit: 180000 },
  { name: 'May', profit: 220000 },
  { name: 'Jun', profit: 300000 },
  { name: 'Jul', profit: 400000 },
  { name: 'Aug', profit: 350000 },
  { name: 'Sep', profit: 300000 },
  { name: 'Oct', profit: 400000 },
  { name: 'Nov', profit: 500000 },
];

const CustomAreaGraph = () => {
  return (
    <div className="bg-gray-900 rounded-lg p-6 text-white">
      <h3 className="text-center text-lg font-semibold mb-6">Profit Statistics</h3>
      <ResponsiveContainer width="100%" height={400}>
        <AreaChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            {/* Gradient definition */}
            <linearGradient id="colorProfit" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#4b6cb7" stopOpacity={0.2} />
              <stop offset="50%" stopColor="#8e44ad" stopOpacity={0.8} />
              <stop offset="100%" stopColor="#f39c12" stopOpacity={0.8} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
          <XAxis
            dataKey="name"
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
            formatter={(value) => [`$${value.toLocaleString()}`, 'Profit']}
          />
          <Area
            type="monotone"
            dataKey="profit"
            stroke="url(#colorProfit)"
            fill="url(#colorProfit)"
            strokeWidth={3}
            dot={{ r: 5, strokeWidth: 2 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomAreaGraph;
