// import React from 'react'
import DashboardTemp from "./DashboardTemp"
import Startimes from "./Media/startime.png";

function GloData() {
  return (
    <>
        <div>
            <DashboardTemp SubLink2={true} CurrentPath="Cable Tv" SelectedText='TV Subscription' boolean2={true} Color2='#035FCE' tempColor2='white' ValueInText2={75} LeftValue={-150}  Amount='Startimes'  NetworkLogo={Startimes} showAdditionalDiv9={true} />
      </div>
    </>
  )
}

export default GloData
