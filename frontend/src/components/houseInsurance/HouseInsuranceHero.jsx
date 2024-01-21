import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function HouseInsuranceHero(props) {
  return (
    <div>
      <div className="bg-insura-hero-img2 md:bg-insura-hero-img h-[282px] lg:h-[575px] object-center bg-cover bg-no-repeat">
        <h1 className="text-sm sm:text-base md:text-[1.4rem] text-white text-center pt-[55px] font-Roboto lg:text-[1.4375rem] lg:pt-44">
          Rentice Nigeria House Insurance
        </h1>
        <motion.h1
          className="text-[1.0625rem] sm:text-[1.725rem] md:text-[2.0625rem] text-white text-center pt-[20px] font-Roboto lg:text-5xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Easy and cheap insurance to make sure you and
          <br /> your family feel really calm and safe
        </motion.h1>
        <div className="flex justify-center pt-[20px] lg:pt-[10px]">
          <Link to="/step1">
            <button
              className={`bg-[#035FCE] text-[#FFFFFF] text-[0.43713rem] lg:text-sm font-Roboto py-2 px-5 rounded-[5px] mt-[0px] lg:mt-[40px] text-center font-semibold hover:scale-110 ${props.show}`}
            >
              Buy Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HouseInsuranceHero;
