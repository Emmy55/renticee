import React from "react";

import PostImg from "./images/post-img.svg";
import LocationIcon from "./images/location-icon.svg";
import Video from "./images/video-icon.svg";
import Camera from "./images/camera.svg";
import Bed from "./images/bed-icon.svg";
import Shower from "./images/shower-icon.svg";
import Fit from "./images/fit-icon.svg";

function BlogPostCard() {
  return (
    <div>
      <div className="w-full object-cover h-[219.48px] rounded-t overflow-hidden cursor-pointer">
        <img
          src={PostImg}
          alt="Post"
          className="w-full h-[219.48px] object-cover"
        />
      </div>
      {/* Post Info start */}
      <div className="py-3 px-3 bg-[#F6F2EF]">
        <p className="text-[1.4375rem]  text-[#222222] font-medium font-Roboto cursor-pointer">
          Property Data Collection: Everything You Need to Know
        </p>
        <p className="text-base pt-3 text-[#7A7A7A] font-normal font-Roboto pr-1">
          Whether you're a seasoned real estate agent looking for a new income
          stream or getting...
        </p>
        <div className="py-3">
          <div className="h-[5px] bg-[#035FCE]"></div>
        </div>
      </div>
      {/* Post Info end */}
    </div>
  );
}

export default BlogPostCard;
