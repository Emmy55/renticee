// import React from 'react'
import DashboardTemp from "./DashboardTemp"
import Glo from "./Media/glo.png";

function GloData() {
  return (
    <>
        <div>
            <DashboardTemp CurrentPath="Buy Data" Amount="1GB"  SelectedText='Data' boolean1={true} Color='#035FCE' tempColor='white' LeftValue={-152} ValueInText={75} NetworkLogo={Glo} showAdditionalDiv9={true} SimType='GLO' />
      </div>
    </>
  )
}

export default GloData
