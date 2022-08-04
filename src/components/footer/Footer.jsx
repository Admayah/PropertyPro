import { Link } from "react-router-dom";
import { FooterListArray } from "./footerListArray";
import {
  aboutCompany,
  CompanyOffers,
  moreAboutCompany,
} from "./staticData/dataMenu";
import { socialMenu } from "./staticData/socialMediaMenu";
import "./footer.css";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-first-wrapper">
        <div className="footer-first-container">
          <div className="footer-left">
            <i className="fa fa-home footer-logo"></i>
            <span className="footer-logo-name">PropertyPro</span>
          </div>

          <div className="accordion">
            <div className="accordions-wrapper">
              <FooterListArray header="Company" links={aboutCompany} />
            </div>
            <div className="accordions-wrapper">
              <FooterListArray header="Offers" links={CompanyOffers} />
            </div>
            <div className="accordions-wrapper">
              <FooterListArray header="About Us" links={moreAboutCompany} />
            </div>
          </div>
        </div>
        <div className="social-menu">
          <div className="social-icons">
            {socialMenu.map(({ href, icon }, index) => (
              <span className="social-icon" key={index}>
                <a href={href} className="navbar-property-link">
                  {icon}
                </a>
              </span>
            ))}
          </div>
          <div className="contact-info-container">
            <span className="contact-info">
              {" "}
              <i className="fa fa-comment social-contact"></i> +234 576 8264 987
            </span>
            <span className="contact-info">
              <i className="fa fa-envelope social-contact"></i>ayo@gmail.com
            </span>
          </div>
        </div>
      </div>
      <div className="copyright-container">
        <div className="footer-logo-container">
          <img src="/images/logo.png" alt="" className="footer-logo" />
          <span className="footer-logo-name">PropertyPro</span>
        </div>
        <div className="copyright-text">
          <span className="copyright">&copy; Coyright Reserved - 2021</span>
          <button className="nav-to-dashboard"><Link to="/dashboard" className="nav-to-dashboard-link">dashboard</Link></button>
          <span className="location"> Based in Nigeria</span>
        </div>
      </div>
    </div>
  );
}
