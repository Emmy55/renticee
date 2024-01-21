import React from "react";

function Top(props) {
  return (
    <div>
      <div className="pl-5 py-5 border-b border-b-[#DFE2E6]">
        <p className="text-[1.1875rem] font-bold text-[#035FCE] font-Roboto lg:text-[1.4375rem]">
          {props.title}
        </p>
      </div>
    </div>
  );
}

export default Top;
