import React from "react";

function Section(props) {
  return (
    <div>
      <div className={`p-4 flex flex-col items-center ${props.color}`}>
        <h2 className="text-[1.1875rem] md:text-[1.4] lg:text-[1.75rem] text-[#035FCE] font-bold font-Roboto w-[366px] md:w-[726px] lg:w-[1000px] xl:w-[1270px]">
          {props.title}
        </h2>
        <p className="text-[0.8125rem] md:text-base lg:text-[1.1875rem] text-[#282D3A] font-Roboto pt-1 w-[366px] md:w-[726px] lg:w-[1000px] xl:w-[1270px]">
          {props.subtitle}
        </p>
        <p className="text-[0.8125rem] md:text-base lg:text-[1.1875rem] text-[#282D3A] font-Roboto pt-3 w-[366px] md:w-[726px] lg:w-[1000px] xl:w-[1270px]">
          {props.paragraph1}
        </p>
        <p className="text-[0.8125rem] md:text-base lg:text-[1.1875rem] text-[#282D3A] font-Roboto pt-2 w-[366px] md:w-[726px] lg:w-[1000px] xl:w-[1270px]">
          {props.paragraph2}
        </p>
        <p className="text-[0.8125rem] md:text-base lg:text-[1.1875rem] text-[#282D3A] font-Roboto pt-2 w-[366px] md:w-[726px] lg:w-[1000px] xl:w-[1270px]">
          {props.paragraph3}
        </p>
        <p className="text-[0.8125rem] md:text-base lg:text-[1.1875rem] text-[#282D3A] font-Roboto pt-2 w-[366px] md:w-[726px] lg:w-[1000px] xl:w-[1270px]">
          {props.paragraph4}
        </p>
      </div>
    </div>
  );
}

export default Section;
