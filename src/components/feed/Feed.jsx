import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios'
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import Sidebar from "../sidebar/Sidebar";
import DashboardNav from "../../pages/dashboard/dashboardnav/DashboardNav";
// import EditProperty from "../editProperty/EditProperty";
import { addProperty, removeProperty } from "../../features/properties/adminProperties";
import 'react-toastify/dist/ReactToastify.css';
import "./feed.css";
import Button from "../Button/Button";
import Modal from "./Modal";
import Btn from "../Btn/Btn";


function Feed() {

  const dispatch = useDispatch();
  const navigate = useNavigate()

  // const [loading, setLoading] = useState(false)
  let [searchParams, setSearchParams] = useSearchParams()
  const [agentProperties, setAgentProperties] = useState([])
  const [openModal, setOpenModal] = useState(false)
  const [dataId, setDataId] = useState(null)
  const [limit, setLimit] = useState(2)
  const [page, setPage] = useState(1)
  const [pageIndex, setPageIndex] = useState(0);
  const [disable, setDisabled] = useState(false)
  const [disab, setDisab] = useState(false)
  const [check, setCheck] = useState([]);
  const [pageSizes, setPageSizes] = useState(null);
  const rooms = searchParams.get("rooms")
  const hello = [];

  const token = localStorage.getItem('token');
  let config = {
    "headers": {
      "Authorization": token
    }
  };

  const getProperties = async () => {
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
      const response = await axios.get(`${process.env.REACT_APP_BASEURL}/agent/properties?page=${page}&limit=${limit}`, config);
      const { data } = response;
      setAgentProperties(data)
      setCheck(data.length)

      // toast('Successful')
    } catch (error) {
      toast.error(`${error.response.data.message}`)
    }
  }


  useEffect(() => {
    getProperties();
  }, [searchParams, page]);



  // const editHandler = async (id) => {
  //   const editProperty = agentProperties.filter((property) => {
  //     return property.id === id;
  //   })
  // }
  // navigate()
  const deleteHandler = async (id) => {
    console.log(dataId, 'data id...')
    const newAgentProperties = agentProperties.filter((item) => {
      return item.id !== id
    })
    try {
      await axios.delete(`${process.env.REACT_APP_BASEURL}/agent/properties/${id}`, config);
      setAgentProperties(newAgentProperties)
      toast('Deleted successfully')
      dispatch(removeProperty(id))
      setOpenModal(false)
    } catch (error) {
      toast.error(`${error.response.data.message}`)
    }
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
  // if (agentProperties.length < 1) {
  //   return <div>You haven't post a property</div>
  // }
  console.log(hello)
  console.log(dataId, 'heyyyyyy')

  return (
    <div className="dashboard-wrapper">
      {/* {isModal && <Modal />} */}
      {/* <DashboardNav /> */}
      <ToastContainer />
      <Sidebar />
      <div className="main okay">

        {agentProperties.length === 0 && <div className="empty-container">
          <h3>You haven't post a property</h3>
          <Button className="empty-button" text="post a property" path="/post-property" />
          {/* <button><Link to="/post-property">post a property</Link></button> */}
        </div>
        }
        {
          agentProperties.length > 0 && <div className="feed-container">
            <div className="feed-card-wrapper">
              {agentProperties.map(({ id, image_url, title, no_of_rooms, no_of_bathrooms, no_of_garage, no_of_store, address, price, purpose }) => {
                return (
                  <>
                    <div className="property-content">
                      <div className="property-image">
                        <img src={image_url} alt="" className="property-img" />
                      </div>
                      <button className="sale">{purpose}</button>

                      <div className="property-details">
                        <h3 className="property-title">{title}</h3>
                        <p className="property-address">{address}</p>

                        <ul className="property-features">
                          <li className="feature-item">
                            <a href="/" className="feature-item-link">
                              <span>
                                <i className="fa fa-bed property-feature"></i>
                              </span>
                              {no_of_rooms} rooms
                            </a>
                          </li>
                          <li className="feature-item">
                            <a href="/" className="feature-item-link">
                              <span>
                                <i className="fa fa-bed property-feature"></i>
                              </span>
                              {no_of_bathrooms} baths
                            </a>
                          </li>
                          <li className="feature-item">
                            <a href="/" className="feature-item-link">
                              <span>
                                <i className="fa fa-bed property-feature"></i>
                              </span>
                              {no_of_garage} garage
                            </a>
                          </li>
                          <li className="feature-item">
                            <a href="/" className="feature-item-link">
                              <span>
                                <i className="fa fa-bed property-feature"></i>
                              </span>
                              {no_of_store} store
                            </a>
                          </li>
                        </ul>
                        <div className="property-price">
                          <span style={{ fontSize: '18px', color: '#1C3988' }}> ₦{price}</span>
                          {/* <Btn
                          value="delete"
                          className="delete-btn btns"
                          clickHandler={()=>{navigate(`/edit-property/${id}`)}} /> */}
                          <button className="btn edit-btns" onClick={() => {
                            navigate(`/edit-property/${id}`)
                          }}>EDIT</button>
                          <button className="btn delete-btn"
                            onClick={() => {
                              setDataId(id)
                              setOpenModal(true)
                            }}
                            style={{ backgroundColor: "red" }}

                          >DELETE</button>
                          {openModal && <Modal closeModal={setOpenModal} deleteItem={() => {
                            deleteHandler(dataId)
                          }
                          } />}
                        </div>
                      </div>
                    </div>

                  </>

                );
              })}
            </div>

          </div>
        }
        {agentProperties.length > 0 && (
          <div className='btn-containers'>
            <button className={disable ? 'prev-btn jax' : 'prev-btn'} onClick={prevPage} disabled={disable}>
              prev
            </button>
            {hello.map((item, index) => {
              console.log(index)

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
            <button className={disab ? 'next-btn jax' : 'next-btn'} onClick={nextPage} disabled={disab}>
              next
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Feed;


