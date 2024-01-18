import React from "react";

import ProfilePic from "./images/profile-pic.svg";
import Like from "./images/like-icon.svg";

function AgentPic(props) {
  return (
    <div>
      <div className="flex items-center gap-5">
        <div className="rounded-full object-cover">
          <img
            src={ProfilePic}
            alt=""
            className={`w-[88.25px] h-[88.25px] ${props.size} rounded-full object-cover`}
          />
        </div>
        <div>
          <p className="text-[0.96519rem] text-[#222325] font-bold font-Roboto lg:text-[1.75rem]">
            Bright Moses
          </p>
          <div className="flex items-center gap-2">
            <img src={Like} alt="" />
            <p className="text-[0.44813rem] text-[#404145] font-Roboto lg:text-[0.8125rem]">
              (1.4k)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AgentPic;
