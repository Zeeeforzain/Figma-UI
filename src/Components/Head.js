import React from "react";
import "./Head.css";
import {useNavigate} from "react-router-dom";
function Head(props) {
  const navigate = useNavigate();
  return (
    <>
      <div className="head">
        <div className="nme">
          <h5>Pages</h5>
          <h4>Tables</h4>
        </div>
        <div className="ss">
          <div>
            <input type="search" name="Search" id="" placeholder="Type here..."/>
          </div>
          <div className="set">
            <ul>
              <li>
                <img src={props.prof} alt="signin" />
                <h4 onClick={()=>{navigate("/signIn")}}>Sign In</h4>
              </li>
              <li>
                <img src={props.setting} alt="setting" />
              </li>
              <li>
                <img src={props.notification} alt="Noti" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
export default Head;
