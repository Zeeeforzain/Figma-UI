import React from 'react';
import './SettingBox.css';
import Button from "./Button";
 function SettingBox({title, children}) {
  return (
    <div className='SettingBox'>
      <h4>{title}</h4>
      {children}
    </div>
  );
}
export default SettingBox;