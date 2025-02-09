import React, { useState } from 'react';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'January', uv: 40, fill: '#8c4ff7' },  // Purple
  { name: 'February', uv: 60, fill: '#ffc107' }, // Yellow
  { name: 'March', uv: 70, fill: '#00cfe8' },    // Cyan
  { name: 'March', uv: 110, fill: '#00000000' }, // Transparent
];

const CustomRadialBarChart = () => {
  const [renderChart1, setRenderChart1] = useState(true);

  const handleMouseEnter = () => {
    setRenderChart1(false); // Unmounts the chart
    setTimeout(() => setRenderChart1(true), 0); // Re-mounts the chart instantly
  };

  return (
    <div
      className="bg-gray-900 rounded-lg p-6 text-white"
      onMouseEnter={handleMouseEnter}
    >
      <h3 className="text-center text-lg font-semibold mb-6">Event Statistics</h3>
      <div className="flex justify-center">
        {renderChart1 && (
          <ResponsiveContainer width="100%" height={400}>
            <RadialBarChart
              width={300}
              height={300}
              cx="50%"
              cy="50%"
              innerRadius="50%"
              outerRadius="80%"
              barSize={15}
              data={data}
            >
              <RadialBar
                minAngle={15}
                cornerRadius={10}
                clockWise
                dataKey="uv"
              />
              <Legend
                iconSize={10}
                layout="vertical"
                verticalAlign="middle"
                wrapperStyle={{
                  top: '50%',
                  transform: 'translateY(-50%)',
                  lineHeight: '24px',
                }}
              />
            </RadialBarChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
  );
};

export default CustomRadialBarChart;
