import React from "react";
import { motion } from "framer-motion";

function BlogHero() {
  return (
    <div>
      <div className="bg-blog-pic-mob md:bg-blog-pic h-[282px] lg:h-[575px] object-center bg-cover bg-no-repeat flex flex-col items-center justify-center">
        <h1 className="text-[1.75rem] sm:text-[2.0625rem] md:text-[2.5625rem] text-white text-center pt-[40px] font-bold font-Roboto lg:text-5xl">
          Rentice Blog
        </h1>
        <motion.h1
          className="px-1 text-[1.4375rem] sm:text-[2.0625rem] md:text-[2.5625rem] text-white text-center pt-[20px] font-Roboto lg:text-5xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Access real estate tips, trends
          <br className="sm:hidden" /> and other information to
          <br className="hidden lg:block" /> grow your
          <br className="sm:hidden" /> career.
        </motion.h1>
      </div>
    </div>
  );
}

export default BlogHero;
