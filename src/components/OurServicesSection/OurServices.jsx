import React from "react";
import "./ourservices.css";
import OurServicesFeatures from "./OurServicesFeatures";

export default function OurServices() {
  return (
    <div className="our-services-container">
      <div className="our-services-img">
        <img src="/images/representation.jpg" alt="services" className="photo" width={250} height={250}/>
      </div>
      <div className="our-service-info">
        <h5 className="our-service-title">who we are</h5>
        <h3 className="our-service-header">We believe in integrity, commitment to excellence, a professional attitude, and personalized care.</h3>
        <p className="our-service-text">Whether you are a property owner, tenant, or buyer, we value your business and will provide you with the individual attention and service you deserve. We believe in a strict Code of Ethics. We believe in integrity, commitment to excellence, a professional attitude, and personalized care.</p>
        <button className="our-service-btn">more about us</button>
      </div>
    </div>
    // <div className="our-services-container">
    //   <div className="our-services-wrapper">
    //     <div className="services-header">
    //       <h2 className="service-header">references</h2>
    //       <p className="service-header-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus rutrum donec ultricies cras id ac.</p>
    //     </div>
    //     <div className="service-offers">
    //       {OurServicesFeatures.map((services, index) => {
    //         return (
    //           <div className="service-offer" key={index}>
    //             {/* <h3 className="service-text"><span className="service-icon">{services.icon}</span>{services.info}</h3> */}
    //             <div className="service-icon"><i className={services.icon} aria-hidden="true"></i></div>
    //             <div className="service-content">
    //               <h3 className="service-header">{services.header}</h3>
    //               <p className="service-info">{services.info}</p>
    //             </div>
    //           </div>
    //         );
    //       })}
    //     </div>
    //   </div>
    // </div>
  );
}
