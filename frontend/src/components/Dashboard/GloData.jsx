// import React from 'react'
import DashboardTemp from "./DashboardTemp"
import Glo from "../Media/glo.png";
import WalletTop from "./WalletTop";

function GloData() {
  return (
    <>
        <div>
        <WalletTop SelectedText="Data" CurrentPath="Buy Data" />
            <DashboardTemp Link1={true} CurrentPath="Buy Data" SelectedText='Data' boolean1={true} Color='#035FCE' tempColor='white' ValueInText={75} NetworkLogo={Glo} showAdditionalDiv1={true} showAdditionalDiv={true} />
      </div>
    </>
  )
}

export default GloData