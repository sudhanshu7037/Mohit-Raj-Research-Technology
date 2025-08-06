import React, { useState, useEffect } from "react";

const slides = [
  {
    img: "https://cdn.pixabay.com/photo/2018/05/08/08/49/seo-3385072_1280.jpg", // You can change this
    title: "Digital Catalog System",
    desc: "Centralize all your physical and digital resources into an easily searchable online catalog, accessible 24/7 by students and faculty."
  },
  {
    img: "https://cdn.pixabay.com/photo/2016/11/29/04/17/marketing-1868728_1280.jpg",
    title: "RFID & Smart Inventory",
    desc: "Implement RFID and barcode solutions to automate book check-ins/check-outs and enable real-time inventory management."
  },
  {
    img: "https://cdn.pixabay.com/photo/2017/10/31/09/27/social-2904102_1280.jpg",
    title: "Cloud-Based Backup & Access",
    desc: "Securely store library data with cloud infrastructure and provide remote access to digital content and services."
  },
  {
    img: "https://cdn.pixabay.com/photo/2017/09/08/19/38/email-2720063_1280.jpg",
    title: "User & Membership Management",
    desc: "Streamline member registration, track borrowing history, and manage access control through an integrated platform."
  },
];


const LibraryDigitalization = () => {
  const [current, setCurrent] = useState(0);
      
        useEffect(() => {
          const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
          }, 4000);
          return () => clearInterval(timer);
        }, [slides.length]);
  return (
    <>
    {/* Hero Section */}
<section
  className="relative bg-cover bg-center text-white px-6 min-h-screen flex items-center"
  style={{
    backgroundImage:
      "url('https://www.inceptionbd.com/store/1233/ai-background-artificial-intelligence-hand-vector-46752147.jpg')",
  }}
>
  <div className="max-w-4xl z-10 text-left">
    <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-snug">
      Empowering Libraries Through Digital Transformation
    </h1>
    <p className="text-lg md:text-xl mb-6 max-w-xl">
      Advanced IT Solutions to Modernize and Manage Your Library Resources
    </p>
    <button className="bg-white text-blue-900 font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition">
      Talk to Experts
    </button>
  </div>
  <div className="absolute inset-0 bg-blue-900 opacity-40"></div>
</section>

{/* Overview Section */}
<section className="py-16 px-6 text-center max-w-4xl mx-auto">
  <h2 className="text-3xl font-bold mb-4 text-blue-900">
    What is Library Digitalization?
  </h2>
  <p className="text-lg text-gray-600">
    Library digitalization refers to the process of converting traditional library systems into intelligent digital platforms, enabling seamless access to books, research material, and learning resources. It enhances cataloging, tracking, and user engagement while reducing manual workload.
  </p>
</section>


{/* Mrtion Library Digitalization Solutions Section */}

<section className="bg-blue-50 py-20 px-6 text-gray-800">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-12">
      Mrtion Library Digitalization Solutions
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {[
        {
          title: "Digital Cataloging",
          desc: "Transform physical book records into searchable digital databases for easy and quick access."
        },
        {
          title: "RFID & Barcode Integration",
          desc: "Implement smart tracking systems for book check-ins, check-outs, and inventory management."
        },
        {
          title: "Online Public Access Catalog (OPAC)",
          desc: "Allow users to search, reserve, and renew books online through a user-friendly portal."
        },
        {
          title: "E-Resources Management",
          desc: "Manage digital books, journals, and multimedia content from one centralized system."
        },
        {
          title: "Membership & Access Control",
          desc: "Automate user registrations, issue digital library cards, and control borrowing privileges."
        },
        {
          title: "Library Website Development",
          desc: "Create a responsive and accessible library website with integrated search and user support."
        },
        {
          title: "Reporting & Analytics",
          desc: "Generate reports on usage, inventory, and member activity for informed decision-making."
        },
        {
          title: "Cloud Backup & Security",
          desc: "Secure your library data with cloud-based storage, backups, and encryption protocols."
        },
        {
          title: "Mobile App Integration",
          desc: "Provide mobile access to catalogues, notifications, and digital content for on-the-go readers."
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

{/* New Section - Library Digitalization Key Benefits */}
<section className="bg-white py-20 px-6 text-gray-800">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-12">
      Key Benefits & Features of Our Library Digitalization Solutions
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          title: "Instant Book Search",
          desc: "Digitized catalogs allow users to quickly locate and reserve books with ease.",
        },
        {
          title: "Automated Borrowing System",
          desc: "RFID/barcode-enabled check-in/check-out system reduces manual work.",
        },
        {
          title: "Remote Access to Resources",
          desc: "Students can access e-books, journals, and archives from anywhere, anytime.",
        },
        {
          title: "Efficient Inventory Management",
          desc: "Track and manage books, periodicals, and digital assets with accuracy.",
        },
        {
          title: "User Analytics & Reports",
          desc: "Gain insights into usage patterns, member activity, and inventory health.",
        },
        {
          title: "Integrated Member Profiles",
          desc: "Digital member profiles simplify renewals, history tracking, and access control.",
        }
      ].map((item, index) => (
        <div
          key={index}
          className="group bg-blue-50 p-6 rounded-xl shadow-md hover:bg-blue-900 hover:text-white transition-all duration-300 transform hover:-translate-y-2"
        >
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
    Library Digitalization Execution Workflow by Mrtion
  </h2>
  <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
    {[
      "Library Assessment",
      "Data Collection & Cataloging",
      "Software & Hardware Setup",
      "Digitization of Resources",
      "System Integration",
      "Training & Deployment",
      "Monitoring & Maintenance",
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
    Mrtion Library Digitalization Solutions for Various Sectors
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {[
      "University & College Libraries",
      "School Libraries",
      "Public Libraries",
      "Research Institutions",
      "Corporate Knowledge Centers",
      "Government Archives",
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
{/* New Section for Why Choose */}
<section className="bg-blue-50 py-20 px-6">
  <div className="max-w-7xl mx-auto">
    {/* Heading */}
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-blue-900 mb-4">
        Why Choose Our Library Digitalization Solutions?
      </h2>
      <p className="text-gray-700 max-w-2xl mx-auto">
        Empower your library with smart, secure, and scalable digital systems that enhance user access, simplify management, and preserve valuable resources.
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
              <h4 className="font-semibold text-lg">Centralized Digital Catalog</h4>
              <p>Provide quick, user-friendly access to books, e-resources, journals, and archives.</p>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <span className="text-blue-600 text-xl font-bold">✔</span>
            <div>
              <h4 className="font-semibold text-lg">RFID & Barcode Integration</h4>
              <p>Enable fast, automated book circulation and real-time inventory tracking.</p>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <span className="text-blue-600 text-xl font-bold">✔</span>
            <div>
              <h4 className="font-semibold text-lg">Remote Access & Cloud Backup</h4>
              <p>Allow students and researchers to access materials from anywhere with secure cloud support.</p>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <span className="text-blue-600 text-xl font-bold">✔</span>
            <div>
              <h4 className="font-semibold text-lg">Customizable Member Management</h4>
              <p>Digitally manage user roles, borrowing privileges, and membership histories.</p>
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
      Smart Library Digitalization Solutions
    </h2>
    <p className="text-gray-600 text-lg">
      Discover intelligent, scalable tools designed to digitize, manage, and modernize your library infrastructure efficiently.
    </p>
  </div>

  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
    <img
      src={slides[current].img}
      alt="Library Slide"
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
    Ready to Transform Your Library Digitally?
  </h2>
  <p className="mb-6 text-gray-700">
    Connect with our library digitalization experts and discover how we can help modernize your library with smart cataloging, automation, and secure digital access.
  </p>
  <button className="bg-blue-900 text-white px-8 py-3 rounded-full hover:bg-blue-800 transition">
    Schedule Your Free Consultation
  </button>
</section>



</>
  )
}

export default LibraryDigitalization