// import React from 'react'
import SettingsTemp from "./SettingsTemp";
import Settingstransaction from "../Media/bluesettingstransaction.png";
import Settingsnotification from "../Media/settingsnotification.png";
import Settingspost from "../Media/settingspost.png";

function SettingsTransaction() {
  return (
    <div>
      <SettingsTemp myCustomColor2='#035FCE' PostImage1={Settingsnotification} PostImage3={Settingspost}  PostImage2={Settingstransaction} showAdditionalDiv1={true} />
    </div>
  );
}

export default SettingsTransaction;
