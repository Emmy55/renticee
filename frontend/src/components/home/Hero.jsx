import React from "react";

// Images import start
import Search from "../../assets/images/home-search.svg";
import Houses from "../../assets/images/houses.svg";
import Apartments from "../../assets/images/apartment.svg";
import Offices from "../../assets/images/offices.svg";
import Villas from "../../assets/images/villas.svg";

function Hero() {
  return (
    <div className="">
      <div className="bg-hero-img lg:h-[876px] object-cover">
        <div className="flex flex-col items-center pt-[200px]">
          <div className="flex gap-5 ">
            <p className="heroTop w-[84.8px] bg-white text-[#0073E6]">Sales</p>
            <p className="heroTop w-[100.44px] text-white bg-white bg-opacity-15">
              Rentals
            </p>
          </div>
          <div className="h-[70px] w-[867.17px] bg-white flex flex-col items-center justify-center rounded-[50px] mt-5">
            <form className="flex gap-2 items-center">
              <div>
                <p className="text-[0.8125rem] text-[#222222] font-Roboto">
                  CATEGORY
                </p>
                <select className="w-[196.78px] h-[20px] bg-white text-[#7A7A7A] text-[0.8125rem] font-Roboto cursor-pointer">
                  <option value="">Property Category</option>
                  <option value="land">Land</option>
                  <option value="house">House</option>
                </select>
              </div>
              <div>
                <p className="text-[0.8125rem] text-[#222222] font-Roboto">
                  CITY
                </p>
                <select className="w-[196.78px] h-[20px] bg-white text-[#7A7A7A] text-[0.8125rem] font-Roboto cursor-pointer">
                  <option value="">Property City</option>
                  <option value="land">Land</option>
                  <option value="house">House</option>
                </select>
              </div>
              <div>
                <p className="text-[0.8125rem] text-[#222222] font-Roboto">
                  BEDROOMS
                </p>
                <select className="w-[196.78px] h-[20px] bg-white text-[#7A7A7A] text-[0.8125rem] font-Roboto cursor-pointer">
                  <option className="font-Roboto" value="">
                    Bedrooms Number
                  </option>
                  <option className="font-Roboto" value="land">
                    Land
                  </option>
                  <option value="house">House</option>
                </select>
              </div>
              <button className="w-[196.78px] h-[44px] bg-[#035FCE] rounded-[50px] border border-[#0073E1] text-white text-[0.9375rem] font-Roboto font-medium flex items-center justify-center gap-1">
                <img src={Search} alt="" /> Search
              </button>
            </form>
          </div>
          <div className="flex items-center gap-[98px] mt-20">
            <div>
              <img src={Houses} alt="" />
              <p className="heroBottom">houses</p>
            </div>
            <div>
              <img src={Apartments} alt="" />
              <p className="heroBottom">apartments</p>
            </div>
            <div>
              <img src={Offices} alt="" />
              <p className="heroBottom">offices</p>
            </div>
            <div>
              <img src={Villas} alt="" />
              <p className="heroBottom">villas</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
