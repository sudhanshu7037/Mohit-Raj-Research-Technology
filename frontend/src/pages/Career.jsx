// Career.jsx
import React, { useState } from 'react';
import Logo from "../assets/career-image.jpg";

const Career = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const jobs = [
    {
      id: 1,
      title: 'Frontend Developer',
      location: 'Remote / Bangalore',
      description:
        'Build and maintain user-friendly web applications using React and Tailwind CSS.',
    },
    {
      id: 2,
      title: 'Backend Engineer',
      location: 'Remote / Mumbai',
      description:
        'Design and implement scalable backend services and APIs using Node.js and related technologies.',
    },
    {
      id: 3,
      title: 'Data Scientist',
      location: 'Remote / Hyderabad',
      description:
        'Analyze and visualize complex datasets to drive data-driven decisions and machine learning models.',
    },
    {
      id: 4,
      title: 'DevOps Engineer',
      location: 'Remote / Pune',
      description:
        'Automate infrastructure, CI/CD pipelines and monitor cloud deployments for performance and availability.',
    },
  ];

  return (
    <>
      {/* Banner */}
      <div>
        <img src={Logo} alt="Logo" className="w-full h-[30vh] md:h-[50vh] object-cover" />
      </div>

      {/* Intro Section */}
      <main className="bg-white min-h-screen px-6 mt-14">
        <section className="max-w-[1200px] mx-auto pt-16 pb-20 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-900 max-w-4xl mx-auto font-houschka">
            Careers at MohitRaj Research and Technology Private Limited
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-600">
            Join our innovative team and help shape the future with cutting-edge
            research and technology.
          </p>
          <a
            href="#openings"
            className="inline-block mt-10 px-8 py-4 bg-black text-white rounded-lg font-semibold text-lg transition-transform duration-300 hover:scale-105"
          >
            View Open Positions
          </a>
          <h1 className='mt-8 text-xl font-semibold font-houschka'>Why join Mohitraj</h1>

          
          <p> Rated amongst the fastest-growing companies, Chetu is built on a strong vision and corporate philosophy of continuous adaptation, client service, and professional growth. With one of the lowest attrition rates in the industry, Chetu’s investment in its team members provides an ideal working environment that fosters opportunities to innovate, learn, and excel. Our Chetu Family is always growing, and we look forward to welcoming new members who are looking to expand their potential and place their careers on a path to success.

</p>


        </section>

        {/* Job Openings */}
        <section
          id="openings"
          className="max-w-[1200px] mx-auto grid gap-10 pb-20"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}
        >
          {jobs.map((job) => (
            <article
              key={job.id}
              className="bg-white rounded-xl shadow-md p-8 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300"
              tabIndex="0"
            >
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{job.title}</h2>
                <p className="mt-1 text-sm font-medium text-gray-500">{job.location}</p>
                <p className="mt-4 text-gray-700">{job.description}</p>
              </div>
              <button
                onClick={() => {
                  setSelectedJob(job);
                  setShowModal(true);
                }}
                className="mt-8 inline-block px-6 py-3 bg-black text-white rounded-md font-semibold text-center hover:bg-gray-900 transition-colors duration-300"
              >
                Apply Now
              </button>
            </article>
          ))}
        </section>
      </main>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-4 text-black text-2xl"
            >
              &times;
            </button>
            <div className="text-center">
              <h2 className="text-3xl font-bold text-cyan-700">MohitRaj</h2>
              <p className="text-sm font-semibold text-gray-800 -mt-1 mb-4">
                World-Class Software Solutions
              </p>
              <h3 className="text-lg font-bold text-gray-700">
                Thanks for your interest in <span className="text-cyan-700">MohitRaj</span>!
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                Please enter your preferred contact information to access the application
              </p>

              <form className="mt-4 space-y-4 text-left">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    First Name: <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full border border-cyan-600 rounded-md p-2 focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Last Name: <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full border border-cyan-600 rounded-md p-2 focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email Address: <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    className="w-full border border-cyan-600 rounded-md p-2 focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Resume: <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="file"
                    className="w-full border border-cyan-600 rounded-md p-2 focus:outline-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-cyan-700 text-white py-2 rounded-md mt-4 font-semibold hover:bg-cyan-800"
                >
                  Continue
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Career;