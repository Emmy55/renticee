import React from "react";
import Header from "../Header";
import HouseInsuranceHero from "./HouseInsuranceHero";
import Pricing from "./Pricing";
import Footer from "../Footer";

function HouseInsurance() {
  return (
    <div className="">
      <Header />
      <HouseInsuranceHero show="hidden" />
      {/* What our insurance Cover start */}
      <div className="h-[165px] bg-white lg:h-[426px]">
        <h1 className="text-base text-[#282D3A] font-bold font-Roboto text-center pt-5 lg:text-4xl lg:pt-16">
          What our insurance Cover
        </h1>
        <p className="text-[0.8125rem] text-[#282D3A] text-center pt-3 lg:text-[1.4375rem]">
          Replace your loss quickly. Building insurance covers
          <br className="lg:hidden" /> damages arising from fire and other
          disasters. Contents
          <br className="" /> insurance covers
          <br className="" /> damage and loss by theft or burglary, natural
          disasters and fire.
        </p>
      </div>
      {/* What our insurance Cover end */}
      {/* Our Home Insurance Plan also offers start */}
      <div className="h-[214px] bg-[#E6EFFB] lg:h-[335px]">
        <h1 className="text-base text-[#282D3A] font-bold font-Roboto text-center pt-16 lg:text-4xl">
          Our Home Insurance Plan also offers
        </h1>
        <p className="text-[0.66069rem] text-[#282D3A] font-Roboto text-center pt-3 lg:text-[1.4375rem]">
          Cover on items you take out and about, whether you're at home or on
          holiday
          <br /> Liability for third party losses up to 50% of sum insured
          <br /> Prompt claim settlement from time of notification
          <br /> 15 % Cash back after 24 months without a claim
        </p>
      </div>
      {/* Our Home Insurance Plan also offers end */}
      {/* New to purchasing home insurance? start */}
      <div className="h-[233px] bg-[#035FCE] lg:h-[297px]">
        <h1 className="text-[1.34694rem] text-white font-bold font-Roboto text-center pt-14 lg:text-5xl lg:pt-16">
          New to purchasing home insurance?
        </h1>
        <p className="text-[0.86294rem] text-white text-center pt-3 lg:text-[1.125rem]">
          Here are a few things you should know
        </p>
        <div className="flex justify-center mt-8 cursor-pointer">
          <p className="text-base font-bold font-Roboto text-white w-[198.03px] h-[48px] rounded border-2 border-white flex items-center justify-center hover:scale-105 hover:shadow-lg">
            READ OUR BLOG
          </p>
        </div>
      </div>
      {/* New to purchasing home insurance? end */}
      {/* Pricing start */}
      <Pricing />
      {/* Pricing end */}
      {/* Footer start */}
      <Footer />
      {/* Footer end */}
    </div>
  );
}

export default HouseInsurance;
