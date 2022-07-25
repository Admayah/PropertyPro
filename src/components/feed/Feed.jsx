import React, {useEffect, useState} from "react";
import { Link, useParams } from "react-router-dom";
import Properties from "./properties";
import "./feed.css";
import DashboardNav from "../../pages/dashboard/dashboardnav/DashboardNav";
import Sidebar from "../sidebar/Sidebar";
import { removeProperty } from "../../features/properties/adminProperties";
import { useDispatch } from "react-redux";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// const url = 'http://localhost:4000/v1/agent/properties';



function Feed() {

  const dispatch = useDispatch();
  const navigate = useNavigate()

    const [agentProperties, setAgentProperties] = useState([])

    const token = localStorage.getItem('token');
  let config = {
    "headers": {
     "Authorization": token,
    }
  }

    const getProperties = async () => {
      try {
        const response =  await axios.get(`${process.env.REACT_APP_BASEURL}/agent/properties`, config);
        const {data} =  response;
        setAgentProperties(data)
        toast('Successful')
        console.log(data)
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
    console.log(editProperty)
    navigate()
  }
 
  const deleteHandler =  async (id) => {
   
   const newAgentProperties = agentProperties.filter((item) => {
    return item.id !== id
   })
         try {
        const response = await axios.delete('http://localhost:4000/v1/agent/properties/' + id, config);
        console.log(response.data)
         setAgentProperties(newAgentProperties)
         toast('Deleted successfully')
        dispatch(removeProperty(id))
      } catch (error) {
        toast('something went wrong') 
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
            {agentProperties.map(({id, image_url, purpose, title, address, state, landrea, description,yearBuild, baths, rooms, store, garage, price}) => {
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
                          {rooms}
                        </a>
                      </li>
                      <li className="feature-item">
                        <a href="/" className="feature-item-link">
                          <span>
                            <i className="fa fa-bed property-feature"></i>
                          </span>
                          {baths}
                        </a>
                      </li>
                      <li className="feature-item">
                        <a href="/" className="feature-item-link">
                          <span>
                            <i className="fa fa-bed property-feature"></i>
                          </span>
                          {garage}
                        </a>
                      </li>
                      <li className="feature-item">
                        <a href="/" className="feature-item-link">
                          <span>
                            <i className="fa fa-bed property-feature"></i>
                          </span>
                          {store}
                        </a>
                      </li>
                    </ul>
                    <div className="property-price">
                      <span>{price}</span>
                      <Link to={`/edit-property/${id}`}><button className="btn edit-btn">EDIT</button></Link>
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
