import React from "react";

function LeftMain(props) {
  return (
    <div>
      <div className="flex justify-center">
        <div className="w-[570px] h-[463.17px] bg-white pt-[70px] px-[70px] shadow-3xl">
          <h1 className="w-[338px] text-[2.5rem] text-[#282D3A] font-bold font-Roboto">
            {props.title}
          </h1>
          <p className="w-[423px] text-base text-[#282D3A] font-normal font-Roboto pt-5">
            {props.body}
          </p>
        </div>
        <div className="w-[570px] h-[463.17px]">
          <img src={props.img} alt="" />
        </div>
      </div>
    </div>
  );
}

export default LeftMain;
