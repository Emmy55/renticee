import React from "react";

import LeftMain from "./LeftMain";

// Images import start
import Img1 from "../../../assets/images/main-img1.svg";
import Img2 from "../../../assets/images/main-img2.svg";
import Img3 from "../../../assets/images/main-img3.svg";
import Img4 from "../../../assets/images/main-img4.svg";
import Img5 from "../../../assets/images/main-img5.svg";
import Img6 from "../../../assets/images/main-img6.svg";

function Main() {
  return (
    <div className="">
      <LeftMain
        title="The great story of our company"
        body="Rentice, an innovative tech firm, created a mobile app
            revolutionizing Nigeria's real estate. Our platform connects agents
            with clients, providing diverse services: listings, water, bill
            payments, loans, insurance, logistics, and freelancing. The app,
            accessible nationwide, offers a one-stop real estate solution."
        img={Img1}
        round="rounded-tl-[20px]"
      />
      <LeftMain
        title="Sell, buy or rent your home
        with our agents"
        body="Our platform acts as a single hub, connecting house and property agents directly with clients, offering an extensive range of services."
        img={Img2}
        reverse="flex-row-reverse"
      />
      <LeftMain
        title="Water and Sewage Services"
        body="In addition to real estate, Rentice allows clients to order tank water and sewage water services, ensuring a reliable supply and efficient management of essential resources."
        img={Img3}
      />
      <LeftMain
        title="Bill Payments"
        body="Our platform integrates bill payment functionality, enabling users to conveniently settle utility bills and other related expenses within the app, reducing the need for manual transactions"
        img={Img4}
        reverse="flex-row-reverse"
      />
      <LeftMain
        title="House Loan and Insurance Services"
        body="Rentice partners with leading financial institutions and insurance providers to offer clients access to house loans and comprehensive insurance coverage. This feature simplifies the process of securing financing and protecting property investments"
        img={Img5}
      />
      <LeftMain
        title="Logistics Services"
        body="Clients can avail themselves of logistics support, such as moving services or transportation for their belongings. Additionally, Rentice connects users with freelance professionals, such as interior designers, architects, and property maintenance specialists, ensuring a hassle-free experience when setting up their new space."
        img={Img6}
        reverse="flex-row-reverse"
      />
    </div>
  );
}

export default Main;
