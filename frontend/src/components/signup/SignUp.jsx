import React from "react";

import Pic from "./images/signup-pic.svg";
import Logo from "./images/login-logo.svg";
import Facebook from "./images/login-facebook.svg";
import Google from "./images/login-google.svg";

function SignUp() {
  return (
    <div>
      <div className=" flex flex-col items-center lg:flex-row lg:justify-center lg:items-start">
        <div>
          <img
            src={Pic}
            alt=""
            className="w-[390px] h-[446.74px] lg:w-[550px] lg:h-[100%] xl:w-[100%]"
          />
        </div>
        <div className=" flex flex-col items-center rounded-t-[48px] w-[390px] bg-white mt-[-135px] pt-[35px] pb-4 lg:rounded-t-[0px] lg:pt-[20px] lg:w-[500px] lg:h-[100%] lg:justify-center lg:mt-[0px] xl:w-[677px]">
          <img src={Logo} alt="" className="lg:w-[120px] lg:h-[100px]" />
          <h2 className="text-[1.1875rem] text-[#282D3A] font-bold font-Roboto lg:text-[1.7rem] xl:text-[2.0625rem]">
            Create free account
          </h2>
          <form className="flex flex-col mt-10">
            <input
              type="text"
              placeholder="Email or Phone number"
              className="w-[358px] h-[49.95px] bg-white border border-[#282D3A] border-opacity-35 placeholder:text-[#282D3A] placeholder:text-[0.8125rem] placeholder:text-opacity-35 font-Roboto rounded-[5px] pl-3 outline-none lg:w-[420px] lg:h-[60px] lg:placeholder:text-base xl:w-[542px] xl:h-[76px] xl:placeholder:text-xl xl:text-lg"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-[358px] h-[50.63px] bg-white border border-[#282D3A] border-opacity-35 placeholder:text-[#282D3A] placeholder:text-[0.8125rem] placeholder:text-opacity-35 font-Roboto rounded-[5px] pl-3 outline-none mt-7 lg:w-[420px] lg:h-[60px] lg:placeholder:text-base lg:mt-3 xl:w-[542px] xl:h-[76px] xl:placeholder:text-xl xl:text-lg xl:mt-5"
            />
            <input
              type="password"
              placeholder="Confirm password"
              className="w-[358px] h-[50.63px] bg-white border border-[#282D3A] border-opacity-35 placeholder:text-[#282D3A] placeholder:text-[0.8125rem] placeholder:text-opacity-35 font-Roboto rounded-[5px] pl-3 outline-none mt-7 lg:w-[420px] lg:h-[60px] lg:placeholder:text-base lg:mt-3 xl:w-[542px] xl:h-[76px] xl:placeholder:text-xl xl:text-lg xl:mt-5"
            />

            <button className="uppercase w-[358px] h-[50.63px] bg-[#035FCE] text-base text-white font-Roboto font-medium rounded-[5px] mt-7 hover:bg-[#3d7ac5] hover:scale-95 lg:w-[420px] lg:h-[60px] xl:w-[542px] xl:h-[76px] xl:text-2xl">
              Sign up
            </button>
          </form>
          {/* Continue with start */}
          <div className="mt-12 flex items-center gap-2 lg:mt-8">
            <div className="w-[80.45px] h-[1px] bg-[#282D3A] bg-opacity-55 xl:w-[108px]"></div>
            <p className="text-xs text-[#282D3A] text-opacity-55 font-medium font-Roboto lg:text-sm xl:text-base">
              Or continue with
            </p>
            <div className="w-[80.45px] h-[1px] bg-[#282D3A] bg-opacity-55 xl:w-[108px]"></div>
          </div>

          <div className="flex items-center gap-5 mt-7">
            <img
              src={Facebook}
              alt=""
              className="w-7 h-7 hover:scale-110 cursor-pointer lg:w-8 lg:h-8"
            />
            <img
              src={Google}
              alt=""
              className="w-[30px] h-[30px] hover:scale-110 cursor-pointer lg:w-[33px] lg:h-[33px]"
            />
          </div>

          <div className="flex items-center gap-1 mt-6 lg:mt-5 xl:mt-7">
            <p className="text-base font-Roboto text-[#282D3A] text-opacity-50 lg:font-medium">
              Already have an account?{" "}
            </p>
            <p className="text-base font-Roboto text-[#282D3A] text-opacity-50 hover:text-opacity-90 hover:scale-105 cursor-pointer lg:font-medium">
              Log in
            </p>
          </div>
          {/* Continue with end */}
        </div>
      </div>
    </div>
  );
}

export default SignUp;
