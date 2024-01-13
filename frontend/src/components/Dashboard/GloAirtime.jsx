// import React from 'react'
import DashboardTemp from "./DashboardTemp"
import Glo from "../Media/glo.png";

function GloData() {
  return (
    <>
        <div>
            <DashboardTemp AirLink1={true} CurrentPath="Buy Airtime" SelectedText='Airtime' boolean1={true} Color1='#035FCE' tempColor1='white' ValueInText1={75} showAdditionalDiv3={true}   NetworkLogo={Glo} showAdditionalDiv2={true} />
      </div>
    </>
  )
}

export default GloData
