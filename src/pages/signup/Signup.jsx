import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/footer/Footer";
import "./signup.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { addUser } from "../../features/properties/userSlice";
import { useDispatch } from "react-redux";

const url = "http://localhost:4000/v1/signup";

export default function Signup() {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [person, setPerson] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNo: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPerson({ ...person, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(url, { ...person });
      const { token } = response.data;
      localStorage.setItem("token", token);
      dispatch(
        addUser({
          id: new Date().getTime().toString(36),
          ...person,
        })
      );
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
    setPerson({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      phoneNo: "",
    });
  };

  return (
    <>
      <Navbar />
      <div className="signup-container">
        <div className="signup-wrapper">
          <div className="signup-input-wrapper">
            <div className="signup-header">
              <h2 className="signup-header-text">REGISTER</h2>
            </div>
            <div className="signup-data-input-container">
              <input
                type="
                    text"
                id="firstName"
                name="firstName"
                value={person.firstName}
                className="input-field"
                placeholder="First Name"
                onChange={handleChange}
              />
              <input
                type="
                    text"
                id="lastName"
                name="lastName"
                value={person.lastName}
                className="input-field"
                placeholder="Last Name"
                onChange={handleChange}
              />
              <input
                type="email"
                id="email"
                name="email"
                value={person.email}
                className="input-field"
                placeholder="email@gmail.com"
                onChange={handleChange}
              />
              <input
                type="password"
                id="password"
                name="password"
                value={person.password}
                className="input-field"
                placeholder="Enter Password"
                onChange={handleChange}
              />
              <input
                type="tel"
                id="phoneNo"
                name="phoneNo"
                value={person.phoneNo}
                className="input-field tel-select-code"
                placeholder="Phone Number"
                onChange={handleChange}
              />
            </div>
            <div className="button-wrapper">
              <button className="signup-button" onClick={handleSubmit}>
                CREATE AN ACCOUNT
              </button>
            </div>
          </div>
          <div className="register-link">
            Already an agent? &nbsp; <Link to="/login">Login Here.</Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
