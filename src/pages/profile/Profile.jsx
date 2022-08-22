import React from "react";
import InputField from "../../components/propertiesInput/Input";
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
                    <InputField
                      type='text'
                      className='profile-input'
                      placeholder='Enter first name'
                      name='firstName'
                    />
                  </span>
                  <span className="profile-input-container">
                    <InputField
                      type='text'
                      className='profile-input'
                      placeholder='Enter last name'
                      name='lastName'
                    />
                  </span>
                </div>
                <div className="property-infos">
                  <span className="profile-input-container">
                    <InputField
                      type='email'
                      className='profile-input'
                      placeholder='Enter Email Address'
                      name='email'
                    />
                  </span>
                  <span className="profile-input-container">
                    <InputField
                      type='tel'
                      className='profile-input'
                      placeholder='Enter Phone Number'
                      name='phoneNo'
                    />
                  </span>
                </div>
              </div>
            </div>
            <div className="properties-title-wrapper">
              <div className="property-location">
                <div className="property-location-header">Change Password</div>
                <InputField
                      type='password'
                      className='profile-input'
                      placeholder='Enter Old Password'
                      name='password'
                    />
                <div className="property-infos">
                  <span className="profile-input-container">
                    <InputField
                      type='password'
                      className='profile-input'
                      placeholder='Enter New Password'
                      name='email'
                    />
                  </span>
                  <span className="profile-input-container">
                    <InputField
                      type='password'
                      className='profile-input'
                      placeholder='Confirm New Password'
                      name='phoneNo'
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
