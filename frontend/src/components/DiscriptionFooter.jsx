import React from 'react';
import bgFooter from "../assets/mrt.png"; // 👈 apni image import karo

const DiscriptionFooter = () => {
  return (
    <div
      className="text-white p-6 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgFooter})` }}
    >
      {/* Overlay for text visibility */}
      <div className="bg-black bg-opacity-60 p-6 rounded-md">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Industries Section */}
          <div className="flex flex-col">
            <h2 className="text-lg font-bold mb-2">Industries</h2>
            <ul className="space-y-1 text-sm">
              <li>Banking</li>
              <li>Capital Markets</li>
              <li>Consumer Packaged Goods and Distribution</li>
              <li>Communications, Media, and Information Services</li>
              <li>Education</li>
              <li>Energy, Resources, and Utilities</li>
              <li>Healthcare</li>
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
            <h2 className="text-lg font-bold mb-2">Services</h2>
            <ul className="space-y-1 text-sm">
              <li>Artificial Intelligence</li>
              <li>Cloud</li>
              <li>Cognitive Business Operations</li>
              <li>Consulting</li>
              <li>Cybersecurity</li>
              <li>Data and Analytics</li>
              <li>Enterprise Solutions</li>
              <li>IoT and Digital Engineering</li>
              <li>Sustainability Services</li>
              <li>Network Solutions and Services</li>
              <li>MRT Interactive</li>
              <li>MRT and AWS Cloud</li>
              <li>MRT Enterprise Cloud</li>
              <li>MRT and Google Cloud</li>
              <li>MRT and Microsoft Cloud</li>
            </ul>
          </div>

          {/* Products and Platforms Section */}
          <div className="flex flex-col">
            <h2 className="text-lg font-bold mb-2">Products and Platforms</h2>
            <ul className="space-y-1 text-sm">
              <li>TCS ADD™</li>
              <li>MRT BaNCS™</li>
              <li>MRT BFSI Platforms</li>
              <li>MRT CHROMA™</li>
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
            <h2 className="text-lg font-bold mb-2">Insights</h2>
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
        <hr className="mt-6 border-gray-300 opacity-50" />
      </div>
    </div>
  );
};

export default DiscriptionFooter;
