import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/footer/Footer";
import "./login.css";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <Navbar />
      <div className="login-container">
        <div className="login-wrapper">
          <div className="login-input-wrapper">
            <div className="login-header">
              <h2 className="login-header-text">LOGIN</h2>
            </div>
            <div className="login-data-input-container">
              <input
                type="
                    email"
                className="input-field"
                placeholder="Email"
              />
              <input
                type="
                    password"
                className="input-field"
                placeholder="Password"
              />
            </div>
            <div className="button-wrapper">
              <button className="login-button">
                <Link to = '#'>Login</Link>
              </button>
            </div>
          </div>

          <div className="register-link">
            Don't have an account? &nbsp; <Link to = "/signup">Signup Here.</Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
