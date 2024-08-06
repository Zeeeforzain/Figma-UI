import React from "react";
import "./Title.css";
function Title(props) {
  return (
    <>
      <div className="title">
        <h2>{props.title}</h2>
        <h5>{props.subtitle}</h5>
      </div>
    </>
  );
}
export default Title;
