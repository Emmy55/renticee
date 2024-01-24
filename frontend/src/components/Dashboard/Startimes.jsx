// import React from 'react'
import DashboardTemp from "./DashboardTemp"
import Startimes from "../Media/startime.png";
import WalletTop from "./WalletTop";

function GloData() {
  return (
    <>
        <div>
        <WalletTop SelectedText="TV Subscription" CurrentPath="Cable Tv" />
            <DashboardTemp SubLink2={true} CurrentPath="Cable Tv" SelectedText='TV Subscription' boolean2={true} Color2='#035FCE' tempColor2='white' ValueInText2={75} showAdditionalDiv4={true}   NetworkLogo={Startimes} showAdditionalDiv5={true} />
      </div>
    </>
  )
}

export default GloData
