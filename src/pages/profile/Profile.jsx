import React from "react";
import InputField from "../../components/propertiesInput/Input";
import Sidebar from "../../components/sidebar/Sidebar";
import DashboardNav from "../dashboard/dashboardnav/DashboardNav";
import "./profile.css";

function Profile(props) {
  return (
    <>
      {/* <DashboardNav /> */}
      <div className="dashboard-wrapper">
        <Sidebar />
        <div className="main">
          <div className="container">

            <h1 className="title">Edit Profile</h1>

            <div className="grid">
              <div className="form-group a">
                <label for="name">FIRSTNAME</label>
                <input id="name" type="text" />
              </div>

              <div className="form-group b">
                <label for="first-name">LASTNAME</label>
                <input id="first-name" type="text" />
              </div>

              <div className="form-group email-group">
                <label for="email">EMAIL</label>
                <input id="email" type="email" />
              </div>

              <div className="form-group phone-group">
                <label for="phone">PHONE NUMBER</label>
                <input id="phone" type="tel" />
              </div>

              {/* <div className="textarea-group">
                <label for="bio">PASSWORD</label>
                <textarea id="bio"></textarea>
              </div> */}

<div class="form-group">
                <label for="city">CITY</label>
                <input id="city" type="text" />
              </div>

              <div className="form-group">
                <label for="address">PASSWORD</label>
                <input id="address" type="password" />
              </div>

              <div className="form-group">
                <label for="city">NEW PASSWORD</label>
                <input id="city" type="password" />
              </div>

              <div className="form-group">
                <label for="zip">CONFIRM NEW PASSWORD</label>
                <input id="confirm_new_password" type="password" />
              </div>
            </div>
            <div className="buttons-container">
              <button className="buttons">SAVE</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
