import React from "react";
import Agent from "./Agent";
import ContactMe from "./ContactMe";
import Header from "../Header";
import Post from "./Post";
import Footer from "../Footer";

function AgentProfile() {
  return (
    <div>
      <Header />
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
      <Footer />
    </div>
  );
}

export default AgentProfile;
