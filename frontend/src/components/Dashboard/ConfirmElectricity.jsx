// import React from 'react'
import DashboardTemp from "./DashboardTemp";
import Ikejaelectricity from "../Media/ikejaelectricity.png";
import WalletTop from "./WalletTop";

function GloData() {
  return (
    <>
      <div>
        <WalletTop SelectedText="Electricity" CurrentPath="Pay Electricity" />
        <DashboardTemp
          CurrentPath="Pay Electricity"
          MobileLeftValue={168}
          SelectedText="Electricity"
          boolean="true"
          Color3="#035FCE"
          tempColor3="white"
          ValueInText3={75}
          Amount="Airtime"
          NetworkLogo={Ikejaelectricity}
          SimType="MTN"
          LeftValue={17}
          showAdditionalDiv11={true}
        />
      </div>
    </>
  );
}

export default GloData;
