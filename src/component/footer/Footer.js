import React from "react";

import "./Footer.css";

const header = ["Store", "Account", "Catalog"];
const Footer = () => {
  return (
    <main className="footer-wrapper">
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
      <div>Gidara Your music career success partner</div>
      <div> right socila media</div>
    </main>
  );
};
export default Footer;
