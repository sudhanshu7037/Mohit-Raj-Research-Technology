import React from 'react'
import Logo3 from "../../assets/SoftwareDevelopment.png";

const SoftwareDevelopment = () => {
  return (
    <>
    
    <div>

      <img src={Logo3} alt="" className="w-full h-64 object-cover" />
    </div>
    <div className="max-w-6xl mx-auto p-6 md:p-10 bg-white rounded-lg shadow-md mt-8">
      <h1 className="text-3xl font-bold mb-4">Software Development Services</h1>
      <p className="text-gray-700 mb-6">
        We offer comprehensive software development services tailored to your business needs. Our team of experts specializes in creating custom software solutions that drive efficiency and innovation.
      </p>
      
      <h2 className="text-2xl font-semibold mb-4">Our Services Include:</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>ERP Solutions</li>
        <li>Web Application Development</li>
        <li>Mobile App Development</li>
        <li>Software Testing</li>
        <li>Software  Maintenance & Support</li>
        <li>Migration & Re-engineering</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Why Choose Us?</h2>
      <p className="text-gray-700 mb-4">
        Our commitment to quality, customer satisfaction, and innovative solutions sets us apart. We work closely with our clients to understand their unique requirements and deliver solutions that exceed expectations.
      </p>

      <button className="bg-yellow-400 text-white px-6 py-3 rounded-md font-semibold hover:bg-yellow-500 transition">
        Contact Us for a Consultation
      </button>
      <p>Sudhanshu Tomar</p>
      <h1>kajal yadav</h1>

    </div>
    </>

  )
}

export default SoftwareDevelopment;