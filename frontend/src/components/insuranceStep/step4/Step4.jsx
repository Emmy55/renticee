import React from "react";
import { motion } from "framer-motion";
import Header from "../../Header";
import InsuranceStepHero from "../InsuranceStepHero";
import FormSteps from "../FormSteps";
import Step1Edit from "./Step1Edit";
import Step2Edit from "./Step2Edit";
import Step3Edit from "./Step3Edit";
import PremiumInsurance from "../PremiumInsurance";
import Footer from "../../Footer";

function Step4() {
  return (
    <div>
      <Header />
      <InsuranceStepHero />
      <FormSteps />
      <div className="mt-3 pb-16 xl:ml-[-50px]">
        <div className="flex flex-col items-center">
          <h2 className="w-[353px] md:w-[650px] lg:w-[1000px] xl:w-[1027px] text-[0.8125rem] lg:text-base text-[#035FCE] font-bold font-Roboto pb-2">
            Upload Your Documents
          </h2>
          <div className="w-full h-[1px] bg-[#E4EAEE]"></div>
          <div className="w-[353px] md:w-[650px] lg:w-[1000px] xl:w-[1027px]">
            <p className="w-[353px] md:w-[450px] lg:w-[600px] xl:w-[730px] text-[1.1875rem] lg:text-[1.1875rem] text-[#FF0000] font-Roboto pt-4">
              Please go through all the information provided before confirming
              your submission at the bottom of this page
            </p>
          </div>
          {/* Form start */}
          <form>
            <Step1Edit />
            <div className="w-full h-[1px] bg-[#E4EAEE]"></div>
            <Step2Edit />
            <div className="w-full h-[1px] bg-[#E4EAEE]"></div>
            <Step3Edit />
            <div className="w-full h-[1px] bg-[#E4EAEE]"></div>
            {/* Privacy and Security start */}
            <div className="mt-10">
              <h2 className="w-[353px] md:w-[650px] lg:w-[1000px] xl:w-[1027px] text-[0.8125rem] lg:text-base text-[#282D3A] font-bold font-Roboto pb-2">
                Privacy and Security
              </h2>
              <div className="flex mt-5">
                <input
                  type="checkbox"
                  name="check1"
                  id="check1"
                  className="w-[16px] h-[16px] lg:w-[16px] lg:h-[16px] border border-[#035FCE] border-opacity-50 rounded-[5px] mr-2"
                />
                <label
                  htmlFor="check1"
                  className="text-[0.8125rem] text-[#282D3A] font-Roboto w-[286px] md:w-[500px] lg:w-[707px]"
                >
                  By submitting your details, you consent to the use of your
                  information to further process your request and also
                  acknowledge that you have read and understood our Privacy
                  Policy.*
                </label>
              </div>
              <div className="flex mt-10">
                <input
                  type="checkbox"
                  name="check2"
                  id="check2"
                  className="w-[16px] h-[16px] lg:w-[16px] lg:h-[16px] border border-[#035FCE] border-opacity-50 rounded-[5px] mr-2"
                />
                <label
                  htmlFor="check2"
                  className="text-[0.8125rem] text-[#282D3A] font-Roboto w-[286px] md:w-[500px] lg:w-[707px]"
                >
                  I have read through the information provided and confirm
                  submission.
                </label>
              </div>
            </div>
            <div className="flex justify-end pt-[10px] lg:pt-[10px]w-[353px]">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`bg-[#035FCE] text-[#FFFFFF] text-xs lg:text-sm font-Roboto py-2 px-10 rounded-[5px] mt-[0px] lg:mt-[10px] text-center font-semibold hover:scale-110`}
              >
                CONFIRM AND SUBMIT
              </motion.button>
            </div>
            {/* Privacy and Security end */}
          </form>
          {/* Form end */}
          <div className="w-full h-[1px] bg-[#E4EAEE] mt-10"></div>
          {/* Premium Insurance start */}
          <div className="w-[353px] md:w-[650px] lg:w-[1000px] xl:w-[1027px] flex pt-10">
            <PremiumInsurance />
          </div>
          {/* Premium Insurance end */}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Step4;
