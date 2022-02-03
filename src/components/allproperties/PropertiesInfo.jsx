import React from "react";
import { Link } from "react-router-dom";

function PropertiesInfo(props) {
  return (
    <>
      <div className="property-info" id={props.id}>
        <div className="property-info-image">
          {" "}
          <img src={props.img} alt="property-img" className="property-img" />
        </div>
        <button className="sale">{props.purpose}</button>

        <div className="property-details">
          <h3 className="property-title">{props.title}</h3>
          <p className="property-location">{props.location}</p>

          <ul className="property-features">
            <li className="feature-item">
              <a href="/" className="feature-item-link">
                <span>
                  <i className="fa fa-bed property-feature"></i>
                </span>
                {props.no_of_beds}
              </a>
            </li>
            <li className="featureItem">
              <a href="/" className="feature-item-link">
                <span>
                  <i className="fa fa-bed property-feature"></i>
                </span>
                {props.no_of_baths}
              </a>
            </li>
            <li class Name="featureItem">
              <a href="/" className="feature-item-link">
                <span>
                  <i className="fa fa-bed property-feature"></i>
                </span>
                {props.no_of_garage}
              </a>
            </li>
          </ul>
          <div className="agent-price-and-no">
            <span agent-price>{props.price}</span>
            <span className="agent-no">
              <i className="fa fa-whatsapp wb-color"></i> 09073645165
            </span>
          </div>
          <Link to={`/properties/${props.id}`}> Read More</Link>
        </div>
      </div>
    </>
  );
}

export default PropertiesInfo;
