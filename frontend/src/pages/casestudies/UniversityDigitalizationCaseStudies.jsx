import React from 'react'

const UniversityDigitalizationCaseStudies = () => {
  return (
   <div className="flex flex-col">

      {/* HERO SECTION */}
      <section className="bg-gray-100 py-12 px-4 md:px-10">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-blue-900 mb-4">Project Title</h1>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base text-gray-600">
            <span>Industry: Technology</span>
            <span>| Year: 2025</span>
            <span>| Client: ABC Corp</span>
          </div>
          <div className="mt-8">
            <img
              src="/path-to-banner-image.jpg"
              alt="Project Banner"
              className="w-full max-h-[400px] object-cover rounded"
            />
          </div>
        </div>
      </section>

      {/* OVERVIEW SECTION */}
      <section className="py-12 px-4 md:px-10 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Overview</h2>
          <p className="text-gray-700 mb-4">
            A brief summary of the project goes here. It should explain what the project was about and what goals were achieved.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Increased lead conversion by 35%</li>
            <li>Reduced page load time by 60%</li>
            <li>Improved customer engagement metrics</li>
          </ul>
        </div>
      </section>

      {/* CHALLENGE SECTION */}
      <section className="py-12 px-4 md:px-10 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">The Challenge</h2>
          <p className="text-gray-700">
            Explain the problem the client was facing and what their objectives or constraints were.
          </p>
        </div>
      </section>

      {/* SOLUTION SECTION */}
      <section className="py-12 px-4 md:px-10 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">The Solution</h2>
          <p className="text-gray-700 mb-2">
            Describe the solution you implemented and how you approached the problem.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Developed a custom dashboard using React</li>
            <li>Used Node.js & MongoDB for backend</li>
            <li>Deployed on AWS with CI/CD pipeline</li>
          </ul>
        </div>
      </section>

      {/* RESULT SECTION */}
      <section className="py-12 px-4 md:px-10 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">The Result</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Conversion rate improved by 40%</li>
            <li>Customer retention increased by 25%</li>
            <li>Client praised our communication and delivery</li>
          </ul>
        </div>
      </section>

      {/* IMAGE / VIDEO GALLERY */}
      <section className="py-12 px-4 md:px-10 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4 text-center">Project Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <img src="/path-to-image1.jpg" alt="Gallery 1" className="w-full h-48 object-cover rounded" />
            <img src="/path-to-image2.jpg" alt="Gallery 2" className="w-full h-48 object-cover rounded" />
            <img src="/path-to-image3.jpg" alt="Gallery 3" className="w-full h-48 object-cover rounded" />
          </div>
        </div>
      </section>

      {/* RELATED CASE STUDIES */}
      <section className="py-12 px-4 md:px-10 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold text-blue-800 mb-6 text-center">Related Case Studies</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="border rounded shadow hover:shadow-lg transition p-4 bg-white">
                <img src={`/path-to-related-${i + 1}.jpg`} alt={`Related ${i + 1}`} className="w-full h-40 object-cover rounded" />
                <h3 className="text-lg font-bold mt-2 text-blue-900">Project Title {i + 1}</h3>
                <p className="text-sm text-gray-600">Short description of the related case study.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-blue-900 text-white py-12 px-4 md:px-10 text-center">
        <h2 className="text-3xl font-bold">Want similar success?</h2>
        <p className="mt-2 mb-6 text-lg">Let's talk about how we can help your business grow.</p>
        <a href="/contact" className="bg-white text-blue-900 px-6 py-3 rounded font-semibold hover:bg-gray-100 inline-block">
          Contact Us
        </a>
      </section>

    </div>
  )
}

export default UniversityDigitalizationCaseStudies