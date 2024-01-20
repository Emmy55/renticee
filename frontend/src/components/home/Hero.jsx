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
      <div className="bg-hero-img2 md:bg-hero-img h-[296px] lg:h-[876px] object-center bg-cover bg-no-repeat">
        <div className="flex flex-col items-center pt-[50px] lg:pt-[200px]">
          <div className="flex gap-5 ">
            <p className="heroTop text-[0.63544rem] w-[42px] h-[22px] bg-white text-[#0073E6] lg:text-[0.8125rem] font-Roboto lg:w-[84.8px] lg:h-[42px]">
              Sales
            </p>
            <p className="heroTop text-[0.63544rem] w-[45px] h-[22px] text-white bg-white bg-opacity-15 lg:text-[0.8125rem] font-Roboto lg:w-[100.44px] lg:h-[42px]">
              Rentals
            </p>
          </div>
          <div className="h-[29px] w-[358px] lg:h-[70px] lg:w-[867.17px] bg-white flex flex-col items-center justify-center rounded-[50px] mt-5">
            <form className="flex gap-2 items-center">
              <div className="flex flex-col">
                <p className="ml-1 text-[0.43544rem] lg:text-[0.8125rem] text-[#222222] font-Roboto">
                  CATEGORY
                </p>
                <select className="w-[81.24px] h-[8.26px] lg:w-[196.78px] lg:h-[20px] bg-white text-[#7A7A7A] text-[0.40544rem] lg:text-[0.8125rem] font-Roboto cursor-pointer">
                  <option value="">Property Category</option>
                  <option value="land">Land</option>
                  <option value="house">House</option>
                </select>
              </div>
              <div className="flex flex-col">
                <p className="ml-1 text-[0.43544rem] lg:text-[0.8125rem] text-[#222222] font-Roboto">
                  CITY
                </p>
                <select className="w-[81.24px] h-[8.26px] lg:w-[196.78px] lg:h-[20px] bg-white text-[#7A7A7A] text-[0.40544rem] lg:text-[0.8125rem] font-Roboto cursor-pointer">
                  <option value="">Property City</option>
                  <option value="land">Land</option>
                  <option value="house">House</option>
                </select>
              </div>
              <div className="flex flex-col">
                <p className="ml-1 text-[0.43544rem] lg:text-[0.8125rem] text-[#222222] font-Roboto">
                  BEDROOMS
                </p>
                <select className="w-[81.24px] h-[8.26px] lg:w-[196.78px] lg:h-[20px] bg-white text-[#7A7A7A] text-[0.40544rem] lg:text-[0.8125rem] font-Roboto cursor-pointer">
                  <option className="font-Roboto" value="">
                    Bedrooms Number
                  </option>
                  <option className="font-Roboto" value="land">
                    Land
                  </option>
                  <option value="house">House</option>
                </select>
              </div>
              <button className="w-[81.24px] h-[18.16px] lg:w-[196.78px] lg:h-[44px] bg-[#035FCE] rounded-[50px] border border-[#0073E1] text-white text-[0.50706rem] lg:text-[0.9375rem] font-Roboto font-medium flex items-center justify-center gap-1">
                <img
                  src={Search}
                  alt=""
                  className="w-[9px] h-[9px] lg:w-[16px] lg:h-[16px]"
                />{" "}
                Search
              </button>
            </form>
          </div>
          <div className="flex items-center mt-10 gap-[41px] lg:gap-[98px] lg:mt-20">
            <div>
              <img
                src={Houses}
                alt=""
                className="w-[42.84px] h-[42.84px] lg:w-[100px] lg:h-[100px]"
              />
              <p className="heroBottom text-[0.33544rem] lg:text-[0.8125rem] pt-[3px] lg:pt-[10px]">
                houses
              </p>
            </div>
            <div>
              <img
                src={Apartments}
                alt=""
                className="w-[42.84px] h-[42.84px] lg:w-[100px] lg:h-[100px]"
              />
              <p className="heroBottom text-[0.33544rem] lg:text-[0.8125rem] pt-[3px] lg:pt-[10px]">
                apartments
              </p>
            </div>
            <div>
              <img
                src={Offices}
                alt=""
                className="w-[42.84px] h-[42.84px] lg:w-[100px] lg:h-[100px]"
              />
              <p className="heroBottom text-[0.33544rem] lg:text-[0.8125rem] pt-[3px] lg:pt-[10px]">
                offices
              </p>
            </div>
            <div>
              <img
                src={Villas}
                alt=""
                className="w-[42.84px] h-[42.84px] lg:w-[100px] lg:h-[100px]"
              />
              <p className="heroBottom text-[0.33544rem] lg:text-[0.8125rem] pt-[3px] lg:pt-[10px]">
                villas
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
