import React from "react";

// import { Link } from "react-router-dom";

function DropdownMenu() {
  return (
    <div className="z-30 flex flex-col uppercase text-xs bg-primary w-[180px] text-white px-5 pt-5 pb-6 gap-5 rounded font-bold ">
      <p className="cursor-pointer font-Roboto bg-secondary text-[#222] w-20 p-2 pl-2 rounded-full">
        Home
      </p>
      <p className="cursor-pointer font-Roboto">Real Estate</p>
      <p className="cursor-pointer font-Roboto">Bill Payments</p>
      <p className="cursor-pointer font-Roboto">House Loan</p>
      <p className="cursor-pointer font-Roboto">Insurance</p>
      <p className="cursor-pointer font-Roboto">Logistics</p>
      <p className="cursor-pointer font-Roboto">Blog</p>
      <div className="mt-3">
        <p className="linkHover font-Roboto cursor-pointer w-[90px] h-[33px] rounded-[33.5px] border-[0.84px] border-white flex items-center justify-center text-white text-[0.8369rem] font-semibold">
          Login
        </p>
        <p className="linkHover font-Roboto mt-2 cursor-pointer w-[90px] h-[33px] rounded-[33.5px] bg-white flex items-center justify-center text-[#035FCE] text-[0.8369rem] font-semibold">
          Sign up
        </p>
      </div>
    </div>
  );
}

export default DropdownMenu;
