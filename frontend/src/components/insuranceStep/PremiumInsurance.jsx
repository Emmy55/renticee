import React from "react";

import Check from "../houseInsurance/images/check.svg";
import House from "./images/house.svg";

function PremiumInsurance() {
  return (
    <div className="">
      <div className="flex flex-col items-center">
        <div className="w-[360.53px] h-[140.63px] bg-[#001733] flex flex-col items-center justify-center">
          <p className="text-[1.20638rem] text-white font-Roboto">
            Home Insurance
          </p>
          <p className="text-[2.06806rem] text-white font-bold font-Roboto">
            PREMIUM
          </p>
        </div>
        {/*  */}
        <div className=" flex items-center justify-center mt-5 gap-20">
          <p className="text-[1.20638rem] text-[#282D3A] font-Roboto">
            Premium
          </p>
          <p className="text-[1.20638rem] text-[#282D3A] font-bold font-Roboto">
            ₦10,000/annum
          </p>
        </div>
        <div className=" flex items-center justify-center mt-5 gap-14">
          <p className="text-[1.20638rem] text-[#282D3A] font-bold font-Roboto">
            Sum Assured
          </p>
          <p className="text-[1.20638rem] text-[#282D3A] font-bold font-Roboto">
            ₦2,000,000.00
          </p>
        </div>
        {/*  */}
        <div className="mt-5">
          <div className="w-[360.53px] h-[140.63px]">
            <img src={House} alt="" />
          </div>
          <div className="pl-5">
            <p className="text-[1.20638rem] font-bold font-Roboto text-black text-opacity-85 mt-16">
              KEY BENEFITS
            </p>
            <div className="flex items-center gap-1 mt-5">
              <img src={Check} alt="" className="w-[20.72px] h-[20.72px]" />
              <p className="text-[1.20638rem] font-Roboto text-black text-opacity-85">
                Fire
              </p>
            </div>
            <div className="flex items-center gap-1 mt-5">
              <img src={Check} alt="" className="w-[20.72px] h-[20.72px]" />
              <p className="text-[1.20638rem] font-Roboto text-black text-opacity-85">
                Burglary & Theft
              </p>
            </div>
            <div className="flex items-center gap-1 mt-5">
              <img src={Check} alt="" className="w-[20.72px] h-[20.72px]" />
              <p className="text-[1.20638rem] font-Roboto text-black text-opacity-85">
                Environmental damage
              </p>
            </div>
            <div className="flex items-center gap-1 mt-5">
              <img src={Check} alt="" className="w-[20.72px] h-[20.72px]" />
              <p className="text-[1.20638rem] font-Roboto text-black text-opacity-85">
                Death
              </p>
            </div>
            <div className="flex items-center gap-1 mt-5">
              <img src={Check} alt="" className="w-[20.72px] h-[20.72px]" />
              <p className="text-[1.20638rem] font-Roboto text-black text-opacity-85">
                Bodily Injury
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PremiumInsurance;
