import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import Navbar from "../Navbar/Navbar";
import Footer from "../../components/footer/Footer";
import PropertiesInfo from "./PropertiesInfo";
import 'react-toastify/dist/ReactToastify.css';
import "./propertiesdata.css";


const filterByRoom = ["All", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

function AllPropertiesData() {

  let navigate = useNavigate();
  const [loading, setLoading] = useState(false)
  const [properties, setProperties] = useState([])
  let [searchParams, setSearchParams] = useSearchParams()
  const [roomOption, selectRoomOption] = useState('All')
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)
  const [pageIndex, setPageIndex] = useState(0);
  const [disable, setDisabled] = useState(false)
  const [disab, setDisab] = useState(false)
  const [check, setCheck] = useState([]);
  const [pageSizes, setPageSizes] = useState(null);
  const rooms = searchParams.get("rooms");

  const hello = [];

  const hey = limit * page - 9;
  const ryt = limit * page;
  console.log(hey, ryt, 'hey.....')
  
  useEffect(() => {
    setLoading(true)
    const getProperties = async () => {
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
      const response = await axios.get(`${process.env.REACT_APP_BASEURL}/properties?rooms=${roomOption}&page=${page}&limit=${limit}`);
      const { data } = response
      console.log(data)
      setProperties(data.result)
      setCheck(data.dataLength)
      setPageSizes(data.totalPage)
      setLoading(false)
    }
    getProperties()
  }, [searchParams, page, roomOption])

  const handleChange = (e) => {
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

  if (loading) {
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
          {properties.map((item) => (
            <PropertiesInfo
              key={item.id}
              {...item}
            />
          ))}
        </div>
        {!loading && (
        <div className='paginate-container'>
      {hey} to {ryt} of {check}
<div className="btn-containers">
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
          <button className ={ disab ? 'next-btn jax' : 'next-btn' } onClick={nextPage} disabled={disab}>
            next
          </button>
</div>
          
        </div>
      )}
      </div>
     
      <Footer />
    </>
  );
}

export default AllPropertiesData;



  // console.log(hello.length, 'hello you')
  // console.log('query value====>', query)
  //   useEffect(()=> {
  // const params = new URLSearchParams()
  // if (query) {
  //   console.log('this is the query', query)
  //   params.append("rooms", query
  //   )
  // } else {
  //   params.delete("rooms")
  // }
  // navigate({search: params.toString()})
  //   }, [query, navigate])
  // console.log('this is room option value', roomOption)
  // useEffect(() => {
  //   if (loading) return
  //   setProperties(datas[page])
  // }, [loading, page])

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


  // const {loading, datas} = useFetch();
  // console.log('this is the data', datas[0])
  // // const {loadings, currentPost} = CustomFetch();
  //   const [page, setPage] = useState(1)


  // useEffect(()=>{
  //   const fetchData = async () => {
  //     const newData = datas[page]
  //     setProperties(newData)
  //     console.log('this are the properties', properties)
  //   }
  //   fetchData()
  // }, [])

  // console.log(currentPost)

  //   const newData = () => { 
  //     try {
  //       const check = datas[page]
  //       setProperties(check)
  //     } catch (error) {fa
  //       console.log(error)
  //     }
  //   }
  //   useLayoutEffect(() => {
  // newData()
  //   }, []);