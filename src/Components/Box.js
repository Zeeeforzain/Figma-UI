import React from "react";
import "./Box.css";
function BoxComponent({children}) {
  return (
    <>
    <div className="box">
      {children}
    </div>
    </>
);
}
export default BoxComponent;