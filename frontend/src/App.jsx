import { BrowserRouter, Routes, Route } from 'react-router-dom'

import FinanceService from "./components/FinanceService";
import HouseLoan from "./components/HouseLoan";
import Residential from './components/Residential'
import Commercial from './components/Commercial'
import Industrial from './components/Industrial'
import Notification from './components/Notification'
import DashboardTemp from './components/Dashboard/DashboardTemp'
import GloData from './components/Dashboard/GloData'
import MtnData from './components/Dashboard/MtnData'
import AirtelData from './components/Dashboard/AirtelData'
import Ninemobile from './components/Dashboard/Ninemobile'
import GloAirtime from './components/Dashboard/GloAirtime'
import MtnAirtime from './components/Dashboard/MtnAirtime'
import AirtelAirtime from './components/Dashboard/AirtelAirtime'
import NinemobileAirtime from './components/Dashboard/NinemobileAirtime'
import TvSub from './components/Dashboard/TvSub'
import Dstv from './components/Dashboard/Dstv'
import Startimes from './components/Dashboard/Startimes'
import ElectricityBills from './components/Dashboard/ElectricityBills'
import ChangePin from './components/Dashboard/ChangePin'
import FundWallet from './components/Dashboard/FundWallet'
import ConfirmMtnData from './components/Dashboard/ConfirmMtnData'
import ConfirmGloData from './components/Dashboard/ConfirmGloData'
import ConfirmAirtelData from './components/Dashboard/ConfirmAirtelData'
import ConfirmNinemobileData from './components/Dashboard/ConfirmNinemobileData'
import ConfirmGloAirtime from './components/Dashboard/ConfirmGloAirtime'
import ConfirmMtnAirtime from './components/Dashboard/ConfirmMtnAirtime'
import ConfirmNineMAirtime from './components/Dashboard/ConfirmNineMAirtime'
import ConfirmAirtelAirtime from './components/Dashboard/ConfirmAirtelAirtime'
import ConfirmGotv from './components/Dashboard/ConfirmGotv'
import ConfirmDstv from './components/Dashboard/ConfirmDstv'
import ConfirmStartime from './components/Dashboard/ConfirmStartime'
import ConfirmElectricity from './components/Dashboard/ConfirmElectricity'
import SettingsDashboard from './components/Dashboard/SettingsDashboard'
import SaveChanges from './components/Dashboard/SaveChanges'
import EditProfile from './components/Dashboard/EditProfile'
import SettingsTemp from './components/Dashboard/SettingsTemp'
import SettingsNotification from './components/Dashboard/SettingsNotification'
import SettingsTransaction from './components/Dashboard/SettingsTransaction'
import SettingsPost from './components/Dashboard/SettingsPost'
import PSettingsPost from './components/Dashboard/PSettingsPost'
import SettingsLogout from './components/Dashboard/SettingsLogout'


import Header from "./components/Header";
import Footer from "./components/Footer";
// import Hero from "./components/home/Hero";
// import Home from "./components/home/Home";
// import Main from "./components/home/main/Main";
// import FindProperty from "./components/home/FindProperty";
// import SendMessage from "./components/home/SendMessage";
// import LogIn from "./components/login/LogIn";
// import SignUp from "./components/signup/SignUp";
// import VerifyCode from "./components/verifyCode/VerifyCode";
// import ChooseCategory from "./components/chooseCategory/ChooseCategory";
// import Identifiction from "./components/identifiction/Identifiction";
// import GDPRagreement from "./components/GDPRagreement/GDPRagreement";
// import HouseInsuranceHero from "./components/houseInsurance/HouseInsuranceHero";
// import HouseInsurance from "./components/houseInsurance/HouseInsurance";
// import Pricing from "./components/houseInsurance/Pricing";
// import Section from "./components/insuranceBlog/Section";
// import Blog from "./components/insuranceBlog/Blog";
// import InsuranceStepHero from "./components/insuranceStep/InsuranceStepHero";
// import FormSteps from "./components/insuranceStep/FormSteps";
// import Step1Form from "./components/insuranceStep/step1/Step1Form";
// import Step1 from "./components/insuranceStep/step1/Step1";

