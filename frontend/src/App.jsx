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
import CollegeInstituteManagementSystems from "./components/Products/Education/CollegeInstituteManagementSystems";
import EntranceExamManagementandInformationSystem from "./components/Products/Education/EntranceExamManagementandInformationSystem";
import LibraryManagementSystem from "./components/Products/Education/LibraryManagementSystem";
import OnlineExaminationManagementSystem from "./components/Products/Education/OnlineExaminationManagementSystem";
import SchoolManagementSystem from "./components/Products/Education/SchoolManagementSystem";
import SmartLearningContentManagementSystem from "./components/Products/Education/SmartLearningContentManagementSystem";
import ECompanySystem from "./components/Products/Corporate/ECompanySystem";
import EBusinessManagement from "./components/Products/Corporate/EBusinessManagement";
import CRMSoftware from "./components/Products/Corporate/CRMSoftware";
import AccountManagementSystemTrulymaxM from "./components/Products/Corporate/AccountManagementSystemTrulymaxM";
import AccountManagementSystemTrulymaxS from "./components/Products/Corporate/AccountManagementSystemTrulymaxS";
import EBankingManagementSystem from "./components/Products/Corporate/EBankingManagementSystem";
import FinanceAccountManagementSystemTrulymaxL from "./components/Products/Corporate/FinanceAccountManagementSystemTrulymaxL";
import HumanResourceManagementSystem from "./components/Products/Corporate/HumanResourceManagementSystem";
import InventoryManagementSystem from "./components/Products/Corporate/InventoryManagementSystem";
import PurchaseManagementSystem from "./components/Products/Corporate/PurchaseManagementSystem";
import PoliceManagementSystem from "./components/Products/Public & Mixed Domain/PoliceManagementSystem";
import EGovtOfficeManagementSystem from "./components/Products/Public & Mixed Domain/EGovtOfficeManagementSystem";
import CreditCooperativeSocietyManagementInformationSystem from "./components/Products/Public & Mixed Domain/CreditCooperativeSocietyManagementInformationSystem";
import HealthCare from "./components/Industries/HealthCare";
import Banking from "./components/Industries/Banking";
import Manufacturing from "./components/Industries/Manufacturing";
import Retail from "./components/Industries/Retail";
import LifeSciences from "./components/Industries/LifeSciences";
import ConsumerGoods from "./components/Industries/ConsumerGoods";
import UniversityDigitalization from "./components/solution/UniversityDigitalization";
import MedicalCollegeDigitalization from "./components/Solution/MedicalCollegeDigitalization";
import MRTiONDigitalEducation from "./components/Solution/MRTiONDigitalEducation";
import LibraryDigitalization from "./components/solution/LibraryDigitalization";
import DigitalMarketingSolutions from "./components/solution/DigitalMarketingSolutions";
import SmartLearning from "./components/solution/SmartLearning";
import ConferenceRoomSolutions from "./components/solution/ConferenceRoomSolutions";
import AuditoriumSolutions from "./components/solution/AuditoriumSolutions";
import SecuritySurveillance from "./components/solution/SecuritySurveillance";
import MultimediaAnimationSolution from "./components/solution/MultimediaAnimationSolution";
import PoliceAutomation from "./components/solution/PoliceAutomation";
import AudioVideoBrodcasting from "./components/solution/AudioVideoBroadcasting";
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
          <Route
            path="/university-automation-software"
            element={<UniversityAutomationProductsPage />}
          />
          <Route
            path="/engineering-college-management-system"
            element={<EngineeringCollegeMgt />}
          />
          <Route
            path="/UniversityDigitalization"
            element={<UniversityDigitalization />}
          />
          {/* <Route
            path="solutions/university-digitalization"
            element={<UniversityDigitalization />}
          /> */}
          <Route
            path="/college-institute-management"
            element={<CollegeInstituteManagementSystems />}
          />
          <Route
            path="/entrance-exam-management"
            element={<EntranceExamManagementandInformationSystem />}
          />

          <Route
            path="/library-management-system"
            element={<LibraryManagementSystem />}
          />
          <Route
            path="/online-examination-management"
            element={<OnlineExaminationManagementSystem />}
          />
          <Route
            path="/entrance-exam-management"
            element={<EntranceExamManagementandInformationSystem />}
          />
          <Route
            path="/school-management-system"
            element={<SchoolManagementSystem />}
          />
          <Route
            path="/smart-learning-content-management"
            element={<SmartLearningContentManagementSystem />}
          />
          <Route path="/e-company-system" element={<ECompanySystem />} />
          <Route
            path="/e-business-management"
            element={<EBusinessManagement />}
          />
          <Route path="/crm-software" element={<CRMSoftware />} />
          <Route
            path="/account-management-trulymax-m"
            element={<AccountManagementSystemTrulymaxM />}
          />
          <Route
            path="/account-management-trulymax-s"
            element={<AccountManagementSystemTrulymaxS />}
          />
          <Route
            path="/finance-account-management-trulymax-l"
            element={<FinanceAccountManagementSystemTrulymaxL />}
          />

          <Route
            path="/e-banking-management"
            element={<EBankingManagementSystem />}
          />

          <Route
            path="/human-resource-management"
            element={<HumanResourceManagementSystem />}
          />
          <Route
            path="/inventory-management"
            element={<InventoryManagementSystem />}
          />
          <Route
            path="/purchase-management"
            element={<PurchaseManagementSystem />}
          />
          <Route
            path="/police-management-system"
            element={<PoliceManagementSystem />}
          />
          <Route
            path="/e-govt-office-management"
            element={<EGovtOfficeManagementSystem />}
          />
          <Route
            path="/credit-cooperative-society-management"
            element={<CreditCooperativeSocietyManagementInformationSystem />}
          />
          <Route path="/Education" element={<Education />} />

          <Route path="/Healthcare" element={<HealthCare />} />
          <Route path="/Banking" element={<Banking />} />
          <Route path="/Manufacturing" element={<Manufacturing />} />
          <Route path="/Retail" element={<Retail />} />
          <Route path="/LifeSciences" element={<LifeSciences />} />
          <Route path="/ConsumerGoods" element={<ConsumerGoods />} />
          <Route
            path="/solutions/university-digitalization"
            element={<UniversityDigitalization />}
          />
          <Route
            path="/solutions/medical-college-digitalization"
            element={<MedicalCollegeDigitalization />}
          />
          <Route
            path="/solutions/mrtion-digital-education"
            element={<MRTiONDigitalEducation />}
          />
          <Route
            path="/solutions/mrtion-digital-education"
            element={<MRTiONDigitalEducation />}
          />
          <Route
            path="/solutions/library-digitalization"
            element={<LibraryDigitalization />}
          />
          <Route
            path="/solutions/digital-marketing"
            element={<DigitalMarketingSolutions />}
          />
          <Route path="/solutions/smart-learning" element={<SmartLearning />} />
          <Route
            path="/solutions/conference-room"
            element={<ConferenceRoomSolutions />}
          />
          <Route
            path="/solutions/auditorium"
            element={<AuditoriumSolutions />}
          />
          <Route path="/solutions/security-surveillance" element = {<SecuritySurveillance/>} />
          <Route path="/solutions/multimedia-animation" element = {<MultimediaAnimationSolution/>} />
          <Route path="/solutions/police-automation" element = {<PoliceAutomation/>} />
          <Route path="/solutions/audio-video-broadcasting" element = {<AudioVideoBrodcasting/>} />
          
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
