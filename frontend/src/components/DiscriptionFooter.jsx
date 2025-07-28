import React from 'react';
// import bgFooter from "../assets/homepageimages/footerbackgroundimage/back_image[1].png"; // 👈 apni image import karo

const DiscriptionFooter = () => {
  return (
    <div
      className="text-white p-6 bg-cover bg-center bg-no-repeat bg-blue-900"
       // 👈 yahan apna color code daal do
    >
      {/* Overlay for text visibility */}
      <div className=" bg-opacity-10 p-6 rounded-md">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 1. Services Section */}
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold  mb-2 text-white relative inline-block">
              <span className="relative inline-block font-houschka">
                Services
               
              </span>
            </h1>
            <ul className="space-y-3 text-md">
              <li>Software Development</li>
              <li>Development,Hosting & Promotion</li>
              <li>Hardware & Networking</li>
              <li>Multimedia & Animation</li>
              <li>Digital Marketing</li>
              <li>Data Centers Development</li>
              <li>E-Learning</li>
              <li>Video Conferencing</li>
              <li>Security and surveillance</li>
              <li>Data Digitization</li>
              <li>Remote Infrastructure</li>
              
            </ul>
          </div>

          {/* 2. Products and Platforms Section */}
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold  mb-2 text-white relative inline-block">
              <span className="relative inline-block font-houschka">
                Products & Platform
                
              </span>
              
            </h1>
              <ul className="space-y-2 text-md  ">
              <li>University Automation Software</li>
              <li>Medical College Management and Information System.</li>
              <li>Engineering College Management and Information System</li>
              <li>E-Company System</li>
              <li>Hospital Management & Information system.</li>
              <li>Bioinformatics Management and Information System</li>
              <li>CRM Software</li>
              <li>College/Institute Management Systems</li>
              <li>School Management System</li>
              <li>ERP Software</li>
              <li>Smart Learning & Content Management System (SLCMS)</li>
              <li>Account Management System (Trulymax-S)</li>
              
            </ul>


          </div>

          {/* 3. Industries Section */}
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold  mb-2 text-white relative inline-block">
              <span className="relative inline-block font-houschka">
                Industries
               
              </span>
            </h1>
            <ul className="space-y-2 text-md">
              <li>Education</li>
              <li>Healthcare</li>
              <li>Banking</li>
              <li>Manufacturing</li>
              <li>Retail</li>
              <li>Life Science</li>
              <li>Consumer Goods</li>
              
            </ul>
          </div>
        </div>
      </div>
      <hr className="my-6 border-gray-300" />
    </div>
    
  );
};

export default DiscriptionFooter;
