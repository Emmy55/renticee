// import React from 'react'
import DashboardTemp from "./DashboardTemp"

import Airtel from "./Media/airtel.png";


function GloData() {
  return (
    <>
        <div>
            <DashboardTemp Link2={true} CurrentPath="Buy Data" SelectedText='Data' boolean2={true} Color='#035FCE' tempColor='white' ValueInText={75} NetworkLogo={Airtel} showAdditionalDiv1={true} showAdditionalDiv={true} />
      </div>
    </>
  )
}

export default GloData
