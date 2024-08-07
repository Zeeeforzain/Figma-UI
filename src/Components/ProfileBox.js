import React from "react";
import "./ProfileBox.css";
import SettingBox from "./SettingBox";
import Button from "./Button";
 function ProfileBox({boxname, children}) {
  console.log(children)
    return (
    <div className="ProfileBox">
      <h2>{boxname}</h2>
      {children}
    </div>
  );
}
export default ProfileBox;