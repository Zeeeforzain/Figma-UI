import React from "react";
import "./ProfileInfo.css";
export default function ProfileInfo(props) {
  return (
    <div className="profInfo">
      <p>{props.about}</p>
      <div className="infoList">
        <ul>
          <li>
            <h4>Full Name:</h4>
            <h5>{props.profname}</h5>
          </li>
          <li>
            <h4>Mobile:</h4>
            <h5></h5>
            {props.mobile}
          </li>
          <li>
            <h4>Email:</h4>
            <h5></h5>
            {props.email}
          </li>
          <li>
            <h4>Location:</h4>
            <h5>{props.proflocation}</h5>
          </li>
          <li>
            <h4>Social Media:</h4>
            <img src="Images/facebook.png" alt="" />{" "}
            <img src="Images/twitter.png" alt="" />{" "}
            <img src="Images/instagram.png" alt="" />
          </li>
        </ul>
      </div>
    </div>
  );
}
