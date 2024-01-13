// import React from 'react'
import DashboardTemp from "./DashboardTemp"
import Glo from "./Media/glo.png";

function GloData() {
  return (
    <>
        <div>
            <DashboardTemp Link1={true} CurrentPath="Buy Data" SelectedText='Data' boolean1={true} Color='#035FCE' tempColor='white' ValueInText={75} NetworkLogo={Glo} showAdditionalDiv1={true} showAdditionalDiv={true} />
      </div>
    </>
  )
}

export default GloData
