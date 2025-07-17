import React from 'react';
import DigitalMarketingimg from "../../assets/digitalmarketingbanner.png";
import { FaCheckCircle } from "react-icons/fa";
import bgImage from "../../assets/background.png";
import { FaBullhorn, FaSearch, FaMailBulk, FaChartLine } from "react-icons/fa";
import { FaLightbulb,FaShieldAlt, FaCogs,FaRocket ,FaUsers,FaMobileAlt } from "react-icons/fa";
import DevImage from "../../assets/digitalmarket2.png";

const techStack = [
  {
    label: "Marketing Tools",
    icon: <FaBullhorn className="text-orange-500 w-6 h-6" />,
    items: ["Google Ads", "Meta Ads", "LinkedIn Ads", "HubSpot", "SEMRush"],
  },
  {
    label: "SEO Tools",
    icon: <FaSearch className="text-green-500 w-6 h-6" />,
    items: ["Ahrefs", "Ubersuggest", "Google Search Console", "Moz"],
  },
  {
    label: "Email Marketing",
    icon: <FaMailBulk className="text-purple-500 w-6 h-6" />,
    items: ["Mailchimp", "ConvertKit", "MailerLite", "ActiveCampaign"],
  },
];

const services = [
  {
    title: "Customized SEO Strategy",
    description:
      "Our experts create personalized Search Engine Optimization (SEO) plans that suit your business needs. Our SEO specialists concentrate on keyword research, on-page SEO, link creation, and technical SEO to improve search rankings and organic traffic.",
  },
  {
    title: "Performance-Driven Social Media Marketing",
    description:
      "Our social media professionals create customized campaigns across platforms such as Facebook, Instagram, LinkedIn, and X (Twitter) to enhance brand visibility, user engagement, and lead conversion.",
  },
  {
    title: "Industry-Specific Content Marketing Solutions",
    description:
      "We create specialized, search-engine-optimized content through blogs, videos, and graphics that appeal to your audience and establish long-term brand influence in your field.",
  },
  {
    title: "Conversion-Oriented PPC Campaign Management",
    description:
      "We provide tailor-made Pay-Per-Click (PPC) advertising solutions on Google Ads, Bing Ads, and social networks. Our PPC professionals ensure each click is maximized, with increased ROI and minimized wastage of advertisement expenses.",
  },
  {
    title: "Email Campaign Automation",
    description:
      "Nurture leads with automated, personalized email campaigns that drive conversions.",
  },
  {
    title: "Analytics & Reporting",
    description:
      "Track KPIs, traffic, and ROI with in-depth custom dashboards and performance reviews.",
  },
];

const steps = [
  {
    icon: <FaLightbulb className="text-yellow-500 text-2xl" />,
    title: "Idea & Goal Identification",
    description: "Understand your marketing objectives and audience insights to build a clear strategy.",
  },
  {
    icon: <FaCogs className="text-purple-500 text-2xl" />,
    title: "Plan Custom Campaigns",
    description: "Design personalized campaigns tailored for each platform using latest marketing tools.",
  },
  {
    icon: <FaChartLine className="text-blue-500 text-2xl" />,
    title: "Optimize & Execute",
    description: "Run ads, track SEO, optimize content, and ensure multi-channel reach and consistency.",
  },
  {
    icon: <FaBullhorn className="text-pink-500 text-2xl" />,
    title: "Measure & Improve",
    description: "Monitor performance using analytics and refine strategies for better ROI.",
  },
];

const industries = [
  "E-commerce & Retail Branding",
  "Healthcare & Pharma SEO",
  "Finance & Banking Campaigns",
  "Education & eLearning Ads",
  "Real Estate Promotions",
  "Travel & Tourism Outreach",
  "Entertainment & Media Engagement",
  "Technology & SaaS Marketing",
];

