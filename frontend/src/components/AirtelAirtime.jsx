// import React from 'react'
import DashboardTemp from "./DashboardTemp"

import Airtel from "./Media/airtel.png";


function GloData() {
  return (
    <>
        <div>
            <DashboardTemp AirLink2={true} CurrentPath="Buy Airtime" SelectedText='Airtime' Color1='#035FCE' tempColor1='white' ValueInText1={75} showAdditionalDiv3={true}  boolean2={true} NetworkLogo={Airtel} showAdditionalDiv2={true} />
      </div>
    </>
  )
}

export default GloData
