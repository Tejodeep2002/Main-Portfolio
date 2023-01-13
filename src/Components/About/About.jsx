import React from "react";
import "./About.css";
import profilePic from "../../images/Profile-pic.jpg";
import Circle from "../Circle/Circle";

const About = () => {
  return (
    <div className="a-wrapper">
      <div className="about">
        <div className="a-heading">
          <span>About Me</span>
          <span>My Introduction</span>
        </div>
        <div className="a-main">
          <div className="a-left">
            <img src={profilePic} alt="" srcset="" />
          </div>
          <div className="a-right">
            <div className="experience-area">
              <Circle number={"1+"} text={"Experience"} />
              <Circle number={"20+"} text={"Projects"} />
              {/* <Circle number={23} text={"years"}/> */}
            </div>
            <div className="a-about">
              <span>Lorem Ipsum is simply dummy text of the printing and </span>
              <span>
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the
              </span>
            </div>
            <div className="downloadCv">
              <span>Download CV</span>
            </div>
            <div className="blur b-blur1"></div>
          </div>
          
        </div>
        
      </div>
    </div>
  );
};

export default About;
