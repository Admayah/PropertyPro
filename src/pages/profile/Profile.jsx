import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import DashboardNav from "../dashboard/dashboardnav/DashboardNav";
import "./profile.css";

function Profile() {
  return (
    <>
      <DashboardNav />
      <div className="profile-dashboard-container">
        <Sidebar />
        <div className="profile-container">
          <h3>My Profile</h3>
          <div className="user-profile-wrapper">
            <div className="properties-title-wrapper">
              <div className="property-location">
                <div className="property-location-header">
                  Contact Information
                </div>
                <div className="property-infos">
                  <span className="profile-input-container">
                    <input
                      type="text"
                      placeholder="first name"
                      className="input-field"
                    />
                  </span>
                  <span className="profile-input-container">
                    <input
                      type="text"
                      placeholder="last name"
                      className="input-field"
                      profile-input-container=""
                      id=""
                    />
                  </span>
                </div>
                <div className="property-infos">
                  <span className="profile-input-container">
                    <input
                      type="text"
                      placeholder="Email"
                      className="input-field"
                    />
                  </span>
                  <span className="profile-input-container">
                    <input
                      type="text"
                      placeholder="Phone Number"
                      className="input-field"
                      profile-input-container=""
                      id=""
                    />
                  </span>
                </div>
                <div className="property-infos">
                  <textarea
                    profile-input-container="about-me"
                    id="about-me"
                    cols="100"
                    rows="5"
                    className="profile-input-container input-field"
                    placeholder="About me"></textarea>
                </div>
              </div>
            </div>
            <div className="properties-title-wrapper">
              <div className="property-location">
                <div className="property-location-header">Change Password</div>
                <div className="property-infos">
                  <span className="profile-input-container">
                    <input
                      type="text"
                      placeholder="old Password"
                      className="input-field"
                    />
                  </span>
                </div>
                <div className="property-infos">
                  <span className="profile-input-container">
                    <input
                      type="text"
                      placeholder="New Password"
                      className="input-field"
                    />
                  </span>
                  <span className="profile-input-container">
                    <input
                      type="text"
                      placeholder="Confirm Password"
                      className="input-field"
                      profile-input-container=""
                      id=""
                    />
                  </span>
                </div>
                <div className="property-infos">
                  <label className="photo-wrapper profile-input-container">
                    <span className="profile">
                      Upload Profile Photo
                      <input type="file" profile-input-container="photo" />
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
