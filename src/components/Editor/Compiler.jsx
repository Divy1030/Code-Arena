import React, { useState, useEffect } from 'react';
import { ChevronDown, Play, Settings, Trophy, Award, Maximize2, Minimize2 } from 'lucide-react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { java } from '@codemirror/lang-java';
import { cpp } from '@codemirror/lang-cpp';
import { python } from '@codemirror/lang-python';
import { basicSetup } from '@codemirror/basic-setup';
import { linter, lintGutter } from '@codemirror/lint';
import Modal from './Modal';
import Navbar from '../common/Navbar';

const Compiler = () => {
  const initialCode = `function solution(nums) {
  // Write your code here
  
  return result;
}`;

  const testCases = [
    {
      id: 1,
      status: 'passed',
      input: '[2, 3, 4]',
      expected: '5',
      output: '5',
    },
    {
      id: 2,
      status: 'failed',
      input: '[2, 3, 4]',
      expected: '6',
      output: '5',
    },
  ];

  const [selectedTestCase, setSelectedTestCase] = useState(testCases[0]);
  const [code, setCode] = useState(initialCode);
  const [theme, setTheme] = useState('dark');
  const [fontSize, setFontSize] = useState(14);
  const [language, setLanguage] = useState(javascript);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [activeView, setActiveView] = useState('problem'); // 'problem' or 'ide'
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isTablet, setIsTablet] = useState(window.innerWidth > 768 && window.innerWidth <= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setIsTablet(window.innerWidth > 768 && window.innerWidth <= 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const resetCode = () => {
    setCode(initialCode);
  };

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  const toggleSettings = () => {
    setShowSettings(!showSettings);
  };

  const handleThemeChange = (e) => {
    setTheme(e.target.value);
  };

  const handleFontSizeChange = (e) => {
    setFontSize(Number(e.target.value));
  };

  const handleLanguageChange = (e) => {
    const lang = e.target.value;
    switch (lang) {
      case 'javascript':
        setLanguage(javascript);
        break;
      case 'java':
        setLanguage(java);
        break;
      case 'cpp':
        setLanguage(cpp);
        break;
      case 'python':
        setLanguage(python);
        break;
      default:
        setLanguage(javascript);
    }
  };

  const lintJavaScript = async (view) => {
    const linter = new Linter();
    const results = linter.verify(view.state.doc.toString(), { rules: { semi: 2 } });
    const diagnostics = results.map((msg) => ({
      from: view.state.doc.line(msg.line).from,
      to: view.state.doc.line(msg.endLine || msg.line).to,
      severity: msg.severity === 2 ? 'error' : 'warning',
      message: msg.message,
    }));
    return diagnostics;
  };

  const lintPython = async (view) => {
    const code = view.state.doc.toString();
    const response = await fetch('https://python-lint-api.example.com/lint', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ code }),
    });
    const results = await response.json();
    const diagnostics = results.map((msg) => ({
      from: view.state.doc.line(msg.line).from,
      to: view.state.doc.line(msg.endLine || msg.line).to,
      severity: msg.severity === 'error' ? 'error' : 'warning',
      message: msg.message,
    }));
    return diagnostics;
  };

  const lintJava = async (view) => {
    const code = view.state.doc.toString();
    const response = await fetch('https://java-lint-api.example.com/lint', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ code }),
    });
    const results = await response.json();
    const diagnostics = results.map((msg) => ({
      from: view.state.doc.line(msg.line).from,
      to: view.state.doc.line(msg.endLine || msg.line).to,
      severity: msg.severity === 'error' ? 'error' : 'warning',
      message: msg.message,
    }));
    return diagnostics;
  };

  const lintCpp = async (view) => {
    const code = view.state.doc.toString();
    const response = await fetch('https://cpp-lint-api.example.com/lint', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ code }),
    });
    const results = await response.json();
    const diagnostics = results.map((msg) => ({
      from: view.state.doc.line(msg.line).from,
      to: view.state.doc.line(msg.endLine || msg.line).to,
      severity: msg.severity === 'error' ? 'error' : 'warning',
      message: msg.message,
    }));
    return diagnostics;
  };

  const lint = linter((view) => {
    switch (language) {
      case javascript:
        return lintJavaScript(view);
      case python:
        return lintPython(view);
      case java:
        return lintJava(view);
      case cpp:
        return lintCpp(view);
      default:
        return [];
    }
  });

  return (
    <div className={`min-h-screen bg-[#0f1117] text-white ${isFullScreen ? 'fixed inset-0 z-50' : ''}`}>
      {/* Navigation Bar */}
      <Navbar />

      {/* Mobile Navbar */}
      {isMobile && (
        <nav className="flex justify-around items-center p-4 bg-[#01062e]">
          <button
            className={`text-white ${activeView === 'problem' ? 'font-bold' : ''}`}
            onClick={() => setActiveView('problem')}
          >
            Problem
          </button>
          <button
            className={`text-white ${activeView === 'ide' ? 'font-bold' : ''}`}
            onClick={() => setActiveView('ide')}
          >
            IDE
          </button>
        </nav>
      )}

      {/* Main Content */}
      <div className="flex h-full overflow-hidden bg-[#0d1538]">
        {/* Problem Description Section */}
        {!isFullScreen && (!isMobile || activeView === 'problem') && (
          <div className={`p-4 ${isMobile ? 'w-full' : 'w-1/2'} overflow-auto h-screen`}>
            <div className="lg:h-full sm:h-screen pr-4">
              <div className="bg-[#03061d] p-4 rounded-lg mb-4 overflow-y-auto max-h-[31rem]">
                <div className="flex justify-between items-center mb-4 gap-2">
                  <h1 className="text-xl font-semibold">Two Sum</h1>
                  <div className="flex items-center gap-4">
                    <span className="text-green-500 px-2 py-1 rounded text-sm bg-green-800">Easy</span>
                    <span className="text-gray-400">15 mins</span>
                    <div className='flex items-center gap-1'>
                      <Trophy size={16} className="text-white" />
                      <span className="text-gray-400">100 points</span>
                    </div>
                  </div>
                </div>
                <h2 className="font-semibold mb-2">Problem Description</h2>
                <p className="text-gray-400 mb-4">
                  Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice.
                </p>

                <h3 className="font-semibold mb-2">Example 1:</h3>
                <div className="bg-[#333d70] p-4 rounded mb-4">
                  <p className="text-white">
                    Input: nums = [2,7,11,15], target = 9
                    <br />
                    Output: [0,1]
                    <br />
                    Explanation: Because nums[0] + nums[1] = 9, we return [0, 1].
                  </p>
                </div>

                <h3 className="font-semibold mb-2">Constraints:</h3>
                <ul className="text-gray-400 list-disc pl-4 mb-4">
                  <li>2 ≤ nums.length ≤ 104</li>
                  <li>-109 ≤ nums[i] ≤ 109</li>
                  <li>-109 ≤ target ≤ 109</li>
                  <li>Only one valid answer exists.</li>
                </ul>

                <h3 className="font-semibold mb-2">Follow-up:</h3>
                <p className="text-gray-400 mb-4">
                  Can you come up with an algorithm that is less than O(n²) time complexity?
                </p>

                <h3 className="font-semibold mb-2">Additional Test Cases:</h3>
                <div className="bg-[#333d70] p-4 rounded mb-4">
                  <p className="text-white">
                    Example 2:
                    <br />
                    Input: nums = [3,2,4], target = 6
                    <br />
                    Output: [1,2]
                    <br />
                    <br />
                    Example 3:
                    <br />
                    Input: nums = [3,3], target = 6
                    <br />
                    Output: [0,1]
                  </p>
                </div>
              </div>

              <div className="bg-[#03061d] p-4 rounded-lg mb-4">
                <h2 className="font-semibold mb-4">Weekly Contest #123</h2>
                <div className="flex justify-between gap-4">
                  <div className="flex-1 flex items-center gap-2 bg-[#333d70] p-4 rounded-lg">
                    <Award size={16} className="text-blue-400" />
                    <div>
                      <div className="text-sm text-white">Current Rank</div>
                      <div className="text-xl font-bold">#42</div>
                      <div className="text-sm text-white">out of 1,234 participants</div>
                    </div>
                  </div>
                  <div className="flex-1 flex items-center gap-2 bg-[#333d70] p-4 rounded-lg">
                    <Trophy size={16} className="text-yellow-300" />
                    <div>
                      <div className="text-sm text-white">Total Score</div>
                      <div className="text-xl font-bold">250</div>
                      <div className="text-sm text-white">points earned</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Code Editor Section */}
        {(!isMobile || activeView === 'ide') && (
          <div className={`p-4 ${isMobile || isFullScreen ? 'w-full' : 'w-1/2'} overflow-auto h-screen`}>
            <div className="flex items-center justify-between mb-4">
              <select className="text-gray-400 bg-[#1a1d27] border border-gray-600 rounded p-2" onChange={handleLanguageChange}>
                <option value="javascript">JavaScript</option>
                <option value="java">Java</option>
                <option value="cpp">C++</option>
                <option value="python">Python</option>
              </select>
              <div className="flex items-center gap-4">
                {!isMobile && <Settings size={16} className="text-white" onClick={toggleSettings} />}
                {!isMobile && (isFullScreen ? (
                  <Minimize2 size={16} className="text-white" onClick={toggleFullScreen} />
                ) : (
                  <Maximize2 size={16} className="text-white" onClick={toggleFullScreen} />
                ))}
                <button className="flex items-center gap-2 bg-[#1a1d27] px-4 py-2 rounded">
                  <Play size={16} />
                  Run Code
                </button>
                <button className="bg-blue-600 px-4 py-2 rounded">
                  Submit Solution
                </button>
              </div>
            </div>

            <Modal isOpen={showSettings} onClose={toggleSettings}>
              <div className="mb-4">
                <label className="text-gray-400">Theme:</label>
                <select value={theme} onChange={handleThemeChange} className="ml-2 bg-[#1a1d27] border border-gray-600 rounded p-2">
                  <option value="dark">Dark</option>
                  <option value="light">Light</option>
                </select>
              </div>
              <div>
                <label className="text-gray-400">Font Size:</label>
                <input
                  type="number"
                  value={fontSize}
                  onChange={handleFontSizeChange}
                  className="ml-2 w-16 bg-[#1a1d27] border border-gray-600 rounded p-2"
                />
              </div>
            </Modal>

            <div className="bg-[#03061d] p-4 rounded-lg h-96 mb-4 overflow-auto">
              <CodeMirror
                value={code}
                extensions={[language, lint, lintGutter()]}
                onChange={(value) => {
                  setCode(value);
                }}
                theme={theme}
                style={{ fontSize: `${fontSize}px` }}
              />
            </div>
            <div className="mt-[1.5rem]">
              <div className="text-sm text-white mb-2 flex items-center gap-2">
                <Play size={16} className="text-white" />
                <span>Console Output</span>
              </div>
              <div className="bg-[#03061d] p-4 rounded-lg max-h-48 overflow-y-auto">
                <div className="flex mb-4">
                  {testCases.map((testCase) => (
                    <button
                      key={testCase.id}
                      className={`flex items-center gap-2 px-4 py-2 rounded ${
                        selectedTestCase.id === testCase.id ? 'bg-gray-800' : 'bg-none'
                      }`}
                      onClick={() => setSelectedTestCase(testCase)}
                    >
                      <div
                        className={`w-3 h-3 rounded-full ${
                          testCase.status === 'passed' ? 'bg-green-500' : 'bg-red-500'
                        }`}
                      ></div>
                      <span>Test Case #{testCase.id}</span>
                    </button>
                  ))}
                </div>
                <div>
                  <div className={`text-${selectedTestCase.status === 'passed' ? 'green' : 'red'}-500`}>
                    Test Case #{selectedTestCase.id}: {selectedTestCase.status.charAt(0).toUpperCase() + selectedTestCase.status.slice(1)}
                  </div>
                  <div className="text-white">
                    Input: {selectedTestCase.input}
                    <br />
                    Expected: {selectedTestCase.expected}
                    <br />
                    Output: {selectedTestCase.output}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Compiler;