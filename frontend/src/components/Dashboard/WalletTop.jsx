import React from "react";
import { Link } from "react-router-dom";
import Dashhome from "../Media/dashhome.png";

import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function WalletTop({ CurrentPath, SelectedText }) {
  const myCustomColor = "#035FCE";

  return (
    <>
      <div className="flex lg:ml-[300px]">
        <div
          className="h-20 pt-3 px-5  w-screen"
          style={{ backgroundColor: myCustomColor }}
        >
          <div className="flex items-center justify-between">
            <div className="flex flex-col text-white">
              <p className="text-white text-xl font-bold ">{SelectedText}</p>
              <div className="flex items-center gap-2">
                <img
                  src={Dashhome}
                  className="w-5 h-5 filter brightness-100 saturate-125"
                />
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="text-xs mt-1 "
                />
                <p className="">{CurrentPath}</p>
              </div>
            </div>
            <Link to="/FundWallet">
              <button className="lg:hover:scale-105 px-4 text-sm lg:text-base bg-white py-2 rounded-3xl relative top-2 z-40 -right-4 lg:right-10">
                Fund Wallet
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default WalletTop;
