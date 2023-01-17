import React, { useState } from "react";
import "./Qualification.css";
import EduIcon from "../../images/Education-icon.png";
import ProfessIcon from "../../images/Suitcase-icon.png";
import QualiTree from "../QualiTree/QualiTree";

const Qualification = () => {
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
    <div className="qualification">
      <div className="q-wrapper">
        <div className="q-heading">
          <span>Qualification</span>
          <span>My personal journey</span>
        </div>
        <div className="q-main">
          <div className="q-section">
            <span
              onClick={handleEducation}
              style={
                selectToggle ? null : { "background-color": "var(--white)" }
              }
            >
              <img
                src={EduIcon}
                style={
                  selectToggle ? null : { "background-color": "var(--white)" }
                }
              />
              Education
            </span>
            <span
              onClick={handleExperience}
              style={
                selectToggle ? { "background-color": "var(--white)" } : null
              }
            >
              <img
                src={ProfessIcon}
                style={
                  selectToggle ? { "background-color": "var(--white)" } : null
                }
              />
              Experience
            </span>
            <div
              className="sec-toggle"
              style={
                selectToggle
                  ? { "margin-left": "11.5rem" }
                  : { "margin-left": "0rem" }
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
    </div>
  );
};

export default Qualification;
