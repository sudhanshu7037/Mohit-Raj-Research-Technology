import React, { useState, useEffect } from "react";
const slides = [
  {
    img: "https://cdn.pixabay.com/photo/2018/05/08/08/49/seo-3385072_1280.jpg",
    title: "AI-Powered SEO Optimization",
    desc: "Boost your search engine rankings using intelligent keyword research, automated content analysis, and competitor benchmarking tools.",
  },
  {
    img: "https://cdn.pixabay.com/photo/2016/11/29/04/17/marketing-1868728_1280.jpg",
    title: "Multi-Channel Campaign Automation",
    desc: "Plan and automate marketing campaigns across email, SMS, social media, and landing pages with real-time performance tracking.",
  },
  {
    img: "https://cdn.pixabay.com/photo/2017/10/31/09/27/social-2904102_1280.jpg",
    title: "Social Media Management Suite",
    desc: "Create, schedule, and monitor posts across platforms like Facebook, Instagram, Twitter, and LinkedIn from a centralized dashboard.",
  },
  {
    img: "https://cdn.pixabay.com/photo/2020/09/03/20/24/analytics-5541340_1280.jpg",
    title: "Real-Time Marketing Analytics",
    desc: "Get actionable insights with real-time campaign reports, traffic trends, lead sources, and customer behavior analysis.",
  },
  {
    img: "https://cdn.pixabay.com/photo/2017/09/08/19/38/email-2720063_1280.jpg",
    title: "Email Marketing Intelligence",
    desc: "Design beautiful campaigns, automate follow-ups, and track open/click rates to engage your audience more effectively.",
  },
];


