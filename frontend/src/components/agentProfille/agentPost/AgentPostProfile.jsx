import React from "react";
import AgentPostPics from "./AgentPostPics";
import ContactMe from "../ContactMe";
import AgentPic from "../AgentPic";
import Header from "../../Header";

function AgentPostProfile() {
  return (
    <div>
      <Header />
      <div className="mt-10 px-5 sm:px-10 xl:px-20 flex items-center justify-between">
        <div>
          <AgentPic size="md:w-[96.22px] md:h-[96.22px]" />
          <AgentPostPics />
        </div>
        <ContactMe />
      </div>
    </div>
  );
}

export default AgentPostProfile;
