import React, { useEffect, useRef, useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

import TopMenuBar from "./images/top-menu.svg";
import ProfileDropDown from "./ProfileDropDown";

function TopMenu() {
  const [openMenu, setOpenMenu] = useState(false);
  const [showCloseMenu, setShowCloseMenu] = useState(false);

  const closeNav = () => {
    setOpenMenu(false);
    setShowCloseMenu(false);
  };

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
    <div className="relative z-10">
      <div className="px-5 py-5 flex items-center justify-between">
        <p className="text-[1.75rem] font-bold text-[#282D3A] font-Roboto">
          Setting
        </p>
        {/* <img src={TopMenuBar} alt="" /> */}
        {/* Toogle Menu start */}
        <div className="relative lg:hidden ">
          {showCloseMenu ? (
            <FontAwesomeIcon
              className="text-[#000] h-6 z-10"
              icon={faClose}
              onClick={toggleMenu}
            />
          ) : (
            <img src={TopMenuBar} alt="" onClick={toggleMenu} />
          )}
          {openMenu && (
            <div
              className="fixed top-0 left-0 w-[100%] h-[100%] bg-b opacity-70   via-transparent from-gray-100 to-gray-100"
              onClick={toggleMenu}
            />
          )}
          <div className="z-10 absolute right-0">
            {openMenu && <ProfileDropDown close={closeNav} />}
          </div>
        </div>
        {/* Toogle Menu end */}
      </div>
    </div>
  );
}

export default TopMenu;
