import React from "react";

import TopMenuBar from "./images/top-menu.svg";

function TopMenu(props) {
  return (
    <div>
      <div className="px-5 py-5 flex items-center justify-between">
        <p className="text-[1.75rem] font-bold text-[#282D3A] font-Roboto">
          Setting
        </p>
        <img src={TopMenuBar} alt="" />
      </div>
    </div>
  );
}

export default TopMenu;
