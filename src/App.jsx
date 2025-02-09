import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/ui/Navbar";
import LandingPage from "./pages/Landing/LandingPage";
import './App.css'
import Login from './pages/Login'
import CalendarComponent from "./components/profileComponents/CalendarComponent";

import CustomRadialBarChart from './components/CustomRadialBarChart'
import CustomLineChart from './components/CustomLineChart'
import CustomAreaGraph from './components/CustomAreaGraph'
import CustomBarGraph from './components/CustomBarGraph'
import CustomPieChart from './components/CustomPieChart'
import CalendarView from './components/CalendarView'
import CalendarDashboard from './components/CalendarDashboard'
// import { ResponsiveContainer } from 'recharts'
import Compiler from './components/Editor/Compiler';


const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark', !isDarkMode);
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      {location.pathname !== '/login' && location.pathname !== '/cp' && <Navbar isDarkMode={isDarkMode} />}
      <Routes>
        <Route path="/" element={<LandingPage isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />} />
        <Route path="/login" element={<Login isDarkMode={isDarkMode} />} />
        <Route path="/cp" element={<Compiler />} />
      </Routes>
    </div>
  );
};

export default App;