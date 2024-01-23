// import React from 'react'
import DashboardTemp from "./DashboardTemp"
import Ninemobile from "../Media/ninemobile.png";
import WalletTop from "./WalletTop";


function GloData() {
  return (
    <>
        <div>
        <WalletTop SelectedText="Airtime" CurrentPath="Buy Airtime" />
            <DashboardTemp AirLink3={true} CurrentPath="Buy Airtime" SelectedText='Airtime' Color1='#035FCE' tempColor1='white' ValueInText1={75} showAdditionalDiv3={true}  boolean3={true} NetworkLogo={Ninemobile} showAdditionalDiv2={true} />
      </div>
    </>
  )
}

export default GloData
