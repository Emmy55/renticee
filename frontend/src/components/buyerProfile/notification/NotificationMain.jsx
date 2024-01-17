import React, { useState } from "react";

function NotificationMain() {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div>
      <div className="">
        {/* Form start */}
        <form className="mt-5 pb-20">
          <div className="">
            <div className="flex flex-col">
              <div className="lg:pl-5 flex flex-col items-center lg:items-start">
                {/* Email Notification */}
                <div className="flex flex-col md:flex-row md:gap-[30px] lg:gap-[15px] xl:gap-[45px] lg:items-start">
                  <div className="flex flex-col items-center">
                    <p className="w-[355px] md:w-[305px] xl:w-[385px] font-bold text-[1.1875rem] text-[#282D3A]  font-Roboto pt-3">
                      Email Notification
                    </p>
                    <p className="w-[355px] md:w-[305px] xl:w-[385px] text-base text-[#63666D]  font-Roboto pt-3">
                      Get emails to find out what's going on when you are not
                      online. You can turn these off
                    </p>
                  </div>
                  {/*  */}
                  <div className="mt-8">
                    <div className="flex items-center gap-3 relative">
                      <label className="flex items-centercursor-pointer">
                        <div
                          className={`relative ${
                            isChecked ? "bg-blue-600" : "bg-gray-400"
                          } rounded-full w-[48.22px] h-[28.06px] md:w-[57px] md:h-[28.06px] transition duration-300 ease-in-out`}
                        >
                          <div
                            className={`absolute mt-[3.5px] ${
                              isChecked
                                ? "translate-x-6 md:translate-x-8"
                                : "translate-x-1"
                            } transform left-0 bg-white w-[21.05px] h-[21.05px] rounded-full shadow-md transition duration-300 ease-in-out`}
                          ></div>
                        </div>
                        <input
                          type="checkbox"
                          className="hidden"
                          checked={isChecked}
                          onChange={handleToggle}
                        />
                        {/* <span className="ml-2 text-gray-700">
                      {isChecked ? "ON" : "OFF"}
                    </span> */}
                      </label>
                      <div>
                        <p className="text-xs md:text-base text-[#282D3A] font-bold font-Roboto pt-3">
                          News and updates
                        </p>
                        <p className="text-xs md:text-base text-[#63666D]  font-Roboto ">
                          News about product and feature updates
                        </p>
                      </div>
                    </div>
                    {/* Reminder start */}
                    <div className="flex gap-3 relative mt-10">
                      <label className="flex items-centercursor-pointer">
                        <div
                          className={`relative ${
                            isChecked ? "bg-blue-600" : "bg-gray-400"
                          } rounded-full w-[48.22px] h-[28.06px] md:w-[57px] md:h-[28.06px] transition duration-300 ease-in-out`}
                        >
                          <div
                            className={`absolute mt-[3.5px] ${
                              isChecked
                                ? "translate-x-6 md:translate-x-8"
                                : "translate-x-1"
                            } transform left-0 bg-white w-[21.05px] h-[21.05px] rounded-full shadow-md transition duration-300 ease-in-out`}
                          ></div>
                        </div>
                        <input
                          type="checkbox"
                          className="hidden"
                          checked={isChecked}
                          onChange={handleToggle}
                        />
                        {/* <span className="ml-2 text-gray-700">
                      {isChecked ? "ON" : "OFF"}
                    </span> */}
                      </label>
                      <div>
                        <p className="text-xs md:text-base text-[#282D3A] font-bold font-Roboto">
                          Reminders
                        </p>
                        <p className="text-xs md:text-base text-[#63666D] w-[300px] xl:w-[370px] font-Roboto ">
                          There are notifications to remind you of updates you
                          might have missed
                        </p>
                      </div>
                    </div>
                    {/* Reminder start */}
                  </div>
                </div>
              </div>
              {/* Email Notification end */}
              {/* Line start */}
              <div className="relative mt-5">
                <div className="absolute w-full h-[1px] bg-[#DFE2E6]"></div>
              </div>
              {/* Line end */}
              <div className="lg:pl-5 flex flex-col items-center lg:items-start">
                {/* Push Notification start */}
                <div className="flex flex-col md:flex-row md:gap-[30px] lg:gap-[15px] xl:gap-[45px] lg:items-start mt-5">
                  <div className="flex flex-col items-center">
                    <p className="w-[355px] md:w-[305px] xl:w-[385px] font-bold text-[1.1875rem] text-[#282D3A]  font-Roboto pt-3">
                      Push Notification
                    </p>
                    <p className="w-[355px] md:w-[305px] xl:w-[385px] text-base text-[#63666D]  font-Roboto pt-3">
                      Get push notification in-app to find out what’s going on
                      when you're online
                    </p>
                  </div>
                  {/*  */}
                  <div className="mt-8">
                    <div className="flex items-center gap-3 relative">
                      <label className="flex items-centercursor-pointer">
                        <div
                          className={`relative ${
                            isChecked ? "bg-blue-600" : "bg-gray-400"
                          } rounded-full w-[48.22px] h-[28.06px] md:w-[57px] md:h-[28.06px] transition duration-300 ease-in-out`}
                        >
                          <div
                            className={`absolute mt-[3.5px] ${
                              isChecked
                                ? "translate-x-6 md:translate-x-8"
                                : "translate-x-1"
                            } transform left-0 bg-white w-[21.05px] h-[21.05px] rounded-full shadow-md transition duration-300 ease-in-out`}
                          ></div>
                        </div>
                        <input
                          type="checkbox"
                          className="hidden"
                          checked={isChecked}
                          onChange={handleToggle}
                        />
                        {/* <span className="ml-2 text-gray-700">
                      {isChecked ? "ON" : "OFF"}
                    </span> */}
                      </label>
                      <div>
                        <p className="text-xs md:text-base text-[#282D3A] font-bold font-Roboto pt-3">
                          News and updates
                        </p>
                        <p className="text-xs md:text-base text-[#63666D]  font-Roboto ">
                          News about product and feature updates
                        </p>
                      </div>
                    </div>
                    {/* Reminder start */}
                    <div className="flex gap-3 relative mt-10">
                      <label className="flex items-centercursor-pointer">
                        <div
                          className={`relative ${
                            isChecked ? "bg-blue-600" : "bg-gray-400"
                          } rounded-full w-[48.22px] h-[28.06px] md:w-[57px] md:h-[28.06px] transition duration-300 ease-in-out`}
                        >
                          <div
                            className={`absolute mt-[3.5px] ${
                              isChecked
                                ? "translate-x-6 md:translate-x-8"
                                : "translate-x-1"
                            } transform left-0 bg-white w-[21.05px] h-[21.05px] rounded-full shadow-md transition duration-300 ease-in-out`}
                          ></div>
                        </div>
                        <input
                          type="checkbox"
                          className="hidden"
                          checked={isChecked}
                          onChange={handleToggle}
                        />
                        {/* <span className="ml-2 text-gray-700">
                      {isChecked ? "ON" : "OFF"}
                    </span> */}
                      </label>
                      <div>
                        <p className="text-xs md:text-base text-[#282D3A] font-bold font-Roboto">
                          Reminders
                        </p>
                        <p className="text-xs md:text-base text-[#63666D] w-[300px] xl:w-[370px] font-Roboto ">
                          There are notifications to remind you of updates you
                          might have missed
                        </p>
                      </div>
                    </div>
                    {/* Reminder start */}
                  </div>
                </div>
                {/* Push Notification end */}
              </div>
            </div>
          </div>
          <div className="flex justify-center lg:w-[700px] xl:w-[900px]">
            <div className="flex justify-end pt-[30px] lg:pt-[10px] w-[355px] md:w-[670px] lg:w-[700px] xl:w-[900px]">
              <button
                className={`bg-[#035FCE] text-[#FFFFFF] text-xs lg:text-sm font-Roboto py-2 px-7 rounded-[5px] mt-[0px] lg:mt-[10px] text-center font-semibold hover:scale-110`}
              >
                Save changes
              </button>
            </div>
          </div>
        </form>
        {/* Form end */}
      </div>
    </div>
  );
}

export default NotificationMain;
