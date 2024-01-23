import Button from "./Button.jsx";
import Button2 from "./Button2.jsx";
import Button3 from "./Button3.jsx";
import Button4 from "./Button4.jsx";
import Sort from "./Sort.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
<<<<<<< HEAD
import Bedroom from "./Media/bedroom.png";
=======
import { motion } from "framer-motion";
>>>>>>> 9b36b4a431557ab2d2395e3018f4efa8524aa7d6

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
<<<<<<< HEAD
      <div className={`min-h-screen lg:mb-24 mb-[240vh] ${COLOR}`}>
        <div className="h-full w-full place-items-center justify-center flex overflowx-x-hiddenx">
          <div className="absolute text-white justify-center text-center -mt-8">
            <p className="p-4">Rentice Nigeria House Loan</p>
            <h1 className="ml-2/5 text-lg lg:text-4xl relative lg:left-72 lg:w-3/5 text-center place-items-center flex">
              {heroText}
            </h1>
          </div>
          <img
            src={heroImg}
            className="w-full object-cover lg:object-fill  h-96 "
          />
        </div>
        {showAdditionalDiv && (
          <div>
            <div className="flex ml-28 mt-10">
              <p
                className="px-4 rounded-2xl py-1 ml-4 bg-slate-200 cursor-pointer"
                style={{ backgroundColor: Color, color: tempColor }}
              >
                Residential
              </p>
              <p
                className="px-4 rounded-2xl py-1 ml-4 cursor-pointer bg-slate-200"
                style={{ backgroundColor: Color1, color: tempColor1 }}
              >
                Commercial
              </p>
              <p
                className="px-4 rounded-2xl py-1 ml-4 cursor-pointer bg-slate-200"
                style={{ backgroundColor: Color2, color: tempColor2 }}
              >
                Industrial
              </p>
              <div className="flex ml-auto mr-9">
                <p className="text-blue-500 mr-10">Post property</p>
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className="-mr-7 mt-2 relative left-6 z-10 lg:top-2 text-gray-500"
                />
                <input
                  type="text"
                  placeholder="Search"
                  className="h-12 border-gray-200 rounded focus:outline-none border-2 text-sm text-black lg:w-72 w-[90vw] ml-6  pl-9 "
                  style={{ backgroundColor: myCustomColor }}
                />
              </div>
            </div>
            <h3 className="lg:ml-28 ml-3 pt-9 mb-2">
              Available property to rent in Nigeria
            </h3>
            <div className="flex lg:ml-28 lg:relative lg:right-2 ">
              <p
                className="lg:w-3/5 p-3 lg:p-2 font-semibold"
                style={{ backgroundColor: myCustomColor }}
              >
                The average price of houses for rent is ₦2,500,000 The most
                expensive house costs ₦50,000,000. while the cheapest costs
                ₦20,000. We have a total of 21,891 Property for rent in Nigeria
                updated on 29 Nov 2023. Among these properties are houses,
                lands, shops, apartments, flats and commercial spaces . Every
                Real Estate in Nigeria posted on this site is verified by real
                estate agents . We also have cheap houses for rent and cheap
                houses for sale . Refine your property search by price, number
                of beds and type of property.
              </p>
              <div className="relative top-[740%] lg:relative lg:bottom-0  lg:block shadow-xl border border-solid border-gray-50 text-xl ml-2  lg:ml-24 p-4">
                <h3 className=" pb -2">
                  Currently Available Property For Rent
                </h3>
                <div className="flex">
                  <h2>Types</h2>
                  <p className="text-xs p-2 pl-4">1 bed</p>
                  <p className="text-xs p-2 pl-4">2 bed</p>
                  <p className="text-xs p-2 pl-4">3 bed</p>
                  <p className="text-xs p-2 pl-4">4 bed</p>
                  <p className="text-xs p-2 pl-4">5 bed</p>
=======
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
>>>>>>> 9b36b4a431557ab2d2395e3018f4efa8524aa7d6
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
<<<<<<< HEAD
            Refine
          </button>
        </div>
        <FontAwesomeIcon icon="fa-duotone fa-chevron-down" />
        <div className="lg:pl-28">
          <h4 className="pb-8 -pt-8 hidden lg:block">
            Available house to loan in Nigeria
          </h4>
          <div className="flex pt-0 text-center items-center border-2 mb-2 lg:w-2/3">
            <p className="text-sm pl-4 font-semibold whitespace-nowrap">
              Result 1 - 50 of 100
            </p>
            <Sort />
          </div>
          <div className="flex">
            <div className="flex space-x-8 mt-7 w-2/3">
              <div className="shadow-lg h-4/6">
                <img src={House} className="w-96 " />
                <div className="z-50 w-96 pl-6 relative -top-7 text-white flex">
                  <p>
                    {" "}
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      className="pr-2"
                    />{" "}
                    Design District, Miami
                  </p>
                  <FontAwesomeIcon
                    icon={faVideo}
                    className="relative left-28 top-1 pr-3"
                  />
                  <FontAwesomeIcon
                    icon={faCamera}
                    className="relative left-28 top-1"
                  />
                  <p className="relative left-28 ml-1 top-0">9</p>
                </div>
                <div className="z-50 w-96 pl-6 pt-6 mb-10">
                  <h1 className="text-xl font-semibold">
                    Villa On Washington Ave
                  </h1>
                  <p className="text-blue-600 pt-2">$ 5,500,000</p>
                  <p className="text-zinc-600 pt-5 text-sm w-80">
                    Beautiful, updated, ground level Co-op apartment in the
                    desirable Bay Terrace neighborhood ...
                  </p>
                  <div className="flex space-x-6 mt-4 text-sm lg:text-lg text-zinc-400 mb-12 ">
                    <img src={Bedroom} className="w-6 -mt- h-5"/>
                    <p className="relative right-4 -top-1">5</p>
                    <FontAwesomeIcon icon={faBath} />{" "}
                    <p className="relative right-4 -top-1">3</p>
                    <FontAwesomeIcon icon={faMaximize} />{" "}
                    <p className="relative right-4 -top-1">
                      250ft<sup>2</sup>
                    </p>
                  </div>
                  <hr className="border-1 border-gray-300 relative -left-6 w-96 my-4 -mt-6" />

                  <div className="flex">
                    <img src={Maria} className="w-8" />
                    <h4 className="font-semibold mt-1 ml-4">Maria Barlow</h4>
                  </div>
                </div>
                <img
                  src={HouseShadow}
                  className="w-96 relative -top-96 -mt-96"
                />
              </div>
              <div className="shadow-lg h-4/6  w-96">
                <img src={House} className="w-96 " />
                <div className="z-50 ml-6 w-96  relative -top-7 text-white flex">
                  <p>
                    {" "}
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      className="pr-2"
                    />{" "}
                    Design District, Miami
                  </p>
                  <FontAwesomeIcon
                    icon={faVideo}
                    className="relative left-28 top-1 pr-3"
                  />
                  <FontAwesomeIcon
                    icon={faCamera}
                    className="relative left-28 top-1"
                  />
                  <p className="relative left-28 ml-1 top-0">9</p>
                </div>
                <div className="z-50 w-96 pl-6 pt-6 mb-10">
                  <h1 className="text-xl font-semibold">
                    Villa On Washington Ave
                  </h1>
                  <p className="text-blue-600 pt-2">$ 5,500,000</p>
                  <p className="text-zinc-600 pt-5 text-sm w-80">
                    Beautiful, updated, ground level Co-op apartment in the
                    desirable Bay Terrace neighborhood ...
                  </p>
                  <div className="flex space-x-6 mt-4 text-sm lg:text-lg text-zinc-400 mb-12 ">
                    <img src={Bedroom} className="w-6 -mt- h-5"/>
                    <p className="relative right-4 -top-1">5</p>
                    <FontAwesomeIcon icon={faBath} />{" "}
                    <p className="relative right-4 -top-1">3</p>
                    <FontAwesomeIcon icon={faMaximize} />{" "}
                    <p className="relative right-4 -top-1">
                      250ft<sup>2</sup>
                    </p>
                  </div>
                  <hr className="border-1 border-gray-300 relative -left-6 w-96 my-4 -mt-6" />

                  <div className="flex">
                    <img src={Maria} className="w-8 " />
                    <h4 className="font-semibold mt-1 ml-4">Maria Barlow</h4>
                  </div>
                </div>
                <img
                  src={HouseShadow}
                  className="w-96 relative -top-96 -mt-96"
                />
              </div>
              {/* Item 2 end */}
=======
            <div className="flex items-center flex-wrap gap-2">
              <Button />
              <Button2 />
              <Button3 />
              <Button4 />
>>>>>>> 9b36b4a431557ab2d2395e3018f4efa8524aa7d6
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
