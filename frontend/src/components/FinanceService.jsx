import Button from "./Button.jsx";
import Button2 from "./Button2.jsx";
import Button3 from "./Button3.jsx";
import Button4 from "./Button4.jsx";
import Sort from "./Sort.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

import {
  faChevronLeft,
  faChevronRight,
  faAnglesRight,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Item from "./Item.jsx";
import Aside from "./Aside.jsx";
import CurrentlyAvailableProperty from "./CurrentlyAvailableProperty.jsx";

function FInanceService({
  heroText,
  heroImg,
  showAdditionalDiv,
  Color,
  tempColor,
  Color1,
  tempColor1,
  Color2,
  tempColor2,
  COLOR,
}) {
  const myCustomColor = "#EAEAEA";
  const myCustomColor1 = "#035FCE";

  return (
    <>
      <div className="">
        <div className={` lg:mb-24 mb-[50px] ${COLOR}`}>
          <div className="h-full w-full place-items-center justify-center flex overflowx-x-hiddenx">
            <div className="absolute text-white justify-center text-center -mt-8">
              <p className="p-4 font-Roboto">Rentice Nigeria House Loan</p>
              <motion.h1
                className="ml-2/5 text-lg lg:text-4xl relative lg:left-72 lg:w-3/5 text-center place-items-center flex font-Roboto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {heroText}
              </motion.h1>
            </div>
            <img
              src={heroImg}
              className="w-full object-cover lg:object-fill  h-96 "
            />
          </div>
          {showAdditionalDiv && (
            <div>
              {/* Residential, Commercial & Industrial start */}
              <div className="flex justify-between relative px-2 sm:px-5 lg:px-20 mt-7 lg:mt-10">
                <div className="flex items-center">
                  <p
                    className="lg:px-4 w-20 lg:w-28 lg:py-3 px-2 py-2 rounded-3xl text-xs lg:text-base lg:rounded-full  ml-3 lg:ml-4 bg-slate-200 cursor-pointer font-Roboto"
                    style={{ backgroundColor: Color, color: tempColor }}
                  >
                    Residential
                  </p>
                  <p
                    className="lg:px-4 w-20 lg:w-28 lg:py-3 px-2 py-2 rounded-3xl text-xs lg:text-base lg:rounded-full ml-3 lg:ml-4 cursor-pointer bg-slate-200 font-Roboto"
                    style={{ backgroundColor: Color1, color: tempColor1 }}
                  >
                    Commercial
                  </p>
                  <p
                    className="lg:px-5 lg:w-28 lg:py-3 w-16 px-2 py-2 rounded-3xl text-xs lg:text-base lg:rounded-full ml-3 lg:ml-4 cursor-pointer bg-slate-200 font-Roboto"
                    style={{ backgroundColor: Color2, color: tempColor2 }}
                  >
                    Industrial
                  </p>
                </div>
                <div className="flex items-center ">
                  <p className="text-blue-500 text-[0.70494rem] min-[380px]:text-sm lg:text-base font-Roboto">
                    Post property
                  </p>
                  <div className="absolute  left-0 mt-[100px] md:mt-0 md:relative">
                    <FontAwesomeIcon
                      icon={faMagnifyingGlass}
                      className="mt-1 relative left-8 text-gray-500"
                    />
                    <input
                      type="text"
                      placeholder="Search"
                      className="h-12 w-[335px] min-[390px]:w-[370px] ml-1 border-gray-200 rounded focus:outline-none border-2 text-sm text-black lg:w-72 pl-9 font-Roboto"
                      style={{ backgroundColor: myCustomColor }}
                    />
                  </div>
                </div>
              </div>
              {/* Residential, Commercial & Industrial end */}

              <div className="flex items-start mt-[50px] md:mt-0 lg:items-center justify-between gap-10 px-5 lg:px-20 lg:relative">
                <div>
                  <h3 className=" ml-3 pt-9 mb-2 font-Roboto">
                    Available property to rent in Nigeria
                  </h3>
                  <p
                    className=" p-3 py-5 font-semibold font-Roboto"
                    style={{ backgroundColor: myCustomColor }}
                  >
                    The average price of houses for rent is ₦2,500,000 The most
                    expensive house costs ₦50,000,000. while the cheapest costs
                    ₦20,000. We have a total of 21,891 Property for rent in
                    Nigeria updated on 29 Nov 2023. Among these properties are
                    houses, lands, shops, apartments, flats and commercial
                    spaces . Every Real Estate in Nigeria posted on this site is
                    verified by real estate agents . We also have cheap houses
                    for rent and cheap houses for sale . Refine your property
                    search by price, number of beds and type of property.
                  </p>
                </div>
                {/* Currently Available Property start */}
                <div className="hidden lg:block">
                  <CurrentlyAvailableProperty />
                </div>
                {/* Currently Available Property end */}
              </div>
            </div>
          )}
          <div
            className="md:flex items-center justify-between px-5 lg:px-20 md:h-14 bg-slate-300 mt-10 mb-10 p-2 space-x-1 text-xs lg:text-base lg:space-x-2"
            style={{ backgroundColor: myCustomColor }}
          >
            <div className="flex items-center flex-wrap gap-2">
              <Button />
              <Button2 />
              <Button3 />
              <Button4 />
            </div>
            <button
              className="h-10 px-28 lg:px-32 mt-3 md:mt-0 rounded focus:outline-none text-white"
              style={{ backgroundColor: myCustomColor1 }}
            >
              Refine
            </button>
          </div>
          <FontAwesomeIcon icon="fa-duotone fa-chevron-down" />

          {/* Item section start */}
          <div className="flex px-5 lg:px-20 gap-7 lg:gap-20">
            <div>
              <h4 className=" -pt-8 hidden lg:block">
                Available house to loan in Nigeria
              </h4>
              <div className="flex items-center justify-between pl-2 border-2 mb-2">
                <p className="text-sm  font-semibold font-Roboto">
                  Result 1 - 50 of 100
                </p>
                <Sort />
              </div>

              {/* Items start */}
              <div className="grid lg:grid-cols-1 xl:grid-cols-2 gap-5">
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />

                {/* next item start */}
                <div className="flex mt-16">
                  <FontAwesomeIcon
                    icon={faChevronLeft}
                    className="p-4 px-5 border-2 border-gray-50 cursor-pointer"
                  />
                  <p
                    className="p-3 px-5 border-2 border-gray-50 cursor-pointer rounded hover:border hover:border-[#0073E1]"
                    style={{ backgroundColor: Color, color: tempColor }}
                  >
                    1
                  </p>
                  <p className="p-3 px-5 border-2 border-gray-50 cursor-pointer rounded hover:border hover:border-[#0073E1]">
                    2
                  </p>
                  <p className="p-3 px-5 border-2 border-gray-50 cursor-pointer rounded hover:border hover:border-[#0073E1]">
                    3
                  </p>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="p-4 px-5 border-2 border-gray-50 cursor-pointer"
                  />
                  <FontAwesomeIcon
                    icon={faAnglesRight}
                    className="p-4 px-5 border-2 border-gray-50 cursor-pointer"
                  />
                </div>
                {/* next item end */}
              </div>
              {/* Items end */}
            </div>
            {/* Aside start */}
            <div className="hidden md:block">
              <Aside />
            </div>
            {/* Aside end */}
          </div>
          {/* Item section end */}
        </div>
        {/* Mobile only start */}
        <div className="px-5">
          <div className="lg:hidden">
            <CurrentlyAvailableProperty />
          </div>
          <div className="md:hidden">
            <Aside />
          </div>
        </div>
        {/* Mobile only end */}
      </div>
    </>
  );
}
export default FInanceService;
