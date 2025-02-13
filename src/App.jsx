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
// import Dashboard from "./components/dashboards/Dashboard";
import Overview from "./components/dashboards/metrics/Overview";
import SideBar from "./components/dashboards/sidebar/SideBar";

const Layout = ({ children }) => {
  const location = useLocation();
  const hideHeaderFooter =
    location.pathname.includes("/login") ||
    location.pathname.includes("/signup") ||
    location.pathname.includes("/forgotpassword") ||
    location.pathname.includes("/sidebar");
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
            <Route path="sidebar" element={<SideBar />}>
              <Route path="overview" element={<Overview />} />
            </Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
