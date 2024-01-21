import React, { useState } from "react";
import { motion } from "framer-motion";

function Step3Edit() {
  //   File upload start
  const [utilityFile, setUtilityFile] = useState(null);
  const [idFile, setIdFile] = useState(null);
  const [fileName, setFileName] = useState("UTILITY BILL");
  const [idName, setIdName] = useState("I.D.");

  const handleIdChange = (event) => {
    const file = event.target.files[0];
    setIdFile(file);
    if (file) {
      setIdName(file.name); // Set the file name when a file is selected
    } else {
      setIdName("I.D."); // Reset the button text when no file is selected
    }
  };
  const handleUtilityChange = (event) => {
    const file = event.target.files[0];
    setUtilityFile(file);
    if (file) {
      setFileName(file.name); // Set the file name when a file is selected
    } else {
      setFileName("UTILITY BILL"); // Reset the button text when no file is selected
    }
  };

  const handleFileUpload = () => {
    // Handle the file upload logic here, e.g., send it to a server using API
    // After successful upload, you can display the file name
    if (utilityFile && idFile) {
      alert(`Files uploaded: ${utilityFile.name} and ${idFile.name}`);
    }
  };
  return (
    <div>
      <div className="mt-3 pb-16">
        <div className="flex flex-col items-center">
          <div className="flex items-center w-[353px] md:w-[650px] lg:w-[1000px] xl:w-[1027px] pb-2">
            <h2 className="w-[353px] md:w-[650px] lg:w-[1000px] xl:w-[1027px] text-[0.8125rem] lg:text-base text-[#282D3A] font-bold font-Roboto pb-2">
              Property Details
            </h2>
            <button
              className={`bg-[#035FCE] text-[#FFFFFF] w-[126px] h-[40px] lg:w-[176px] lg:h-[46px] text-xs lg:text-[0.75rem] font-Roboto rounded-[5px] mt-[0px] lg:mt-[10px] text-center font-semibold hover:scale-110`}
            >
              EDIT DETAILS
            </button>
          </div>
          {/* Form start */}
          <div>
            <div className="w-[353px] mt-10 md:w-[650px] lg:w-[476px] xl:w-[491px]">
              <label
                htmlFor="id-upload"
                className={`cursor-pointer w-[128px] h-[54px] pl-5 flex items-center bg-[#001733] text-white font-bold rounded shadow-md hover:bg-[#2f3338] hover:shadow-md`}
              >
                {idName.substring(0, 10)}
              </label>
              <input
                id="id-upload"
                type="file"
                onChange={handleIdChange}
                className="hidden"
              />
              <label
                htmlFor="utility-upload"
                className={`mt-5 mb-2 cursor-pointer w-[195px] h-[54px] pl-5 flex items-center bg-[#55A2FF] text-white font-bold rounded shadow-md hover:bg-[#658ab8] hover:shadow-md`}
              >
                {fileName.substring(0, 15)}
              </label>
              <input
                id="utility-upload"
                type="file"
                onChange={handleUtilityChange}
                className="hidden"
              />
            </div>
            {/*  */}
            <div className="mt-20">
              <h2 className="w-[353px] md:w-[650px] lg:w-[1000px] xl:w-[1027px] text-[0.8125rem] lg:text-base text-[#282D3A] font-bold font-Roboto pb-1">
                Term Life Cover
              </h2>
              <div className="flex mt-8">
                <input
                  type="checkbox"
                  name="check"
                  id="check"
                  className="w-[16px] h-[16px] border border-[#035FCE] border-opacity-50 rounded-[5px] mr-2"
                />
                <label
                  htmlFor="check"
                  className="text-[0.8125rem] text-[#282D3A] font-Roboto w-[286px] md:w-[350px] lg:w-[407px]"
                >
                  Yes I am interested.
                </label>
              </div>

              {/*  */}
              <div className="flex flex-col lg:flex-row lg:gap-[45px] lg:items-start mt-5">
                <div>
                  <label className="uppercase w-[353px] md:w-[650px] lg:w-[1000px] xl:w-[1027px] text-[0.8125rem] text-[#282D3A]  font-Roboto pt-3">
                    Beneficiary Full Name
                  </label>
                  <div className="flex flex-col items-center relative">
                    <input
                      type="text"
                      name="beneficiaryName"
                      id="beneficiaryName"
                      placeholder="Beneficiary Full Name"
                      className="outline-none w-[353px] md:w-[650px] lg:w-[476px] xl:w-[491px] h-[40px] border border-[#035FCE] border-opacity-50 rounded mt-2 pl-2"
                    />
                  </div>
                </div>
                {/*  */}
                <div className="">
                  <label className="uppercase w-[353px] md:w-[650px] lg:w-[1000px] xl:w-[1027px] text-[0.8125rem] text-[#282D3A]  font-Roboto pt-3">
                    Beneficiary Phone Number
                  </label>
                  <div className="flex flex-col items-center">
                    <input
                      type="tel"
                      name="firstName"
                      id="firstName"
                      placeholder="Beneficiary Phone Number"
                      className="outline-none w-[353px] md:w-[650px] lg:w-[476px] xl:w-[491px] h-[40px] border border-[#035FCE] border-opacity-50 rounded mt-2 pl-2"
                    />
                  </div>
                </div>
              </div>
              {/*  */}
            </div>
            {/*  */}
          </div>
          {/* Form end */}
        </div>
      </div>
    </div>
  );
}

export default Step3Edit;
