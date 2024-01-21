// import React from 'react'
import SettingsTemp from "./SettingsTemp";
import Settingspost from "../Media/bluesettingspost.png";
import Settingstransaction from "../Media/settingstransaction.png";
import Settingsnotification from "../Media/settingsnotification.png";


function SettingsPost() {
  return (
    <div>
      <SettingsTemp showAdditionalDiv2={true}  PostImage1={Settingsnotification} PostImage2={Settingstransaction} PostImage3={Settingspost}  myCustomColor3='#035FCE' submitText='SAVE CHANGES' />
    </div>
  );
}

export default SettingsPost;
