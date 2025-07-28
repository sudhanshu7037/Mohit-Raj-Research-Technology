import React from 'react'

const OnlineExaminationManagementSystem = () => {
  return (
    <>
      <div className="">
        {/* Background Image */}
        <img
          src="https://img.freepik.com/free-photo/student-taking-online-test-home_23-2149627063.jpg"
          alt="Online Examination Background"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Text Content */}
        <div className="absolute inset-0 flex items-center justify-start px-6 md:px-16">
          <div className="text-white max-w-2xl">
            <h1 className="text-2xl md:text-4xl font-bold text-white font-houschka">
              Online Examination Management System
            </h1>
            <p className="text-lg md:text-xl text-purple-300 font-basis mt-4">
              Seamless, Secure & Scalable Solution for Conducting Digital Exams
            </p>
            <p className="text-gray-200 mt-3 font-basis">
              Create, schedule, monitor, and evaluate exams online with AI-based proctoring, real-time analytics, and zero-paper workflow.
            </p>
            <button className="mt-6 bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-full transition-all duration-300">
              REQUEST A QUICK DEMO TODAY!
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default OnlineExaminationManagementSystem