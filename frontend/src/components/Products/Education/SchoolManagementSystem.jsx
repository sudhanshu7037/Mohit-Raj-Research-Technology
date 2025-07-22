import React from 'react'

const SchoolManagementSystem = () => {
  return (
     <>
      <div className="relative w-full h-screen">
        {/* Background Image */}
        <img
          src="https://img.freepik.com/free-photo/empty-school-classroom-without-students-due-coronavirus-pandemic_23-2148895987.jpg"
          alt="School Background"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Text Content */}
        <div className="absolute inset-0 flex items-center justify-start px-6 md:px-16">
          <div className="text-white max-w-2xl">
            <h1 className="text-2xl md:text-4xl font-bold text-white font-houschka">
              School Management System
            </h1>
            <p className="text-lg md:text-xl text-yellow-300 font-basis mt-4">
              Smart, Secure & Scalable ERP for Modern School Administration
            </p>
            <p className="text-gray-200 mt-3 font-basis">
              From admissions to attendance and report cards, our system simplifies all school operations with ease and transparency.
            </p>
            <button className="mt-6 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full transition-all duration-300">
              REQUEST A QUICK DEMO TODAY!
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default SchoolManagementSystem