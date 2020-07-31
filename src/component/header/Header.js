import React from "react";
import "./Header.css";

const headerLink = [
  {
    title: "Companies",
    route: "#",
  },
  {
    title: "Team",
    route: "#",
  },
  {
    title: "Resources",
    route: "#",
  },
  {
    title: "Programs",
    route: "#",
  },
  {
    title: "Blog",
    route: "#",
  },
  {
    title: "Contact",
    route: "#",
  },
];

const Header = () => {
  return (
    <header className="header">
      <div>Logo</div>
      <ul>
        {headerLink.map((link, index) => (
          <li key={index}> {link.title}</li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
