import React from "react";
import "./Footer.css";
import Linkedin from "../../images/Linkedin.png";
import Facebook from "../../images/Facebook.png";
import Instagram2 from "../../images/Instagram2.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="f-icons">
        <img src={Linkedin} alt=""/>
        <img src={Facebook} alt=""/>
        <img src={Instagram2} alt=""/>
      </div>

      <span>tejodeepmitraroy2002@gmail.com</span>
    </div>
  );
};

export default Footer;
