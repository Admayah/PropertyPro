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
      <li className="propertyArea" key={index}>
        <a href="#" className="liLink">{listLink}</a>
      </li>
    );
  });
  return (
    <>
      <div className="accordionHeader">
        <span>{header}</span>
        <span className="arrowIcons"> {arrow ? arrowUp : arrowDown}</span>
      </div>
      <ul className={arrow ? "showMoreAboutCompany" : "hide"}>{listArray}</ul>
    </>
  );
};
