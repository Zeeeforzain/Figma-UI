import React from "react";
import "./Form.css";
import {useNavigate} from "react-router-dom";
function Form(props) {
  const navigate = useNavigate();
  return (
    <>
      <div className="area">
        <h4>{props.reg}</h4>
        <div className="icon">
          <img src="Images/fb.png" alt="facebook" />
          <img src="Images/apple.png" alt="apple" />
          <img src="Images/google.png" alt="google" />
        </div>
        <h5 className="or">OR</h5>
        <form action="#">
          <label for="text" name="Name">
            {props.name}
          </label>
          <input type="text" id="text" placeholder="Enter Your Name" />
          <label for="email" name="email">
            E-mail
          </label>
          <input type="email" id="email" placeholder="Enter Your E-mail" />
          <label for="password" name="pass">
            Password
          </label>
          <input type="password" id="pass" placeholder="Enter Your password" />
        </form>
        <div className="btn">
          <input type="checkbox" class="theme-checkbox" />
          <h5>Remember me</h5>
        </div>

        <button className="sign" onClick={()=>{navigate("/Profile")}}><h3>{props.bt}</h3></button>
        <div className="already">
          <h6 className="alrdy">{props.alrdy}</h6>

          <a href="#">
            <h6 className="sgn" >{props.sgn}</h6>
          </a>
          
        </div>
        </div>
    </>
  );
}
export default Form;
