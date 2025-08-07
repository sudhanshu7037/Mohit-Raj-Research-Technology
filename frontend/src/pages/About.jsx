import React from 'react';
import Image1 from "../assets/homepageimages/whoweareimages/company_image[1].png";

const AboutUs = () => {
  return (
    <div className="font-sans">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-24 px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">About Mohitraj Research Tech</h1>
          <p className="text-lg">Empowering Global Businesses with Next-Gen IT Solutions</p>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-4xl font-bold text-blue-900 mb-4 font-houschka">Who We Are</h2>
            <p className="text-gray-700 text-lg text-justify">
               Mohitraj Research Tech Pvt Ltd is leading ISO 9001:2015 and ISO
            27001:2022 certified company providing wordclass consultancy and
            services from more than 20 years under the brand name <span className="text-red-600 text-xl font-bold">Godigitally</span> and deliver his services from a
            cluster to international level. We at Mohitraj Research 
            Tech Private Limited are experts in providing innovative
            software development for multiple platforms and domains , IT
            consulting solutions and IT Infrastructure development that empower
            enterprises to succeed in the constantly changing digital world.
            From idea to code, strategy to scaling, we help organizations
            convert ideas into smart, scalable, and secure digital solutions.
            </p>
          </div>
          <div>
            <img src={Image1} alt="Our Office" className="rounded-xl w-full shadow-md" />
          </div>
        </div>
      </section>

      {/* Global Presence & Stats */}
      <section className="bg-gray-100 py-20 px-6 text-center">
        <h2 className="text-3xl font-bold text-blue-900 mb-12">Our Global Presence</h2>
        <img src="/assets/aboutus/world-map.png" alt="Global Map" className="mx-auto mb-10 max-w-full h-auto" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-blue-900">
          <div>
            <h3 className="text-4xl font-bold">2,000+</h3>
            <p className="text-sm">Happy Clients</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">20+</h3>
            <p className="text-sm">Years Experiences</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">200+</h3>
            <p className="text-sm">Project Completed</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">ISO</h3>
            <p className="text-sm">Certified Company</p>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Values */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">
          <div>
            <img src="/assets/icons/vision.png" alt="Vision" className="w-14 h-14 mx-auto mb-4" />
            <h4 className="text-4xl font-bold text-blue-900 font-houschka ">Our Vision</h4>
            <p className="text-gray-600 text-justify">To become a global leader in innovative IT services by delivering actionable business, institutional, and community software solutions through high-quality immersive multimedia, digital transformation, and software solution services empowering them to thrive in our digital era We envision Mohitraj Research and Technology Pvt. Ltd. as a respectable name in the IT service industry, prided for converting concepts into scalable web applications, software systems, and data digitization solutions embracing excellence, innovation, creative approaches and new technologies</p>
          </div>
          <div>
            <img src="/assets/icons/mission.png" alt="Mission" className="w-14 h-14 mx-auto mb-4" />
            <h4 className="text-4xl font-bold text-blue-900 font-houschka">Our Mission</h4>
            <p className="text-gray-600 text-justify">To optimize client operational frameworks and drive business metrics with industry-altering efficiency and enhanced profitability by prescribing bespoke IT systems encompassing software development, mobile and web application creation, multimedia, and digital data management services.</p>
          </div>
          <div>
            <img src="/assets/icons/values.png" alt="Values" className="w-14 h-14 mx-auto mb-4" />
            <h4 className="text-3xl font-bold text-blue-900 font-houschka">Our Values</h4>
             <p className="text-gray-700 mb-4 text-xl font-semibold">
            Achievements for Mohitraj Research and Technology include:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-800 text-md font-semibold">
            <li>Attain software development and website solution capabilities designed around clients’ requirements</li>
            <li>Attain comprehensive data digitization services to aid organizations in going paperless.</li>
            <li>Facilitate enhanced digital communication through custom multimedia, and 2D/3D animation services.</li>
            <li>Attain enduring relations through agile backed development and quality assurance, and on-time delivery of projects.</li>
            {/* <li>Custom-built software solutions</li>
            <li>24x7 technical support and maintenance</li>
            <li>Transparent process & timely delivery</li>
            <li>Scalable and secure architecture</li> */}
          </ul>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-12">Meet Our Leadership</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Sudhanshu Tomar', title: 'Founder & CEO', image: '/assets/team/ceo.jpg' },
              { name: 'Amit Sharma', title: 'Chief Technology Officer', image: '/assets/team/cto.jpg' },
              { name: 'Neha Verma', title: 'Chief Marketing Officer', image: '/assets/team/cmo.jpg' },
            ].map((leader, idx) => (
              <div key={idx} className="text-center">
                <img src={leader.image} alt={leader.name} className="w-40 h-40 rounded-full mx-auto mb-4 object-cover" />
                <h4 className="text-xl font-semibold text-gray-800">{leader.name}</h4>
                <p className="text-sm text-gray-500">{leader.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">Our Journey</h2>
          <ul className="space-y-10 border-l-4 border-blue-600 pl-6">
            <li>
              <h4 className="text-xl font-semibold text-blue-800">2004 - Company Founded</h4>
              <p>Started with a small team focused on enterprise solutions.</p>
            </li>
            <li>
              <h4 className="text-xl font-semibold text-blue-800">2006 - Company start Automate the universities</h4>
              <p>Secured our first Fortune 500 clients from the US and Europe.</p>
            </li>
            <li>
              <h4 className="text-xl font-semibold text-blue-800">2011 - Company start Automete the Medical colleges and Hospitals</h4>
              <p>Launched healthcare and logistics cloud-based products.</p>
            </li>
            <li>
              <h4 className="text-xl font-semibold text-blue-800">2014 - Company start Automation of banking and financial sector</h4>
              <p>Launched healthcare and logistics cloud-based products.</p>
            </li>
            <li>
              <h4 className="text-xl font-semibold text-blue-800">2018 - Company start Automation of manufacturing and retail sector</h4>
              <p>Launched healthcare and logistics cloud-based products.</p>
            </li>
            <li>
              <h4 className="text-xl font-semibold text-blue-800">2020 - Company start Digitalization of universities</h4>
              <p>Launched healthcare and logistics cloud-based products.</p>
            </li>
            <li>
              <h4 className="text-xl font-semibold text-blue-800">2022 - Company start Digitalization of medical college and hospitals</h4>
              <p>Launched healthcare and logistics cloud-based products.</p>
            </li>
          </ul>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="bg-gray-100 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-blue-900 mb-8">Certifications & Partnerships</h2>
        <div className="flex flex-wrap justify-center items-center gap-10">
          <img src="/assets/certs/iso.png" alt="ISO" className="h-14" />
          <img src="/assets/certs/microsoft.png" alt="Microsoft Partner" className="h-14" />
          <img src="/assets/certs/gdpr.png" alt="GDPR" className="h-14" />
          <img src="/assets/certs/cmmi.png" alt="CMMI" className="h-14" />
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-800 py-20 px-6 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Let's Build the Future Together</h2>
        <p className="mb-6">Reach out to explore how we can transform your business digitally.</p>
        <a href="/contact" className="inline-block bg-white text-blue-800 font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition">Contact Us</a>
      </section>

    </div>
  );
};

export default AboutUs;
