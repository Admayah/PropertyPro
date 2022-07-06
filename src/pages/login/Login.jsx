import React, {useState} from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/footer/Footer";
import "./login.css";
import { Link } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { addUser } from "../../features/properties/userSlice";
import { useDispatch } from "react-redux";
const initialValue = {
  email: '',
  password: ''
}

const url = 'http://localhost:4000/v1/login'

export default function Login() {

  const dispatch = useDispatch();

    const [user, setUser] = useState(initialValue)

    const navigate = useNavigate();

    const handleChange = (e) => {
      const {name, value} = e.target
      setUser({...user, [name]: value})
    }

    const handleSubmit = async (e) => {
      e.preventDefault();
        try {
          const response = await axios.post(url, {...user});
          const { token } = response.data;
          localStorage.setItem("token", token);
          dispatch(
            addUser({
              id: new Date().getTime().toString(36),
              ...user,
            })
          );
          navigate('/dashboard')
        } catch (error) {
          console.log(error)
        }
    }

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
                type="email"
                id = 'email'
                name='email'
                value={user.email}
                className="input-field"
                placeholder="email@gmail.com"
                onChange={handleChange}
              />
              <input
                type="password"
                id= 'password'
                name = 'password'
                value={user.password}
                className="input-field"
                placeholder="Enter Password"
                onChange={handleChange}
              />
            </div>
            <div className="button-wrapper">
              <button className="login-button" onClick={handleSubmit}>
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
