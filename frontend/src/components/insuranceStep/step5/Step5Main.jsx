import React, { useState } from "react";
import { motion } from "framer-motion";

import Paystack from "./images/paystack.svg";
import Flutterwave from "./images/flutterwave.svg";
import Interswitch from "./images/interswitch.svg";
import PremiumInsurance from "../PremiumInsurance";

function Step5Main() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleRadioChange = (event) => {
    const newValue = event.target.value;

    // Check if the selected radio button is the same as the currently selected option
    // If yes, clear the selection, otherwise set the new value
    setSelectedOption((prevValue) =>
      prevValue === newValue ? null : newValue
    );
  };

  const handleConfirmSubmit = () => {
    // Log the name of the selected radio input
    console.log("Selected option:", selectedOption);

    // Add any additional logic or actions you want to perform
    // when the button is clicked after a radio input is selected
  };
  return (
    <div>
      <div className="mt-3 pb-16 xl:ml-[-50px]">
        <div className="flex flex-col items-center">
          <h2 className="w-[353px] lg:w-[1000px] xl:w-[1027px] text-[0.8125rem] lg:text-base text-[#035FCE] font-bold font-Roboto pb-2">
            MAKE PAYMENT
          </h2>
          <div className="w-full h-[1px] bg-[#E4EAEE]"></div>
          <div className="w-[353px] lg:w-[1000px] xl:w-[1027px]">
            <p className="w-[353px] lg:w-[600px] xl:w-[730px] text-[1.1875rem] lg:text-[1.1875rem] text-[#282D3A] font-Roboto pt-4">
              Take note of this ref code you will need it to track this payment
              -
            </p>
          </div>

          {/* Form start */}
          <div>
            <div className="w-[353px] lg:w-[1000px] xl:w-[100%] mt-10 flex flex-col  lg:flex-row items-start justify-center lg:gap-10 xl:gap-[70px] ">
              <form className="flex gap-7 xl:ml-36 relative flex-col lg:flex-row">
                <div className="flex items-center gap-10">
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      id="html"
                      name="paystack"
                      value="paystack"
                      onChange={handleRadioChange}
                      checked={selectedOption === "paystack"}
                    />
                    <label htmlFor="html">
                      <img src={Paystack} alt="" />
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      id="html2"
                      name="flutterwave"
                      value="flutterwave"
                      onChange={handleRadioChange}
                      checked={selectedOption === "flutterwave"}
                    />
                    <label htmlFor="html2">
                      <img src={Flutterwave} alt="" />
                    </label>
                  </div>
                </div>
                <div className="flex gap-10 items-center">
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      id="html3"
                      name="interswitch"
                      value="interswitch"
                      onChange={handleRadioChange}
                      checked={selectedOption === "interswitch"}
                    />
                    <label htmlFor="html3">
                      <img src={Interswitch} alt="" />
                    </label>
                  </div>
                  <div className="lg:absolute lg:left-[30%] lg:mt-[200px]">
                    {selectedOption !== null && (
                      <motion.button
                        type="button"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={handleConfirmSubmit}
                        className={`bg-[#035FCE] text-[#FFFFFF] text-[0.625rem] lg:text-sm font-Roboto w-[171px] h-[46px] lg:w-[266px] rounded-[5px] mt-[0px] lg:mt-[10px] text-center font-semibold hover:scale-110`}
                      >
                        CONFIRM AND SUBMIT
                      </motion.button>
                    )}
                  </div>
                </div>
              </form>
              {/* Sidebar start */}
              <div className="xl:ml-20 mt-20 lg:mt-0">
                <PremiumInsurance />
              </div>
              {/* Sidebar end */}
            </div>
          </div>
          {/* Form end */}
        </div>
      </div>
    </div>
  );
}

export default Step5Main;
