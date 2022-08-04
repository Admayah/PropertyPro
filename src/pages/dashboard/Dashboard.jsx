import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import DashboardNav from "./dashboardnav/DashboardNav";
import "./dashboard.css";



export default function Dashboard() {

  return (
    <>
      <div className="dashboard-container">
        <DashboardNav />
        <div className="dashboard-wrapper">
          <div className="searchbar-wrapper">
            <input type="search" className="search-bar" />
            <img
              src="https://img.icons8.com/material-outlined/50/000000/search--v1.png"
              className="search-icon"
              alt="search-menu"
            />
          </div>
          <Sidebar />
          <div className="dashboard-content"></div>
        </div>
      </div>
    </>
  );
}
