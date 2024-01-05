import React, { useState } from "react";

import Logo from "./images/logo.svg";
import Arrow from "./images/arrow-back.svg";

function VerifyCode() {
  const [verificationCode, setVerificationCode] = useState(""); // State to hold the input value

  // Function to handle changes in the input field
  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setVerificationCode(inputValue);
  };

  const isCodeComplete = verificationCode.length === 6;
  return (
    <div className="md:h-screen bg-gradient-to-tr from-blue-900 via-blue-900 to-blue-800 md:flex md:justify-center md:items-center">
      <div className="bg-white flex flex-col items-center mt-10 md:w-[546.96px] md:h-[462.63px] md:justify-center">
        <div className="w-[358px] md:hidden">
          <img src={Arrow} alt="Back" className="w-8 h-8" />
        </div>
        <img src={Logo} alt="Rentice Logo" className="w-[110px] h-[94px]" />
        <h2 className="text-[#282D3A] text-[1.1875rem] font-bold font-Roboto md:text-2xl">
          Authorization
        </h2>
        <p className="text-base font-Roboto text-[#282D3A] text-opacity-50 mt-1 md:text-xl">
          Enter verification code sent to your email.
        </p>
        <form className="flex flex-col mt-10">
          <input
            type="number"
            placeholder="Enter verification code"
            value={verificationCode}
            onChange={handleInputChange}
            className="w-[358px] h-[50px] bg-white border border-[#282D3A] border-opacity-35 placeholder:text-[#282D3A] placeholder:text-[0.8125rem] placeholder:text-opacity-35 font-Roboto rounded-[5px] pl-3 outline-none md:w-[490px] md:h-[68px] md:placeholder:text-base"
          />

          <button
            className={`w-[358px] h-[50.63px] text-base font-Roboto font-medium rounded-[5px] mt-7 md:w-[490px] md:h-[68px] md:text-xl ${
              isCodeComplete
                ? "bg-[#035FCE] text-white hover:bg-[#3d7ece] hover:scale-95"
                : "bg-[#8993A4] opacity-50 cursor-not-allowed"
            }`}
            disabled={!isCodeComplete}
          >
            Verify
          </button>
        </form>
      </div>
    </div>
  );
}

export default VerifyCode;
