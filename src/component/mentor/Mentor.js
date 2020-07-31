import React from "react";
import imgOne from "../../assets/images/KillerMike.png";
import imgTwo from "../../assets/images/Timbaland.png";
import imgThree from "../../assets/images/wrapper.png";
import "./Mentor.css";

const Mentor = () => {
  return (
    <main className="mentor-wrapper">
      <p>Our Mentors</p>
      <div className="mentor-card">
        <div className="mentor-container">
          <div
            style={{
              backgroundImage: `url(${imgOne})`,
              width: "500px",
              height: "300px",
              backgroundSize: "cover",
            }}
          />
          <p style={{ marginTop: "5.5rem" }}>Killer Mike</p>
          <p>
            Timothy Zachary Mosley, known professionally as Timbaland, is an
            American record producer, rapper, singer, songwriter, and DJ.
            Timbaland's first full credit production work was in 1996 on
            Ginuwine...the Bachelor for R&B singer Ginuwine.
          </p>
        </div>

        <div className="mentor-container">
          <div
            style={{
              backgroundImage: `url(${imgTwo})`,
              width: "590px",
              height: "300px",
              backgroundSize: "cover",
            }}
          />
          <div className="arrow-wrapper">
            <span> &#x27f5; </span>
            <span> &#x27f6;</span>
          </div>
          <p>Timbaland</p>
          <p>
            Timothy Zachary Mosley, known professionally as Timbaland, is an
            American record producer, rapper, singer, songwriter, and DJ.
            Timbaland's first full credit production work was in 1996 on
            Ginuwine...the Bachelor for R&B singer Ginuwine.
          </p>
        </div>
        <div className="mentor-container">
          <div
            style={{
              backgroundImage: `url(${imgThree})`,
              width: "500px",
              height: "300px",
              backgroundSize: "cover",
            }}
          />
          <p style={{ marginTop: "5.5rem" }}>Chance the Rapper</p>
          <p>
            Timothy Zachary Mosley, known professionally as Timbaland, is an
            American record producer, rapper, singer, songwriter, and DJ.
            Timbaland's first full credit production work was in 1996 on
            Ginuwine...the Bachelor for R&B singer Ginuwine.
          </p>
        </div>
      </div>
    </main>
  );
};
export default Mentor;
