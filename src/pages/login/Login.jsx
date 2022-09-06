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

      <section class="login">
        <div class="login_box">
          <div class="left">
            <div class="top_link"><a href="#"><img src="https://drive.google.com/u/0/uc?id=16U__U5dJdaTfNGobB_OpwAJ73vM50rPV&export=download" alt="" />Return home</a>
            </div>
            <div class="contact">
            <h3>SIGN IN</h3>
              <form  onSubmit={handleSubmit}>
                
                <input type="email" placeholder="EMAIL" />
                <input type="text" placeholder="PASSWORD" />
                <button type="button" className="submit" disabled={isDisabled}>
                  {isDisabled ? <i class="fa fa-circle-o-notch fa-spin"></i> : 'Login'}
                  </button>
              </form>
            </div>
          </div>
          <div class="right">
            <div class="right-text">
              <h2>LONYX</h2>
              <h5>A UX BASED CREATIVE AGENCEY</h5>
            </div>
            <div class="right-inductor"><img src="https://lh3.googleusercontent.com/fife/ABSRlIoGiXn2r0SBm7bjFHea6iCUOyY0N2SrvhNUT-orJfyGNRSMO2vfqar3R-xs5Z4xbeqYwrEMq2FXKGXm-l_H6QAlwCBk9uceKBfG-FjacfftM0WM_aoUC_oxRSXXYspQE3tCMHGvMBlb2K1NAdU6qWv3VAQAPdCo8VwTgdnyWv08CmeZ8hX_6Ty8FzetXYKnfXb0CTEFQOVF4p3R58LksVUd73FU6564OsrJt918LPEwqIPAPQ4dMgiH73sgLXnDndUDCdLSDHMSirr4uUaqbiWQq-X1SNdkh-3jzjhW4keeNt1TgQHSrzW3maYO3ryueQzYoMEhts8MP8HH5gs2NkCar9cr_guunglU7Zqaede4cLFhsCZWBLVHY4cKHgk8SzfH_0Rn3St2AQen9MaiT38L5QXsaq6zFMuGiT8M2Md50eS0JdRTdlWLJApbgAUqI3zltUXce-MaCrDtp_UiI6x3IR4fEZiCo0XDyoAesFjXZg9cIuSsLTiKkSAGzzledJU3crgSHjAIycQN2PH2_dBIa3ibAJLphqq6zLh0qiQn_dHh83ru2y7MgxRU85ithgjdIk3PgplREbW9_PLv5j9juYc1WXFNW9ML80UlTaC9D2rP3i80zESJJY56faKsA5GVCIFiUtc3EewSM_C0bkJSMiobIWiXFz7pMcadgZlweUdjBcjvaepHBe8wou0ZtDM9TKom0hs_nx_AKy0dnXGNWI1qftTjAg=w1920-h979-ft" alt="" /></div>
          </div>
        </div>
      </section>
      {/* <div className="login-container">
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
      </div> */}
      <Footer />
    </>
  );
}
