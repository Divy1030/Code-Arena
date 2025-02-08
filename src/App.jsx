import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/ui/Navbar";
import LandingPage from "./pages/Landing/LandingPage";
import './App.css'
import Login from './pages/Login'
import CustomRadialBarChart from './components/CustomRadialBarChart'
import CustomLineChart from './components/CustomLineChart'
import CustomAreaGraph from './components/CustomAreaGraph'
import CustomBarGraph from './components/CustomBarGraph'
import CustomPieChart from './components/CustomPieChart'
import CalendarView from './components/CalendarView'
import CalendarDashboard from './components/CalendarDashboard'
// import { ResponsiveContainer } from 'recharts'

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark', !isDarkMode);
  };

  return (
    <Router>
      <div className={`min-h-screen ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
        <Navbar isDarkMode={isDarkMode} />
        <Routes>
          <Route path="/" element={<LandingPage isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />} />
          {/* Add other routes here */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;import { useState } from 'react'