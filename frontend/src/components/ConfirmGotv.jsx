// import React from 'react'
import DashboardTemp from "./DashboardTemp"
import Gotv from "./Media/gotv.png";

function GloData() {
  return (
    <>
        <div>
            <DashboardTemp CurrentPath="Cable Tv" SelectedText='TV Subscription' boolean1={true} Color2='#035FCE' tempColor2='white' ValueInText2={75} NetworkLogo={Gotv} showAdditionalDiv9={true} LeftValue={-182} Amount='Gotv'  />
      </div>
    </>
  )
}

export default GloData
