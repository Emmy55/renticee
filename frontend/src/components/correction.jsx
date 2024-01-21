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
            <div className="flex flex-wrap mt-7 lg:flex lg:ml-28 lg:mt-10">
              <p
                className="lg:px-4 w-20 lg:w-28 lg:py-3 px-2 py-2 rounded-3xl text-xs lg:text-base lg:rounded-2xl  ml-3 lg:ml-4 bg-slate-200 cursor-pointer"
                style={{ backgroundColor: Color, color: tempColor }}
              >
                Residential
              </p>
              <p
                className="lg:px-4 w-20 lg:w-28 lg:py-3 px-2 py-2 rounded-3xl text-xs lg:text-base lg:rounded-2xl ml-3 lg:ml-4 cursor-pointer bg-slate-200"
                style={{ backgroundColor: Color1, color: tempColor1 }}
              >
                Commercial
              </p>
              <p
                className="lg:px-5 lg:w-28 lg:py-3 w-16 px-2 py-2 rounded-3xl text-xs lg:text-base lg:rounded-2xl ml-3 lg:ml-4 cursor-pointer bg-slate-200"
                style={{ backgroundColor: Color2, color: tempColor2 }}
              >
                Industrial
              </p>
              <div className="lg:flex ml-auto mr-9">
                <p className="text-blue-500 text-sm relative -top-7 lg:top-3 left-64 lg:left-0 ml-2 lg:ml-0 lg:text-base mr-10 whitespace-nowrap">
                  Post property
                </p>
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
              <div className="absolute bottom-[-130pc] lg:relative lg:bottom-0  lg:block shadow-xl border border-solid border-gray-50 text-xl ml-2  lg:ml-24 p-4">
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
                </div>
                <div className="flex">
                  <h2 className="text-sm mt-1">Flats</h2>
                  <p className="text-xs p-2 pl-6 ml-3 relative left-1">2256</p>
                  <p className="text-xs p-2 pl-6">2835</p>
                  <p className="text-xs p-2 pl-6">2420</p>
                  <p className="text-xs p-2 pl-6">351</p>
                  <p className="text-xs p-2 pl-7">47</p>
                </div>
                <div className="flex">
                  <h2 className="text-sm mt-1">Houses</h2>
                  <p className="text-xs p-2 pl-5 ml-5 relative -left-3">81</p>
                  <p className="text-xs p-2 pl-5 relative left-0">902</p>
                  <p className="text-xs p-2 pl-5 relative left-1">1268</p>
                  <p className="text-xs p-2 pl-7">3234</p>
                  <p className="text-xs p-2 pl-5">849</p>
                </div>
              </div>
            </div>
          </div>
        )}
        <div
          className="lg:flex flex flex-wrap h-40 lg:h-14 bg-slate-300 mt-10 mb-10 p-2 space-x-1 text-xs lg:text-base lg:space-x-5 lg:pl-28"
          style={{ backgroundColor: myCustomColor }}
        >
          <Button />
          <Button2 />
          <Button3 />
          <Button4 />
          <button
            className="h-10 px-32 rounded focus:outline-none relative top-2 lg:top-0 lg:left-1/4 text-white"
            style={{ backgroundColor: myCustomColor1 }}
          >
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
            <div className="lg:flex flex lg:ml-0 ml-6 lg:flex-wrap flex-wrap mb-8 lg:mb-32 mt-7 w-2/3 lg:w-[130pc] min-h-screen">
              <div className="shadow-lg lg:h-[35pc] pb-6 lg:pb-0 ml-1 lg:mr-3 w-80 lg:w-96 relative mt-8 lg:right-3">
                <img src={House} className="w-96 " />
                <div className="z-50 ml-6 lg:w-96 w-80 right-4 lg:text-base text-xs relative -top-7 text-white flex">
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
                <div className="z-50 lg:w-96 w-80 pl-2 p-3 lg:ml-1 pt-6">
                  <h1 className="text-xl font-semibold">
                    Villa On Washington Ave
                  </h1>
                  <p className="text-blue-600 pt-2">$ 5,500,000</p>
                  <p className="text-zinc-600 pt-5 text-sm w-80">
                    Beautiful, updated, ground level Co-op apartment in the
                    desirable Bay Terrace neighborhood ...
                  </p>
                  <div className="flex space-x-6 mt-4 text-sm text-zinc-400 mb-12 ">
                    <FontAwesomeIcon icon={faCar} />{" "}
                    <p className="relative right-4 -top-1">5</p>
                    <FontAwesomeIcon icon={faBath} />{" "}
                    <p className="relative right-4 -top-1">3</p>
                    <FontAwesomeIcon icon={faMaximize} />{" "}
                    <p className="relative right-4 -top-1">
                      250ft<sup>2</sup>
                    </p>
                  </div>
                  <hr className="border-1 border-gray-300 relative lg:-left-3 w-72 left-1 lg:w-96 my-4 -mt-6" />

                  <div className="flex">
                    <img src={Maria} className="w-8" />
                    <h4 className="font-semibold mt-1 ml-4">Maria Barlow</h4>
                  </div>
                </div>
                <img
                  src={HouseShadow}
                  className="w-96 relative lg:-top-80 -top-64 -mt-96"
                />
              </div>
              <div className="shadow-lg lg:h-[35pc] pb-6 lg:pb-0 ml-1 lg:mr-3 w-80 lg:w-96 relative mt-8 lg:right-3">
                <img src={House} className="w-96 " />
                <div className="z-50 ml-6 lg:w-96 w-80 right-4 lg:text-base text-xs relative -top-7 text-white flex">
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
                <div className="z-50 lg:w-96 w-80 pl-2 p-3 lg:ml-1 pt-6">
                  <h1 className="text-xl font-semibold">
                    Villa On Washington Ave
                  </h1>
                  <p className="text-blue-600 pt-2">$ 5,500,000</p>
                  <p className="text-zinc-600 pt-5 text-sm w-80">
                    Beautiful, updated, ground level Co-op apartment in the
                    desirable Bay Terrace neighborhood ...
                  </p>
                  <div className="flex space-x-6 mt-4 text-sm text-zinc-400 mb-12 ">
                    <FontAwesomeIcon icon={faCar} />{" "}
                    <p className="relative right-4 -top-1">5</p>
                    <FontAwesomeIcon icon={faBath} />{" "}
                    <p className="relative right-4 -top-1">3</p>
                    <FontAwesomeIcon icon={faMaximize} />{" "}
                    <p className="relative right-4 -top-1">
                      250ft<sup>2</sup>
                    </p>
                  </div>
                  <hr className="border-1 border-gray-300 relative lg:-left-3 w-72 left-1 lg:w-96 my-4 -mt-6" />

                  <div className="flex">
                    <img src={Maria} className="w-8" />
                    <h4 className="font-semibold mt-1 ml-4">Maria Barlow</h4>
                  </div>
                </div>
                <img
                  src={HouseShadow}
                  className="w-96 relative lg:-top-80 -top-64 -mt-96"
                />
              </div>
              <div className="shadow-lg lg:h-[35pc] pb-6 lg:pb-0 ml-1 lg:mr-3 w-80 lg:w-96 relative mt-8 lg:right-3">
                <img src={House} className="w-96 " />
                <div className="z-50 ml-6 lg:w-96 w-80 right-4 lg:text-base text-xs relative -top-7 text-white flex">
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
                <div className="z-50 lg:w-96 w-80 pl-2 p-3 lg:ml-1 pt-6">
                  <h1 className="text-xl font-semibold">
                    Villa On Washington Ave
                  </h1>
                  <p className="text-blue-600 pt-2">$ 5,500,000</p>
                  <p className="text-zinc-600 pt-5 text-sm w-80">
                    Beautiful, updated, ground level Co-op apartment in the
                    desirable Bay Terrace neighborhood ...
                  </p>
                  <div className="flex space-x-6 mt-4 text-sm text-zinc-400 mb-12 ">
                    <FontAwesomeIcon icon={faCar} />{" "}
                    <p className="relative right-4 -top-1">5</p>
                    <FontAwesomeIcon icon={faBath} />{" "}
                    <p className="relative right-4 -top-1">3</p>
                    <FontAwesomeIcon icon={faMaximize} />{" "}
                    <p className="relative right-4 -top-1">
                      250ft<sup>2</sup>
                    </p>
                  </div>
                  <hr className="border-1 border-gray-300 relative lg:-left-3 w-72 left-1 lg:w-96 my-4 -mt-6" />

                  <div className="flex">
                    <img src={Maria} className="w-8" />
                    <h4 className="font-semibold mt-1 ml-4">Maria Barlow</h4>
                  </div>
                </div>
                <img
                  src={HouseShadow}
                  className="w-96 relative lg:-top-80 -top-64 -mt-96"
                />
              </div>
              <div className="shadow-lg lg:h-[35pc] pb-6 lg:pb-0 ml-1 lg:mr-3 w-80 lg:w-96 relative mt-8 lg:right-3">
                <img src={House} className="w-96 " />
                <div className="z-50 ml-6 lg:w-96 w-80 right-4 lg:text-base text-xs relative -top-7 text-white flex">
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
                <div className="z-50 lg:w-96 w-80 pl-2 p-3 lg:ml-1 pt-6">
                  <h1 className="text-xl font-semibold">
                    Villa On Washington Ave
                  </h1>
                  <p className="text-blue-600 pt-2">$ 5,500,000</p>
                  <p className="text-zinc-600 pt-5 text-sm w-80">
                    Beautiful, updated, ground level Co-op apartment in the
                    desirable Bay Terrace neighborhood ...
                  </p>
                  <div className="flex space-x-6 mt-4 text-sm text-zinc-400 mb-12 ">
                    <FontAwesomeIcon icon={faCar} />{" "}
                    <p className="relative right-4 -top-1">5</p>
                    <FontAwesomeIcon icon={faBath} />{" "}
                    <p className="relative right-4 -top-1">3</p>
                    <FontAwesomeIcon icon={faMaximize} />{" "}
                    <p className="relative right-4 -top-1">
                      250ft<sup>2</sup>
                    </p>
                  </div>
                  <hr className="border-1 border-gray-300 relative lg:-left-3 w-72 left-1 lg:w-96 my-4 -mt-6" />

                  <div className="flex">
                    <img src={Maria} className="w-8" />
                    <h4 className="font-semibold mt-1 ml-4">Maria Barlow</h4>
                  </div>
                </div>
                <img
                  src={HouseShadow}
                  className="w-96 relative lg:-top-80 -top-64 -mt-96"
                />
              </div>
              <div className="shadow-lg lg:h-[35pc] pb-6 lg:pb-0 ml-1 lg:mr-3 w-80 lg:w-96 relative mt-8 lg:right-3">
                <img src={House} className="w-96 " />
                <div className="z-50 ml-6 lg:w-96 w-80 right-4 lg:text-base text-xs relative -top-7 text-white flex">
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
                <div className="z-50 lg:w-96 w-80 pl-2 p-3 lg:ml-1 pt-6">
                  <h1 className="text-xl font-semibold">
                    Villa On Washington Ave
                  </h1>
                  <p className="text-blue-600 pt-2">$ 5,500,000</p>
                  <p className="text-zinc-600 pt-5 text-sm w-80">
                    Beautiful, updated, ground level Co-op apartment in the
                    desirable Bay Terrace neighborhood ...
                  </p>
                  <div className="flex space-x-6 mt-4 text-sm text-zinc-400 mb-12 ">
                    <FontAwesomeIcon icon={faCar} />{" "}
                    <p className="relative right-4 -top-1">5</p>
                    <FontAwesomeIcon icon={faBath} />{" "}
                    <p className="relative right-4 -top-1">3</p>
                    <FontAwesomeIcon icon={faMaximize} />{" "}
                    <p className="relative right-4 -top-1">
                      250ft<sup>2</sup>
                    </p>
                  </div>
                  <hr className="border-1 border-gray-300 relative lg:-left-3 w-72 left-1 lg:w-96 my-4 -mt-6" />

                  <div className="flex">
                    <img src={Maria} className="w-8" />
                    <h4 className="font-semibold mt-1 ml-4">Maria Barlow</h4>
                  </div>
                </div>
                <img
                  src={HouseShadow}
                  className="w-96 relative lg:-top-80 -top-64 -mt-96"
                />
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative top-[89pc] lg:top-0 lg:right-3 right-64 lg:block lg:ml-10">
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
              <div className="relative top-[113pc] right-[22pc] lg:right-5 h-320 h-64 lg:-ml-16 mb-96 lg:top-96 mt-52 lg:w-2/3 p-5 ring-slate-500 shadow-xl border border-solid border-gray-50">
                <div
                  className="flex text-2xl "
                  style={{ color: myCustomColor1 }}
                >
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
          </div>
          <div className=" block lg:hidden relative left-80 ml-10">
            <div className="relative top-[102pc] lg:top-0 lg:right-3 right-80 -ml-3 lg:block lg:ml-10">
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
            <div className="relative w-96 top-[90pc] right-[22pc] lg:right-5 h-320 h-64 lg:-ml-16 mb-96 lg:top-96 mt-52 lg:w-2/3 p-5 ring-slate-500 shadow-xl border border-solid border-gray-50">
              <div className="flex text-2xl " style={{ color: myCustomColor1 }}>
                <FontAwesomeIcon icon={faEnvelopeOpenText} />
                <h1 className="ml-3 -mt-1">Get Latest Properties</h1>
              </div>
              <p>Get notified when neew properties become available</p>
              <input
                type="type"
                placeholder="Enter your Name"
                className="border-gray-200 border-2 focus:outline-none pl-3 w-40 text-sm p-2 mb-6 mt-6 "
              />{" "}
              <br />
              <div className="flex">
                <input
                  type="type"
                  placeholder="Enter your email Address"
                  className="border-gray-200 border-2 text-sm pl-3 p-2 w-40 z-10 focus:outline-none"
                />
                <input
                  type="submit"
                  value="Subscribe Now"
                  style={{ backgroundColor: myCustomColor1 }}
                  className="px-7 cursor-pointer text-white focus rounded-sm w-40 relative left-3 focus:outline-none"
                />
              </div>
            </div>
          </div>
          <div className="relative top-5 left-1 lg:left-0 lg:-top-24 flex">
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
