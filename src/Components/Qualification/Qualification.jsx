import React, { useState } from "react";
import "./Qualification.css";
import EduIcon from "../../images/Education-icon.png";
import ProfessIcon from "../../images/Suitcase-icon.png";
import QualiTree from "../QualiTree/QualiTree";
import { themeContext } from "../../Context";
import { useContext } from "react";

const Qualification = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const [selectToggle, setSelectToggle] = useState(false);

  const handleEducation = () => {
    setSelectToggle(false);
  };

  const handleExperience = () => {
    setSelectToggle(true);
  };

  const education = [
    { name: "Techno Main Saltlake", year: "2020-2021" },
    { name: "Dum Dum Krishna Kumar Hindu Academy", year: "2020-2013" },
  ];
  const experience = [
    { name: "Xanther Services", year: "2020-Present" },
    { name: "", year: "" },
  ];
  return (
    <div className="qualification" id="qualification">
      <div
        className="q-wrapper"
        style={
          darkMode ? { borderColor: "var(--white)" } : { borderColor: "black" }
        }
      >
        <div className="q-heading">
          <span>Qualification</span>
          <span>My personal journey</span>
        </div>
        <div className="q-main">
          <div
            className="q-section"
            style={darkMode ? { color: "var(--white)" } : { color: "black" }}
          >
            <span
              onClick={handleEducation}
              style={
                selectToggle
                  ? null
                  : darkMode
                  ? { backgroundColor: "var(--white)", color: "black" }
                  : { backgroundColor: "var(--white)" }
              }
            >
              <img
                src={EduIcon}
                style={
                  selectToggle ? null : { backgroundColor: "var(--white)" }
                }
              />
              Education
            </span>
            <span
              onClick={handleExperience}
              style={
                selectToggle
                  ? darkMode
                    ? { backgroundColor: "var(--white)", color: "black" }
                    : { backgroundColor: "var(--white)" }
                  : null
              }
            >
              <img
                src={ProfessIcon}
                style={
                  selectToggle ? { backgroundColor: "var(--white)" } : null
                }
              />
              Experience
            </span>
            <div
              className="sec-toggle"
              style={
                selectToggle
                  ? { marginLeft: "11.5rem" }
                  : { marginLeft: "0rem" }
              }
            ></div>
          </div>
          <div className="q-tree">
            {selectToggle ? (
              <QualiTree qualification={experience} />
            ) : (
              <QualiTree qualification={education} />
            )}
          </div>
        </div>
      </div>
      <div className="blur b-blur4"></div>
      <div className="blur b-blur5"></div>
      <div className="blur b-blur6"></div>
    </div>
  );
};

export default Qualification;
