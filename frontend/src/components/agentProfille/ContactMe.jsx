import React from "react";

import ProfilePic from "./images/profile-pic.svg";
import ContactMeIcon from "./images/contact-me-icon.svg";

function ContactMe(props) {
  return (
    <div className={`${props.size}`}>
      <div className="flex flex-col items-center justify-center px-2 h-[200px] lg:w-[423px] lg:h-[235.19px] border border-[#E4E5E7] shadow-sm md:shadow md-lg:shadow-lg">
        <div className="flex items-center gap-5 w-[321.09px] lg:w-[357px]">
          <div className="w-[47.21px] h-[47.21px] lg:w-[48px] lg:h-[48px] rounded-full object-cover">
            <img
              src={ProfilePic}
              alt=""
              className="w-[47.21px] h-[47.21px] lg:w-[48px] lg:h-[48px] rounded-full object-cover"
            />
          </div>
          <div>
            <p className="text-[1.16788rem] text-[#404145] font-bold font-Roboto lg:text-[1.1875rem]">
              Bright Moses
            </p>
          </div>
        </div>
        {/* Contact me button start */}
        <div className="mt-5 flex flex-col justify-center items-center">
          <button className=" flex items-center justify-center gap-2 w-[321.09px] h-[47.21px] lg:w-[357px] lg:h-[48px] bg-[#023A7E] text-white text-[0.98344rem] font-bold rounded-[7px] font-Roboto hover:bg-[#395c86]">
            <img src={ContactMeIcon} alt="" /> Contact me
          </button>
          <p className="text-[0.98344rem] text-[#62646A] font-Roboto lg:text-base mt-3">
            Average response time: 1 hour
          </p>
        </div>
        {/* Contact me button end */}
      </div>
    </div>
  );
}

export default ContactMe;
