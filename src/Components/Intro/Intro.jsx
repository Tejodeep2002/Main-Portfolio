import React from "react";
import LinkedIn from "../../images/Linkedin.png";
import Github from "../../images/Github.png";
import Instagram from "../../images/Instagram.png";
import ProfilePic from "../../images/Profile-pic.jpg";
import "./Intro.css";
import { themeContext } from "../../Context";
import { useContext } from "react";
import Typewriter from "typewriter-effect";
import { NaturePeopleSharp } from "@mui/icons-material";
import { Link } from "react-scroll";

const Intro = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="i-wrapper">
      <div className="socials">
        <a
          href="https://www.linkedin.com/in/tejodeep-mitra-roy/"
          target="_blank"
        >
          <img src={LinkedIn} />
        </a>
        <a href="https://github.com/Tejodeep2002" target="_blank">
          <img src={Github} />
        </a>
        <a href="" target="_blank">
          <img src={Instagram} />
        </a>
      </div>
      <div className="i-name">
        <span>HI I'm</span>
        <span>Tejodeep Mitra Roy</span>
        <Typewriter
          options={{
            strings: ["Frontend Developer", "UX Designer", "Video Editor"],
            autoStart: true,
            loop: true,
            delay: "natural",
          }}
        />
        <span>
          Hi, I'm Tejodeep Mitra Roy, a skilled web developer with a passion for
          creating dynamic and user-friendly websites.👋👋
        </span>

        <Link
        spy={true}
        to="contact"
        smooth={true}
        className="contactMeBox"
          style={
            darkMode
              ? { borderColor: "var(--white)" }
              : { borderColor: "black" }
          }
        >
          Contact Me
        </Link>
      </div>

      <div className="i-right">
        <img
          src={ProfilePic}
          style={
            darkMode
              ? { borderColor: "var(--white)" }
              : { borderColor: "black" }
          }
        />
      </div>
    </div>
  );
};

export default Intro;
