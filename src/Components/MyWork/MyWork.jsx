import React from "react";
import "./MyWork.css";
import { project } from "../utils/data.js";
import arrow_icon from "../../assets/images/arrow_icon.svg";
function MyWork() {
  return (
    <div className="mywork" id="work">
      <div className="mywork-title">
        <h1>My latest work</h1>
        <img src="" alt="" />
      </div>
      <div className="mywork-container">
        {project.map((work, index) => {
          return (
            <a href={work.url} key={index}>
              <img src={work.w_img} alt="" />
            </a>
          );
        })}
      </div>
      <div className="mywork-showmore">
        <p>Show More</p>
        <img src={arrow_icon} alt="" />
      </div>
    </div>
  );
}

export default MyWork;
