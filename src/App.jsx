import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import LandingPage from "./pages/LandingPage";
import './App.css';
import Login from './pages/Login';
import CustomRadialBarChart from './components/Custom Component/CustomRadialBarChart';
import CustomLineChart from './components/Custom Component/CustomLineChart';
import CustomAreaGraph from './components/Custom Component/CustomAreaGraph';
import CustomBarGraph from './components/Custom Component/CustomBarGraph';
import CustomPieChart from './components/Custom Component/CustomPieChart';
import CalendarView from './components/Custom Component/CalendarView';
import CalendarDashboard from './components/Custom Component/CalendarDashboard';
import Compiler from './components/Editor/Compiler';

// ✅ Merged Import Statements
import InstructionsPage from "./pages/InstructionsPage";
import HomePage from "./pages/Home/HomePage";
import ContestManagementDashboard from "./pages/ContestManagement/ContestManagementDashboard";
import ContestProblemPage from "./pages/ContestManagement/ContestProblemPage";
import AdminHome from "./pages/Admin/AdminHome";
import ContestScorecard from "./pages/Admin/ContestScorecard";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark', !isDarkMode);
  };

  return (
    <Router>
      <AppContent isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
    </Router>
  );
};

const AppContent = ({ isDarkMode, toggleDarkMode }) => {
  const location = useLocation();

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      {location.pathname !== '/login' && location.pathname !== '/cp' && <Navbar isDarkMode={isDarkMode} />}
      <Routes>
        <Route path="/" element={<LandingPage isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />} />
        <Route path="/login" element={<Login isDarkMode={isDarkMode} />} />
        <Route path="/cp" element={<Compiler />} />
        <Route path="/admin" element={<ContestScorecard />} />
        {/* ✅ Merged Routes */}
        <Route path="/instruction" element={<InstructionsPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/cmd" element={<ContestManagementDashboard />} />
        <Route path="cpp" element={<ContestProblemPage />} />
      </Routes>
    </div>
  );
};

export default App;
