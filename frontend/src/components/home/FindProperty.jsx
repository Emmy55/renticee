import React from "react";

import Search from "../../assets/images/home-search.svg";

function FindProperty() {
  return (
    <div>
      <div className="bg-[#F5F6FD] h-[231.84px] lg:h-[444.95px] flex flex-col items-center justify-center">
        <div>
          <h1 className="text-[0.8125rem] lg:text-[2.0625rem] text-[#282D3A] font-bold font-Roboto text-center">
            Find a property
          </h1>
          <p className="text-[0.6875rem] lg:text-lg text-[#696969] font-Roboto text-center">
            Search properties by category, city or area
          </p>
        </div>
        <div>
          <div className="h-[143.64px] w-[332px] lg:h-[96.56px] lg:w-[1010px] xl:lg:h-[96.56px] xl:w-[1140px] bg-white flex flex-col items-center justify-center rounded-[10px] mt-3 lg:mt-10">
            <form className="flex flex-col lg:flex-row gap-2 items-center">
              <div>
                <input
                  type="text"
                  placeholder="Enter an address, state, city, area or zip code"
                  className="w-[281.74px] h-[30.56px] lg:w-[330px] lg:h-[46.56px] xl:lg:w-[430px] xl:lg:h-[46.56px] bg-[#F5F6FE] border border-[#EEEEEE] border-opacity-15 placeholder:text-[#696969] placeholder:text-[0.8125rem] font-Roboto rounded-[5px] pl-3 outline-none"
                />
              </div>
              <div className="flex items-end gap-2">
                <div>
                  <select className="w-[137.59px] h-[30.56px] lg:w-[210px] lg:h-[46.56px] bg-[#F5F6FE] text-[#7A7A7A] text-[0.8125rem] font-Roboto cursor-pointer rounded-[5px] px-3 outline-none">
                    <option value="">Property Category</option>
                    <option value="land">Land</option>
                    <option value="house">House</option>
                    <option value="rent">Rent</option>
                  </select>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Min Price"
                    className="w-[137.59px] h-[30.56px] lg:w-[210px] lg:h-[46.56px] bg-[#F5F6FE] border border-[#EEEEEE] border-opacity-15 placeholder:text-[#696969] placeholder:text-[0.8125rem] font-Roboto rounded-[5px] pl-3 outline-none"
                  />
                </div>
              </div>
              <button className="w-[137.59px] h-[28.83px] lg:w-[210px] lg:h-[44px] xl:w-[210px] xl:h-[44px] bg-[#035FCE] rounded-[5px] border border-[#0073E1] text-white text-[0.57331rem] lg:text-[0.9375rem] font-Roboto font-medium flex items-center justify-center gap-1">
                <img
                  src={Search}
                  alt=""
                  className="w-[9.17px] h-[9.17px] lg:w-[14px] lg:h-[14px]"
                />{" "}
                Search Properties
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FindProperty;
