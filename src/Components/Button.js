import React from "react";
import './Button.css';
export default function Button(props) {
  return (
    <div className="btn">
      <input type="checkbox" class="theme-checkbox" />
      <h5>{props.btntext}</h5>
    </div>
  );
}
