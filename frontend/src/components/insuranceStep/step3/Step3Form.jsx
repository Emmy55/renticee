import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Step3Form() {
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
      <div className="mt-3 pb-16 xl:ml-[-50px]">
        <div className="flex flex-col items-center">
          <h2 className="w-[353px] md:w-[650px] lg:w-[1000px] xl:w-[1027px] text-[0.8125rem] lg:text-base text-[#035FCE] font-bold font-Roboto pb-2">
            Upload Your Documents
          </h2>
          <div className="w-full h-[1px] bg-[#E4EAEE]"></div>
          <div className="w-[353px] md:w-[650px] lg:w-[1000px] xl:w-[1027px]">
            <p className="w-[353px] md:w-[450px] lg:w-[1000px] xl:w-[1027px] text-[1.1875rem] lg:text-[1.1875rem] text-[#282D3A] font-Roboto pt-4">
              *Each document/image should not be more than 2MB in size
            </p>
            <p className="w-[353px] md:w-[450px] lg:w-[507px] xl:w-[557px] text-[1.1875rem] lg:text-[1.1875rem] text-[#282D3A] font-bold font-Roboto pt-24">
              Attach a valid means of ID (e.g: Driver's license, International
              passport or National ID) and Utility Bill
            </p>
          </div>

          <form>
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
              <h2 className="w-[353px] md:w-[650px] lg:w-[1000px] xl:w-[1027px] text-[0.8125rem] lg:text-base text-[#035FCE] font-bold font-Roboto pb-1">
                Term Life Cover
              </h2>
              <p className="w-[353px] md:w-[450px] lg:w-[507px] xl:w-[557px] text-[1.1875rem] lg:text-[1.1875rem] text-[#282D3A]  font-Roboto pt-4">
                NOTE: Our Home Insurance now comes with a free Term Cover worth
                up to ₦50,000. Kindly provide the details of your beneficiary
                below.
              </p>
              <div className="flex mt-5">
                <input
                  type="checkbox"
                  name="check"
                  id="check"
                  className="w-[16px] h-[16px] lg:w-[20px] lg:h-[20px] border border-[#035FCE] border-opacity-50 rounded-[5px] mr-2"
                />
                <label
                  htmlFor="check"
                  className="text-[0.8125rem] text-[#282D3A] font-Roboto w-[286px] md:w-[350px] lg:w-[407px]"
                >
                  Yes I am interested.
                </label>
              </div>

              {/*  */}
              <div className="flex flex-col lg:flex-row lg:gap-[45px] lg:items-start mt-10">
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
            <div className="flex justify-end mt-5 pt-[10px] lg:pt-[10px]w-[353px]">
              <Link to="/step4">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  onClick={handleFileUpload}
                  whileTap={{ scale: 0.9 }}
                  className={`bg-[#035FCE] text-[#FFFFFF] text-[0.61138rem] lg:text-sm font-Roboto py-2 px-5 rounded-[5px] mt-[0px] lg:mt-[10px] text-center font-semibold hover:scale-110`}
                >
                  SAVE AND PROCEED TO PAYMENT
                </motion.button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Step3Form;
