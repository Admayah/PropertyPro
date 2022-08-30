import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch } from 'react-redux'
import DashboardNav from '../../pages/dashboard/dashboardnav/DashboardNav'
import Sidebar from '../sidebar/Sidebar'
import Footer from '../footer/Footer'
import { PropertyFeature } from '../propertiesInput/propertyFeatures'
import { addProperty, editStateProperty } from '../../features/properties/adminProperties'
import 'react-toastify/dist/ReactToastify.css';
import './style.css'

const EditProperty = () => {
  
  // const [datas, setDatas] = useState([])

  const {id} = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  
  const token = localStorage.getItem('token')
    let config = {
      "headers": {
       "Authorization": token,
      }
    }
    const propertyInformation = async () => {
      const response = await axios.get(`${process.env.REACT_APP_BASEURL}/agent/property/${id}`, config)
      console.log(response.data)
      const {data} = response
      dispatch(addProperty({...data}))
      const info = data
      setDatas(info)
      
    }

    useEffect(()=> {
      propertyInformation()
      console.log(datas)
    }, [])

// const {  title, address, state, land_area, purpose, description, year_of_build, price, no_of_bathrooms, no_of_rooms, no_of_store, no_of_garage } = datas;

const [editProperty, setEditProperty] = useState({ 
  title: "", 
  address: "", 
  state: "", 
  land_area: "", 
  purpose: "", 
  description: "", 
  year_of_build: "", 
  price: "", 
  no_of_bathrooms: "", 
  no_of_rooms: "", 
  no_of_store: "",
  no_of_garage: ""
});
  

  const editHandler = (e) => {
    setEditProperty({
      ...editProperty, [e.target.name] : e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
  

      const response = await axios.put(`${process.env.REACT_APP_BASEURL}/agent/properties/${id}` ,{...editProperty}, config)
      dispatch(editStateProperty({
        id,
        ...editProperty
      }))
      navigate('/my-properties')
      toast('Updated successfully')
    } catch (error) {
      toast.error(`${error.response.data.message}`)
    }
    }  
console.log(editProperty)
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
              <div className="property-data-input-field">
                <input
                  type="text"
                  className="property-data"
                  placeholder="Title"
                  name="title"
                  value={editProperty.title}
                  onChange={editHandler}
                />
              </div>
              <div className="property-data-input-field">
                <input
                  type="text"
                  className="property-data"
                  placeholder="year-of-build"
                  name="year_of_build"
                  value={editProperty.type}
                  onChange={editHandler}
                />
              </div>
              <div className="property-data-input-field">
                <input
                  type="text"
                  className="property-data"
                  placeholder="price"
                  name="price"
                  value={editProperty.price}
                  onChange={editHandler}
                />
              </div>
              <div className="property-data-input-field">
                <select
                  name="purpose"
                  className="property-option"
                  onChange={editHandler}
                  >
                  <option value="" disabled selected hidden>
                    {editProperty.purpose}
                  </option>
                  <option value="rent">FOR RENT</option>
                  <option value="sale">FOR SALE</option>
                </select>
              </div>
              <div className="property-data-input-field">
                <select
                  value={editProperty.no_of_rooms}
                  name='no_of_rooms'
                  placeholder="no-of-room"
                  className="property-option"
                  onChange={editHandler}
                  >
                  <option value="" disabled selected hidden>
                    select no of no_of_rooms
                  </option>
                  {PropertyFeature.map((feature) => (
                    <option value={feature}>{feature}</option>
                  ))}
                </select>
              </div>
              <div className="property-data-input-field">
                <select
                  value={editProperty.no_of_bathrooms}
                  placeholder="no-of-no_of_bathrooms"
                  name='no_of_bathrooms'
                  className="property-option"
                  onChange={editHandler}
                  >
                  <option value="" disabled selected hidden>
                    {editProperty.no_of_bathrooms}
                  </option>
                  {PropertyFeature.map((feature) => (
                    <option value={feature}>{feature}</option>
                  ))}
                </select>
              </div>
              <div className="property-data-input-field">
                <select
                  value={editProperty.no_of_garage}
                  name='no_of_garage'
                  placeholder="no-of-garage"
                  className="property-option"
                  onChange={editHandler}
                  >
                  <option value="" disabled selected hidden>
                    {editProperty.no_of_garage}
                  </option>
                  {PropertyFeature.map((feature) => (
                    <option value={feature}>{feature}</option>
                  ))}
                </select>
              </div>
              <div className="property-data-input-field">
                <select
                  value={editProperty.no_of_store}
                  name='no_of_store'
                  placeholder="no-of-store"
                  className="property-option"
                  onChange={editHandler}
                  >
                  <option value="" disabled selected hidden>
                   {editProperty.no_of_store}
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
                    value={editProperty.state}
                    onChange={editHandler}
                  />
                </div>
                <div className="property-data-input-field">
                  <input
                    type="text"
                    className="property-data"
                    name="address"
                    placeholder="address"
                    value={editProperty.address}
                    onChange={editHandler}
                  />
                </div>
              </div>
            </div>
            <div className="properties-content-wrapper">
              <div className="property-location">
                <div className="property-data-input-field">
                  <input
                    type="text"
                    className="property-data"
                    placeholder="land-area"
                    name="land_area"
                    value={editProperty.land_area}
                    onChange={editHandler}
                  />
                </div>
              </div>
            </div>
            <div className="properties-content-wrapper">
              <div className="property-location">
                <div className="property-data-input-field">
                  <input
                    type="text"
                    className="property-data"
                    name="image_url"
                    placeholder="image_url"
                    onChange={editHandler}
                    value={editProperty.image_url}

                  />
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
                    onChange={editHandler}
                    value={editProperty.description}
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
  )
}

export default EditProperty;