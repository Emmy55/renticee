// import React from 'react'
import DashboardTemp from "./DashboardTemp"
import Dstv from "../Media/dstv.png";
import WalletTop from "./WalletTop";

function GloData() {
  return (
    <>
        <div>
        <WalletTop SelectedText="TV Subscription" CurrentPath="Cable Tv" />
            <DashboardTemp SubLink1={true} CurrentPath="Cable Tv" SelectedText='TV Subscription' boolean1={true} Color2='#035FCE' tempColor2='white' ValueInText2={75} showAdditionalDiv4={true}   NetworkLogo={Dstv} showAdditionalDiv5={true} />
      </div>
    </>
  )
}

export default GloData
