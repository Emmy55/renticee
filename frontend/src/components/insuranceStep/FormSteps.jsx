import React from "react";

function FormSteps() {
  return (
    <div>
      <div className="flex justify-center gap-8 min-[445px]:gap-10 sm:gap-16 md:gap-28 lg:gap-[167px] xl:gap-[187px] py-6">
        <div className="flex flex-col items-center">
          <p className="w-[32px] h-[32px] rounded-full bg-[#035FCE] flex justify-center items-center text-white text-[1.1875rem] font-Roboto">
            1
          </p>
          <p className="font-bold text-black text-opacity-85 text-[0.8125rem] lg:text-[1.1875rem] mt-1 font-Roboto">
            Personal
          </p>
        </div>
        <div className="flex flex-col items-center">
          <p className="w-[32px] h-[32px] rounded-full bg-white flex justify-center items-center text-[#035FCE] text-[1.1875rem] border border-[#000000] border-opacity-25 font-Roboto">
            2
          </p>
          <p className="ext-black text-opacity-35 text-[0.8125rem] lg:text-[1.1875rem] mt-1 font-Roboto">
            Home
          </p>
        </div>
        <div className="flex flex-col items-center">
          <p className="w-[32px] h-[32px] rounded-full bg-white flex justify-center items-center text-[#035FCE] text-[1.1875rem] border border-[#000000] border-opacity-25 font-Roboto">
            3
          </p>
          <p className="ext-black text-opacity-35 text-[0.8125rem] lg:text-[1.1875rem] mt-1 font-Roboto">
            Upload
          </p>
        </div>
        <div className="flex flex-col items-center">
          <p className="w-[32px] h-[32px] rounded-full bg-white flex justify-center items-center text-[#035FCE] text-[1.1875rem] border border-[#000000] border-opacity-25 font-Roboto">
            4
          </p>
          <p className="ext-black text-opacity-35 text-[0.8125rem] lg:text-[1.1875rem] mt-1 font-Roboto">
            Confirm
          </p>
        </div>
        <div className="flex flex-col items-center">
          <p className="w-[32px] h-[32px] rounded-full bg-white flex justify-center items-center text-[#035FCE] text-[1.1875rem] border border-[#000000] border-opacity-25 font-Roboto">
            5
          </p>
          <p className="ext-black text-opacity-35 text-[0.8125rem] lg:text-[1.1875rem] mt-1 font-Roboto">
            Payment
          </p>
        </div>
      </div>
    </div>
  );
}

export default FormSteps;
