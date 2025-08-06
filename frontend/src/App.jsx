import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Layout from "./Layout";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Career from "./pages/Career";
import { Navigate } from "react-router-dom";


// Products - Education
import UniversityAutomation from "./components/Products/Education/UniversityAutomation";
import EngineeringCollegeMgt from "./components/Products/Education/EngineeringCollegeMgt";
import EntranceExamManagementandInformationSystem from "./components/Products/Education/EntranceExamManagementandInformationSystem";
import CollegeInstituteManagementSystems from "./components/Products/Education/CollegeInstituteManagementSystems";
import SchoolManagementSystem from "./components/Products/Education/SchoolManagementSystem";
import LibraryManagementSystem from "./components/Products/Education/LibraryManagementSystem";
import SmartLearningContentManagementSystem from "./components/Products/Education/SmartLearningContentManagementSystem";
import OnlineExaminationManagementSystem from "./components/Products/Education/OnlineExaminationManagementSystem";


// Products - Medical
import MedicalCollegeManagementandInformationSystem from "./components/Products/Medical/MedicalCollegeManagementandInformationSystem";
import HospitalManagementInformationsystem from "./components/Products/Medical/HospitalManagementInformationsystem";
import EHospitalManagement from "./components/Products/Medical/EHospitalManagement";
import EclinicManagement from "./components/Products/Medical/EclinicManagement";
import BioinformaticsManagementandInformationSystem from "./components/Products/Medical/BioinformaticsManagementandInformationSystem";

//  products - coorporate
import ECompanySystem from "./components/Products/Corporate/ECompanySystem";
import AccountManagementSystemTrulymaxM from "./components/Products/Corporate/AccountManagementSystemTrulymaxM";
import AccountManagementSystemTrulymaxS from "./components/Products/Corporate/AccountManagementSystemTrulymaxS";
import FinanceAccountManagementSystemTrulymaxL from "./components/Products/Corporate/FinanceAccountManagementSystemTrulymaxL";
import CRMSoftware from "./components/Products/Corporate/CRMSoftware";
import EBankingManagementSystem from "./components/Products/Corporate/EBankingManagementSystem";
import EBusinessManagement from "./components/Products/Corporate/EBusinessManagement";

import HumanResourceManagementSystem from "./components/Products/Corporate/HumanResourceManagementSystem";
import InventoryManagementSystem from "./components/Products/Corporate/InventoryManagementSystem";
import PurchaseManagementSystem from "./components/Products/Corporate/PurchaseManagementSystem";


// products -Public & Mixed Domain

import CreditCooperativeSocietyManagementInformationSystem from "./components/Products/Public & Mixed Domain/CreditCooperativeSocietyManagementInformationSystem";
import EGovtOfficeManagementSystem from "./components/Products/Public & Mixed Domain/EGovtOfficeManagementSystem";
import PoliceManagementSystem from "./components/Products/Public & Mixed Domain/PoliceManagementSystem";



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


// Industries
import Education from "./components/Industries/Education";
import Banking from "./components/Industries/Banking";
import ConsumerGoods from "./components/Industries/ConsumerGoods";
import HealthCare from "./components/Industries/HealthCare";
import LifeSciences from "./components/Industries/LifeSciences";
import Manufacturing from "./components/Industries/Manufacturing";
import Retail from "./components/Industries/Retail";




// Admin
import AdminDashboard from "./Admin/AdminDashboard";
import AdminLogin from "./Admin/AdminLogin";
import Register from "./Admin/Register";
import AdminRoute from "./Admin/AdminRoute";

