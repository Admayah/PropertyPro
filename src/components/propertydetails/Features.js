import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./features.css";
import { ToastClassName, toast, ToastContainer } from "react-toastify";

function Features(props) {

  const { id } = useParams();
  const [moreInfo, setMoreInfo] = useState([]);

  const getProperty = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BASEURL}/properties`)
      console.log(response)
      const { data } = response;
      setMoreInfo(data)

      toast('Property is successfully created')
    } catch (error) {
      toast.error('Something went wrong')
    }
  };

  useEffect(() => {
    getProperty()
  }, []);


  return (
    <div className="features-wrapper">
       {moreInfo.filter((property) => property.id === parseInt(id)).map((property, index) => {
        return (
<>
<div className="more-property-features">
        <ul>
          <li className="property-feature-item">Lot Area: {property.land_area}</li>
          <li className="property-feature-item">Bed Rooms: {property.no_of_rooms}</li>
          <li className="property-feature-item">Bath Rooms: {property.no_of_bathrooms}</li>
          <li className="property-feature-item">Garage: {property.no_of_garage}</li>
        </ul>
      </div>
      <div className="more-property-features">
        <ul>
          <li className="property-feature-item">Lot Area: {property.land_area}</li>
          <li className="property-feature-item">Year Build: {property.year_of_build}</li>
          <li className="property-feature-item">Purpose: {property.purpose}</li>
          <li className="property-feature-item">Stores: {property.no_of_store}</li>
        </ul>
      </div>
      <div className="more-property-features">
        <ul>
          <li className="property-feature-item">Lot Area: 1,250 SQ FT</li>
          <li className="property-feature-item">Year Build: 2019</li>
          <li className="property-feature-item">Water</li>
          <li className="property-feature-item">Stores</li>
        </ul>
      </div>
</>
        )
       }
       )}
      
    </div>
  );
}

export default Features;
