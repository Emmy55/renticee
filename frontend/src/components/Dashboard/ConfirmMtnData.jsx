// import React from 'react'
import DashboardTemp from "./DashboardTemp"
import Bigmtn from "../Media/bigmtn.png";


function GloData() {
  return (
    <>
        <div>
            <DashboardTemp CurrentPath="Buy Data" SelectedText='Data' boolean="true" Color='#035FCE' tempColor='white' ValueInText={75} NetworkLogo={Bigmtn} Amount="1GB"  SimType='MTN' showAdditionalDiv9={true}  />
      </div>
    </>
  )
}

export default GloData
