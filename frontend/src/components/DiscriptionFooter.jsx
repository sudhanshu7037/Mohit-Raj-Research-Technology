import React from 'react';
import bgFooter from "../assets/new mrt.jpg"; // 👈 apni image import karo

const DiscriptionFooter = () => {
  return (
    <div
      className="text-white p-6 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgFooter})` }}
    >
      {/* Overlay for text visibility */}
      <div className=" bg-opacity-10 p-6 rounded-md">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Industries Section */}
          <div className="flex flex-col">
            <h1 className="text-lg font-bold italic mb-2 text-white relative inline-block">
  <span className="relative inline-block">
    Industries
    <span className="absolute left-0 -bottom-1 h-[4px] w-full bg-gradient-to-r from-yellow-400 to-pink-500 rounded-full"></span>
  </span>
</h1>

            <ul className="space-y-1 text-sm">
              <li>Educatio</li>
              <li>Healthcare</li>
              <li>Banking</li>
              <li>Manufacturing</li>
              <li>Retail</li>
              <li>Life Science</li>
              <li>Consumer Goods</li>
              <li>High Tech</li>
              <li>Insurance</li>
              <li>Life Sciences</li>
              <li>Manufacturing</li>
              <li>Public Services</li>
              <li>Retail</li>
              <li>Travel and Logistics</li>
            </ul>
          </div>

          {/* Services Section */}
          <div className="flex flex-col">
             <h1 className="text-lg font-bold italic mb-2 text-white relative inline-block">
  <span className="relative inline-block">
    Services
    <span className="absolute left-0 -bottom-1 h-[4px] w-full bg-gradient-to-r from-yellow-400 to-pink-500 rounded-full"></span>
  </span>
</h1>
 
            <ul className="space-y-1 text-sm">
              <li>Software Development</li>
              <li>Development,Hosting & Promotion</li>
              <li>Hardware & Networking</li>
              <li>Multimedia & Animation</li>
              <li>Digital Marketing</li>
              <li>Data Centers Development</li>
              <li>E-Learning</li>
              <li>Video Conferencing</li>
              <li>Security and surveillance</li>
              <li>Data Digitization</li>
              <li>Remote Infrastructure</li>
              <li>MRT and AWS Cloud</li>
              <li>MRT Enterprise Cloud</li>
              <li>MRT and Google Cloud</li>
              <li>MRT and Microsoft Cloud</li>
            </ul>
          </div>

          {/* Products and Platforms Section */}
          <div className="flex flex-col">
              <h1 className="text-lg font-bold italic mb-2 text-white relative inline-block">
  <span className="relative inline-block">
    Products & Platform
    <span className="absolute left-0 -bottom-1 h-[4px] w-full bg-gradient-to-r from-yellow-400 to-pink-500 rounded-full"></span>
  </span>
</h1>

            <ul className="space-y-1 text-sm">
              <li>Education Domain</li>
              <li>Medical Domain</li>
              <li>corporate Domain</li>
              <li>Public & Mixed Domain</li>
              <li>MRT Customer Intelligence & Insights™</li>
              <li>MRT ERP on Cloud</li>
              <li>ignio™</li>
              <li>MRT HOBS™</li>
              <li>MRT Intelligent Urban Exchange™</li>
              <li>MRT OmniStore™</li>
              <li>MRT Optumera™</li>
              <li>MRT TAP™</li>
              <li>Quartz™ – The Smart Ledgers™</li>
              <li>MRT TwinX™</li>
              <li>MRT MasterCraft™</li>
              <li>Jile™</li>
              <li>MRT iON™</li>
              <li>MRT DigiBOLT™</li>
            </ul>
          </div>

          {/* Insights Section */}
          <div className="flex flex-col">
             <h1 className="text-lg font-bold italic mb-2 text-white relative inline-block">
  <span className="relative inline-block">
    Insights
    <span className="absolute left-0 -bottom-1 h-[4px] w-full bg-gradient-to-r from-yellow-400 to-pink-500 rounded-full"></span>
  </span>
</h1>

            <ul className="space-y-1 text-sm">
              <li>Insights</li>
              <li>Customer Stories</li>
              <li>Cloud</li>
              <li>Blockchain</li>
              <li>IoT</li>
              <li>Metaverse</li>
              <li>Future of Work</li>
              <li>Health and Wellness</li>
              <li>Sustainability</li>
              <li>MRT.AI</li>
              <li>Cybersecurity</li>
              <li>Perspectives</li>
              <li>More information</li>
              <li>Careers</li>
              <li>Corporate Social Responsibility</li>
              <li>Diversity, Equity, and Inclusion</li>
              <li>Investor Relations</li>
              <li>Sports Sponsorships</li>
              <li>MRT Pace™</li>
              <li>MRT Research</li>
              <li>The MRT Way</li>
              <li>Who we are</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};

export default DiscriptionFooter;
