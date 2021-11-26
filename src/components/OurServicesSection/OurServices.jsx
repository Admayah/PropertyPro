import React from "react";
import "./ourservices.css";
import OurServicesFeatures from "./OurServicesFeatures";

export default function OurServices() {
  return (
    <div className="ourServicesContainer">
      <div className="ourServicesWrapper">
        <div className="servicesHeader">
          <h2 className="servicesHeaderText">WHY CHOOSE US</h2>
        </div>
        <div className="serviceOffers">
          {OurServicesFeatures.map((services) => {
            return (
              <div className="serviceOffer">
                <div className="serviceIcon">{services.icon}</div>
                <div className="serviceContent">
                  <h3 className="serviceHeader">{services.header}</h3>
                  <p className="serviceInfo">{services.info}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
