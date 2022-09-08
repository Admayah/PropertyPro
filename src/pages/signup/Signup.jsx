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
// import CustomFetch from "../../CustomFetch";




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
  const [isDisabled, setDisabled] = useState(false);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setPerson({ ...person, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setDisabled(true);

    try {
      const response = await axios.post(`${process.env.REACT_APP_BASEURL}/signup`, { ...person });
      const { token } = response.data;
      localStorage.setItem("token", token);
      toast('Account successfully created')
      dispatch(
        addUser({
          id: new Date().getTime().toString(36),
          ...person
        })
      );
      setDisabled(false);
      setTimeout(navigate("/dashboard"), 10000)

    } catch (error) {
      console.log(error)
      setDisabled(false);
      toast.error(`${error.response.data.message}`)

    }
    setLoading(!loading)
    setDisabled(false);
    console.log('hello')

    // setPerson({
    //   firstName: "",
    //   lastName: "",
    //   email: "",
    //   password: "",
    //   phoneNo: "",
    // });
  };

  return (
    <>
      <Navbar />
      <ToastContainer />
      <section class="signup">
        <div class="signup_box">
          <div class="left">
            <div class="top_link"><Link to="/"><img src="https://drive.google.com/u/0/uc?id=16U__U5dJdaTfNGobB_OpwAJ73vM50rPV&export=download" alt="" />Return home</Link></div>
            <div class="contact">
              <form onSubmit={handleSubmit}>
                <h3>SIGN UP</h3>
                <input
                  type="text"
                  placeholder="FIRSTNAME"
                  name='firstName'
                  value={person.firstName}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  placeholder="LASTNAME"
                  name='lastName'
                  value={person.lastName}
                  onChange={handleChange}
                />
                <input
                  type="email"
                  placeholder="EMAIL"
                  name='email'
                  value={person.email}
                  onChange={handleChange}
                />
                <input
                  type="password"
                  placeholder="PASSWORD"
                  name='password'
                  value={person.password}
                  onChange={handleChange}
                />
                <input
                  type="tel"
                  placeholder="PHONE NUMBER"
                  name='phoneNo'
                  value={person.phoneNo}
                  onChange={handleChange}
                />
                <button type="submit" className="submit" disabled={isDisabled}>
                {isDisabled ? <i class="fa fa-circle-o-notch fa-spin"></i> : 'CREATE AN ACCOUNT'}
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
