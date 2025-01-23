import { useState } from 'react'
import './App.css'
import Login from './pages/Login'
import CustomRadialBarChart from './components/CustomRadialBarChart'
import CustomLineChart from './components/CustomLineChart'
import CustomAreaGraph from './components/CustomAreaGraph'
import CustomBarGraph from './components/CustomBarGraph'
import CustomPieChart from './components/CustomPieChart'
// import { ResponsiveContainer } from 'recharts'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Login/>
      <CustomRadialBarChart/>
      <CustomLineChart/>
      <CustomAreaGraph/>
      <CustomBarGraph/>
      <CustomPieChart/>
    </>
  )
}

export default App
