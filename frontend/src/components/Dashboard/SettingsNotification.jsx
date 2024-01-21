// import React from 'react'
import Settingspost from "../Media/settingspost.png";
import Settingstransaction from "../Media/settingstransaction.png";
import Settingsnotification from "../Media/bluesettingsnotification.png";




import SettingsTemp from "./SettingsTemp"

function SettingsNotification() {
  return (
    <>
        <div>
            <SettingsTemp PostImage1={Settingsnotification} PostImage2={Settingstransaction} myCustomColor1='#035FCE' PostImage3={Settingspost}  showAdditionalDiv={true}/>
      </div>
    </>
  )
}

export default SettingsNotification
