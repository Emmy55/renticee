import React from "react";

// Images import start
import Logo from "../assets/images/logo.svg";

function Header() {
  return (
    <div>
      <nav className="lg:flex lg:items-center lg:justify-between lg:px-[5.5%] lg:bg-blue-rgba lg:h-[92px] lg:backdrop-blur w-[100%]">
        <div className="lg:flex lg:items-center ">
          <div>
            <img
              src={Logo}
              alt="Logo"
              className="lg:linkHover cursor-pointer"
            />
          </div>
          <div className="lg:flex lg:pl-[48px] lg:gap-[36px] ">
            <p className="lg:link lg:linkHover">Home</p>
            <p className="lg:link lg:linkHover">Real Estate</p>
            <p className="lg:link lg:linkHover">Bill Payments</p>
            <p className="lg:link lg:linkHover">House Loan</p>
            <p className="lg:link lg:linkHover">Insurance</p>
            <p className="lg:link lg:linkHover">Logistics</p>
            <p className="lg:link lg:linkHover">Blog</p>
          </div>
        </div>
        <div className="lg:flex lg:gap-[18px]">
          <p className="lg:linkHover cursor-pointer lg:w-[105px] lg:h-[33px] lg:rounded-[33.5px] border-[0.84px] border-white lg:flex lg:items-center lg:justify-center text-white text-[0.8369rem] font-semibold">
            Login
          </p>
          <p className="lg:linkHover cursor-pointer lg:w-[105px] lg:h-[33px] lg:rounded-[33.5px] lg:bg-white lg:flex lg:items-center lg:justify-center text-[#035FCE] text-[0.8369rem] font-semibold">
            Sign up
          </p>
        </div>
      </nav>
    </div>
  );
}

export default Header;
