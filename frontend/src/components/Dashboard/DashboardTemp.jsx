// import React from 'react'
import Profile from "../Media/profile.png";
import BuyAirtime from "../Media/buyAirtime.png";
import BuyData from "../Media/buyData.png";
import Mtn from "../Media/mtn.png";
import Glo from "../Media/glo.png";
import Airtel from "../Media/airtel.png";
import ninemobile from "../Media/ninemobile.png";
import TvSub from "../Media/tvSub.png";
import Changepin from "../Media/changepin.png";
import Electricitybills from "../Media/electricitybills.png";
import Dashhome from "../Media/dashhome.png";
import Gotv from "../Media/gotv.png";
import Dstv from "../Media/dstv.png";
import Startime from "../Media/startime.png";
import WemaLogo from "../Media/wemaLogo.png";
import SterlingLogo from "../Media/sterlingLogo.png";
import MoniepointLogo from "../Media/moniepointLogo.png";
import Paystack from "../Media/paystack.png";
import SelectData from "./SelectData";
import SelectDataPlan from "./SelectDataPlan";
import DropdownMenuDashboard from "./DropdownMenuDashboard";
import MeterType from "./MeterType";
import SelectDisco from "./SelectDisco";
import { Link } from "react-router-dom";
import WalletTop from "./WalletTop";
import Navhome from "../Media/navhome.png";
import Bar from "../Media/top-menu.svg";
import Buydatalogo from '../Media/buydatalogo.png'
import Tvsublogo from '../Media/tvsublogo.png'
import Buyairtimelogo from '../Media/buyairtimelogo.png'
import Electricitybillslogo from '../Media/electricitybillslogo.png'

import { useState, useEffect, useRef } from "react";

