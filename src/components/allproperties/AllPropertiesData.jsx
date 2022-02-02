import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../../components/footer/Footer";
import AllProperties from "./allproperties";
import "./propertiesdata.css";
import PropertiesInfo from "./PropertiesInfo";

function AllPropertiesData() {
  return (
    <>
      <Navbar />
      <div className="all-properties-container">
        <div className="properties-card-wrapper">
          {AllProperties.map((item) => (
            <PropertiesInfo
              key={item.id}
              id={item.id}
              img={item.img}
              purpose={item.purpose}
              title={item.title}
              location={item.location}
              price={item.price}
              no_of_beds={item.features.no_of_beds}
              no_of_baths={item.features.no_of_baths}
              no_of_garage={item.features.no_of_garage}
            />
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default AllPropertiesData;
