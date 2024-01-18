import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { motion } from "framer-motion";

import Arrow from "../images/arrow.svg";
import Calendar from "../images/calendar.svg";

function Step1Edit() {
  const [selectedDate, setSelectedDate] = useState(null);
  return (
    <div className="mt-3 pb-5">
      <div className="flex flex-col items-center">
        <div className="flex items-center w-[353px] md:w-[650px] lg:w-[1000px] xl:w-[1027px] border-b border-b-[#E4EAEE] pb-2">
          <h2 className="w-[353px] md:w-[650px] lg:w-[1000px] xl:w-[1027px] text-[0.8125rem] lg:text-base text-[#282D3A] font-bold font-Roboto pb-2">
            Personal Details
          </h2>
          <button
            className={`bg-[#035FCE] text-[#FFFFFF] w-[126px] h-[40px] lg:w-[176px] lg:h-[46px] text-xs lg:text-[0.75rem] font-Roboto rounded-[5px] mt-[0px] lg:mt-[10px] text-center font-semibold hover:scale-110`}
          >
            EDIT DETAILS
          </button>
        </div>
        {/* Form start */}
        <div>
          <div className="">
            <div className="flex flex-col items-center">
              {/*  */}
              <div className="flex flex-col lg:flex-row lg:gap-[45px] lg:items-start">
                <div className="flex flex-col items-center relative">
                  <label className="uppercase w-[353px] md:w-[650px] lg:w-[476px] xl:w-[491px] text-[0.8125rem] text-[#282D3A]  font-Roboto pt-3">
                    Title
                  </label>
                  <select className="text-[0.8125rem] appearance-none outline-none leading-tight w-[353px] md:w-[650px] lg:w-[476px] xl:w-[491px] h-[40px] border border-[#035FCE] border-opacity-50 rounded mt-2 pl-2">
                    <option value="" className="text-[0.8125rem]"></option>
                    <option value="Mr.">Mr.</option>
                    <option value="Ms.">Ms.</option>
                    <option value="Mrs.">Mrs.</option>
                    <option value="Miss">Miss</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 mt-10">
                    <img src={Arrow} alt="" />
                  </div>
                </div>
                {/*  */}
                <div className="flex flex-col items-center">
                  <label
                    htmlFor="firstName"
                    className="uppercase w-[353px] md:w-[650px] lg:w-[476px] xl:w-[491px] text-[0.8125rem] text-[#282D3A]  font-Roboto pt-3"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    className="outline-none w-[353px] md:w-[650px] lg:w-[476px] xl:w-[491px] h-[40px] border border-[#035FCE] border-opacity-50 rounded mt-2 pl-2"
                  />
                </div>
              </div>
              {/*  */}

              {/*  */}
              <div className="flex flex-col lg:flex-row lg:gap-[45px] lg:items-start">
                <div className="flex flex-col items-center">
                  <label
                    htmlFor="surname"
                    className="uppercase w-[353px] md:w-[650px] lg:w-[476px] xl:w-[491px] text-[0.8125rem] text-[#282D3A]  font-Roboto pt-3"
                  >
                    Surname
                  </label>
                  <input
                    type="text"
                    name="surname"
                    id="surname"
                    className="outline-none w-[353px] md:w-[650px] lg:w-[476px] xl:w-[491px] h-[40px] border border-[#035FCE] border-opacity-50 rounded mt-2 pl-2"
                  />
                </div>
                {/*  */}
                <div className="flex flex-col items-center relative">
                  <label
                    htmlFor="gender"
                    className="uppercase w-[353px] md:w-[650px] lg:w-[476px] xl:w-[491px] text-[0.8125rem] text-[#282D3A]  font-Roboto pt-3"
                  >
                    Gender
                  </label>
                  <select
                    name="gender"
                    className="text-[0.8125rem] appearance-none outline-none leading-tight w-[353px] md:w-[650px] lg:w-[476px] xl:w-[491px] h-[40px] border border-[#035FCE] border-opacity-50 rounded mt-2 pl-2"
                  >
                    <option value="" className="text-[0.8125rem]"></option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="none">Blank</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 mt-10">
                    <img src={Arrow} alt="" />
                  </div>
                </div>
              </div>
              {/*  */}

              {/*  */}
              <div className="flex flex-col lg:flex-row lg:gap-[45px] lg:items-start">
                <div className="flex flex-col items-center relative">
                  <label
                    htmlFor="date"
                    className="uppercase w-[353px] md:w-[650px] lg:w-[476px] xl:w-[491px] text-[0.8125rem] text-[#282D3A]  font-Roboto pt-3"
                  >
                    Date of Birth
                  </label>
                  <div className="relative">
                    <DatePicker
                      name="date"
                      placeholderText="2005-12-25"
                      selected={selectedDate}
                      onChange={(date) => setSelectedDate(date)}
                      dateFormat="yyyy-MM-dd"
                      className="text-[0.8125rem] appearance-none outline-none leading-tight w-[353px] md:w-[650px] lg:w-[476px] xl:w-[491px] h-[40px] border border-[#035FCE] border-opacity-50 rounded mt-2 pl-2"
                    />
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 mt-3">
                      <img src={Calendar} alt="" />
                    </div>
                  </div>
                </div>
                {/*  */}
                <div className="flex flex-col items-center">
                  <label
                    htmlFor="email"
                    className="uppercase w-[353px] md:w-[650px] lg:w-[476px] xl:w-[491px] text-[0.8125rem] text-[#282D3A]  font-Roboto pt-3"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="outline-none w-[353px] md:w-[650px] lg:w-[476px] xl:w-[491px] h-[40px] border border-[#035FCE] border-opacity-50 rounded mt-2 pl-2"
                  />
                </div>
              </div>
              {/*  */}

              {/*  */}
              <div className="flex flex-col lg:flex-row lg:gap-[45px] lg:items-start">
                <div className="flex flex-col items-center">
                  <label
                    htmlFor="phoneNumber"
                    className="uppercase w-[353px] md:w-[650px] lg:w-[476px] xl:w-[491px] text-[0.8125rem] text-[#282D3A]  font-Roboto pt-3"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    id="phoneNumber"
                    className="outline-none w-[353px] md:w-[650px] lg:w-[476px] xl:w-[491px] h-[40px] border border-[#035FCE] border-opacity-50 rounded mt-2 pl-2"
                  />
                </div>
                {/*  */}
                <div className="flex flex-col items-center">
                  <label
                    htmlFor="code"
                    className="uppercase w-[353px] md:w-[650px] lg:w-[476px] xl:w-[491px] text-[0.8125rem] text-[#282D3A]  font-Roboto pt-3"
                  >
                    Supply your Agent code if you have one
                  </label>
                  <input
                    type="text"
                    name="code"
                    id="code"
                    className="outline-none w-[353px] md:w-[650px] lg:w-[476px] xl:w-[491px] h-[40px] border border-[#035FCE] border-opacity-50 rounded mt-2 pl-2"
                  />
                </div>
              </div>
              {/*  */}
            </div>
          </div>
          <div className="flex flex-col items-center">
            <label
              htmlFor="address"
              className="uppercase w-[353px] md:w-[650px] lg:w-[1000px] xl:w-[1027px] text-[0.8125rem] text-[#282D3A]  font-Roboto pt-3"
            >
              Address
            </label>
            <textarea
              name="address"
              id="address"
              className="outline-none w-[353px] md:w-[650px] lg:w-[1000px] xl:w-[1027px] h-[136px] lg:h-[115px] border border-[#035FCE] border-opacity-50 rounded mt-2 pl-2"
            ></textarea>
            <input type="text" name="code" id="code" />
          </div>
        </div>
        {/* Form end */}
      </div>
    </div>
  );
}

export default Step1Edit;
