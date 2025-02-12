import React, { useState } from 'react';
import SideNavigation from './SideNavigation';
import QuestionRow from './QuestionRow';

const ContestProblemPage = () => {
  const [activeQuestion, setActiveQuestion] = useState(1);

  const questions = [
    { id: 1, title: 'Break A Palindrome', type: 'Code' },
    { id: 2, title: 'Country Populations', type: 'Approximate Solution' },
    { id: 3, title: 'Good URI Design', type: 'Multiple Choice' },
    { id: 4, title: 'REST Server Response', type: 'Multiple Choice' }
  ];

  const handleSolve = (question) => {
    setActiveQuestion(question.id);
    console.log(`Solving question ${question.id}`);
  };

  return (
    <div className="min-h-screen bg-[#0D1439] flex">
      <SideNavigation activeItem={activeQuestion} />
      
      <main className="flex-1 pl-16 min-h-screen">
        <div className="max-w-8xl mx-auto p-6 mt-14">
          {/* Header */}
          <div className="mb-6 flex items-center justify-between">
            {/* <span className="text-blue-400 font-medium">ALL</span> */}
          </div>

          {/* Questions Table */}
          <div className="bg-[#353B5F] overflow-hidden shadow-lg">
            {/* Table Header */}
            <div className="grid grid-cols-12 bg-navy-700 p-4 text-gray-200">
              <div className="col-span-7 font-medium">QUESTIONS</div>
              <div className="col-span-3 font-medium">TYPE</div>
              <div className="col-span-2 font-medium">ACTION</div>
            </div>

            {/* Questions List */}
            <div className="divide-y bg-[#03071C;]">
              {questions.map((question) => (
                <QuestionRow 
                  key={question.id} 
                  question={question}
                  onSolve={handleSolve}
                />
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end mt-6">
            <button className="bg-[#0D1439] text-white px-6 py-2 border border-white hover:bg-blue-500 transition-colors w-60">
              Submit Test
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContestProblemPage;