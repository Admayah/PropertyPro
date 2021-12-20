import React from "react";
import "./button.css";

export default function Button({ props }) {
  return (
    <div className="buttonContainer">
      <a href="#">
        <button className="buttonWrapper">BECOME AN AGENT</button>
      </a>
    </div>
  );
}
