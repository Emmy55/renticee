import React from "react";

import BuyAirtime from "../Media/buyAirtime.png";
import BuyData from "../Media/buyData.png";
import Mtn from "../Media/mtn.png";
import Glo from "../Media/glo.png";
import Airtel from "../Media/airtel.png";
import ninemobile from "../Media/ninemobile.png";
import TvSub from "../Media/tvSub.png";
import Changepin from "../Media/changepin.png";
import Electricitybills from "../Media/electricitybills.png";
import Dashhome from "../Media/dashhome.png";

import { Link } from "react-router-dom";

function DropdownMenu({
  ValueInText,
  ValueInText1,
  ValueInText2,
  ValueInText3,
  ValueInText4,
  ValueInText5,
  showAdditionalDiv,
  showAdditionalDiv1,
  showAdditionalDiv2,
  showAdditionalDiv3,
  showAdditionalDiv4,
  showAdditionalDiv5,
  showAdditionalDiv6,
  showAdditionalDiv7,
  showAdditionalDiv8,
  showAdditionalDiv9,
  showAdditionalDiv10,
  showAdditionalDiv11,
  showAdditionalDiv12,
  LeftValue,
  Linking,
  Link1,
  Link2,
  Link3,
  SubLinking,
  SubLink1,
  SubLink2,
  SubLink3,
  AirLinking,
  AirLink1,
  AirLink2,
  AirLink3,
  NetworkLogo,
  SimType,
  CurrentPath,
  SelectedText,
  boolean,
  boolean1,
  boolean2,
  boolean3,
  tempColor,
  Color,
  tempColor1,
  Color1,
  tempColor2,
  Color2,
  tempColor3,
  Color3,
  tempColor4,
  Color4,
  tempColor5,
  Color5,
  Amount,
}) {
  return (
    <div className="z-30 flex flex-col uppercase text-xs bg-primary w-[180px] text-white px-5 pt-5 pb-6 gap-5 rounded font-bold relative">
      {/* <div className="hidden "> */}
      <Link to="/billpayment">
        <div
          className="flex space-x-6 relative right-7 w-60 pl-4 py-4"
          style={{ backgroundColor: Color5, color: tempColor5 }}
        >
          <img
            src={Dashhome}
            className="w-5 h-5 filter brightness-100 relative -top-1 left-2 saturate-125"
            style={{
              filter: `saturate(1.25) brightness(${ValueInText5})`,
            }}
          />
          <p>Dashboard</p>
        </div>
      </Link>

      <hr className="text-black relative top-[-20px] w-76" />
      <div className="relative top-[-10px] right-6">
        <p className="pb-4 font-bold text-sm relative left-5">MAIN MENU</p>

        <Link to="/MtnData">
          <div
            className="flex py-4 w-60 space-x-4  pl-4 "
            style={{ backgroundColor: Color, color: tempColor }}
          >
            <img
              src={BuyData}
              className="w-5 filter brightness-75 saturate-125"
              style={{
                filter: `saturate(1.25) brightness(${ValueInText})`,
              }}
            />
            <p className="whitespace-nowrap">Buy Data</p>
          </div>
        </Link>
        <Link to="/MtnAirtime">
          <div
            className="flex py-4 w-60 space-x-4  pl-4 "
            style={{ backgroundColor: Color1, color: tempColor1 }}
          >
            <img
              src={BuyAirtime}
              className="w-5 filter brightness-75 saturate-125"
              style={{
                filter: `saturate(1.25) brightness(${ValueInText1})`,
              }}
            />

            <p className="whitespace-nowrap">Buy Airtime</p>
          </div>
        </Link>
        <Link to="/TvSub">
          <div
            className="flex py-4 w-60 space-x-4 mt-[-10px] pl-4 "
            style={{ backgroundColor: Color2, color: tempColor2 }}
          >
            <img
              src={TvSub}
              className="w-5 filter brightness-75 saturate-125"
              style={{
                filter: `saturate(1.25) brightness(${ValueInText2})`,
              }}
            />

            <p className="whitespace-nowrap">TV Subscription</p>
          </div>
        </Link>
        <Link to="/ElectricityBills">
          <div
            className="flex py-4 w-60 space-x-2 mt-[-10px] pl-4 "
            style={{ backgroundColor: Color3, color: tempColor3 }}
          >
            <img
              src={Electricitybills}
              className="w-7 relative -left-1 filter brightness-75 saturate-125"
              style={{
                filter: `saturate(1.25) brightness(${ValueInText3})`,
              }}
            />

            <p className="whitespace-nowrap">Electricity Bills</p>
          </div>
        </Link>
        <Link to="/ChangePin">
          <div
            className="flex py-4 w-60 space-x-4 mt-[-15px] pl-4 "
            style={{ backgroundColor: Color4, color: tempColor4 }}
          >
            <img
              src={Changepin}
              className="w-6 filter brightness-75 saturate-125"
              style={{
                filter: `saturate(1.25) brightness(${ValueInText4})`,
              }}
            />

            <p className="whitespace-nowrap">Change Pin</p>
          </div>
        </Link>
        {/* </div> */}
      </div>
    </div>
  );
}

export default DropdownMenu;
