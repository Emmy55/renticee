// import React from 'react'
import DashboardTemp from "./DashboardTemp"
import Bigmtn from "../Media/bigmtn.png";
import WalletTop from "./WalletTop";


function GloData() {
  return (
    <>
        <div>
        <WalletTop SelectedText="Airtime" CurrentPath="Buy Airtime" />
            <DashboardTemp  CurrentPath="Buy Airtime" SelectedText='Airtime' boolean="true" Color1='#035FCE' tempColor1='white' ValueInText1={75} Amount="Airtime" NetworkLogo={Bigmtn} SimType='MTN' LeftValue={-125}  showAdditionalDiv9={true}  />
      </div>
    </>
  )
}

export default GloData
