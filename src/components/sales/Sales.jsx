import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../footer/Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useFetch } from "../../useFetch";
import paginate from "../../utils";
import PropertiesInfo from "../allproperties/PropertiesInfo";


function Sales() {
  // const { loading, allData, datas } = useFetch();
  // const [page, setPage] = useState(0)
const [loading, setLoading] = useState(false)
  const [saleProps, setSaleProps] = useState([]);
  const [filterSale, setFilterSale] = useState([]);

  // const salesPoperties = datas

// console.log('all data', allData)

const getSaleProperties = async () => {
  setLoading(true)
  try {
    const response = await axios.get(`${process.env.REACT_APP_BASEURL}/properties`)
    const {data} = response
    setSaleProps(data)
  const  newProps = setSaleProps.filter((item) => item.purpose === 'Sale')
  setFilterSale(newProps)
  setLoading(false)
  } catch (error) {
    setLoading(false)

    console.log(error)
  }

 }



  useEffect(() => {
    getSaleProperties()
    // if (loading) return
    // const newData = allData.filter((item) => {
    //   console.log(item.purpose)
    //   return item.purpose === "Sale"
    // }
    //  )
     
    // console.log('this are sale properties only====>', newData)
    // const newProps = 
    // console.log(newProps)
    // setSaleProps(paginate(newData))
    // setFilterSale(saleProps[page])
    // console.log(saleProps)
  //  const newData = datas.filter((item) => item.purpose === 'sale')
  //   setSaleProps(newData[page])
  }, []);


//   const nextPage = () => {
//     setPage((oldPage) => {
//       let nextPage = oldPage + 1
//       if (nextPage > saleProps.length - 1) {
//         nextPage = 0
//       }
//       return nextPage
//     })
//   }
//   const prevPage = () => {
//     setPage((oldPage) => {
//       let prevPage = oldPage - 1
//       if (prevPage < 0) {
//         prevPage = filterSale.length - 1
//       }
//       return prevPage
//     })
//   }

//   const handlePage = (index) => {
//     setPage(index)
//   }
// console.log('this are sales properties', saleProps)
if(loading) {
  <>Loading.....</>
}
  return (
    <>
      <Navbar />
      <ToastContainer />
      <div className="all-properties-container">
        <div className="properties-card-wrapper">
          {filterSale.map((item) => (
            <PropertiesInfo
              key={item.id}
              {...item}
            />
          ))}
        </div>
      </div>
      {/* {!loading && (
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
      )} */}
      <Footer />
    </>
  );
}

export default Sales;
