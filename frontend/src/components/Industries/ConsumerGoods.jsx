import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

const ConsumerGoods = () => {
  return (
    <>
    
    {/* === Hero Section (Consumer Goods) === */}
<section
  className="relative bg-blue-950 text-white min-h-screen flex items-center justify-center"
  style={{
    backgroundImage: "url('https://img.freepik.com/free-photo/consumer-goods-concept-cartons-arranged-store-shelves_53876-124221.jpg')", // Consumer Goods banner image
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black bg-opacity-60"></div>

  {/* Hero Content */}
  <div className="relative z-10 max-w-4xl text-center px-6">
    <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-snug">
      Driving Growth in the Consumer Goods Industry with Smart Technology
    </h1>
    <p className="text-lg md:text-xl text-gray-200 mb-6">
      We help consumer goods brands streamline supply chains, enhance customer engagement, and scale operations using next-gen digital tools.
    </p>
    <a
      href="#consumergoods"
      className="inline-block bg-white text-blue-900 px-6 py-3 rounded-full font-semibold shadow-md hover:bg-blue-600 hover:text-white transition-all duration-300"
    >
      Explore Consumer Goods Solutions
    </a>
  </div>
</section>

    {/* === Consumer Goods Domain Section === */}
<section className="py-20 px-6 bg-white">
  <div className="text-center max-w-5xl mx-auto mb-12">
    <h2 className="text-4xl font-bold text-blue-900 mb-4">Consumer Goods Digital Solutions</h2>
    <p className="text-gray-700 text-lg">
      Transforming consumer goods companies with scalable digital tools to optimize supply chains, boost sales, enhance customer experiences, and enable data-driven decisions.
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {[
      {
        title: "Retail Execution & Field Sales App",
        description:
          "Empower sales reps with real-time data, route planning, and store audits to improve retail execution efficiency.",
      },
      {
        title: "Smart Inventory Management",
        description:
          "Automate stock monitoring, demand forecasting, and replenishment across warehouses and retail locations.",
      },
      {
        title: "Omnichannel Commerce Platform",
        description:
          "Deliver seamless customer experiences across e-commerce, marketplaces, and in-store with unified order management.",
      },
      {
        title: "Consumer Analytics & CRM",
        description:
          "Leverage customer insights, segmentation, and targeted campaigns to boost engagement and brand loyalty.",
      },
      {
        title: "Supply Chain Visibility & Optimization",
        description:
          "Gain end-to-end visibility across your supply chain, enabling faster response to demand changes and disruptions.",
      },
      {
        title: "Digital Trade Promotion Management",
        description:
          "Plan, execute, and analyze trade promotions effectively to maximize ROI and distributor engagement.",
      },
    ].map((item, index) => (
      <div
        key={index}
        className="bg-gray-100 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500 hover:scale-[1.02] flex flex-col justify-between"
      >
        <div>
          <h3 className="text-xl font-bold text-blue-900 mb-2">{item.title}</h3>
          <p className="text-gray-600">{item.description}</p>
        </div>
      </div>
    ))}
  </div>
</section>

{/* === Live Products Showcase: Consumer Goods === */}
<section className="py-20 px-4 bg-gray-100">
  <div className="max-w-6xl mx-auto text-center mb-12">
    <h2 className="text-4xl font-bold text-blue-900 mb-4">Live Consumer Goods Solutions</h2>
    <p className="text-gray-700 text-lg">
      Explore our real-time consumer goods solutions that enhance product lifecycle, streamline retail operations, and boost consumer engagement.
    </p>
  </div>

  <Swiper
    modules={[Navigation, Autoplay]}
    navigation
    autoplay={{ delay: 3000, disableOnInteraction: false }}
    spaceBetween={20}
    slidesPerView={1}
    breakpoints={{
      640: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    }}
    className="max-w-6xl mx-auto"
  >
    {[
      {
        title: "Retail Execution & Merchandising App",
        description: "Optimize in-store execution with real-time planogram compliance, promotions, and audits.",
        image: "/images/retail-execution.jpg",
        link: "/retail-execution",
      },
      {
        title: "Digital Product Experience Management",
        description: "Manage digital assets, product content, and customer experiences across eCommerce and retail.",
        image: "/images/product-experience.jpg",
        link: "/product-experience",
      },
      {
        title: "Inventory Visibility & Demand Forecasting",
        description: "Improve inventory turns and availability using AI-driven demand predictions and replenishment.",
        image: "/images/inventory-forecast.jpg",
        link: "/inventory-forecasting",
      },
      {
        title: "Omnichannel Order Management",
        description: "Enable seamless order routing, fulfillment, and returns across digital and physical channels.",
        image: "/images/order-management.jpg",
        link: "/order-management",
      },
      {
        title: "Consumer Feedback Analytics",
        description: "Track brand sentiment, product reviews, and service feedback using real-time data analysis.",
        image: "/images/consumer-feedback.jpg",
        link: "/consumer-feedback",
      },
    ].map((product, index) => (
      <SwiperSlide key={index}>
        <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition duration-300 flex flex-col h-full">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-52 object-cover"
          />
          <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-xl font-bold text-blue-800 mb-2">{product.title}</h3>
            <p className="text-gray-600 text-sm mb-4">{product.description}</p>
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</section>

{/* === Working Flow for Consumer Goods === */}
<section className="bg-gray-100 py-20 px-6">
  <div className="max-w-3xl mx-auto text-center mb-12">
    <h2 className="text-4xl font-bold text-blue-900 mb-4">Our Working Flow</h2>
    <p className="text-gray-600 text-lg">
      Strategic process to deliver end-to-end digital transformation for consumer goods companies—from product visibility to last-mile delivery.
    </p>
  </div>

  <div className="relative border-l-4 border-blue-600 max-w-3xl mx-auto">
    {[
      {
        title: "Market & Product Understanding",
        desc: "We analyze consumer behavior, distribution channels, and product life cycles for better digital alignment.",
      },
      {
        title: "Solution Strategy & UI Wireframes",
        desc: "Create intuitive UIs and plan backend workflows for logistics, warehousing, demand planning, and more.",
      },
      {
        title: "Custom Application Development",
        desc: "Build scalable apps for inventory, supply chain, distributor management, and customer loyalty programs.",
      },
      {
        title: "Integration & Quality Testing",
        desc: "Ensure seamless integration with ERPs, CRM systems, and retail portals followed by rigorous testing.",
      },
      {
        title: "Multi-Platform Deployment",
        desc: "Deploy systems across web, mobile, and POS platforms while supporting team onboarding and training.",
      },
      {
        title: "Analytics & Support",
        desc: "Deliver insights on consumer trends, sales forecasting, and provide 24x7 technical assistance.",
      },
    ].map((step, index) => (
      <div key={index} className="mb-10 ml-6">
        <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-2.5 mt-1.5"></div>
        <h3 className="text-xl font-bold text-gray-800">{step.title}</h3>
        <p className="text-gray-600 text-sm mt-2">{step.desc}</p>
      </div>
    ))}
  </div>
</section>

{/* === Why Choose Us - Consumer Goods === */}
<section className="bg-white py-20 px-6">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-12">
    
    {/* Left Text */}
    <div>
      <h2 className="text-4xl font-bold text-blue-900 mb-6">Why Choose Us?</h2>
      <p className="text-gray-700 mb-6 text-lg">
        We empower consumer goods brands with digital solutions that optimize supply chains, enhance consumer engagement, and enable intelligent operations.
      </p>
      <ul className="space-y-3 text-gray-600">
        <li className="flex items-start gap-2">
          ✅ &nbsp; Expertise in distributor and supply chain management
        </li>
        <li className="flex items-start gap-2">
          ✅ &nbsp; Real-time inventory tracking and logistics optimization
        </li>
        <li className="flex items-start gap-2">
          ✅ &nbsp; Consumer insight analytics and engagement tools
        </li>
        <li className="flex items-start gap-2">
          ✅ &nbsp; Scalable infrastructure for high-volume operations
        </li>
      </ul>
    </div>

    {/* Right Image with Hover Effect */}
    <div className="relative group overflow-hidden rounded-xl shadow-lg transition-transform duration-500">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSngqQzFr4fU9_Lv_kwLZzSl3_alY_mOqKJsz7hm1YIR5j_L0XvB0mDTHzx_pzUf0HAf58&usqp=CAU"
        alt="Why Choose Consumer Goods IT"
        className="w-full h-full object-cover transform group-hover:scale-110 group-hover:rotate-1 transition-transform duration-700 ease-in-out"
      />
    </div>
  </div>
</section>

{/* === Key Benefits - Consumer Goods === */}
<section className="py-20 px-6 bg-gray-100">
  <div className="max-w-5xl mx-auto text-center mb-12">
    <h2 className="text-4xl font-bold text-blue-900 mb-4">Key Benefits of Choosing Us</h2>
    <p className="text-gray-700 text-lg">
      Driving growth in the consumer goods industry through digital tools that streamline operations and deepen brand loyalty.
    </p>
  </div>

  <div className="max-w-4xl mx-auto">
    <ul className="list-disc list-inside text-gray-800 space-y-4 text-lg leading-relaxed">
      <li><span className="font-semibold text-blue-800">Supply Chain Efficiency:</span> Real-time tracking, route optimization, and warehousing automation.</li>
      <li><span className="font-semibold text-blue-800">Stronger Distributor Networks:</span> Centralized systems to manage pricing, schemes, and partner engagement.</li>
      <li><span className="font-semibold text-blue-800">Data-Driven Decisions:</span> Leverage analytics for product launches, consumer targeting, and demand forecasting.</li>
      <li><span className="font-semibold text-blue-800">Omnichannel Enablement:</span> Sell through retail, online, B2B, and D2C seamlessly.</li>
      <li><span className="font-semibold text-blue-800">Scalability & Security:</span> Cloud-first architecture with strong data protection for high transaction loads.</li>
    </ul>
  </div>
</section>


    </>
  )
}

export default ConsumerGoods