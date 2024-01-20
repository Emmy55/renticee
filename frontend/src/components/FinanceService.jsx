import Button from "./Button.jsx";
import Button2 from "./Button2.jsx";
import Button3 from "./Button3.jsx";
import Button4 from "./Button4.jsx";
import Sort from "./Sort.jsx";
import House from "./Media/house.png";
import HouseShadow from "./Media/houseshadow.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faLocationDot,
  faVideo,
  faCamera,
  faCar,
  faBath,
  faMaximize,
  faEnvelopeOpenText,
  faChevronLeft,
  faChevronRight,
  faAnglesRight,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import Maria from "./Media/maria.png";
import { Link } from "react-router-dom";

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
      <div className={COLOR}>
        <div className="h-full w-full place-items-center justify-center flex overflowx-x-hiddenx">
          <div className="absolute text-white justify-center text-center -mt-8">
            <p className="p-4">Rentice Nigeria House Loan</p>
            <h1 className="ml-2/5 text-4xl relative left-72 w-3/5 text-center place-items-center flex">
              {heroText}
            </h1>
          </div>
          <img src={heroImg} className="w-full h-96 " />
        </div>
        {showAdditionalDiv && (
          <div>
            <div className="flex ml-28 mt-10">
              <Link to="/residential">
                <p
                  className="px-4 rounded-2xl py-1 ml-4 bg-slate-200 cursor-pointer"
                  style={{ backgroundColor: Color, color: tempColor }}
                >
                  Residential
                </p>
              </Link>
              <Link to="/commercial">
                <p
                  className="px-4 rounded-2xl py-1 ml-4 cursor-pointer bg-slate-200"
                  style={{ backgroundColor: Color1, color: tempColor1 }}
                >
                  Commercial
                </p>
              </Link>
              <Link to="/industrial">
                <p
                  className="px-4 rounded-2xl py-1 ml-4 cursor-pointer bg-slate-200"
                  style={{ backgroundColor: Color2, color: tempColor2 }}
                >
                  Industrial
                </p>
              </Link>
              <div className="flex ml-auto mr-9">
                <p className="text-blue-500 mr-10">Post property</p>
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className="-mr-7 mt-2 z-10 text-gray-500"
                />
                <input
                  type="text"
                  placeholder="Search"
                  className="border-gray-200 focus:outline-none border-2 text-sm text-black w-72 pl-9 "
                  style={{ backgroundColor: myCustomColor }}
                />
              </div>
            </div>
            <h3 className="ml-28 pt-9 mb-2">
              Available property to rent in Nigeria
            </h3>
            <div className="flex ml-28 ">
              <p
                className="w-3/5 font-semibold"
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
              <div className="shadow-lg text-xl ml-24 p-4">
                <h3 className="pb -2">Currently Available Property For Rent</h3>
                <div className="flex">
                  <h2>Types</h2>
                  <p className="text-xs p-2 pl-4">1 bed</p>
                  <p className="text-xs p-2 pl-4">2 bed</p>
                  <p className="text-xs p-2 pl-4">3 bed</p>
                  <p className="text-xs p-2 pl-4">4 bed</p>
                  <p className="text-xs p-2 pl-4">5 bed</p>
                </div>
                <div className="flex">
                  <h2 className="text-lg">Flats</h2>
                  <p className="text-xs p-2 pl-6">2256</p>
                  <p className="text-xs p-2 pl-6">2835</p>
                  <p className="text-xs p-2 pl-6">2420</p>
                  <p className="text-xs p-2 pl-6">351</p>
                  <p className="text-xs p-2 pl-6">47</p>
                </div>
                <div className="flex">
                  <h2 className="text-lg">Houses</h2>
                  <p className="text-xs p-2 pl-5">81</p>
                  <p className="text-xs p-2 pl-5">902</p>
                  <p className="text-xs p-2 pl-5">1268</p>
                  <p className="text-xs p-2 pl-5">3234</p>
                  <p className="text-xs p-2 pl-5">848</p>
                </div>
              </div>
            </div>
          </div>
        )}
        <div
          className="flex h-14 bg-slate-300 mt-10 mb-10 p-2 space-x-5 pl-28"
          style={{ backgroundColor: myCustomColor }}
        >
          <Button />
          <Button2 />
          <Button3 />
          <Button4 />
          <button
            className="h-10 px-32 rounded focus:outline-none relative left-1/4 text-white"
            style={{ backgroundColor: myCustomColor1 }}
          >
            Refine
          </button>
        </div>
        <FontAwesomeIcon icon="fa-duotone fa-chevron-down" />
        <div className="pl-28">
          <h4 className="pb-8 -pt-8">Available house to loan in Nigeria</h4>
          <div className="flex pt-0 text-center items-center border-2 mb-2 w-2/3">
            <p className="text-sm pl-4 font-semibold">Result 1 - 50 of 100</p>
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
                  <p className="text-zinc-600 pt-5">
                    Beautiful, updated, ground level Co-op apartment in the
                    desirable Bay Terrace neighborhood ...
                  </p>
                  <div className="flex space-x-6 mt-4 text-zinc-400 mb-12">
                    <FontAwesomeIcon icon={faCar} />{" "}
                    <p className="relative right-4 -top-1">5</p>
                    <FontAwesomeIcon icon={faBath} />{" "}
                    <p className="relative right-4 -top-1">3</p>
                    <FontAwesomeIcon icon={faMaximize} />{" "}
                    <p className="relative right-4 -top-1">
                      250ft<sup>2</sup>
                    </p>
                  </div>
                  <hr className="border-1 border-gray-300 relative -left-6 w-96 my-4 -mt-6" />
                  <Link to="/agentprofile">
                    <div className="flex">
                      <img src={Maria} className="w-8" />
                      <h4 className="font-semibold mt-1 ml-4">Bright Moses</h4>
                    </div>
                  </Link>
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
                  <p className="text-zinc-600 pt-5">
                    Beautiful, updated, ground level Co-op apartment in the
                    desirable Bay Terrace neighborhood ...
                  </p>
                  <div className="flex space-x-6 mt-4 text-zinc-400 mb-12 ">
                    <FontAwesomeIcon icon={faCar} />{" "}
                    <p className="relative right-4 -top-1">5</p>
                    <FontAwesomeIcon icon={faBath} />{" "}
                    <p className="relative right-4 -top-1">3</p>
                    <FontAwesomeIcon icon={faMaximize} />{" "}
                    <p className="relative right-4 -top-1">
                      250ft<sup>2</sup>
                    </p>
                  </div>
                  <hr className="border-1 border-gray-300 relative -left-6 w-96 my-4 -mt-6" />
                  <Link to="/agentprofile">
                    <div className="flex">
                      <img src={Maria} className="w-8 " />
                      <h4 className="font-semibold mt-1 ml-4">Bright Moses</h4>
                    </div>
                  </Link>
                </div>
                <img
                  src={HouseShadow}
                  className="w-96 relative -top-96 -mt-96"
                />
              </div>
            </div>
            <div className="ml-10">
              <p className="font-semibold mb-7">States</p>
              <p className="mb-0">Abuja</p>
              <p className="mb-0">Oyo</p>
              <p className="mb-0">Ogun</p>
              <p className="mb-0">Rivers</p>
              <p className="mb-0">Enugu</p>
              <p className="mb-0">Edo</p>
              <p className="mb-0">Akwa Ibom</p>
              <p className="mb-0">Kaduna</p>
              <p className="mb-0">Imo</p>
              <p className="mb-0">Osun</p>
              <p className="mb-0">Cross River</p>
              <p className="mb-0">Anambra</p>
              <p className="mb-0">Kwara</p>
              <p className="mb-0">Abia</p>
              <p className="mb-0">Katsina</p>
              <p className="mb-0">Ondo</p>
              <p className="mb-0">Adamawa</p>
              <p className="mb-0">Bauchi</p>
              <p className="mb-0">Ebonyi</p>
            </div>
            <div className="relative h-320 h-64 -ml-16 mb-96 top-96 mt-52 w-2/3 p-5 ring-slate-500 shadow-xl">
              <div className="flex text-2xl " style={{ color: myCustomColor1 }}>
                <FontAwesomeIcon icon={faEnvelopeOpenText} />
                <h1 className="ml-3 -mt-1">Get Latest Properties</h1>
              </div>
              <p>Get notified when neew properties become available</p>
              <input
                type="type"
                placeholder="Enter your Name"
                className="border-gray-200 border-2 focus:outline-none pl-3 text-sm p-2 mb-6 mt-6 "
              />{" "}
              <br />
              <div className="flex">
                <input
                  type="type"
                  placeholder="Enter your email Address"
                  className="border-gray-200 border-2 text-sm pl-3 p-2 z-10 focus:outline-none"
                />
                <input
                  type="submit"
                  value="Subscribe Now"
                  style={{ backgroundColor: myCustomColor1 }}
                  className="px-7 cursor-pointer text-white focus rounded-sm relative left-3 focus:outline-none"
                />
              </div>
            </div>
          </div>
          <div className="relative -top-24 flex">
            <FontAwesomeIcon
              icon={faChevronLeft}
              className="p-4 px-5 border-2 border-gray-50 cursor-pointer"
            />
            <p
              className="p-3 px-5 border-2 border-gray-50 cursor-pointer"
              style={{ backgroundColor: Color, color: tempColor }}
            >
              1
            </p>
            <p className="p-3 px-5 border-2 border-gray-50 cursor-pointer">2</p>
            <p className="p-3 px-5 border-2 border-gray-50 cursor-pointer">3</p>
            <FontAwesomeIcon
              icon={faChevronRight}
              className="p-4 px-5 border-2 border-gray-50 cursor-pointer"
            />
            <FontAwesomeIcon
              icon={faAnglesRight}
              className="p-4 px-5 border-2 border-gray-50 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default FInanceService;
