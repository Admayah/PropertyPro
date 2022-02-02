import { useState } from "react";
import { Link } from "react-router-dom";

export const FooterListArray = ({ header, links }) => {
  const [arrow, setArrow] = useState(false);
  const arrowHandler = () => {
    setArrow(!arrow);
  };
  const arrowUp = <i className="fa fa-sort-up" onClick={arrowHandler}></i>;
  const arrowDown = <i className="fa fa-sort-down" onClick={arrowHandler}></i>;

  const listArray = links.map((listLink, index) => {
    return (
      <li className="property-area" key={index}>
        <Link to="#" className="property-area-link">
          {listLink}
        </Link>
      </li>
    );
  });
  return (
    <>
      <div className="accordion-header">
        <span>{header}</span>
        <span className="arrow-icons"> {arrow ? arrowUp : arrowDown}</span>
      </div>
      <ul
        className={
          arrow ? "show-more-about-company" : "hide-more-about-company"
        }>
        {listArray}
      </ul>
    </>
  );
};
