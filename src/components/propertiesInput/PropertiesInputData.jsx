import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";
import { PropertyFeature } from "./propertyFeatures";
import DashboardNav from "../../pages/dashboard/dashboardnav/DashboardNav";
import Footer from "../footer/Footer";
import Sidebar from "../sidebar/Sidebar";
import InputField from "./Input";
import { useDispatch } from "react-redux";
import { addProperty } from "../../features/properties/adminProperties";
import { statesArray } from "./propertyFeatures";
import "./propertiesInput.css";
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from "react";
import Inputs from "../input/Inputs";
import Btn from "../Btn/Btn";
import Select from "../select/Select";



export default function PropertiesInputData() {

  const [isDisabled, setDisabled] = useState(false);
  const [loading, setLoading] = useState(false)

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
  const [file, setFile] = useState('property image')
  const saveFile = (e) => {
    setFile(e.target.files[0]);
  }
  console.log(file, 'filing')
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
    setLoading(true)

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASEURL}/agent/properties`,
        formData,
        config
      )
      toast('Property posted successfully')
      const { id } = await response.data[0]
      dispatch(addProperty({
        id,
        ...propertiesInfo
      }))
      setLoading(false)
    } catch (error) {
      console.log(error)
      toast.error(`${error.response.data.message}`)
    }
    // setDisabled(true);
  }

  // useEffect(() => {
  //   handleSubmit();
  // }, []);


  return (
    <div className="dashboard-wrapper">
      {/* <DashboardNav /> */}
      <ToastContainer />
      <Sidebar />
      <div className="main">
        <div className="properties-input-container">
          <div className="properties-input-wrapper">
            <div className="properties-header"  style={{textTransform: 'capitalize', fontSize: '20px', fontWeight: 'bold'}}>Add New Property</div>
            <div className="properties-content-wrapper">
              {/* <div className="form-group a"> */}
                {/* <label htmlFor="title">Title</label> */}
                <Inputs
                  label="title"
                  title="Title"
                  id="title"
                  type="text"
                  name="title"
                  value={propertiesInfo.title}
                  inputHandler={informationHandler}
                />
                {/* <input id="title" type="text"
                  name="title"
                  placeholder="Title"
                  value={propertiesInfo.title}
                  onChange={informationHandler}
                /> */}
                {/* <InputField
                type='text'
                placeholder='Title'
                name='title'
                value={propertiesInfo.title}
                onChange={informationHandler}
              /> */}
              {/* </div> */}
              {/* <label htmlFor="yearBuild">Title</label> */}
              {/* <div className="form-group"> */}
                <Inputs
                  label="year_of_build"
                  title="year_of_build"
                  id="year_of_build"
                  type="text"
                  name='yearBuild'
                  value={propertiesInfo.yearBuild}
                  inputHandler={informationHandler}
                />
                {/* <input id="title" type="text"
                  placeholder='yearBuild'
                  name='yearBuild'
                  value={propertiesInfo.yearBuild}
                  onChange={informationHandler}
                /> */}
              {/* </div> */}
              {/* <div className="form-group"> */}
                <Inputs
                  label="price"
                  title="Price"
                  id="price"
                  type="text"
                  name="price"
                  value={propertiesInfo.price}
                  inputHandler={informationHandler}
                />
                {/* <input id="title" type="text"
                  placeholder='price'
                  name='price'
                  value={propertiesInfo.price}
                  onChange={informationHandler}
                /> */}
              {/* </div> */}
              {/* <InputField
                type='text'
                placeholder='yearBuild'
                name='yearBuild'
                value={propertiesInfo.yearBuild}
                onChange={informationHandler}
              /> */}
              {/* <label htmlFor="price">Title</label>
              <InputField
                type='text'
                placeholder='price'
                name='price'
                value={propertiesInfo.price}
                onChange={informationHandler}
              /> */}
              {/* <div className="form-group">
                <Select
                label='purpose'
                title='purpose'
                name='purpose'
                id='purpose'
                />
              </div> */}
              <div className="form-group">
                <label htmlFor="purpose">purpose</label>
                <select
                  name="purpose"
                  className="property-option"
                  onChange={informationHandler}
                >
                  <option value="" className="" disabled selected hidden>
                    Purpose of property
                  </option>
                  <option value="Rent">FOR RENT</option>
                  <option value="Sale">FOR SALE</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="bedroom">Bedroom</label>
                <select
                  value={propertiesInfo.noOfRoom}
                  name='noOfRoom'
                  // placeholder="no-of-room"
                  className="property-option"
                  onChange={informationHandler}
                >
                  <option value="" className="" disabled selected hidden>
                    select no of Rooms
                  </option>
                  {PropertyFeature.map((feature) => (
                    <option value={feature}>{feature}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="bathroom">Bathroom</label>
                <select
                  value={propertiesInfo.noOfBath}
                  placeholder="no-of-noOfBath"
                  name='noOfBath'
                  className="property-option"
                  onChange={informationHandler}
                >
                  <option value="" className="" disabled selected hidden>
                    select no of Baths
                  </option>
                  {PropertyFeature.map((feature) => (
                    <option value={feature}>{feature}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="garage">Garage</label>
                <select
                  value={propertiesInfo.noOfGarage}
                  name='noOfGarage'
                  // placeholder="no-of-garage"
                  className="property-option"
                  onChange={informationHandler}
                >
                  <option value="" className="" disabled selected hidden>
                    Select no of Garage
                  </option>
                  {PropertyFeature.map((feature) => (
                    <option value={feature}>{feature}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="store">Store</label>
                <select
                  value={propertiesInfo.noOfStore}
                  name='noOfStore'
                  // placeholder="no-of-store"
                  className="property-option"
                  onChange={informationHandler}
                >
                  <option value="" className="" disabled selected hidden>
                    Select no of stores
                  </option>
                  {PropertyFeature.map((feature) => (
                    <option value={feature}>{feature}</option>
                  ))}
                </select>
              </div>
            </div>
            {/* <div className="properties-content-wrapper"> */}
            <div className="form-group">
              <label htmlFor="state">State</label>
              <select
                value={propertiesInfo.state}
                name='state'
                // placeholder="state"
                className="property-option"
                onChange={informationHandler}
              >
                <option value="" className="" disabled selected hidden>
                  State
                </option>
                {statesArray.map((feature) => (
                  <option value={feature}>{feature}</option>
                ))}
              </select>
            </div>
            {/* <div className="property-location"> */}
            {/* <div className="property-location-header">Location</div> */}
            {/* <label htmlFor="price">State</label> */}
            {/* <InputField
                  type='text'
                  placeholder='state'
                  name='state'
                  value={propertiesInfo.state}
                  onChange={informationHandler}
                /> */}
            {/* <div className="form-group"> */}
              <Inputs
                label="address"
                title="Address"
                id="address"
                type="text"
                name="address"
                value={propertiesInfo.address}
                inputHandler={informationHandler}
              />
              {/* <input
                    type='text'
                    placeholder='address'
                    name='address'
                    value={propertiesInfo.address}
                    onChange={informationHandler}
                  /> */}
            {/* </div> */}
            {/* <label htmlFor="price">Address</label>
                <InputField
                  type='text'
                  placeholder='address'
                  name='address'
                  value={propertiesInfo.address}
                  onChange={informationHandler}
                /> */}
            {/* <label htmlFor="price">land Area</label> */}
            {/* <div className="form-group"> */}
              <Inputs
                label="land_area"
                title="Land_Area"
                id="land_area"
                type="text"
                name="landArea"
                value={propertiesInfo.landArea}
                inputHandler={informationHandler}
              />
              {/* <input
                    type='text'
                    placeholder='land area'
                    name='landArea'
                    value={propertiesInfo.landArea}
                    onChange={informationHandler}
                  /> */}
            {/* </div> */}
            <div className="img-wrap">
                <span className="image-label">Upload image</span>b
{/*  */}
              <div className="img-label">
                {/* <i className="fas fa-paperclip fa-md mr-2"></i> */}
                <span className="filename">{!file.name ? 'upload image' : file.name}</span>
                {/* <i class='fa fa_bars ah'></i> */}
                <input type="file" className="inputfile form-control" name="file" hidden onChange={saveFile} />
              </div>
            </div>

            {/* <div className="form-group"> */}
              <Inputs
                label="description"
                title="Description"
                id="description"
                type="text"
                name="description"
                value={propertiesInfo.description}
                inputHandler={informationHandler}
              />
              {/* <label htmlFor="price">Property Description</label> */}
              {/* <div className="property-location"> */}
              {/* <input
                    // className='property-desc'
                    type='text'
                    placeholder='Description'
                    name='description'
                    value={propertiesInfo.description}
                    onChange={informationHandler}
                  /> */}
            {/* </div> */}
            {/* </div> */}


            {/* </div> */}
            <Btn
              clickHandler={handleSubmit}
              value={loading ? <i class="fa fa-circle-o-notch fa-spin"></i> : "post property"}
              className={loading ? "edit-btn jax" : "edit-btn"}
            />
          </div>
          {/* <div className="img-label"> */}
          {/* <label className="photo-wrapper profile-input-container"> */}
          {/* <span className="profile"> */}
          {/* Upload property Image */}
          {/* <input type="file"
              name='image'
              hidden
              value={propertiesInfo.image}
              onChange={saveFile} /> */}

          {/* </span> */}
          {/* </label> */}

          {/* </div> */}
          {/* <button className="post-btn" onClick={handleSubmit} disabled={isDisabled}>{loading ? <>Posting...</> : <>Post property</>}</button> */}
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
