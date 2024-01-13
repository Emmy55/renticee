import React, { useState } from "react";

function GDPRagreement() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="md:h-screen bg-gradient-to-tr from-blue-900 via-blue-900 to-blue-800 md:flex md:justify-center md:items-center">
      <div className="bg-white flex flex-col items-center mt-10 md:w-[648px] md:h-[529px] md:justify-center">
        <h2 className="text-[#282D3A] text-[1.1875rem] font-bold font-Roboto">
          GDPR Agreement
        </h2>
        <form className="flex flex-col mt-10">
          <div className="flex items-start">
            <input
              type="checkbox"
              name="agree"
              id="file-upload"
              value="Yes"
              className="w-[18px] h-[18px]"
              onChange={handleCheckboxChange}
              checked={isChecked}
            />
            <p
              htmlFor="file-upload"
              className="w-[323px] md:w-[435px] text-center text-[#282D3A] text-[1.1875rem]"
            >
              By utilizing our services, you consent to our data processing
              practices compliant with GDPR. We gather and handle personal
              information exclusively to enhance and deliver our services. Your
              data is managed securely, and you retain the right to access,
              correct, or delete your information. We do not disclose your data
              to third parties without your explicit consent. For further
              information, please consult our{" "}
              <span className="text-[#035FCE] cursor-pointer">
                Privacy Policy.
              </span>
            </p>
          </div>
          <div className="flex flex-col items-center">
            <button
              className={`w-[358px] h-[50.63px] text-base font-Roboto font-medium rounded-[5px] mt-7 md:w-[405.28px] md:h-[57.58px] md:text-xl ${
                isChecked
                  ? "bg-[#035FCE] text-white hover:bg-[#3d7ece] hover:scale-95"
                  : "bg-[#B0B0B0] text-[#666666] cursor-not-allowed"
              }`}
              disabled={!isChecked}
            >
              Verify
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default GDPRagreement;
