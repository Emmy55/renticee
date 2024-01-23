import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";

function Aside() {
  return (
    <div className="mt-10 lg:mt-20">
      <div className="">
        <p className="font-bold mb-3 font-Roboto">States</p>
        <p className="mb-0 font-Roboto ">Abuja</p>
        <p className="mb-0 font-Roboto ">Oyo</p>
        <p className="mb-0 font-Roboto ">Ogun</p>
        <p className="mb-0 font-Roboto ">Rivers</p>
        <p className="mb-0 font-Roboto ">Enugu</p>
        <p className="mb-0 font-Roboto ">Edo</p>
        <p className="mb-0 font-Roboto ">Akwa Ibom</p>
        <p className="mb-0 font-Roboto ">Kaduna</p>
        <p className="mb-0 font-Roboto ">Imo</p>
        <p className="mb-0 font-Roboto ">Osun</p>
        <p className="mb-0 font-Roboto ">Cross River</p>
        <p className="mb-0 font-Roboto ">Anambra</p>
        <p className="mb-0 font-Roboto ">Kwara</p>
        <p className="mb-0 font-Roboto ">Abia</p>
        <p className="mb-0 font-Roboto ">Katsina</p>
        <p className="mb-0 font-Roboto ">Ondo</p>
        <p className="mb-0 font-Roboto ">Adamawa</p>
        <p className="mb-0 font-Roboto ">Bauchi</p>
        <p className="mb-0 font-Roboto ">Ebonyi</p>
      </div>
      <div className="h-64 w-full md:w-[380px] lg:w-[476.67px] mt-10 p-1 md:p-3 lg:p-5 ring-slate-500 shadow-xl border border-solid border-gray-50">
        <div className="flex text-2xl text-[#035FCE]">
          <FontAwesomeIcon icon={faEnvelopeOpenText} />
          <h1 className="ml-3 -mt-1 font-Roboto">Get Latest Properties</h1>
        </div>
        <p className="font-Roboto">
          Get notified when neew properties become available
        </p>
        <input
          type="type"
          placeholder="Enter your Name"
          className="border-gray-200 border-2 focus:outline-none pl-1 md:pl-3 text-sm px-1 p-2 mb-6 mt-6 font-Roboto"
        />{" "}
        <br />
        <div className="flex">
          <input
            type="type"
            placeholder="Enter your email Address"
            className="border-gray-200 border-2 text-sm pl-1 md:pl-3 p-2 px-1 focus:outline-none font-Roboto"
          />
          <input
            type="submit"
            value="Subscribe Now"
            className="px-1 sm:px-3 md:px-7 rounded bg-[#035FCE] cursor-pointer text-white focus relative left-3 focus:outline-none font-Roboto"
          />
        </div>
      </div>
    </div>
  );
}

export default Aside;
