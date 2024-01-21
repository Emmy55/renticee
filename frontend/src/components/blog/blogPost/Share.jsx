import React from "react";

import Facebook from "./images/facebook.svg";
import Linkedin from "./images/linkedin.svg";
import Twitter from "./images/twitter.svg";

function Share() {
  return (
    <div className="flex gap-3">
      <p>Share:</p>
      <img
        src={Facebook}
        alt="Facebook"
        className="cursor-pointer lg:hover:scale-110 transform transition-all duration-500 ease-in-out"
      />
      <img
        src={Linkedin}
        alt="Linkedin"
        className="cursor-pointer lg:hover:scale-110 transform transition-all duration-500 ease-in-out"
      />
      <img
        src={Twitter}
        alt="Twitter"
        className="cursor-pointer lg:hover:scale-110 transform transition-all duration-500 ease-in-out"
      />
    </div>
  );
}

export default Share;
