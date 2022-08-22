import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch } from "react-redux";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { addUser } from "../../features/properties/userSlice";
import InputField from "../../components/propertiesInput/Input";
import 'react-toastify/dist/ReactToastify.css';
import "./signup.css";




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
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPerson({ ...person, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${process.env.REACT_APP_BASEURL}/signup`, { ...person });
      const { token } = response.data;
      localStorage.setItem("token", token);
      dispatch(
        addUser({
          id: new Date().getTime().toString(36),
          ...person
        })
      );
        toast('Account successfully created')
      navigate("/dashboard");
    } catch (error) {
      console.log(error)
      toast.error('Something went wrong')
    }
    setLoading(!loading)
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
      <ToastContainer />
      <div className="signup-container">
        <div className="signup-wrapper">
          <div className="signup-input-wrapper">
            <header className="signup-header">
              REGISTER
            </header>
            <div className="signup-data-input-container">
              <InputField
              type='text'
              name='firstName'
              value={person.firstName}
              placeholder='First Name'
              onChange={handleChange}
              />
              <InputField
              type='text'
              name='lastName'
              value={person.lastName}
              placeholder='Last Name'
              onChange={handleChange}
              />
              <InputField
              type='email'
              name='email'
              value={person.email}
              placeholder='Enter email address'
              onChange={handleChange}
              />
              <InputField
              type='password'
              name='password'
              value={person.password}
              placeholder='Enter password'
              onChange={handleChange}
              />
              <InputField
              type='tel'
              name='phoneNo'
              value={person.phoneNo}
              placeholder='Enter phone number'
              onChange={handleChange}
              />
            </div>
              <Link to='#'><button className="signup-button" onClick={handleSubmit}>
                {loading ? (<>Loading<div className="loader"></div></>) : (<>CREATE AN ACCOUNT</>)}
                
              </button></Link>
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
