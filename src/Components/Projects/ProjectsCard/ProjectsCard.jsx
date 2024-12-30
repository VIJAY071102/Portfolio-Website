import React from "react";
import "./ProjectsCard.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function ProjectsCard({ details }) {
  return (
    <>
      <div className="projects-card">
        <h6>{details.title}</h6>
        <div className="project-duration">{details.date}</div>
        <ul>
          {details.description.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ProjectsCard;
