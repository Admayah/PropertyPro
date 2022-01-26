import { useState } from "react";

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
        <a href="#" className="property-area-link">
          {listLink}
        </a>
      </li>
    );
  });
  return (
    <>
      <div className="accordion-header">
        <span>{header}</span>
        <span className="arrow-icons"> {arrow ? arrowUp : arrowDown}</span>
      </div>
      <ul className={arrow ? "show-more-about-company" : "hide-more-about-company"}>
        {listArray}
      </ul>
    </>
  );
};
