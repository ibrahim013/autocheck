import React from "react";
import Header from "../component/header/Header";
import "./Home.css";
import Hero from "../component/hero/Hero";
import About from "../component/about/About";
import Mentor from "../component/mentor/Mentor";
import Resource from "../component/resource/Resource";
import Newsletter from "../component/newsletter/Newsletter";
import Footer from "../component/footer/Footer";

const HomePage = () => {
  return (
    <main>
      <section className="hero-section">
        <Header />
        <Hero />
      </section>
      <section>
        <About />
      </section>
      <section>
        <Mentor />
      </section>
      <section>
        <Resource />
      </section>
      <section>
        <Newsletter />
      </section>
      <section>
        <Footer />
      </section>
    </main>
  );
};
export default HomePage;
