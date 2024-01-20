import React, { useEffect, useRef, useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";

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
    <div className="relative z-50">
      <nav className="px-5 bg-blue-rgba flex items-center justify-between lg:px-[5%] lg:h-[92px] lg:backdrop-blur w-[100%]">
        <div className="lg:flex lg:items-center ">
          <div>
            <Link to="/">
              <img
                src={Logo}
                alt="Logo"
                className="py-3 lg:pt-0 lg:linkHover cursor-pointer"
              />
            </Link>
          </div>
          <div className="hidden lg:flex lg:pl-[30px] lg:gap-[35px]">
            <p className="lg:link lg:linkHover font-Roboto">
              <NavLink to="/">Home</NavLink>
            </p>
            <p className="lg:link lg:linkHover font-Roboto">
              <NavLink to="/residential">Real Estate</NavLink>
            </p>
            <p className="lg:link lg:linkHover font-Roboto">
              <NavLink to="/mtndata">Bill Payments</NavLink>
            </p>
            <p className="lg:link lg:linkHover font-Roboto">House Loan</p>
            <p className="lg:link lg:linkHover font-Roboto">
              <NavLink to="/houseinsurance">Insurance</NavLink>
            </p>
            <p className="lg:link lg:linkHover font-Roboto">
              <NavLink to="/logistics">Logistics</NavLink>
            </p>
            <p className="lg:link lg:linkHover font-Roboto">
              <NavLink to="/blog">Blog</NavLink>
            </p>
          </div>
        </div>

        <div className="hidden lg:flex lg:gap-[18px]">
          <NavLink to="signin">
            <p className="lg:linkHover font-Roboto cursor-pointer lg:w-[105px] lg:h-[33px] lg:rounded-[33.5px] border-[0.84px] border-white lg:flex lg:items-center lg:justify-center text-white text-[0.8369rem] font-semibold">
              Login
            </p>
          </NavLink>
          <NavLink to="signup">
            <p className="lg:linkHover font-Roboto cursor-pointer lg:w-[105px] lg:h-[33px] lg:rounded-[33.5px] lg:bg-white lg:flex lg:items-center lg:justify-center text-[#035FCE] text-[0.8369rem] font-semibold">
              Sign up
            </p>
          </NavLink>
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