function App() {
  return (
    <>

      <Header />
    <BrowserRouter>
      <Routes>
        <Route index element={<MtnData />} />
        <Route path='/GloData' element={<GloData />} />
        <Route path='/GloAirtime' element={<GloAirtime />} />
        <Route path='/MtnAirtime' element={<MtnAirtime />} />
        <Route path='/AirtelData' element={<AirtelData />} />
        <Route path='/AirtelAirtime' element={<AirtelAirtime />} />
        <Route path='/Ninemobile' element={<Ninemobile />} />
        <Route path='/NinemobileAirtime' element={<NinemobileAirtime />} />
        <Route path='/TvSub' element={<TvSub />} />
        <Route path='/Dstv' element={<Dstv />} />
        <Route path='/Startimes' element={<Startimes />} />
        <Route path='/ElectricityBills' element={<ElectricityBills />} />
        <Route path='/ChangePin' element={<ChangePin />} />
        <Route path='/FundWallet' element={<FundWallet />} />
        <Route path='/ConfirmMtnData' element={<ConfirmMtnData />} />
        <Route path='/ConfirmGloData' element={<ConfirmGloData />} />
        <Route path='/ConfirmAirtelData' element={<ConfirmAirtelData />} />
        <Route path='/ConfirmGloAirtime' element={<ConfirmGloAirtime />} />
        <Route path='/ConfirmNinemobileData' element={<ConfirmNinemobileData />} />
        <Route path='/ConfirmMtnAirtime' element={<ConfirmMtnAirtime />} />
        <Route path='/ConfirmNineMAirtime' element={<ConfirmNineMAirtime />} />
        <Route path='/ConfirmAirtelAirtime' element={<ConfirmAirtelAirtime />} />
        <Route path='/ConfirmGotv' element={<ConfirmGotv />} />
        <Route path='/ConfirmDstv' element={<ConfirmDstv />} />
        <Route path='/ConfirmStartime' element={<ConfirmStartime />} />
        <Route path='/ConfirmElectricity' element={<ConfirmElectricity />} />
        <Route path='/SettingsDashboard' element={<SettingsDashboard />} />
        <Route path='/SaveChanges' element={<SaveChanges />} />
        <Route path='/EditProfile' element={<EditProfile />} />
        <Route path='/SettingsTemp' element={<SettingsTemp />} />
        <Route path='/SettingsNotification' element={<SettingsNotification />} />
        <Route path='/SettingsTransaction' element={<SettingsTransaction />} />
        <Route path='/SettingsPost' element={<SettingsPost />} />
        <Route path='/PSettingsPost' element={<PSettingsPost />} />
        <Route path='/SettingsLogout' element={<SettingsLogout />} />
        <Route path='/HouseLoan' element={<HouseLoan />} />
        <Route path='/Residential' element={<Residential />} />
        <Route path='/Commercial' element={<Commercial />} />
        <Route path='/Industrial' element={<Industrial />} />
        <Route path='/Notification' element={<Notification />} />
      {/* <HouseLoan/> */}
      {/* <Residential/> */}
      {/* <Commercial/> */}
      {/* <Industrial/> */}
      {/* <Notification/> */}
      {/* <DashboardTemp/> */}
      {/* <GloData/> */}
      </Routes>
      </BrowserRouter>
      <Footer />

      {/* <Header /> */}
      {/* <Footer /> */}
      {/* <Hero /> */}
      {/* <Home /> */}
      {/* <Main /> */}
      {/* <FindProperty /> */}
      {/* <SendMessage /> */}
      {/* <LogIn /> */}
      {/* <SignUp /> */}
      {/* <VerifyCode /> */}
      {/* <ChooseCategory /> */}
      {/* <Identifiction /> */}
      {/* <GDPRagreement /> */}
      {/* <HouseInsuranceHero /> */}
      {/* <HouseInsurance /> */}
      {/* <Pricing /> */}
      {/* <Section /> */}
      {/* <Blog /> */}
      {/* <InsuranceStepHero /> */}
      {/* <FormSteps /> */}
      {/* <Step1Form /> */}
      {/* <Step1 /> */}

    </>
  );
}

export default App;
