import { BrowserRouter, Routes, Route } from 'react-router-dom'

// import FinanceService from "./components/FinanceService";
// import HouseLoan from "./components/HouseLoan";
// import Residential from './components/Residential'
// import Commercial from './components/Commercial'
import Industrial from './components/Industrial'
import Notification from './components/Notification'
import DashboardTemp from './components/DashboardTemp'
import GloData from './components/GloData'
import MtnData from './components/MtnData'
import AirtelData from './components/AirtelData'
import Ninemobile from './components/Ninemobile'
import GloAirtime from './components/GloAirtime'
import MtnAirtime from './components/MtnAirtime'
import AirtelAirtime from './components/AirtelAirtime'
import NinemobileAirtime from './components/NinemobileAirtime'
import TvSub from './components/TvSub'
import Dstv from './components/Dstv'
import Startimes from './components/Startimes'
import ElectricityBills from './components/ElectricityBills'
import ChangePin from './components/ChangePin'
import FundWallet from './components/FundWallet'
import ConfirmMtnData from './components/ConfirmMtnData'
import ConfirmGloData from './components/ConfirmGloData'
import ConfirmAirtelData from './components/ConfirmAirtelData'
import ConfirmNinemobileData from './components/ConfirmNinemobileData'
import ConfirmGloAirtime from './components/ConfirmGloAirtime'
import ConfirmMtnAirtime from './components/ConfirmMtnAirtime'
import ConfirmNineMAirtime from './components/ConfirmNineMAirtime'
import ConfirmAirtelAirtime from './components/ConfirmAirtelAirtime'
import ConfirmGotv from './components/ConfirmGotv'
import ConfirmDstv from './components/ConfirmDstv'
import ConfirmStartime from './components/ConfirmStartime'
import ConfirmElectricity from './components/ConfirmElectricity'
// import SelectDataPlan from './components/SelectDataPlan'


import Header from "./components/Header";
import Footer from "./components/Footer";

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
    </>
  );
}

export default App;
