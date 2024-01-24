// import React from 'react'
import DashboardTemp from "./DashboardTemp"
import Glo from "../Media/glo.png";
import WalletTop from "./WalletTop";


function GloData() {
  return (
    <>
        <div>
        <WalletTop SelectedText="Airtime" CurrentPath="Buy Airtime" />
            <DashboardTemp AirLink1={true} boolean1={true} Color1='#035FCE' tempColor1='white' ValueInText1={75} showAdditionalDiv3={true}   NetworkLogo={Glo} showAdditionalDiv2={true} />
      </div>
    </>
  )
}

export default GloData
