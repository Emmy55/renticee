import React from "react";

import PostImg from "./images/post-img.svg";
import LocationIcon from "./images/location-icon.svg";
import Video from "./images/video-icon.svg";
import Camera from "./images/camera.svg";
import Bed from "./images/bed-icon.svg";
import Shower from "./images/shower-icon.svg";
import Fit from "./images/fit-icon.svg";

function Post() {
  return (
    <div>
      <div className="w-full object-cover h-[219.48px] rounded-t overflow-hidden relative hover:scale-105 cursor-pointer">
        <div className="absolute w-full h-[219.48px] opacity-45 bg-gradient-to-t from-black to-transparent via-opacity-50"></div>
        <img
          src={PostImg}
          alt="Post"
          className="w-full h-[219.48px] object-cover"
        />
        <div className="absolute bottom-0 pb-2 w-full flex items-center justify-between px-3">
          <div className="flex items-center">
            <img src={LocationIcon} alt="Location" className="" />
            <p className="text-[0.8125rem] text-white font-medium font-Roboto">
              Design District, Miami
            </p>
          </div>
          <div className="flex items-center gap-2">
            <img src={Video} alt="Video" className="" />
            <div className="flex items-center gap-2">
              <img src={Camera} alt="Camera" className="" />
              <p className="text-[0.8125rem] text-white font-medium font-Roboto">
                8
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Post Info start */}
      <div className=" h-[167px] pt-4 pl-3">
        <p className="text-xl text-[#222222] font-medium font-Roboto cursor-pointer">
          Villa On Washington Ave
        </p>
        <p className="text-[1.0625rem] pt-1 text-[#0D7AE3] font-medium font-Roboto">
          $ 5,500,000
        </p>
        <p className="text-[0.8125rem] pt-2 text-[#7A7A7A] font-normal font-Roboto pr-1">
          Beautiful, updated, ground level Co-op apartment in the desirable Bay
          Terrace neighborhood...
        </p>
        <div className="flex items-center gap-5 pt-4">
          <div className="flex items-center gap-1">
            <img src={Bed} alt="" />
            <p className="text-[0.8125rem] text-[#7A7A7A] font-normal font-Roboto">
              5
            </p>
          </div>
          <div className="flex items-center gap-1">
            <img src={Shower} alt="" />
            <p className="text-[0.8125rem] text-[#7A7A7A] font-normal font-Roboto">
              3
            </p>
          </div>
          <div className="flex items-center gap-1">
            <img src={Fit} alt="" />
            <p className="text-[0.8125rem] text-[#7A7A7A] font-normal font-Roboto">
              250 ft<sup>2</sup>
            </p>
          </div>
        </div>
      </div>
      {/* Post Info end */}
    </div>
  );
}

export default Post;