const DigitalMarketingSolutions = () => {
  const [current, setCurrent] = useState(0);
    
      useEffect(() => {
        const timer = setInterval(() => {
          setCurrent((prev) => (prev + 1) % slides.length);
        }, 4000);
        return () => clearInterval(timer);
      }, [slides.length]);
  return (
   <>
   
   {/* Hero Section - Mrtion Digital Marketing Solutions */}
<section
  className="relative bg-cover bg-center text-white px-6 min-h-screen flex items-center"
  style={{
    backgroundImage:
      "url('https://img.freepik.com/free-photo/marketing-strategy-planning-strategy-concept_53876-42950.jpg')", // Updated marketing-related background
  }}
>
  <div className="max-w-4xl z-10 text-left">
    <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-snug">
      Welcome to <span className="text-yellow-300">Mrtion Digital Marketing Solutions</span>
    </h1>
    <p className="text-lg md:text-xl mb-6 max-w-xl">
      Boost your brand visibility, engagement, and ROI with our powerful digital strategies and automation tools.
    </p>
    <button className="bg-white text-blue-900 font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition">
      Explore Our Marketing Services
    </button>
  </div>
  <div className="absolute inset-0 bg-blue-900 opacity-40"></div>
</section>

{/* Overview Section */}
<section className="py-16 px-6 text-center max-w-4xl mx-auto">
  <h2 className="text-3xl font-bold mb-4 text-blue-900">
    Why Mrtion Digital Marketing?
  </h2>
  <p className="text-lg text-gray-600">
    Mrtion empowers businesses to thrive online with AI-driven marketing strategies, data-backed campaign optimization, and real-time customer engagement tools—delivering measurable growth across SEO, social media, and paid advertising.
  </p>
</section>

{/* Mrtion Digital Marketing Solutions Section */}

<section className="bg-blue-50 py-20 px-6 text-gray-800">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-12">
      Mrtion Digital Marketing Solutions
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {[
        {
          title: "SEO Optimization",
          desc: "Improve your website’s visibility on search engines and attract high-quality organic traffic."
        },
        {
          title: "Social Media Marketing",
          desc: "Engage with your audience on platforms like Instagram, Facebook, and LinkedIn to build strong brand presence."
        },
        {
          title: "Email Marketing Campaigns",
          desc: "Run personalized email campaigns to nurture leads, promote offers, and retain customers effectively."
        },
        {
          title: "Pay-Per-Click Advertising (PPC)",
          desc: "Maximize ROI with targeted ad campaigns across Google, Bing, and social platforms."
        },
        {
          title: "Content Marketing Strategy",
          desc: "Create blogs, videos, and infographics that educate, inform, and convert potential clients."
        },
        {
          title: "Website & Landing Page Optimization",
          desc: "Design high-converting websites and landing pages focused on user experience and lead generation."
        },
        {
          title: "Online Reputation Management",
          desc: "Monitor and improve your brand image by managing reviews, feedback, and search presence."
        },
        {
          title: "Analytics & Reporting",
          desc: "Track campaign performance with detailed analytics and make data-driven marketing decisions."
        },
        {
          title: "Influencer & Affiliate Marketing",
          desc: "Leverage trusted voices and networks to drive engagement and sales through collaborations."
        },
      ].map((item, index) => (
        <div
          key={index}
          className="relative bg-white p-6 rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl group"
        >
          {/* Decorative Background Shape */}
          <div className="absolute -top-8 -left-8 w-32 h-32 bg-blue-100 rounded-tr-[80px] rotate-45 z-0 group-hover:bg-blue-300 transition-all duration-300"></div>

          <div className="relative z-10">
            <h3 className="text-xl font-bold text-blue-900 mb-3 group-hover:text-blue-800 transition">
              {item.title}
            </h3>
            <p className="text-gray-700 group-hover:text-gray-100 transition duration-300">
              {item.desc}
            </p>
          </div>

          {/* Hover Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-50 to-blue-800 opacity-0 group-hover:opacity-60 transition-all duration-300 z-0 rounded-xl pointer-events-none"></div>
        </div>
      ))}
    </div>
  </div>
</section>

{/* New Section - Digital Marketing Key Benefits */}
<section className="bg-white py-20 px-6 text-gray-800">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-12">
      Key Benefits & Features of Our Digital Marketing Solutions
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          title: "SEO Optimization",
          desc: "Improve your website’s visibility on search engines and drive organic traffic.",
          icon: "🔍"
        },
        {
          title: "Social Media Marketing",
          desc: "Boost engagement and brand awareness through targeted social campaigns.",
          icon: "📱"
        },
        {
          title: "Performance Analytics",
          desc: "Track campaign metrics in real-time and make data-driven decisions.",
          icon: "📊"
        },
        {
          title: "Content Strategy",
          desc: "Create and distribute valuable content that attracts and retains audiences.",
          icon: "📝"
        },
        {
          title: "PPC Advertising",
          desc: "Get immediate traffic with Google Ads and social media advertising.",
          icon: "💰"
        },
        {
          title: "Email & Automation",
          desc: "Automate follow-ups and nurture leads with professional email campaigns.",
          icon: "📧"
        }
      ].map((item, index) => (
        <div
          key={index}
          className="group bg-blue-50 p-6 rounded-xl shadow-md hover:bg-blue-900 hover:text-white transition-all duration-300 transform hover:-translate-y-2"
        >
          <div className="text-4xl mb-4 group-hover:scale-110 transition">{item.icon}</div>
          <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
          <p className="text-gray-700 group-hover:text-blue-100 transition">
            {item.desc}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

{/* Workflow Section */}
<section className="bg-blue-50 py-16 px-6">
  <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
    Digital Marketing Execution Workflow by Mrtion
  </h2>
  <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
    {[
      "Client Onboarding",
      "Market Research",
      "Campaign Strategy",
      "Content Creation",
      "Ad Campaign Execution",
      "SEO & Social Media Optimization",
      "Performance Reporting",
    ].map((step, i) => (
      <div
        key={i}
        className="bg-white p-6 rounded-full shadow-lg text-center hover:bg-blue-200 transition w-48"
      >
        <p className="font-semibold text-lg text-blue-900">{step}</p>
      </div>
    ))}
  </div>
</section>

{/* Departments Section */}
<section className="py-16 px-6 max-w-6xl mx-auto">
  <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
    Mrtion Marketing Solutions for Every Industry
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {[
      "E-Commerce & Retail",
      "Healthcare & Pharma",
      "Education & E-Learning",
      "Real Estate & Property",
      "Finance & Insurance",
      "Travel & Hospitality",
    ].map((dept, i) => (
      <div
        key={i}
        className="p-6 bg-white shadow rounded-xl hover:bg-blue-100 transition"
      >
        <h3 className="font-semibold text-lg text-blue-900">{dept}</h3>
      </div>
    ))}
  </div>
</section>


   {/* New Section for why choose */}
<section className="bg-blue-50 py-20 px-6">
  <div className="max-w-7xl mx-auto">
    {/* Heading */}
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-blue-900 mb-4">
        Why Choose Our Digital Marketing Solutions?
      </h2>
      <p className="text-gray-700 max-w-2xl mx-auto">
        Fuel your brand’s digital journey with strategic, data-driven marketing solutions that maximize reach, engagement, and ROI.
      </p>
    </div>

    {/* Content Block */}
    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
      
      {/* Image with Unique Hover */}
      <div className="relative group rounded-3xl overflow-hidden shadow-xl">
        <img
          src="https://www.njitm.com/admin/pages/image/950227.png"
          alt="Why Choose Us"
          className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
        />
        <div className="absolute inset-0 bg-blue-900 bg-opacity-30 group-hover:bg-opacity-60 transition duration-500"></div>
      </div>

      {/* Text Content */}
      <div>
        <ul className="space-y-6 text-gray-800">
          <li className="flex items-start gap-4">
            <span className="text-blue-600 text-xl font-bold">✔</span>
            <div>
              <h4 className="font-semibold text-lg">SEO & SEM Expertise</h4>
              <p>Boost visibility and traffic through expertly optimized search engine strategies.</p>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <span className="text-blue-600 text-xl font-bold">✔</span>
            <div>
              <h4 className="font-semibold text-lg">Social Media Campaigns</h4>
              <p>Engage your audience with targeted content across platforms like Instagram, Facebook, and LinkedIn.</p>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <span className="text-blue-600 text-xl font-bold">✔</span>
            <div>
              <h4 className="font-semibold text-lg">Content & Email Marketing</h4>
              <p>Deliver value with compelling content and personalized email campaigns that convert.</p>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <span className="text-blue-600 text-xl font-bold">✔</span>
            <div>
              <h4 className="font-semibold text-lg">Analytics & Reporting</h4>
              <p>Track real-time performance and make data-backed decisions for better ROI.</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>

{/* Product Slider Section */}
<section className="bg-white py-20 px-6">
  <div className="max-w-6xl mx-auto text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">
      Smart Digital Marketing Solutions
    </h2>
    <p className="text-gray-600 text-lg">
      Explore our cutting-edge tools and strategies tailored to elevate your brand visibility, engagement, and ROI.
    </p>
  </div>

  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
    <img
      src={slides[current].img}
      alt="Product Slide"
      className="rounded-3xl shadow-lg w-full h-auto transform transition duration-500 hover:scale-105"
    />
    <div>
      <h3 className="text-2xl font-bold text-red-700 mb-4">
        {slides[current].title}
      </h3>
      <p className="text-gray-700 text-lg leading-relaxed">
        {slides[current].desc}
      </p>
    </div>
  </div>
</section>
{/* CTA Section */}
<section className="py-20 px-6 bg-blue-100 text-center">
  <h2 className="text-3xl font-bold mb-4 text-blue-900">
    Ready to Grow with Digital Marketing?
  </h2>
  <p className="mb-6 text-gray-700">
    Talk to our marketing specialists and discover how we can scale your brand digitally with smart automation and performance marketing.
  </p>
  <button className="bg-blue-900 text-white px-8 py-3 rounded-full hover:bg-blue-800 transition">
    Get Your Free Strategy Session
  </button>
</section>



   </>
  )
}

export default DigitalMarketingSolutions