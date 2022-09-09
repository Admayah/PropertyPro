import React from "react";
import jwt_decode from "jwt-decode";

import Sidebar from "../../components/sidebar/Sidebar";
import "./dashboard.css";
import { FaRegAddressCard, FaLayerGroup, FaRegUser } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";


export default function Dashboard() {
  const getToken = localStorage.getItem("token")
  const decodedToken = jwt_decode(getToken)
  const { newUser } = decodedToken

  return (
    <div className="dashboard-wrapper">
      <Sidebar />
      <main class="main">
        <div className="main-header">
          <div className="main-header_container">
            <div className="main-header__wrapper">
              <span className="main-header__heading">Hello {newUser.first_name}</span>
              <div className="main-header__list">
                <a href="#">
                  <span className="main-header__text">
                    Messages
                  </span>
                </a>
              </div>
            </div>
            <div className="main-header__info">
              <div className="main-header_enquiry">
                <a href="#">
                  <span className="main-header__text">
                    Enquires
                  </span>
                </a>
              </div>
            </div>



          </div>
        </div>
        <div className="main-overview">
          <div className="overviewcard">
            <div className="overviewcard__icon">
              <FaLayerGroup size={50} color="#1C3988" />
            </div>
            <div className="overviewcard__info">Properties</div>
          </div>
          <div className="overviewcard">
            <div className="overviewcard__icon">
              <FaRegAddressCard size={50} color="#1C3988" />
            </div>
            <div className="overviewcard__info">Subscription</div>
          </div>
          <div className="overviewcard">
            <div className="overviewcard__icon">
              <FaRegUser size={50} color="#1C3988" />
            </div>
            <div className="overviewcard__info">Profile</div>
          </div>
          <div className="overviewcard">
            <div className="overviewcard__icon">
              <MdFavoriteBorder size={50} color="#1C3988" />
            </div>
            <div className="overviewcard__info">Favourites</div>
          </div>
        </div>
        <div className="main-cards">
          <div className="card">
            <img src="/images/perform2.jpg" className="first-card_img" alt="perform" />
            Performance
          </div>
          <div className="card">Card</div>
          <div className="card">Card</div>
        </div>
      </main>

    </div>

  );
}
