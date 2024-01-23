// import React from 'react'
import DashboardTemp from "./DashboardTemp"
import Airtel from "../Media/airtel.png";
import WalletTop from "./WalletTop";


function GloData() {
  return (
    <>
        <div>
        <WalletTop SelectedText="Data" CurrentPath="Buy Data" />
            <DashboardTemp Link2={true} CurrentPath="Buy Data" SelectedText='Data' boolean2={true} Color='#035FCE' tempColor='white' ValueInText={75} NetworkLogo={Airtel} showAdditionalDiv1={true} showAdditionalDiv={true} />
      </div>
    </>
  )
}

export default GloData
