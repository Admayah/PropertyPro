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
      <div className="row">
        <div className="col-sm-12">
          <form onSubmit={props.handleSubmit}>
            <div className="col-sm-4">
              <div className="form-group">
                <label>First Name</label>
                <input
                  type="text"
                  name="firstname"
                  value={props.firstname}
                  className="form-control"
                  onChange={props.handlefirstChange}
                />
              </div>
            </div>
            <div className="col-sm-4">
              <div className="form-group">
                <label>Last Name</label>
                <input
                  type="text"
                  name="lastname"
                  value={props.lastname}
                  className="form-control"
                  onChange={props.handlelastChange}
                />
              </div>
            </div>
            {/* <div className="col-sm-4">
              <div className="form-group">
                <label>Book Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="bookname"
                  value={props.bookname}
                />
              </div>
            </div> */}
            <div className="col-sm-4">
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={props.email}
                />
              </div>
            </div>
            {/* <div className="col-sm-4">
              <div className="form-group">
                <label>Launch Date</label>
                <input
                  type="tel"
                  className="form-control"
                  name="phone"
                  value={props.phone}
                />
              </div>
            </div> */}
            <div className="col-sm-4">
              <div className="form-group">
                <label>Phone Number</label>
                <input
                  type="text"
                  className="form-control"
                  name="phone"
                  value={props.phone}
                />
              </div>
            </div>
            <div className="col-sm-4">
              <div className="form-group">
                <label>state</label>
                <input
                  type="email"
                  className="form-control"
                  name="state"
                  value={props.state}
                />
              </div>
            </div>
            <div className="col-sm-4">
              <div className="form-group">
                <label>Address</label>
                <input type="text" className="form-control" name="address" />
              </div>
            </div>
            <div className="col-sm-4">
              <div className="form-group">
                <label>City</label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="col-sm-4">
              <div className="form-group">
                <label>State</label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="col-sm-4">
              <div className="form-group">
                <label>Pincode</label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="col-sm-4">
              <div className="form-group">
                <button type="submit" className="btn btn-default">
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
      </div>
    </>
  );
}

export default Profile;
