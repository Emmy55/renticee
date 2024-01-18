import React from "react";
import Header from "../../Header";
import SideBar from "../SideBar";
import TopMenu from "../TopMenu";
import Top from "../Top";
import Footer from "../../Footer";
import TransactionMain from "./TransactionMain";

function Transaction() {
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
            <TransactionMain />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Transaction;
