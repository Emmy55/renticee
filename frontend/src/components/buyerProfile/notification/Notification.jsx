import React from "react";
import NotificationMain from "./NotificationMain";
import Header from "../../Header";
import SideBar from "../SideBar";
import TopMenu from "../TopMenu";
import Top from "../Top";
import Footer from "../../Footer";

function Notification() {
  return (
    <div>
      <div>
        <Header />
        <div className="flex pb-10 lg:pb-0">
          <div className="hidden lg:block">
            <SideBar />
          </div>
          <div className="w-full">
            <div className="lg:hidden">
              <TopMenu />
            </div>
            <Top title="Notification Setting" />
            <NotificationMain />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Notification;
