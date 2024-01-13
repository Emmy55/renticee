// import React from 'react'
import DashboardTemp from "./DashboardTemp"

import Ninemobile from "./Media/ninemobile.png";


function GloData() {
  return (
    <>
        <div>
            <DashboardTemp LeftValue={-120} CurrentPath="Buy Data"  SimType='9 Mobile' SelectedText='Data' boolean3={true} NetworkLogo={Ninemobile} Color='#035FCE' tempColor='white' ValueInText={75} Amount="1GB"  showAdditionalDiv9={true} />
      </div>
    </>
  )
}

export default GloData
