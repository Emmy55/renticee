import FinanceService from "./FinanceService.jsx";
import Commercial from "./Media/commercial.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useEffect } from 'react';


import {
 
  faBell,
} from "@fortawesome/free-solid-svg-icons";

const Notification = () => {

  useEffect(() => {
    const disableScroll = () => {
      window.scrollTo(0, 0);
    };

    // Add event listener to disable scrolling
    window.addEventListener('scroll', disableScroll);

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', disableScroll);
    };
  }, []); // Empty dependency array ensures that this effect runs once on mount



  // const myCustomColor = "#EAEAEA";
  const myCustomColor1 = "#035FCE";

  return (
    <>
      <FinanceService
        Color="#035FCE"
        tempColor="white"
        heroText="Simple and affordable real estate options to offer you and your family the utmost peace of mind"
        showAdditionalDiv={true}
        heroImg={Commercial}
        COLOR="opacity-80 "
      />
      <div className="justify-center text-center w-1/2 fixed top-32 p-10 rounded-lg left-80 shadow-xl bg-white">
        <p className="pb-2 font-semibold">Property Notification</p>
        <p className="pb-8 text-sm ml-10e">
          Receive notifications whenever a new property becomes available in
          your state.
        </p>
        <div className="flex p-7">
          <label className="-mt-7 relative left-10">Name</label>
          <input
            type="text"
            placeholder="John Doe"
            className="border-gray-700  border-2 text-sm text-black w-96 px-10 pl-6 py-3"
          />
          <label className="-mt-7 relative left-10">Email</label>
          <input
            type="text"
            placeholder="contact@gmail.com"
            className="border-gray-700  border-2 text-sm text-black w-96 px-10 pl-6 py-3"
          />
        </div>
        <div className="flex p-7">
          <label className="-mt-7 relative left-10">Phone</label>
          <input
            type="text"
            placeholder="+234 701 531 9785"
            className="border-gray-700  border-2 text-sm text-black w-96 px-10 pl-6 py-3"
          />
          <label className="-mt-7 relative left-10">State</label>
          <input
            type="text"
            placeholder="Add State"
            className="border-gray-700  border-2 text-sm text-black w-96 px-10 pl-6 py-3"
          />
        </div>
        <input
          type="submit"
          placeholder="Add State"
          value="Get Notified"
          style={{ backgroundColor: myCustomColor1 }}
          className="text-white p-7 border-gray-700 text-sm w-5/6 px-10 pl-6 py-3 font-semibold ml-14 cursor-pointer"
        />
        <FontAwesomeIcon
          icon={faBell}
          className="relative -left-52 z-50 text-white"
        />
      </div>
    </>
  );
};
export default Notification;
