import React, { useRef } from "react";
import "./Projects.css";
import Slider from "react-slick";
import { PROJECTS } from "../utils/data.js";
import ProjectsCard from "./ProjectsCard/ProjectsCard.jsx";

function Projects() {
  const sliderRef = useRef();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidsToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const slidRight = () => {
    sliderRef.current.slickNext();
  };
  const slidLeft = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <>
      <section className="projects-container">
        <h5>Projects</h5>
        <div className="projects-content">
          <div className="arrow-right" onClick={slidRight}>
            <span>
              <i className="material-icons">chevron_right</i>
            </span>
          </div>
          <div className="arrow-left" onClick={slidLeft}>
            <span>
              <i className="material-icons">chevron_left</i>
            </span>
          </div>

          <Slider ref={sliderRef} {...settings}>
            {PROJECTS.map((item) => (
              <ProjectsCard key={item.title} details={item} />
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
}

export default Projects;
