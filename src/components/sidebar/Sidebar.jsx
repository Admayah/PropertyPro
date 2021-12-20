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
            <Link to={href} className="sidebar-link">
              <li className="sidebar-menu">
                <span className="sidebar-icon">
                  <img src={icon} alt="" className="sidebar-img" />
                </span>
                <span className="sidebar-text">{text}</span>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
