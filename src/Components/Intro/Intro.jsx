import React from "react";
import LinkedIn from "../../images/Linkedin.png";
import Github from "../../images/Github.png";
import Instagram from "../../images/Instagram.png";
import ProfilePic from "../../images/Profile-pic.jpg";
import "./Intro.css";

const Intro = () => {
  return (
    <div className="i-wrapper" id="home">
      <div className="i-left">
        <div className="socials">
          <img src={LinkedIn} />
          <img src={Github} />
          <img src={Instagram} />
        </div>
        <div className="i-name">
          <span>HI I'm</span>
          <span>Tejodeep Mitra Roy</span>
          <span>Frontend Developer</span>
          <span>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </span>

          <div className="contactMeBox">
            <span>Contact Me</span>
          </div>
        </div>
      </div>

      <div className="i-right">
        <img src={ProfilePic} />
      </div>
    </div>
  );
};

export default Intro;
