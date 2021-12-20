import React from "react";
import "./login.css";

export default function Login() {
  return (
    <div className="loginContainer">
      <div className="loginWrapper">
        <div className="loginInputWrapper">
        <div className="loginHeader">
          <h2 className="loginHeaderText">LOGIN</h2>
        </div>
        <div className="loginDataInputContainer">
          <input
            type="
                    email"
            className="inputField"
            placeholder="Email"
          />
          <input
            type="
                    password"
            className="inputField"
            placeholder="Password"
          />
        </div>
        <div className="buttonContainer signupBtn">
          <button className="loginButton">Login</button>
        </div>
        </div>
        
        <div className="registerLink">
            <span>Not yet Registered? Registe Here.</span>
        </div>
      </div>
    </div>
  );
}
