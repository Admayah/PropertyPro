import React from "react";
import { useParams, NavLink, Outlet } from "react-router-dom";
import AllProperties from "../allproperties/allproperties";
import "./propertydetails.css";

function PropertyDetails() {
  const { id } = useParams();
  return (
    <div className="property-details-container">
      {AllProperties.filter((property) => property.id === id).map((property, index) => (
        <div className="property-detail-wrapper" key={index}>
          <div className="property-image-wrapper">
            <img src={property.img} alt="pic" className="property-img" />
          </div>
          <div className="property-title">{property.title} </div>

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
      ))}
    </div>
  );
}

export default PropertyDetails;
