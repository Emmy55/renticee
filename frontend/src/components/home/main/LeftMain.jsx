import React from "react";

function LeftMain(props) {
  return (
    <div>
      <div className={`flex justify-center gap-0 ${props.reverse}`}>
        <div
          className={`w-[179px] h-[145.45px] lg:w-[450px] lg:h-[353.17px] xl:w-[570px] xl:h-[463.17px] bg-white pt-[8px] px-[20px] lg:pt-[30px] lg:px-[30px] xl:pt-[70px] xl:px-[70px] shadow-3xl ${props.round}`}
        >
          <h1 className="w-[121.3px] lg:w-[335px] xl:w-[345px] text-[0.78506rem] lg:text-[2.5rem] text-[#282D3A] font-bold font-Roboto">
            {props.title}
          </h1>
          <p className="w-[150px] lg:w-[403px] xl:w-[423px] text-[0.5075rem] lg:text-base text-[#282D3A] font-normal font-Roboto pt-0 lg:pt-5">
            {props.body}
          </p>
        </div>
        <div className="w-[179px] h-[145.45px] lg:w-[450px] lg:h-[353.17px] xl:w-[570px] xl:h-[463.17px]">
          <img
            src={props.img}
            alt=""
            className="w-[179px] h-[145.45px] lg:w-[450px] lg:h-[353.17px] xl:w-[570px] xl:h-[463.17px]"
          />
        </div>
      </div>
    </div>
  );
}

export default LeftMain;
