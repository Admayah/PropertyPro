import React from "react";
import "./features.css";

function Features(props) {
  return (
    <div className="features-wrapper">
      <div className="more-property-features">
        <ul>
          <li className="property-feature-item">Lot Area: 1,250 SQ FT</li>
          <li className="property-feature-item">Bed Rooms: {props.bed}</li>
          <li className="property-feature-item">Bath Rooms: {props.bath}</li>
          <li className="property-feature-item">Garage: {props.garage}</li>
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
      <div className="more-property-features">
        <ul>
          <li className="property-feature-item">Lot Area: 1,250 SQ FT</li>
          <li className="property-feature-item">Year Build: 2019</li>
          <li className="property-feature-item">Water</li>
          <li className="property-feature-item">Stores</li>
        </ul>
      </div>
    </div>
  );
}

export default Features;
