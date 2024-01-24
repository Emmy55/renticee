// import React from 'react'
import DashboardTemp from "./DashboardTemp"
import Bigmtn from "../Media/bigmtn.png";
import WalletTop from "./WalletTop";


function GloData() {
  return (
    <>
        <div>
        <WalletTop SelectedText="Data" CurrentPath="Buy Data" />
            <DashboardTemp  Linking={true} boolean="true" Color='#035FCE' tempColor='white' ValueInText={75} NetworkLogo={Bigmtn} showAdditionalDiv1={true} showAdditionalDiv={true} />
      </div>
    </>
  )
}

export default GloData
