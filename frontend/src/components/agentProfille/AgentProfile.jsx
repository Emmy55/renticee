import React, { useEffect } from "react";
import Agent from "./Agent";
import ContactMe from "./ContactMe";
import Post from "./Post";

function AgentProfile() {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);

    // Additional cleanup or side effect code if needed
  }, []);
  return (
    <div>
      <div className="px-5 sm:px-10 xl:px-20 mt-10 flex flex-col lg:flex-row sm:items-start lg:items-center justify-between">
        <Agent />
        <ContactMe size="sm:w-[568px] md:w-[708px] lg:w-[423px]" />
      </div>
      {/* Post start */}
      <div className="mt-14 px-5 sm:px-10 xl:px-20 pb-10">
        <h1 className="text-[1.5rem] text-[#404145] font-bold font-Roboto">
          My Posts
        </h1>
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-10">
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
      </div>
      {/* Post end */}
    </div>
  );
}

export default AgentProfile;
