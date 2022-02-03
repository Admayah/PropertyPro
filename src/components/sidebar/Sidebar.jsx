import React from "react";
import { SidebarData } from "./sidebarData";
import { Link } from "react-router-dom";
import "./sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar-container">
      <div className="sidebar-wrapper">
        <ul className="sidebar-items">
          {SidebarData.map(({ href, icon, text }) => (
            <li className="sidebar-menu">
              <Link to={href} className="sidebar-links">
                <span className="sidebar-icon">
                  <img src={icon} alt="" className="sidebar-img" />
                </span>
                <span className="sidebar-text">{text}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;