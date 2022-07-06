import React, {useState} from "react";
import { PropertyFeature } from "./propertyFeatures";
import DashboardNav from "../../pages/dashboard/dashboardnav/DashboardNav";
import Footer from "../footer/Footer";
import Sidebar from "../sidebar/Sidebar";
import "./propertiesInput.css";
import axios from "axios";
import {  useDispatch, useSelector } from "react-redux";
import { addProperty } from "../../features/properties/adminProperties";


const url = 'http://localhost:4000/v1/agent/properties'

export default function PropertiesInputData() {
const {adminProperties} = useSelector((store) => store.adminProperties)

const dispatch = useDispatch();

const token = localStorage.getItem('token')
  let config = {
    "headers": {
     "Authorization": token,
    }
  }

  const initialValues = {
    image : '',
    title : '',
    address : '',
    state : '',
    landArea : '',
    purpose : '',
    description : '',
    yearBuild : '',
    price: '',
    noOfBath : '',
    noOfRoom: '',
    noOfStore : '',
    noOfGarage : ''
  }

  const [propertiesInfo, setPropertiesInfo] = useState(initialValues)

  const informationHandler = (e) => {
  
    setPropertiesInfo(prev => ({
      ...prev,  [e.target.name]: e.target.value
    }))
    
  }
  
const handleSubmit = async (e) => {
  e.preventDefault()
  try {
    const response = await axios.post(url,{...propertiesInfo}, config)
    const {id} = await response.data[0]
    dispatch(addProperty({
      id,
      ...propertiesInfo
    }))
  } catch (error) {
    console.log(error)
  }
}
  return (
    <div className="properties-container">
      <DashboardNav />
      <div className="properties-wrap">
        <Sidebar />
        <div className="properties-input-container">
          <div className="properties-input-wrapper">
            <div className="properties-header">Add New Property</div>
              <div className="properties-content-wrapper">
                <div className="property-data-input-field">
                  <input
                    type="text"
                    className="property-data"
                    placeholder="Title"
                    name="title"
                    value={propertiesInfo.title}
                    onChange={informationHandler}
                  />
                </div>
                <div className="property-data-input-field">
                  <input
                    type="text"
                    className="property-data"
                    placeholder="year-of-build"
                    name="yearBuild"
                    value={propertiesInfo.type}
                    onChange={informationHandler}
                  />
                </div>
                <div className="property-data-input-field">
                  <input
                    type="text"
                    className="property-data"
                    placeholder="price"
                    name="price"
                    value={propertiesInfo.price}
                    onChange={informationHandler}
                  />
                </div>
                <div className="property-data-input-field">
                  <select
                    name="purpose"
                    id="choces"
                    className="property-option"
                    onChange={informationHandler}
                    >
                    <option value="" disabled selected hidden>
                      {propertiesInfo.purpose}
                    </option>
                    <option value="rent">FOR RENT</option>
                    <option value="sale">FOR SALE</option>
                  </select>
                </div>
                <div className="property-data-input-field">
                  <select
                    value={propertiesInfo.noOfRoom}
                    name='noOfRoom'
                    placeholder="no-of-room"
                    // id="choices"
                    className="property-option"
                    onChange={informationHandler}
                    >
                    <option value="" disabled selected hidden>
                      select no of noOfRoom
                    </option>
                    {PropertyFeature.map((feature) => (
                      <option value={feature}>{feature}</option>
                    ))}
                  </select>
                </div>
                <div className="property-data-input-field">
                  <select
                    value={propertiesInfo.noOfBath}
                    placeholder="no-of-noOfBath"
                    name='noOfBath'
                    id="choice"
                    className="property-option"
                    onChange={informationHandler}
                    >
                    <option value="" disabled selected hidden>
                      {propertiesInfo.noOfBath}
                    </option>
                    {PropertyFeature.map((feature) => (
                      <option value={feature}>{feature}</option>
                    ))}
                  </select>
                </div>
                <div className="property-data-input-field">
                  <select
                    value={propertiesInfo.noOfGarage}
                    name='noOfGarage'
                    placeholder="no-of-garage"
                    id="choices"
                    className="property-option"
                    onChange={informationHandler}
                    >
                    <option value="" disabled selected hidden>
                      {propertiesInfo.noOfGarage}
                    </option>
                    {PropertyFeature.map((feature) => (
                      <option value={feature}>{feature}</option>
                    ))}
                  </select>
                </div>
                <div className="property-data-input-field">
                  <select
                    value={propertiesInfo.noOfStore}
                    name='noOfStore'
                    placeholder="no-of-store"
                    id="choices"
                    className="property-option"
                    onChange={informationHandler}
                    >
                    <option value="" disabled selected hidden>
                     {propertiesInfo.noOfStore}
                    </option>
                    {PropertyFeature.map((feature) => (
                      <option value={feature}>{feature}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="properties-content-wrapper">
                <div className="property-location">
                  <div className="property-location-header">Location</div>
                  <div className="property-data-input-field">
                    <input
                      type="text"
                      className="property-data"
                      placeholder="State"
                      name='state'
                      value={propertiesInfo.state}
                      onChange={informationHandler}
                    />
                  </div>
                  <div className="property-data-input-field">
                    <input
                      type="text"
                      className="property-data"
                      name="address"
                      placeholder="address"
                      value={propertiesInfo.address}
                      onChange={informationHandler}
                      // placeholder="Street / Estate / Neighbourhood"
                    />
                  </div>
                </div>
              </div>
              <div className="properties-content-wrapper">
                <div className="property-location">
                  {/* <div>Price</div> */}
                  <div className="property-data-input-field">
                    <input
                      type="text"
                      className="property-data"
                      placeholder="land-area"
                      name="landArea"
                      value={propertiesInfo.landArea}
                      onChange={informationHandler}
                    />
                  </div>
                  <div className="property-data-input-field">
                    <select
                      name="purpose"
                      id="choices"
                      className="property-option">
                      <option value="" disabled selected hidden>
                        Select Denomination
                      </option>
                      <option value="rent">Naira</option>
                      <option value="sale">Dollar</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="properties-content-wrapper">
                <div className="property-location">
                  {/* <div className="property-location-header">Price</div> */}
                  <div className="property-data-input-field">
                    <input
                      type="text"
                      className="property-data"
                      // placeholder=""
                      name="image"
                      placeholder="image"
                      onChange={informationHandler}
                      value={propertiesInfo.image}

                    />
                  </div>
                  <div className="property-data-input-field">
                    <select
                      name="purpose"
                      id="choices"
                      className="property-option">
                      <option value="" disabled selected hidden>
                        Select Denomination
                      </option>
                      <option value="rent">Naira</option>
                      <option value="sale">Dollar</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="properties-content-wrapper">
                <div className="property-location">
                  <div className="property-location-header">
                    Property Description
                  </div>
                  <div className="property-data-input-fields">
                    <input
                      name="description"
                      id=""
                      cols="50"
                      rows="10"
                      className="property-desc"
                      onChange={informationHandler}
                      value={propertiesInfo.description}
                      placeholder="property description" />
                  </div>
                </div>
              </div>
          </div>
          <button className="post-btn" onClick={handleSubmit}>Post property</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
