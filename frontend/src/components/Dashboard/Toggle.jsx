// Toggle.js
import React, { useState } from 'react';

const Toggle = () => {
  const [isToggled, setToggled] = useState(false);

  const handleToggle = () => {
    setToggled(!isToggled);
  };

  return (
    <div>
      <label className="flex items-center space-x-2 cursor-pointer">
        {/* <span>Toggle:</span> */}
        <div
          className={`relative w-10 h-6 transition-all duration-300 ${
            isToggled ? 'bg-blue-500' : 'bg-gray-300'
          } rounded-full cursor-pointer`}
          onClick={handleToggle}
        >
          <div
            className={`absolute left-1 top-1 w-4 h-4 transition-all duration-300 ${
              isToggled ? 'transform translate-x-full bg-white' : 'bg-blue-500'
            } rounded-full`}
          ></div>
        </div>
      </label>
    </div>
  );
};

export default Toggle;
