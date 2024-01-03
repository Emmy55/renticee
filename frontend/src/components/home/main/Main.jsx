import React from "react";

// Images import start
import Img1 from "../../../assets/images/main-img1.svg";
import LeftMain from "./LeftMain";

function Main() {
  return (
    <div>
      <LeftMain
        title="The great story of our company"
        body="Rentice, an innovative tech firm, created a mobile app
            revolutionizing Nigeria's real estate. Our platform connects agents
            with clients, providing diverse services: listings, water, bill
            payments, loans, insurance, logistics, and freelancing. The app,
            accessible nationwide, offers a one-stop real estate solution."
        img={Img1}
      />
    </div>
  );
}

export default Main;
