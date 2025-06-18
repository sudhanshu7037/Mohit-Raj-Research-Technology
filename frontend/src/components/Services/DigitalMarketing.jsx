import React from 'react';
import DigitalMarketingimg from "../../assets/DigitalMarketingimg.png";
const DigitalMarketing = () => {
     return (
    <>
{/* === Hero Section: Digital Marketing === */}
<section className="relative bg-black text-white font-sans min-h-screen flex items-center justify-center">
  <div
    className="absolute inset-0 bg-cover bg-center opacity-20"
    style={{ backgroundImage: `url(${DigitalMarketingimg })` }}
  ></div>

  <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6">
      DIGITAL MARKETING SERVICES
    </h1>
    <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed mb-6 sm:mb-8">
      Amplify your brand visibility, engage your target audience, and achieve measurable results
      with our result-driven digital marketing strategies including SEO, PPC, Social Media, and more.
    </p>
    <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
      <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 sm:px-6 sm:py-3 rounded-md text-sm sm:text-base md:text-lg font-medium transition">
        GET STARTED
      </button>
      <button className="bg-transparent border border-white hover:bg-white hover:text-black px-4 py-2 sm:px-6 sm:py-3 rounded-md text-sm sm:text-base md:text-lg font-medium transition">
        EXPLORE SERVICES
      </button>
    </div>
  </div>
</section>

{/* === Second Section: About + Stats for Digital Marketing === */}
<section className="py-10 sm:py-14 md:py-16 px-4 sm:px-6 bg-white text-gray-800">
  <div className="max-w-6xl mx-auto text-center mb-8 sm:mb-10 md:mb-14">
    <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed font-medium text-gray-700">
      With a decade of digital expertise, we empower brands with data-driven strategies, innovative content, and high-converting campaigns. From SEO to social media, we’ve helped 100s of clients scale their online presence and revenue through tailored marketing solutions.
    </p>
  </div>

  <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
    <div className="bg-gradient-to-b from-purple-50 to-white rounded-lg py-6 px-4 shadow hover:shadow-md transition">
      <p className="text-3xl sm:text-4xl font-extrabold text-purple-700">1200+</p>
      <p className="mt-2 text-sm sm:text-base font-medium text-gray-600">Campaigns Delivered</p>
    </div>
    <div className="bg-gradient-to-b from-blue-50 to-white rounded-lg py-6 px-4 shadow hover:shadow-md transition">
      <p className="text-3xl sm:text-4xl font-extrabold text-purple-700">10+</p>
      <p className="mt-2 text-sm sm:text-base font-medium text-gray-600">Years in Digital Marketing</p>
    </div>
    <div className="bg-gradient-to-b from-pink-50 to-white rounded-lg py-6 px-4 shadow hover:shadow-md transition">
      <p className="text-3xl sm:text-4xl font-extrabold text-purple-700">950+</p>
      <p className="mt-2 text-sm sm:text-base font-medium text-gray-600">Clients Served Globally</p>
    </div>
    <div className="bg-gradient-to-b from-yellow-50 to-white rounded-lg py-6 px-4 shadow hover:shadow-md transition">
      <p className="text-3xl sm:text-4xl font-extrabold text-purple-700">40</p>
      <p className="mt-2 text-sm sm:text-base font-medium text-gray-600">Industries Covered</p>
    </div>
  </div>
</section>

{/* === Third Section: Digital Marketing Services === */}
<div className="bg-gradient-to-b from-white to-blue-50 py-16 px-4 lg:px-24 text-center">
  {/* Title */}
  <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4 font-houschka animate-fade-in-down">
    Our Digital Marketing Services
  </h2>
  <p className="text-gray-600 max-w-3xl mx-auto mb-12 text-base md:text-lg leading-relaxed font-basis animate-fade-in">
    Boost your business visibility and engagement through tailored digital marketing strategies. We drive results across search, social, email, and beyond.
  </p>

  {/* Cards */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
    
    {/* Card 1 - SEO */}
    <div className="bg-white rounded-xl shadow-lg p-6 text-left transition hover:scale-105 hover:shadow-2xl border border-gray-100 hover:border-blue-500">
      <img src="https://cdn-icons-png.flaticon.com/512/2198/2198161.png" alt="SEO Optimization" className="w-12 h-12 mb-4" />
      <h3 className="text-xl font-semibold text-blue-900 mb-2">SEO Optimization</h3>
      <p className="text-gray-600 text-sm mb-3">Rank higher on search engines and get organic traffic with advanced SEO techniques.</p>
      <ul className="list-disc pl-5 text-sm text-blue-800 space-y-1">
        <li>On-Page & Off-Page SEO</li>
        <li>Site Audit</li>
        <li>Local SEO</li>
      </ul>
    </div>

    {/* Card 2 - Social Media */}
    <div className="bg-white rounded-xl shadow-lg p-6 text-left transition hover:scale-105 hover:shadow-2xl border border-gray-100 hover:border-blue-500">
      <img src="https://cdn-icons-png.flaticon.com/512/2334/2334378.png" alt="Social Media" className="w-12 h-12 mb-4" />
      <h3 className="text-xl font-semibold text-blue-900 mb-2">Social Media Marketing</h3>
      <p className="text-gray-600 text-sm mb-3">Engage users through powerful content across Facebook, Instagram, LinkedIn, and more.</p>
      <ul className="list-disc pl-5 text-sm text-blue-800 space-y-1">
        <li>Post Design & Strategy</li>
        <li>Ad Campaigns</li>
        <li>Influencer Outreach</li>
      </ul>
    </div>

    {/* Card 3 - Email Marketing */}
    <div className="bg-white rounded-xl shadow-lg p-6 text-left transition hover:scale-105 hover:shadow-2xl border border-gray-100 hover:border-blue-500">
      <img src="https://cdn-icons-png.flaticon.com/512/5525/5525772.png" alt="Email Campaign" className="w-12 h-12 mb-4" />
      <h3 className="text-xl font-semibold text-blue-900 mb-2">Email Campaigns</h3>
      <p className="text-gray-600 text-sm mb-3">Stay in touch with leads using targeted and automated email campaigns.</p>
      <ul className="list-disc pl-5 text-sm text-blue-800 space-y-1">
        <li>Drip Campaigns</li>
        <li>Newsletters</li>
        <li>Conversion Tracking</li>
      </ul>
    </div>

    {/* Card 4 - PPC Advertising */}
    <div className="bg-white rounded-xl shadow-lg p-6 text-left transition hover:scale-105 hover:shadow-2xl border border-gray-100 hover:border-blue-500">
      <img src="https://cdn-icons-png.flaticon.com/512/1177/1177568.png" alt="PPC" className="w-12 h-12 mb-4" />
      <h3 className="text-xl font-semibold text-blue-900 mb-2">PPC Advertising</h3>
      <p className="text-gray-600 text-sm mb-3">Maximize ROI with pay-per-click campaigns across Google Ads and social platforms.</p>
      <ul className="list-disc pl-5 text-sm text-blue-800 space-y-1">
        <li>Keyword Bidding</li>
        <li>Ad Copy & A/B Testing</li>
        <li>Google & Meta Ads</li>
      </ul>
    </div>

    {/* Card 5 - Content Marketing */}
    <div className="bg-white rounded-xl shadow-lg p-6 text-left transition hover:scale-105 hover:shadow-2xl border border-gray-100 hover:border-blue-500">
      <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Content Marketing" className="w-12 h-12 mb-4" />
      <h3 className="text-xl font-semibold text-blue-900 mb-2">Content Marketing</h3>
      <p className="text-gray-600 text-sm mb-3">Attract and convert with blogs, videos, and storytelling tailored to your audience.</p>
      <ul className="list-disc pl-5 text-sm text-blue-800 space-y-1">
        <li>Blog & Article Writing</li>
        <li>Video Production</li>
        <li>Infographics</li>
      </ul>
    </div>

    {/* Card 6 - Analytics & Reporting */}
    <div className="bg-white rounded-xl shadow-lg p-6 text-left transition hover:scale-105 hover:shadow-2xl border border-gray-100 hover:border-blue-500">
      <img src="https://cdn-icons-png.flaticon.com/512/4285/4285807.png" alt="Analytics" className="w-12 h-12 mb-4" />
      <h3 className="text-xl font-semibold text-blue-900 mb-2">Analytics & Reporting</h3>
      <p className="text-gray-600 text-sm mb-3">Track campaign performance and user behavior to make data-driven decisions.</p>
      <ul className="list-disc pl-5 text-sm text-blue-800 space-y-1">
        <li>Google Analytics Setup</li>
        <li>Monthly Reports</li>
        <li>Funnel Analysis</li>
      </ul>
    </div>

  </div>
</div>
 
 <div className="group relative bg-gradient-to-tr from-white via-blue-50 to-orange-100 py-14 px-6 sm:px-10 md:px-20 rounded-2xl shadow-xl overflow-hidden transition-all duration-300 
    hover:from-blue-100 hover:to-orange-200 hover:bg-opacity-80 hover:cursor-pointer">

      {/* Glassy Box */}
      <div className="backdrop-blur-xl bg-white/70 border border-white/30 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row justify-between items-center gap-8 
      hover:shadow-2xl transition-all duration-500">

        {/* Text Content */}
        <div className="max-w-2xl text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 group-hover:text-orange-600 leading-tight tracking-tight transition duration-300">
            Boost Your Brand With Strategic Digital Marketing
          </h2>
          <p className="mt-4 text-gray-700 group-hover:text-blue-800 text-base sm:text-lg transition duration-300">
            Unlock growth, visibility, and engagement through powerful campaigns, data-driven SEO, and content strategy tailored for you.
          </p>
        </div>

        {/* CTA Button */}
        <div className="relative group/contact">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold text-base flex items-center gap-3 transition-all duration-300 transform group-hover:scale-105 shadow-md">
            Contact Us
            <svg
              className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
          {/* Ping Animation Circle */}
          <div className="absolute -top-4 -right-4 w-10 h-10 bg-orange-300 blur-2xl opacity-40 rounded-full animate-ping"></div>
        </div>
      </div>

      {/* Floating Decorative Blobs */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-blue-100 opacity-30 rounded-full blur-2xl animate-float"></div>
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-orange-200 opacity-30 rounded-full blur-2xl animate-float2"></div>
    </div>



    </>
        
    
  );
};
export default DigitalMarketing;
