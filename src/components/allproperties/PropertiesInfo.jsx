import React from "react";
import { Link } from "react-router-dom";

function PropertiesInfo(props) {
  const {image_url, title, no_of_rooms, no_of_bathrooms, no_of_garage, address, price, purpose} = props;
  return (
    <>
      <div className="property-info">
        <div className="property-info-image">
          <img src={image_url} alt="property-img" className="property-img" />
        </div>
        <button className="sale">{purpose}</button>
        <div className="property-details">
          <h3 className="property-title">{title}</h3>
          <p className="property-location">{address}</p>

          <ul className="property-features">
            <li className="feature-item">
              <a href="/" className="feature-item-link">
                <span>
                  <i className="fa fa-bed property-feature"></i>
                </span>
                {no_of_rooms}rooms
              </a>
            </li>
            <li className="featureItem">
              <a href="/" className="feature-item-link">
                <span>
                  <i className="fa fa-bed property-feature"></i>
                </span>
                {no_of_bathrooms}baths
              </a>
            </li>
            <li className="featureItem">
              <a href="/" className="feature-item-link">
                <span>
                  <i className="fa fa-bed property-feature"></i>
                </span>
                {no_of_garage}garage
              </a>
            </li>
          </ul>
          <div className="agent-price-and-no">
            <span className='agent-price'>{price}</span>
            <span className="agent-no">
              <i className="fa fa-whatsapp wb-color"></i> 09073645165
            </span>
          </div>
          <Link to={`/properties/${props.id}`} style={{color: 'blue'}}> Read More</Link>
        </div>
      </div>
    </>
  );
}

export default PropertiesInfo;
