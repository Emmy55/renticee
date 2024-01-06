import React, { useEffect, useRef, useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";

// Images import start
import Logo from "../assets/images/logo.svg";
import DropdownMenu from "./home/DropdownMenu";

function Header() {
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
    <div className="">
      <nav className="px-5 bg-blue-rgba flex items-center justify-between lg:px-[5.5%] lg:h-[92px] lg:backdrop-blur w-[100%]">
        <div className="lg:flex lg:items-center ">
          <div>
            <img
              src={Logo}
              alt="Logo"
              className="py-3 lg:pt-0 lg:linkHover cursor-pointer"
            />
          </div>
          <div className="hidden lg:flex lg:pl-[30px] lg:gap-[35px]">
            <p className="lg:link lg:linkHover font-Roboto">Home</p>
            <p className="lg:link lg:linkHover font-Roboto">Real Estate</p>
            <p className="lg:link lg:linkHover font-Roboto">Bill Payments</p>
            <p className="lg:link lg:linkHover font-Roboto">House Loan</p>
            <p className="lg:link lg:linkHover font-Roboto">Insurance</p>
            <p className="lg:link lg:linkHover font-Roboto">Logistics</p>
            <p className="lg:link lg:linkHover font-Roboto">Blog</p>
          </div>
        </div>

        <div className="hidden lg:flex lg:gap-[18px]">
          <p className="lg:linkHover font-Roboto cursor-pointer lg:w-[105px] lg:h-[33px] lg:rounded-[33.5px] border-[0.84px] border-white lg:flex lg:items-center lg:justify-center text-white text-[0.8369rem] font-semibold">
            Login
          </p>
          <p className="lg:linkHover font-Roboto cursor-pointer lg:w-[105px] lg:h-[33px] lg:rounded-[33.5px] lg:bg-white lg:flex lg:items-center lg:justify-center text-[#035FCE] text-[0.8369rem] font-semibold">
            Sign up
          </p>
        </div>
        {/* Toogle Menu start */}
        <div className="relative lg:hidden ">
          {showCloseMenu ? (
            <FontAwesomeIcon
              className="text-[#fff] h-6 z-10"
              icon={faClose}
              onClick={toggleMenu}
            />
          ) : (
            <FontAwesomeIcon
              className="text-[#fff] h-6"
              icon={faBars}
              onClick={toggleMenu}
            />
          )}
          {openMenu && (
            <div
              className="fixed top-0 left-0 w-[100%] h-[100%] bg-b opacity-70   via-transparent from-gray-100 to-gray-100"
              onClick={toggleMenu}
            />
          )}
          <div className="z-10 absolute right-0">
            {openMenu && <DropdownMenu />}
          </div>
        </div>
        {/* Toogle Menu end */}
      </nav>
    </div>
  );
}

export default Header;
