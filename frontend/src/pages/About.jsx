import React from "react";
import image1 from "../assets/homepageimages/whoweareimages/background_image[1].png";


const About = () => {
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
            Who We Are
          </p>

          {/* Horizontal Line */}
          <div className="w-[90%] ml-10 border-t border-white/40 mb-6"></div>

          <h1 className="text-5xl md:text-6xl font-light leading-tight ml-10 font-houschka">
            About  <span className="font-normal text-blue-900">Us</span>
          </h1>
        </div>
      </section>

      <div>
        <section className="bg-orange-100 min-h-screen px-6 py-12 md:px-20 relative">
          {/* Get Quotation Button */}
          <button className="fixed bottom-6 right-6 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-lg shadow-lg z-50">
            Get Quotation
          </button>

          {/* About Header */}
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 font-houschka">
              About Mohitraj
            </h2>
            <p className="text-gray-700 leading-relaxed font-basis">
              Mohitraj Research Tech Pvt. Ltd. is incorporated under the Company
              Act 1956 by the Registrar of Companies, NCT of Delhi & Haryana. We
              provide world-class consultancy and services in the field of
              Education & Development, IT-enabled services, marketing research,
              Industrial Research, Media Research, Social Research, and more.
            </p>
            <p className="text-red-600 mt-4 font-semibold text-2xl">
              Our Focus :
            </p>
            <p className="text-gray-700 font-basis">
              To provide complete solutions to educational and business problems
              with complete customer satisfaction under one roof.
            </p>
          </div>

          {/* Company Details */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="bg-gray-200 px-4 py-2 font-bold text-gray-800 text-lg">
              COMPANY DETAILS
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x">
              {/* Row 1 */}
              <div className="p-4 font-medium text-gray-600">
                Name of the Company
              </div>
              <div className="p-4 text-gray-800 font-semibold">
                MOHITRAJ RESEARCH TECH. PVT. LTD.
              </div>

              {/* Row 2 */}
              <div className="p-4 font-medium text-gray-600">
                Registered Office
              </div>
              <div className="p-4 text-gray-800">
                K14/2, Blok-k Gangotri Vihar, Delhi-110053
              </div>

              {/* Row 3 */}
              <div className="p-4 font-medium text-gray-600">
                Corporate Office
              </div>
              <div className="p-4 text-gray-800">
                IIIrd Floor, Shiva Tower, G.T. Road, Ghaziabad, U.P. (INDIA),
                PIN-201001
              </div>

              {/* Row 4 */}
              <div className="p-4 font-medium text-gray-600">Contact No</div>
              <div className="p-4 text-gray-800 space-y-1">
                <p>
                  <strong>Mobile:</strong> 099999-10150
                </p>
                <p>
                  <strong>Phone:</strong> 0120-2860826, 1204151925
                </p>
                <p>
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:mohitraj@mohitraj.com"
                    className="text-blue-600 underline"
                  >
                    mohitraj@mohitraj.com
                  </a>
                </p>
                <p>
                  <strong>Website:</strong>{" "}
                  <a
                    href="http://www.mohitraj.com"
                    className="text-blue-600 underline"
                  >
                    www.mohitraj.com
                  </a>
                </p>
              </div>

              {/* Row 5 */}
              <div className="p-4 font-medium text-gray-600">
                Status of the Company
              </div>
              <div className="p-4 text-gray-800 font-basis">
                Private Limited Company registered under Company Act 1956 by the
                Registrar of Companies, NCT of Delhi & Haryana.
              </div>

              {/* Row 6 */}
              <div className="p-4 font-medium text-gray-600">Location</div>
              <div className="p-4 text-gray-800 font-basis">
                Office located in prime area on G.T. Road, Ghaziabad (near
                Choudhri More), just 0.5 Km from Ghaziabad Railway Station & 1.0
                Km from Bus Stand. Well-connected to Anand Vihar ISBT, New Delhi
                Railway Station, Nehru Place, Connaught Place, Meerut, Agra etc.
              </div>
            </div>
          </div>

          {/* Office Infrastructure */}
          <div className="mt-10">
            <h3 className="text-xl font-semibold text-red-600 mb-2">
              Office and Infrastructure of the Company
            </h3>
            <p className="text-gray-700 font-basis">
              The company has a well-equipped infrastructure to operate
              efficiently across India and abroad. Spacious, air-conditioned
              offices with elegant furniture ensure a comfortable and
              professional environment for both staff and clients.
            </p>
          </div>
        </section>
      </div>
      <div>
        <section className="bg-blue-100 px-6 py-12 md:px-20 min-h-screen flex flex-col md:flex-row gap-10">
          {/* Left Image with height matching right content */}
          <div className="w-full md:w-1/2 flex">
            <img
              src="https://img.freepik.com/free-photo/rendering-anime-doctors-work_23-2151151905.jpg?ga=GA1.1.615919452.1728815623&semt=ais_items_boosted&w=740"
              alt="Why Choose Us"
              className="rounded-lg shadow-md object-cover w-full h-full"
            />
          </div>

          {/* Right Content */}
          <div className="w-full md:w-1/2 flex flex-col justify-start items-start">
            <h2 className="text-2xl md:text-3xl font-semibold text-blue-900 mb-4">
              Why Choose Mohitraj
            </h2>
            <p className="text-gray-700 text-base leading-relaxed font-basis">
              Mohitraj Research Tech Pvt. Ltd. is dedicated to providing
              innovative and comprehensive solutions for educational and
              business challenges. Our focus is on delivering exceptional
              service and ensuring complete customer satisfaction. With a team
              of experts and a commitment to excellence, we strive to empower
              businesses with the latest technology and research-driven
              insights.
            </p>

            <h2 className="text-2xl font-semibold text-blue-900 mt-8">
              Our Mission
            </h2>
            <p className="text-gray-700 text-base leading-relaxed mt-2 font-basis">
              Using cutting-edge research and technology, we aim to develop
              practical remedies for present-day problems in all sectors. Our
              objective is to promote transformational change through
              innovation, integrity and a strong commitment to excellence in our
              services.
            </p>

            <h2 className="text-2xl font-semibold text-blue-900 mt-8">
              Our Vision
            </h2>
            <p className="text-gray-700 text-base leading-relaxed mt-2 font-basis">
              Our vision is to be an Catalyst in technology and a researcher on
              the world stage. With the goal of transforming industry practices
              and solutions to shape the future Helping individuals and
              businesses with innovative technologies and solutions that enhance
              their abilities.
            </p>

            <h2 className="text-2xl font-semibold text-blue-900 mt-8">
              Objectives
            </h2>
            <p className="text-gray-700 text-base leading-relaxed mt-2 font-basis">
              The main objective of Mohitraj Research and Technology Private
              Limited is to use advance technological solutions for developing ,
              deploying and maintaining IT services and product . With the goal
              of achieving excellence in research and technology, we've evolved
              into a dynamic entity that prioritizes innovation of new products
              and ideas.
            </p>

            <h2 className="text-2xl font-semibold text-blue-900 mt-8">
              Quality Policy
            </h2>
            <p className="text-gray-700 text-base leading-relaxed mt-2 font-basis">
              Using cutting-edge research and technology, we aim to develop
              practical remedies for present-day problems in all sectors Our
              objective is to promote transformational change through
              innovation, integrity and a strong commitment to excellence in our
              services.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
