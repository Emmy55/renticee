import React from "react";

import Pic from "../../assets/images/send-message-pic.svg";

function SendMessage() {
  return (
    <div>
      <div className="flex items-center justify-center mb-3">
        <div>
          <img src={Pic} alt="" />
        </div>
        <div className="flex items-center justify-center w-[578px] h-[610px] bg-[#F5F6FD]">
          <div className="w-[560px] h-[574.84px] p-[60px] bg-white rounded-[10px]">
            <h1 className="text-[1.1875] text-[#282D3A] font-bold font-Roboto text-center">
              Let us help. We'd love to hear from you
            </h1>
            <p className="text-[0.8125rem] text-[#696969] font-Roboto w-[383px] pt-3">
              Please complete the form below and our agents will get right back
              to you in less than 24h.
            </p>
            <form className="mt-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-[440px] h-[40px] bg-[#F5F6FE] border border-[#EEEEEE] border-opacity-15 placeholder:text-[#696969] placeholder:text-[0.8125rem] font-Roboto rounded-[5px] pl-3 outline-none"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-[440px] h-[40px] bg-[#F5F6FE] border border-[#EEEEEE] border-opacity-15 placeholder:text-[#696969] placeholder:text-[0.8125rem] font-Roboto rounded-[5px] pl-3 outline-none mt-3"
              />
              <input
                type="tel"
                placeholder="Your Phone"
                className="w-[440px] h-[40px] bg-[#F5F6FE] border border-[#EEEEEE] border-opacity-15 placeholder:text-[#696969] placeholder:text-[0.8125rem] font-Roboto rounded-[5px] pl-3 outline-none mt-3"
              />
              <textarea
                placeholder="Your Message"
                className="w-[440px] h-[126.25px] bg-[#F5F6FE] mt-3 pl-2 placeholder:text-[#696969] placeholder:text-[0.8125rem] pt-2 outline-none"
              ></textarea>
              <button className="w-[440px] h-[40px] bg-[#035FCE] border border-[#4C7CE3] rounded-[5px] mt-4 text-sm text-white font-medium font-Roboto hover:scale-95">
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
