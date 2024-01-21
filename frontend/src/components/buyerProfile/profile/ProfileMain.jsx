import React from "react";

import ProfilPic from "../images/profile-pic.svg";
import Camera from "../images/camera.svg";

function ProfileMain() {
  return (
    <div>
      <div className="lg:pl-5 pt-10 flex flex-col items-center lg:items-start">
        <div className="w-[348px] md:w-[650px]">
          <div className="w-[88px] h-[88px] rounded-full border border-[#96A0AB] relative">
            <img src={ProfilPic} alt="" />
            <div className="absolute bottom-[-53px]">
              <div className="relative h-[88px] overflow-hidden">
                <img
                  src={Camera}
                  alt=""
                  className="cursor-pointer w-full h-full object-cover transform -translate-y-[60%]"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Form start */}
        <form className="mt-5">
          <div className="">
            <div className="flex flex-col">
              {/*  */}
              <div className="flex flex-col md:flex-row md:gap-[30px] lg:gap-[45px] lg:items-start">
                <div className="flex flex-col items-center relative">
                  <label className="uppercase w-[348px] md:w-[305px] text-[0.8125rem] text-[#282D3A]  font-Roboto pt-3">
                    First name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    className="outline-none w-[348px] md:w-[305px] h-[40px] border border-[#96A0AB] border-opacity-50 rounded mt-2 pl-2"
                  />
                </div>
                {/*  */}
                <div className="flex flex-col items-center">
                  <label
                    htmlFor="lastname"
                    className="uppercase w-[348px] md:w-[305px] text-[0.8125rem] text-[#282D3A]  font-Roboto pt-3"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastname"
                    id="lastname"
                    className="outline-none w-[348px] md:w-[305px] h-[40px] border border-[#96A0AB] border-opacity-50 rounded mt-2 pl-2"
                  />
                </div>
              </div>
              {/*  */}

              {/*  */}
              <div className="flex flex-col md:flex-row md:gap-[30px] lg:gap-[45px] lg:items-start">
                <div className="flex flex-col items-center">
                  <label
                    htmlFor="email"
                    className="uppercase w-[348px] md:w-[305px] text-[0.8125rem] text-[#282D3A]  font-Roboto pt-3"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="outline-none w-[348px] md:w-[305px] h-[40px] border border-[#96A0AB] border-opacity-50 rounded mt-2 pl-2"
                  />
                </div>
                {/*  */}
                <div className="flex flex-col items-center relative">
                  <label
                    htmlFor="status"
                    className="uppercase w-[348px] md:w-[305px] text-[0.8125rem] text-[#282D3A]  font-Roboto pt-3"
                  >
                    Status
                  </label>
                  <input
                    type="text"
                    name="status"
                    id="status"
                    className="outline-none w-[348px] md:w-[305px] h-[40px] border border-[#96A0AB] border-opacity-50 rounded mt-2 pl-2"
                  />
                </div>
              </div>
              {/*  */}
            </div>
          </div>
          <div className="flex justify-end pt-[10px] lg:pt-[10px] ">
            <button
              className={`bg-[#035FCE] text-[#FFFFFF] text-xs lg:text-sm font-Roboto py-2 px-10 rounded-[5px] mt-[0px] lg:mt-[10px] text-center font-semibold hover:scale-110`}
            >
              Edit Profile
            </button>
          </div>
        </form>
        {/* Form end */}
      </div>
    </div>
  );
}

export default ProfileMain;
