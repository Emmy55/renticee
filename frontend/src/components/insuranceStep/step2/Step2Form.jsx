import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { motion } from "framer-motion";

import Arrow from "../images/arrow.svg";
import Calendar from "../images/calendar.svg";

function Step2Form() {
  const [selectedDate, setSelectedDate] = useState(null);

  const [items, setItems] = useState([{ name: "", value: "" }]);

  const handleAddItem = () => {
    setItems([...items, { name: "", value: "" }]);
  };

  const handleInputChange = (index, e) => {
    const newItems = [...items];
    newItems[index][e.target.name] = e.target.value;
    setItems(newItems);
    console.log(newItems);
  };
  return (
    <div className="mt-3 pb-5 xl:ml-[-50px]">
      <div className="flex flex-col items-center">
        <h2 className="w-[353px] md:w-[650px] lg:w-[1000px] xl:w-[1027px] text-[0.8125rem] lg:text-base text-[#035FCE] font-bold font-Roboto border-b border-b-[#E4EAEE] pb-2">
          Property Details
        </h2>
        <form>
          <div className="">
            <div className="flex flex-col items-center">
              {/*  */}
              <div className="flex flex-col lg:flex-row lg:gap-[45px] lg:items-start">
                <div className="flex flex-col items-center relative">
                  <label className="uppercase w-[353px] md:w-[650px] lg:w-[476px] xl:w-[491px] text-[0.8125rem] text-[#282D3A]  font-Roboto pt-3">
                    Ownership of Building
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
                <div className="flex flex-col items-center relative">
                  <label
                    htmlFor="firstName"
                    className="uppercase w-[353px] md:w-[650px] lg:w-[476px] xl:w-[491px] text-[0.8125rem] text-[#282D3A]  font-Roboto pt-3"
                  >
                    Location of House
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
              </div>
              {/*  */}

              {/*  */}
              <div className="flex flex-col lg:flex-row lg:gap-[45px] lg:items-start">
                <div className="flex flex-col items-center relative">
                  <label
                    htmlFor="firstName"
                    className="uppercase w-[353px] md:w-[650px] lg:w-[476px] xl:w-[491px] text-[0.8125rem] text-[#282D3A]  font-Roboto pt-3"
                  >
                    Location of House
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
                <div className="flex flex-col items-center relative">
                  <label
                    htmlFor="gender"
                    className="uppercase w-[353px] md:w-[650px] lg:w-[476px] xl:w-[491px] text-[0.8125rem] text-[#282D3A]  font-Roboto pt-3"
                  >
                    Cover Duration
                  </label>
                  <select
                    name="gender"
                    className="text-[0.8125rem] appearance-none outline-none leading-tight w-[353px] md:w-[650px] lg:w-[476px] xl:w-[491px] h-[40px] border border-[#035FCE] border-opacity-50 rounded mt-2 pl-2"
                  >
                    <option value="" className="text-[0.8125rem]"></option>
                    <option value="one">1 year</option>
                    <option value="two">2 year</option>
                    <option value="three">3 year</option>
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
                    Start date
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
                    Portal Address
                  </label>
                  <input
                    type="text"
                    name="email"
                    id="email"
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
              House Description
            </label>
            <textarea
              name="address"
              id="address"
              className="outline-none w-[353px] md:w-[650px] lg:w-[1000px] xl:w-[1027px] h-[136px] lg:h-[115px] border border-[#035FCE] border-opacity-50 rounded mt-2 pl-2"
            ></textarea>
            <input type="text" name="code" id="code" />
          </div>
          <div className="flex flex-col items-center">
            <label
              htmlFor="address"
              className="uppercase w-[353px] md:w-[650px] lg:w-[1000px] xl:w-[1027px] text-[0.8125rem] text-[#282D3A]  font-Roboto pt-3"
            >
              House Address
            </label>
            <textarea
              name="address"
              id="address"
              className="outline-none w-[353px] md:w-[650px] lg:w-[1000px] xl:w-[1027px] h-[136px] lg:h-[115px] border border-[#035FCE] border-opacity-50 rounded mt-2 pl-2"
            ></textarea>
            <input type="text" name="code" id="code" />
          </div>

          {/* New start */}

          <div className="flex flex-col items-center mt-10">
            <h2 className="uppercase w-[353px] md:w-[650px] lg:w-[1000px] xl:w-[1027px] text-[0.8125rem] lg:text-base text-[#035FCE] font-bold font-Roboto pb-2">
              Items to Insure
            </h2>
            {/*  */}
            {items.map((item, index) => (
              <div
                key={index}
                className="flex flex-col lg:flex-row lg:gap-[45px] lg:items-start"
              >
                <div className="flex flex-col items-center relative">
                  <input
                    type="text"
                    name="name"
                    placeholder="Item Name"
                    value={item.name}
                    onChange={(e) => handleInputChange(index, e)}
                    className="outline-none w-[353px] md:w-[650px] lg:w-[476px] xl:w-[491px] h-[40px] border border-[#035FCE] border-opacity-50 rounded mt-2 pl-2"
                  />
                </div>
                <div className="flex flex-col items-center">
                  <input
                    type="number"
                    name="value"
                    placeholder="Item Value (₦)"
                    value={item.value}
                    onChange={(e) => handleInputChange(index, e)}
                    className="outline-none mb-5 w-[353px] md:w-[650px] lg:w-[476px] xl:w-[491px] h-[40px] border border-[#035FCE] border-opacity-50 rounded mt-2 pl-2"
                  />
                </div>
              </div>
            ))}
            {/*  */}
          </div>
          {/* New end */}

          <div className="flex justify-start pt-[10px] lg:pt-[10px]w-[353px]">
            <motion.button
              type="button"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleAddItem}
              className={`bg-[#035FCE] text-[#FFFFFF] uppercase text-xs lg:text-sm font-Roboto py-2 px-5 rounded-[5px] mt-[0px] lg:mt-[10px] text-center font-semibold hover:scale-110`}
            >
              More Item
            </motion.button>
          </div>
          {/* Check start */}
          <div>
            <div className="flex mt-5">
              <input
                type="checkbox"
                name="check"
                id="check"
                className="w-[16px] h-[16px] lg:w-[20px] lg:h-[20px] border border-[#035FCE] border-opacity-50 rounded-[5px] mr-3"
              />
              <label
                htmlFor="check"
                className="text-[0.8125rem] text-[#282D3A] font-Roboto w-[286px] md:w-[350px] lg:w-[407px]"
              >
                I declare that the above information is true and correct to the
                best of my knowledge, and shall form the basis of this contract.
                I understand that the cover is not effective until acceptance is
                confirmed and premium payable is received accordingly.
              </label>
            </div>
          </div>
          {/* Check end */}
          {/* next & prev btn start*/}
          <div className="flex justify-end mt-10 gap-5">
            <motion.button
              type="button"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`bg-[#55A2FF] text-[#FFFFFF] uppercase text-xs lg:text-sm font-Roboto py-2 px-5 lg:px-16 rounded-[5px] mt-[0px] lg:mt-[10px] text-center font-semibold`}
            >
              Previous
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`bg-[#035FCE] text-[#FFFFFF] uppercase text-xs lg:text-sm font-Roboto py-2 px-10 lg:px-20 rounded-[5px] mt-[0px] lg:mt-[10px] text-center font-semibold`}
            >
              Next
            </motion.button>
          </div>
          {/* next & prev btn end*/}
        </form>
      </div>
    </div>
  );
}

export default Step2Form;
