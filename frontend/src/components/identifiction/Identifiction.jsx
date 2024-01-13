import React, { useState } from "react";

import Arrow from "./images/arrow-back.svg";
import Attach from "./images/attach.svg";

function Identifiction() {
  //   File upload start
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileName, setFileName] = useState("Attach File");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    if (file) {
      setFileName(file.name); // Set the file name when a file is selected
    } else {
      setFileName("Attach File"); // Reset the button text when no file is selected
    }
  };

  const handleFileUpload = () => {
    // Handle the file upload logic here, e.g., send it to a server using API

    // After successful upload, you can display the file name
    if (selectedFile) {
      alert(`File uploaded: ${selectedFile.name}`);
    }
  };
  return (
    <div className="md:h-screen bg-gradient-to-tr from-blue-900 via-blue-900 to-blue-800 md:flex md:justify-center md:items-center">
      <div className="bg-white flex flex-col items-center mt-10 md:w-[648px] md:h-[569px] md:justify-center">
        <div className="w-[358px] md:hidden">
          <img src={Arrow} alt="Back" className="w-8 h-8" />
        </div>
        <h2 className="text-[#282D3A] text-[1.1875rem] font-bold font-Roboto">
          Verify your identity
        </h2>
        <p className="w-[346px] text-center text-[0.8125rem] font-Roboto text-[#282D3A] text-opacity-50 mt-1 md:w-full">
          Action Required: Verify your identity to be clearly identified as a
          Client.
        </p>
        <form className="flex flex-col mt-10">
          <div className="flex flex-col">
            <p className="text-base text-[#282D3A] font-bold font-Roboto pb-3">
              Country Issuing ID
            </p>
            <select
              placeholder="Cash"
              className="w-[358px] h-[46px] bg-white border border-[#282D3A] border-opacity-35 font-Roboto rounded-[5px] pl-3 outline-none md:w-[542px] md:h-[44px]"
            >
              <option value="Nigeria">Nigeria</option>
            </select>
          </div>

          <div className="flex flex-col mt-5">
            <p className="text-base text-[#282D3A] font-bold font-Roboto pb-3">
              Government Issued Photo ID
            </p>
            <select
              placeholder="Cash"
              className="w-[358px] h-[46px] bg-white border border-[#282D3A] border-opacity-35 font-Roboto rounded-[5px] pl-3 outline-none md:w-[542px] md:h-[44px]"
            >
              <option value="">Select ID Type</option>
              <option value="Voter's Card">Voter's Card</option>
              <option value="Passport">Passport</option>
            </select>
          </div>

          <div className="flex flex-col items-center mt-5">
            <p className="w-[358px] text-base text-[#282D3A] font-bold font-Roboto pb-3 md:w-[542px]">
              Upload ID Photo
            </p>
            <label
              htmlFor="file-upload"
              className={`cursor-pointer h-[46px] flex items-center bg-white text-[#035FCE] text-[0.8125rem] font-Roboto rounded-[25px] shadow-sm border border-[#035FCE] ${
                selectedFile
                  ? "px-[105px] md:px-[200px]"
                  : "px-[130px] md:px-[225px]"
              }`}
            >
              <img src={Attach} alt="Back" className="" />
              {fileName}
            </label>
            <input
              id="file-upload"
              type="file"
              onChange={handleFileChange}
              className="hidden"
            />
          </div>

          <div className="flex flex-col items-center">
            <button
              className={`w-[358px] h-[50.63px] text-base font-Roboto font-medium rounded-[5px] mt-7 md:w-[405.28px] md:h-[57.58px] md:text-xl 
              ${
                selectedFile
                  ? "bg-[#035FCE] text-white hover:bg-[#3d7ece] hover:scale-95"
                  : "bg-[#B0B0B0] text-[#666666] cursor-not-allowed"
              }`}
              onClick={handleFileUpload}
              disabled={!selectedFile}
            >
              Verify
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Identifiction;
