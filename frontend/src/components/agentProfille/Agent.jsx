import React from "react";

import AgentPic from "./AgentPic";

function Agent() {
  return (
    <div className="pb-10">
      <AgentPic size="md:w-[160px] md:h-[160px]" />
      {/* About start */}
      <div className="mt-5 md:w-[708px] lg:w-[500px] xl:w-[710px]">
        <p className="text-[1.1875rem] text-[#222325] font-bold font-Roboto">
          About me
        </p>
        <p className="text-base text-[#404145] font-Roboto sm:w-[590px] md:w-[708px] lg:w-[500px] xl:w-[710px] mt-3">
          Hi, I'm Bright Moses, your dedicated real estate professional! With a
          passion for helping people find their dream homes, I bring expertise,
          integrity, and enthusiasm to every client interaction. I thrive on
          understanding your needs and providing personalized solutions to make
          your real estate journey smooth and successful. Let's work together to
          turn your property dreams into reality!
        </p>
      </div>
      {/* About end */}
    </div>
  );
}

export default Agent;
