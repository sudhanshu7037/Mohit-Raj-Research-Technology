import React, { useState } from "react";
import image1 from "../assets/homepageimages/careerpageimages/careerbanner.jpg";

const Career = () => {
 /* ───────────── STATE ───────────── */
  const [showModal, setShowModal] = useState(false); // modal open / close
  const [showForm, setShowForm] = useState(false);   // description ↔ form

  /* ───────────── HELPERS ──────────── */
  const openModal = () => {
    setShowModal(true);
    setShowForm(false);        // start with description
  };

  const closeModal = () => {
    setShowModal(false);
    setShowForm(false);        // reset view
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 🔗 Hook this to backend / email / API here
    alert("Application submitted successfully! 🚀");
    closeModal();
  };
  return (
    <>
      <section className="relative h-screen w-full flex items-start justify-start bg-black text-white pt-28">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={image1}
            className="w-full h-full object-cover brightness-50"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 pl-10 md:pl-20 max-w-2xl w-full">
          <p className="text-sm tracking-widest uppercase text-white/70 mb-4 ml-10 mt-10">
            Career
          </p>

          {/* Horizontal Line */}
          <div className="w-[90%] ml-10 border-t border-white/40 mb-6"></div>

          <h1 className="text-5xl md:text-6xl font-light leading-tight ml-10 font-houschka">
            Latest <span className="font-normal text-blue-900">Jobs</span>
          </h1>
        </div>
      </section>
      
      
      <section className="py-16 bg-gray-50 text-gray-800">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Why Join Mohitraj Research Technology?</h2>
        <p className="text-lg max-w-3xl mx-auto">
          At Mohitraj Research Technology, we’re not just building solutions—we’re shaping the future of innovation. With a mission to foster
          technical excellence, creativity, and purpose-driven impact, we offer a growth-driven culture for aspiring professionals who want to
          contribute to real-world transformation.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Box 1 */}
        <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-teal-500">
          <h3 className="text-xl font-semibold text-teal-600 mb-3">
            Innovation-Driven Culture
          </h3>
          <p className="text-gray-700">
            Our environment encourages experimentation, ideation, and building cutting-edge digital products. Whether it's AI, automation, or smart infrastructure,
            we empower teams to drive innovation from the ground up.
          </p>
        </div>

        {/* Box 2 */}
        <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-blue-500">
          <h3 className="text-xl font-semibold text-blue-600 mb-3">
            Career Acceleration
          </h3>
          <p className="text-gray-700">
            We prioritize internal growth, mentoring, and upskilling. With access to real-time projects, advanced R&D, and strategic problem-solving,
            team members accelerate their professional journey faster than ever.
          </p>
        </div>

        {/* Box 3 */}
        <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-purple-500">
          <h3 className="text-xl font-semibold text-purple-600 mb-3">
            Purposeful Work Environment
          </h3>
          <p className="text-gray-700">
            At Mohitraj, your work matters. You’ll collaborate with passionate minds to build solutions that impact industries like education,
            healthcare, and public services—while enjoying a supportive and balanced work culture.
          </p>
        </div>
      </div>
    </section>
   <section className="bg-white py-12 px-4 md:px-12">
      {/* ── Title ── */}
      <h2 className="text-3xl font-bold text-center mb-10 text-blue-900">Join Our Team</h2>

      {/* ── Filters (static for now) ── */}
      <div className="flex flex-col md:flex-row justify-center gap-4 mb-10">
        <select className="border rounded px-4 py-2">
          <option>All Categories</option>
          <option>Content</option>
        </select>
        <select className="border rounded px-4 py-2">
          <option>All Locations</option>
          <option>Noida</option>
        </select>
        <select className="border rounded px-4 py-2">
          <option>All Job Types</option>
          <option>Full Time</option>
        </select>
      </div>

      {/* ── Job Card ── */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        {/* Category icon + heading */}
        <div className="flex items-center gap-4 mb-4">
          <img
            src="https://img.icons8.com/color/96/content.png"
            alt="Content Icon"
            className="w-12 h-12"
          />
          <h3 className="text-xl font-semibold">Content</h3>
        </div>

        {/* Job line */}
        <div className="bg-white p-4 rounded shadow flex flex-col md:flex-row items-center justify-between">
          {/* Title + meta */}
          <div className="flex flex-col md:flex-row items-center gap-6">
            <a href="#" className="text-blue-600 font-semibold hover:underline">
              Content Writer
            </a>

            {/* Spaced meta info */}
            <div className="grid grid-cols-3 text-center text-gray-800">
  <span>Junior</span>
  <span>Noida</span>
  <span>Full Time</span>
</div>

          </div>

          {/* Apply */}
          <button
            onClick={openModal}
            className="mt-4 md:mt-0 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            Apply
          </button>
        </div>
      </div>

      {/* ────────────────── MODAL ────────────────── */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/40 px-4 py-10 overflow-y-auto">
          <div className="bg-white max-w-2xl w-full p-6 rounded-xl shadow-lg relative">
            {/* Close (×) */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-2xl font-bold text-gray-600 hover:text-red-500"
            >
              &times;
            </button>

            {/* Header */}
            <h3 className="text-2xl font-bold text-blue-600 mb-1 text-center">
              Content Writer
            </h3>
            <p className="text-sm text-gray-500 mb-6 text-center">Content</p>

            {/* Scrollable body */}
            <div className="space-y-6 text-gray-800 max-h-[70vh] overflow-y-auto pr-2">
              {/* ───────── ① JOB DESCRIPTION ───────── */}
              {!showForm && (
                <>
                  <section>
                    <h4 className="font-semibold text-lg">
                      About Mohitraj Research Technology
                    </h4>
                    <p>
                      At Mohitraj, we are committed to building powerful
                      technology that solves real‑world problems. By creating
                      accessible, data‑driven solutions, we help institutions
                      and enterprises transform how they work, learn, and grow.
                    </p>
                  </section>

                  <section>
                    <h4 className="font-semibold text-lg">About the Role</h4>
                    <p>
                      We are looking for Content Writers who can create
                      compelling technical and non‑technical content for
                      websites, blogs, and marketing. You will work closely
                      with tech teams, researchers, and product owners to
                      translate ideas into powerful written assets.
                    </p>
                  </section>

                  <section>
                    <h4 className="font-semibold text-lg">What You Will Do</h4>
                    <ul className="list-disc ml-5 space-y-1">
                      <li>
                        Develop and execute content plans across digital
                        platforms
                      </li>
                      <li>
                        Align content strategy with product, marketing, and
                        growth goals
                      </li>
                      <li>Analyze performance and optimize accordingly</li>
                      <li>Maintain brand voice and content quality</li>
                    </ul>
                  </section>

                  <section>
                    <h4 className="font-semibold text-lg">What You Will Need</h4>
                    <ul className="list-disc ml-5 space-y-1">
                      <li>0–2 years of experience</li>
                      <li>Excellent English writing skills</li>
                      <li>SEO and content marketing knowledge</li>
                      <li>Ability to work under deadlines</li>
                    </ul>
                  </section>

                  <section>
                    <h4 className="font-semibold text-lg">What You Will Get</h4>
                    <ul className="list-disc ml-5 space-y-1">
                      <li>Ownership of impactful projects</li>
                      <li>Growth and mentorship opportunities</li>
                      <li>
                        Collaborate with a talented, young &amp; enthusiastic
                        team
                      </li>
                      <li>Freedom to experiment and learn fast</li>
                    </ul>
                  </section>

                  {/* Apply Now button */}
                  <div className="pt-6 flex justify-center">
                    <button
                      className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded transition"
                      onClick={() => setShowForm(true)}
                    >
                      Apply Now
                    </button>
                  </div>
                </>
              )}

              {/* ───────── ② APPLICATION FORM ───────── */}
         {/* ───────── FORM VIEW ───────── */}
{showForm && (
  <>
    <h3 className="text-xl font-bold text-center mb-6">
      Apply for the role
    </h3>

    <form
      onSubmit={handleSubmit}
      className="space-y-5 bg-gray-50 p-6 rounded-lg"
    >
      {/* Resume */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <label className="w-40 font-medium text-gray-700">Resume</label>
        <input
          type="file"
          required
          className="flex-1 border border-gray-300 px-4 py-2 rounded-md text-gray-600 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
        />
      </div>

      {/* Name */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <label className="w-40 font-medium text-gray-700">Name</label>
        <input
          type="text"
          required
          className="flex-1 border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Email */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <label className="w-40 font-medium text-gray-700">E-mail address</label>
        <input
          type="email"
          required
          className="flex-1 border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Phone */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <label className="w-40 font-medium text-gray-700">Phone number</label>
        <input
          type="tel"
          required
          className="flex-1 border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Current Location */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <label className="w-40 font-medium text-gray-700">Current Location</label>
        <input
          type="text"
          required
          className="flex-1 border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Submit Button */}
      <div className="pt-6 text-center">
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-md transition"
        >
          Submit Application
        </button>
      </div>
    </form>
  </>
)}

            </div>
          </div>
        </div>
      )}
    </section>
    </>
  );
};

export default Career;
