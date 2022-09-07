import React from "react";
import { SidebarData } from "./sidebarData";
import { Link } from "react-router-dom";
import "./sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar-container">
      <div className="sidebar-wrapper">
        <div className="company-logo">
          <i className="fa fa-home logo"></i>
          <span className="logo-name">9jaProperty</span>
        </div>
        <ul className="sidenav__list">
          {SidebarData.map((item, index) => (
            <Link to={item.href} className="sidebar-links">
              <li className="sidenav__list-item" key={index}>
                <span className="sidebar-text">
                  <span className="sidebar-icon">
                    <img src={item.icon} alt="" className="sidebar-img" />
                  </span>
                  {item.text}
                </span>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;