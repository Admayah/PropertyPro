import React from "react";
import { SidebarData } from "./sidebarData";
import { Link } from "react-router-dom";
import "./sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar-container">
      <div className="sidebar-left">
        <a href="/">
          <i className="fa fa-home sidebar__logo"></i>
          <span className="logo-name">9jaProperty</span>
        </a>

      </div>
      <i className="fa fa-home sidebar__logo fa-3x"></i>
      <div className="sidebar-wrapper">
        <ul className="sidenav__list">
          {SidebarData.map((item, index) => (
            <Link to={item.href} className="sidebar-links">
              <li className="sidenav__list-item" key={index}>
                <span className="sidebar-text">
                  <span className="sidebar__icon">
                    {item.icon}
                  </span>
                  <span className="sidebar__menu_list">
                    {item.text}
                  </span>
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