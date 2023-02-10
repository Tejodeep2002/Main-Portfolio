import React from "react";
import "./Footer.css";
import Linkedin from "../../images/Linkedin.png";
import Facebook from "../../images/Facebook.png";
import Instagram2 from "../../images/Instagram2.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="f-wrapper">
        <div className="f-icons">
          <a href="" target="_blank">
            <img src={Linkedin} alt="" />
          </a>
          <a href="" target="_blank">
            <img src={Facebook} alt="" />
          </a>
          <a href="" target="_blank">
            <img src={Instagram2} alt="" />
          </a>
        </div>
        <span>Copyright 2023 All right reserved </span>
        <span> This website is Depeloped by Tejodeep Mitra Roy</span>

      </div>
    </div>
  );
};

export default Footer;
