import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const GenderSelector = () => {
  const [selectedGender, setSelectedGender] = useState("");

  const handleGenderChange = (event) => {
    setSelectedGender(event.target.value);
  };

  const myCustomColor = "#FAFAFA";

  return (
    <div
      className="flex items-center ml-0
    mt-3 w-screen "
    >
      {/* <FontAwesomeIcon className='absolute left-96 ml-20' icon={faChevronDown} /> */}

      <select
        className="border border-gray-300 rounded p-6  py-3 w-[357px] lg:w-screen-2 focus:outline-none"
        value={selectedGender}
        onChange={handleGenderChange}
        style={{ backgroundColor: myCustomColor }}
      >
        <option value="">Select Data Plan</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
    </div>
  );
};

export default GenderSelector;
