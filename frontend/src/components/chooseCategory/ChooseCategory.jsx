import React, { useState } from "react";

import Arrow from "./images/arrow-back.svg";
import Agent from "./images/agent.svg";
import Buyer from "./images/buyer.svg";
import Checkmark from "./images/checkmark.svg";

function ChooseCategory() {
  const [selectedOption, setSelectedOption] = useState(null); // State to track selected option

  const handleOptionSelect = (option) => {
    // console.log("Selected option:", selectedOption);
    setSelectedOption(option);
  };

  const handleVerify = () => {
    // Here you can save the selectedOption to the database
    console.log("Selected option:", selectedOption);
    // Perform other actions needed on verification
  };

  return (
    <div className="md:h-screen bg-gradient-to-tr from-blue-900 via-blue-900 to-blue-800 md:flex md:justify-center md:items-center">
      <div className="bg-white flex flex-col items-center mt-10 md:w-[736px] md:h-[520px] md:justify-center">
        <div className="w-[358px] md:hidden">
          <img src={Arrow} alt="Back" className="w-8 h-8" />
        </div>

        <h2 className="text-[#282D3A] text-[1.1875rem] font-bold font-Roboto md:text-2xl">
          Choose a category
        </h2>

        <form className="flex flex-col mt-10">
          <div className="flex flex-col items-center gap-3 md:flex-row md:justify-center md:gap-20">
            {/* Option 1 start */}
            <label
              className={`w-[193.45px] h-[276.17px] bg-[#F6F6F6] p-2 flex flex-col items-center pt-7 md:pt-3 cursor-pointer rounded ${
                selectedOption === "Agent" ? "scale-75" : ""
              }`}
            >
              <input
                type="radio"
                name="category"
                value="Agent"
                checked={selectedOption === "Agent"}
                onChange={() => handleOptionSelect("Agent")}
                className="hidden"
              />
              {selectedOption === "Agent" && (
                <img
                  src={Checkmark}
                  alt="Checkmark"
                  className="absolute top-2 right-2 w-6 h-6"
                />
              )}
              <img
                src={Agent}
                alt="Agent"
                className="w-[127.57px] h-[127.57px] md:w-[145.47px] md:h-[145.47px]"
              />
              <div className="mt-8 md:mt-3">
                <p className="text-[0.8125rem] text-[#282D3A] font-bold font-Roboto text-center md:text-[0.98125rem]">
                  Agent
                </p>
                <p className="text-[0.603125rem] text-[#282D3A] text-opacity-90 font-Roboto text-center mt-2 md:text-[0.6875rem]">
                  Real estate pros, amplify your listings and reach. Join to
                  connect with more clients and streamline your transactions.
                </p>
              </div>
            </label>
            {/* Option 1 end */}
            {/* Option 2 start */}
            <label
              className={`w-[193.45px] h-[276.17px] bg-[#F6F6F6] p-2 flex flex-col items-center pt-7 md:pt-3 cursor-pointer rounded ${
                selectedOption === "Buyer" ? "scale-75" : ""
              }`}
            >
              <input
                type="radio"
                name="category"
                value="Buyer"
                checked={selectedOption === "Buyer"}
                onChange={() => handleOptionSelect("Buyer")}
                className="hidden"
              />
              {selectedOption === "Buyer" && (
                <img
                  src={Checkmark}
                  alt="Checkmark"
                  className="absolute top-2 right-2 w-6 h-6"
                />
              )}
              <img
                src={Buyer}
                alt="Agent"
                className="w-[127.57px] h-[127.57px] md:w-[145.47px] md:h-[145.47px]"
              />
              <div className="mt-7 md:mt-3">
                <p className="text-[0.8125rem] text-[#282D3A] font-bold font-Roboto text-center md:text-[0.98125rem]">
                  Prospective buyer
                </p>
                <p className="text-[0.603125rem] text-[#282D3A] text-opacity-90 font-Roboto text-center mt-1 md:text-[0.6875rem]">
                  Find your dream property here. Explore listings, customize
                  your search, and connect with trusted agents for seamless
                  transactions.
                </p>
              </div>
            </label>
            {/* Option 2 end */}
          </div>
          <div className="md:flex md:flex-col items-center md:mt-10">
            <button
              onClick={handleVerify}
              disabled={!selectedOption} // Disable button if no option is selected
              className={`w-[358px] h-[50.63px] text-base font-Roboto font-medium rounded-[6px] mt-7 md:w-[405.28px] md:h-[57.58px] md:text-xl ${
                !selectedOption
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#035FCE] hover:bg-[#3d7ece] hover:scale-95"
              } text-white`}
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ChooseCategory;
