// import React from 'react'
import DashboardTemp from "./DashboardTemp"

import Ninemobile from "./Media/ninemobile.png";


function GloData() {
  return (
    <>
        <div>
            <DashboardTemp CurrentPath="Buy Airtime" SelectedText='Airtime' LeftValue={-97} SimType='9 Mobile'  boolean3={true} NetworkLogo={Ninemobile} Color1='#035FCE' tempColor1='white' ValueInText1={75} Amount="Airtime"  showAdditionalDiv9={true} />
      </div>
    </>
  )
}

export default GloData
1