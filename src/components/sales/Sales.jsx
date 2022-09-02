import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../footer/Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useFetch } from "../../useFetch";
import paginate from "../../utils";
import PropertiesInfo from "../allproperties/PropertiesInfo";


function Sales() {
  const { loading, allData, datas } = useFetch();
  const [page, setPage] = useState(0)

  const [saleProps, setSaleProps] = useState([]);
  const [filterSale, setFilterSale] = useState([]);

  // const salesPoperties = datas

console.log('all data', allData)



  useEffect(() => {
    if (loading) return
    const newData = allData.filter((item) => {
      console.log(item.purpose)
      return item.purpose === "Sale"
    }
     )
     setFilterSale(newData)
    console.log('this are sale properties only====>', newData)
    // const newProps = 
    // console.log(newProps)
    setSaleProps(paginate(newData)[page])
    console.log(saleProps)
  //  const newData = datas.filter((item) => item.purpose === 'sale')
  //   setSaleProps(newData[page])
  }, [loading, page]);


  const nextPage = () => {
    setPage((oldPage) => {
      let nextPage = oldPage + 1
      if (nextPage > filterSale.length - 1) {
        nextPage = 0
      }
      return nextPage
    })
  }
  const prevPage = () => {
    setPage((oldPage) => {
      let prevPage = oldPage - 1
      if (prevPage < 0) {
        prevPage = filterSale.length - 1
      }
      return prevPage
    })
  }

  const handlePage = (index) => {
    setPage(index)
  }
console.log('this are sales properties', saleProps)
  return (
    <>
      <Navbar />
      <ToastContainer />
      <div className="all-properties-container">
        <div className="properties-card-wrapper">
          {saleProps.map((item) => (
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
          {filterSale.map((item, index) => {
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
