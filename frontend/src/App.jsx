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
import Profile from "./components/buyerProfile/profile/Profile";
import Notification from "./components/buyerProfile/notification/Notification";
import Transaction from "./components/buyerProfile/transaction/Transaction";
import HouseLoan from "./components/HouseLoan";
import AgentProfile from "./components/agentProfille/AgentProfile";
import AgentPostProfile from "./components/agentProfille/agentPost/AgentPostProfile";

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
        <div className="pb-[78px] lg:pb-[92px] ">
          <CustomHeader />
        </div>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/signin" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/verifycode" element={<VerifyCode />} />
          <Route path="/choosecategory" element={<ChooseCategory />} />
          <Route path="/residential" element={<Residential />} />
          <Route path="/commercial" element={<Commercial />} />
          <Route path="/industrial" element={<Industrial />} />

          {/* Emmy start */}
          <Route path="/mtndata" element={<MtnData />} />
          <Route path="/GloData" element={<GloData />} />
          <Route path="/GloAirtime" element={<GloAirtime />} />
          <Route path="/MtnAirtime" element={<MtnAirtime />} />
          <Route path="/AirtelData" element={<AirtelData />} />
          <Route path="/AirtelAirtime" element={<AirtelAirtime />} />
          <Route path="/Ninemobile" element={<Ninemobile />} />
          <Route path="/NinemobileAirtime" element={<NinemobileAirtime />} />
          <Route path="/TvSub" element={<TvSub />} />
          <Route path="/Dstv" element={<Dstv />} />
          <Route path="/Startimes" element={<Startimes />} />
          <Route path="/ElectricityBills" element={<ElectricityBills />} />
          <Route path="/ChangePin" element={<ChangePin />} />
          <Route path="/FundWallet" element={<FundWallet />} />
          <Route path="/ConfirmMtnData" element={<ConfirmMtnData />} />
          <Route path="/ConfirmGloData" element={<ConfirmGloData />} />
          <Route path="/ConfirmAirtelData" element={<ConfirmAirtelData />} />
          <Route path="/ConfirmGloAirtime" element={<ConfirmGloAirtime />} />
          <Route
            path="/ConfirmNinemobileData"
            element={<ConfirmNinemobileData />}
          />
          <Route path="/ConfirmMtnAirtime" element={<ConfirmMtnAirtime />} />
          <Route
            path="/ConfirmNineMAirtime"
            element={<ConfirmNineMAirtime />}
          />
          <Route
            path="/ConfirmAirtelAirtime"
            element={<ConfirmAirtelAirtime />}
          />
          <Route path="/ConfirmGotv" element={<ConfirmGotv />} />
          <Route path="/ConfirmDstv" element={<ConfirmDstv />} />
          <Route path="/ConfirmStartime" element={<ConfirmStartime />} />
          <Route path="/ConfirmElectricity" element={<ConfirmElectricity />} />
          <Route path="/houseloan" element={<HouseLoan />} />

          {/* Emmy end */}

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
          <Route path="/profile" element={<Profile />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/transaction" element={<Transaction />} />
          <Route path="/agentprofile" element={<AgentProfile />} />
          <Route path="/agentpostprofile" element={<AgentPostProfile />} />
        </Routes>
        <CustomFooter />
      </Router>
    </div>
  );
}

export default App;