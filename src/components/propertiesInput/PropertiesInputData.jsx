import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";
import { PropertyFeature } from "./propertyFeatures";
import DashboardNav from "../../pages/dashboard/dashboardnav/DashboardNav";
import Footer from "../footer/Footer";
import Sidebar from "../sidebar/Sidebar";
import InputField from "./Input";
import { useDispatch, useSelector } from "react-redux";
import { addProperty } from "../../features/properties/adminProperties";
import "./propertiesInput.css";
import 'react-toastify/dist/ReactToastify.css';


export default function PropertiesInputData() {


  const dispatch = useDispatch();

  const token = localStorage.getItem('token')
  let config = {
    "headers": {
      "Authorization": token,
      'content-type': 'multipart/form-data'
    }
  }

  const initialValues = {
    title: '',
    address: '',
    state: '',
    landArea: '',
    purpose: '',
    description: '',
    yearBuild: '',
    price: '',
    noOfBath: '',
    noOfRoom: '',
    noOfStore: '',
    noOfGarage: ''
  }

  const [propertiesInfo, setPropertiesInfo] = useState(initialValues)
  const [file, setFile] = useState()
  const saveFile = (e) => {
    setFile(e.target.files[0]);
  }

  const informationHandler = (e) => {

    setPropertiesInfo(prev => ({
      ...prev, [e.target.name]: e.target.value
    }))

  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData();

    formData.append("file", file);
    formData.append("fileName", JSON.stringify(propertiesInfo));
    console.log(file, propertiesInfo)
    console.log(formData)

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASEURL}/agent/properties`,
        formData,
        config
      )
      console.log(response)
      toast('Property posted successfully')
      const { id } = await response.data[0]
      dispatch(addProperty({
        id,
        ...propertiesInfo
      }))
    } catch (error) {
      toast.error(`${error.response.data.message}`)
    }
  }
  return (
    <div className="properties-container">
      <DashboardNav />
      <ToastContainer />
      <div className="properties-wrap">
        <Sidebar />
        <div className="properties-input-container">
          <div className="properties-input-wrapper">
            <div className="properties-header">Add New Property</div>
            <div className="properties-content-wrapper">
              <label htmlFor="title">Title</label>
              <InputField
                type='text'
                placeholder='Title'
                name='title'
                value={propertiesInfo.title}
                onChange={informationHandler}
              />
              <label htmlFor="yearBuild">Title</label>
              <InputField
                type='text'
                placeholder='yearBuild'
                name='yearBuild'
                value={propertiesInfo.yearBuild}
                onChange={informationHandler}
              />
              <label htmlFor="price">Title</label>
              <InputField
                type='text'
                placeholder='price'
                name='price'
                value={propertiesInfo.price}
                onChange={informationHandler}
              />
              <div className="property-data-input-field">
                <select
                  name="purpose"
                  className="property-option"
                  onChange={informationHandler}
                >
                  <option value="" disabled selected hidden>
                    Purpose of property
                  </option>
                  <option value="Rent">FOR RENT</option>
                  <option value="Sale">FOR SALE</option>
                </select>
              </div>
              <div className="property-data-input-field">
                <select
                  value={propertiesInfo.noOfRoom}
                  name='noOfRoom'
                  placeholder="no-of-room"
                  className="property-option"
                  onChange={informationHandler}
                >
                  <option value="" disabled selected hidden>
                    select no of Rooms
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
                  className="property-option"
                  onChange={informationHandler}
                >
                  <option value="" disabled selected hidden>
                    select no of Baths
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
                  className="property-option"
                  onChange={informationHandler}
                >
                  <option value="" disabled selected hidden>
                    Select no of Garage
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
                  className="property-option"
                  onChange={informationHandler}
                >
                  <option value="" disabled selected hidden>
                    Select no of stores
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
                <label htmlFor="price">State</label>
                <InputField
                  type='text'
                  placeholder='state'
                  name='state'
                  value={propertiesInfo.state}
                  onChange={informationHandler}
                />
                <label htmlFor="price">Address</label>
                <InputField
                  type='text'
                  placeholder='address'
                  name='address'
                  value={propertiesInfo.address}
                  onChange={informationHandler}
                />
                <label htmlFor="price">land Area</label>
                <InputField
                  type='text'
                  placeholder='land area'
                  name='landArea'
                  value={propertiesInfo.landArea}
                  onChange={informationHandler}
                />
                <label htmlFor="price">Property Description</label>
                <div className="property-location">
                  <InputField
                    className='property-desc'
                    type='text'
                    placeholder='Description'
                    name='description'
                    value={propertiesInfo.description}
                    onChange={informationHandler}
                  />
                </div>
              </div>
            </div>

          </div>
          <div className="property-image">
            <label className="photo-wrapper profile-input-container">
              <span className="profile">
                Upload property Image
                <input type="file"
                  name='image'
                  // value={propertiesInfo.image}
                  onChange={saveFile} />
              </span>
            </label>
            <button className="post-btn" onClick={handleSubmit}>Post property</button>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
}
