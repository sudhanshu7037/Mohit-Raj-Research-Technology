import React from 'react'

const CostumApplication = () => {
  return (
    <>
    <div>CostumApplication</div>

    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-center my-10">Custom Application Development</h1>
      <p className="text-lg text-center mx-4">
        At our company, we specialize in creating custom applications tailored to meet the unique needs of your business. Whether you require a web application, mobile app, or desktop software, our team of experienced developers is here to bring your vision to life.
      </p>
      <p className="text-lg text-center mx-4 mt-4">
        We understand that every business is different, which is why we take the time to understand your requirements and develop solutions that are not only functional but also user-friendly and scalable. From initial concept to final deployment, we work closely with you to ensure that the end product exceeds your expectations.
      </p>

      <ul className="list-disc list-inside mx-4">
        <li>Custom Web Application Development</li>
        <li>Mobile App Development (iOS & Android)</li>
        <li>Desktop Software Development</li>
        <li>API Development and Integration</li>
        <li>Cloud-Based Application Development</li>
      </ul>
    </div>
    
    </>
  )
}

export default CostumApplication