import {
  faChevronRight,
  faBars,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function DashboardTemp({
  ValueInText,
  ValueInText1,
  ValueInText2,
  ValueInText3,
  ValueInText4,
  ValueInText5,
  showAdditionalDiv,
  showAdditionalDiv1,
  showAdditionalDiv2,
  showAdditionalDiv3,
  showAdditionalDiv4,
  showAdditionalDiv5,
  showAdditionalDiv6,
  showAdditionalDiv7,
  showAdditionalDiv8,
  showAdditionalDiv9,
  showAdditionalDiv10,
  showAdditionalDiv11,
  showAdditionalDiv12,
  showAdditionalDiv13,
  LeftValue,
  Linking,
  Link1,
  Link2,
  Link3,
  SubLinking,
  SubLink1,
  SubLink2,
  SubLink3,
  AirLinking,
  AirLink1,
  AirLink2,
  AirLink3,
  NetworkLogo,
  SimType,
  SelectedText,
  CurrentPath,
  boolean,
  boolean1,
  boolean2,
  boolean3,
  tempColor,
  Color,
  tempColor1,
  Color1,
  tempColor2,
  Color2,
  tempColor3,
  Color3,
  tempColor4,
  Color4,
  tempColor5,
  Color5,
  Amount,
  MobileLeftValue,
}) {
  const myCustomColor = "#035FCE";

  const [openMenu, setOpenMenu] = useState(false);
  const [showCloseMenu, setShowCloseMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
    setShowCloseMenu(!showCloseMenu);
  };

  const openMenuRef = useRef(null);
  // const menuIconRef = useRef(null);

  useEffect(() => {
    function clickOut(event) {
      if (openMenuRef.current && !openMenuRef.current.contains(event.target)) {
        setOpenMenu(false);
        setShowCloseMenu(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", clickOut);

    // Unbind the event listener on cleanup
    return () => {
      document.removeEventListener("mousedown", clickOut);
    };
  }, []);

  return (
    <>
      <div className="z-40">
        
        <div className="flex lg:overflow-visible overflow-hidden">
          <div className="h-screen lg:w-80 relative  left-6 z-40 top-6 lg:-top-16">
            <div className="flex space-x-3 w-screen-5 lg:w-20 lg:top-0 top-1 relative lg:left-7">
              <img
                src={Profile}
                className="w-10 z-10 lg:-top-0 -top-2 lg:-right-7 right-1 relative mt-1 h-10"
              />
              <div className="h-20 lg:h-0 py-3 pl-20 -top-6 lg:-top-0 lg:pl-0 lg:py-0 lg:w-0 relative lg:-right-8 right-20 w-[100%] bg-[#F5F6F7]">
                <p className="whitespace-nowrap">Bright Moses</p>
                <p className="whitespace-nowrap">
                  Balance: <span className="font-semibold">&#x20A6;00.00</span>
                </p>
              </div>
            </div>

            <div className="lg:hidden relative -top-[74px] min-[425px]:right-[-1%]">
              {showCloseMenu ? (
                <FontAwesomeIcon
                  className="text-black h-6 relative left-[67.5%] top-1 z-40 -ml-3 lg:-ml-0 lg:left-0 "
                  icon={faClose}
                  onClick={toggleMenu}
                />
              ) : (
                <img
                  onClick={toggleMenu}
                  className="text-black relative float-right right-[31%] md:right-[26%]  z-40 -ml-3 lg:-ml-0 lg:left-0"
                  src={Bar}
                />
              )}
              {openMenu && (
                <div
                  className="fixed top-0 left-0 w-[100%] h-[100%] z-40 bg-b opacity-70   via-transparent from-gray-100 to-gray-100"
                  onClick={toggleMenu}
                />
              )}

              <div className="z-40 absolute top-9 right-40 min-[425px]:right-[33%]">
                {openMenu && <DropdownMenuDashboard />}
              </div>
            </div>

            <div className="hidden lg:block ">
              <div
                className="flex space-x-6 relative left-12 w-60 pl-4 top-7 py-4"
                style={{ backgroundColor: Color5, color: tempColor5 }}
              >
                <img
                  src={Dashhome}
                  className="w-5 mt- h-5 filter brightness-0 saturate-125"
                  style={{
                    filter: `saturate(1.25) brightness(${ValueInText5})`,
                  }}
                />
                <p>Dashboard</p>
              </div>

              <hr className="text-black relative -left-6 top-14 w-76" />
              <div className="relative top-20 left-14">
                <p className="pb-4 font-bold text-sm">MAIN MENU</p>

                <Link to="/MtnData">
                  <div
                    className="flex py-4 w-60 space-x-4  pl-4 "
                    style={{ backgroundColor: Color, color: tempColor }}
                  >
                    <img
                      src={BuyData}
                      className="w-5 filter brightness-75 saturate-125"
                      style={{
                        filter: `saturate(1.25) brightness(${ValueInText})`,
                      }}
                    />
                    <p className="whitespace-nowrap">Buy Data</p>
                  </div>
                </Link>
                <Link to="/MtnAirtime">
                  <div
                    className="flex py-4 w-60 space-x-4  pl-4 "
                    style={{ backgroundColor: Color1, color: tempColor1 }}
                  >
                    <img
                      src={BuyAirtime}
                      className="w-5 filter brightness-75 saturate-125"
                      style={{
                        filter: `saturate(1.25) brightness(${ValueInText1})`,
                      }}
                    />

                    <p className="whitespace-nowrap">Buy Airtime</p>
                  </div>
                </Link>
                <Link to="/TvSub">
                  <div
                    className="flex py-4 w-60 space-x-4  pl-4 "
                    style={{ backgroundColor: Color2, color: tempColor2 }}
                  >
                    <img
                      src={TvSub}
                      className="w-5 filter brightness-75 saturate-125"
                      style={{
                        filter: `saturate(1.25) brightness(${ValueInText2})`,
                      }}
                    />

                    <p className="whitespace-nowrap">TV Subscription</p>
                  </div>
                </Link>
                <Link to="/ElectricityBills">
                  <div
                    className="flex py-4 w-60 space-x-4  pl-4 "
                    style={{ backgroundColor: Color3, color: tempColor3 }}
                  >
                    <img
                      src={Electricitybills}
                      className="w-7 relative -left-1 filter brightness-75 saturate-125"
                      style={{
                        filter: `saturate(1.25) brightness(${ValueInText3})`,
                      }}
                    />

                    <p className="whitespace-nowrap">Electricity Bills</p>
                  </div>
                </Link>
                <Link to="/ChangePin">
                  <div
                    className="flex py-4 w-60 space-x-4  pl-4 "
                    style={{ backgroundColor: Color4, color: tempColor4 }}
                  >
                    <img
                      src={Changepin}
                      className="w-6 filter brightness-75 saturate-125"
                      style={{
                        filter: `saturate(1.25) brightness(${ValueInText4})`,
                      }}
                    />

                    <p className="whitespace-nowrap">Change Pin</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className="w-4/5 ">
            <div className="relative top-20 h-screen-2 lg:h-full min-[425px]:right-[28.5pc] right-[24.5pc] md:right-[55.5pc] lg:w-[98%] overflow-hidden lg:pr-3 pr-3 w-96 -ml-28 lg:-ml-0 lg:right-0 lg:top-0">
              {showAdditionalDiv && (
                <div className="pt-4 flex">
                  <Link to="/MtnData">
                    <div className="flex ml-10">
                      <input type="radio" checked={boolean} />
                      <img src={Mtn} className="w-14 lg:w-20" />
                    </div>
                  </Link>
                  <Link to="/GloData">
                    <div className="flex ml-10">
                      <input type="radio" checked={boolean1} />
                      <img src={Glo} className="w-14 lg:w-20" />
                    </div>
                  </Link>
                  <Link to="/AirtelData">
                    <div className="flex ml-10">
                      <input type="radio" checked={boolean2} />
                      <img src={Airtel} className="w-14 lg:w-20" />
                    </div>
                  </Link>
                  <Link to="/Ninemobile">
                    <div className="flex ml-10">
                      <input type="radio" checked={boolean3} />
                      <img src={ninemobile} className="w-14 lg:w-20" />
                    </div>
                  </Link>
                </div>
              )}
              {showAdditionalDiv3 && (
                <div className="pt-4 flex">
                  <Link to="/MtnAirtime">
                    <div className="flex ml-10">
                      <input type="radio" checked={boolean} />
                      <img src={Mtn} className="w-14 lg:w-20" />
                    </div>
                  </Link>
                  <Link to="/GloAirtime">
                    <div className="flex ml-10">
                      <input type="radio" checked={boolean1} />
                      <img src={Glo} className="w-14 lg:w-20" />
                    </div>
                  </Link>
                  <Link to="/AirtelAirtime">
                    <div className="flex ml-10">
                      <input type="radio" checked={boolean2} />
                      <img src={Airtel} className="w-14 lg:w-20" />
                    </div>
                  </Link>
                  <Link to="/NinemobileAirtime">
                    <div className="flex ml-10">
                      <input type="radio" checked={boolean3} />
                      <img src={ninemobile} className="w-14 lg:w-20" />
                    </div>
                  </Link>
                </div>
              )}
              {showAdditionalDiv5 && (
                <div className="pt-4 flex">
                  <Link to="/TvSub">
                    <div className="flex ml-10">
                      <input type="radio" checked={boolean} />
                      <img src={Gotv} className="w-20" />
                    </div>
                  </Link>
                  <Link to="/Dstv">
                    <div className="flex ml-10">
                      <input type="radio" checked={boolean1} />
                      <img src={Dstv} className="w-20" />
                    </div>
                  </Link>
                  <Link to="/Startimes">
                    <div className="flex ml-10">
                      <input type="radio" checked={boolean2} />
                      <img src={Startime} className="w-20" />
                    </div>
                  </Link>
                  {/* <Link to="/NinemobileAirtime">
              <div className="flex ml-10">
                <input type="radio" checked={boolean3} />
                <img src={ninemobile} className="w-14" />
              </div>
            </Link> */}
                </div>
              )}

              {showAdditionalDiv1 && (
                <div className="relative left-11 w-96 h-screen">
                  <img src={NetworkLogo} className="w-36 mt-7" />
                  <p className="font-bold relative bottom-7 left-12 ml-1">
                    DATA
                  </p>
                  <SelectData />
                  <SelectDataPlan />
                  <div className="mt-7">
                    <label>Phone Number</label>
                    <br />
                    <input
                      type="text"
                      className="border-2 h-12 w-screen-6 lg:w-screen-2 mt-3 focus:outline-none pl-10"
                    />
                  </div>
                  {Linking && (
                    <Link to="/ConfirmMtnData">
                      <button
                        className="text-white px-10 py-3 mt-12 rounded-sm"
                        style={{ backgroundColor: myCustomColor }}
                      >
                        Proceed
                      </button>
                    </Link>
                  )}
                  {Link1 && (
                    <Link to="/ConfirmGloData">
                      <button
                        className="text-white px-10 py-3 mt-12 rounded-sm"
                        style={{ backgroundColor: myCustomColor }}
                      >
                        Proceed
                      </button>
                    </Link>
                  )}
                  {Link2 && (
                    <Link to="/ConfirmAirtelData">
                      <button
                        className="text-white px-10 py-3 mt-12 rounded-sm"
                        style={{ backgroundColor: myCustomColor }}
                      >
                        Proceed
                      </button>
                    </Link>
                  )}
                  {Link3 && (
                    <Link to="/ConfirmNinemobileData">
                      <button
                        className="text-white px-10 py-3 mt-12 rounded-sm"
                        style={{ backgroundColor: myCustomColor }}
                      >
                        Proceed
                      </button>
                    </Link>
                  )}
                </div>
              )}

              {showAdditionalDiv6 && (
                <div className="relative left-11 w-96 h-screen mt-20">
                  {/* <img src={NetworkLogo} className="w-36 mt-7" /> */}
                  <p className="font-semibold relative bottom-7 text-lg">
                    Electricity Token
                  </p>

                  <SelectDisco />
                  <MeterType />
                  <div className="mt-7">
                    <label>Enter Amount</label>
                    <br />
                    <input
                      type="text"
                      className="border-2 h-12 w-screen-6 lg:w-screen-2 mt-3 focus:outline-none pl-10"
                    />
                  </div>
                  <div className="mt-7">
                    <label>Enter Meter Number</label>
                    <br />
                    <input
                      type="text"
                      className="border-2 h-12 w-screen-6 lg:w-screen-2 mt-3 focus:outline-none pl-10"
                    />
                  </div>
                  <Link to="/ConfirmElectricity">
                    <button
                      className="text-white px-10 py-3 mt-12 rounded-sm"
                      style={{ backgroundColor: myCustomColor }}
                    >
                      Proceed
                    </button>
                  </Link>
                </div>
              )}

              {showAdditionalDiv2 && (
                <div className="relative left-11 w-96 h-screen">
                  <img src={NetworkLogo} className="w-36 mt-7" />
                  {/* <p className="font-bold relative bottom-7 left-12 ml-1">AIRTIME</p> */}
                  {/* <SelectData />
            <SelectDataPlan /> */}
                  <div className="mt-7">
                    <label className="top-5 relative">Amount</label>
                    <br />
                    <span className="border-2 px-3 py-3 top-12 relative">
                      &#x20A6;
                    </span>
                    <span className="border-2 px-2 py-3 top-12 relative left-12 lg:left-[19.2pc] lg:ml-[70%] ml-48 ">
                      .00
                    </span>
                    <input
                      type="text"
                      className="border-2 h-12 pl-10 lg:w-screen-2 w-80 mt-3 focus:outline-none"
                    />
                  </div>
                  <div className="mt-7">
                    <label>Phone Number</label>
                    <br />
                    <input
                      type="text"
                      className="border-2 pl-10 h-12 lg:w-screen-2 w-80 mt-3 focus:outline-none"
                    />
                  </div>
                  {AirLinking && (
                    <Link to="/ConfirmMtnAirtime">
                      <button
                        className="text-white px-10 py-3 mt-12 rounded-sm"
                        style={{ backgroundColor: myCustomColor }}
                      >
                        Proceed
                      </button>
                    </Link>
                  )}
                  {AirLink1 && (
                    <Link to="/ConfirmGloAirtime">
                      <button
                        className="text-white px-10 py-3 mt-12 rounded-sm"
                        style={{ backgroundColor: myCustomColor }}
                      >
                        Proceed
                      </button>
                    </Link>
                  )}
                  {AirLink2 && (
                    <Link to="/ConfirmAirtelAirtime">
                      <button
                        className="text-white px-10 py-3 mt-12 rounded-sm"
                        style={{ backgroundColor: myCustomColor }}
                      >
                        Proceed
                      </button>
                    </Link>
                  )}
                  {AirLink3 && (
                    <Link to="/ConfirmNineMAirtime">
                      <button
                        className="text-white px-10 py-3 mt-12 rounded-sm"
                        style={{ backgroundColor: myCustomColor }}
                      >
                        Proceed
                      </button>
                    </Link>
                  )}
                </div>
              )}

              {showAdditionalDiv4 && (
                <div className="relative left-11 w-96 h-screen">
                  <img src={NetworkLogo} className="w-36 mt-7" />
                  {/* <p className="font-bold relative bottom-7 left-12 ml-1">DATA</p> */}
                  {/* <SelectData />
            <SelectDataPlan /> */}
                  <div className="mt-7">
                    <label className="top-5 relative">Select Plan</label>
                    <br />

                    <input
                      type="text"
                      className="border-2 h-12 pl-10 w-screen-6 lg:w-screen-2 mt-9 focus:outline-none"
                    />
                  </div>
                  <div className="mt-7">
                    <label>Enter IUC Number</label>
                    <br />
                    <input
                      type="text"
                      className="border-2 pl-10 h-12 w-screen-6 lg:w-screen-2 mt-3 focus:outline-none"
                    />
                  </div>
                  {SubLinking && (
                    <Link to="/ConfirmGotv">
                      <button
                        className="text-white px-10 py-3 mt-12 rounded-sm"
                        style={{ backgroundColor: myCustomColor }}
                      >
                        Proceed
                      </button>
                    </Link>
                  )}
                  {SubLink1 && (
                    <Link to="/ConfirmDstv">
                      <button
                        className="text-white px-10 py-3 mt-12 rounded-sm"
                        style={{ backgroundColor: myCustomColor }}
                      >
                        Proceed
                      </button>
                    </Link>
                  )}
                  {SubLink2 && (
                    <Link to="/ConfirmStartime">
                      <button
                        className="text-white px-10 py-3 mt-12 rounded-sm"
                        style={{ backgroundColor: myCustomColor }}
                      >
                        Proceed
                      </button>
                    </Link>
                  )}
                  {/* {SubLink3 && (
                <Link to="/ConfirmNineMAirtime">
              <button
                className="text-white px-10 py-3 mt-12 rounded-sm"
                style={{ backgroundColor: myCustomColor }}
              >
                Proceed
              </button>
              </Link>
              )} */}
                </div>
              )}

              {showAdditionalDiv7 && (
                <div className="relative left-11 w-96 h-screen">
                  <img src={NetworkLogo} className="w-36 mt-7" />
                  <p className="font-bold text-xl relative ml-1">Change Pin</p>
                  {/* <SelectData />
            <SelectDataPlan /> */}
                  <div className="mt-7">
                    <label className="top-5 relative">Current Pin</label>
                    <br />

                    <input
                      type="text"
                      className="border-2 h-12 pl-10 w-screen-6 lg:w-screen-2 mt-9 focus:outline-none"
                    />
                  </div>
                  <div className="mt-7">
                    <label>New Pin</label>
                    <br />
                    <input
                      type="text"
                      className="border-2 pl-10 h-12 w-screen-6 lg:w-screen-2 mt-3 focus:outline-none"
                    />
                  </div>
                  <button
                    className="text-white px-10 py-3 mt-12 rounded-sm"
                    style={{ backgroundColor: myCustomColor }}
                  >
                    Proceed
                  </button>
                </div>
              )}

              {showAdditionalDiv8 && (
                <div className="relative left-11 w-96 h-screen-3 lg:overflow-visible">
                  <img src={NetworkLogo} className="w-36 mt-7" />
                  <p className="font-bold text-xl relative -ml-3 lg:-ml-1">
                    Instant Wallet Funding
                  </p>
                  <div className="lg:w-screen-3 relative lg:right-0 right-8 z-0 pr-10 lg:pr-0 text-sm bg-blue-200 py-3 pl-5 font-semibold mt-6">
                    <p>
                      Make transfer into any of the account number below and
                      your wallet will be credited instantly. PS: ₦50 bank
                      charges applies.
                    </p>
                    <p className="text-red-500">
                      Minimum (₦500) and Maximum(₦500,000). Payment above
                      ₦500,000 should be made into our corporate bank account. .
                    </p>
                  </div>
                  <div className="flex space-x-2 mt-5 w-screen-2 relative right-4 lg:right-0">
                    <div className="w-80 lg:h-36 h-28 shadow-lg p-2">
                      <img
                        src={WemaLogo}
                        className="w-36 relative left-0 lg:left-3 mb-2"
                      />
                      <hr />
                      <p className="ml-2 mt-1">9264991749</p>
                    </div>
                    <div className="lg:w-80 lg:h-36 h-28 shadow-lg p-2">
                      <img
                        src={SterlingLogo}
                        className="w-36 relative lg:left-3 lg:mb-10 mb-7 mt-5"
                      />
                      <hr />
                      <p className="ml-2 mt-1">9264991749</p>
                    </div>
                    <div className="w-80 lg:h-36 h-28 shadow-lg p-2">
                      <img
                        src={MoniepointLogo}
                        className="w-36 relative lg:left-3 lg:mb-10 mb-8 mt-4"
                      />
                      <hr />
                      <p>9264991749</p>
                    </div>
                  </div>
                  <div className="mt-7 -z-10">
                    <label className="top-5 relative">Amount</label>
                    <br />
                    <span className="border-2 px-3 py-3 top-16 mt-4 relative">
                      &#x20A6;
                    </span>
                    <span className="border-2 px-2 py-3 top-16 relative left-[60px] lg:left-[21.6pc] lg:ml-[60%] ml-48 ">
                      .00
                    </span>
                    <input
                      type="text"
                      className="border-2 h-12  pl-10 lg:w-screen-2 w-screen-6 mt-7 focus:outline-none"
                    />
                  </div>
                  <div className="mt-7">
                    <label>How do you want to pay?</label>
                    <br />
                    <div className="flex space-x-3">
                      <input
                        type="radio"
                        className="border-2 pl-10 h-12 mt-3 focus:outline-none"
                      />
                      <p className="mt-6 font-bold">ATM Card</p>

                      <input
                        type="radio"
                        className="border-2 pl-10 h-12 mt-3 focus:outline-none"
                      />
                      <p className="mt-6 font-bold">Cash Deposit/Transfer</p>
                    </div>
                  </div>
                  <button
                    className="text-white px-10 py-3 mt-12 rounded-sm"
                    style={{ backgroundColor: myCustomColor }}
                  >
                    Proceed
                  </button>
                  <img src={Paystack} className="w-60 mt-5" />
                </div>
              )}
              {showAdditionalDiv13 && (
                <div className="relative left-11 w-96 h-screen-3 lg:overflow-visible">
                 
                  <div className="flex space-x-2 mt-10  w-screen-2 lg:w-[240%] relative right-4 lg:right-0">
                    <div className="w-80 lg:w-72 lg:h-40  h-28 border shadow-lg p-2">
                      <img
                        src={Buydatalogo}
                        className="w-16 relative lg:top-2 left-0 lg:left-[38%] mb-2"
                      />
                      {/* <hr /> */}
                      <p className="ml-2 mt-1 lg:left-14 lg:top-2 relative">Buy Data</p>
                    </div>
                    <div className="w-80 lg:w-72 lg:h-40 border h-28 shadow-lg p-2">
                      <img
                        src={Buyairtimelogo}
                        className="w-36 relative left-0 lg:left-6 mb-2"
                      />
                      {/* <hr /> */}
                      <p className="ml-2 mt-1 lg:left-14 relative">Buy Airtime</p>
                    </div>
                    <div className="lg:w-72 lg:h-40 border h-28 shadow-lg p-2">
                      <img
                        src={Tvsublogo}
                        className="w-36 relative lg:left-8 lg:-top-3 lg:mb-10 mb-7 mt-5"
                      />
                      {/* <hr /> */}
                      <p className="ml-2 mt-1 lg:-top-11 lg:left-8 relative">TV Subscription</p>
                    </div>
                    <div className="w-80 lg:w-72 lg:h-40 border h-28 shadow-lg p-2">
                      <img
                        src={Electricitybillslogo}
                        className="w-16 relative lg:left-16 lg:mb-10 mb-8 mt-4"
                      />
                      {/* <hr /> */}
                      <p className="lg:-top-5 lg:left-14 relative">Electricity Bills</p>
                    </div>
                  </div>
                  
                  {/* <button
                    className="text-white px-10 py-3 mt-12 rounded-sm"
                    style={{ backgroundColor: myCustomColor }}
                  >
                    Proceed
                  </button> */}
                  {/* <img src={Paystack} className="w-60 mt-5" /> */}
                </div>
              )}

              {showAdditionalDiv9 && (
                <div className="relative left-11 w-screen-2 h-screen">
                  <p className="font-semibold relative top-1 mt-4 whitespace-nowrap">
                    Please Confirm your Transaction Details
                  </p>
                  <img src={NetworkLogo} className="w-36 mt-7" />

                  <div className="mt-7">
                    <hr className="lg:w-screen-2 w-80" />
                    <p
                      className="float-right relative lg:right-36 -right-32 p-2"
                      style={
                        {
                          // left: `${LeftValue}px`,
                        }
                      }
                    >
                      {SimType} {Amount}
                    </p>
                    <p className="pl-3 p-2">Product</p>
                    <hr className="lg:w-screen-2 w-80" />
                    <p className="float-right relative lg:right-28 -right-36 p-2 mr-2">
                      07038012912
                    </p>
                    <p className="pl-3 p-2">Phone</p>
                    <hr className="lg:w-screen-2 w-80" />
                    <p className="float-right relative lg:right-40 -right-24 mr-4 p-2">
                      &#x20A6;260
                    </p>
                    <p className="pl-3 p-2">Amount</p>
                    <hr className="lg:w-screen-2 w-80" />
                    <p className="float-right relative lg:right-48 -right-16 mr-2 p-2">
                      &#x20A6;
                    </p>
                    <p className="pl-3 p-2">Discount</p>
                    <hr className="lg:w-screen-2 w-80" />
                    <p className="float-right relative lg:right-16 -right-44 top-8 lg:top-0 text-sm lg:text-base mr-2 p-2">
                      6887094653971120
                    </p>
                    <p className="pl-3 p-2">Transaction ID</p>
                    <hr className="lg:w-screen-2 w-80" />
                    <p className="float-right relative lg:right-36 -right-28 mr-2 p-2">
                      Pending
                    </p>
                    <p className="pl-3 p-2">Status</p>
                    <hr className="lg:w-screen-2 w-80" />
                  </div>
                  <button
                    className="text-white px-10 py-3 mt-12 rounded-sm"
                    style={{ backgroundColor: myCustomColor }}
                  >
                    Confirm
                  </button>
                </div>
              )}

              {showAdditionalDiv10 && (
                <div className="relative left-11 w-screen-2 h-screen">
                  <p className="font-semibold relative top-1 mt-4 ">
                    Please Confirm your Transaction Details
                  </p>
                  <img src={NetworkLogo} className="w-36 mt-7" />

                  <div className="mt-7">
                    <hr />
                    <p className="float-right relative right-36 p-2">
                      {SimType} {Amount}
                    </p>
                    <p className="pl-3 p-2">Product</p>
                    <hr />
                    <p className="float-right relative right-28 p-2 mr-2">
                      07038012912
                    </p>
                    <p className="pl-3 p-2">IUC</p>
                    <hr />
                    <p className="float-right relative right-40 mr-4 p-2">
                      &#x20A6;2,800
                    </p>
                    <p className="pl-3 p-2">Amount</p>
                    <hr />
                    <p className="float-right relative right-48 mr-2 p-2">
                      &#x20A6;
                    </p>
                    <p className="pl-3 p-2">Discount</p>
                    <hr />
                    <p className="float-right relative right-16 mr-2 p-2">
                      6887094653971120
                    </p>
                    <p className="pl-3 p-2">Transaction ID</p>
                    <hr />
                    <p className="float-right relative right-36 mr-2 p-2">
                      Pending
                    </p>
                    <p className="pl-3 p-2">Status</p>
                  </div>
                  <button
                    className="text-white px-10 py-3 mt-12 rounded-sm"
                    style={{ backgroundColor: myCustomColor }}
                  >
                    Confirm
                  </button>
                </div>
              )}

              {showAdditionalDiv11 && (
                <div className="relative left-11 w-screen-2 h-screen-3">
                  <p className="font-semibold relative top-1 mt-4 whitespace-nowrap ">
                    Please Confirm your Transaction Details
                  </p>
                  <img src={NetworkLogo} className="w-36 mt-7" />

                  <div className="mt-7">
                    <hr className="lg:w-screen-2 w-80" />

                    <p
                      className="float-right relative p-2 -right-16 lg:right-32"
                      style={
                        {
                          // left: `${LeftValue}vw`,
                          // left: `${MobileLeftValue}px`,
                          // Assuming LeftValue is a number representing pixels
                        }
                      }
                    >
                      Electricity
                    </p>
                    <p className="pl-3 p-2">Product</p>
                    <hr className="lg:w-screen-2 w-80" />

                    <p className="float-right relative lg:right-7 -right-40 top-8 lg:top-0 p-2 mr-2">
                      BEDC Benin Electricity
                    </p>
                    <p className="pl-3 p-2">Disco</p>
                    <hr className="lg:w-screen-2 w-80" />

                    <p className="float-right relative lg:right-28 -right-20 mr-6 p-2">
                      Prepaid
                    </p>
                    <p className="pl-3 p-2 whitespace-nowrap">Meter Type</p>
                    <hr className="lg:w-screen-2 w-80" />

                    <p className="float-right relative lg:right-16 -right-32 lg:top-0 top-9 mr-4 p-2">
                      1234567898654
                    </p>
                    <p className="pl-3 p-2">Meter Number</p>
                    <hr className="lg:w-screen-2 w-80" />

                    <p className="float-right relative lg:right-32 -right-16 mr-4 p-2">
                      &#x20A6;3,000
                    </p>
                    <p className="pl-3 p-2">Amount</p>
                    <hr className="lg:w-screen-2 w-80" />

                    <p className="float-right relative lg:right-40 -right-8 mr-6 p-2">
                      &#x20A6;
                    </p>
                    <p className="pl-3 p-2">Discount</p>
                    <hr className="lg:w-screen-2 w-80" />

                    <p className="float-right relative lg:right-12 -right-36 lg:top-0 top-8 mr-2 p-2">
                      6887094653971120
                    </p>
                    <p className="pl-3 p-2">Transaction ID</p>
                    <hr className="lg:w-screen-2 w-80" />

                    <p className="float-right relative lg:right-36 -right-12 -mr-2 p-2">
                      Pending
                    </p>
                    <p className="pl-3 p-2">Status</p>
                    <hr className="lg:w-screen-2 w-80" />
                  </div>
                  <button
                    className="text-white px-10 py-3 mt-12 rounded-sm"
                    style={{ backgroundColor: myCustomColor }}
                  >
                    Confirm
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardTemp;
