// import React from 'react'
import DashboardTemp from "./DashboardTemp"
import Gotv from "../Media/gotv.png";
import WalletTop from "./WalletTop";

function GloData() {
  return (
    <>
        <div>
        <WalletTop SelectedText="Electricity" CurrentPath="Pay Electricity" />
            <DashboardTemp CurrentPath='Pay Electricity' SelectedText='Electricity' boolean={true} Color3='#035FCE' tempColor3='white' ValueInText3={75} showAdditionalDiv6={true}   NetworkLogo={Gotv}  />
      </div>
    </>
  )
}

export default GloData
