import React from 'react';

const CollegeInstituteManagementSystems = () => {
  return (
    <>
      <div className="relative w-full h-screen">
        {/* Background Image */}
        <img
          src="https://images.careerindia.com/college-photos/1173/college-campus-main-entrance_1493198013.jpg"
          alt="University Background"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Text Content */}
        <div className="absolute inset-0 flex items-center justify-start px-6 md:px-16">
          <div className="text-white max-w-2xl">
            <h1 className="text-2xl md:text-4xl font-bold text-white font-houschka">
              College Institute Management System
            </h1>
            <p className="text-lg md:text-xl text-green-400 font-basis mt-4">
              Robust, All-Inclusive & Scalable ERP Solution for Streamlining Universities
            </p>
            <p className="text-gray-200 mt-3 font-basis">
              Enables flawless management of all academic and non-academic activities
            </p>
            <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-300">
              REQUEST A QUICK DEMO TODAY!
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CollegeInstituteManagementSystems;
