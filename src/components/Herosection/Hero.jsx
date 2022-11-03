import React from "react";
import { useNavigate } from "react-router-dom";
import Btn from "../Btn/Btn";
import "./hero.css";

export default function Hero() {
  const navigate = useNavigate();
  return (
    <div className="hero-container">
      <div className="hero-wrapper">
        <div className="hero-background-img-container">
          <div className="hero-tagline-container">
            <div className="hero-tagline-header">
              <span className="tagline-text">
                Amazing Homes
              </span>
            </div>
            <p className="hero-sub-tagline">
              This is where your story begins
              {/* Summarizing the end goal that everyone has for moving houses in
              the first place, 9japroperty-pro Real Estate hit the nail on
              the head with this short and sweet slogan. */}
            </p>
            <Btn value="BECOME AN AGENT" 
            clickHandler={() => navigate('/signup')} 
            type="submit" className="button-container" />
          </div>
        </div>
      </div>
    </div>
  );
}
