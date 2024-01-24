// import React from 'react'
import DashboardTemp from "./DashboardTemp"
import Gotv from "../Media/gotv.png";
import WalletTop from "./WalletTop";

function GloData() {
  return (
    <>
        <div>
        <WalletTop SelectedText="TV Subscription" CurrentPath="Cable Tv" />
            <DashboardTemp CurrentPath="Cable Tv" SelectedText='TV Subscription' SubLinking={true} boolean={true} Color2='#035FCE' tempColor2='white' ValueInText2={75} showAdditionalDiv4={true}   NetworkLogo={Gotv} showAdditionalDiv5={true} />
      </div>
    </>
  )
}

export default GloData
