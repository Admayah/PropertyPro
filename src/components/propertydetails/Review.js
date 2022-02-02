import React from "react";
import "./propertydetails.css";

function Review() {
  return (
    <div className="review-container">
      <div className="email-agent-container">
        <span className="email-agent-header">
          <h4>More about Property</h4>
        </span>
        <div className="contact-agent-wrapper">
          <div className="input-container">
            <i className="fa fa-user form-icon"></i>
            <input className="field" type="text" placeholder="Username" />
          </div>
          <div className="input-container">
            <i className="fa fa-envelope form-icon"></i>
            <input className="field" type="tel" placeholder="Email" />
          </div>
          <div className="input-container">
            <i className="fa fa-phone form-icon"> </i>
            <input className="field" type="email" placeholder="Phone" />
          </div>
          <div className="input-container">
            <i class="fa fa-address-card form-icon"></i>
            <input
              className="field"
              type="email"
              placeholder="I am interested in 25, Tyler Ct."
            />
          </div>

          <button className="contact-agent-button">Email Agent</button>
        </div>
      </div>
    </div>
  );
}

export default Review;
