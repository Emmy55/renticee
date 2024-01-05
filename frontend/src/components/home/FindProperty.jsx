import React from "react";

import Search from "../../assets/images/home-search.svg";

function FindProperty() {
  return (
    <div>
      <div className="bg-[#F5F6FD] h-[444.95px] flex flex-col items-center justify-center">
        <div>
          <h1 className="text-[2.0625rem] text-[#282D3A] font-bold font-Roboto text-center">
            Find a property
          </h1>
          <p className="text-lg text-[#696969] font-Roboto text-center">
            Search properties by category, city or area
          </p>
        </div>
        <div>
          <div className="h-[96.56px] w-[1140px] bg-white flex flex-col items-center justify-center rounded-[10px] mt-10">
            <form className="flex gap-2 items-center">
              <div>
                <input
                  type="text"
                  placeholder="Enter an address, state, city, area or zip code"
                  className="w-[430px] h-[46.56px] bg-[#F5F6FE] border border-[#EEEEEE] border-opacity-15 placeholder:text-[#696969] placeholder:text-[0.8125rem] font-Roboto rounded-[5px] pl-3 outline-none"
                />
              </div>
              <div>
                <select className="w-[210px] h-[46.56px] bg-[#F5F6FE] text-[#7A7A7A] text-[0.8125rem] font-Roboto cursor-pointer rounded-[5px] px-3 outline-none">
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
                  className="w-[210px] h-[46.56px] bg-[#F5F6FE] border border-[#EEEEEE] border-opacity-15 placeholder:text-[#696969] placeholder:text-[0.8125rem] font-Roboto rounded-[5px] pl-3 outline-none"
                />
              </div>
              <button className="w-[210px] h-[44px] bg-[#035FCE] rounded-[5px] border border-[#0073E1] text-white text-[0.9375rem] font-Roboto font-medium flex items-center justify-center gap-1">
                <img src={Search} alt="" /> Search Properties
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FindProperty;
