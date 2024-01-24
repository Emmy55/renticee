import React, { useState } from "react";

import { Link, NavLink } from "react-router-dom";
// import Profile from "../buyerProfile/profile/Profile";

function DropdownMenu() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  const activeLink =
    "cursor-pointer bg-secondary text-[#222] p-2 pl-2 rounded-full";
  const normalLink = "";

  // Authentication start
  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };
  // Authentication end

  return (
    <div className="z-30 flex flex-col uppercase text-xs bg-primary w-[180px] text-white px-5 pt-5 pb-6 gap-5 rounded font-bold relative">
      <NavLink
        onClick={handleLinkClick}
        to="/"
        className={({ isActive }) => (isActive ? activeLink : normalLink)}
      >
        <p onClick={handleLinkClick} className="cursor-pointer font-Roboto">
          Home
        </p>
      </NavLink>
      <NavLink
        onClick={handleLinkClick}
        to="/residential"
        className={({ isActive }) => (isActive ? activeLink : normalLink)}
      >
        <p className="cursor-pointer font-Roboto">Real Estate</p>
      </NavLink>
      <NavLink
        to="/billpayment"
        className={({ isActive }) => (isActive ? activeLink : normalLink)}
      >
        <p className="cursor-pointer font-Roboto">Bill Payments</p>
      </NavLink>
      <NavLink
        to="/houseloan"
        className={({ isActive }) => (isActive ? activeLink : normalLink)}
      >
        <p className="cursor-pointer font-Roboto">House Loan</p>
      </NavLink>
      <NavLink
        to="/houseinsurance"
        className={({ isActive }) => (isActive ? activeLink : normalLink)}
      >
        <p className="cursor-pointer font-Roboto">Insurance</p>
      </NavLink>
      <NavLink
        to="/logistics"
        className={({ isActive }) => (isActive ? activeLink : normalLink)}
      >
        <p className="cursor-pointer font-Roboto">Logistics</p>
      </NavLink>
      <NavLink
        to="/blog"
        className={({ isActive }) => (isActive ? activeLink : normalLink)}
      >
        <p className="cursor-pointer font-Roboto">Blog</p>
      </NavLink>
      <div className="mt-3">
        {!isAuthenticated ? (
          // <Profile show="hidden" />
          <div>
            <div className="">
              <Link to="profile">
                <p className="text-base text-white font-bold font-Roboto cursor-pointer">
                  Bright Moses
                </p>
              </Link>
              <p className="text-[0.6875rem] text-white font-Roboto font-normal">
                Active
              </p>
            </div>
          </div>
        ) : (
          <div>
            <NavLink
              to="/signin"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <p className="linkHover font-Roboto cursor-pointer w-[90px] h-[33px] rounded-[33.5px] border-[0.84px] border-white flex items-center justify-center text-white text-[0.8369rem] font-semibold">
                Login
              </p>
            </NavLink>
            <NavLink
              to="/signup"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <p className="linkHover font-Roboto mt-2 cursor-pointer w-[90px] h-[33px] rounded-[33.5px] bg-white flex items-center justify-center text-[#035FCE] text-[0.8369rem] font-semibold">
                Sign up
              </p>
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
}

export default DropdownMenu;
