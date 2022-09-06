import React from "react";
import jwt_decode from "jwt-decode";

import Sidebar from "../../components/sidebar/Sidebar";
import DashboardNav from "./dashboardnav/DashboardNav";
import "./dashboard.css";
import Footer from "../../components/footer/Footer";



export default function Dashboard() {
  const getToken = localStorage.getItem("token")
  const decodedToken = jwt_decode(getToken)
  const { newUser } = decodedToken

  return (
    <>
      <DashboardNav />
      <div className="grid-container">
        <aside className="sidenav">
          <Sidebar />
        </aside>
        <div className="dashboard-content">
          {/* <div className="menu-icon">
        <i className="fas fa-bars"></i>
      </div> */}
          {/* <header className="header">
        <div className="header__search">Search...</div>
        <div className="header__avatar">Your face</div>
      </header> */}
          {/* <aside className="sidenav">
        <div className="sidenav__close-icon">
          <i className="fas fa-times"></i>
        </div>
        <ul className="sidenav__list">
          <li className="sidenav__list-item">Item one</li>
          <li className="sidenav__list-item">Item two</li>
          <li className="sidenav__list-item">Item three</li>
          <li className="sidenav__list-item">Item four</li>
          <li className="sidenav__list-item">Item five</li>
        </ul>
      </aside> */}
          <main className="main">
            <div className="main-header">
              <div className="main-header_container">
                <div className="main-header__wrapper">
                <span className="main-header__heading">Hello {newUser.first_name}</span>
                <div className="main-header__list">
                  <a href="#">
                    <span className="main-header__text">
                      Messages "0"
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
                  <i class="fa fa-dashboard fa-5x" aria-hidden="true" ></i>
                </div>
                <div className="overviewcard__info">Properties</div>
              </div>
              <div className="overviewcard">
                <div className="overviewcard__icon">
                  <i class="fa fa-id-card-o fa-5x" aria-hidden="true" ></i>
                </div>
                <div className="overviewcard__info">Subscription</div>
              </div>
              <div className="overviewcard">
                <div className="overviewcard__icon">
                  <i className="fa fa-user fa-5x" aria-hidden="true" ></i>
                </div>
                <div className="overviewcard__info">Profile</div>
              </div>
              <div className="overviewcard">
                <div className="overviewcard__icon">Overview</div>
                <div className="overviewcard__info">Card</div>
              </div>
            </div>
            <div className="main-cards">
              <div className="card">
                <img src="/images/perform.jpg" alt="perform" />
                Performance
              </div>
              <div className="card">Card</div>
              <div className="card">Card</div>
            </div>
            <Footer />
          </main>
        </div>
        {/* <footer className="footer">
        <div className="footer__copyright">&copy; 2019 BB</div>
        <div className="footer__signature">Made with love by pure genius</div>
      </footer> */}
      </div>
      {/* <div className="dashboard-container">
        <DashboardNav />
        <div className="dashboard-wrapper">
          <Sidebar />
          <div className="dashboard-content">
            <div className="first-card-container">
            <div className="first-card">
              <div class="db-container">
                <i class="fa fa-dashboard fa-5x" aria-hidden="true" ></i>
                <h1 className="db-name">Properties</h1>
              </div>
            </div>
            <div className="second-card">
            <div class="db-container">
                <i class="fa fa-id-card-o fa-5x" aria-hidden="true" ></i>
                <h1 className="db-name">Subscription</h1>
              </div>
            </div>
            </div>
 
            <div className="card">
              <div className="db-container">
                <i className="fa fa-user fa-5x" aria-hidden="true" ></i>
                <h1 className="db-name">Profile</h1>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}
