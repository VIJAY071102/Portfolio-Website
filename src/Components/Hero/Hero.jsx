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
      <section className="hero-container" id="home">
        <div className="hero-content">
          <h2>Transforming Code into Creativity</h2>
          <p>
            Innovative MERN stack developer | Delivering modern and intuitive
            solutions for the digital age.
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
