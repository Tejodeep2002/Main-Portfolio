import React from "react";
import "./TopArrow.css";
import UpArrow from "../../images/up-arrow.png";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { Link } from "react-scroll";

const TopArrow = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="toparrow"
      style={
        darkMode ? { borderColor: "var(--white)" } : { borderColor: "black" }
      }
    >
      {/* <a href='#home'><img src={UpArrow} alt="" /></a> */}
      <Link spy={true} to="home" smooth={true}>
        <img src={UpArrow} alt="" />
      </Link>
    </div>
  );
};

export default TopArrow;
