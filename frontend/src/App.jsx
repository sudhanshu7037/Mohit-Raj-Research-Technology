import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Layout from "./Layout";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Career from "./pages/Career";
import { Navigate  } from "react-router-dom";

// Services
import SoftwareDevelopment from "./components/Services/SoftwareDevelopment";
import DevelopmentHosting from "./components/Services/DevelopmentHosting";
import HardwareNetworking from "./components/Services/HardwareNetworking";
import MultimediaAnimation from "./components/Services/MultimediaAnimation";
import DigitalMarketing from "./components/Services/DigitalMarketing";
import DataCentersDevelopment from "./components/Services/DataCentersDevelopment";
import Elearning from "./components/Services/Elearning";
import VideoConferencing from "./components/Services/VideoConferencing";
import SecuritySurvillance from "./components/Services/SecuritySurvillance";
import DataDigitization from "./components/Services/DataDigitization";
import RemoteInfrastructure from "./components/Services/RemoteInfrastructure";

// Industries
import Education from "./components/Industries/Education";

// Admin
import AdminDashboard from "./Admin/AdminDashboard";
import AdminLogin from "./Admin/AdminLogin";
import Register from "./Admin/Register";
import AdminRoute from "./Admin/AdminRoute";

// Pages
import NotFound from "./pages/NotFound";

// Products - Education
import UniversityAutomation from "./components/Products/Education/UniversityAutomation";
import EngineeringCollegeMgt from "./components/Products/Education/EngineeringCollegeMgt";
import EntranceExamManagementandInformationSystem from "./components/Products/Education/EntranceExamManagementandInformationSystem";
import CollegeInstituteManagementSystems from "./components/Products/Education/CollegeInstituteManagementSystems";
import SchoolManagementSystem from "./components/Products/Education/SchoolManagementSystem";
import LibraryManagementSystem from "./components/Products/Education/LibraryManagementSystem";
// import SmartLearningContentManagementSystem from "./components/Products/Education/SmartLearningContentManagementSystem";
import OnlineExaminationManagementSystem from "./components/Products/Education/OnlineExaminationManagementSystem";

// Products - Medical
import MedicalCollegeManagementandInformationSystem from "./components/Products/Medical/MedicalCollegeManagementandInformationSystem";
import HospitalManagementInformationsystem from "./components/Products/Medical/HospitalManagementInformationsystem";
import EHospitalManagement from "./components/Products/Medical/EHospitalManagement";
import EclinicManagement from "./components/Products/Medical/EclinicManagement";
import BioinformaticsManagementandInformationSystem from "./components/Products/Medical/BioinformaticsManagementandInformationSystem";


//  products - coorporate
  import ECompanySystem from "./components/Products/Corporate/ECompanySystem";

// Solutions
import UniversityDigitalization from "./components/solution/UniversityDigitalization";
import SmartLearning from "./components/solution/SmartLearning";
import SecuritySurveillance from "./components/solution/SecuritySurveillance";
import PoliceAutomation from "./components/solution/PoliceAutomation";
import MultimediaAnimationSolution from "./components/solution/MultimediaAnimationSolution";
import MRTiONDigitalEducation from "./components/solution/MRTiONDigitalEducation";
import MedicalCollegeDigitalization from "./components/solution/MedicalCollegeDigitalization";
import LibraryDigitalization from "./components/solution/LibraryDigitalization";
import DigitalMarketingSolutions from "./components/solution/DigitalMarketingSolutions";
import ConferenceRoomSolutions from "./components/solution/ConferenceRoomSolutions";
import AuditoriumSolutions from "./components/solution/AuditoriumSolutions";
import AudioVideoBroadcasting from "./components/solution/AudioVideoBroadcasting";


