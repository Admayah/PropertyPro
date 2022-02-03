import React from "react";
import "./propertydetails.css";

function Review() {
  const inputArr = [
    {
      type: "text",
      placeholder: "fullname",
      nameclass: "fa fa-user form-icon",
    },
    {
      type: "email",
      placeholder: "Email",
      nameclass: "fa fa-envelope form-icon",
    },
    {
      type: "tel",
      placeholder: "Phone",
      nameclass: "fa fa-phone form-icon",
    },
    {
      type: "text",
      placeholder: "I am interested in 25, Tyler Ct.",
      nameclass: "fa fa-address-card form-icon",
    },
  ];
  return (
    <div className="review-container">
      <div className="email-agent-container">
        <span className="email-agent-header">
          <h4>More about Property</h4>
        </span>
        <div className="contact-agent-wrapper">
          {inputArr.map((item, index) => (
            <div className="input-container" key={index}>
              <i className={item.nameclass}></i>
              <input
                className="field"
                type={item.type}
                placeholder={item.placeholder}
              />
            </div>
          ))}
          ;<button className="contact-agent-button">Email Agent</button>
        </div>
      </div>
    </div>
  );
}

export default Review;
