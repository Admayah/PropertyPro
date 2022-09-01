import React, { useState, useLayoutEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import Navbar from "../Navbar/Navbar";
import Footer from "../../components/footer/Footer";
import PropertiesInfo from "./PropertiesInfo";
import { useFetch } from "../../useFetch";
import 'react-toastify/dist/ReactToastify.css';
import "./propertiesdata.css"
import CustomFetch from "../../CustomFetch";


function AllPropertiesData() {
const {loading, datas} = useFetch();
console.log(datas)
// const {loadings, currentPost} = CustomFetch();
  // const [page, setPage] = useState(1)
  // const [properties, setProperties] = useState([])

  // console.log(currentPost)

//   const newData = () => { 
//     try {
//       const check = datas[page]
//       setProperties(check)
//     } catch (error) {
//       console.log(error)
//     }
//   }
//   useLayoutEffect(() => {
// newData()
//   }, []);

  // const nextPage = () => {
  //   setPage((oldPage) => {
  //     let nextPage = oldPage + 1
  //     if (nextPage > datas.length - 1) {
  //       nextPage = 0
  //     }
  //     return nextPage
  //   })
  // }
  // const prevPage = () => {
  //   setPage((oldPage) => {
  //     let prevPage = oldPage - 1
  //     if (prevPage < 0) {
  //       prevPage = datas.length - 1
  //     }
  //     return prevPage
  //   })
  // }

  // const handlePage = (index) => {
  //   setPage(index)
  // }
if (loading) {
  return <div style={{fontSize: '24px', textAlign: 'center'}}>
    Loading....
    </div>
}
  return (
    <>
      <Navbar />
      <ToastContainer />
      <div className="all-properties-container">
        <div className="properties-card-wrapper">
          {datas.map((item) => (
            <PropertiesInfo
              key={item.id}
              {...item}
            />
          ))}
        </div>
      </div>
      {/* {!loading && (
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
        )} */}
      <Footer />
    </>
  );
}

export default AllPropertiesData;
