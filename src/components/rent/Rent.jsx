import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
// import AllRentProperties from "./rentData";
import Footer from "../footer/Footer";
// import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./rent.css";
import { useFetch } from "../../useFetch";
import paginate from "../../utils";
import PropertiesInfo from "../allproperties/PropertiesInfo";


function Rent() {
 const {loading, allData} = useFetch();
 const [page, setPage] = useState(0);

 const [rentProperties, setRentProperties] = useState([]);
 const [filterRent, setFilterRent] = useState([]);


 useEffect(() => {
  if (loading) return
  const rentData = allData.filter((item) => {
    return item.purpose === "Rent"
  })
  setFilterRent(rentData)
  console.log("this are rent data only", rentData)
  const newRentInfo = paginate(rentData)
  console.log('paginate rent info', newRentInfo)
  setRentProperties(newRentInfo[page])
 }, [loading, page]);

 const nextPage = () => {
  setPage((oldPage) => {
    let nextPage = oldPage + 1
    if (nextPage > filterRent.length - 1) {
      nextPage = 0;
    }
    return nextPage
  })
 };

 
 const prevPage = () => {
  setPage((oldPage) => {
    let prevPage = oldPage - 1
    if (nextPage > filterRent.length - 1) {
      nextPage = 0;
    }
    return prevPage;
  })
 };

 const handlePage = (index) => {
  setPage(index)
 }
  return (
    <>
     <Navbar />
      <ToastContainer />
      <div className="all-properties-container">
        <div className="properties-card-wrapper">
          {rentProperties.map((item) => (
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
            {filterRent.map((item, index) => {
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
     </>
  );
}

export default Rent;
