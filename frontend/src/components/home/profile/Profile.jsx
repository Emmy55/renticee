import React, { useState } from "react";
import User from "./images/user.svg";
import { Link } from "react-router-dom";

function Profile(props) {
  const [isHovered, setIsHovered] = useState(false);
  const [isTestHovered, setIsTestHovered] = useState(false);
  const [isProfileHovered, setIsProfileHovered] = useState(false);
  const [isSettingHovered, setIsSettingHovered] = useState(false);
  const [isLogoutHovered, setIsLogoutHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = (e) => {
    // Check if the mouse is leaving the profile or the dropdown
    if (!e.relatedTarget || !e.relatedTarget.closest(".profile-wrapper")) {
      setIsHovered(false);
    }
  };

  return (
    <div className="">
      <div
        onMouseEnter={handleMouseEnter}
        // onMouseLeave={handleMouseLeave}
        className="w-[47px] h-[47px] rounded-full cursor-pointer"
      >
        <img src={User} alt="" className="w-[47px] h-[47px] rounded-full" />
      </div>

      {/* Drop down start */}
      {isHovered && (
        <div
          className={`absolute bg-white w-[236px] py-4 right-0`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="pl-4">
            <Link to="profile">
              <p className="text-base text-[#035FCE] font-bold font-Roboto cursor-pointer">
                Bright Moses
              </p>
            </Link>
            <p className="text-[0.6875rem] text-[#035FCE] font-Roboto font-normal">
              Active
            </p>
          </div>
          {/* Line start */}
          <div className="w-full h-[1px] bg-[#0798FF] bg-opacity-10"></div>
          {/* Line end */}
          {/* Profile start */}
          <Link to="profile">
            <div
              className="flex items-center gap-1 pl-4 pt-3 cursor-pointer"
              onMouseEnter={() => setIsProfileHovered(true)}
              onMouseLeave={() => setIsProfileHovered(false)}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  fill: isProfileHovered ? "#035FCE" : "#282D3A",
                  transition: "stroke 0.3s ease-in-out",
                }}
              >
                <path
                  d="M13.3337 8.33333C13.3337 9.21739 12.9825 10.0652 12.3573 10.6904C11.7322 11.3155 10.8844 11.6667 10.0003 11.6667C9.11627 11.6667 8.26842 11.3155 7.6433 10.6904C7.01818 10.0652 6.66699 9.21739 6.66699 8.33333C6.66699 7.44928 7.01818 6.60143 7.6433 5.97631C8.26842 5.35119 9.11627 5 10.0003 5C10.8844 5 11.7322 5.35119 12.3573 5.97631C12.9825 6.60143 13.3337 7.44928 13.3337 8.33333Z"
                  fill="#282D3A"
                  style={{
                    fill: isProfileHovered ? "#035FCE" : "#282D3A",
                    transition: "stroke 0.3s ease-in-out",
                  }}
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.66033 18.326C5.21574 18.1477 1.66699 14.4877 1.66699 9.99935C1.66699 5.39685 5.39783 1.66602 10.0003 1.66602C14.6028 1.66602 18.3337 5.39685 18.3337 9.99935C18.3337 14.6018 14.6028 18.3327 10.0003 18.3327C9.96227 18.3329 9.92421 18.3329 9.88616 18.3327C9.81074 18.3327 9.73533 18.3302 9.66033 18.326ZM4.65283 15.2577C4.59052 15.0788 4.56931 14.8881 4.59078 14.6998C4.61224 14.5116 4.67583 14.3306 4.77682 14.1703C4.8778 14.01 5.0136 13.8745 5.17413 13.7738C5.33465 13.6732 5.51578 13.61 5.70408 13.5889C8.95241 13.2293 11.0682 13.2618 14.3007 13.5964C14.4893 13.6161 14.6709 13.6785 14.8316 13.7789C14.9924 13.8793 15.1282 14.0151 15.2286 14.1759C15.3289 14.3367 15.3913 14.5183 15.4109 14.7068C15.4305 14.8954 15.4068 15.0859 15.3416 15.2639C16.727 13.8622 17.5028 11.9702 17.5003 9.99935C17.5003 5.85727 14.1424 2.49935 10.0003 2.49935C5.85824 2.49935 2.50033 5.85727 2.50033 9.99935C2.50033 12.0477 3.32158 13.9043 4.65283 15.2577Z"
                  fill="#282D3A"
                  style={{
                    fill: isProfileHovered ? "#035FCE" : "#282D3A",
                    transition: "stroke 0.3s ease-in-out",
                  }}
                />
              </svg>
              <p
                className="text-[0.8125rem] text-[#282D3A] font-Roboto font-bold"
                style={{
                  color: isProfileHovered ? "#035FCE" : "#282D3A",
                  transition: "color 0.3s ease-in-out",
                }}
              >
                Profile
              </p>
            </div>
          </Link>
          {/* Profile end */}
          {/* Transaction start */}
          <Link to="transaction">
            <div
              className="flex items-center gap-1 pl-4 pt-5 cursor-pointer"
              onMouseEnter={() => setIsTestHovered(true)}
              onMouseLeave={() => setIsTestHovered(false)}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  stroke: isTestHovered ? "#035FCE" : "#282D3A",
                  transition: "stroke 0.3s ease-in-out",
                }}
              >
                <path
                  d="M1.66675 5.83244H16.6667M13.3334 1.66577L17.5001 5.83244L13.3334 9.9991M18.3334 14.1658H3.33341M6.66675 9.9991L2.50008 14.1658L6.66675 18.3324"
                  stroke="#282D3A"
                  stroke-width="2"
                  style={{
                    stroke: isTestHovered ? "#035FCE" : "#282D3A",
                    transition: "stroke 0.3s ease-in-out",
                  }}
                />
              </svg>
              <p
                className="text-[0.8125rem] text-[#282D3A] font-Roboto font-bold"
                style={{
                  color: isTestHovered ? "#035FCE" : "#282D3A",
                  transition: "color 0.3s ease-in-out",
                }}
              >
                Transaction
              </p>
            </div>
          </Link>
          {/* Transaction end */}
          {/* Setting start */}
          <Link to="profile">
            <div
              className="flex items-center gap-1 pl-4 pt-5 cursor-pointer"
              onMouseEnter={() => setIsSettingHovered(true)}
              onMouseLeave={() => setIsSettingHovered(false)}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_46_1150)">
                  <path
                    d="M11.0784 1.82514e-06C11.3724 1.82514e-06 11.6354 0.183002 11.7344 0.457002L12.4404 2.414C12.6934 2.477 12.9104 2.54 13.0944 2.606C13.2954 2.678 13.5544 2.787 13.8744 2.936L15.5184 2.066C15.6526 1.99491 15.8062 1.96925 15.9562 1.99287C16.1062 2.01649 16.2445 2.08811 16.3504 2.197L17.7964 3.692C17.9884 3.891 18.0424 4.182 17.9344 4.436L17.1634 6.243C17.2914 6.478 17.3934 6.679 17.4714 6.847C17.5554 7.03 17.6594 7.282 17.7834 7.607L19.5804 8.377C19.8504 8.492 20.0174 8.762 19.9994 9.051L19.8674 11.126C19.8583 11.2608 19.8099 11.39 19.7282 11.4975C19.6464 11.6051 19.5349 11.6863 19.4074 11.731L17.7054 12.336C17.6564 12.571 17.6054 12.772 17.5514 12.942C17.4643 13.2045 17.3648 13.4628 17.2534 13.716L18.1084 15.606C18.1687 15.7388 18.185 15.8874 18.1547 16.0301C18.1245 16.1728 18.0494 16.3021 17.9404 16.399L16.3144 17.851C16.2073 17.9462 16.0737 18.0064 15.9314 18.0236C15.7891 18.0408 15.645 18.014 15.5184 17.947L13.8424 17.059C13.5802 17.1978 13.3096 17.3204 13.0324 17.426L12.3004 17.7L11.6504 19.5C11.6022 19.6318 11.5153 19.746 11.4011 19.8276C11.2869 19.9091 11.1507 19.9542 11.0104 19.957L9.11037 20C8.96633 20.0038 8.82466 19.9628 8.70486 19.8828C8.58505 19.8027 8.493 19.6875 8.44137 19.553L7.67537 17.526C7.41401 17.4367 7.15524 17.34 6.89937 17.236C6.69008 17.1454 6.48396 17.0477 6.28137 16.943L4.38137 17.755C4.25618 17.8084 4.11816 17.8243 3.98411 17.8007C3.85006 17.7771 3.72577 17.715 3.62637 17.622L2.22037 16.303C2.11569 16.2052 2.0444 16.077 2.01658 15.9365C1.98877 15.796 2.00583 15.6503 2.06537 15.52L2.88237 13.74C2.77371 13.5292 2.67297 13.3144 2.58037 13.096C2.47227 12.8287 2.37222 12.5583 2.28037 12.285L0.490367 11.74C0.344868 11.696 0.217962 11.6052 0.129357 11.4817C0.0407526 11.3582 -0.0045913 11.2089 0.000367469 11.057L0.0703675 9.136C0.0753501 9.01066 0.114504 8.88907 0.183595 8.78438C0.252687 8.67968 0.349086 8.59587 0.462367 8.542L2.34037 7.64C2.42737 7.321 2.50337 7.073 2.57037 6.892C2.66471 6.65025 2.76947 6.41269 2.88437 6.18L2.07037 4.46C2.00859 4.32938 1.98983 4.18254 2.01679 4.04059C2.04374 3.89864 2.11502 3.76889 2.22037 3.67L3.62437 2.344C3.72279 2.25117 3.84594 2.18876 3.979 2.16428C4.11205 2.1398 4.24935 2.15429 4.37437 2.206L6.27237 2.99C6.48237 2.85 6.67237 2.737 6.84437 2.646C7.04937 2.537 7.32337 2.423 7.66837 2.3L8.32837 0.459002C8.37716 0.32427 8.46635 0.207883 8.58376 0.125733C8.70117 0.0435827 8.84107 -0.000326251 8.98437 1.82514e-06H11.0784ZM10.0244 7.019C8.35737 7.019 7.00637 8.354 7.00637 10.002C7.00637 11.65 8.35737 12.986 10.0244 12.986C11.6904 12.986 13.0414 11.65 13.0414 10.002C13.0414 8.354 11.6914 7.019 10.0244 7.019Z"
                    fill="#282D3A"
                    style={{
                      fill: isSettingHovered ? "#035FCE" : "#282D3A",
                      transition: "color 0.3s ease-in-out",
                    }}
                  />
                </g>
                <defs>
                  <clipPath id="clip0_46_1150">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <p
                className="text-[0.8125rem] text-[#282D3A] font-Roboto font-bold"
                style={{
                  color: isSettingHovered ? "#035FCE" : "#282D3A",
                  transition: "color 0.3s ease-in-out",
                }}
              >
                Setting
              </p>
            </div>
          </Link>
          {/* Setting end */}
          {/* Logout start */}
          <div
            className="flex items-center gap-1 pl-4 pt-5 cursor-pointer"
            onMouseEnter={() => setIsLogoutHovered(true)}
            onMouseLeave={() => setIsLogoutHovered(false)}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.8375 4.03518C7.03734 3.94534 7.26453 3.93781 7.46988 4.01424C7.67523 4.09067 7.84222 4.2449 7.93469 4.44354C8.02716 4.64218 8.03768 4.86925 7.96397 5.07559C7.89025 5.28193 7.73824 5.45093 7.54083 5.54602C6.33572 6.1052 5.3577 7.05917 4.76867 8.24998C4.17964 9.44079 4.01493 10.7971 4.3018 12.0942C4.58867 13.3914 5.30992 14.5518 6.34616 15.3832C7.38239 16.2145 8.67147 16.6671 10 16.666C11.3268 16.6661 12.614 16.2137 13.649 15.3835C14.684 14.5534 15.405 13.3951 15.693 12.0999C15.9809 10.8047 15.8186 9.45005 15.2328 8.25956C14.647 7.06908 13.6727 6.11394 12.4708 5.55185C12.2745 5.4558 12.1238 5.28647 12.0512 5.08037C11.9785 4.87426 11.9897 4.64785 12.0824 4.44994C12.1751 4.25202 12.3418 4.09843 12.5466 4.02225C12.7515 3.94608 12.978 3.95341 13.1775 4.04268C14.4694 4.6465 15.5624 5.60629 16.328 6.80942C17.0936 8.01255 17.5002 9.4091 17.5 10.8352C17.5 14.976 14.1417 18.3327 10 18.3327C5.85833 18.3327 2.5 14.976 2.5 10.8352C2.49972 9.4062 2.90785 8.0069 3.67633 6.80215C4.4448 5.59739 5.5416 4.63737 6.8375 4.03518ZM10 1.66602C10.2041 1.66604 10.4011 1.74098 10.5536 1.87661C10.7062 2.01224 10.8036 2.19914 10.8275 2.40185L10.8333 2.49935V8.33268C10.8331 8.54508 10.7518 8.74938 10.606 8.90382C10.4602 9.05827 10.2609 9.15121 10.0488 9.16366C9.8368 9.17611 9.62802 9.10712 9.46514 8.9708C9.30226 8.83447 9.19759 8.6411 9.1725 8.43018L9.16667 8.33268V2.49935C9.16667 2.27834 9.25446 2.06637 9.41074 1.91009C9.56702 1.75381 9.77899 1.66602 10 1.66602Z"
                fill="#282D3A"
                style={{
                  fill: isLogoutHovered ? "#035FCE" : "#282D3A",
                  transition: "stroke 0.3s ease-in-out",
                }}
              />
            </svg>
            <p
              className="text-[0.8125rem] text-[#282D3A] font-Roboto font-bold"
              style={{
                color: isLogoutHovered ? "#035FCE" : "#282D3A",
                transition: "color 0.3s ease-in-out",
              }}
            >
              Logout
            </p>
          </div>
          {/* Logout end */}
        </div>
      )}
      {/* Drop down end */}
    </div>
  );
}

export default Profile;
