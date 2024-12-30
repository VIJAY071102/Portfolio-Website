import React from "react";
import profile from "../../assets/images/profile-photo.jpg";
import react from "../../assets/images/react-icon.png";
import html from "../../assets/images/html-icon.png";
import js from "../../assets/images/js-icon.png";
import css from "../../assets/images/css-icon.png";
import "./Hero.css";
function Hero() {
  return (
    <>
      <section className="hero-container">
        <div className="hero-content">
          <h2>Building Digital Experiences that inspire</h2>
          <p>
            passionate frontend developer| transforming ideas into seamless and
            visually stunning web solutions
          </p>
        </div>
        <div className="hero-img">
          <div>
            <div className="tech-icon">
              <img src={react} alt="react" />
            </div>
            <img src={profile} alt="" />
          </div>
          <div>
            <div className="tech-icon">
              <img src={html} alt="" />
            </div>
            <div className="tech-icon">
              <img src={css} alt="" />
            </div>
            <div className="tech-icon">
              <img src={js} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
