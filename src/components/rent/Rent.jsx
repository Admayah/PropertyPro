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
  const { loading, allData, datas } = useFetch();
  const [page, setPage] = useState(0)

  const [rentProps, setRentProps] = useState([]);

  // const salesPoperties = datas

console.log('all data', allData)



  useEffect(() => {
    if (loading) return
    const newData = allData.filter((item) => {
      console.log(item.purpose)
      return item.purpose === "Rent"
    }
     )
    console.log('this are sale properties only====>', newData)
    const newProps = paginate(newData)
    console.log(newProps)
    setRentProps(newProps[page])
  //  const newData = datas.filter((item) => item.purpose === 'sale')
  //   setSaleProps(newData[page])
  }, [loading, page]);


  const nextPage = () => {
    setPage((oldPage) => {
      let nextPage = oldPage + 1
      if (nextPage > rentProps.length - 1) {
        nextPage = 0
      }
      return nextPage
    })
  }
  const prevPage = () => {
    setPage((oldPage) => {
      let prevPage = oldPage - 1
      if (prevPage < 0) {
        prevPage = rentProps.length - 1
      }
      return prevPage
    })
  }

  const handlePage = (index) => {
    console.log(index)
    setPage(index)
  }
console.log('this are rent properties', rentProps)
  return (
    <>
     <Navbar />
      <ToastContainer />
      <div className="all-properties-container">
        <div className="properties-card-wrapper">
          {rentProps.map((item) => (
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
            {rentProps.map((item, index) => {
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