const features = [
  {
    icon: <FaShieldAlt className="text-blue-600 text-3xl" />,
    title: "Data-Driven Decisions",
    description: "Leverage powerful analytics to make smarter marketing moves and boost conversions.",
  },
  {
    icon: <FaRocket className="text-pink-500 text-3xl" />,
    title: "Accelerated Growth",
    description: "Implement agile and scalable marketing tactics for fast business growth.",
  },
  {
    icon: <FaUsers className="text-purple-500 text-3xl" />,
    title: "Customer-Centric Focus",
    description: "We build campaigns tailored to attract and retain your ideal audience.",
  },
  {
    icon: <FaMobileAlt className="text-yellow-500 text-3xl" />,
    title: "Omnichannel Presence",
    description: "Get visibility across devices and platforms for a cohesive brand experience.",
  },
];

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
    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 font-houschka">
      DIGITAL MARKETING SERVICES
    </h1>
    <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed mb-6 sm:mb-8">
      All-Inclusive Digital Marketing Solutions Provided by Mohitraj Research and Technology Pvt. Ltd. 

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
      Here at Mohitraj Research and Technology Private Limited, our full range of offerings in digital marketing will enable your business to succeed in the ever-changing online world. With a focus on improving brand recognition, enhancing customer relations, and achieving tangible growth through creative data driven approaches, our services will deliver business results. 
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
  <p className="text-gray-600 max-w-3xl mx-auto mb-12 text-base md:text-lg leading-relaxed font-basis animate-fade-in font-houschka">
    As Our Clients You Will Enjoy The Following Key Services 

  </p>

  {/* Cards */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
    
    {/* Card 1 - SEO */}
    <div className="bg-white rounded-xl shadow-lg p-6 text-left transition hover:scale-105 hover:shadow-2xl border border-gray-100 hover:border-blue-500">
      <img src="https://cdn-icons-png.flaticon.com/512/2198/2198161.png" alt="SEO Optimization" className="w-12 h-12 mb-4" />
      <h3 className="text-xl font-semibold text-blue-900 mb-2">SEO Optimization</h3>
      <p className="text-gray-600 text-sm mb-3">Achieve heightened brand prominence on all major search engines by utilizing our SEO services. We improve your website's structure, content, and backlinks to enhance organic visibility and to ensure that you receive quality traffic. </p>
      <ul className="list-disc pl-5 text-sm text-blue-800 space-y-1">
        <li>On-Page & Off-Page SEO</li>
        <li>Site Audit</li>
        <li>Local SEO</li>
      </ul>
    </div>

    {/* Card 2 - Social Media */}
    <div className="bg-white rounded-xl shadow-lg p-6 text-left transition hover:scale-105 hover:shadow-2xl border border-gray-100 hover:border-blue-500">
      <img src="https://cdn-icons-png.flaticon.com/512/2334/2334378.png" alt="Social Media" className="w-12 h-12 mb-4" />
      <h3 className="text-xl font-semibold text-blue-900 mb-2"> Pay-Per-Click Advertising (PPC)</h3>
      <p className="text-gray-600 text-sm mb-3">Enjoy increased return on investment as a result of our PPC advertising services on Google Ads and other social media platforms. We design and manage cutting edge advertisement campaigns that are capable of delivering instant results.</p>
      <ul className="list-disc pl-5 text-sm text-blue-800 space-y-1">
        <li>Post Design & Strategy</li>
        <li>Ad Campaigns</li>
        <li>Influencer Outreach</li>
      </ul>
    </div>

    {/* Card 3 - Email Marketing */}
    <div className="bg-white rounded-xl shadow-lg p-6 text-left transition hover:scale-105 hover:shadow-2xl border border-gray-100 hover:border-blue-500">
      <img src="https://cdn-icons-png.flaticon.com/512/5525/5525772.png" alt="Email Campaign" className="w-12 h-12 mb-4" />
      <h3 className="text-xl font-semibold text-blue-900 mb-2">Influencer Marketing</h3>
      <p className="text-gray-600 text-sm mb-3">Leverage niche influencers to promote and convey your brand message. We offer influencer marketing services to get you in touch with reputable names in your field.</p>
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
      <h3 className="text-xl font-semibold text-blue-900 mb-2">Email-Marketing  </h3>
      <p className="text-gray-600 text-sm mb-3">Connect with your customers through direct and personalized automated email marketing. We offer full service from drafting an email to performance evaluation.</p>
      <ul className="list-disc pl-5 text-sm text-blue-800 space-y-1">
        <li>Blog & Article Writing</li>
        <li>Video Production</li>
        <li>Infographics</li>
      </ul>
    </div>

    {/* Card 6 - Analytics & Reporting */}
    <div className="bg-white rounded-xl shadow-lg p-6 text-left transition hover:scale-105 hover:shadow-2xl border border-gray-100 hover:border-blue-500">
      <img src="https://cdn-icons-png.flaticon.com/512/4285/4285807.png" alt="Analytics" className="w-12 h-12 mb-4" />
      <h3 className="text-xl font-semibold text-blue-900 mb-2">Content Marketing</h3>
      <p className="text-gray-600 text-sm mb-3">Increase trust and authority with your audience through useful, SEO-compliant content. Our marketing content team develops blogs, articles, and even infographics and web copies customized for your audience.</p>
      <ul className="list-disc pl-5 text-sm text-blue-800 space-y-1">
        <li>Google Analytics Setup</li>
        <li>Monthly Reports</li>
        <li>Funnel Analysis</li>
      </ul>
    </div>

  </div>
</div>
 {/*new section*/}
 <div className="group relative bg-gradient-to-tr from-white via-blue-50 to-orange-100 py-14 px-6 sm:px-10 md:px-20 rounded-2xl shadow-xl overflow-hidden transition-all duration-300 
    hover:from-blue-100 hover:to-orange-200 hover:bg-opacity-80 hover:cursor-pointer">

      {/* Glassy Box */}
      <div className="backdrop-blur-xl bg-white/70 border border-white/30 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row justify-between items-center gap-8 
      hover:shadow-2xl transition-all duration-500">

        {/* Text Content */}
        <div className="max-w-2xl text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 group-hover:text-orange-600 leading-tight tracking-tight transition duration-300 font-houschka">
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

      {/*new section*/}

      {/* Floating Decorative Blobs */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-blue-100 opacity-30 rounded-full blur-2xl animate-float"></div>
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-orange-200 opacity-30 rounded-full blur-2xl animate-float2"></div>
    </div>
   <div
      className="relative w-full py-20 px-4 sm:px-6 md:px-12 bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-blue-900/30 to-black/60 backdrop-blur-sm z-0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto text-white text-center mb-12">
        <h2 className="text-4xl sm:text-5xl font-bold font-houschka mb-4 tracking-tight font-houschka">
          Strategic Digital Marketing Services
        </h2>
        <p className="text-base sm:text-lg max-w-3xl mx-auto text-gray-300">
          At MRT, we specialize in transforming brands across industries with strategic campaigns and advanced performance tools.
        </p>
      </div>

      {/* Glass Box */}
      <div className="relative z-10 max-w-6xl mx-auto bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-8 sm:p-12 shadow-xl">
        <h3 className="text-xl sm:text-2xl text-white font-semibold mb-8 text-center font-houschka">
          Industries We Empower
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group p-4 sm:p-6 rounded-xl border border-white/20 bg-white/10 backdrop-blur-lg text-white shadow-md hover:shadow-lg transition-all duration-300 hover:bg-white/20 hover:scale-105 cursor-pointer"
            >
              <div className="flex items-start gap-3">
                <FaCheckCircle className="text-orange-400 mt-1 text-lg sm:text-xl group-hover:text-yellow-400 transition duration-300" />
                <span className="text-sm sm:text-base font-medium leading-snug text-blue-700 group-hover:text-white">
                  {industry}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Shapes */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-blue-400 rounded-full opacity-20 blur-2xl animate-pulse"></div>
      <div className="absolute bottom-12 right-16 w-32 h-32 bg-pink-400 rounded-full opacity-20 blur-2xl animate-ping"></div>
    </div>


    {/*new section of techstack*/}
    {/* === Tech Stack Section with Stylish Background === */}
<div className="relative w-full bg-gradient-to-br from-purple-50 via-white to-blue-100 py-20 px-4 overflow-hidden">

  {/* 🔵 Layered gradient blobs for background style */}
  <div className="absolute top-[-80px] left-[-80px] w-[300px] h-[300px] bg-purple-300 rounded-full opacity-20 blur-3xl mix-blend-multiply animate-spin-slow z-0"></div>
  <div className="absolute bottom-[-100px] right-[-60px] w-[260px] h-[260px] bg-pink-200 rounded-full opacity-20 blur-3xl mix-blend-multiply animate-pulse z-0"></div>
  <div className="absolute top-[40%] left-[40%] w-[200px] h-[200px] bg-blue-300 rounded-full opacity-20 blur-2xl mix-blend-multiply z-0"></div>

  {/* Content */}
  <div className="relative max-w-6xl mx-auto z-10">
    <div className="bg-white/80 backdrop-blur-lg border border-purple-200 shadow-2xl rounded-3xl p-10">
      <h2 className="text-4xl sm:text-5xl font-bold text-center text-purple-800 mb-12 font-houschka tracking-tight hover:text-red-600 hover:drop-shadow-md cursor-pointer transition duration-300">
  Our Digital Marketing Toolkit
</h2>


      <div className="space-y-12">
        {techStack.map((section, idx) => (
          <div
            key={idx}
            className="flex flex-col md:flex-row items-start md:items-center gap-6 bg-white border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300"
          >
            {/* Left Label */}
            <div className="flex items-center gap-3 bg-purple-100 px-5 py-3 rounded-xl shadow-inner border border-purple-300 min-w-[220px]">
              <div className="text-purple-700 text-2xl">{section.icon}</div>
              <span className="text-lg sm:text-xl font-semibold text-purple-900">
                {section.label}
              </span>
            </div>

            {/* Right Items */}
            <div className="flex flex-wrap gap-3">
              {section.items.map((item, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-purple-50 text-purple-800 rounded-full border border-purple-200 text-sm font-medium shadow-sm hover:bg-purple-600 hover:text-white hover:scale-105 transition duration-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>


      {/* === Services Section === */}
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h2 className="text-4xl font-bold text-blue-900 mb-4 font-houschka">
          What We Offer in Digital Marketing
        </h2>
        <p className="text-gray-600 max-w-4xl mx-auto mb-12 text-base sm:text-lg">
          MRT delivers result-driven digital marketing services that align with your business goals and amplify your brand presence.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {services.map((service, index) => (
            <div
              key={index}
              className="group border-t-4 border-blue-500 pt-6 px-5 pb-5 bg-white rounded-xl shadow-md hover:shadow-xl hover:bg-blue-50 transition duration-300"
            >
              <h3 className="text-xl font-semibold text-blue-900 mb-2 group-hover:text-orange-500 transition">
                {service.title}
              </h3>
              <p className="text-gray-700 text-sm group-hover:text-blue-800 transition">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/*new section for how to start project with MRT*/}
      <div className="max-w-7xl mx-auto px-4 py-16">
      
      
<h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-houschka bg-gradient-to-r from-red-500 via-green-900 to-pink-400 bg-clip-text text-transparent animate-pulse drop-shadow-lg">
  How to Start Your Digital Marketing Project With MRT?
</h2>



      <div className="flex flex-col md:flex-row items-stretch gap-12">
        {/* Image Section */}
        <div className="flex-1">
          <div className="h-full">
            <img
              src={DevImage}
              alt="Digital Marketing Process"
              className="rounded-xl shadow-lg hover:scale-105 transition duration-500 w-full h-full object-cover min-h-[500px]"
            />
          </div>
        </div>

        {/* Steps Section */}
        <div className="flex-1 flex flex-col justify-between space-y-8 h-full">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex items-start gap-4 bg-white shadow-md rounded-lg p-4 border-l-4 border-blue-500 hover:border-pink-500 transition-transform transform hover:-translate-y-1 hover:shadow-xl group"
            >
              <div className="mt-1">{step.icon}</div>
              <div>
                <h3 className="text-lg font-semibold text-blue-900 group-hover:text-pink-600 transition">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm group-hover:text-gray-800 transition">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Why Choose Us Section with Background Color and Shadow */}
<div className="w-full bg-blue-50 py-24 px-4">
  <div className="max-w-7xl mx-auto rounded-xl shadow-2xl px-4 sm:px-6 lg:px-8">
    <h2 className="text-4xl font-bold text-blue-900 text-center mb-6 font-houschka">
      Why Choose MRT?
    </h2>
    <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
      MRT is committed to delivering performance-focused digital marketing strategies to elevate your brand’s success.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {features.map((feature, index) => (
        <div
          key={index}
          className="bg-white border border-gray-200 p-6 rounded-xl text-center shadow-md hover:shadow-2xl transition duration-300 hover:scale-[1.03] group"
        >
          <div className="flex justify-center mb-4">{feature.icon}</div>
          <h3 className="text-lg font-bold text-blue-900 group-hover:text-pink-500 transition">
            {feature.title}
          </h3>
          <p className="text-sm text-gray-600 group-hover:text-gray-800">
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  </div>
</div>

    </>
        
    
  );
};
export default DigitalMarketing;
