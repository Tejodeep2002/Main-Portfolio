import React from "react";
import "./SkillsBox.css";

const SkillsBox = ({ heading, language }) => {
  return (
    <div className="skillsbox">
      <div className="skillsbox-head">
        <span>{heading}</span>
      </div>
      <div className="skills-sec">
        {language.map((items) => (
          <div className="skills-sec-left">
            <span>{items.language}</span>

            <div className="progress-bar">
              <div
                className="inner-bar"
                style={{ width: `${items.progress}rem`,background: 'red' }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsBox;
