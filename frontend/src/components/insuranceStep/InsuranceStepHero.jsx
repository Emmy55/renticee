import React from "react";
import { motion } from "framer-motion";

function InsuranceStepHero() {
  return (
    <div>
      <div className="bg-insura-step-img2 md:bg-insura-step-img h-[282px] lg:h-[575px] object-center bg-cover bg-no-repeat flex items-center justify-center">
        <motion.h1
          className="text-[1.2625rem] sm:text-[2.0625rem] md:text-[2.5625rem] text-white text-center pt-[40px] font-Roboto lg:text-5xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Home Content Insurance
          <br /> (Home Insurance ₦15,000.00) /YR
        </motion.h1>
      </div>
    </div>
  );
}

export default InsuranceStepHero;
