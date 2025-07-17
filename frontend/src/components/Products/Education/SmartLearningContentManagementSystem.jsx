import React from 'react'

const SmartLearningContentManagementSystem = () => {
  return (
    <>
      <div className="relative w-full h-screen">
        {/* Background Image */}
        <img
          src="https://img.freepik.com/free-photo/student-learning-online-home_23-2148687903.jpg"
          alt="Smart Learning Background"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Text Content */}
        <div className="absolute inset-0 flex items-center justify-start px-6 md:px-16">
          <div className="text-white max-w-2xl">
            <h1 className="text-2xl md:text-4xl font-bold text-white font-houschka">
              Smart Learning & Content Management System (SLCMS)
            </h1>
            <p className="text-lg md:text-xl text-blue-200 font-basis mt-4">
              AI-Powered Learning Platform for Content Delivery, Assessment & Collaboration
            </p>
            <p className="text-gray-200 mt-3 font-basis">
              Deliver personalized e-learning experiences, manage rich multimedia content, and track learner performance across devices and formats.
            </p>
            <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition-all duration-300">
              REQUEST A QUICK DEMO TODAY!
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default SmartLearningContentManagementSystem