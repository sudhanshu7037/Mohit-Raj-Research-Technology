import React from 'react'
import whychooseimage from "../assets/homepageimages/whychooseimages/whychooseimage.jpg"

const whychoose = () => {
  return (
    <>
    
    <section className="w-full px-6 py-12 ">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Left Side Image */}
        <div className="w-full md:w-1/2">
          <img
            src={whychooseimage}
            alt="Why Choose Us"
            className="  w-full object-cover"
          />
        </div>

        {/* Right Side Content */}
        <div className="w-full md:w-1/2">
          <h2 className="text-5xl font-bold text-blue-900 mb-4 font-houschka ">
            Why Choose Mohitraj Research Tech?
          </h2>
          <p className="text-gray-700 mb-4">
            We empower businesses with cutting-edge technology solutions tailored to their unique needs. Here's why clients trust us:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-800">
            <li>Expert team with deep domain knowledge</li>
            <li>Custom-built software solutions</li>
            <li>24x7 technical support and maintenance</li>
            <li>Transparent process & timely delivery</li>
            <li>Scalable and secure architecture</li>
          </ul>
        </div>
      </div>
    </section>
    
    
    </>
  )
}

export default whychoose