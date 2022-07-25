import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import AllRentProperties from "./rentData";
import Footer from "../footer/Footer";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./rent.css";
import { useFetch } from "../../useFetch";
import PropertiesInfo from "../allproperties/PropertiesInfo";


function Rent() {
  const {loading, datas} = useFetch();
  const [page, setPage] = useState(0)
  // const [properties, setProperties] = useState([])

  const [rentProps, setRentProps] = useState([]);

  // const getRentProperties = async () => {
  //   try {
  //     const response = await axios.get(`${process.env.REACT_APP_BASEURL}/properties`)
  //     console.log(response)
  //     const { data } = response;
  //     console.log(data)
  //     setRentProps(data)
  //     toast('Property is successfully created')
  //   } catch (error) {
  //     toast.error('Something went wrong') 
  //   }
  // };

  // useEffect(() => {
  //   getRentProperties()
  // }, []);

  // console.log(rentProps)

 const rentPoperties = rentProps.filter((item) => item.purpose === 'rent')
//  console.log(rentPoperties);



 useEffect(() => {
  if (loading) return
 setRentProps(datas[page])
}, [page]);


const nextPage = () => {
  setPage((oldPage) => {
    let nextPage = oldPage + 1
    if (nextPage > datas.length - 1) {
      nextPage = 0
    }
    return nextPage
  })
}
const prevPage = () => {
  setPage((oldPage) => {
    let prevPage = oldPage - 1
    if (prevPage < 0) {
      prevPage = datas.length - 1
    }
    return prevPage
  })
}

const handlePage = (index) => {
  setPage(index)
}

  return (
    <>
     <Navbar />
      <ToastContainer />
      <div className="all-properties-container">
        <div className="properties-card-wrapper">
          {rentPoperties.map((item) => (
            <PropertiesInfo
              key={item.id}
              {...item}
            />
          ))}
        </div>
      </div>
      {!loading && (
          <div className='btn-container'>
            <button className='btn prev-btn' onClick={prevPage} style={{backgroundColor: 'crimson', color: 'black'}}>
              prev
            </button>
            {datas.map((item, index) => {
              return (
                <button
                  key={index}
                  className={`page-btn ${index === page ? 'active-btn' : null}`}
                  onClick={() => handlePage(index)}
                >
                  {index + 1}
                </button>
              )
            })}
            <button className='btn next-btn' onClick={nextPage} style={{backgroundColor: 'crimson', color: 'black'}}>
              next
            </button>
          </div>
        )}
      <Footer />
      {/* <Navbar />
      <div className="all-properties-container">
        <div className="properties-card-wrapper">
          {rentPoperties.map((item, index) => {
            return (
<>
<div className="property-info" key={index}>
              <div className="property-info-image">
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
                      {item.no_of_beds}
                    </a>
                  </li>
                  <li className="featureItem">
                    <a href="/" className="feature-item-link">
                      <span>
                        <i className="fa fa-bed property-feature"></i>
                      </span>
                      {item.no_of_baths}
                    </a>
                  </li>
                  <li className="featureItem">
                    <a href="/" className="feature-item-link">
                      <span>
                        <i className="fa fa-bed property-feature"></i>
                      </span>
                      {item.no_of_garage}
                    </a>
                  </li>
                </ul>
                <div className="agent-price-and-no">
                  <span className= 'agent-price'>{item.price}</span>
                  <span className="agent-no">
                    <i className="fa fa-whatsapp wb-color"></i> 09073645165
                  </span>
                </div>
              </div>
            </div>
</>
            )
          }

          )}
        </div>
      </div>
      <Footer /> */}
    </>
  );
}

export default Rent;
