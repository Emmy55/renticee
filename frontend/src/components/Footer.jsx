import React from "react";

// Images Import start
import Address from "../assets/images/address(1).svg";
import Phone from "../assets/images/phone.svg";
import Email from "../assets/images/email.svg";
import Facebook from "../assets/images/facebook(1).svg";
import Instagram from "../assets/images/instagram.svg";
import X from "../assets/images/x.svg";
import LinkedIn from "../assets/images/linkedin.svg";
import Thread from "../assets/images/thread.svg";

function Footer() {
  return (
    <div>
      <footer className="pl-5 py-4 lg:h-[357px] bg-[#001733] lg:flex lg:pl-[10.3%] lg:pr-[5%] lg:gap-[7.4%] lg:pt-8">
        <div>
          <h3 className="footerTop cursor-pointer">Rentice</h3>
          <p className="w-[339px] md:w-[539px] lg:w-[502px] footerText lg:mt-3">
            At Rentice, our mission is to revolutionize the real estate industry
            in Nigeria by providing a comprehensive and user-centric platform
            that connects house and property agents with clients. We aim to
            simplify and enhance the real estate experience through innovative
            technology, streamlined processes, and a commitment to transparency
            and convenience.
          </p>
        </div>
        <div>
          <h3 className="mt-7 footerTop lg:mt-[30px] lg:w-[115px]">
            Quick Links
          </h3>
          <p className="footerText pt-3 lg:linkHover cursor-pointer">
            Support Center
          </p>
          <p className="footerText pt-3 lg:linkHover cursor-pointer">
            Terms Conditions
          </p>
          <p className="footerText pt-3 lg:linkHover cursor-pointer">
            Terms & Conditions
          </p>
        </div>
        <div className="mt-7 lg:mt-0">
          <h3 className="footerTop lg:mt-[30px]">Contact</h3>
          <div className="pt-3 flex items-center gap-2">
            <img src={Address} alt="" />
            <p className="footerText">
              No. 4 ugwuike street umuchigbo iji Nike Enugu
            </p>
          </div>
          <div className="pt-4 flex items-center gap-2">
            <img src={Phone} alt="" />
            <p className="footerText cursor-pointer">0704 668 1895</p>
          </div>
          <div className="pt-4 flex items-center gap-2">
            <img src={Email} alt="" />
            <p className="footerText cursor-pointer">rentice.co@gmail.com </p>
          </div>
          <div className="flex items-center gap-4 mt-7 ">
            <img src={Facebook} alt="" className="socialHover cursor-pointer" />
            <img
              src={Instagram}
              alt=""
              className="socialHover cursor-pointer"
            />
            <img src={X} alt="" className="socialHover cursor-pointer" />
            <img src={LinkedIn} alt="" className="socialHover cursor-pointer" />
            <img src={Thread} alt="" className="socialHover cursor-pointer" />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
