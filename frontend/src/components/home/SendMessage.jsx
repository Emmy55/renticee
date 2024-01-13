import React from "react";

import Pic from "../../assets/images/send-message-pic.svg";

function SendMessage() {
  return (
    <div>
      <div className="flex flex-col lg:flex-row items-center justify-center mb-3">
        <div>
          <img
            src={Pic}
            alt=""
            className="w-[352px] h-[299.16px] lg:w-[496px] lg:h-[502px] xl:w-[696px] xl:h-[592px]"
          />
        </div>
        <div className="flex items-center justify-center w-[352px] h-[371.49px] lg:w-[508px] lg:h-[480px] xl:w-[578px] xl:h-[610px] bg-[#F5F6FD] mt-3 lg:mt-0">
          <div className="w-[341.04px] h-[350.08px] lg:w-[480px] lg:h-[464.84px] xl:w-[560px] xl:h-[574.84px] lg:p-[20px] xl:p-[60px] bg-white rounded-[10px]">
            <h1 className="text-[0.8125rem] lg:text-[1.1875] text-[#282D3A] font-bold font-Roboto text-center mt-3 lg:mt-0">
              Let us help. We'd love to hear from you
            </h1>
            <p className="text-[0.6875rem] lg:text-[0.8125rem] text-[#696969] font-Roboto text-center lg:text-left lg:w-[383px] pt-1 lg:pt-3">
              Please complete the form below and our agents will get right back
              to you in less than 24h.
            </p>
            <form className="mt-2 lg:mt-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-[340px] h-[31.09px] lg:w-[440px] lg:h-[40px] bg-[#F5F6FE] border border-[#EEEEEE] border-opacity-15 placeholder:text-[#696969] placeholder:text-[0.8125rem] font-Roboto rounded-[5px] pl-3 outline-none"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-[340px] h-[31.09px] lg:w-[440px] lg:h-[40px] bg-[#F5F6FE] border border-[#EEEEEE] border-opacity-15 placeholder:text-[#696969] placeholder:text-[0.8125rem] font-Roboto rounded-[5px] pl-3 outline-none mt-2 lg:mt-3"
              />
              <input
                type="tel"
                placeholder="Your Phone"
                className="w-[340px] h-[31.09px] lg:w-[440px] lg:h-[40px] bg-[#F5F6FE] border border-[#EEEEEE] border-opacity-15 placeholder:text-[#696969] placeholder:text-[0.8125rem] font-Roboto rounded-[5px] pl-3 outline-none mt-2 lg:mt-3"
              />
              <textarea
                placeholder="Your Message"
                className="w-[340px] h-[98.13px] lg:w-[440px] lg:h-[126.25px] bg-[#F5F6FE] mt-3 pl-2 placeholder:text-[#696969] placeholder:text-[0.8125rem] pt-2 outline-none"
              ></textarea>
              <button className="w-[340px] h-[31.09px] lg:w-[440px] lg:h-[40px] bg-[#035FCE] border border-[#4C7CE3] rounded-[5px] lg:mt-4 text-sm text-white font-medium font-Roboto hover:scale-95">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SendMessage;
