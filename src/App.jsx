import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Portfolio from "./pages/Portfolio";
import SignUp from "./pages/SignUp";
import Contact from "./pages/Contact";
import Testimonials from "./pages/Testimonials";
import Password from "./pages/Password";
import Overview from "./pages/Overview";
import SideBar from "./pages/SideBar";
import UserDashboard from "./components/dashboards/userDashboard/UserDashboard";
import Investment from "./pages/Investment";
import Wallet from "./pages/Wallet";
import NewProject from "./pages/NewProject";
import Setting from "./pages/Setting";
import Profile from "./components/settings/profile/Profile";
import Notification from "./components/settings/notification/Notification";
import Billings from "./components/settings/billing/Billings";
import AdminSideBar from "./pages/AdminSideBar";
import AdminDashBoard from "./pages/AdminDashBoard";
// import AdminDashBoardMain from "./components/adminDashboard/AdminDashboards/AdminDashBoardMain";
import Help from "./pages/Help";
import ContactSupport from "./components/helpSupport/ContactSupport";
import DirectContactLink from "./components/helpSupport/DirectContactLink";
import IssueMPage from "./components/adminDashboard/AdminDashboards/IssueManagement/IssueMPage";
import ActiveUsers from "./components/adminDashboard/AdminDashboards/IssueManagement/ActiveUsers";
import SuspendedUsers from "./components/adminDashboard/AdminDashboards/IssueManagement/SuspendedUsers";
import Pending from "./components/adminDashboard/AdminDashboards/IssueManagement/Pending";
import AdminProjects from "./components/adminDashboard/projects/AdminProjects";
import AdminInvestment from "./components/adminDashboard/investments/Investment";
import InvestmentBrd from "./components/adminDashboard/investments/InvestmentBrd";
import FinanTrans from "./components/adminDashboard/investments/FinanTrans";

const Layout = ({ children }) => {
  const location = useLocation();
  const hideHeaderFooter =
    location.pathname.includes("/login") ||
    location.pathname.includes("/signup") ||
    location.pathname.includes("/forgotpassword") ||
    location.pathname.includes("/sidebar") ||
    location.pathname.includes("/adminSidebar") ||
    location.pathname.includes("/projects") ||
    location.pathname.includes("/investments") ||

    location.pathname.includes("/adminDashboard");
  location.pathname.includes("/userDashboard");
  return (
    <div>
      {!hideHeaderFooter && <Header />}
      {children}
      {!hideHeaderFooter && <Footer />}
    </div>
  );
};

function App() {
  return (
    <div>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="login" element={<Login />} />
            <Route path="about" element={<About />} />
            <Route path="testimonials" element={<Testimonials />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="contact" element={<Contact />} />
            <Route path="forgotpassword" element={<Password />} />
            <Route path="overview" element={<Overview />} />
            <Route path="userdashboard" element={<UserDashboard />} />
            <Route path="sidebar" element={<SideBar />}>
              <Route index element={<Overview />} />
              <Route path="overview" element={<Overview />} />
              <Route path="investments" element={<Investment />}>
                <Route path="projects" element={<NewProject />} />
              </Route>
              <Route path="wallet" element={<Wallet />} />
              <Route path="settings" element={<Setting />}>
                <Route index element={<Profile />} />
                <Route path="profile" element={<Profile />} />
                <Route path="notifications" element={<Notification />} />
                <Route path="billing" element={<Billings />} />
              </Route>
              <Route path="help" element={<Help />}>
                <Route index element={<ContactSupport />} />
                <Route path="support" element={<ContactSupport />} />
                <Route path="direct" element={<DirectContactLink />} />
              </Route>
            </Route>
            <Route path="adminSidebar" element={<AdminSideBar />}>
              <Route index element={<AdminDashBoard />}></Route>
              <Route path="adminDashboard" element={<AdminDashBoard />}>
                <Route index element={<IssueMPage />} />
                <Route path="issuepage" element={<IssueMPage />}>
                  <Route index element={<ActiveUsers />} />
                  <Route path="activeusers" element={<ActiveUsers />} />
                  <Route path="suspendedusers" element={<SuspendedUsers />} />
                  <Route path="pendingusers" element={<Pending />} />
                </Route>
              </Route>
              <Route path="projects" element={<AdminProjects />} />
              <Route path="investments" element={<AdminInvestment/>}>
              <Route index element={<InvestmentBrd/>}/>
              <Route path="investbrk" element={<InvestmentBrd/>}/>
              <Route path="finantrans" element={<FinanTrans/>}/>
            
              </Route>

              {/* add your own routes here */}
            </Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
