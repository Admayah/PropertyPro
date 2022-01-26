import React from "react";
import Properties from "./properties";
import "./feed.css";
import DashboardNav from "../../pages/dashboard/dashboardnav/DashboardNav";
import Sidebar from "../sidebar/Sidebar";

function Feed() {
  return (
    <div className="my-properties-cards">
      <DashboardNav />
      <div className="my-properties-wrapper">
        <Sidebar />
        <div className="feed-container">
          <div class="feed-card-wrapper">
            {Properties.map((item) => {
              return (
                <div class="property-content">
                  <div className="property-image">
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
                      <li className="feature-item">
                        <a href="/" className="feature-item-link">
                          <span>
                            <i className="fa fa-bed property-feature"></i>
                          </span>
                          {item.features.no_of_baths}
                        </a>
                      </li>
                      <li className="feature-item">
                        <a href="/" className="feature-item-link">
                          <span>
                            <i className="fa fa-bed property-feature"></i>
                          </span>
                          {item.features.no_of_garage}
                        </a>
                      </li>
                    </ul>
                    <div className="property-price">
                      <span>{item.price}</span>
                      <button className="btn edit-btn">EDIT</button>
                      <button className="btn delete-btn">DELETE</button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feed;
