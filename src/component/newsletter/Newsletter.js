import React from "react";
import "./Newsletter.css";
const Newsletter = () => {
  return (
    <main className="newsletter-wrapper">
      <p>Great updates</p>

      <p>
        Sign up to our newsletter to get updates on events, news and
        opportunities
      </p>
      <div className="subscribe">
        <input type="text" placeholder="Username or email" />
        <button>Subscribe</button>
      </div>
    </main>
  );
};
export default Newsletter;
