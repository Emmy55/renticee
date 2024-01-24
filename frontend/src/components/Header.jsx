import React, { useEffect, useRef, useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";

// Images import start
import Logo from "../assets/images/logo.svg";
import DropdownMenu from "./home/DropdownMenu";
import Profile from "./home/profile/Profile";

function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const [showCloseMenu, setShowCloseMenu] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

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

  // Authentication start
  const handleLogin = () => {
    // Perform login logic (e.g., API call, authentication)
    // If login is successful, set isAuthenticated to true
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    // Perform logout logic
    // If logout is successful, set isAuthenticated to false
    setIsAuthenticated(false);
  };

  const activeLink = "border-b-2 border-white pb-[3px]";
  const normalLink = "";
  return (
    <div className="z-50 fixed w-full top-0  ">
      <nav className="px-5 bg-blue-rgba flex items-center justify-between lg:px-[5%] lg:h-[92px] lg:backdrop-blur w-[100%]">
        <div className="lg:flex lg:items-center ">
          <div>
            <Link
              to="/"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <img
                src={Logo}
                alt="Logo"
                className="py-3 lg:pt-0 lg:linkHover cursor-pointer"
              />
            </Link>
          </div>
          <div className="hidden lg:flex lg:pl-[30px] lg:gap-[35px]">
            <p className="lg:link lg:linkHover font-Roboto">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                Home
              </NavLink>
            </p>
            <p className="lg:link lg:linkHover font-Roboto">
              <NavLink
                to="/residential"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                Real Estate
              </NavLink>
            </p>
            <p className="lg:link lg:linkHover font-Roboto">
              <NavLink
                to="/billpayment"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                Bill Payments
              </NavLink>
            </p>
            <p className="lg:link lg:linkHover font-Roboto">
              <NavLink
                to="/houseloan"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                House Loan
              </NavLink>
            </p>
            <p className="lg:link lg:linkHover font-Roboto">
              <NavLink
                to="/houseinsurance"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                Insurance
              </NavLink>
            </p>
            <p className="lg:link lg:linkHover font-Roboto">
              <NavLink
                to="/logistics"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                Logistics
              </NavLink>
            </p>
            <p className="lg:link lg:linkHover font-Roboto">
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                Blog
              </NavLink>
            </p>
          </div>
        </div>
        {/* Registration start */}
        <div className="hidden lg:flex lg:gap-[18px]">
          {!isAuthenticated ? (
            <Profile />
          ) : (
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
          )}
        </div>
        {/* Registration end */}
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
              className="text-[#fff] h-6 "
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
