import React, { useState } from "react";
import DropdownIcon from "./Media/dropdown.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Dropdown = ({ buttonText }) => {
  const myCustomColor = "#7F7F7F";
  const myCustomColor1 = "#EAEAEA";
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="text-sm lg:text-base ">
      <button
        className="w-36 flex bg-white py-2 px-4 rounded focus:outline-none "
        style={{ backgroundColor: myCustomColor1 }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Sort by <FontAwesomeIcon icon={faChevronDown} className="mt-1 ml-10" />
      </button>

      {isHovered && (
        <div
          className="absolute w-36 mt-2 bg-white border border-gray-300 rounded shadow-md"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Dropdown Content */}
          <ul className="py-2">
            <li className="px-4 py-2">Option 1</li>
            <li className="px-4 py-2">Option 2</li>
            <li className="px-4 py-2">Option 3</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
