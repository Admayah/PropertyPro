import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import NavbarOptions from "./NavbarOptions";
import Button from "../Button/Button";




export default function Navbar(props) {
  const [toggle, setToggle] = useState(false);

  const toggleHandler = () => {
    setToggle(!toggle);
  };


  const hamburgerIcon = <i className="fa fa-bars" onClick={toggleHandler}></i>;
  const cancelIcon = <i className="fa fa-times " onClick={toggleHandler}></i>;

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
          <i className="fa fa-home logo"></i>
          <span className="logo-name">9jaProperty</span>
        </div>
        <div className="navbar-right">
          <ul className={toggle ? "show-navbar-menu" : "hide-navbar-menu"} >
            {NavMenu}
            <Button text="BECOME AN AGENT" path="/signup" />
          </ul>

          <div className="position-hamburger-icon">
            {" "}
            {toggle ? cancelIcon : hamburgerIcon}
          </div>
        </div>
      </div>
    </div>
  );
}
