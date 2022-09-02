import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../footer/Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useFetch } from "../../useFetch";
import PropertiesInfo from "../allproperties/PropertiesInfo";


function Sales() {
  const { loading, datas } = useFetch();
  const [page, setPage] = useState(0)

  const [saleProps, setSaleProps] = useState([]);

  const salesPoperties = saleProps.filter((item) => item.purpose === 'sale')



  useEffect(() => {
    if (loading) return
    setSaleProps(datas[page])
  }, [page]);


  const nextPage = () => {
    setPage((oldPage) => {
      let nextPage = oldPage + 1
      if (nextPage > saleProps.length - 1) {
        nextPage = 0
      }
      return nextPage
    })
  }
  const prevPage = () => {
    setPage((oldPage) => {
      let prevPage = oldPage - 1
      if (prevPage < 0) {
        prevPage = saleProps.length - 1
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
          {salesPoperties.map((item) => (
            <PropertiesInfo
              key={item.id}
              {...item}
            />
          ))}
        </div>
      </div>
      {!loading && (
        <div className='btn-container'>
          <button className='btn prev-btn' onClick={prevPage}>
            prev
          </button>
          {saleProps.map((item, index) => {
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
          <button className='btn next-btn' onClick={nextPage} >
            next
          </button>
        </div>
      )}
      <Footer />
    </>
  );
}

export default Sales;
