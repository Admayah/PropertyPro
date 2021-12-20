import "./footer.css";
import { FooterListArray } from "./footerListArray";
import {
  aboutCompany,
  CompanyOffers,
  moreAboutCompany,
} from "./staticData/dataMenu";
import { socialMenu } from "./staticData/socialMediaMenu";

export default function Footer() {
  return (
    <div className="footerContainer">
      <div className="footerFirstWrapper">
        <div className="footerFirstContainer">
          <div className="footerLeft">
            <img src="/images/logo.png" alt="" className="footerLogo" />
            <span className="footerLogoName">PropertyPro</span>
          </div>

          <div className="accordion">
            <div className="accordionsWrapper">
              <FooterListArray header="Company" links={aboutCompany} />
            </div>
            <div className="accordionsWrapper">
              <FooterListArray header="Offers" links={CompanyOffers} />
            </div>
            <div className="accordionsWrapper">
              <FooterListArray header="About Us" links={moreAboutCompany} />
            </div>
          </div>
        </div>
        <div className="SocialMenu">
          <div className="socialIcons">
            {socialMenu.map(({ href, icon }) => (
              <span className="socialIcon">
                <a href={href} className="navbarPropertyLink">
                  {icon}
                </a>
              </span>
            ))}
          </div>
          <div className="contactInfoContainer">
            <span className="contactInfo">
              {" "}
              <i className="fa fa-comment"></i> +234 576 8264 987
            </span>
            <span className="contactInfo">
              <i className="fa fa-envelope"></i>ayo@gmail.com
            </span>
          </div>
        </div>
      </div>
      <div className="copyrightContainer">
        <div className="footerLogoContainer">
          <img src="/images/logo.png" alt="" className="footerLogo" />
          <span className="footerLogoName">PropertyPro</span>
        </div>
        <div className="copyrightText">
          <span className="copyright">&copy; Coyright Reserved - 2021</span>
          <span className="location"> Based in Nigeria</span>
        </div>
      </div>
    </div>
  );
}
