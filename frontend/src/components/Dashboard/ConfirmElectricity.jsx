// import React from 'react'
import DashboardTemp from "./DashboardTemp"
import Ikejaelectricity from "../Media/ikejaelectricity.png";


function GloData() {
  return (
    <>
        <div>
            <DashboardTemp  CurrentPath='Pay Electricity' SelectedText='Electricity'  boolean="true" Color3='#035FCE' tempColor3='white' ValueInText3={75} Amount="Airtime" NetworkLogo={Ikejaelectricity} SimType='MTN' LeftValue={-125}  showAdditionalDiv11={true}  />
      </div>
    </>
  )
}

export default GloData
