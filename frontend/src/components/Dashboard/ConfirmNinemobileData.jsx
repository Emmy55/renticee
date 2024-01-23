// import React from 'react'
import DashboardTemp from "./DashboardTemp"

import Ninemobile from "../Media/ninemobile.png";
import WalletTop from "./WalletTop";


function GloData() {
  return (
    <>
        <div>
        <WalletTop SelectedText="Data" CurrentPath="Buy Data" />
            <DashboardTemp LeftValue={-120} CurrentPath="Buy Data" SimType='9 Mobile' SelectedText='Data' boolean3={true} NetworkLogo={Ninemobile} Color='#035FCE' tempColor='white'  Amount="1GB" showAdditionalDiv9={true} />
      </div>
    </>
  )
}

export default GloData
