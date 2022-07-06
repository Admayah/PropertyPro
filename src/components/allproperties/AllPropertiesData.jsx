import React, {useState, useEffect} from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../../components/footer/Footer";
import AllProperties from "./allproperties";
import "./propertiesdata.css";
import PropertiesInfo from "./PropertiesInfo";
import axios from 'axios'
import { useSelector } from "react-redux";

const url = 'http://localhost:4000/v1/properties'

function AllPropertiesData() {

//  const {propertyItems} = useSelector((store) => store.properties)
//  console.log(propertyItems)

  const [properties, setProperties] = useState([])

  const getProperties = async () => {
    const response =  await axios.get(url)
    const {data} = response;
    console.log('this is the array of all properties', data);
    setProperties(data)
  }

  useEffect(() => {
      // setProperties(AllProperties)
      getProperties()
  }, [])
  
  
//  if (propertyItems < 1) {
//   return <section>properties page is empty</section>
//  }

  return (
    <>
      <Navbar />
      <div className="all-properties-container">
        <div className="properties-card-wrapper">
          {properties.map((item) => (
            <PropertiesInfo
              key={item.id}
              {...item}
              {...item.features}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AllPropertiesData;
