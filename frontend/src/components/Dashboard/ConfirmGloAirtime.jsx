// import React from 'react'
import DashboardTemp from "./DashboardTemp"
import Glo from "../Media/glo.png";

function GloData() {
  return (
    <>
        <div>
            <DashboardTemp CurrentPath="Buy Airtime" LeftValue={-130} SelectedText='Airtime' boolean1={true} Color1='#035FCE' tempColor1='white' ValueInText1={75} Amount="Airtime" NetworkLogo={Glo} showAdditionalDiv9={true} SimType='GLO' />
      </div>
    </>
  )
}

export default GloData
