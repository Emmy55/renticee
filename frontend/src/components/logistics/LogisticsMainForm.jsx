import React from "react";
import { motion } from "framer-motion";
import FormPic from "./images/form-pic.svg";

function LogisticsMainForm() {
  return (
    <div>
      <div className="pb-16 xl:ml-[-50px]">
        <div className="flex flex-col items-center">
          <div className="w-[353px] md:w-[650px] lg:w-[1000px] xl:w-[1027px] mt-20">
            <div className="flex flex-col md:flex-row items-center gap-[50px] md:gap-[30px] lg:gap-[50px] xl:gap-[111px]">
              <div>
                <img
                  src={FormPic}
                  alt=""
                  className="w-[359px] md:w-[259px] lg:w-[600px]"
                />
              </div>
              <form>
                <div className="flex items-center gap-2">
                  <div className="flex flex-col">
                    <label
                      htmlFor="name"
                      className="text-[0.64606rem] font-medium text-[#63666D] lg:text-[0.875rem] font-Roboto"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="John Doe"
                      className="w-[173px] h-[41.35px] md:w-[155px] md:h-[35.03px] lg:w-[232.5px] lg:h-[56px] pl-2 outline-none border-2 border-[#63666D] placeholder:text-[#252525] placeholder:text-opacity-35 placeholder:text-[0.69219rem] lg:placeholder:text-[0.9375rem]"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label
                      htmlFor="email"
                      className="text-[0.64606rem] font-medium text-[#63666D] lg:text-[0.875rem] font-Roboto"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="contact@email.com"
                      className="w-[173px] h-[41.35px] md:w-[155px] md:h-[35.03px] lg:w-[232.5px] lg:h-[56px] pl-2 outline-none border-2 border-[#63666D] placeholder:text-[#252525] placeholder:text-opacity-35 placeholder:text-[0.69219rem] lg:placeholder:text-[0.9375rem]"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-2 mt-3">
                  <div className="flex flex-col">
                    <label
                      htmlFor="name"
                      className="text-[0.64606rem] font-medium text-[#63666D] lg:text-[0.875rem] font-Roboto"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="name"
                      id="name"
                      placeholder="+234 701 531 8785"
                      className="w-[173px] h-[41.35px] md:w-[155px] md:h-[35.03px] lg:w-[232.5px] lg:h-[56px] pl-2 outline-none border-2 border-[#63666D] placeholder:text-[#252525] placeholder:text-opacity-35 placeholder:text-[0.69219rem] lg:placeholder:text-[0.9375rem]"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label
                      htmlFor="state"
                      className="text-[0.64606rem] font-medium text-[#63666D] lg:text-[0.875rem] font-Roboto"
                    >
                      State
                    </label>
                    <input
                      type="text"
                      name="state"
                      id="state"
                      placeholder="Add State"
                      className="w-[173px] h-[41.35px] md:w-[155px] md:h-[35.03px] lg:w-[232.5px] lg:h-[56px] pl-2 outline-none border-2 border-[#63666D] placeholder:text-[#252525] placeholder:text-opacity-35 placeholder:text-[0.69219rem] lg:placeholder:text-[0.9375rem]"
                    />
                  </div>
                </div>
                <div className="mt-3 flex flex-col">
                  <label
                    htmlFor="message"
                    className="text-[0.64606rem] font-medium text-[#63666D] lg:text-[0.875rem] font-Roboto"
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    cols="30"
                    rows="10"
                    placeholder="Message"
                    className="w-[354.4px] h-[81.22px] md:w-[320px] md:h-[81.22px] lg:w-[480px] lg:h-[110px] pl-2 outline-none border-2 border-[#63666D] placeholder:text-[#252525] placeholder:text-opacity-35 placeholder:text-[0.69219rem] lg:placeholder:text-[0.9375rem]"
                  ></textarea>
                </div>
                <div className="mt-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-[#035FCE] text-white text-sm lg:text-base w-[354.4px] h-[41.35px] md:w-[320px] md:h-[35.03px] lg:w-[480px] lg:h-[56px] font-Roboto rounded-md"
                  >
                    Get in Touch
                  </motion.button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogisticsMainForm;
