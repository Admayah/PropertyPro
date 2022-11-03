import React, { useState } from "react";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import NavbarOptions from "./NavbarOptions";
import Button from "../Button/Button";
import Btn from "../Btn/Btn";




export default function Navbar(props) {

  const navigate = useNavigate();

  const [toggle, setToggle] = useState(false);

  const toggleHandler = () => {
    setToggle(!toggle);
  };

  const clickHandler = () => {
    console.log('signp')
    navigate('/signup')
  }

  const hamburgerIcon = <i className="fa fa-bars" onClick={toggleHandler}></i>;
  const cancelIcon = <i className="fa fa-times" onClick={toggleHandler}></i>;

  const NavMenu = NavbarOptions.map((btn, index) => (
    <li className="navbar-menu" key={index} >
      <Link to={btn.href} className="navbar-property-link">
        {btn.title}
      </Link>
    </li>
  ));

  return (
    <div className="navbar-container" >
      <div className="navbar-wrapper">
        <div className="navbar-left">
          <a href="/">
            <i className="fa fa-home logo"></i>
            <span className="logo-name">9jaProperty</span>
          </a>

        </div>
        <div className="navbar-right">
          <ul className={toggle ? "show-navbar-menu" : "hide-navbar-menu"} >
            {NavMenu}  
          </ul>

          <div className="position-hamburger-icon">
            {" "}
            {toggle ? cancelIcon : hamburgerIcon}
          </div>
          
        </div>
        {/* <Button text= path="/signup" /> */}
        <Btn value="BECOME AN AGENT" type="submit" clickHandler={clickHandler} className="button-container nav-btn" />
      </div>
    </div>
  );
}
