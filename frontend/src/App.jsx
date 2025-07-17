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
import EntranceExamManagementandInformationSystem from "./components/Products/Education/EntranceExamManagementandInformationSystem";
import CollegeInstituteManagementSystems from "./components/Products/Education/CollegeInstituteManagementSystems";
import SchoolManagementSystem from "./components/Products/Education/SchoolManagementSystem";
import LibraryManagementSystem from "./components/Products/Education/LibraryManagementSystem";
import SmartLearningContentManagementSystem from "./components/Products/Education/SmartLearningContentManagementSystem";
import OnlineExaminationManagementSystem from "./components/Products/Education/OnlineExaminationManagementSystem";


import UniversityDigitalization from "./components/solution/UniversityDigitalization";


import MedicalCollegeManagementandInformationSystem from "./components/Products/Medical/MedicalCollegeManagementandInformationSystem";
import HospitalManagementInformationsystem from "./components/Products/Medical/HospitalManagementInformationsystem";
import EHospitalManagement from "./components/Products/Medical/EHospitalManagement";
import EclinicManagement from "./components/Products/Medical/EclinicManagement";
import  BioinformaticsManagementandInformationSystem from "./components/Products/Medical/BioinformaticsManagementandInformationSystem";



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
          <Route path = "/college-institute-management" element = {<CollegeInstituteManagementSystems/>} />
          <Route path = "/school-management-system" element = {<SchoolManagementSystem/>} />
          <Route path = "/library-management-system" element = {<LibraryManagementSystem/>} />
          <Route path = "/online-examination-management" element = {<OnlineExaminationManagementSystem/>} />
          <Route path = "/smart-learning-content-management" element = {<SmartLearningContentManagementSystem/>} />
          <Route path = "/entrance-exam-management" element = {<EntranceExamManagementandInformationSystem/>} />
          <Route path = "/UniversityDigitalizatio" element = {<UniversityDigitalization/>} />


          <Route path = "/medical-college-management" element = {<MedicalCollegeManagementandInformationSystem/>} />
          <Route path = "/hospital-management-system" element = {<HospitalManagementInformationsystem/>} />
          <Route path = "/e-hospital-management" element = {<EHospitalManagement/>} />
          <Route path = "/e-clinic-management" element = {< EclinicManagement />} />
          <Route path = "/bioinformatics-management" element = {< BioinformaticsManagementandInformationSystem  />} />
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
