import React from 'react'
import Medical from '../../assets/medical collage.png'

const MedicalCollegeManagement = () => {
  return (
    <>
    <div className="relative w-full h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[60vh] xl:h-[70vh] overflow-hidden">
  {/* Background Image */}
  <img
    src={Medical}
    alt="Custom Software Development"
    className="w-full h-full object-cover"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-black bg-opacity-50"></div>

  {/* Hero Content */}
  <div className="absolute inset-0 flex items-center justify-center px-4">
    <h1 className="text-white text-center text- xl sm:text-xl md:text-3xl lg:text-4xl font- font-houschka ">
      Medical College Management and Information System
    </h1>
      
  </div>
</div>

    
    
    </>
  )
}

export default MedicalCollegeManagement