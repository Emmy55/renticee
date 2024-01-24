// import React from 'react'
import DashboardTemp from "./DashboardTemp"
import Dstv from "../Media/dstv.png";
import WalletTop from "./WalletTop";

function GloData() {
  return (
    <>
        <div>
        <WalletTop SelectedText="TV Subscription" CurrentPath="Cable Tv" />
            <DashboardTemp CurrentPath="Cable Tv" SelectedText='TV Subscription' boolean1={true} Color2='#035FCE' tempColor2='white' LeftValue={-182} Amount='Dstv' ValueInText2={75}  NetworkLogo={Dstv} showAdditionalDiv9={true} />
      </div>
    </>
  )
}

export default GloData
