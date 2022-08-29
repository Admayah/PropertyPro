import React, { useState } from "react";
import { Link } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { SidebarData } from "../../../components/sidebar/sidebarData";
import "./dashboardnav.css";

function DashboardNav() {
  const getToken = localStorage.getItem("token")
  const decodedToken =  jwt_decode(getToken)
  // const {newUser} = decodedToken
  const [dashtoggle, setDashToggle] = useState(false);

  const togHandler = () => {
    setDashToggle(!dashtoggle);
  };

  const dashHamburgerIcon = <i className="fa fa-bars" onClick={togHandler}></i>;
  const dashCancelIcon = <i className="fa fa-times " onClick={togHandler}></i>;
  return (
    <>
      <div className="dashboard-nav-container">
        <div className="dashboard-nav-wrapper">
          <div className="company-logo">
            <i className="fa fa-home logo"></i>
            <span className="logo-name">9jaProperty</span>
          </div>
          <div className="position-dash-hamburger-icon">
            {" "}
            {dashtoggle ? dashCancelIcon : dashHamburgerIcon}
          </div>
          <div className="username-and-image">
            {/* <span className="user-name"> {newUser.firstName}</span> */}
            <img src="/images/image2.jpg" alt="" className="profile-logo" />
          </div>
        </div>
      </div>
      <ul
        className={
          dashtoggle ? "show-dashboard-sidebar" : "hide-dashboard-sidebar"
        }>
        {SidebarData.map((item, index) => (
            <Link to={item.href} className="sidebar-link">
          <li className="sidebar-menu" key={index}>
              <span className="sidebar-icon">
                <img src={item.icon} alt="" className="sidebar-img" />
              </span>
              <span className="sidebar-text">{item.text}</span>
          </li>
          </Link>
        ))}
      </ul>
    </>
  );
}

export default DashboardNav;