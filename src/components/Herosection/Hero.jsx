import React from "react";
import Button from "../Button/Button";
import "./hero.css";

export default function Hero() {
  return (
    <div className="heroContainer">
      <div className="heroWrapper">
        <div className="heroBackgroundImgContainer">
          <div className="heroTaglineContainer">
            <div className="heroTaglineHeader">
              <span className="TaglineText">
                Own, Live and Love your dream home
              </span>
            </div>
            <p className="heroSubTagline">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptas, laborum magnam. Esse exercitationem dolor, dolorum
              eveniet doloremque illum tenetur blanditiis voluptatibus
              doloribus, ratione, eos laboriosam.
            </p>
            <div className="heroButtonContainer">
              <Button />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
