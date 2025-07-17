import React from 'react'

const EntranceExamManagementandInformationSystem = () => {
  return (
  
    
    <>
      <div className="relative w-full h-screen">
        {/* Background Image */}
        <img
          src="https://img.freepik.com/free-photo/test-exam-form-education-concept_53876-141093.jpg"
          alt="Entrance Examination Background"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Text Content */}
        <div className="absolute inset-0 flex items-center justify-start px-6 md:px-16">
          <div className="text-white max-w-2xl">
            <h1 className="text-2xl md:text-4xl font-bold text-white font-houschka">
              Entrance Examination Management System
            </h1>
            <p className="text-lg md:text-xl text-red-300 font-basis mt-4">
              End-to-End Digital Solution for Conducting Secure & Transparent Entrance Exams
            </p>
            <p className="text-gray-200 mt-3 font-basis">
              Manage registration, admit cards, online/offline tests, proctoring, evaluation, and results — all in one centralized platform.
            </p>
            <button className="mt-6 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full transition-all duration-300">
              REQUEST A QUICK DEMO TODAY!
            </button>
          </div>
        </div>
      </div>
    
    </>
  )
}

export default EntranceExamManagementandInformationSystem