import React from "react";
import "./ContactMe.css";
import Email from "../../images/email.png";

const ContactMe = () => {
  return (
    <div className="contact-me">
      <div className="cm-wrapper">
        <div className="cm-left">
          <div className="contact-box">
            <span>
              <img src={Email} alt="" />
              email:
            </span>

            <a href="mailto:tejodeepmitraroy2002@gmail.com">
              tejodeepmitraroy2002@gmail.com
            </a>
          </div>
          
        </div>
        <div className="cm-middle"></div>
        <div className="cm-right">
          <span>Contact Me</span>
          <input type="text" placeholder="Name"/>
          <input type="email" placeholder="E-mail" />
          <textarea placeholder="Message"/>
          <button>Send</button>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
