import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios'
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/footer/Footer";
import InputField from "../../components/propertiesInput/Input";
import { addUser } from "../../features/properties/userSlice";
import { useDispatch } from "react-redux";
import "./login.css";
import 'react-toastify/dist/ReactToastify.css';

const initialValue = {
  email: '',
  password: ''
}

export default function Login() {

  const dispatch = useDispatch();

  const [user, setUser] = useState(initialValue)
  const [isDisabled, setDisabled] = useState(false);


  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_BASEURL}/login`, { ...user });
      const { token } = response.data;
      localStorage.setItem("token", token);
      toast('User logged in successfully')
      setDisabled(true)
      dispatch(
        addUser({
          id: new Date().getTime().toString(36),
          ...user,
        })
      );
     
      setTimeout(navigate("/dashboard"), 10000)
    } catch (error) {
      toast.error(`${error.response.data.message}`)

    }
  }

  return (
    <>
      <Navbar />
      <ToastContainer />
      <div className="login-container">
        <div className="login-wrapper">
          <div className="login-input-wrapper">
            <div className="login-header">
              <h2 className="login-header-text">LOGIN</h2>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="login-data-input-container">
                <InputField
                  type='email'
                  name='email'
                  value={user.email}
                  placeholder='Enter email address'
                  onChange={handleChange}
                />
                <InputField
                  type='password'
                  name='password'
                  value={user.password}
                  placeholder='Enter password'
                  onChange={handleChange}
                />
              </div>
              <button className="login-button" onClick={handleSubmit}>
                {isDisabled ? <i class="fa fa-circle-o-notch fa-spin"></i> : 'Login'}
              </button>
            </form>
          </div>

          <div className="register-link">
            Don't have an account? &nbsp; <Link to="/signup">Signup Here.</Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
