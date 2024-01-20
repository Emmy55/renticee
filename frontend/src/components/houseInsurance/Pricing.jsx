import React from "react";

import Check from "./images/check.svg";
import { Link } from "react-router-dom";

function Pricing() {
  return (
    <div>
      <div className="mt-8">
        <h1 className="text-[1.4375rem] text-[#282D3A] font-bold font-Roboto text-center lg:text-[2.5rem]">
          Pricing Built for Everyone
        </h1>
        <div className="flex items-center gap-[30px] justify-center md:gap-[100px] lg:gap-[300px] lg:mt-28 lg:mr-20">
          <div>
            <p className="h-[30.03px] text-[0.56919rem] text-black text-opacity-85 font-bold font-Roboto pl-2 flex items-center lg:text-base lg:h-[40.03px] border-[#97C7FF] border-opacity-20 border-r">
              Features
            </p>
            <p className="w-[143.44px] h-[30.03px] text-[0.56919rem] text-black text-opacity-85 font-medium font-Roboto border-y border-[#97C7FF] border-opacity-20 border-r flex items-center pl-2 lg:text-base lg:w-[306.06px] lg:h-[64.07px]">
              Fire
            </p>
            <p className="w-[143.44px] h-[30.03px] text-[0.56919rem] text-black text-opacity-85 font-medium font-Roboto border-y border-[#97C7FF] border-opacity-20 border-r flex items-center pl-2 lg:text-base lg:w-[306.06px] lg:h-[64.07px]">
              Burglary & Theft
            </p>
            <p className="w-[143.44px] h-[30.03px] text-[0.56919rem] text-black text-opacity-85 font-medium font-Roboto border-y border-[#97C7FF] border-opacity-20 border-r flex items-center pl-2 lg:text-base lg:w-[306.06px] lg:h-[64.07px]">
              Environmental damage
            </p>
            <p className="w-[143.44px] h-[30.03px] text-[0.56919rem] text-black text-opacity-85 font-medium font-Roboto border-y border-[#97C7FF] border-opacity-20 border-r flex items-center pl-2 lg:text-base lg:w-[306.06px] lg:h-[64.07px]">
              Death
            </p>
            <p className="w-[143.44px] h-[30.03px] text-[0.56919rem] text-black text-opacity-85 font-medium font-Roboto border-y border-[#97C7FF] border-opacity-20 border-r flex items-center pl-2 lg:text-base lg:w-[306.06px] lg:h-[64.07px]">
              Bodily Injury
            </p>
            <p className="w-[143.44px] h-[30.03px] text-[0.56919rem] text-black text-opacity-85 font-medium font-Roboto border-t border-[#97C7FF] border-opacity-20 border-r flex items-center pl-2"></p>
          </div>
          <div className="flex flex-col items-center mt-5 pt-0 gap-1">
            <div className="flex flex-col items-center">
              <p className="text-[0.60325rem] text-[#003896] font-bold font-Poppins lg:text-[1.28719rem]">
                Home Content Insurance
              </p>
              <p className="h-[30.03px] text-[1.173rem] text-[#EF3333] font-black font-Poppins lg:text-[2.50281rem] lg:h-[50.03px]">
                ₦15,000.00 /YR.
              </p>
            </div>
            <div className="flex flex-col pb-7 gap-1 items-center">
              <div className="h-[25.03px] border-b border-[#97C7FF] border-opacity-20 flex items-center justify-center w-5 lg:w-[306.06px] lg:h-[64.07px] lg:border-none">
                <img
                  src={Check}
                  alt=""
                  className="lg:w-[28.6px] lg:h-[28.6px] border-b border-[#97C7FF] border-opacity-20"
                />
              </div>
              <div className="h-[25.03px] border-b border-[#97C7FF] border-opacity-20 pt-1 flex items-center justify-center w-5 lg:w-[306.06px] lg:h-[64.07px] lg:border-none">
                <img
                  src={Check}
                  alt=""
                  className="lg:w-[28.6px] lg:h-[28.6px] border-b border-[#97C7FF] border-opacity-20"
                />
              </div>
              <div className="h-[25.03px] border-b border-[#97C7FF] border-opacity-20 pt-1 flex items-center justify-center w-5 lg:w-[306.06px] lg:h-[64.07px] lg:border-none">
                <img
                  src={Check}
                  alt=""
                  className="lg:w-[28.6px] lg:h-[28.6px] border-b border-[#97C7FF] border-opacity-20"
                />
              </div>
              <div className="h-[25.03px] border-b border-[#97C7FF] border-opacity-20 pt-1 flex items-center justify-center w-5 lg:w-[306.06px] lg:h-[64.07px] lg:border-none">
                <img
                  src={Check}
                  alt=""
                  className="lg:w-[28.6px] lg:h-[28.6px] border-b border-[#97C7FF] border-opacity-20"
                />
              </div>
              <div className="h-[25.03px] border-b border-[#97C7FF] border-opacity-20 pt-1 flex items-center justify-center w-5 lg:w-[306.06px] lg:h-[64.07px] lg:border-none">
                <img
                  src={Check}
                  alt=""
                  className="lg:w-[28.6px] lg:h-[28.6px] border-b border-[#97C7FF] border-opacity-20"
                />
              </div>
              <Link to="/step1">
                <p className="text-[0.46919rem] text-white bg-[#2150B7] w-[49.54px] h-[23.06px] rounded-sm flex items-center justify-center cursor-pointer mt-0 lg:w-[105.71px] lg:h-[49.2px] lg:text-base lg:hover:scale-105 lg:mt-7">
                  Buy Now
                </p>
              </Link>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="flex flex-col items-center lg:mt-20">
          <p className="text-base text-[#282D3A] w-[358px] md:w-[558px] lg:w-[1058px]">
            <span className="font-bold">Cooling Oﬀ Period:</span> If for any
            reason you choose to discontinue this policy, you may pause it 30
            days from when it started - this is called a cooling oﬀ period. As
            long as you have not made a claim, we will deduct the cost of any
            medical tests and other costs that we may have incurred and then
            make a refund of your contribution.
          </p>
          <p className="text-base text-[#282D3A] w-[358px] mt-5 md:w-[558px] pb-10 lg:w-[1058px] lg:pb-28">
            <span className="font-bold">Policy Cancellation:</span> After the 30
            day cooling oﬀ period, you or the company may decide to permanently
            cancel the contract. This must be stated by giving 30 days advance
            notiﬁcation in writing. The Company may decide to cancel the Policy
            if: - You misrepresent important facts - You provide false,
            inaccurate or incomplete information - Your claim is fraudulent If
            this happens, you do not get any cash back.
          </p>
        </div>
        {/*  */}
      </div>
    </div>
  );
}

export default Pricing;
