import React from "react";
import imgOne from "../../assets/images/image1.png";
import imgTwo from "../../assets/images/image2.png";
import imgThree from "../../assets/images/image3.png";
import "./Resource.css";

const Resource = () => {
  return (
    <main className="about-wrapper">
      <div className="aside-title">
        <p>Resource</p>
      </div>
      <div className="company-info">
        <hr />
        <div className="about-heading">
          <p>Resources for student artists</p>
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
        <div className="button-wrapper">
          <div className="button">
            VIEW ALL RESOURCES <span> &#x27f6;</span>
          </div>
        </div>

        <hr />
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
        <div className="button-wrapper">
          <div className="button">
            VIEW ALL RESOURCES <span> &#x27f6;</span>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Resource;
