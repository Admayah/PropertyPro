import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios'
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { addUser } from "../../features/properties/userSlice";
import { useDispatch } from "react-redux";
import "./login.css";
import 'react-toastify/dist/ReactToastify.css';



export default function Login() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValue = {
    email: '',
    password: ''
  }

  const [user, setUser] = useState(initialValue)
  const [isDisabled, setDisabled] = useState(false);

 

  const handleChange = (e) => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setDisabled(true);
    try {
      const response = await axios.post(`${process.env.REACT_APP_BASEURL}/login`, { ...user });
      const { token } = response.data;
      localStorage.setItem("token", token);
      toast('User logged in successfully')
      dispatch(
        addUser({
          id: new Date().getTime().toString(36),
          ...user,
        })
      );
      setDisabled(false);
      setTimeout(navigate("/dashboard"), 10000)
    } catch (error) {
      console.log(error)
      setDisabled(false);
      toast.error(`${error.response.data.message}`)

    }
  }

  return (
    <>
      <Navbar />
      

      <section class="login">
      <ToastContainer />
        <div class="login_box">
          <div class="left">
            <div class="top_link"><Link to="/"><img src="https://drive.google.com/u/0/uc?id=16U__U5dJdaTfNGobB_OpwAJ73vM50rPV&export=download" alt="" />Return home</Link>
            </div>
            <div class="contact">
            <h3>SIGN IN</h3>
              <form  onSubmit={handleSubmit}>
                
                <input 
                type="email" 
                placeholder="EMAIL"
                name='email'
                value={user.email}
                onChange={handleChange}
                 />
                <input 
                type="password" 
                placeholder="PASSWORD" 
                name='password'
                value={user.password}
                onChange={handleChange}
                />
                <button type="submit" className="submit" disabled={isDisabled}>
                  {isDisabled ? <i class="fa fa-circle-o-notch fa-spin"></i> : 'Login'}
                  </button>
      
              </form>
              <div className="register-link">
            Don't have an account? &nbsp; <Link to="/signup">Signup</Link>

          </div>
            </div>

          </div>
          <div class="right">
            <div class="right-text">
              <h2>9jaProperty</h2>
              <h5>AN AMAZING REAL ESTATE AGENCY</h5>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )}