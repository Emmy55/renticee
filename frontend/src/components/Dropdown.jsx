import React, { useState } from 'react';
import DropdownIcon from './Media/dropdown.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'


const Dropdown = ({ buttonText, }) => {
const myCustomColor = '#7F7F7F';
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>

    <div className="relative lg:z-10">
      <button
        className="flex bg-white py-2 lg:mt-0 mt-2 px-4 rounded focus:outline-none " style={{ color: myCustomColor }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {buttonText} <FontAwesomeIcon icon={faChevronDown} className='mt-1 ml-2' />
      </button>
      

      {isHovered && (
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="w-186 right-0 mt-2 bg-white border border-gray-300 rounded shadow-md z-50 absolute"
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
    <FontAwesomeIcon icon="fa-solid fa-chevron-down" />
    </>
    
  );
};

export default Dropdown;
