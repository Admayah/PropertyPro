import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux'
import Sidebar from '../sidebar/Sidebar'
import { PropertyFeature } from '../propertiesInput/propertyFeatures'
import { updateStateProperty, editStateProperty } from '../../features/properties/adminProperties'
import 'react-toastify/dist/ReactToastify.css';
import './style.css'
import Inputs from '../input/Inputs';
import Btn from '../Btn/Btn';

const EditProperty = () => {

  const { id } = useParams();
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
    const { data } = response
    const destructureData = data[0]
    console.log({destructureData})
    dispatch(updateStateProperty(destructureData))

  }

  useEffect(() => {
    propertyInformation()
  }, [])

  const { updateProperty } = useSelector((state) => state.updateProperty)
  console.log('store data', updateProperty)
  console.log('get title from store data', updateProperty.title)



  const [editProperty, setEditProperty] = useState({
    image: "",
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

  useEffect(() => {
    console.log(updateProperty, 'useeffect')
    setEditProperty(updateProperty)
  }, [updateProperty])

  const editHandler = (e) => {
    setEditProperty({
      ...editProperty, [e.target.name]: e.target.value
    })
  }
  const [file, setFile] = useState('')
  const saveFile = (e) => {
    setFile(e.target.files[0]);

  }
console.log(file, 'fileeeeeeeee')
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("file", file);
    formData.append("fileName", JSON.stringify(editProperty));

    try {
      const response = await axios.put(`${process.env.REACT_APP_BASEURL}/agent/properties/${id}`, formData, 
      config
      )
      dispatch(editStateProperty({
        id,
        ...editProperty
      }))
      navigate('/my-properties')
      toast('Updated successfully')
    } catch (error) {
      console.log(error)
      // toast.error(`${error.response.data.message}`)
    }
  }
  console.log(editProperty)
  return (
    <div className="dashboard-wrapper">
      <ToastContainer />
      <Sidebar />
      <div className="main">
        <div className="properties-input-container">
          <div className="properties-input-wrapper">
            <div className="properties-header" style={{textTransform: 'capitalize', fontSize: '20px', fontWeight: 'bold'}}>edit property</div>
            <div className="properties-content-wrapper">
              {/* <div className="form-group a"> */}
                <Inputs
                  label="title"
                  title="Title"
                  id="title"
                  type="text"
                  name="title"
                  value={editProperty.title}
                  inputHandler={editHandler}
                />
                {/* <input id="title" type="text"
                     name="title"
                     label="title"
                       value={editProperty.title}
                      onChange={editHandler}
                /> */}

              {/* </div> */}
              {/* <div className="form-group"> */}
                <Inputs
                  label="year_of_build"
                  title="year_of_build"
                  id="year_of_build"
                  type="text"
                  name="year_of_build"
                  value={editProperty.year_of_build}
                  inputHandler={editHandler}
                />
                {/* <input 
                  type="text"
                  name="year_of_build"
                  value={editProperty.year_of_build}
                  onChange={editHandler}
                /> */}

              {/* </div> */}
              {/* <div className="form-group"> */}
                <Inputs
                  label="price"
                  title="Price"
                  id="price"
                  type="text"
                  name="price"
                  value={editProperty.price}
                  inputHandler={editHandler}
                />
                {/* <input 
                 type="text"

                  name="price"
                  value={editProperty.price}
                  onChange={editHandler}
                /> */}
              {/* </div> */}

              <div className="form-group">
              <label htmlFor="purpose">purpose</label>
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
              <div className="form-group">
              <label htmlFor="no_of_rooms">Bedroom</label>
                <select
                  value={editProperty.no_of_rooms}
                  name='no_of_rooms'
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
              <div className="form-group">
              <label htmlFor="no_of_bathrooms">Bathroom</label>
                <select
                  value={editProperty.no_of_bathrooms}
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
              <div className="form-group">
              <label htmlFor="no_of_garage">Garage</label>
                <select
                  value={editProperty.no_of_garage}
                  name='no_of_garage'
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
              <div className="form-group">
              <label htmlFor="no_of_store">Store</label>
                <select
                  value={editProperty.no_of_store}
                  name='no_of_store'
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
            {/* <div className="properties-content-wrapper">
              <div className="property-location">
                <div className="property-location-header">Location</div> */}
                {/* <div className="form-group"> */}
                {/* <select
                  value={propertiesInfo.noOfRoom}
                  name='state'
                  placeholder="state"
                  className="property-option"
                  onChange={informationHandler}
                >
                  <option value="" disabled selected hidden>
                    State
                  </option>
                  {statesArray.map((feature) => (
                    <option value={feature}>{feature}</option>
                  ))}
                </select> */}
                  {/* <Inputs
                    label='state'
                    title='State'
                    id='state'
                    type="text"
                    name='state'
                    value={editProperty.state}
                    inputHandler={editHandler}
                  /> */}
                  {/* <input
                    type="text"
                    name='state'
                    value={editProperty.state}
                    onChange={editHandler}
                  /> */}
                {/* </div> */}
                {/* <div className="form-group"> */}
                  <Inputs
                    label="address"
                    title="Address"
                    id="address"
                    type="text"
                    name="address"
                    value={editProperty.address}
                    inputHandler={editHandler}
                  />
                  {/* <input
                    type="text"
                    name="address"
                    value={editProperty.address}
                    onChange={editHandler}
                  /> */}
                {/* </div> */}
              {/* </div>
            </div> */}
            {/* <div className="properties-content-wrapper">
              <div className="property-location"> */}
                {/* <div className="form-group"> */}
                  <Inputs
                    label="land_area"
                    title="Land_Area"
                    id="land_area"
                    type="text"
                    name="land_area"
                    value={editProperty.land_area}
                    inputHandler={editHandler}
                  />
                  {/* <input
                    type="text"
                    name="land_area"
                    value={editProperty.land_area}
                    onChange={editHandler}
                  /> */}
                {/* </div> */}
              {/* </div>
            </div> */}
            {/* <div className="properties-content-wrapper">
              <div className="property-location"> */}
                {/* <div className="form-group"> */}
                <div className="img-wrap">
                <span className="image-label">Upload image</span>
{/*  */}
              <div className="img-label">
                {/* <i className="fas fa-paperclip fa-md mr-2"></i> */}
                <span className="filename">{file ? file.name : editProperty.image}</span>
                {/* <i class='fa fa_bars ah'></i> */}
                <input type="file" className="inputfile form-control" name="file" hidden onChange={saveFile} 
                />
              </div>
            </div>
                  {/* <Inputs
                    label="image_url"
                    title="Image"
                    id="image_url"
                    type="text"
                    name="image_url"
                    value={editProperty.image_url}
                    inputHandler={editHandler}
                  /> */}
                  {/* <input
                    type="text"
                    name="image_url"
                    onChange={editHandler}
                    value={editProperty.image_url}

                  /> */}
                {/* </div> */}
              {/* </div>
            </div> */}
            {/* <div className="properties-content-wrapper"> */}
              {/* <div className="property-location"> */}
                {/* <div className="property-location-header">
                  Property Description
                </div> */}
                {/* <div className="form-groups"> */}
                  <Inputs
                    label="description"
                    title="Description"
                    id="description"
                    type="text"
                    name="description"
                    value={editProperty.description}
                    inputHandler={editHandler}
                  />
                  {/* <input
                    name="description"
                    id=""
                    cols="50"
                    rows="10"
                    className="property-desc"
                    onChange={editHandler}
                    value={editProperty.description}
                    /> */}
                {/* </div> */}
              {/* </div> */}
            {/* </div> */}
            <Btn
          type="submit"
          clickHandler={handleSubmit}
          value="update property" 
          className="edit-btn"
          />
          </div>

          {/* <button className="post-btn" onClick={handleSubmit}>Post property</button> */}
        </div>
      </div>
    </div>
  )

}

export default EditProperty;