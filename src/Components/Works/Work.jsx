import React from 'react'
import './Work.css';
import w1 from '../../assets/lap1.jpeg';
import w2 from "../../assets/lap2.jpeg";
import w3 from "../../assets/lap3.jpeg";
import w4 from "../../assets/lap4.jpeg";
import w5 from "../../assets/lap5.jpeg";
import w6 from "../../assets/lap6.jpeg";
function Work() {
  return (
    <>
    <div className="works-container">
        <h1>My Recent Works</h1>
        <div className="works-list-container">
            <div className="works-item">
                <img src={w1} alt="work1" />
            </div>

            <div className="works-item">
                <img src={w2} alt="work2" />
            </div>

            <div className="works-item">
                <img src={w3} alt="work3" />
            </div>

            <div className="works-item">
                <img src={w4} alt="work4" />
            </div>

            <div className="works-item">
                <img src={w5} alt="work5" />
            </div>

            <div className="works-item">
                <img src={w6} alt="work6" />
            </div>
        </div>
    </div>
    </>
  )
}

export default Work