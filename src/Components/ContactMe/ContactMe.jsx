import "./ContactMe.css";
import Email from "../../images/email.png";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { themeContext } from "../../Context";
import { useContext } from "react";

const ContactMe = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  const [done, setDone] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_h9ehi27",
        "template_6eb4zfp",
        form.current,
        "Zi2fxi6sMKHhiVVP6"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          setTimeout(() => {
            setDone(false);
          }, 6000);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-me" id="contact">
      <div
        className="cm-wrapper"
        style={
          darkMode ? { borderColor: "var(--white)" } : { borderColor: "black" }
        }
      >
        <div className="cm-left">
          <div className="contact-box">
            <span style={darkMode ? { color: "black" } : null}>
              <img src={Email} alt="" />
              email:
            </span>

            <a href="mailto:tejodeepmitraroy2002@gmail.com">
              tejodeepmitraroy2002@gmail.com
            </a>
          </div>
        </div>
        <div
          className="cm-middle"
          style={
            darkMode
              ? { backgroundColor: "var(--white)" }
              : { backgroundColor: "black" }
          }
        ></div>
        <div className="cm-right">
          <span>Contact Me</span>

          {done ? (
            <span style={{ fontSize: "2rem", fontWeight: "bold" }}>
              Thanks For Contact
            </span>
          ) : (
            <form ref={form} onSubmit={sendEmail}>
              <input
                type="text"
                name="user_name"
                className="user"
                placeholder="Name"
              />
              <input
                type="email"
                name="user_email"
                className="user"
                placeholder="E-mail"
              />
              <textarea
                name="message"
                className="message"
                placeholder="Message"
              />
              <input
                type="submit"
                value="Send"
                className="button"
                style={
                  darkMode
                    ? { borderColor: "var(--white)" }
                    : { borderColor: "black" }
                }
              />
            </form>
          )}

          {/* <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="user_name"
              className="user"
              placeholder="Name"
            />
            <input
              type="email"
              name="user_email"
              className="user"
              placeholder="E-mail"
            />
            <textarea
              name="message"
              className="message"
              placeholder="Message"
            />
            <input
              type="submit"
              value="Send"
              className="button"
              style={
                darkMode
                  ? { "border-color": "var(--white)" }
                  : { "border-color": "black" }
              }
            />
          </form> */}
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
