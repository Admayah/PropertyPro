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
          {/* <div className="searchbar-wrapper">
            <input type="search" className="search-bar" />
            <img
              src="https://img.icons8.com/material-outlined/50/000000/search--v1.png"
              className="search-icon"
              alt="search-menu"
            />
          </div> */}
          <Sidebar />
          <div className="dashboard-content">
            <div className="first-card-container">
            <div className="first-card">
              <div class="db-container">
                <i class="fa fa-dashboard fa-5x" aria-hidden="true" ></i>
                <h1 className="db-name">Properties</h1>
              </div>
            </div>
            <div className="second-card">
            <div class="db-container">
                <i class="fa fa-id-card-o fa-5x" aria-hidden="true" ></i>
                <h1 className="db-name">Subscription</h1>
              </div>
            </div>
            </div>
 
            <div className="card">
              {/* <img src="img_avatar.png" alt="Avatar" style="width:100%" /> */}
              <div className="db-container">
                <i className="fa fa-user fa-5x" aria-hidden="true" ></i>
                <h1 className="db-name">Profile</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
