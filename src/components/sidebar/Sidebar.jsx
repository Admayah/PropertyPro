import React from "react";
import { SidebarData } from "./sidebarData";
import { Link } from "react-router-dom";
import "./sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar-container">
      <div className="sidebar-wrapper">
        <ul className="sidebar-items">
          {SidebarData.map((item, index) => (
            <li className="sidebar-menu" key={index}>
              <Link to={item.href} className="sidebar-links">
                <span className="sidebar-text">
                  <span className="sidebar-icon">
                    <img src={item.icon} alt="" className="sidebar-img" />
                  </span>
                  {item.text}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;