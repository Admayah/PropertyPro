import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast} from 'react-toastify';
import axios from 'axios'
import { useDispatch } from "react-redux"
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { addUser } from "../../features/properties/userSlice";
import Inputs from "../../components/input/Inputs";
import "./login.css";



export default function Login() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValue = {
    email: '',
    password: ''
  }

  const [user, setUser] = useState(initialValue)
  const [isLoading, setIsLoading] = useState(false);

 

  const handleChange = (e) => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
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
      setTimeout(navigate("/dashboard"), 10000)
    } catch (error) {
      console.log(error)
      setIsLoading(false);
      toast.error(`${error.response.data.messages}`)

    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <Navbar />
      

      <section class="login">
      <ToastContainer />
        <div class="login_box">
          <div class="left">
            <div class="top_link" onClick={()=> navigate(-1)} style={{cursor: 'pointer'}}><img src="https://drive.google.com/u/0/uc?id=16U__U5dJdaTfNGobB_OpwAJ73vM50rPV&export=download" alt="" />Return home
            </div>
            <div class="contact">
            <h3>SIGN IN</h3>
              <form  onSubmit={handleSubmit}>
                <Inputs
                title='Email'
                label='email'
                type='email'
                name='email'
                value={user.email}
                inputHandler={handleChange}
                />
                <Inputs
                title='password'
                label='password'
                type='password'
                name='password'
                value={user.password}
                inputHandler={handleChange}
                />
                <button type="submit" className={isLoading ? "submit jax" : "submit"} disabled={isLoading}>
                  {isLoading ? <i class="fa fa-circle-o-notch fa-spin"></i> : 'Login'}
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