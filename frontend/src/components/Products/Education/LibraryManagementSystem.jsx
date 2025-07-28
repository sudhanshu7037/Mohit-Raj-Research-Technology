import React from 'react'

const LibraryManagementSystem = () => {
  return (
    <>
    
      <div className="">
        {/* Background Image */}
        <img
          src="https://img.freepik.com/free-photo/bookshelf-library_53876-143932.jpg"
          alt="Library Background"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Text Content */}
        <div className="absolute inset-0 flex items-center justify-start px-6 md:px-16">
          <div className="text-white max-w-2xl">
            <h1 className="text-2xl md:text-4xl font-bold text-white font-houschka">
              Library Management System
            </h1>
            <p className="text-lg md:text-xl text-orange-300 font-basis mt-4">
              Digitally Manage Book Circulation, Catalogs & Library Resources
            </p>
            <p className="text-gray-200 mt-3 font-basis">
              Automate book issuance, return, stock, fine calculation, and real-time tracking with barcode & RFID support.
            </p>
            <button className="mt-6 bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-full transition-all duration-300">
              REQUEST A QUICK DEMO TODAY!
            </button>
          </div>
        </div>
      </div>
    </>
    
    
  )
}

export default LibraryManagementSystem