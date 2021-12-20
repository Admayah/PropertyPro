import React, { useState } from "react";
import "./navbar.css";
import NavbarOptions from "./NavbarOptions";
import Button from "../Button/Button";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);

  const toggleHandler = () => {
    setToggle(!toggle);
  };

  const hamburgerIcon = <i className="fa fa-bars" onClick={toggleHandler}></i>;
  const cancelIcon = <i className="fa fa-times " onClick={toggleHandler}></i>;

  const NavMenu = NavbarOptions.map((btn) => (
    <li className="navbarMenu">
      <a href={btn.href} className="navbarPropertyLink">
        {btn.title}
      </a>{" "}
    </li>
  ));

  return (
    <div className="navbarContainer">
      <div className="navbarWrapper">
        <div className="navbarLeft">
          <img src="/images/logo.png" alt="" className="logo" />
          <span className="logo-name">PropertyPro</span>
        </div>
        <div className="navbarRight">
          <ul className={toggle ? "showNavbarMenu" : "hideNavbarMenu"}>
            {NavMenu}
            <Button />
          </ul>

          <div className="positionHamburgerIcon">
            {" "}
            {toggle ? cancelIcon : hamburgerIcon}
          </div>
        </div>
      </div>
    </div>
  );
}
