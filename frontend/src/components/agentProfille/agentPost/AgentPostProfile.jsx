import React, { useEffect } from "react";
import AgentPostPics from "./AgentPostPics";
import ContactMe from "../ContactMe";
import AgentPic from "../AgentPic";
import Description from "./Description";
import Post from "../Post";

function AgentPostProfile() {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);

    // Additional cleanup or side effect code if needed
  }, []);
  return (
    <div className="">
      <div className="px-5 sm:px-10 xl:px-16 pb-10">
        <div className="mt-10 flex flex-col lg:flex-row items-center sm:items-start lg:items-center justify-between">
          <div>
            <AgentPic size="md:w-[96.22px] md:h-[96.22px]" />
            <AgentPostPics />
          </div>
          <div className="">
            <ContactMe size="sm:w-[550px] lg:w-[423px]" />
          </div>
        </div>
        {/* Description start */}
        <Description />
        {/* Description end */}
        {/* Post start */}
        <div className="mt-14">
          <h1 className="text-[1.5rem] text-[#404145] font-bold font-Roboto">
            My Posts
          </h1>
          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-10">
            <Post />
            <Post />
            <Post />
          </div>
        </div>
        {/* Post end */}
      </div>
    </div>
  );
}

export default AgentPostProfile;
