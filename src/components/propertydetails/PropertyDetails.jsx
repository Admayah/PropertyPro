import React, { useState, useEffect } from "react";
import { useParams, NavLink, Outlet } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios'
import "./propertydetails.css";
import 'react-toastify/dist/ReactToastify.css';


function PropertyDetails() {
  
  const { id } = useParams();
  console.log(id, 'id')
  const [moreInfo, setMoreInfo] = useState([]);

  const getProperty = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BASEURL}/property/${id}`);
      console.log(response, 'response')
      const { data } = response;
      console.log(data, 'data')
      setMoreInfo(data);

      toast('Property is successfully created');
    } catch (error) {
      console.log(error)
      toast.error(`${error.response.data.message}`);
    }
  };

  useEffect(() => {
    getProperty();
  }, []);

  return (
    <div className="property-details-container">
      <ToastContainer />
      {moreInfo.map((property, index) => {
        console.log(property, 'property')
        return (
          <div className="property-detail-wrapper" key={index}>
          <div className="property-image-wrapper">
            <img src={property.image_url} alt="pic" className="property-img" />
          </div>
          <div className="property-title">{property.title} </div>
          <div className="property-title">Address: {property.address}</div>
          <div className="properties-details">
            <NavLink to={`/properties/${id}/features`}>
              {" "}
              <p className="property-details-header">Features</p>
            </NavLink>{" "}
            {" | "}
            <NavLink to={`/properties/${id}/desc`}>
              {" "}
              <p className="property-details-header">Description</p>{" "}
            </NavLink>{" "}
            {" | "}
            <NavLink to={`/properties/${id}/review`}>
              {" "}
              <p className="property-details-header">Review</p>{" "}
            </NavLink>
          </div>
          <hr />
          <Outlet />
        </div>
        )
      }
      )}
    </div>
  );
}

export default PropertyDetails;
