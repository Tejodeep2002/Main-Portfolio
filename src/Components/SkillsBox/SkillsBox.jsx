import React from "react";
import "./SkillsBox.css";
import { themeContext } from "../../Context";
import { useContext } from "react";

const SkillsBox = ({ heading, language }) => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="skillsbox" style={darkMode ? {"color":"black"}:null}>
      <div className="skillsbox-head">
        <span>{heading}</span>
      </div>
      <div className="skills-sec">
        {language.map((items,value) => (
          <div className="skills-sec-left" key={value}>
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
