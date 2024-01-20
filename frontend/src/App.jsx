// import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  HashRouter as Router,
  Routes,
  Route,
  Outlet,
  useLocation,
} from "react-router-dom";

import GloData from "./components/Dashboard/GloData";
// import MtnData from "./components/Dashboard/MtnData";
import AirtelData from "./components/Dashboard/AirtelData";
import Ninemobile from "./components/Dashboard/Ninemobile";
import GloAirtime from "./components/Dashboard/GloAirtime";
import MtnAirtime from "./components/Dashboard/MtnAirtime";
import AirtelAirtime from "./components/Dashboard/AirtelAirtime";
import NinemobileAirtime from "./components/Dashboard/NinemobileAirtime";
import TvSub from "./components/Dashboard/TvSub";
import Dstv from "./components/Dashboard/Dstv";
import Startimes from "./components/Dashboard/Startimes";
import ElectricityBills from "./components/Dashboard/ElectricityBills";
import ChangePin from "./components/Dashboard/ChangePin";
import FundWallet from "./components/Dashboard/FundWallet";
import ConfirmMtnData from "./components/Dashboard/ConfirmMtnData";
import ConfirmGloData from "./components/Dashboard/ConfirmGloData";
import ConfirmAirtelData from "./components/Dashboard/ConfirmAirtelData";
import ConfirmNinemobileData from "./components/Dashboard/ConfirmNinemobileData";
import ConfirmGloAirtime from "./components/Dashboard/ConfirmGloAirtime";
import ConfirmMtnAirtime from "./components/Dashboard/ConfirmMtnAirtime";
import ConfirmNineMAirtime from "./components/Dashboard/ConfirmNineMAirtime";
import ConfirmAirtelAirtime from "./components/Dashboard/ConfirmAirtelAirtime";
import ConfirmGotv from "./components/Dashboard/ConfirmGotv";
import ConfirmDstv from "./components/Dashboard/ConfirmDstv";
import ConfirmStartime from "./components/Dashboard/ConfirmStartime";
import ConfirmElectricity from "./components/Dashboard/ConfirmElectricity";
// import SelectDataPlan from './components/SelectDataPlan'
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/home/Home";
import LogIn from "./components/login/LogIn";
import SignUp from "./components/signup/SignUp";
import VerifyCode from "./components/verifyCode/VerifyCode";
import ChooseCategory from "./components/chooseCategory/ChooseCategory";
import Residential from "./components/Residential";
import Commercial from "./components/Commercial";
import Industrial from "./components/Industrial";
import DashboardTemp from "./components/Dashboard/DashboardTemp";
import MtnData from "./components/Dashboard/MtnData";
import HouseInsurance from "./components/houseInsurance/HouseInsurance";
import Blog from "./components/insuranceBlog/Blog";
import Step1 from "./components/insuranceStep/step1/Step1";
import Step2 from "./components/insuranceStep/step2/Step2";
import Step3 from "./components/insuranceStep/step3/Step3";
import Step4 from "./components/insuranceStep/step4/Step4";
import Step5 from "./components/insuranceStep/step5/Step5";
import Logistics from "./components/logistics/Logistics";
import BlogHome from "./components/blog/BlogHome";
import BlogPost from "./components/blog/blogPost/BlogPost";

function App() {
  function CustomHeader() {
    const location = useLocation();
    const hideHeaderForPaths = ["/signin", "/signup"];

    if (hideHeaderForPaths.includes(location.pathname)) {
      return null; // Return null if you want to hide the header
    }

    return <Header />;
  }

  function CustomFooter() {
    const location = useLocation();
    const hideHeaderForPaths = ["/signin", "/signup"];

    if (hideHeaderForPaths.includes(location.pathname)) {
      return null; // Return null if you want to hide the header
    }

    return <Footer />;
  }

  return (
    <div className="App">
      <Router>
        <CustomHeader />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/signin" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/verifycode" element={<VerifyCode />} />
          <Route path="/choosecategory" element={<ChooseCategory />} />
          <Route path="/residential" element={<Residential />} />
          <Route path="/commercial" element={<Commercial />} />
          <Route path="/industrial" element={<Industrial />} />
          <Route path="/mtndata" element={<MtnData />} />

          <Route path="/houseinsurance" element={<HouseInsurance />} />
          <Route path="/insuranceblog" element={<Blog />} />
          <Route path="/step1" element={<Step1 />} />
          <Route path="/step2" element={<Step2 />} />
          <Route path="/step3" element={<Step3 />} />
          <Route path="/step4" element={<Step4 />} />
          <Route path="/step5" element={<Step5 />} />
          <Route path="/logistics" element={<Logistics />} />
          <Route path="/blog" element={<BlogHome />} />
          <Route path="/blogpost" element={<BlogPost />} />
        </Routes>
        <CustomFooter />
      </Router>
    </div>
  );
}

export default App;
