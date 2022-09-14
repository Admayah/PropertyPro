import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import Navbar from "../Navbar/Navbar";
import Footer from "../../components/footer/Footer";
import PropertiesInfo from "./PropertiesInfo";
import { useFetch } from "../../useFetch";
import 'react-toastify/dist/ReactToastify.css';
import "./propertiesdata.css"
import CustomFetch from "../../CustomFetch";
import { useNavigate, useSearchParams } from "react-router-dom";
import { PropertyFeature } from "../propertiesInput/propertyFeatures";

const filterByRoom = ["All", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

function AllPropertiesData() {

  let navigate = useNavigate();
  // const router = useHistory();
  // const { loading, datas } = useFetch()
  // const [page, setPage] = useState(0)
  const [loading, setLoading] = useState(false)
  const [properties, setProperties] = useState([])
  let [searchParams, setSearchParams] = useSearchParams()
  const [roomOption, selectRoomOption] = useState(['All'])
  const [query, setQuery] = useState("")

  const rooms = searchParams.get("rooms")

  // console.log(searchParams)

  console.log(rooms, 'rooms value')


  useEffect(() => {
    setLoading(true)
    const getProperties = async () => {
      // if(!rooms) {
      //   setSearchParams({rooms: 'All'})
      // }
      // setSearchParams(rooms = roomOption)
      const response = await axios.get(`${process.env.REACT_APP_BASEURL}/properties?rooms=${rooms}`);
      // ?page=${page}&limit=${limit}

      const { data } = response
      console.log(data)
      setProperties(data)
      // setDatas(paginate(data))
      setLoading(false)
    }
    getProperties()
  }, [searchParams])

  const handleChange = (e) => {
    setQuery(e.target.value)
    selectRoomOption(e.target.value)
    // console.log(e.target.value, 'hello')
    navigate(`/properties?rooms=${e.target.value}`)
    // router.push(`/properties?rooms=${e.target.value}`)


  }

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
      </div>
      {/* {!loading && (
          <div className='btn-containers'>
            <button className='prev-btn' onClick={prevPage}>
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
            <button className='next-btn' onClick={nextPage}>
              next
            </button>
          </div>
        )} */}
      <Footer />
    </>
  );
}

export default AllPropertiesData;
