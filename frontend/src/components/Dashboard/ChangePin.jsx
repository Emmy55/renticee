// import React from 'react'
import DashboardTemp from "./DashboardTemp"
import WalletTop from "./WalletTop";

function GloData() {
  return (
    <>
        <div>
        <WalletTop SelectedText="Pin" CurrentPath="Change Pin" />
            <DashboardTemp CurrentPath='Change Pin' SelectedText='Pin' Color4='#035FCE' tempColor4='white' ValueInText4={75} showAdditionalDiv7={true}  />
      </div>
    </>
  )
}

export default GloData
