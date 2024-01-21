import React from "react";
import SideBar from "../SideBar";
import Top from "../Top";
import ProfileMain from "./ProfileMain";
import TopMenu from "../TopMenu";

function Profile() {
  return (
    <div>
      <div>
        <div className="flex pb-10 lg:pb-0">
          <div className="hidden lg:block">
            <SideBar />
          </div>
          <div className="w-full">
            <div className="lg:hidden">
              <TopMenu />
            </div>
            <Top title="Profile Setting" />
            <ProfileMain />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
