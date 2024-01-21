// import React from 'react'
import { useState, useEffect, useRef } from "react";
import {
  faChevronRight,
  faBars,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DropdownMenuDashboard from "./DropdownMenuDashboard";
import Profilebottom from "../Media/profilebottom.png";
import Profile from "../Media/profile.png";
import { Link } from "react-router-dom";
import Settingspost from "../Media/settingspost.png";
import Settingslogout from "../Media/settingslogout.png";
import Settingsnotification from "../Media/settingsnotification.png";
import Settingstransaction from "../Media/settingstransaction.png";
import Settingsprofile from "../Media/bluesettingsprofile.png";

function SettingsDashboard({
  submitValue,
  // myCustomColor,
  myCustomColor1,
  myCustomColor2,
  myCustomColor3,

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
      <div className="h-screen-5">
        <div className="">
          <p className="text-2xl font-bold relative top-7 left-5 lg:left-16 lg:ml-3 lg:text-2xl lg:w-96 z-50 w-40 ">
            Setting
          </p>
          <div className="fixed  pt-24 lg:border-r lg:h-screen lg:top-24 lg:-mt-2 bg-white hidden lg:block">
            <Link to="/SettingsTemp">
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
                <img src={Settingsnotification} className="w-7" />
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
                <img src={Settingstransaction} className="w-7" />
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
                <img src={Settingspost} className="w-7" />
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
                className="text-black h-6 relative float-right right-[5%] -ml-3 lg:-ml-0 lg:left-0"
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

          <div className="relative top-12 left-5 lg:left-64 lg:ml-5 w-80 lg:top-0 lg:w-80">
            <p className="text-[#035FCE] font-bold lg:text-lg">
              Profile Setting
            </p>
            <hr className="mt-6 relative right-5 lg:w-screen-8" />
            <div className="rounded-full justify-center h-20 border mt-5 bg-green-400 w-20 overflow-hidden">
              <img src={Profile} className="w-20 overflow-hidden" />
              <img
                src={Profilebottom}
                className="w-16 relative left-2 -top-4"
              />
            </div>
            <div className="mt-7">
              <label>First name</label>
              <br />
              <input
                type="text"
                className="pl-4 placeholder-gray-600 mt-2 h-12 w-screen-7 lg:w-80 border-2 focus:outline-none"
                placeholder="Bright"
              />
              {/* <br/> */}
            </div>
            <div className="mt-7 lg:-mt-20 lg:ml-96">
              <label className="whitespace-nowrap">Last name</label>
              <br />
              <input
                type="text"
                className="pl-4 placeholder-gray-600 mt-2 h-12 w-screen-7 lg:w-80 border-2 focus:outline-none"
                placeholder="Moses"
              />
              {/* <br/> */}
            </div>
            <div className="mt-7">
              <label>Email</label>
              <br />
              <input
                type="email"
                className="pl-4 placeholder-gray-600 mt-2 h-12 w-screen-7 lg:w-80 border-2 focus:outline-none"
                placeholder="example@gmail.com"
              />
              {/* <br/> */}
            </div>
            <div className="mt-7 lg:-mt-20 lg:ml-96">
              <label>Status</label>
              <br />
              <input
                type="text"
                className="pl-4 placeholder-gray-600 mt-2 h-12 w-screen-7 lg:w-80 border-2 focus:outline-none"
                placeholder="Agent"
              />
              {/* <br/> */}
            </div>

            <div className="mt-7">
              <label>About</label>
              <br />
              <textarea
                type="text"
                className="pl-4 placeholder-gray-600 mt-2 h-screen-4 w-screen-7 lg:w-screen-9 border-2 focus:outline-none pt-2"
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
                  className="bg-[#035FCE] text-white placeholder-gray-600 mt-2 h-12 w-40 rounded focus:outline-none float-right relative lg:-right-96"
                  value={submitValue}
                />
              </Link>
              {/* <br/> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SettingsDashboard;
