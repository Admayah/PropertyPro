import React, {useState} from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import InputField from "../../components/propertiesInput/Input";
import Sidebar from "../../components/sidebar/Sidebar";
import { addUser } from "../../features/properties/userSlice";
import DashboardNav from "../dashboard/dashboardnav/DashboardNav";
import "./profile.css";
import { ToastContainer, toast } from "react-toastify";

function Profile() {

  const dispatch = useDispatch()

  const token = localStorage.getItem('token');
  let config = {
    "headers": {
      "Authorization": token
    }
  };

  const [editUser, setEditUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    phone_no: "",
    state: "",
    city: "",
    new_password: ""
  });
  const [loading, setLoading] = useState(false)
  const [isDisabled, setDisabled] = useState(false);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditUser({ ...editUser, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setDisabled(true);

    try {
      const response = await axios.put(`${process.env.REACT_APP_BASEURL}/edit-profile`, { ...editUser }, config);
      toast('Account successfully created')
      dispatch(
        addUser({
          id: new Date().getTime().toString(36),
          ...editUser
        })
      );
      setDisabled(false);

    } catch (error) {
      console.log(error)
      setDisabled(false);
      toast.error(`${error.response.data.message}`)

    }
    setLoading(!loading)
    setDisabled(false);
    console.log('hello')

    // setPerson({
    //   firstName: "",
    //   lastName: "",
    //   email: "",
    //   password: "",
    //   phoneNo: "",
    // });
  };


  return (
    <>
      {/* <DashboardNav /> */}
      <div className="dashboard-wrapper">
        <ToastContainer />
        <Sidebar />
        <div className="main">
          <div className="container">
            <h1 className="title">Edit Profile</h1>
            <div className="grid">
              <div className="form-group a">
                <label for="name">FIRSTNAME</label>
                <input id="name" type="text"
                name="first_name"
                  value={editUser.first_name}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group b">
                <label for="first-name">LASTNAME</label>
                <input id="first-name" type="text"
                name="last_name"
                  value={editUser.last_name}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group email-group">
                <label for="email">EMAIL</label>
                <input id="email" type="email"
                name="email"
                  value={editUser.email}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group phone-group">
                <label for="phone">PHONE NUMBER</label>
                <input id="phone" type="tel"
                name="phone_no"
                  value={editUser.phone_no}
                  onChange={handleChange}
                />
              </div>

              {/* <div className="textarea-group">
                <label for="bio">PASSWORD</label>
                <textarea id="bio"></textarea>
              </div> */}

              <div class="form-group">
                <label for="city">STATE</label>
                <input id="state" type="text"
                name="state"
                  value={editUser.state}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label for="address">CITY</label>
                <input id="address" type="text"
                name="city"
                  value={editUser.city}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label for="city">PASSWORD</label>
                <input id="city" type="password"
                name="password"
                  value={editUser.password}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label for="zip">NEW PASSWORD</label>
                <input id="confirm_new_password" type="password"
                name="new_password"
                  value={editUser.new_password}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="buttons-container">
              <button className="buttons" onClick={handleSubmit}>SAVE</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
