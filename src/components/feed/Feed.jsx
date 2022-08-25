import React, {useEffect, useState} from "react";
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Sidebar from "../sidebar/Sidebar";
import DashboardNav from "../../pages/dashboard/dashboardnav/DashboardNav";
import EditProperty from "../editProperty/EditProperty";
// import { removeProperty } from "../../features/properties/adminProperties";
import 'react-toastify/dist/ReactToastify.css';
import "./feed.css";


 function Feed({data}) {

  const dispatch = useDispatch();
  const navigate = useNavigate()

    const [agentProperties, setAgentProperties] = useState([])

    const token = localStorage.getItem('token');
  let config = {
    "headers": {
     "Authorization": token
    }
  };

    const getProperties = async () => {
      try {
        const response =  await axios.get(`${process.env.REACT_APP_BASEURL}/agent/properties`, config);
        const {data} =  response;
        setAgentProperties(data)
        toast('Successful')
      } catch (error) {
        toast.error('Something went wrong')
      }
  }
  

  useEffect(() => {
      getProperties()
  }, [])


  const editHandler = async (id) => {
    const editProperty = agentProperties.filter((property) => {
      return property.id === id;
    })
  }
    // navigate()
   const deleteHandler = async (id) => {
   const newAgentProperties = agentProperties.filter((item) => {
    return item.id !== id
   })
         try {
        const response = await axios.delete(`${process.env.REACT_APP_BASEURL}/agent/properties/${id}` , config);
         setAgentProperties(newAgentProperties)
         toast('Deleted successfully')
        // dispatch(removeProperty(id))
      } catch (error) {
        toast.error(`${error.response.data.message}`)
     }
  }

  return (
    <div className="my-properties-cards">
      <DashboardNav />
      <ToastContainer />
      <div className="my-properties-wrapper">
        <Sidebar />
        <div className="feed-container">
          <div className="feed-card-wrapper">
            {agentProperties.map(({id, image_url, title, no_of_rooms, no_of_bathrooms, no_of_garage, no_of_store, address, price, purpose}) => {
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
                      <button className="btn edit-btn" onClick={()=>{
                        navigate(`/edit-property/${id}`)
                      }}>EDIT</button>
                      <button className="btn delete-btn"  onClick={()=>{deleteHandler(id)}}>DELETE</button>
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
