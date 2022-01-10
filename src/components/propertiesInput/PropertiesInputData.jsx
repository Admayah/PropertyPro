import React from "react";
import { PropertyFeature } from "./propertyFeatures";
import DashboardNav from "../../pages/dashboard/dashboardnav/DashboardNav";
import Footer from "../footer/Footer";
import Sidebar from "../sidebar/Sidebar";
import "./propertiesInput.css";

export default function PropertiesInputData() {
  return (
    <div className="properties-container">
      <DashboardNav />
      <div className="properties-wrap">
        <Sidebar />
        <div className="properties-input-container">
          <div className="properties-input-wrapper">
            <div className="properties-header">Add New Property</div>
              <div className="properties-content-wrapper">
                <div className="property-data-input-field">
                  <input
                    type="text"
                    className="property-data"
                    placeholder="Title"
                  />
                </div>
                <div className="property-data-input-field">
                  <input
                    type="text"
                    className="property-data"
                    placeholder="Type"
                  />
                </div>
                <div className="property-data-input-field">
                  <select
                    name="purpose"
                    id="choices"
                    className="property-option">
                    <option value="" disabled selected hidden>
                      Choose property option
                    </option>
                    <option value="rent">FOR RENT</option>
                    <option value="sale">FOR SALE</option>
                  </select>
                </div>
                <div className="property-data-input-field">
                  <select
                    name="purpose"
                    id="choices"
                    className="property-option">
                    <option value="" disabled selected hidden>
                      Bedrooms
                    </option>
                    {PropertyFeature.map((feature) => (
                      <option value="feature">{feature}</option>
                    ))}
                  </select>
                </div>
                <div className="property-data-input-field">
                  <select
                    name="purpose"
                    id="choices"
                    className="property-option">
                    <option value="" disabled selected hidden>
                      Bathroom
                    </option>
                    {PropertyFeature.map((feature) => (
                      <option value="feature">{feature}</option>
                    ))}
                  </select>
                </div>
                <div className="property-data-input-field">
                  <select
                    name="purpose"
                    id="choices"
                    className="property-option">
                    <option value="" disabled selected hidden>
                      Garage
                    </option>
                    {PropertyFeature.map((feature) => (
                      <option value="feature">{feature}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="properties-content-wrapper">
                <div className="property-location">
                  <div className="property-location-header">Location</div>
                  <div className="property-data-input-field">
                    <input
                      type="text"
                      className="property-data"
                      placeholder="State"
                    />
                  </div>
                  <div className="property-data-input-field">
                    <input
                      type="text"
                      className="property-data"
                      placeholder="Street / Estate / Neighbourhood"
                    />
                  </div>
                </div>
              </div>
              <div className="properties-content-wrapper">
                <div className="property-location">
                  <div>Price</div>
                  <div className="property-data-input-field">
                    <input
                      type="text"
                      className="property-data"
                      placeholder="Price"
                    />
                  </div>
                  <div className="property-data-input-field">
                    <select
                      name="purpose"
                      id="choices"
                      className="property-option">
                      <option value="" disabled selected hidden>
                        Select Denomination
                      </option>
                      <option value="rent">Naira</option>
                      <option value="sale">Dollar</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="properties-content-wrapper">
                <div className="property-location">
                  <div className="property-location-header">Price</div>
                  <div className="property-data-input-field">
                    <input
                      type="text"
                      className="property-data"
                      placeholder="Price"
                    />
                  </div>
                  <div className="property-data-input-field">
                    <select
                      name="purpose"
                      id="choices"
                      className="property-option">
                      <option value="" disabled selected hidden>
                        Select Denomination
                      </option>
                      <option value="rent">Naira</option>
                      <option value="sale">Dollar</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="properties-content-wrapper">
                <div className="property-location">
                  <div className="property-location-header">
                    Property Description
                  </div>
                  <div className="property-data-input-fields">
                    <textarea
                      name="property-description"
                      id=""
                      cols="50"
                      rows="10"
                      className="property-desc"
                      placeholder="property description"></textarea>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
