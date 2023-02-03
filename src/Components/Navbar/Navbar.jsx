import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  

  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-logo">Tejodeep</div>
      </div>

      <div className="n-right">
        {/* <Toggle/> */}
        <div className="n-list">
          <ul>
            <li>
              <Link
                spy={true}
                to="home"
                smooth={true}
                style={
                  darkMode ? { color: "var(--white)" } : { color: "black" }
                }
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                spy={true}
                to="about"
                smooth={true}
                style={
                  darkMode ? { color: "var(--white)" } : { color: "black" }
                }
              >
                About
              </Link>
            </li>
            <li>
              <Link
                spy={true}
                to="skills"
                smooth={true}
                style={
                  darkMode ? { color: "var(--white)" } : { color: "black" }
                }
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                spy={true}
                to="qualification"
                smooth={true}
                style={
                  darkMode ? { color: "var(--white)" } : { color: "black" }
                }
              >
                Qualification
              </Link>
            </li>
            <li>
              <Link
                spy={true}
                to="projects"
                smooth={true}
                style={
                  darkMode ? { color: "var(--white)" } : { color: "black" }
                }
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                spy={true}
                to="contact"
                smooth={true}
                style={
                  darkMode ? { color: "var(--white)" } : { color: "black" }
                }
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        {/* <div className="n-list">
          <ul>
            <li>
              <Link
                spy={true}
                to="home"
                smooth={true}
                style={
                  darkMode ? { color: "var(--white)" } : { color: "black" }
                }
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                spy={true}
                to="about"
                smooth={true}
                style={
                  darkMode ? { color: "var(--white)" } : { color: "black" }
                }
              >
                About
              </Link>
            </li>
            <li>
              <Link
                spy={true}
                to="skills"
                smooth={true}
                style={
                  darkMode ? { color: "var(--white)" } : { color: "black" }
                }
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                spy={true}
                to="qualification"
                smooth={true}
                style={
                  darkMode ? { color: "var(--white)" } : { color: "black" }
                }
              >
                Qualification
              </Link>
            </li>
            <li>
              <Link
                spy={true}
                to="projects"
                smooth={true}
                style={
                  darkMode ? { color: "var(--white)" } : { color: "black" }
                }
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                spy={true}
                to="contact"
                smooth={true}
                style={
                  darkMode ? { color: "var(--white)" } : { color: "black" }
                }
              >
                Contact
              </Link>
            </li>
          </ul>
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
