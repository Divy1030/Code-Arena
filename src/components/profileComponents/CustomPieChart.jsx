import React from 'react';
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
} from 'recharts';

const data = [
  { name: 'Bitcoin', value: 35, color: '#ff6f91' },
  { name: 'Waves', value: 6, color: '#ffcc00' },
  { name: 'Avax', value: 40, color: '#6a5acd' },
  { name: 'Bitcoin Cash', value: 10, color: '#1abc9c' },
];

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
      fontSize="12"
    >
      {`${data[index].name} (${(percent * 100).toFixed(0)}%)`}
    </text>
  );
};

const CustomPieChart = () => {
  return (
    <div style={{ backgroundColor: '#1E293B', padding: '20px', borderRadius: '12px', color: 'white' }}>
      <h3 style={{ textAlign: 'center', fontWeight: '600', marginBottom: '20px' }}>Balance</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            cx="50%"
            cy="50%"
            innerRadius={80}
            outerRadius={100}
            cornerRadius={15} // Makes the bars rounded
            labelLine={false}
            label={renderCustomizedLabel}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-around' }}>
        {data.map((entry) => (
          <div
            key={entry.name}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                width: '12px',
                height: '12px',
                backgroundColor: entry.color,
                borderRadius: '50%',
                marginBottom: '5px',
              }}
            />
            <span style={{ fontSize: '12px' }}>{entry.name}</span>
            <span style={{ fontSize: '14px', fontWeight: '600' }}>${entry.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomPieChart;
