import React from "react";
import './List.css'
import {useNavigate} from "react-router-dom";
function List() {
  const navigate = useNavigate();
  return (
    <>
    <div className="list">
            <ul>
              <li>
              <div className="pic"><img src="Images/Dashboard.png" alt="logo" /></div>
                <h5>Dashboard</h5>
              </li>
              <li>
              <div className="pic"><img src="Images/tables.png" alt="logo" /></div>
                <h5 onClick={()=>{navigate("/Table")}}>Tables</h5>
              </li>
              <li>
              <div className="pic"><img src="Images/billing.png" alt="logo" /></div>
                <h5>Billings</h5>
              </li>
              <li>
              <div className="pic"><img src="Images/rtl.png" alt="logo" /></div>
                <h5>RTL</h5>
              </li>
              </ul>
              </div>
            <div className="list2">
                <h4>ACCOUNT PAGES</h4>
            <ul>
              <li>
              <div className="pic"><img src="Images/Profil.png" alt="logo" /></div>
                <h5 onClick={()=>{navigate("/Profile")}}>Profile</h5>
              </li>
              <li>
              <div className="pic"><img src="Images/sgnin.png" alt="logo" /></div>
                <h5 onClick={()=>{navigate("/signIn")}}>Sign In</h5>
              </li>
              <li>
              <div className="pic"><img src="Images/rocket.png" alt="logo" /></div>
                <h5 onClick={()=>{navigate("/SignUp")}}>Sign Up</h5>
              </li>
            </ul>
          </div>
    </>
  );
}
export default List;