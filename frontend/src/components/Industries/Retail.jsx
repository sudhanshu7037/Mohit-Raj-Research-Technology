import React from 'react'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

const Retail = () => {
  return (
    <>
    
   {/* === Hero Section (Retail) === */}
<section
  className="relative bg-blue-950 text-white min-h-screen flex items-center justify-center"
  style={{
    backgroundImage: "url('https://img.freepik.com/free-photo/blurred-supermarket_1203-1073.jpg')", // Retail banner
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
      Revolutionizing Retail with Intelligent Digital Solutions
    </h1>
    <p className="text-lg md:text-xl text-gray-200 mb-6">
      Delivering seamless customer experiences and operational efficiency through next-gen retail technologies.
    </p>
    <a
      href="#retail"
      className="inline-block bg-white text-blue-900 px-6 py-3 rounded-full font-semibold shadow-md hover:bg-blue-600 hover:text-white transition-all duration-300"
    >
      Explore Our Retail Services
    </a>
  </div>
</section>

{/* === Retail Digital Solutions Section === */}
<section className="py-20 px-6 bg-white">
  <div className="text-center max-w-5xl mx-auto mb-12">
    <h2 className="text-4xl font-bold text-blue-900 mb-4">Retail Digital Solutions</h2>
    <p className="text-gray-700 text-lg">
      Transform your retail business with intelligent digital systems for inventory, billing, customer experience, and omnichannel presence.
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {[
      {
        title: "Point of Sale (POS) System",
        description:
          "Seamlessly manage in-store sales, returns, customer info, and inventory in real-time."
      },
      {
        title: "Retail Inventory Management",
        description:
          "Track stock levels, automate reordering, and manage multiple store inventories efficiently."
      },
      {
        title: "Customer Loyalty Program",
        description:
          "Boost customer retention with digital loyalty cards, rewards, and personalized offers."
      },
      {
        title: "E-commerce Storefront",
        description:
          "Launch a fully integrated online store with secure payment and real-time inventory sync."
      },
      {
        title: "Billing & Invoicing Software",
        description:
          "Generate professional bills, manage taxes, discounts, and digital receipts for customers."
      },
      {
        title: "Retail Analytics Dashboard",
        description:
          "Track sales performance, customer behavior, and inventory insights in one visual dashboard."
      }
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

{/* === Live Products Showcase: Retail === */}
<section className="py-20 px-4 bg-gray-100">
  <div className="max-w-6xl mx-auto text-center mb-12">
    <h2 className="text-4xl font-bold text-blue-900 mb-4">Live Retail Solutions</h2>
    <p className="text-gray-700 text-lg">
      Discover our real-time digital tools crafted for retail businesses to manage inventory, boost customer experience, and streamline multi-channel operations.
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
        title: "Omnichannel Retail Platform",
        description: "Unified management of online, in-store, and mobile sales channels with centralized inventory and orders.",
        image: "/images/omnichannel-retail.jpg",
        link: "/omnichannel-platform",
      },
      {
        title: "Smart POS System",
        description: "Cloud-based Point-of-Sale with real-time sync, inventory insights, and customer loyalty integration.",
        image: "/images/retail-pos.jpg",
        link: "/smart-pos-system",
      },
      {
        title: "Customer Engagement Suite",
        description: "Boost loyalty with personalized offers, SMS/email campaigns, and feedback collection tools.",
        image: "/images/customer-engagement.jpg",
        link: "/customer-engagement",
      },
      {
        title: "Retail Analytics Dashboard",
        description: "Track sales, footfall, trends, and KPIs with AI-powered visual dashboards and forecasting.",
        image: "/images/retail-analytics.jpg",
        link: "/retail-analytics",
      },
      {
        title: "Inventory & Supply Chain Manager",
        description: "Real-time stock tracking, vendor coordination, and restocking alerts to prevent losses.",
        image: "/images/retail-inventory.jpg",
        link: "/inventory-supply-retail",
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


{/*new section*/}
{/* Working Flow for Retail */}
<section className="bg-gray-100 py-20 px-6">
  <div className="max-w-3xl mx-auto text-center mb-12">
    <h2 className="text-4xl font-bold text-blue-900 mb-4">Our Working Flow</h2>
    <p className="text-gray-600 text-lg">
      Streamlined steps to deliver end-to-end retail technology solutions that boost sales and enhance customer experiences.
    </p>
  </div>

  <div className="relative border-l-4 border-blue-600 max-w-3xl mx-auto">
    {[
      {
        title: "Retail Business Understanding",
        desc: "We collaborate with retailers to analyze store operations, customer journeys, and inventory practices.",
      },
      {
        title: "Solution Planning & UI Mockups",
        desc: "Design visual blueprints for POS, inventory, loyalty, and CRM systems tailored to store needs.",
      },
      {
        title: "Custom Retail Software Development",
        desc: "Develop scalable applications for billing, stock tracking, customer engagement, and multi-channel sales.",
      },
      {
        title: "System Integration & Testing",
        desc: "Integrate software with barcode scanners, payment gateways, and online platforms. Perform extensive testing.",
      },
      {
        title: "In-store & Online Deployment",
        desc: "Deploy retail tech solutions across outlets and eCommerce platforms with staff training.",
      },
      {
        title: "Ongoing Support & Analytics",
        desc: "Offer continuous technical support, sales analytics, and customer behavior insights for growth.",
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

{/* === Why Choose Us - Retail === */}
<section className="bg-white py-20 px-6">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-12">
    
    {/* Left Text */}
    <div>
      <h2 className="text-4xl font-bold text-blue-900 mb-6">Why Choose Us?</h2>
      <p className="text-gray-700 mb-6 text-lg">
        We offer tailored retail IT solutions that enhance customer experiences,
        optimize inventory and sales operations, and leverage analytics for smarter retail decisions.
      </p>
      <ul className="space-y-3 text-gray-600">
        <li className="flex items-start gap-2">
          ✅ &nbsp; Expertise in POS, CRM, and inventory management systems
        </li>
        <li className="flex items-start gap-2">
          ✅ &nbsp; Omnichannel retail experience across web, mobile & in-store
        </li>
        <li className="flex items-start gap-2">
          ✅ &nbsp; Real-time analytics for sales and customer behavior
        </li>
        <li className="flex items-start gap-2">
          ✅ &nbsp; Scalable cloud-based retail infrastructure
        </li>
      </ul>
    </div>

    {/* Right Image with Hover Effect */}
    <div className="relative group overflow-hidden rounded-xl shadow-lg transition-transform duration-500">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSngqQzFr4fU9_Lv_kwLZzSl3_alY_mOqKJsz7hm1YIR5j_L0XvB0mDTHzx_pzUf0HAf58&usqp=CAU"
        alt="Why Choose Retail IT"
        className="w-full h-full object-cover transform group-hover:scale-110 group-hover:rotate-1 transition-transform duration-700 ease-in-out"
      />
    </div>

  </div>
</section>
{/* === Key Benefits - Retail === */}
<section className="py-20 px-6 bg-gray-100">
  <div className="max-w-5xl mx-auto text-center mb-12">
    <h2 className="text-4xl font-bold text-blue-900 mb-4">Key Benefits of Choosing Us</h2>
    <p className="text-gray-700 text-lg">
      Empowering retail businesses with innovative digital solutions that improve customer engagement,
      streamline operations, and boost profitability.
    </p>
  </div>

  <div className="max-w-4xl mx-auto">
    <ul className="list-disc list-inside text-gray-800 space-y-4 text-lg leading-relaxed">
      <li><span className="font-semibold text-blue-800">Enhanced Customer Experience:</span> Personalized shopping through data-driven insights and loyalty programs.</li>
      <li><span className="font-semibold text-blue-800">Omnichannel Commerce:</span> Unified experience across online, mobile, and physical stores.</li>
      <li><span className="font-semibold text-blue-800">Smart Inventory Management:</span> Real-time stock tracking, forecasting, and restocking automation.</li>
      <li><span className="font-semibold text-blue-800">Sales Analytics:</span> Actionable insights on product performance, customer trends, and ROI.</li>
      <li><span className="font-semibold text-blue-800">Scalability & Integration:</span> Easily integrates with third-party tools and grows with your business.</li>
    </ul>
  </div>
</section>

    
    </>
  )
}

export default Retail