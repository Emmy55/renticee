// import React from 'react'
import DashboardTemp from "./DashboardTemp"
import Bigmtn from "../Media/bigmtn.png";


function GloData() {
  return (
    <>
        <div>
            <DashboardTemp CurrentPath="Buy Data"  Linking={true}  SelectedText='Data' boolean="true" Color='#035FCE' tempColor='white' ValueInText={75} NetworkLogo={Bigmtn} showAdditionalDiv1={true} showAdditionalDiv={true} />
      </div>
    </>
  )
}

export default GloData