const App = () => {
  return (
    <div>
      <Layout>
       <Routes>
  {/* ==== General Pages ==== */}
  <Route path="/" element={<Home />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/blog" element={<Blog />} />
  <Route path="/who we are" element={<About />} />
  <Route path="/career" element={<Career />} />

  {/* ==== Services Pages ==== */}
  <Route path="/SoftwareDevelopment" element={<SoftwareDevelopment />} />
  <Route path="/DevelopmentHosting" element={<DevelopmentHosting />} />
  <Route path="/HardwareNetworking" element={<HardwareNetworking />} />
  <Route path="/MultimediaAnimation" element={<MultimediaAnimation />} />
  <Route path="/DigitalMarketing" element={<DigitalMarketing />} />
  <Route path="/DataCentersDevelopment" element={<DataCentersDevelopment />} />
  <Route path="/Elearning" element={<Elearning />} />
  <Route path="/VideoConferencing" element={<VideoConferencing />} />
  <Route path="/SecuritySurvillance" element={<SecuritySurvillance />} />
  <Route path="/DataDigitization" element={<DataDigitization />} />
  <Route path="/RemoteInfrastructure" element={<RemoteInfrastructure />} />

  {/* ==== Not Found Page ==== */}
  <Route path="/*" element={<NotFound />} />

  {/* ==== Admin Auth Pages ==== */}
  <Route path="/admin/login" element={<AdminLogin />} />
  <Route path="/register" element={<Register />} />

  {/* ==== Products - Education ==== */}
  <Route path="/university-automation-software" element={<UniversityAutomation />} />
  <Route path="/engineering-college-management-system" element={<EngineeringCollegeMgt />} />
  <Route path="/college-institute-management" element={<CollegeInstituteManagementSystems />} />
  <Route path="/school-management-system" element={<SchoolManagementSystem />} />
  <Route path="/library-management-system" element={<LibraryManagementSystem />} />
  <Route path="/online-examination-management" element={<OnlineExaminationManagementSystem />} />
  <Route path="/entrance-exam-management" element={<EntranceExamManagementandInformationSystem />} />

  {/* ==== Solutions Pages ==== */}
  <Route path="/UniversityDigitalization" element={<UniversityDigitalization />} />
  <Route path="/smart-learning" element={<SmartLearning />} />
  <Route path="/security-surveillance" element={<SecuritySurveillance />} />
  <Route path="/police-automation" element={<PoliceAutomation />} />
  <Route path="/multimedia-animation-solution" element={<MultimediaAnimationSolution />} />
  <Route path="/mrt-ion-digital-education" element={<MRTiONDigitalEducation />} />
  <Route path="/medical-college-digitalization" element={<MedicalCollegeDigitalization />} />
  <Route path="/library-digitalization" element={<LibraryDigitalization />} />
  <Route path="/digital-marketing-solutions" element={<DigitalMarketingSolutions />} />
  <Route path="/conference-room-solutions" element={<ConferenceRoomSolutions />} />
  <Route path="/auditorium-solutions" element={<AuditoriumSolutions />} />
  <Route path="/audio-video-broadcasting" element={<AudioVideoBroadcasting />} />

  {/* ==== Products - Medical ==== */}
  <Route path="/medical-college-management" element={<MedicalCollegeManagementandInformationSystem />} />
  <Route path="/hospital-management-system" element={<HospitalManagementInformationsystem />} />
  <Route path="/e-hospital-management" element={<EHospitalManagement />} />
  <Route path="/e-clinic-management" element={<EclinicManagement />} />
  <Route path="/bioinformatics-management" element={<BioinformaticsManagementandInformationSystem />} />

  {/* ==== Products - Corporate ==== */}
  <Route path="/e-company-system" element={<ECompanySystem />} />

  {/* ==== Admin Protected Route ==== */}
  <Route
    path="/admin/dashboard"
    element={
      
      localStorage.getItem("token") ? (
      <AdminDashboard />
    ) : (
      <Navigate to="/admin/login" />
    )
    }
  />
</Routes>
      </Layout>
    </div>
  );
};

export default App;
