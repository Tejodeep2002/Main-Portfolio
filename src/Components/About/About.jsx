import React from "react";
import "./About.css";
import profilePic from "../../images/Profile-pic.jpg";
import Circle from "../Circle/Circle";
import Resume from "../About/Resume.pdf";
import { themeContext } from "../../Context";
import { useContext } from "react";

const About = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="a-wrapper" id="about">
      <div
        className="about"
        style={
          darkMode ? { borderColor: "var(--white)" } : { borderColor: "black" }
        }
      >
        <div className="a-heading">
          <span>About Me</span>
          <span>My Introduction</span>
        </div>
        <div className="a-main">
          <div className="a-left">
            <img
              src={profilePic}
              alt=""
              style={
                darkMode
                  ? { borderColor: "var(--white)" }
                  : { borderColor: "black" }
              }
            />
          </div>
          <div className="a-right">
            <div className="experience-area">
              <Circle number={"1+"} text={"Experience"} />
              <Circle number={"20+"} text={"Projects"} />
              {/* <Circle number={23} text={"years"}/> */}
            </div>
            <div className="a-about">
              <span>Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the
              </span>
            </div>
            <div
              className="downloadCv"
              style={
                darkMode
                  ? { borderColor: "var(--white)" }
                  : { borderColor: "black" }
              }
            >
              <a href={Resume} target="_blank">
                Download CV
              </a>
            </div>
            <div className="blur b-blur1"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
