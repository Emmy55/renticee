// import React from 'react'
import DashboardTemp from "./DashboardTemp"
import Ninemobile from "../Media/ninemobile.png";
import WalletTop from "./WalletTop";


function GloData() {
  return (
    <>
        <div>
        <WalletTop SelectedText="Data" CurrentPath="Buy Data" />
            <DashboardTemp Link3={true} CurrentPath="Buy Data" SelectedText='Data' boolean3={true} NetworkLogo={Ninemobile} Color='#035FCE' tempColor='white' ValueInText={75} showAdditionalDiv1={true} showAdditionalDiv={true} />
      </div>
    </>
  )
}

export default GloData
