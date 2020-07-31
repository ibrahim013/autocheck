import React from "react";
import "./About.css";
import imgOne from "../../assets/images/image1.png";
import imgTwo from "../../assets/images/image2.png";
import imgThree from "../../assets/images/image3.png";
const About = () => {
  return (
    <main className="about-wrapper">
      <div className="aside-title">
        <p>What we do</p>
      </div>
      <div className="company-info">
        <hr />
        <div className="about-heading">
          <p>You’re in great company</p>
          <p>
            Gidara seeks to connect young talented musicians with world class
            producers, managers etc
          </p>
          <span> &#x27f5; </span>
          <span> &#x27f6;</span>
        </div>
        <div className="about-card-wrapper">
          <div className="about-content">
            <div
              style={{
                width: "325px",
                height: "250px",
                backgroundImage: `url(${imgOne})`,
                backgroundSize: "cover",
              }}
            />
            <p>One</p>{" "}
            <p>
              Place any text you want here etc. We invest between N2m - N5m in
              marketing, production and promotional fees.
            </p>
          </div>
          <div className="about-content">
            <div
              style={{
                width: "325px",
                height: "250px",
                backgroundImage: `url(${imgTwo})`,
                backgroundSize: "cover",
              }}
            />
            <p>Two</p>{" "}
            <p>
              Place any text you want here etc. We invest between N2m - N5m in
              marketing, production and promotional fees.
            </p>
          </div>
          <div className="about-content">
            <div
              style={{
                width: "325px",
                height: "250px",
                backgroundImage: `url(${imgThree})`,
                backgroundSize: "cover",
              }}
            />
            <p>Three</p>
            <p>
              Place any text you want here etc. We invest between N2m - N5m in
              marketing, production and promotional fees.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};
export default About;
