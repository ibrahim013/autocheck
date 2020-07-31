import React from "react";

import "./Footer.css";

const header = ["Store", "Account", "Catalog"];
const Footer = () => {
  return (
    <main className="footer-wrapper">
      <div className="footer-aside">
        {header.map((item) => (
          <div className="footer-link">
            <p>{item}</p>
            <ul>
              <li>Catalog </li>
              <li>Popular </li>
              <li>Features</li>
            </ul>
          </div>
        ))}
        <div className="footer-side">
          <p>Gidara</p>
          <p>Your music career success partner</p>
        </div>
      </div>
      <div className="footer-copyright"> © 2018. All rights reserved</div>
    </main>
  );
};
export default Footer;
