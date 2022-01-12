import React from "react";
import Navbar from "../Navbar/Navbar";
import AllRentProperties from "./rentData";
import Footer from "../footer/Footer";

import "./sales.css";

function Rent() {
  return (
    <>
      <Navbar />
      <div className="all-properties-container">
        <div class="properties-card-wrapper">
          {AllRentProperties.map((item) => (
            <div class="property-info">
              <div className="property-info-image">
                {" "}
                <img src={item.img} alt="" className="property-img" />
              </div>
              <button className="sale">{item.purpose}</button>

              <div className="property-details">
                <h3 className="property-title">{item.title}</h3>
                <p className="property-location">{item.location}</p>

                <ul className="property-features">
                  <li className="feature-item">
                    <a href="/" className="feature-item-link">
                      <span>
                        <i className="fa fa-bed property-feature"></i>
                      </span>
                      {item.features.no_of_beds}
                    </a>
                  </li>
                  <li className="featureItem">
                    <a href="/" className="feature-item-link">
                      <span>
                        <i className="fa fa-bed property-feature"></i>
                      </span>
                      {item.features.no_of_baths}
                    </a>
                  </li>
                  <li className="featureItem">
                    <a href="/" className="feature-item-link">
                      <span>
                        <i className="fa fa-bed property-feature"></i>
                      </span>
                      {item.features.no_of_garage}
                    </a>
                  </li>
                </ul>
                <div className="agent-price-and-no">
                  <span agent-price>{item.price}</span>
                  <span className="agent-no">
                    <i className="fa fa-whatsapp wb-color"></i> 09073645165
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Rent;
