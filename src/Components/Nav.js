import React from "react";
import "./Nav.css";
import {useNavigate} from "react-router-dom";
function Navbar() {
  const navigate = useNavigate();
  return (
    <>
      <div className="nav">
        <div className="name">
          <img src="/Images/logo.png" alt="logo" />
          <h3>Purity UI Dashboard</h3>
        </div>
        <div className="menu">
          <ul>
            <li onClick={()=>{navigate("/Table")}} >
              <img src="/Images/Dashboard.png" alt="logo" />
              <h3>Dashboard</h3>
            </li>
            <li>
              <img src="/Images/Profile.png" alt="logo" />
              <h3 onClick={()=>{navigate("/Profile")}}>Profile</h3>
            </li>
            <li onClick={()=>{navigate("/signIn")}}>
              <img src="/Images/Sign In.png" alt="logo" />
              <h3>SignIn</h3>
            </li>
            <li onClick={()=>{navigate("/signUp")}}>
              <img src="/Images/Sign Up.png" alt="logo" />
              <h3>SignUp</h3>
            </li>
          </ul>
        </div>
        <div>
          <button className="button"><h2>Free Download</h2></button>
        </div>
      </div>
    </>
  );
}
export default Navbar;
