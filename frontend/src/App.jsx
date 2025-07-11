import React from "react";
import { Routes, Route, Router } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Layout from "./Layout";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Career from "./pages/Career";
import SoftwareDevelopment from "./components/Services/SoftwareDevelopment";
import DevelopmentHosting from "./components/Services/DevelopmentHosting";
import HardwareNetworking from "./components/Services/HardwareNetworking";
import MedicalCollegeManagement from "./pages/casestudies/MedicalCollegeManagement";
import MultimediaAnimation from "./components/Services/MultimediaAnimation";
import DigitalMarketing from "./components/Services/DigitalMarketing";
import DataCentersDevelopment from "./components/Services/DataCentersDevelopment";
import Elearning from "./components/Services/Elearning";
import VideoConferencing from "./components/Services/VideoConferencing";
import SecuritySurvillance from "./components/Services/SecuritySurvillance";
import DataDigitization from "./components/Services/DataDigitization";
import RemoteInfrastructure from "./components/Services/RemoteInfrastructure";
import Education from "./components/Industries/Education";
import AdminDashboard from "./Admin/AdminDashboard";

import NotFound from "./pages/NotFound";
import AdminLogin from "./Admin/AdminLogin";
import Register from "./Admin/Register";
import AdminRoute from "./Admin/AdminRoute";
import UniversityAutomationProductsPage from "./components/Products/Education/UniversityAutomation";
import EngineeringCollegeMgt from "./components/Products/Education/EngineeringCollegeMgt";
import UniversityDigitalization from "./components/solution/UniversityDigitalization";

const App = () => {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/who we are" element={<About />} />
          <Route path="/career" element={<Career />} />
          <Route
            path="/SoftwareDevelopment"
            element={<SoftwareDevelopment />}
          />
          <Route path="/DevelopmentHosting" element={<DevelopmentHosting />} />
          <Route path="/HardwareNetworking" element={<HardwareNetworking />} />
          <Route
            path="/MedicalCollegeManagement"
            element={<MedicalCollegeManagement />}
          />
          <Route
            path="/MultimediaAnimation"
            element={<MultimediaAnimation />}
          />
          <Route path="/DigitalMarketing" element={<DigitalMarketing />} />
          <Route
            path="/DataCentersDevelopment"
            element={<DataCentersDevelopment />}
          />
          <Route path="/Elearning" element={<Elearning />} />
          <Route path="/VideoConferencing" element={<VideoConferencing />} />
          <Route
            path="/SecuritySurvillance"
            element={<SecuritySurvillance />}
          />
          <Route path="/DataDigitization" element={<DataDigitization />} />
          <Route
            path="/RemoteInfrastructure"
            element={<RemoteInfrastructure />}
          />

          <Route path="/*" element={<NotFound />} />

          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/register" element={<Register />} />
          <Route path="/university-automation-software" element= {<UniversityAutomationProductsPage/>} />
          <Route path = "/engineering-college-management-system" element = {<EngineeringCollegeMgt/>} />
          <Route path = "/UniversityDigitalizatio" element = {<UniversityDigitalization/>} />
          <Route
            path="/admin/dashboard"
            element={
              <AdminRoute>
                <AdminDashboard />
              </AdminRoute>
            }
          />
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
