import React, { useState } from "react";

import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

function SideBar() {
  const activeLink = "text-[#035FCE]";
  const normalLink = "hover:scale-105 hover:font-bold text-[#63666D]";
  const [isTestHovered, setIsTestHovered] = useState(false);
  const [isNotificationHovered, setIsNotificationHovered] = useState(false);
  const [isTrasactionHovered, setIsTrasactionHovered] = useState(false);

  return (
    <div>
      <div className="w-[294px] h-[100vh] flex flex-col items-center bg-white border-r border-r-[#DFE2E6]">
        <div className="mt-10">
          <p className="text-[2.0625rem] font-bold text-[#282D3A] font-Roboto">
            Setting
          </p>
          <div className="mt-8">
            {/* profile start */}
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                isActive ? activeLink + setIsTestHovered(true) : normalLink
              }
            >
              <div className="flex items-center gap-3 cursor-pointer">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.0052 2.6665C8.64121 2.6665 2.67188 8.63584 2.67188 15.9998C2.67188 23.3638 8.64121 29.3332 16.0052 29.3332C23.3692 29.3332 29.3385 23.3638 29.3385 15.9998C29.3385 8.63584 23.3692 2.6665 16.0052 2.6665Z"
                    stroke="#282D3A"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    style={{
                      stroke: isTestHovered ? "#035FCE" : "#282D3A",
                      transition: "stroke 0.3s ease-in-out",
                    }}
                  />
                  <path
                    d="M5.70312 24.4613C5.70312 24.4613 8.67513 20.6667 16.0085 20.6667C23.3418 20.6667 26.3151 24.4613 26.3151 24.4613M16.0085 16C17.0693 16 18.0867 15.5786 18.8369 14.8284C19.587 14.0783 20.0085 13.0609 20.0085 12C20.0085 10.9391 19.587 9.92172 18.8369 9.17157C18.0867 8.42143 17.0693 8 16.0085 8C14.9476 8 13.9302 8.42143 13.18 9.17157C12.4299 9.92172 12.0085 10.9391 12.0085 12C12.0085 13.0609 12.4299 14.0783 13.18 14.8284C13.9302 15.5786 14.9476 16 16.0085 16Z"
                    stroke="#282D3A"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    style={{
                      stroke: isTestHovered ? "#035FCE" : "#282D3A",
                      transition: "stroke 0.3s ease-in-out",
                    }}
                  />
                </svg>
                {/* <img src={ProfileIcon} alt="" className="fill-black stroke-black" /> */}
                <p
                  className={`text-[0.875rem] font-medium font-Roboto lg:text-[1.4375rem]`}
                  style={{
                    color: isTestHovered ? "#035FCE" : "#63666D",
                    transition: "color 0.3s ease-in-out",
                  }}
                >
                  Profile
                </p>
              </div>
            </NavLink>
            {/* Profile end */}
            {/* Notification end */}
            <NavLink
              to="/notification"
              className={({ isActive }) =>
                isActive
                  ? activeLink + setIsNotificationHovered(true)
                  : normalLink
              }
            >
              <div className="flex items-center gap-3 mt-10 cursor-pointer">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="#035FCE"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    fill: isNotificationHovered ? "#035FCE" : "#282D3A",
                    transition: "stroke 0.3s ease-in-out",
                  }}
                >
                  <path
                    d="M28.707 19.293L26 16.586V13C25.9969 10.5218 25.075 8.13285 23.4126 6.29498C21.7502 4.45712 19.4654 3.30093 17 3.05V1H15V3.05C12.5346 3.30093 10.2498 4.45712 8.58737 6.29498C6.92498 8.13285 6.0031 10.5218 6 13V16.586L3.293 19.293C3.10545 19.4805 3.00006 19.7348 3 20V23C3 23.2652 3.10536 23.5196 3.29289 23.7071C3.48043 23.8946 3.73478 24 4 24H11V24.777C10.9782 26.0456 11.4254 27.2777 12.2558 28.237C13.0862 29.1964 14.2414 29.8156 15.5 29.976C16.1952 30.0449 16.8971 29.9676 17.5606 29.749C18.2241 29.5304 18.8345 29.1753 19.3525 28.7066C19.8706 28.2379 20.2848 27.666 20.5685 27.0277C20.8522 26.3893 20.9992 25.6986 21 25V24H28C28.2652 24 28.5196 23.8946 28.7071 23.7071C28.8946 23.5196 29 23.2652 29 23V20C28.9999 19.7348 28.8946 19.4805 28.707 19.293ZM19 25C19 25.7956 18.6839 26.5587 18.1213 27.1213C17.5587 27.6839 16.7956 28 16 28C15.2044 28 14.4413 27.6839 13.8787 27.1213C13.3161 26.5587 13 25.7956 13 25V24H19V25ZM27 22H5V20.414L7.707 17.707C7.89455 17.5195 7.99994 17.2652 8 17V13C8 10.8783 8.84285 8.84344 10.3431 7.34315C11.8434 5.84285 13.8783 5 16 5C18.1217 5 20.1566 5.84285 21.6569 7.34315C23.1571 8.84344 24 10.8783 24 13V17C24.0001 17.2652 24.1054 17.5195 24.293 17.707L27 20.414V22Z"
                    fill="#282D3A"
                    style={{
                      fill: isNotificationHovered ? "#035FCE" : "#282D3A",
                      transition: "stroke 0.3s ease-in-out",
                    }}
                  />
                </svg>
                {/* <img src={ProfileIcon} alt="" className="fill-black stroke-black" /> */}
                <p
                  className={`text-[0.875rem] font-medium  font-Roboto lg:text-[1.4375rem]`}
                  style={{
                    color: isNotificationHovered ? "#035FCE" : "#63666D",
                    transition: "color 0.3s ease-in-out",
                  }}
                >
                  Notification
                </p>
              </div>
            </NavLink>
            {/* Notification end */}
            {/* trnsaction end */}
            <NavLink
              to="/transaction"
              className={({ isActive }) =>
                isActive
                  ? activeLink + setIsTrasactionHovered(true)
                  : normalLink
              }
            >
              <div className="flex items-center gap-3 mt-10 cursor-pointer ">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 22H30V24H2V22ZM2 26H30V28H2V26ZM24 10C23.6044 10 23.2178 10.1173 22.8889 10.3371C22.56 10.5568 22.3036 10.8692 22.1522 11.2346C22.0009 11.6001 21.9613 12.0022 22.0384 12.3902C22.1156 12.7781 22.3061 13.1345 22.5858 13.4142C22.8655 13.6939 23.2219 13.8844 23.6098 13.9616C23.9978 14.0387 24.3999 13.9991 24.7654 13.8478C25.1308 13.6964 25.4432 13.44 25.6629 13.1111C25.8827 12.7822 26 12.3956 26 12C26 11.4696 25.7893 10.9609 25.4142 10.5858C25.0391 10.2107 24.5304 10 24 10ZM16 16C15.2089 16 14.4355 15.7654 13.7777 15.3259C13.1199 14.8864 12.6072 14.2616 12.3045 13.5307C12.0017 12.7998 11.9225 11.9956 12.0769 11.2196C12.2312 10.4437 12.6122 9.73098 13.1716 9.17157C13.731 8.61216 14.4437 8.2312 15.2196 8.07686C15.9956 7.92252 16.7998 8.00173 17.5307 8.30448C18.2616 8.60723 18.8864 9.11993 19.3259 9.77772C19.7654 10.4355 20 11.2089 20 12C19.9987 13.0605 19.5768 14.0771 18.827 14.827C18.0771 15.5768 17.0605 15.9987 16 16ZM16 10C15.6044 10 15.2178 10.1173 14.8889 10.3371C14.56 10.5568 14.3036 10.8692 14.1522 11.2346C14.0009 11.6001 13.9613 12.0022 14.0384 12.3902C14.1156 12.7781 14.3061 13.1345 14.5858 13.4142C14.8655 13.6939 15.2219 13.8844 15.6098 13.9616C15.9978 14.0387 16.3999 13.9991 16.7654 13.8478C17.1308 13.6964 17.4432 13.44 17.6629 13.1111C17.8827 12.7822 18 12.3956 18 12C17.9995 11.4697 17.7886 10.9613 17.4136 10.5864C17.0387 10.2114 16.5303 10.0005 16 10ZM8 10C7.60444 10 7.21776 10.1173 6.88886 10.3371C6.55996 10.5568 6.30362 10.8692 6.15224 11.2346C6.00087 11.6001 5.96126 12.0022 6.03843 12.3902C6.1156 12.7781 6.30608 13.1345 6.58579 13.4142C6.86549 13.6939 7.22186 13.8844 7.60982 13.9616C7.99778 14.0387 8.39991 13.9991 8.76537 13.8478C9.13082 13.6964 9.44318 13.44 9.66294 13.1111C9.8827 12.7822 10 12.3956 10 12C10 11.4696 9.78929 10.9609 9.41421 10.5858C9.03914 10.2107 8.53043 10 8 10Z"
                    fill="#282D3A"
                    style={{
                      fill: isTrasactionHovered ? "#035FCE" : "#282D3A",
                      transition: "stroke 0.3s ease-in-out",
                    }}
                  />
                  <path
                    d="M28 20H4C3.46997 19.9987 2.96203 19.7875 2.58724 19.4128C2.21246 19.038 2.00132 18.53 2 18V6C2.00132 5.46997 2.21246 4.96203 2.58724 4.58724C2.96203 4.21246 3.46997 4.00132 4 4H28C28.53 4.00132 29.038 4.21246 29.4128 4.58724C29.7875 4.96203 29.9987 5.46997 30 6V18C29.9992 18.5302 29.7882 19.0384 29.4133 19.4133C29.0384 19.7882 28.5302 19.9992 28 20ZM28 6H4V18H28V6Z"
                    fill="#282D3A"
                    style={{
                      fill: isTrasactionHovered ? "#035FCE" : "#282D3A",
                      transition: "stroke 0.3s ease-in-out",
                    }}
                  />
                </svg>
                {/* <img src={ProfileIcon} alt="" className="fill-black stroke-black" /> */}
                <p
                  className="text-[0.875rem] font-medium font-Roboto lg:text-[1.4375rem]"
                  style={{
                    color: isTrasactionHovered ? "#035FCE" : "#282D3A",
                    transition: "stroke 0.3s ease-in-out",
                  }}
                >
                  Transaction
                </p>
              </div>
            </NavLink>
            {/* trnsaction end */}
            {/* Log out start */}
            <div className="flex items-center gap-3 mt-10 cursor-pointer hover:fill-[#035FCE] hover:stroke-[#035FCE] hover:text-[#035FCE]">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.67188 4H14.6719C15.7327 4 16.7502 4.42143 17.5003 5.17157C18.2504 5.92172 18.6719 6.93913 18.6719 8V13.3333H17.3385V8C17.3385 7.29276 17.0576 6.61448 16.5575 6.11438C16.0574 5.61428 15.3791 5.33333 14.6719 5.33333H6.67188C5.96463 5.33333 5.28635 5.61428 4.78626 6.11438C4.28616 6.61448 4.00521 7.29276 4.00521 8V25.3333C4.00521 26.0406 4.28616 26.7189 4.78626 27.219C5.28635 27.719 5.96463 28 6.67188 28H14.6719C15.3791 28 16.0574 27.719 16.5575 27.219C17.0576 26.7189 17.3385 26.0406 17.3385 25.3333V20H18.6719V25.3333C18.6719 26.3942 18.2504 27.4116 17.5003 28.1618C16.7502 28.9119 15.7327 29.3333 14.6719 29.3333H6.67188C5.61101 29.3333 4.59359 28.9119 3.84345 28.1618C3.0933 27.4116 2.67188 26.3942 2.67188 25.3333V8C2.67188 6.93913 3.0933 5.92172 3.84345 5.17157C4.59359 4.42143 5.61101 4 6.67188 4ZM10.6719 16H25.6719L21.3385 11.6667L22.2185 10.6667L28.2185 16.6667L22.2185 22.6667L21.3385 21.6667L25.6719 17.3333H10.6719V16Z"
                  fill="#282D3A"
                />
              </svg>
              {/* <img src={ProfileIcon} alt="" className="fill-black stroke-black" /> */}
              <p
                className={`text-[0.875rem] font-medium font-Roboto lg:text-[1.4375rem] hover:text-[#035FCE]`}
              >
                Logout
              </p>
            </div>
            {/* log out end */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
