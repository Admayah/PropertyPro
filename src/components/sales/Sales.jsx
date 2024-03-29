import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import Footer from "../footer/Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useFetch } from "../../useFetch";
import paginate from "../../utils";
import PropertiesInfo from "../allproperties/PropertiesInfo";

const filterByRoom = ["All", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

function Sales() {

  const navigate = useNavigate()
  
const [loading, setLoading] = useState(false)
  const [saleProps, setSaleProps] = useState([]);
  let [searchParams, setSearchParams] = useSearchParams()
  const [roomOption, selectRoomOption] = useState('All')
  const [limit, setLimit] = useState(2)
  const [page, setPage] = useState(1)
  const [pageIndex, setPageIndex] = useState(0);
  const [disable, setDisabled] = useState(false)
  const [disab, setDisab] = useState(false)
  const [check, setCheck] = useState([]);
  const [pageSizes, setPageSizes] = useState(null);
  const rooms = searchParams.get("rooms")
  const hello = [];
  const pur = "Sale"

const getSaleProperties = async () => {
  setLoading(true)
  try {
    if (pageIndex === 0) {
      setDisabled(true)
    } else {
      setDisabled(false)

    }
    if (pageIndex + 1 === pageSizes) {
      setDisab(true)
    } else {
      setDisab(false)
    }
    const response = await axios.get(`${process.env.REACT_APP_BASEURL}/properties?purpose=${pur}&rooms=${roomOption}&page=${page}&limit=${limit}`);
    const { data } = response
    console.log(data.result, 'lllll')
    setSaleProps(data.result)
    setCheck(data.dataLength)
    setPageSizes(data.totalPage)
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
  }, [searchParams, page, roomOption]);


  const handleChange = async (e) => {
    selectRoomOption(e.target.value)
  }

  for (let i = 1; i <= Math.ceil(check / limit); i++) {
    hello.push(i)
  }


  const nextPage = async () => {
    setPage((currentPage) => currentPage + 1)
    setPageIndex(pageIndex + 1)

  }
  const prevPage = async () => {
    setPage((currentPage) => currentPage - 1)
    setPageIndex(pageIndex - 1)
  }


  const handlePage = (index) => {
    setPage(index + 1)
    setPageIndex(index)
  }
if(loading) {
  return <div style={{ fontSize: '24px', textAlign: 'center' }}>
  Loading....
</div>
}
  return (
    <>
      <Navbar />
      <ToastContainer />
      <div className="all-properties-container">
      <div className="dropdown__wrapper">
          <div className="dropdown">
            <label
              className="room__label"
            >By Bedrooms</label>
            <select name="bedrooms" id="bedrooms" className="room__select"
              value={roomOption}
              onChange={handleChange}
            >
              {filterByRoom.map((num) => (
                <option
                  value={num}
                >{num}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="properties-card-wrapper">
          {saleProps.map((item) => (
            <PropertiesInfo
              key={item.id}
              {...item}
            />
          ))}
        </div>
      {!loading && (
        <div className='btn-containers'>
          <button className={disable ? 'prev-btn jax' : 'prev-btn'} onClick={prevPage} disabled={disable}>
            prev
          </button>
          {hello.map((item, index) => {
            // console.log(index, "index====>")
            return (
              <button
                key={index}
                className={`page-btn ${index === pageIndex ? 'active-btn' : null}`}
                onClick={() => handlePage(index)}
              >
                {index + 1}
              </button>
            )
          })}
          <button className={ disab ? 'next-btn jax' : 'next-btn' } onClick={nextPage} disabled={disab}>
            next
          </button>
        </div>
      )}
      </div>

      <Footer />
    </>
  );
}

export default Sales;