// Pages
import NotFound from "./pages/NotFound";
import UniversityDigitalizationCaseStudies from "./pages/casestudies/UniversityDigitalizationCaseStudies";
import HealthCareSystemCaseStudies from "./pages/casestudies/HealthCareSystemCaseStudies";









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
          <Route path="/Education/Casestudies/university-Digitalization-casestudies" element={<UniversityDigitalizationCaseStudies/>} />
          <Route path="" element={<HealthCareSystemCaseStudies/>} />

          {/* ==== Services Pages ==== */}
          <Route
            path="/service/Software-Development"
            element={<SoftwareDevelopment />}
          />
          <Route path="/service/DevelopmentHosting" element={<DevelopmentHosting />} />
          <Route path="/service/HardwareNetworking" element={<HardwareNetworking />} />
          <Route
            path="/service/MultimediaAnimation"
            element={<MultimediaAnimation />}
          />
          <Route path="/service/DigitalMarketing" element={<DigitalMarketing />} />
          <Route
            path="/service/DataCentersDevelopment"
            element={<DataCentersDevelopment />}
          />
          <Route path="/service/Elearning" element={<Elearning />} />
          <Route path="/service/VideoConferencing" element={<VideoConferencing />} />
          <Route
            path="/service/SecuritySurvillance"
            element={<SecuritySurvillance />}
          />
          <Route path="/service/DataDigitization" element={<DataDigitization />} />
          <Route
            path="/service/RemoteInfrastructure"
            element={<RemoteInfrastructure />}
          />

          {/* ==== Not Found Page ==== */}
          <Route path="/*" element={<NotFound />} />

          {/* ==== Admin Auth Pages ==== */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/register" element={<Register />} />

          {/* ==== Solutions Pages ==== */}
          <Route
            path="/solutions/university-digitalization"
            element={<UniversityDigitalization />}
          />
          <Route path="/solutions/smart-learning" element={<SmartLearning />} />
          <Route
            path="/solutions/security-surveillance"
            element={<SecuritySurveillance />}
          />
          <Route
            path="/solutions/police-automation"
            element={<PoliceAutomation />}
          />
          <Route
            path="/solutions/multimedia-animation"
            element={<MultimediaAnimationSolution />}
          />
          <Route
            path="/solutions/mrtion-digital-education"
            element={<MRTiONDigitalEducation />}
          />
          <Route
            path="/solutions/medical-college-digitalization"
            element={<MedicalCollegeDigitalization/>}
          />
          <Route
            path="/solutions/library-digitalization"
            element={<LibraryDigitalization />}
          />
          <Route
            path="/solutions/digital-marketing"
            element={<DigitalMarketingSolutions />}
          />
          <Route
            path="/solutions/conference-room"
            element={<ConferenceRoomSolutions />}
          />
          <Route
            path="/solutions/auditorium"
            element={<AuditoriumSolutions />}
          />
          <Route
            path="/solutions/audio-video-broadcasting"
            element={<AudioVideoBroadcasting />}
          />

          {/* ==== Products - Education ==== */}
          <Route
            path="/product/education/university-automation-software"
            element={<UniversityAutomation />}
          />
          <Route
            path="/product/education/engineering-college-management-system"
            element={<EngineeringCollegeMgt />}
          />
          <Route
            path="/product/education/college-institute-management"
            element={<CollegeInstituteManagementSystems />}
          />
          <Route
            path="/product/education/school-management-system"
            element={<SchoolManagementSystem />}
          />
          <Route
            path="/product/education/library-management-system"
            element={<LibraryManagementSystem />}
          />
          <Route
            path="/product/education/online-examination-management"
            element={<OnlineExaminationManagementSystem />}
          />
          <Route
            path="/product/education/entrance-exam-management"
            element={<EntranceExamManagementandInformationSystem />}
          />
          <Route path="/product/education/smart-learning-content-management" element = {<SmartLearningContentManagementSystem/>} />
          

          {/* ==== Products - Medical ==== */}
          <Route
            path="/product/medical/medical-college-management"
            element={<MedicalCollegeManagementandInformationSystem />}
          />
          <Route
            path="/product/medical/hospital-management-system"
            element={<HospitalManagementInformationsystem />}
          />
          <Route
            path="/product/medical/e-hospital-management"
            element={<EHospitalManagement />}
          />
          <Route path="/product/medical/e-clinic-management" element={<EclinicManagement />} />
          <Route
            path="/product/medical/bioinformatics-management"
            element={<BioinformaticsManagementandInformationSystem />}
          />

          {/* ==== Products - Corporate ==== */}
          <Route
            path="/product/corporate/e-company-system"
            element={<ECompanySystem />}
          />
          <Route path="/product/corporate/account-management-trulymax-m" element={<AccountManagementSystemTrulymaxM />} />
          <Route path="/product/corporate/account-management-trulymax-s" element={<AccountManagementSystemTrulymaxS />} />
          <Route
            path="/product/corporate/finance-account-management-trulymax-l"
            element={<FinanceAccountManagementSystemTrulymaxL />}
          />
          <Route path="/product/corporate/crm-software" element={<CRMSoftware />} />
          <Route path="/product/corporate/e-banking-management" element={<EBankingManagementSystem/>} />
          <Route path="/product/corporate/e-business-management" element={<EBusinessManagement/>} />
          <Route path="" element={<ECompanySystem />}/>
          <Route path="/product/corporate/human-resource-management" element={<HumanResourceManagementSystem/>} />
          <Route path="/product/corporate/inventory-management" element={<InventoryManagementSystem/>} />
          <Route path="/product/corporate/purchase-management" element={<PurchaseManagementSystem/>} />

          {/* ==== Products - Public & Mixed Domain ==== */}

         <Route path="/product/Public & Mixed Domain/credit-cooperative-society-management" element = {<CreditCooperativeSocietyManagementInformationSystem/>} />
         <Route path="/product/Public & Mixed Domain/e-govt-office-management" element = {<EGovtOfficeManagementSystem/>} />
         <Route path="/product/Public & Mixed Domain /police-management-system" element = {<PoliceManagementSystem/>} />


         {/* Industries */}

         <Route path="/industries/Education" element = {<Education/>} />
         <Route path="/industries/Banking" element = {<Banking/>} />
         <Route path="/industries/Healthcare" element = {<HealthCare/>} />
         <Route path="/industries/LifeSciences" element = {<LifeSciences/>} />
         <Route path="/industries/Manufacturing"  element = {<Manufacturing/>} />
         <Route path="/industries/ConsumerGoods" element = {<ConsumerGoods/>} />
         <Route  path="/industries/Retail" element = {<Retail/>} />


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
