import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Sidebar from "../sidebar/Sidebar";
import DashboardNav from "../../pages/dashboard/dashboardnav/DashboardNav";
// import EditProperty from "../editProperty/EditProperty";
import { addProperty, removeProperty } from "../../features/properties/adminProperties";
import 'react-toastify/dist/ReactToastify.css';
import "./feed.css";
import Button from "../Button/Button";
import Modal from "./Modal";


function Feed({ data }) {

  const dispatch = useDispatch();
  const navigate = useNavigate()

  const [agentProperties, setAgentProperties] = useState([])
  const [openModal, setOpenModal] = useState(false)

  const token = localStorage.getItem('token');
  let config = {
    "headers": {
      "Authorization": token
    }
  };

  const getProperties = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BASEURL}/agent/properties`, config);
      const { data } = response;
      setAgentProperties(data)
      
      // toast('Successful')
    } catch (error) {
      toast.error(`${error.response.data.message}`)
    }
  }


  useEffect(() => {
    getProperties()
  }, [])

   

  // const editHandler = async (id) => {
  //   const editProperty = agentProperties.filter((property) => {
  //     return property.id === id;
  //   })
  // }
  // navigate()
  const deleteHandler = async (id) => {
    const newAgentProperties = agentProperties.filter((item) => {
      return item.id !== id
    })
    try {
      await axios.delete(`${process.env.REACT_APP_BASEURL}/agent/properties/${id}`, config);
      setAgentProperties(newAgentProperties)
      toast('Deleted successfully')
      dispatch(removeProperty(id))
    } catch (error) {
      toast.error(`${error.response.data.message}`)
    }
  }
  // if (agentProperties.length < 1) {
  //   return <div>You haven't post a property</div>
  // }

  return (
    <div className="my-properties-cards">
      {/* {isModal && <Modal />} */}
      <DashboardNav />
      <ToastContainer />
      <div className="my-properties-wrapper">
        <Sidebar />
        {agentProperties.length === 0 && <div className="empty-container">
          <h3>You haven't post a property</h3>
          <Button className="empty-button" text="post a property" path="/post-property" />
          {/* <button><Link to="/post-property">post a property</Link></button> */}
          </div>
          }
        <div className="feed-container">
          <div className="feed-card-wrapper">
            {agentProperties.map(({ id, image_url, title, no_of_rooms, no_of_bathrooms, no_of_garage, no_of_store, address, price, purpose }) => {
              return (
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
                      <span> ₦{price}</span>
                      <button className="btn edit-btn" onClick={() => {
                        navigate(`/edit-property/${id}`)
                      }}>EDIT</button>
                      <button className="btn delete-btn" 
                      onClick={()=>{
                        setOpenModal(true)
                      }}
                      // onClick={() => { deleteHandler(id) }}
                      
                      >DELETE</button>
                      {openModal && <Modal closeModal={setOpenModal} deleteItem={deleteHandler(id)}/>}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feed;
