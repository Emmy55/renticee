import React from 'react'
import { Link } from "react-router-dom";
import Dashhome from "../Media/dashhome.png";

import {
    faChevronRight,
   
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

  



function WalletTop({ CurrentPath,
    SelectedText,}) {

  const myCustomColor = "#035FCE";


  return (
    <>
         <div
            className="h-20 relative pt-3 p-10 lg:-right-[21pc] lg:z-30 lg:-ml-0 lg:w-[75.1%]  w-screen"
            style={{ backgroundColor: myCustomColor }}
          >
            <Link to="/FundWallet">
              <button className="linkHover float-right lg:px-9 px-4 text-sm lg:text-base bg-white py-2 rounded-3xl relative top-2 z-40 -right-4 lg:right-10">
                Fund Wallet
              </button>
            </Link>
            <p className="text-white text-xl font-bold lg:right-0 relative right-4 ">
              {SelectedText}
            </p>
            <div className="flex text-white mt-1 lg:right-0 relative right-4 space-x-2">
              <img
                src={Dashhome}
                className="w-5 h-5 filter brightness-100 saturate-125"
              />
              <FontAwesomeIcon
                icon={faChevronRight}
                className="text-xs mt-1 "
              />
              <p className="relative bottom-0.5">{CurrentPath}</p>
            </div>
          </div>
    </>
  )
}

export default WalletTop
