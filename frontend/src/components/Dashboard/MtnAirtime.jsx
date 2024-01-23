// import React from 'react'
import DashboardTemp from "./DashboardTemp"
import Bigmtn from "../Media/bigmtn.png";


function GloData() {
  return (
    <>
        <div>
            <DashboardTemp currentPath="Buy Airtime" AirLinking={true} selectedText='Airtime' boolean="true"  NetworkLogo={Bigmtn} showAdditionalDiv2={true} Color1='#035FCE' tempColor1='white' ValueInText1={75} showAdditionalDiv3={true} />
      </div>
    </>
  )
}

export default GloData
