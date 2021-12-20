import React from "react";
import Button from "../Button/Button";
import "./hero.css";

export default function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-wrapper">
        <div className="hero-background-img-container">
          <div className="hero-tagline-container">
            <div className="hero-tagline-header">
              <span className="tagline-text">
                Own, Live and Love your dream home
              </span>
            </div>
            <p className="hero-sub-tagline">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptas, laborum magnam. Esse exercitationem dolor, dolorum
              eveniet doloremque illum tenetur blanditiis voluptatibus
              doloribus, ratione, eos laboriosam.
            </p>
            <div className="hero-button-container">
              <Button text="BECOME AN AGENT" path="/signup"/>
              <Button text="ALREADY AN AGENT" path="/login"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
