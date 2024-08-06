import React from "react";
import "./Head.css";
import {useNavigate} from "react-router-dom";
function Head() {
  const navigate = useNavigate();
  return (
    <>
      <div class="head">
        <div class="nme">
          <h5>Pages</h5>
          <h4>Tables</h4>
        </div>
        <div class="ss">
          <div>
            <input type="search" name="Search" id="" placeholder="Type here..."/>
          </div>
          <div class="set">
            <ul>
              <li>
                <img src="Images/prof.png" alt="signin" />
                <h4 onClick={()=>{navigate("/signIn")}}>Sign In</h4>
              </li>
              <li>
                <img src="Images/Setting.png" alt="setting" />
              </li>
              <li>
                <img src="Images/notification.png" alt="Noti" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
export default Head;
