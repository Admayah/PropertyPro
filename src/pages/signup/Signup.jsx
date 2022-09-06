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
      <section class="login">
		<div class="login_box">
			<div class="left">
				<div class="top_link"><a href="#"><img src="https://drive.google.com/u/0/uc?id=16U__U5dJdaTfNGobB_OpwAJ73vM50rPV&export=download" alt="" />Return home</a></div>
				<div class="contact">
					<form action="">
						<h3>SIGN IN</h3>
						<input type="text" placeholder="FIRSTNAME" />
						<input type="text" placeholder="LASTNAME" />
            <input type="text" placeholder="EMAIL" />
            <input type="text" placeholder="PASSWORD" />
            <input type="text" placeholder="PHONE NUMBER" />
						<button class="submit">LET'S GO</button>
					</form>
				</div>
			</div>
			<div class="right">
				<div class="right-text">
					<h2>9jaProperty</h2>
					<h5>A UX BASED CREATIVE AGENCEY</h5>
				</div>
				<div class="right-inductor"><img src="https://lh3.googleusercontent.com/fife/ABSRlIoGiXn2r0SBm7bjFHea6iCUOyY0N2SrvhNUT-orJfyGNRSMO2vfqar3R-xs5Z4xbeqYwrEMq2FXKGXm-l_H6QAlwCBk9uceKBfG-FjacfftM0WM_aoUC_oxRSXXYspQE3tCMHGvMBlb2K1NAdU6qWv3VAQAPdCo8VwTgdnyWv08CmeZ8hX_6Ty8FzetXYKnfXb0CTEFQOVF4p3R58LksVUd73FU6564OsrJt918LPEwqIPAPQ4dMgiH73sgLXnDndUDCdLSDHMSirr4uUaqbiWQq-X1SNdkh-3jzjhW4keeNt1TgQHSrzW3maYO3ryueQzYoMEhts8MP8HH5gs2NkCar9cr_guunglU7Zqaede4cLFhsCZWBLVHY4cKHgk8SzfH_0Rn3St2AQen9MaiT38L5QXsaq6zFMuGiT8M2Md50eS0JdRTdlWLJApbgAUqI3zltUXce-MaCrDtp_UiI6x3IR4fEZiCo0XDyoAesFjXZg9cIuSsLTiKkSAGzzledJU3crgSHjAIycQN2PH2_dBIa3ibAJLphqq6zLh0qiQn_dHh83ru2y7MgxRU85ithgjdIk3PgplREbW9_PLv5j9juYc1WXFNW9ML80UlTaC9D2rP3i80zESJJY56faKsA5GVCIFiUtc3EewSM_C0bkJSMiobIWiXFz7pMcadgZlweUdjBcjvaepHBe8wou0ZtDM9TKom0hs_nx_AKy0dnXGNWI1qftTjAg=w1920-h979-ft" alt="" /></div>
			</div>
		</div>
	</section>
      {/* <div className="signup-container">
        <div className="signup-wrapper">
          <div className="signup-input-wrapper">
            <header className="signup-header">
              REGISTER
            </header>
            <form onSubmit={handleSubmit}>
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
              <button className="signup-button" disabled={isDisabled}>
                {isDisabled ? <i class="fa fa-circle-o-notch fa-spin"></i> : 'CREATE AN ACCOUNT'}
              
            </button>
            </form>
          </div>
          

          <div className="register-link">
            Already an agent? &nbsp; <Link to="/login">Login Here.</Link>
          </div>
        </div>

      </div> */}
      <Footer />
    </>
  );
}
