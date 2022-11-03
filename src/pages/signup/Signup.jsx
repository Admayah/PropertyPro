import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch } from "react-redux";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { addUser } from "../../features/properties/userSlice";
import Inputs from "../../components/input/Inputs";
import "./signup.css";





export default function Signup() {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false)
  const [person, setPerson] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNo: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target.value)
    setPerson({ ...person, [name]: value });
  };

  const handleSubmit =  async (e) => {
    e.preventDefault();
    setIsLoading(true)
    try {
       
      const response = await axios.post(`${process.env.REACT_APP_BASEURL}/signup`, { ...person });
      console.log(response.data)
      const { token } = response.data;
      localStorage.setItem("token", token);
      toast('Account successfully created')
      dispatch(
        addUser({
          id: new Date().getTime().toString(36),
          ...person,
        })
      );
      setTimeout(navigate("/dashboard"), 10000);
      
  } catch (error) {
      console.log(error)
      toast.error(`${error.response.data.message}`);
  } finally {
    setIsLoading(false);
  }
   
  };

  return (
    <>
      <Navbar />
      <section class="signup">
        <ToastContainer />
        <div class="signup_box">
          <div class="left">
            <div class="top_link" onClick={()=> navigate(-1)} style={{cursor: 'pointer'}}><img src="https://drive.google.com/u/0/uc?id=16U__U5dJdaTfNGobB_OpwAJ73vM50rPV&export=download" alt="" />Return home</div>
            <div class="contact">
              <form onSubmit={handleSubmit}>
                <h3>SIGN UP</h3>
                <Inputs
                title='Firstname'
                label='Firstname'
                type="text"
                name='firstName'
                value={person.firstName}
                inputHandler={handleChange}
                />
                <Inputs
                title='Lastname'
                label='lastname'
                type="text"
                name='lastName'
                value={person.lastName}
                inputHandler={handleChange}
                />
                <Inputs
                title='Email'
                label='email'
                type='email'
                name='email'
                value={person.email}
                inputHandler={handleChange}
                />
                <Inputs
                  title='Password'
                  label='password'
                  type='password'
                  name='password'
                  value={person.password}
                  inputHandler={handleChange}
                />
                <Inputs
                id='phoneNo'
                  title='Phone Number'
                  label='phoneNo'
                  type="tel"
                  name='phoneNo'
                  value={person.phoneNo}
                  inputHandler={handleChange}
                />
                <button 
                disabled={isLoading}
                type="submit" 
                className={isLoading ? "submit jax" : "submit"}
               >
                  {isLoading ? <i class="fa fa-circle-o-notch fa-spin"></i> : 'CREATE AN ACCOUNT'}
                </button>
              </form>
              <div className="register-link">
                Already an agent? &nbsp; <Link to="/login">Login Here.</Link>
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
  );
}
