import React from "react";
import "./ourservices.css";
import OurServicesFeatures from "./OurServicesFeatures";

export default function OurServices() {
  return (
    <div className="our-services-container">
      <div className="our-services-wrapper">
        <div className="services-header">
          <h2 className="services-header-text">WHY CHOOSE US</h2>
        </div>
        <div className="service-offers">
          {OurServicesFeatures.map((services) => {
            return (
              <div className="service-offer">
                <div className="service-icon">{services.icon}</div>
                <div className="service-content">
                  <h3 className="service-header">{services.header}</h3>
                  <p className="service-info">{services.info}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
