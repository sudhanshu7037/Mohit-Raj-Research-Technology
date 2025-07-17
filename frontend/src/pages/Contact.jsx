import React from "react";
import image1 from "../assets/homepageimages/contactusimages/contactus.png";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";



const ContactUs = () => {
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
               
              </p>
    
              {/* Horizontal Line */}
              <div className="w-[90%] ml-10 border-t border-white/40 mb-6"></div>
    
              <h1 className="text-5xl md:text-6xl font-light leading-tight ml-10 font-houschka">
                Contact  <span className="font-normal text-blue-900">Us</span>
              </h1>
            </div>
          </section>

   
    <section className="bg-gray-50 py-16 px-4 md:px-24">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
          CONTACT US
        </h2>
        <p className="text-gray-600 mt-2 text-lg">Have a project or question? We'd love to hear from you!</p>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Contact Form */}
        <form className="bg-white shadow-lg rounded-2xl p-8 space-y-6">
          <div>
            <label className="text-gray-700 font-semibold mb-1 block">Full Name</label>
            <input type="text" placeholder="Your full name"
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-500" />
          </div>

          <div>
            <label className="text-gray-700 font-semibold mb-1 block">Email Address</label>
            <input type="email" placeholder="you@example.com"
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-500" />
          </div>

          <div>
            <label className="text-gray-700 font-semibold mb-1 block">Phone Number</label>
            <input type="tel" placeholder="+91 9876543210"
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-500" />
          </div>

          <div>
            <label className="text-gray-700 font-semibold mb-1 block">Country</label>
            <select className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-500">
              <option>Select your country</option>
              <option>India</option>
              <option>USA</option>
              <option>UK</option>
              <option>Germany</option>
              <option>Canada</option>
              <option>Australia</option>
            </select>
          </div>

          <div>
            <label className="text-gray-700 font-semibold mb-1 block">Service Category</label>
            <select className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-500">
              <option>Select a service</option>
              <option>Web Development</option>
              <option>Software Development</option>
              <option>Mobile App Development</option>
              <option>UI/UX Design</option>
              <option>Cloud Solutions</option>
              <option>IT Consulting</option>
            </select>
          </div>

          <div>
            <label className="text-gray-700 font-semibold mb-1 block">Message</label>
            <textarea rows="4" placeholder="Write your message..."
              className="w-full border border-gray-300 px-4 py-2 rounded-md resize-none focus:ring-2 focus:ring-blue-500" />
          </div>

          <button type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 rounded-md text-lg font-semibold hover:opacity-90">
            Send Message
          </button>
        </form>

        {/* Contact Details Section */}
       <div className="bg-white p-6 rounded-xl shadow-lg space-y-6">
  {/* Office Address */}
  <div className="flex items-start gap-4">
    <FaMapMarkerAlt className="text-blue-600 text-xl mt-1" />
    <div>
      <h4 className="text-lg font-semibold text-gray-800">Corporate Office</h4>
      <p className="text-gray-600">
        304, Shiva Tower, G.T Road (Near Chaudhary More)
        <br />
        Ghaziabad, U.P India – 201001
      </p>
    </div>
  </div>

  {/* Phone */}
  <div className="flex items-center gap-4">
    <FaPhoneAlt className="text-blue-600 text-xl" />
    <a href="tel:+919999910150" className="text-blue-600 text-base hover:underline">
      +91 9999910150
    </a>
  </div>

  {/* Email */}
  <div className="flex items-center gap-4">
    <FaEnvelope className="text-blue-600 text-xl" />
    <a href="mailto:mohitrajit@gmail.com" className="text-blue-600 text-base hover:underline">
      mohitrajit@gmail.com
    </a>
  </div>

  {/* Business Hours */}
  <div className="flex items-start gap-4">
    <FaClock className="text-blue-600 text-xl mt-1" />
    <div>
      <h4 className="text-lg font-semibold text-gray-800">Business Hours</h4>
      <p className="text-gray-600">Mon - Sat: 9:30 AM – 6:30 PM</p>
    </div>
  </div>
</div>
      </div>

      {/* Optional Map */}
     <div className="mt-16">
  <iframe
    title="Company Location Map"
    className="w-full h-72 rounded-xl border-2 border-gray-300"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.391512654992!2d77.4360884!3d28.6643825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf1c7aaaaaaab%3A0x9b9ba0ea32a511f3!2sMohitraj%20Research%20Tech%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1689900000000!5m2!1sen!2sin"
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>
    </section>

     </>
  );
};

export default ContactUs;
