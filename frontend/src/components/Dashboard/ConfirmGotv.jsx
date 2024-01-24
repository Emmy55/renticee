// import React from 'react'
import DashboardTemp from "./DashboardTemp"
import Gotv from "../Media/gotv.png";
import WalletTop from "./WalletTop";

function GloData() {
  return (
    <>
        <div>
        <WalletTop SelectedText="TV Subscription" CurrentPath="Cable Tv" />
            <DashboardTemp CurrentPath="Cable Tv" SelectedText='TV Subscription' boolean1={true} Color2='#035FCE' tempColor2='white' ValueInText2={75} NetworkLogo={Gotv} showAdditionalDiv9={true} LeftValue={-182} Amount='Gotv'  />
      </div>
    </>
  )
}

export default GloData
