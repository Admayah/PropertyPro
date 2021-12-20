import React from "react";
import "./button.css";
import { Link } from "react-router-dom";

export default function Button({ path, text }) {
  return (
    <div className="button-container">
      <Link to={path}>
        <button className="button-wrapper">{text}</button>
      </Link>
    </div>
  );
}
