// import React from 'react'
import { useState, useEffect, useRef } from "react";
import {
  faChevronRight,
  faBars,
  faClose,
  faLocationDot,
  faVideo,
  faCamera,
  faCar,
  faBath,
  faMaximize,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DropdownMenuDashboard from "./DropdownMenuDashboard";
import Profilebottom from "../Media/profilebottom.png";
import Profile from "../Media/profile.png";
import { Link } from "react-router-dom";
import Toggle from "./Toggle";
import House from "../Media/house.png";
import Maria from "../Media/maria.png";
import HouseShadow from "../Media/houseshadow.png";
import Editpen from "../Media/editpen.png";
import Camera from "../Media/camera.png";
import Settingspost from "../Media/settingspost.png";
import Settingslogout from "../Media/settingslogout.png";
import Settingsnotification from "../Media/settingsnotification.png";
import Settingstransaction from "../Media/settingstransaction.png";
import Settingsprofile from "../Media/settingsprofile.png";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import {
//   faLocationDot,
//   faVideo,
//   faCamera,
//   faCar,
//   faBath,
//   faMaximize,
//   // faEnvelopeOpenText,
//   // faChevronLeft,
//   // faChevronRight,
//   // faAnglesRight,
//   // faMagnifyingGlass,
// } from "@fortawesome/free-solid-svg-icons";
function SettingsNotification({
  showAdditionalDiv,
  showAdditionalDiv1,
  showAdditionalDiv2,
  showAdditionalDiv3,
  myCustomColor,
  myCustomColor1,
  myCustomColor2,
  myCustomColor3,
  PostImage,
  PostImage1,
  PostImage2,
  PostImage3,
  submitText,
}) {
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
      <div className="min-h-screen">
        <div className="">
          <p className="text-2xl font-bold relative top-7 left-5 lg:left-16 lg:ml-3 lg:text-2xl lg:w-96 z-50 w-40 ">
            Setting
          </p>
          <div className="fixed  pt-24 lg:border-r lg:h-screen lg:top-24 lg:-mt-2 bg-white hidden lg:block">
            <Link to="/SettingsDashboard">
              <div className="w-60 pb-10 relative lg:left-16 lg:ml-3 cursor-pointer">
                <p
                  className="float-right relative lg:right-36 lg:mt- lg:text-lg"
                  style={{ color: myCustomColor }}
                >
                  Profile
                </p>
                <img src={Settingsprofile} className="w-7" />
              </div>
            </Link>
            <Link to="/SettingsNotification">
              <div className="w-60 pb-10 relative lg:left-16 lg:ml-3 cursor-pointer">
                <p
                  className="float-right relative lg:right-24 lg:mr-1 lg:text-lg"
                  style={{ color: myCustomColor1 }}
                >
                  Notification
                </p>
                <img src={PostImage1} className="w-7" />
              </div>
            </Link>
            <Link to="/SettingsTransaction">
              <div className="w-60 pb-10 relative lg:left-16 lg:ml-3 cursor-pointer">
                <p
                  className="float-right relative lg:right-24 lg:mr-2 lg:text-lg"
                  style={{ color: myCustomColor2 }}
                >
                  Transaction
                </p>
                <img src={PostImage2} className="w-7" />
              </div>
            </Link>
            <Link to="/SettingsPost">
              <div className="w-60 pb-10 relative lg:left-16 lg:ml-3 cursor-pointer">
                <p
                  className="float-right relative lg:right-40 lg:mt- lg:text-lg"
                  style={{ color: myCustomColor3 }}
                >
                  Post
                </p>
                <img src={PostImage3} className="w-7" />
              </div>
            </Link>
            <div className="w-60 pb-10 relative lg:left-16 lg:ml-3 cursor-pointer">
              <p className="float-right relative lg:right-36 lg:-mr-2 lg:text-lg">
                Logout
              </p>
              <img src={Settingslogout} className="w-7" />
            </div>
          </div>

          <div className="lg:hidden ">
            {showCloseMenu ? (
              <FontAwesomeIcon
                className="text-black h-6 relative left-[93%] -ml-3 lg:-ml-0 lg:left-0 "
                icon={faClose}
                onClick={toggleMenu}
              />
            ) : (
              <FontAwesomeIcon
                className="text-black h-6 relative float-right right-[5%] z-50 -ml-3 lg:-ml-0 lg:left-0"
                icon={faBars}
                onClick={toggleMenu}
              />
            )}
            {openMenu && (
              <div
                className="fixed z-50 top-0 left-0 w-[100%] h-[100%] bg-b opacity-70   via-transparent from-gray-100 to-gray-100"
                onClick={toggleMenu}
              />
            )}
            <div className="z-50 absolute right-12">
              {openMenu && <DropdownMenuDashboard />}
            </div>
          </div>
        </div>

        {showAdditionalDiv && (
          <div className="relative mb-60 top-12 left-5 lg:left-64 lg:ml-5 w-80 lg:top-0 lg:w-80">
            <p className="text-[#035FCE] font-bold lg:text-lg">Notification Setting</p>
            <hr className="mt-6 relative right-5 lg:w-screen-8" />

            <div className="mt-5 lg:mt-10">
              <p className="font-bold text-lg mb-3">Email Notification</p>
              <p className="w-80">
                Get emails to find out what’s going on when you are not online.
                You can turn these off
              </p>
              <div className="lg:left-96 lg:relative lg:-top-16">
                <div className="mt-7 flex space-x-4">
                  <Toggle />
                  <div className="relative bottom-2 text-sm">
                    <p className="font-bold ">News and updates</p>
                    <p>News about product and feature updates</p>
                  </div>
                </div>
                <div className="mt-7 flex space-x-4">
                  <Toggle />
                  <div className="relative bottom-2 text-sm">
                    <p className="font-bold ">Reminders</p>
                    <p className="w-72">
                      There are notifications to remind you of updates you might
                      have missed
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <hr className="mt-6 lg:-mt-5 relative right-5 lg:w-screen-8" />

            <div className="mt-5 lg:mt-10">
              <p className="font-bold text-lg mb-3">Push Notification</p>
              <p className="w-80">
                Get push notification in-app to find out what’s going on when
                you’re online
              </p>
              <div className="lg:left-96 lg:relative lg:-top-16">
              <div className="mt-7 flex space-x-4">
                <Toggle />
                <div className="relative bottom-2 text-sm">
                  <p className="font-bold ">Post Like</p>
                  <p className="w-72">
                    Get notified every time someone likes your post
                  </p>
                </div>
              </div>
              <div className="mt-7 flex space-x-4">
                <Toggle />
                <div className="relative bottom-2 text-sm">
                  <p className="font-bold ">Reminders</p>
                  <p className="w-72">
                    There are notifications to remind you of updates you might
                    have missed
                  </p>
                </div>
              </div>
              </div>
            </div>
            <div className="mt-7">
              {/* <label>First name</label> */}
              <br />
              <Link to="/SaveChanges">
                <input
                  type="submit"
                  className="bg-[#C2C7D0] text-white placeholder-gray-600 mt-2 h-12 w-40 rounded focus:outline-none float-right relative right-10 lg:-right-96 lg:-top-20"
                  value="Save changes"
                />
              </Link>
              {/* <br/> */}
            </div>
          </div>
        )}

        {showAdditionalDiv1 && (
          <div>
          <div className="relative mb-60 top-12 left-5 lg:left-64 lg:ml-5 w-96 lg:top-0 lg:w-screen-4">
              <p className="text-[#035FCE] font-bold lg:text-lg">Property</p>
              <p className="text-[#035FCE] font-semibold float-right relative bottom-5 right-12 lg:right-20 ">
                Post property
              </p>
              <hr className="mt-6 relative right-5 lg:w-screen-8" />

              <div className="lg:flex lg:flex-wrap lg:space-x-4">
              <div className="shadow-lg h-4/6 ml-1 w-80 relative mt-8  ">
                <img
                  src={Editpen}
                  className="w-16 -top-1 absolute left-64 z-50 "
                />
                <img src={House} className="w-96 " />
                <div className="z-50 ml-6 lg:w-96 w-80 right-4 text-xs relative -top-7 text-white flex">
                  <p>
                    {" "}
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      className="pr-2"
                    />{" "}
                    Design District, Miami
                  </p>
                  <FontAwesomeIcon
                    icon={faVideo}
                    className="relative left-28 top-1 pr-3"
                  />
                  <FontAwesomeIcon
                    icon={faCamera}
                    className="relative left-28 top-1"
                  />
                  <p className="relative left-28 ml-1 top-0">9</p>
                </div>
                <div className="z-50 lg:w-96 w-80 pl-2 p-3 pt-6">
                  <h1 className="text-xl font-semibold">
                    Villa On Washington Ave
                  </h1>
                  <p className="text-blue-600 pt-2">$ 5,500,000</p>
                  <p className="text-zinc-600 pt-5 text-sm w-80">
                    Beautiful, updated, ground level Co-op apartment in the
                    desirable Bay Terrace neighborhood ...
                  </p>
                  <div className="flex space-x-6 mt-4 text-sm text-zinc-400 mb-12 ">
                    <FontAwesomeIcon icon={faCar} />{" "}
                    <p className="relative right-4 -top-1">5</p>
                    <FontAwesomeIcon icon={faBath} />{" "}
                    <p className="relative right-4 -top-1">3</p>
                    <FontAwesomeIcon icon={faMaximize} />{" "}
                    <p className="relative right-4 -top-1">
                      250ft<sup>2</sup>
                    </p>
                  </div>
                </div>
                {/* <img
                  src={HouseShadow}
                  className="w-96 relative -top-60 -mt-96"
                /> */}
              </div>
              <div className="shadow-lg h-4/6 ml-1 w-80 relative mt-8 lg:ml-4">
                <img
                  src={Editpen}
                  className="w-16 -top-1 absolute left-64 z-50 "
                />
                <img src={House} className="w-96 " />
                <div className="z-50 ml-6 lg:w-96 w-80 right-4 text-xs relative -top-7 text-white flex">
                  <p>
                    {" "}
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      className="pr-2"
                    />{" "}
                    Design District, Miami
                  </p>
                  <FontAwesomeIcon
                    icon={faVideo}
                    className="relative left-28 top-1 pr-3"
                  />
                  <FontAwesomeIcon
                    icon={faCamera}
                    className="relative left-28 top-1"
                  />
                  <p className="relative left-28 ml-1 top-0">9</p>
                </div>
                <div className="z-50 lg:w-96 w-80 pl-2 p-3 pt-6">
                  <h1 className="text-xl font-semibold">
                    Villa On Washington Ave
                  </h1>
                  <p className="text-blue-600 pt-2">$ 5,500,000</p>
                  <p className="text-zinc-600 pt-5 text-sm w-80">
                    Beautiful, updated, ground level Co-op apartment in the
                    desirable Bay Terrace neighborhood ...
                  </p>
                  <div className="flex space-x-6 mt-4 text-sm text-zinc-400 mb-12 ">
                    <FontAwesomeIcon icon={faCar} />{" "}
                    <p className="relative right-4 -top-1">5</p>
                    <FontAwesomeIcon icon={faBath} />{" "}
                    <p className="relative right-4 -top-1">3</p>
                    <FontAwesomeIcon icon={faMaximize} />{" "}
                    <p className="relative right-4 -top-1">
                      250ft<sup>2</sup>
                    </p>
                  </div>
                </div>
                {/* <img
                  src={HouseShadow}
                  className="w-96 relative -top-60 -mt-96"
                /> */}
              </div>
              <div className="shadow-lg h-4/6 ml-1 w-80 relative mt-8 lg:ml-4">
                <img
                  src={Editpen}
                  className="w-16 -top-1 absolute left-64 z-50 "
                />
                <img src={House} className="w-96 " />
                <div className="z-50 ml-6 lg:w-96 w-80 right-4 text-xs relative -top-7 text-white flex">
                  <p>
                    {" "}
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      className="pr-2"
                    />{" "}
                    Design District, Miami
                  </p>
                  <FontAwesomeIcon
                    icon={faVideo}
                    className="relative left-28 top-1 pr-3"
                  />
                  <FontAwesomeIcon
                    icon={faCamera}
                    className="relative left-28 top-1"
                  />
                  <p className="relative left-28 ml-1 top-0">9</p>
                </div>
                <div className="z-50 lg:w-96 w-80 pl-2 p-3 pt-6">
                  <h1 className="text-xl font-semibold">
                    Villa On Washington Ave
                  </h1>
                  <p className="text-blue-600 pt-2">$ 5,500,000</p>
                  <p className="text-zinc-600 pt-5 text-sm w-80">
                    Beautiful, updated, ground level Co-op apartment in the
                    desirable Bay Terrace neighborhood ...
                  </p>
                  <div className="flex space-x-6 mt-4 text-sm text-zinc-400 mb-12 ">
                    <FontAwesomeIcon icon={faCar} />{" "}
                    <p className="relative right-4 -top-1">5</p>
                    <FontAwesomeIcon icon={faBath} />{" "}
                    <p className="relative right-4 -top-1">3</p>
                    <FontAwesomeIcon icon={faMaximize} />{" "}
                    <p className="relative right-4 -top-1">
                      250ft<sup>2</sup>
                    </p>
                  </div>
                </div>
                {/* <img
                  src={HouseShadow}
                  className="w-96 relative -top-60 -mt-96"
                /> */}
              </div>
              <div className="shadow-lg h-4/6 ml-1 w-80 relative mt-8 lg:right-3">
                <img
                  src={Editpen}
                  className="w-16 -top-1 absolute left-64 z-50 "
                />
                <img src={House} className="w-96 " />
                <div className="z-50 ml-6 lg:w-96 w-80 right-4 text-xs relative -top-7 text-white flex">
                  <p>
                    {" "}
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      className="pr-2"
                    />{" "}
                    Design District, Miami
                  </p>
                  <FontAwesomeIcon
                    icon={faVideo}
                    className="relative left-28 top-1 pr-3"
                  />
                  <FontAwesomeIcon
                    icon={faCamera}
                    className="relative left-28 top-1"
                  />
                  <p className="relative left-28 ml-1 top-0">9</p>
                </div>
                <div className="z-50 lg:w-96 w-80 pl-2 p-3 pt-6">
                  <h1 className="text-xl font-semibold">
                    Villa On Washington Ave
                  </h1>
                  <p className="text-blue-600 pt-2">$ 5,500,000</p>
                  <p className="text-zinc-600 pt-5 text-sm w-80">
                    Beautiful, updated, ground level Co-op apartment in the
                    desirable Bay Terrace neighborhood ...
                  </p>
                  <div className="flex space-x-6 mt-4 text-sm text-zinc-400 mb-12 ">
                    <FontAwesomeIcon icon={faCar} />{" "}
                    <p className="relative right-4 -top-1">5</p>
                    <FontAwesomeIcon icon={faBath} />{" "}
                    <p className="relative right-4 -top-1">3</p>
                    <FontAwesomeIcon icon={faMaximize} />{" "}
                    <p className="relative right-4 -top-1">
                      250ft<sup>2</sup>
                    </p>
                  </div>
                </div>
                {/* <img
                  src={HouseShadow}
                  className="w-96 relative -top-60 -mt-96"
                /> */}
              </div>

              
              </div>
            </div>
          </div>
        )}

        {showAdditionalDiv2 && (
          <div className="relative mb-60 top-12 left-5 lg:left-64 lg:ml-5 w-96 lg:top-0 lg:w-screen-4">
            <p className="text-[#035FCE] font-bold lg:text-lg">Edit Post</p>
            <p className="text-[#035FCE] font-semibold float-right relative bottom-5 right-12 lg:right-20">
              Post property
            </p>
            <div className="w-screen-7 lg:w-96 mt-12">
              <img src={House} className=" rounded-xl " />
              <img
                src={Camera}
                className="w-20 absolute top-52 left-60 lg:top-56 lg:mt-2 lg:left-72 z-50 "
              />
              <p className="ml-3">
                Upload up to 8 images, each image should not be more than 2MB in
                size{" "}
              </p>
            </div>
            <div className="mt-7 lg:w-80">
              <label className="text-xs">ADDRESS</label>
              <br />
              <input
                type="text"
                className="pl-4 placeholder-gray-600 mt-2 h-12 w-screen-7 lg:w-96 border-2 focus:outline-none"
                placeholder=""
              />
              {/* <br/> */}
            </div>
            <div className="mt-7 lg:-mt-20 lg:left-96 lg:relative lg:ml-32 lg:w-80 ">
              <label className="text-xs">TYPE</label>
              <br />
              <input
                type="text"
                className="pl-4 placeholder-gray-600 mt-2 h-12 w-screen-7 lg:w-96 border-2 focus:outline-none"
                placeholder=""
              />
              {/* <br/> */}
            </div>
            <div className="mt-7 lg:w-80">
              <label className="text-xs">BEDROOM</label>
              <br />
              <input
                type="text"
                className="pl-4 placeholder-gray-600 mt-2 h-12 w-screen-7 lg:w-96 border-2 focus:outline-none"
                placeholder=""
              />
              {/* <br/> */}
            </div>
            <div className="mt-7 lg:-mt-20 lg:left-96 lg:relative lg:ml-32 lg:w-80 ">
              <label className="text-xs">BATHROOM</label>
              <br />
              <input
                type="text"
                className="pl-4 placeholder-gray-600 mt-2 h-12 w-screen-7 lg:w-96 border-2 focus:outline-none"
                placeholder=""
              />
              {/* <br/> */}
            </div>
            <div className="mt-7 lg:w-80">
              <label className="text-xs">FT</label>
              <br />
              <input
                type="text"
                className="pl-4 placeholder-gray-600 mt-2 h-12 w-screen-7 lg:w-96 border-2 focus:outline-none"
                placeholder=""
              />
              {/* <br/> */}
            </div>
            <div className="mt-7 lg:-mt-20 lg:left-96 lg:relative lg:ml-32 lg:w-80 ">
              <label className="text-xs">CATEGORY</label>
              <br />
              <input
                type="text"
                className="pl-4 placeholder-gray-600 mt-2 h-12 w-screen-7 lg:w-96 border-2 focus:outline-none"
                placeholder=""
              />
              {/* <br/> */}
            </div>
            <div className="mt-7 lg:w-80">
              <label className="text-xs">PHONE NUMBER</label>
              <br />
              <input
                type="text"
                className="pl-4 placeholder-gray-600 mt-2 h-12 w-screen-7 lg:w-96 border-2 focus:outline-none"
                placeholder=""
              />
              {/* <br/> */}
            </div>
            <div className="mt-7 lg:-mt-24 lg:-top-3 lg:left-96 lg:relative lg:ml-32 lg:w-40  ">
              <label className="top-5 lg:top-7 relative text-xs">PRICE</label>
              <br />
              <span className="border-2 px-3 py-3 top-12 relative">
                &#x20A6;
              </span>
              <span className="border-2 px-2 py-3 top-12 relative left-16 lg:left-96 lg:-ml-[50%]  ml-48 ">
                .00
              </span>
              <input
                type="text"
                className="border-2 h-12 pl-10 lg:w-96 w-screen-7 mt-3 focus:outline-none"
              />
            </div>
            {/* <div className="mt-7">
              <label className="text-xs" >PRICE</label>
              <br />
              <input
                type="text"
                className="pl-4 placeholder-gray-600 mt-2 h-12 w-screen-7 border-2 focus:outline-none"
                placeholder=""
              />
              
            </div> */}
            <div className="mt-7 ">
              <label className="text-xs">DESCRIPTION</label>
              <br />
              <textarea
                type="text"
                className="pl-4 pt-2 placeholder-gray-600 mt-2 h-40 w-screen-7 lg:w-screen-10 border-2 focus:outline-none"
                placeholder=""
              />
              {/* <br/> */}
            </div>

            <div className="mt-7">
              {/* <label>First name</label> */}
              <br />
              <Link to="/SaveChanges">
                <input
                  type="submit"
                  className="bg-[#035FCE] text-xs font-semibold text-white placeholder-gray-600 mt-2 h-12 w-40 rounded focus:outline-none float-right relative right-12  lg:right-40 lg:mr-2"
                  value={submitText}
                />
              </Link>
              {/* <br/> */}
            </div>
          </div>
        )}
        {showAdditionalDiv3 && (
          <div className="relative top-12 left-5 mb-40">
            <p className="text-[#035FCE] font-bold">Edit Post</p>
            {/* <p className="text-[#035FCE] font-semibold float-right relative bottom-5 right-10">
              Post property
            </p> */}
            <div className="w-screen-7 mt-12">
              <img src={House} className=" rounded-xl " />
              <img
                src={Camera}
                className="w-20 absolute top-52 left-60 z-50 "
              />
              <p className="ml-3">
                Upload up to 8 images, each image should not be more than 2MB in
                size{" "}
              </p>
            </div>
            <div className="mt-7">
              <label className="text-xs">ADDRESS</label>
              <br />
              <input
                type="text"
                className="pl-4 placeholder-gray-600 mt-2 h-12 w-screen-7 border-2 focus:outline-none"
                placeholder=""
              />
              {/* <br/> */}
            </div>
            <div className="mt-7">
              <label className="text-xs">TYPE</label>
              <br />
              <input
                type="text"
                className="pl-4 placeholder-gray-600 mt-2 h-12 w-screen-7 border-2 focus:outline-none"
                placeholder=""
              />
              {/* <br/> */}
            </div>
            <div className="mt-7">
              <label className="text-xs">BEDROOM</label>
              <br />
              <input
                type="text"
                className="pl-4 placeholder-gray-600 mt-2 h-12 w-screen-7 border-2 focus:outline-none"
                placeholder=""
              />
              {/* <br/> */}
            </div>
            <div className="mt-7">
              <label className="text-xs">BATHROOM</label>
              <br />
              <input
                type="text"
                className="pl-4 placeholder-gray-600 mt-2 h-12 w-screen-7 border-2 focus:outline-none"
                placeholder=""
              />
              {/* <br/> */}
            </div>
            <div className="mt-7">
              <label className="text-xs">FT</label>
              <br />
              <input
                type="text"
                className="pl-4 placeholder-gray-600 mt-2 h-12 w-screen-7 border-2 focus:outline-none"
                placeholder=""
              />
              {/* <br/> */}
            </div>
            <div className="mt-7">
              <label className="text-xs">CATEGORY</label>
              <br />
              <input
                type="text"
                className="pl-4 placeholder-gray-600 mt-2 h-12 w-screen-7 border-2 focus:outline-none"
                placeholder=""
              />
              {/* <br/> */}
            </div>
            <div className="mt-7">
              <label className="text-xs">PHONE NUMBER</label>
              <br />
              <input
                type="text"
                className="pl-4 placeholder-gray-600 mt-2 h-12 w-screen-7 border-2 focus:outline-none"
                placeholder=""
              />
              {/* <br/> */}
            </div>
            <div className="mt-7">
              <label className="top-5 relative text-xs">PRICE</label>
              <br />
              <span className="border-2 px-3 py-3 top-12 relative">
                &#x20A6;
              </span>
              <span className="border-2 px-2 py-3 top-12 relative left-12 lg:left-96 lg:ml-[70%] ml-48 ">
                .00
              </span>
              <input
                type="text"
                className="border-2 h-12 pl-10 lg:w-screen-2 w-80 mt-3 focus:outline-none"
              />
            </div>
            {/* <div className="mt-7">
              <label className="text-xs" >PRICE</label>
              <br />
              <input
                type="text"
                className="pl-4 placeholder-gray-600 mt-2 h-12 w-screen-7 border-2 focus:outline-none"
                placeholder=""
              />
              
            </div> */}
            <div className="mt-7">
              <label className="text-xs">DESCRIPTION</label>
              <br />
              <textarea
                type="text"
                className="pl-4 placeholder-gray-600 mt-2 h-40 w-screen-7 border-2 focus:outline-none"
                placeholder=""
              />
              {/* <br/> */}
            </div>

            <div className="mt-7">
              {/* <label>First name</label> */}
              <br />
              <Link to="/SaveChanges">
                <input
                  type="submit"
                  className="bg-[#035FCE] text-xs font-semibold text-white placeholder-gray-600 mt-2 h-12 w-40 rounded focus:outline-none float-right relative right-10"
                  value="SAVE CHANGES"
                />
              </Link>
              {/* <br/> */}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default SettingsNotification;
