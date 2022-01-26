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
                Love Where You Live
              </span>
            </div>
            <p className="hero-sub-tagline">
              Summarizing the end goal that everyone has for moving houses in
              the first place, 9japroperty-pro Real Estate hit the nail on
              the head with this short and sweet slogan.
            </p>
            <div className="hero-button-container">
              <Button text="BECOME AN AGENT" path="/signup" />
              <Button text="ALREADY AN AGENT" path="/login" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
