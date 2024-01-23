// import React from 'react'
import DashboardTemp from "./DashboardTemp";
// import Bigmtn from "../Media/bigmtn.png";
import WalletTop from "./WalletTop";

function GloData() {
  return (
    <>
      <div>
      <WalletTop SelectedText="Wallet" CurrentPath="Fund Wallet" />
        <DashboardTemp
          CurrentPath="Fund Wallet"
          SelectedText="Wallet"
          boolean="true"
          Color5="#035FCE"
          tempColor5="white"
          ValueInText5={75}
          showAdditionalDiv8={true}
        />
      </div>
    </>
  );
}

export default GloData;
