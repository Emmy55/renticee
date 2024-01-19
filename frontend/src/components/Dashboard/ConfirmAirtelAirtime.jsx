// import React from 'react'
import DashboardTemp from "./DashboardTemp"

import Airtel from "../Media/airtel.png";


function GloData() {
  return (
    <>
        <div>
            <DashboardTemp SimType='Airtel'  CurrentPath="Buy Airtime" SelectedText='Airtime' boolean2={true} Color1='#035FCE' tempColor1='white' ValueInText1={75} NetworkLogo={Airtel} Amount="Airtime" LeftValue={-122} showAdditionalDiv9={true} />
      </div>
    </>
  )
}

export default GloData
